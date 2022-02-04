import "./NewBlog.css";
import { collection, addDoc } from "firebase/firestore";
import db from "../firebase";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectUserEmail } from "../features/userSlice";

function NewBlog() {
  const userEmail = useSelector(selectUserEmail)
  const [blogTitle, setblogTitle] = useState("");
  const [blogContent, setblogContent] = useState("");
  const navigate = useNavigate()

  function handleBlogTitle({ target }) {
    setblogTitle(target.value);
  }

  function handleBlogContent({ target }) {
    setblogContent(target.value);
  }

  async function publishBlog() {
    const docRef = await addDoc(collection(db, "blogs"), {
      title: `${blogTitle}`,
      content: `${blogContent}`,
      email: `${userEmail}`,
    });
    navigate("/", {replace: true})
  }

  return (
    <section className="new-blog">
      <div className="new-blog-title">
        <span>Title : </span>
        <input
          type="text"
          name=""
          id=""
          placeholder="Enter the title"
          onChange={handleBlogTitle}
        />
      </div>

      <div className="new-blog-content">
        <span>Content : </span>
        <textarea
          placeholder="Pen down your thoughts here..."
          onChange={handleBlogContent}
        ></textarea>
      </div>

      <div>
        <button onClick={publishBlog}>Publish</button>
      </div>
    </section>
  );
}

export default NewBlog;
