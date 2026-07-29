import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="fixed left-0 top-0 z-50 flex w-full items-center justify-between border-b border-white/10 bg-background/70 px-gutter py-4 backdrop-blur-xl">
      {/* Logo */}
      <div className="flex items-center gap-8">
        <Link
          to="/"
          className="flex items-center gap-2 text-headline-md font-headline-md font-bold tracking-tighter text-primary transition-transform duration-200 active:scale-95"
        >
          <span
            className="material-symbols-outlined"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            graphic_eq
          </span>
          Streamify
        </Link>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4">
        

        {/* Always Visible */}
        <Link
          to="/"
          className="rounded-full border border-white/10 bg-surface-container px-6 py-2.5 text-label-caps font-label-caps font-bold text-on-surface transition-all duration-300 hover:border-primary/40 hover:bg-surface-container-high hover:text-primary hover:shadow-[0_0_20px_rgba(208,188,255,0.18)] active:scale-95"
        >
          Home
        </Link>

        {/* Home Page */}
        {location.pathname === "/" && (
          <Link
            to="/login"
            className="rounded-full bg-primary px-6 py-2.5 text-label-caps font-label-caps font-bold text-on-primary transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-container hover:shadow-[0_8px_30px_rgba(208,188,255,0.35)] active:scale-95"
          >
            Sign In
          </Link>
        )}

        {/* Login Page */}
        {location.pathname === "/login" && (
          <Link
            to="/register"
            className="rounded-full bg-primary px-6 py-2.5 text-label-caps font-label-caps font-bold text-on-primary transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-container hover:shadow-[0_8px_30px_rgba(208,188,255,0.35)] active:scale-95" 
          >
            Register
          </Link>
        )}

        {/* Register Page */}
        {location.pathname === "/register" && (
          <Link
            to="/login"
             className="rounded-full bg-primary px-6 py-2.5 text-label-caps font-label-caps font-bold text-on-primary transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-container hover:shadow-[0_8px_30px_rgba(208,188,255,0.35)] active:scale-95" 
          >
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;