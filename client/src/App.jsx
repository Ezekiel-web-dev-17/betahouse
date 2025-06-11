import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "./layout/RootLayout.jsx";
import AuthLayout from "./layout/AuthLayout.jsx";
import Homepage from "./pages/home/Homepage.jsx";
import Aboutpage from "./pages/about/Aboutpage.jsx";
import Blog from "./pages/blog/Blog.jsx";
import Contact from "./pages/contact/Contact.jsx";
import Properties from "./pages/properties/Properties.jsx";
import Login from "./pages/log/Login.jsx";
import SignUp from "./pages/signup/SignUp.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<RootLayout />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<Aboutpage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/properties" element={<Properties />} />
          </Route>
          <Route element={<AuthLayout />}>
            <Route path="/sign-in" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
