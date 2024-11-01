import { Navigate, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import ProfileSectionPage from "./pages/ProfileSectionPage";
import AnimeSectionPage from "./pages/AnimeSectionPage";
import SeriesSectionPage from "./pages/SeriesSectionPage";
import MoviesSectionPage from "./pages/MoviesSectionPage";
import BooksSectionPage from "./pages/BooksSectionPage";
import SearchSectionPage from "./pages/SearchSectionPage";

import Navbar from "./components/Navbar";
import { useUserStore } from "./stores/useUserStore";
import { useEffect } from "react";
import LoadingSpinner from "./components/LoadingSpinner";

function App() {
  const { user, checkAuth, checkingAuth } = useUserStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (checkingAuth) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,rgba(65,105,225,0.4)_0%,rgba(30,60,120,0.3)_45%,rgba(0,0,0,0.1)_100%)]" />
        </div>
      </div>

      <div className="relative z-50 pt-20">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/signup"
            element={!user ? <SignUpPage /> : <Navigate to="/" />}
          />
          <Route
            path="/login"
            element={!user ? <LoginPage /> : <Navigate to="/" />}
          />
          <Route
            path="/profile-section"
            element={!user ? <ProfileSectionPage /> : <Navigate to="/" />}
          />
          <Route
            path="/anime-section"
            element={!user ? <AnimeSectionPage /> : <Navigate to="/" />}
          />
          <Route
            path="/series-section"
            element={!user ? <SeriesSectionPage /> : <Navigate to="/" />}
          />
          <Route
            path="/movies-section"
            element={!user ? <MoviesSectionPage /> : <Navigate to="/" />}
          />
          <Route
            path="/books-section"
            element={!user ? <BooksSectionPage /> : <Navigate to="/" />}
          />
          <Route
            path="/search-section"
            element={!user ? <SearchSectionPage /> : <Navigate to="/" />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
