import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: "641884596744-b0lkl1ltm4h6s9dq7526d4kc9esklugd.apps.googleusercontent.com",
      clientSecret:"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"
    })
  ],
}

// export default NextAuth(authOptions)
const handler=NextAuth(authOptions);
export {handler as GET, handler as POST}