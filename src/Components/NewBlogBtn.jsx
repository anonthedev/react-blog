import "./NewBlogBtn.css";
import { Link, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUserName } from "../features/userSlice";

function NewBlogBtn() {
  const username = useSelector(selectUserName);

  return (
    <>
      {!username ? (
        <div></div>
      ) : (
        <Link className="new-blog-btn-link" to="/new">
          <div id="new-blog-btn" className="hidden visible">
            <i class="ri-add-line"></i>
            <Outlet />
          </div>
        </Link>
      )}
    </>
  );
}

export default NewBlogBtn;
