import { Blog } from "@/models/blog";
import { NextResponse } from "next/server";

export async function DELETE(req) {
  try {
    const { searchParams } = new URL(req.url);
    const blogId = searchParams.get("id");
    if (!blogId) {
      return NextResponse.json({
        succes: false,
        message: "Blog id is required",
      });
    }
    const deleteBlog = await Blog.findByIdAndDelete(blogId);
    if (deleteBlog) {
      return NextResponse.json({
        success: true,
        message: "Blog deleted successfully",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Error while deleting blog",
      });
    }
  } catch (error) {
    console.log("Error:", error);
    return NextResponse.json({
      success: false,
      message: "Error while deleting blog",
    });
  }
}
