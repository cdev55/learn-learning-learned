import { BlogOverView } from "../components/blog-overview";

const fetchingBlogList = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/get-blog",{
        method: "GET",
        cache:"no-store"
    });
    const result=await response.json();
    return result?.data;
  } catch (error) {
    throw new Error(error);
  }
};

export default async function Blogs() {
    const blogList=await fetchingBlogList();
    console.log({blogList})
  return (
    <div>
      <BlogOverView blogList={blogList}/>
    </div>
  );
}
