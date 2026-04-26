import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';

const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Events', path: '/events' },
    { name: 'Board', path: '/board' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [location.pathname]);

    return (
        <nav
            className={clsx(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
                scrolled
                    ? 'bg-background/95 backdrop-blur-xl border-b border-accent/70 py-4 shadow-[0_12px_40px_rgba(0,0,0,0.28)]'
                    : 'bg-background/70 backdrop-blur-sm border-b border-border/30 py-5'
            )}
        >
            <div className="container flex items-center justify-between">
                <NavLink to="/" className="group no-underline">
                    <span className="font-mono text-accent font-bold tracking-widest text-xl">NCSE</span>
                    <span className="mt-1 block h-0.5 w-8 bg-accent transition-all group-hover:w-full" />
                </NavLink>

                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            className={({ isActive }) => clsx('nav-link py-1', isActive && 'active')}
                        >
                            {link.name}
                        </NavLink>
                    ))}
                    <Link to="/contact" className="btn btn-primary accent-glow">
                        Join Us
                    </Link>
                </div>

                <button
                    type="button"
                    aria-label="Toggle navigation menu"
                    aria-expanded={isOpen}
                    className="md:hidden text-foreground hover:text-accent bg-transparent border-none cursor-pointer p-2 transition-colors"
                    onClick={() => setIsOpen((open) => !open)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -12, height: 0 }}
                        animate={{ opacity: 1, y: 0, height: 'auto' }}
                        exit={{ opacity: 0, y: -12, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="md:hidden mt-4 overflow-hidden bg-surface/95 backdrop-blur-xl border-t border-accent/60"
                    >
                        <div className="flex flex-col p-6 gap-5">
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.name}
                                    to={link.path}
                                    className={({ isActive }) => clsx('nav-link text-lg py-1', isActive && 'active')}
                                >
                                    {link.name}
                                </NavLink>
                            ))}
                            <Link to="/contact" className="btn btn-primary w-full accent-glow">
                                Join Us
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
