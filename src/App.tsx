import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";

import { Home } from "./pages/Home/Home";
import { Auth } from "./pages/Auth/Auth";

function Layout() {
  const location = useLocation();

  const isAuthPage = location.pathname === "/auth";

  return (
    <>
      {!isAuthPage && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>

      {!isAuthPage && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}