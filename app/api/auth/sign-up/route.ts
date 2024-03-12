import { NextResponse } from "next/server";
import { QueryResult } from "pg";

const bcrypt = require("bcrypt");
const pool = require('@/lib/db')
const saltRounds = 10;

export async function POST(
    req: Request,
    res: Response
) {
    try {

        let { fullname, email, password }: any = await req.json()

        if (!fullname || !email || !password) {
            return new NextResponse('Fill all the input fields', { status: 400 })
        }

        const checkQuery = "SELECT * FROM customers where email = $1";

        const alreadyExist: QueryResult = await pool.query(checkQuery, [email])

        if (!validateEmail(email)) {
            return NextResponse.json({ message: 'Invalid email' }, { status: 400 });
        }

        if (alreadyExist.rows.length > 0) {
            return NextResponse.json({ message: 'Customer with this email already exists' }, { status: 400 })
        }


        bcrypt.hash(password, saltRounds, async function (err: any, hash: any) {
            if (err) return NextResponse.json({ message: err }, { status: 400 });
            const insertQuery = "INSERT INTO customers ( email, password_hash, fullname) VALUES ($1, $2, $3)";
            await pool.query(insertQuery, [email, hash, fullname])
        });
        return NextResponse.json({ message: 'Customer account successfully created' });
    } catch (err) {
        return NextResponse.json({ message: 'Failed to create customer account' }, { status: 400 })
    }
}


function validateEmail(email: string) {
    const containsUppercase = /[A-Z]/.test(email);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/;

    if (containsUppercase) {
        return false;
    }
    return emailRegex.test(email);
}


