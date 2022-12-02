import { Route, Routes } from "react-router-dom";
import Home from "./pages/page_home/Home";
import Repo from "./pages/page_repo/Repo";
import Tech from "./pages/page_tech/Tech";
import SideBar from "./components/sidebar/SideBar";
import './App.css'


function App() {
  return (
    <>
      <SideBar></SideBar>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/repo" element={<Repo/>}></Route>
        <Route path="/tech" element={<Tech/>}></Route>
      </Routes>
    </>
  );
}

export default App;
