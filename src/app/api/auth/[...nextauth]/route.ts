
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const nextAuthOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                email: { label: 'E-mail', type: 'email' },
                password: { label: 'Senha', type: 'password'}
            },
            async authorize(credentials, req){
                const resultado = await prisma.usuario.findFirst({ where: { email:  credentials?.email, senha: credentials?.password} })

                if(resultado){
                    return resultado; 
                }

                return null as any ;
            },
        })
    ],
    pages: {
        signIn: '/'
    },
    callbacks: {
        async jwt({ token, user }){
            user && (token.user = user)
            return token
        },
        async session({session, token}){

            session = token as any;

            return session
        }
    }
}

const handler = NextAuth(nextAuthOptions);

export { handler as GET, handler as POST, nextAuthOptions}