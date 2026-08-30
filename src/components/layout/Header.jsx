import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X, Sparkles } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setOpen(false);

  return (
    <header className="header">
      <div className="container nav">
        <Link className="brand" to="/" onClick={closeMenu}>
          <span className="logo">JP</span>
          <span>Just Pharmacology</span>
        </Link>
        <button
          className="menu"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
        <nav className={open ? 'navlinks open' : 'navlinks'}>
          <Link
            to="/learn"
            onClick={closeMenu}
            className={location.pathname === '/learn' ? 'active-nav' : ''}
          >
            <span>Learn</span>
            <span className="header-new-tag">
              <Sparkles size={10} /> New
            </span>
          </Link>
          <Link
            to="/animations"
            onClick={closeMenu}
            className={location.pathname === '/animations' ? 'active-nav' : ''}
          >
            Animations
          </Link>
          <Link
            to="/videos"
            onClick={closeMenu}
            className={location.pathname === '/videos' ? 'active-nav' : ''}
          >
            Videos
          </Link>
          <Link
            to="/revision"
            onClick={closeMenu}
            className={location.pathname === '/revision' ? 'active-nav' : ''}
          >
            Rapid Revision
          </Link>
          <Link
            to="/quiz"
            onClick={closeMenu}
            className={location.pathname === '/quiz' ? 'active-nav' : ''}
          >
            Quiz
          </Link>
          <Link
            to="/search"
            onClick={closeMenu}
            className="search-nav-link"
            aria-label="Search lessons and topics"
          >
            <Search size={18} />
          </Link>
        </nav>
      </div>
    </header>
  );
}
