import Home from "./Components/Home";
import NewBlog from "./Components/NewBlog";
import Header from "./Components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Library from "./Components/Library";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route exact path = "/" element={<Home/>}></Route>
        <Route exact path = "/new" element={<NewBlog/>}></Route>
        <Route exact path = "/lib" element={<Library/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
