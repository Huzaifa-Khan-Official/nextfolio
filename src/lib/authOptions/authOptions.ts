import { NextAuthOptions } from "next-auth";

import CredentialsProvider from "next-auth/providers/credentials";
import connectDB from "../db/connectDB";
import User from "../db/models/User";
import bcrypt from "bcryptjs";
import configuration from "@/configurations/configurations";

const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    throw new Error("Email and password are required");
                }

                try {
                    await connectDB();

                    const user = await User.findOne({ email: credentials.email });

                    if (!user) {
                        throw new Error("Invalid credentials");
                    }

                    const isMatched = await bcrypt.compare(credentials.password, user.password);

                    if (!isMatched) {
                        throw new Error("Invalid credentials");
                    }

                    return {
                        id: user._id.toString(),
                        email: user.email,
                    };
                } catch (error) {
                    console.error("Error during authentication ==>", error);
                    throw new Error("Failed to authenticate user.");
                }
            },
        })
    ],
    callbacks: {
        async session({ session, token }) {
            if (session.user) {
                session.user.id = token.id as string;
            }

            return session;
        },
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
            }

            return token;
        }
    },
    pages: {
        signIn: "/login",
        error: "/login"
    },
    session: {
        strategy: "jwt",
        maxAge: 7 * 24 * 60 * 60
    },
    secret: configuration.nextAuthSecret
}

export default authOptions;