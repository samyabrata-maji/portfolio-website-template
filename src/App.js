import { Route, Routes } from "react-router-dom";
import Home from "./components/content_home/Home";
import ContentRepo from "./components/content_repo/ContentRepo";
import Tech from "./components/content_tech/Tech";
import SideBar from "./components/sidebar/SideBar";


function App() {
  return (
    <>
      <SideBar></SideBar>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/repo" element={<ContentRepo/>}></Route>
        <Route path="/tech" element={<Tech/>}></Route>
      </Routes>
    </>
  );
}

export default App;
