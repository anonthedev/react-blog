import "./Blog.css";
import { useSelector } from "react-redux";
import { selectBlog } from "../features/blogSlice";

function Blog(props) {
  const blogs = useSelector(selectBlog);

  function trimContent(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <article className="blog">
      {blogs &&
        blogs.map((blog, key) => (
          <div className="blog-content" key={key}>
            <a className="blog-link" href={blog.source} target="_blank">
              <div className="blog-txt">
                <div className="blog-head">
                  <h3>{blog.title}</h3>
                </div>
                <p>{trimContent(blog.content, 500)}</p>
              </div>
              <div className="blog-img">
                <img src={blog.img} alt="" />
              </div>
            </a>
          </div>
        ))}
      {console.log(blogs)}
    </article>
  );
}

export default Blog;
