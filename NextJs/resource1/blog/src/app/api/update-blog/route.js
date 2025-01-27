import connectToDB from "@/database";
import { Blog } from "@/models/blog";
import Joi from "joi";
import { NextResponse } from "next/server";

const EditBlog = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
});

export async function PUT(req) {
  try {
    const { searchParams } = new URL(req.url);
    const blogId = searchParams.get("id");
    console.log("uiuiui::>>>",blogId)
    if (!blogId) {
      return NextResponse.json({
        succes: false,
        message: "Blog id is required",
      });
    }
    await connectToDB();
    const extractBlogData = await req.json();
    const { title, description } = extractBlogData;
console.log(title,description)
    const { error } = EditBlog.validate({
      title,
      description,
    });
    if (error) {
      return new NextResponse.json({
        success: fasle,
        message: error.details[0].message,
      });
    }
    const updateBlogById = await Blog.findByIdAndUpdate(
      { _id: blogId },
      {
        title,
        description,
      },
      { new: true }
    );
    if (updateBlogById) {
      return NextResponse.json({
        success: true,
        message: "Blog updated successfully",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Error while updating the blog",
      });
    }
  } catch (error) {
    console.log("Error:", error);
    return NextResponse.json({
      success: false,
      message: "Error while updating the blog",
    });
  }
}
