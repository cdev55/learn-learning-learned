"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useEffect, useState } from "react";
import AddNewBlog from "../add-new-blog";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Label } from "@/components/ui/label";

export function BlogOverView({ blogList }) {
  const initialBloGFormData = { title: "", description: "" };
  const [openBlogDialog, setOpenBlogDialog] = useState(false);
  const [loading, setLoading] = useState(false);
  const [blogFormData, setBlogFormData] = useState(initialBloGFormData);
  const [currentEditedBlogId, setCurrentEditedBlogId] = useState(null);

  const router = useRouter();

  useEffect(() => {
    router.refresh();
  }, []);

  const handleSaveBlogData = async () => {
    try {
      setLoading(true);
      const apiResponse =
        currentEditedBlogId !== null
          ? await fetch(`/api/update-blog?id=${currentEditedBlogId}`, {
              method: "PUT",
              body: JSON.stringify(blogFormData),
            })
          : await fetch("/api/add-blog", {
              method: "POST",
              body: JSON.stringify(blogFormData),
            });
      const result = await apiResponse.json();
      if (result.success) {
        setBlogFormData(initialBloGFormData);
        setOpenBlogDialog(false);
        setLoading(false);
        router.refresh();
      }
      console.log(result);
    } catch (error) {
      console.error(error);
      setOpenBlogDialog(false);

      setLoading(false);

      setBlogFormData(initialBloGFormData);
    }
  };

  const handleDeleteBlog = async (blogId) => {
    try {
      const response = await fetch(`/api/delete-blog?id=${blogId}`, {
        method: "DELETE",
      });
      const result = await response.json();
      if (result.success) {
        router.refresh();
      }
    } catch (error) {
      throw new Error(error);
    }
  };

  const handleEditBlog = async (item) => {
    console.log({ item });
    setCurrentEditedBlogId(item._id);
    setBlogFormData({
      title: item.title,
      description: item.description,
    });
    setOpenBlogDialog(true);
    console.log({ currentEditedBlogId, blogFormData });
  };

  console.log(blogFormData);
  return (
    <div className="min-h-screen flex flex-col gap-10 bg-gradient-to-r from-purple-400 to-blue-500 p-6">
      <AddNewBlog
        setOpenBlogDialog={setOpenBlogDialog}
        openBlogDialog={openBlogDialog}
        blogFormData={blogFormData}
        setBlogFormData={setBlogFormData}
        loading={loading}
        setLoading={setLoading}
        handleSaveBlogData={handleSaveBlogData}
        currentEditedBlogId={currentEditedBlogId}
        setCurrentEditedBlogId={setCurrentEditedBlogId}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {blogList && blogList.length ? (
          blogList.map((item, index) => {
            return (
              <Card className="p-5" key={item?._id}>
                <CardContent>
                  <CardTitle className="mb-5">{item?.title}</CardTitle>
                  <CardDescription>{item?.description}</CardDescription>
                  <div className="mt-5 flex items-center gap-5">
                    <Button onClick={() => handleEditBlog(item)}>Edit</Button>
                    <Button onClick={() => handleDeleteBlog(item?._id)}>
                      Delete
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })
        ) : (
          <Label className="text-white text-3xl font-extrabold">
            No blogs available, All New Blog
          </Label>
        )}
      </div>
    </div>
  );
}
