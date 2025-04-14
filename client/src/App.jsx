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
import Services from "./pages/Services";

function App() {
  return (
    <>
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quiz" element={<Quize />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/careers" element={<Career />} />
            <Route path="/careers/:id" element={<ViewCareer />} />

            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </>
  );
}

export default App;
