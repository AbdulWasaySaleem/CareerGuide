import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Quize from "./components/Quize";
import LoginPage from "./pages/Auth/LoginPage";
import SignupPage from "./pages/Auth/SignupPage";
import Career from "./components/Career/Career";
import ViewCareer from "./components/Career/ViewCareer";
import UserDashBoard from "./pages/DashBoard/UserDashBoard";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quiz" element={<Quize />} />
            <Route path="/about" element={<About />} />
            <Route path="/careers" element={<Career />} />
            <Route path="/careers/:id" element={<ViewCareer />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="/profile" element={<UserDashBoard/>}/>

            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />

            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </>
  );
}

export default App;
