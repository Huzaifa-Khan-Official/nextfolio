import connectDB from "@/lib/db/connectDB";

export async function GET() {
    try {
        await connectDB();
    } catch (error) {

    }
}