import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next"
import CredentialsProvider from "next-auth/providers/credentials";
import { QueryResult } from "pg";
const pool = require('@/lib/db')
const bcrypt = require('bcrypt')

export const authOptions: NextAuthOptions = {
    session: {
        strategy: "jwt",
        maxAge: 60 * 60
    },
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. "Sign in with...")
            name: "Credentials",
            // `credentials` is used to generate a form on the sign in page.
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
                email: {},
                password: {}
            },
            async authorize(credentials, req) {

                const query: QueryResult = await pool.query('select * from customers where email = $1', [credentials?.email])
                if (query.rows.length) {
                    let user = query.rows[0]
                    const passwordMatch = await bcrypt.compare(credentials?.password, user.password_hash);
                    console.log(passwordMatch, user)
                    if (!passwordMatch) {
                        throw new Error('Password does not match')
                    } else {
                        return user
                    }

                } else {
                    throw new Error('User not found')
                }
            }
        })
    ]
}

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST }