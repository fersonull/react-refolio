import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { BugPlay } from 'lucide-react'

const Navbar = () => {
    const url = useLocation()

    function isActive(path) {
        return url.pathname === path
    }

    const navItems = [
        { label: 'Start', path: '/' },
        { label: 'About', path: '/about' },
    ]

    return (
        <div className="w-full md:w-64 bg-zinc-800 text-white md:p-6 flex md:flex-col p-3">
            <Link to="/" className="text-2xl font-bold md:mb-8 text-amber-600 flex items-center justify-center gap-1.5 md:p-0 p-2">
                <BugPlay />
                <span>JasCodeIt</span>
            </Link>
            <ul className="md:flex md:flex-col md:items-start items-center hidden gap-1 relative">
                {navItems.map(({ label, path }) => (
                    <li key={path} className="w-full relative">
                        {isActive(path) && (
                            <motion.div
                                layoutId="activeLink"
                                className="absolute inset-0 bg-amber-900 rounded-xl z-0"
                                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                            />
                        )}
                        <Link
                            to={path}
                            className={`transition-all flex items-center justify-between w-full rounded-xl p-2 relative z-10 ${isActive(path) ? 'text-white font-semibold' : ''
                                }`}
                        >
                            <span>{label}</span>

                            {/* Arrow icon on active */}
                            {isActive(path) && (
                                <motion.svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="w-5 h-5 text-amber-300 ml-2"
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -10 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10.293 15.707a1 1 0 010-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                                        clipRule="evenodd"
                                    />
                                </motion.svg>
                            )}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Navbar;
