import { Navigate, Route, Routes } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { AboutPage } from "../pages/About/views/AboutPage";
import { HomePage } from "../pages/Home/views/HomePage";
import { ReservationPage } from "../pages/Reservations/views/ReservationPage";
import { ServicePage } from "../pages/Service/views/ServicePage";

export const AppRoute = () => {
  return (
    <>
      <NavBar />
      <div className="container-void" />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/reservation" element={<ReservationPage />} />
        <Route path="/service" element={<ServicePage />} />

        <Route path="/*" element={<Navigate to="/" />} />
        {/* Auth Section */}
        {/* <Route path="/login" element={<LoginPage />}/>
        <Route path="/register" element={<RegisterPage />}/> */}
      </Routes>
    </>
  );
};
