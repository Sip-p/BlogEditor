import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const text = "BlogEditor";

export default function Navbar({ isAuthenticated, handleLogout }) {
  const letters = Array.from(text);
  const navigate = useNavigate();

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <nav className="bg-gray-900 text-white px-4 sm:px-6 py-4 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
      {/* Logo */}
      <motion.h1
        className="text-xl sm:text-2xl font-bold flex flex-wrap overflow-hidden justify-center sm:justify-start"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {letters.map((char, index) => (
          <motion.span key={index} variants={child} className="text-3xl sm:text-5xl mb-1">
            {char}
          </motion.span>
        ))}
      </motion.h1>

      {/* Right side buttons */}
      <div className="flex flex-wrap justify-center sm:justify-end gap-3">
        {!isAuthenticated ? (
          <>
            <button
              className="hover:bg-red-700 bg-red-600 px-4 py-2 text-sm sm:text-base rounded-lg"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
            <button
              className="hover:bg-red-700 bg-red-600 px-4 py-2 text-sm sm:text-base rounded-lg"
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </button>
          </>
        ) : (
          <>
            <button
              className="hover:bg-red-700 bg-red-600 px-4 py-2 text-sm sm:text-base rounded-lg"
              onClick={handleLogout}
            >
              Logout
            </button>
            <button
              className="hover:bg-red-700 bg-red-600 px-4 py-2 text-sm sm:text-base rounded-lg"
              onClick={() => navigate("/")}
            >
              Home
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
