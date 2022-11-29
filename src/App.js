import { Route, Routes } from "react-router-dom";
import ContentRepo from "./components/content/ContentRepo";
import SideBar from "./components/sidebar/SideBar";


function App() {
  return (
    <>
      <SideBar></SideBar>
      <Routes>
        <Route path="/" element={<ContentRepo/>}></Route>
      </Routes>
    </>
  );
}

export default App;
