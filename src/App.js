import "./App.css";

import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Landing from "./Components/LandingPage/LandingPage";
import Form from "./Components/Form/Register";
import DetailCourses from "./Components/DetailCoursesProgramation/DetailCoursesProgramation";
import SearchBar from "./Components/SearchBar/SearchBar";
import Footer from "./Components/Footer/Footer.jsx";
import CourseResults from "./Components/CourseResults/CourseResults";
import CourseViewer from "./Components/CourseViewer/CourseViewer.jsx";
import CourseForm from "./Components/CourseCreationForm/CourseCreationForm";
import Login from "./Components/Login/Login";
import NotFoundPage from "./Components/NotFoundPage/NotFoundPage";
import Profile from "./Components/Profile/Profile";
import Home from "./Components/Home/Home";
import CourseDetail from "./Components/Course-Detail/CourseDetail";
import TeachersDetail from "./Components/TeachersDetail/teachersDetail";
import SucessRegister from "./Components/SucessRegister/SucessRegister";
// import FriendList from "./Components/FriendList/FriendList";
import StudentDetail from "./Components/StudentDetail/StudentDetail";
import { AuthProvider } from "./context/authContext.js";

import CartPage from "./Components/CartPage/CartPage";
import SuccessPayment from "./Components/CartPage/MercadoPago/SuccessPayment";
import Editprofile from "./Components/Profile/Edit-profile/Edit-profile";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const location = useLocation();

  const shouldRenderSearchBar = location.pathname !== "/cart/success";
  useEffect(() => {
    // Titulo de ventana
    document.title = "Talent Forge";

    // Icono de pagina
    const favicon = document.querySelector("link[rel='icon']");
    favicon.href = "fiveicon.png";
  });
  return (
    <div className="App">
      <AuthProvider>
        {shouldRenderSearchBar && (
          <SearchBar setSearchResults={setSearchResults} />
        )}
        <Routes>
          <Route path="/view/:id" element={<CourseViewer />} />
          <Route path="/detail" element={<DetailCourses />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Form />} />
          <Route path="/course/create" element={<CourseForm />} />
          <Route path="/course/:id" element={<CourseDetail />} />
          <Route path="/teacher/:id" element={<TeachersDetail />} />
          <Route path="/presentation" element={<Landing />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/" element={<Landing />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/welcome" element={<SucessRegister />} />
          <Route path="/cart/success" element={<SuccessPayment />} />
          <Route path="/social/profile" element={<StudentDetail />} />
          <Route path="/profile/edit" element={<Editprofile />} />
          <Route
            path="/search"
            element={<CourseResults searchResults={searchResults} />}
          />
        </Routes>
        <Footer />
      </AuthProvider>
    </div>
  );
}

export default App;
