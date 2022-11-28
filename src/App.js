import { Route, Routes } from "react-router-dom";
import Content from "./components/content/Content";
import SideBar from "./components/sidebar/SideBar";


function App() {
  return (
    <>
      <SideBar></SideBar>
      <Routes>
        <Route path="/" element={<Content/>}></Route>
      </Routes>
    </>
  );
}

export default App;
