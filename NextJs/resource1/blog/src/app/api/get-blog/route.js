import connectToDB from "@/database";
import { Blog } from "@/models/blog";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectToDB();
    const extractAllBlogFromDb = await Blog.find({});
    if (extractAllBlogFromDb) {
      return NextResponse.json({
        success: true,
        data: extractAllBlogFromDb,
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Something went wrong while fetching the data",
      });
    }
  } catch (error) {
    console.log("Error:", error);
    return NextResponse.json({
      success: false,
      message: "Something went wrong while fetching the data",
    });
  }
}
