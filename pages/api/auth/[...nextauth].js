import NextAuth from "next-auth";
import TwitterProvider from "next-auth/providers/twitter";
import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";
import Auth0Provider from "next-auth/providers/auth0";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "../../../models/user";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "./lib/mongodb";
import bcrypt from "bcrypt";
import db from "../../../utils/db";

// Establish MongoDB connection
db.connectDb();

export default NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "user@example.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const email = credentials.email;
        const password = credentials.password;
        const user = await User.findOne({ email });

        if (user) {
          // Use a dedicated function for password validation
          return signInUser({ password, user });
        } else {
          throw new Error("This email does not exist.");
        }
      },
    }),
    TwitterProvider({
      clientId: process.env.TWITTER_ID,
      clientSecret: process.env.TWITTER_SECRET,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,

    }),
    Auth0Provider({
      clientId: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
      issuer: process.env.AUTH0_ISSUER,
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      try {
        // Use findOne instead of findById to handle different ID types
        let user = await User.findById({ _id: token.sub });

        if (user) {
          session.user.id = token.sub || user._id.toString();
          session.user.role = user.role || "user";
          token.role = user.role || "user";
        }
      } catch (error) {
        console.error("Error fetching user during session:", error);
      }

      return session;
    },
  },
  pages: {
    signIn: "/signin",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.JWT_SECRET,
});

// Use async function for better error handling
const signInUser = async ({ password, user }) => {
  try {
    if (!user.password) {
      throw new Error("Please enter your password.");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new Error("Email or password is wrong!");
    }

    return user;
  } catch (error) {
    console.error("Error during user sign-in:", error);
    throw error; // Re-throw the error to indicate sign-in failure
  }
};
