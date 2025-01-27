import mongoose from "mongoose"

const blogSchema=new mongoose.Schema({
title:String,
description:String,
});

export const Blog=mongoose.models.Blog || mongoose.model("Blog",blogSchema); 