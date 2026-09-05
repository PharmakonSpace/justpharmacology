import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X, Sparkles, Play } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setOpen(false);

  const YOUTUBE_SUBSCRIBE_URL = 'https://www.youtube.com/@JustPharmacology?sub_confirmation=1';

  return (
    <header className="header">
      <div className="container nav">
        <Link className="brand" to="/" onClick={closeMenu}>
          <span className="logo">JP</span>
          <span>Just Pharmacology</span>
        </Link>

        {/* Quick mobile action for YouTube subscribe & hamburger toggle */}
        <div className="mobile-header-actions">
          <a
            href={YOUTUBE_SUBSCRIBE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="yt-subscribe-badge yt-badge-compact"
            title="Subscribe to Just Pharmacology on YouTube"
            aria-label="Subscribe to Just Pharmacology on YouTube"
            id="mobile-yt-subscribe-btn"
          >
            <span className="yt-badge-play-icon">
              <Play size={10} fill="#ffffff" color="#ffffff" />
            </span>
            <span className="yt-badge-text">Subscribe</span>
          </a>
          <button
            className="menu"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
            id="mobile-menu-toggle-btn"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

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
          
          <div className="nav-search-and-yt-group">
            <Link
              to="/search"
              onClick={closeMenu}
              className={`search-nav-link ${location.pathname === '/search' ? 'active-nav' : ''}`}
              aria-label="Search lessons and topics"
              title="Search lessons and topics"
              id="header-search-nav-link"
            >
              <Search size={17} />
              <span className="mobile-search-text">Search</span>
            </Link>
            
            <a
              href={YOUTUBE_SUBSCRIBE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="yt-subscribe-badge desktop-yt-badge"
              title="Subscribe to Just Pharmacology on YouTube channel"
              aria-label="Subscribe to Just Pharmacology on YouTube channel"
              onClick={closeMenu}
              id="header-yt-subscribe-badge"
            >
              <span className="yt-badge-play-icon">
                <Play size={11} fill="#ffffff" color="#ffffff" />
              </span>
              <span className="yt-badge-text">Subscribe</span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
