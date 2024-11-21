import logo from "../assets/assets/AB.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            {/* Logo Section */}
            <div className="flex flex-shrink-0 items-center">
                <img className="mx-2 w-10" src={logo} alt="logo" />
            </div>

            {/* Icons Section */}
            <div className="flex items-center space-x-4"> {/* Flex container for icons */}
                <motion.a
                    whileHover={{ scale: 1.2 }}
                    href="https://www.linkedin.com/in/annabelle-bradshaw-0473aa178/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl"
                    aria-label="LinkedIn Profile"
                >
                    <FaLinkedin />
                </motion.a>

                <motion.a
                    whileHover={{ scale: 1.2 }}
                    href="https://github.com/bradshaw-annabelle"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl"
                    aria-label="GitHub Profile"
                >
                    <FaGithub />
                </motion.a>
            </div>
        </nav>
    );
};

export default Navbar;
