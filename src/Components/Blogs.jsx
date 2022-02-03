import "./Blogs.css";
import Blog from "./Blog";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import db from "../firebase";
import { getDocs, collection } from "../firebase";
import { setBlogs } from "../features/blogSlice";
import NewBlogBtn from "./NewBlogBtn";

function Blogs() {
  const dispatch = useDispatch();
  let blogs = [];

  useEffect(async () => {
    const querySnapshot = await getDocs(collection(db, "blogs"));
    querySnapshot.forEach((doc) => {
      blogs = [...blogs, { id: doc.id, ...doc.data() }];
    });
    dispatch(
      setBlogs({
        blogs: blogs,
      })
    );
  }, []);

  return (
    <section>
      <Blog />
      <NewBlogBtn/>
    </section>
  );
}

export default Blogs;
