import { useEffect } from "react";
import { useDispatch } from "react-redux";
import db from "../firebase";
import { getDocs, collection } from "../firebase";
import { setLibrary } from "../features/librarySlice";
import LibraryBlog from "./LibraryBlog";
import { useSelector } from "react-redux";
import { selectUserEmail } from "../features/userSlice";

function Library() {
  const userEmail = useSelector(selectUserEmail);
  const dispatch = useDispatch();
  let library = [];

  useEffect(async () => {
    const querySnapshot = await getDocs(collection(db, "blogs"));
    querySnapshot.forEach((doc) => {
      if (doc.data().email === userEmail) {
          library = [...library, { id: doc.id, ...doc.data() }]
      }
    });
    dispatch(
      setLibrary({
        library: library,
      })
    );
  }, []);

  return (
    <section>
      <LibraryBlog />
    </section>
  );
}

export default Library;
