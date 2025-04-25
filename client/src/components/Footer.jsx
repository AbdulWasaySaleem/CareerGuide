import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom"; // ✅ Link import added

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Company</h3>
            <p className="text-sm mb-4">
              We provide innovative solutions to make your digital experience
              seamless and enjoyable.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="hover:text-white transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/quiz" className="hover:text-white transition-colors">
                  Quiz
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="hover:text-white transition-colors"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="hover:text-white transition-colors"
                >
                  Terms
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span>123 Business Avenue, Suite 100, City, State 12345</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0" />
                <span>(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0" />
                <span>info@careermentor.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Newsletter
            </h3>
            <p className="text-sm mb-4">
              Subscribe to our newsletter for updates, news, and exclusive
              offers.
            </p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 bg-gray-800 text-white text-sm rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 text-sm text-center text-gray-400">
          &copy; {currentYear} CareerMentor. All rights reserved.
        </div>
        <div className="max-w-7xl mx-auto px-4 text-sm text-center text-gray-400 mt-2">
          Developed by{" "}
          <a
            href="https://www.linkedin.com/in/abdul-wasay-4765b82a6/" // replace with your actual LinkedIn URL
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            Abdul Wasay
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
