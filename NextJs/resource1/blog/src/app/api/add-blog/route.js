import { Blog } from "@/models/blog";
import { NextResponse } from "next/server";
import connectToDB from "@/database";
import Joi from "joi";

const AddNewBlog=Joi.object({
    title:Joi.string().required(),
    description:Joi.string().required(),
})



export async function POST(req){
    try {
        await connectToDB();
        const extractBlogData= await req.json();
        const {title,description}=extractBlogData;
        const {error}=AddNewBlog.validate({
            title,description
        })
        if(error){
            return new NextResponse.json({
                success:false,
                message:error.details[0].message
            })
        }
        const newlyCreatedBlogItem=await Blog.create(extractBlogData);
        if(newlyCreatedBlogItem){
            return NextResponse.json({
                success:true,
                message:"Blog added successfully"
            })
        }else{
            return NextResponse.json({
                success:false,
                message:"Something went wrong while Adding the post"
               }) 
        }
    } catch (error) {
    console.log("Something went wrong while Adding the post:",error);
       return NextResponse.json({
        success:false,
        message:"Something went wrong while Adding the post"
       })
    }
}