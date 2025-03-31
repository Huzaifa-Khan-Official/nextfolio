import connectDB from "@/lib/db/connectDB";
import Profile from "@/lib/db/models/Profile";
import { NextRequest } from "next/server";

export async function PUT(request: NextRequest) {
    try {
        await connectDB();
        const { name, title, subtitle, resume, social_links } = await request.json();

        // const profile = await Profile.findOne({ userId });

    } catch (error) {

    }
}