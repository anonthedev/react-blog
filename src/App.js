import Home from "./Components/Home";
import NewBlog from "./Components/NewBlog";
import Header from "./Components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route exact path = "/" element={<Home/>}></Route>
        <Route exact path = "/new" element={<NewBlog/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
