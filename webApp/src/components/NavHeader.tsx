import { GithubLogo, LinkedinLogo, TwitterLogo } from "@phosphor-icons/react";
import { Sun, Moon, Settings, LogOut } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import debashisImg from "@/assets/deb.png";

const NavHeader = () => {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { logout, user } = useAuth();

  console.log(user);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 ${
          theme === "dark" ? "bg-black/80" : "bg-white/80"
        } backdrop-blur-sm border-b ${
          theme === "dark" ? "border-gray-800" : "border-gray-200"
        } z-50`}
      >
        <div className="max-w-screen-xl mx-auto px-4">
          <nav className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <img
                src={debashisImg}
                alt="Debashis Giri"
                className="w-10 h-10 rounded-md object-contain"
              />
              <span
                className={`font-medium ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                Debashis Giri
              </span>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              {/* Desktop Navigation */}
              <Link
                to="/"
                className={`${
                  location.pathname === "/"
                    ? theme === "dark"
                      ? "text-white"
                      : "text-gray-900"
                    : theme === "dark"
                    ? "text-gray-400"
                    : "text-gray-600"
                } ${
                  theme === "dark"
                    ? "hover:text-gray-200"
                    : "hover:text-gray-800"
                } font-medium`}
              >
                Home
              </Link>
              <Link
                to="/projects"
                className={`${
                  location.pathname === "/projects"
                    ? theme === "dark"
                      ? "text-white"
                      : "text-gray-900"
                    : theme === "dark"
                    ? "text-gray-400"
                    : "text-gray-600"
                } ${
                  theme === "dark"
                    ? "hover:text-gray-200"
                    : "hover:text-gray-800"
                } font-medium`}
              >
                Projects
              </Link>
              <Link
                to="/about"
                className={`${
                  location.pathname === "/about"
                    ? theme === "dark"
                      ? "text-white"
                      : "text-gray-900"
                    : theme === "dark"
                    ? "text-gray-400"
                    : "text-gray-600"
                } ${
                  theme === "dark"
                    ? "hover:text-gray-200"
                    : "hover:text-gray-800"
                } font-medium`}
              >
                About
              </Link>
              <Link
                to="/blog"
                className={`${
                  location.pathname === "/blog"
                    ? theme === "dark"
                      ? "text-white"
                      : "text-gray-900"
                    : theme === "dark"
                    ? "text-gray-400"
                    : "text-gray-600"
                } ${
                  theme === "dark"
                    ? "hover:text-gray-200"
                    : "hover:text-gray-800"
                } font-medium`}
              >
                Blog
              </Link>
              <Link
                to="/contact"
                className={`${
                  location.pathname === "/contact"
                    ? theme === "dark"
                      ? "text-white"
                      : "text-gray-900"
                    : theme === "dark"
                    ? "text-gray-400"
                    : "text-gray-600"
                } ${
                  theme === "dark"
                    ? "hover:text-gray-200"
                    : "hover:text-gray-800"
                } font-medium`}
              >
                Contact
              </Link>
            </div>

            {/* Theme, Settings, and Mobile Menu */}
            <div className="flex items-center gap-2">
              <button
                onClick={toggleTheme}
                className={`p-2 inline-flex items-center ${
                  theme === "dark"
                    ? "bg-transparent text-gray-400 hover:text-white hover:bg-gray-800"
                    : "bg-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                } rounded-md transition-colors`}
                aria-label={`Switch to ${
                  theme === "dark" ? "light" : "dark"
                } theme`}
              >
                {theme === "light" ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                onClick={() => setIsSettingsModalOpen(true)}
                className={`p-2 inline-flex items-center ${
                  theme === "dark"
                    ? "bg-transparent text-gray-400 hover:text-white hover:bg-gray-800"
                    : "bg-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                } rounded-md transition-colors`}
                aria-label="Settings"
              >
                <Settings size={20} />
              </button>
              {user?.isAdmin && (
                <button
                  onClick={logout}
                  className={`p-2 inline-flex items-center ${
                    theme === "dark"
                      ? "bg-transparent text-gray-400 hover:text-white hover:bg-gray-800"
                      : "bg-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                  } rounded-md transition-colors`}
                  aria-label="Logout"
                >
                  <LogOut size={20} />
                </button>
              )}
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className={`md:hidden p-2 inline-flex items-center ${
                  theme === "dark"
                    ? "bg-transparent text-gray-400 hover:text-white hover:bg-gray-800"
                    : "bg-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                } rounded-md transition-colors`}
                aria-label="Menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </nav>
        </div>
      </header>

      <Dialog open={isSettingsModalOpen} onOpenChange={setIsSettingsModalOpen}>
        <DialogContent>
          <h2>Settings</h2>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`${
              theme === "dark"
                ? "text-gray-400 hover:text-gray-200"
                : "text-gray-600 hover:text-gray-800"
            }`}
          >
            <GithubLogo size={24} /> Github
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`${
              theme === "dark"
                ? "text-gray-400 hover:text-gray-200"
                : "text-gray-600 hover:text-gray-800"
            }`}
          >
            <TwitterLogo size={24} /> Twitter
          </a>

          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`${
              theme === "dark"
                ? "text-gray-400 hover:text-gray-200"
                : "text-gray-600 hover:text-gray-800"
            }`}
          >
            <LinkedinLogo size={24} /> Linkedin
          </a>
        </DialogContent>
      </Dialog>

      {/* Mobile Navigation Modal */}
      <Dialog open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
        <DialogContent>
          <div className="flex flex-col space-y-4">
            <Link
              to="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`${
                location.pathname === "/"
                  ? theme === "dark"
                    ? "text-white"
                    : "text-gray-900"
                  : theme === "dark"
                  ? "text-gray-400"
                  : "text-gray-600"
              } font-medium`}
            >
              Home
            </Link>
            <Link
              to="/projects"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`${
                location.pathname === "/projects"
                  ? theme === "dark"
                    ? "text-white"
                    : "text-gray-900"
                  : theme === "dark"
                  ? "text-gray-400"
                  : "text-gray-600"
              } font-medium`}
            >
              Projects
            </Link>
            <Link
              to="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`${
                location.pathname === "/about"
                  ? theme === "dark"
                    ? "text-white"
                    : "text-gray-900"
                  : theme === "dark"
                  ? "text-gray-400"
                  : "text-gray-600"
              } font-medium`}
            >
              About
            </Link>
            <Link
              to="/blog"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`${
                location.pathname === "/blog"
                  ? theme === "dark"
                    ? "text-white"
                    : "text-gray-900"
                  : theme === "dark"
                  ? "text-gray-400"
                  : "text-gray-600"
              } font-medium`}
            >
              Blog
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`${
                location.pathname === "/contact"
                  ? theme === "dark"
                    ? "text-white"
                    : "text-gray-900"
                  : theme === "dark"
                  ? "text-gray-400"
                  : "text-gray-600"
              } font-medium`}
            >
              Contact
            </Link>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default NavHeader;
