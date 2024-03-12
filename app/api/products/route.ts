import { NextRequest, NextResponse } from "next/server";
import { QueryResult } from "pg";
const pool = require('@/lib/db')

export async function GET(
    req: NextRequest
) {
    try {
        const query = `select p.*, ci.url as cover_image_url from products p join cover_images ci on p.cover_image = ci.id
        `
        const products: QueryResult = await pool.query(query)
        if (products.rows.length) {
            return NextResponse.json(products.rows, { status: 200 });
        }
        return NextResponse.json({ message: 'No products found' }, { status: 200 });
    } catch (err) {
        return NextResponse.json({ message: 'Failed to get products' }, { status: 400 });
    }
}