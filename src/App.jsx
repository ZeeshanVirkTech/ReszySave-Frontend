import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import Alerts from "./pages/Alerts";
import Fire from "./pages/Fire";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Security from "./pages/Security";
import AllSecurityCameras from "./pages/AllSecurityCameras";

export default function App() {
  return (
    <BrowserRouter>
      <div className="bg-backGroundColor h-screen flex overflow-hidden">
        <SideBar />
        <div className="w-screen flex flex-col">
          <NavBar />
          <div className="p-6 sm:p-3 flex-grow overflow-y-auto">
            {" "}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/alerts" element={<Alerts />} />
              <Route path="/fire" element={<Fire />} />
              <Route path="/security" element={<Security />} />
              <Route path="/allsecuritycameras" element={<AllSecurityCameras />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}
