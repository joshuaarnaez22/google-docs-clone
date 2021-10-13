import NextAuth from "next-auth"
import GoogleProvider from 'next-auth/providers/google'
import { FirebaseAdapter } from "@next-auth/firebase-adapter"
import db from "../../../firebase"
// import { redirect } from "next/dist/server/api-utils"x


export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: '974140854338-2q4prv69e8fl59g1l8lenk43e6frs43r.apps.googleusercontent.com',
      clientSecret: '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',
    }),
    // ...add more providers here
  ],
  adapter : FirebaseAdapter(db)
  
})