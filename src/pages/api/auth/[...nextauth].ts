import { signIn } from 'next-auth/react';
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        })
    ],
    pages:{
        signIn:"/login"
    },
    secret:"fjdlafdfoeir dfk4k34k34343n v343j434k3lk43k"
}

export default NextAuth(authOptions)