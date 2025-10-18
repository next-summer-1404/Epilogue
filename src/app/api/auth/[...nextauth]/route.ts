// import NextAuth, { NextAuthOptions } from 'next-auth'
// import GoogleProvider from "next-auth/providers/google"
// import GitHubProvider from "next-auth/providers/github"

// const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID!
// const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET!

// export const authOptions: NextAuthOptions = {
//   session: {
//     strategy: 'jwt' 
//   },
//   providers: [
//     GoogleProvider({
//       clientId: GOOGLE_CLIENT_ID,
//       clientSecret: GOOGLE_CLIENT_SECRET
//     }),
//     GitHubProvider({
//       clientId: process.env.GITHUB_CLIENT_ID!,
//       clientSecret: process.env.GITHUB_CLIENT_SECRET!
//     })
//   ],
//   callbacks: {
//     // async signIn({ profile }) {
//     //   if (!profile?.email) {
//     //     throw new Error('No email found')
//     //   }
//     //   return true
//     // },
//     async signIn({ profile }) {
//   console.log('DEBUG Profile:', JSON.stringify(profile, null, 2))
//   return true
// },
    
//     async jwt({ token, user }) {
//       if (user) {
//         token.id = user.id
//         token.email = user.email
//         token.name = user.name
//       }
//       return token
//     },
    
//     async session({ session, token }) {
//       return {
//         ...session,
//         user: {
//           ...session.user,
//           id: token.id as string,
//           email: token.email as string,
//           name: token.name as string
//         }
//       }
//     },
    
//     async redirect({ baseUrl }) {
//       return `${baseUrl}/dashboard`
//     }
//   }
// }

// const handler = NextAuth(authOptions)
// export { handler as GET, handler as POST }


// import NextAuth, { NextAuthOptions } from 'next-auth';
// import GoogleProvider from "next-auth/providers/google";
// import GitHubProvider from "next-auth/providers/github";

// const googleOptions = {
//   clientId: process.env.GOOGLE_CLIENT_ID!,
//   clientSecret: process.env.GOOGLE_CLIENT_SECRET!
// };

// const githubOptions = {
//   clientId: process.env.GITHUB_CLIENT_ID!,
//   clientSecret: process.env.GITHUB_CLIENT_SECRET!
// };

// export const authOptions: NextAuthOptions = {
//   session: {
//     strategy: 'jwt'
//   },
//   providers: [
//     GoogleProvider(googleOptions),
//     GitHubProvider(githubOptions)
//   ],
//   callbacks: {
//     async signIn({ profile }) {
//       console.log('DEBUG Profile:', JSON.stringify(profile, null, 2));
//       return true;
//     },
//     async jwt({ token, user }) {
//       if (user) {
//         token = { ...token, id: user.id, email: user.email, name: user.name };
//       }
//       return token;
//     },
//     async session({ session, token }) {
//       session.user = { ...session.user, id: token.id, email: token.email, name: token.name };
//       return session;
//     },
//     async redirect({ url, baseUrl }) {
//       return baseUrl + '/dashboard';
//     }
//   }
// };

// const handler = NextAuth(authOptions);
// export { handler as GET, handler as POST };


//////////////////////////////////
import NextAuth, { NextAuthOptions } from 'next-auth';
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt'
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      console.log('SignIn Callback - User:', user);
      console.log('SignIn Callback - Account:', account);
      console.log('SignIn Callback - Profile:', profile);
      
      // بررسی کنید که اطلاعات کاربر کامل است
      if (!user.email) {
        return false; // اگر ایمیل ندارید، اجازه ندهید
      }
      return true;
    },
    async jwt({ token, user, account, profile }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.email = token.email as string;
        session.user.name = token.name as string;
      }
      return session;
    },
    async redirect({ url, baseUrl }) {
      if (url.startsWith(baseUrl)) {
        return url;
      } else if (url.startsWith('/')) {
        return `${baseUrl}${url}`;
      }
      return baseUrl + '/dashboard';
    }
  },
  debug: true, 
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };