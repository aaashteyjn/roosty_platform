import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { Home } from "./pages/Home/Home";
import { Auth } from "./pages/Auth/Auth";
import { Experts } from "./pages/Experts/Experts";
import { Author } from "./pages/Author/Author";
import { Post } from "./pages/Post/Post";
import { Feed } from "./pages/Feed/Feed";
import { Profile } from "./pages/Profile/Profile";
import { AuthorDashboard } from "./pages/AuthorDashboard/AuthorDashboard";

function Layout() {
  const location = useLocation();

  const isAuthPage = location.pathname === "/auth";

  return (
    <>
      {!isAuthPage && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/experts" element={<Experts />} />
        <Route path="/author/:slug" element={<Author />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/feed" element={<Feed />}/>
        <Route path="/profile" element={<Profile />} />
        <Route path="/author/dashboard" element={<AuthorDashboard />}/>
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