import NextAuth from "next-auth/next";

import GitHubProvider from "next-auth/providers/github";

// export async function GET(request) {}
 
// export async function HEAD(request) {}
 
// export async function POST(request) {}

export const authoptions = NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    })
  ]
})

export { authoptions as GET, authoptions as POST}


