import { Route, Routes } from "react-router-dom";
import ContentHome from "./components/content_home/ContentHome";
import ContentRepo from "./components/content_repo/ContentRepo";
import ContentTech from "./components/content_tech/ContentTech";
import SideBar from "./components/sidebar/SideBar";


function App() {
  return (
    <>
      <SideBar></SideBar>
      <Routes>
        <Route path="/" element={<ContentHome/>}></Route>
        <Route path="/repo" element={<ContentRepo/>}></Route>
        <Route path="/tech" element={<ContentTech/>}></Route>
      </Routes>
    </>
  );
}

export default App;
