import { Link, useLocation, useParams, useSearchParams } from 'react-router-dom';
import { Home, ChevronRight, Sparkles, BookOpen, Layers } from 'lucide-react';
import { categories } from '../../data/categories';
import { lessons } from '../../data/lessons';
import { isLessonNew, isModuleNew } from '../../utils/contentUtils';

/**
 * Dynamic Breadcrumb component that automatically derives the navigation hierarchy
 * from current route params, search queries, and lesson/module data, or accepts custom items.
 *
 * @param {Object} props
 * @param {Array<{ label: string, to?: string, icon?: React.ReactNode, isCurrent?: boolean, badge?: string }>} [props.customItems]
 * @param {string} [props.className]
 * @param {boolean} [props.showHomeIcon=true]
 */
export default function Breadcrumbs({ customItems, className = '', showHomeIcon = true }) {
  const location = useLocation();
  const params = useParams();
  const [searchParams] = useSearchParams();
  const pathname = location.pathname;

  // Derive breadcrumb items dynamically if not explicitly provided
  const items = customItems || getDynamicBreadcrumbItems(pathname, params, searchParams);

  if (!items || items.length <= 1) {
    return null;
  }

  return (
    <nav className={`dynamic-breadcrumbs-nav ${className}`} aria-label="Breadcrumb">
      <ol className="dynamic-breadcrumbs-list" itemScope itemType="https://schema.org/BreadcrumbList">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          const isFirst = index === 0;

          return (
            <li
              key={index}
              className={`breadcrumb-item ${isLast ? 'is-current' : ''}`}
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              {item.to && !isLast ? (
                <Link
                  to={item.to}
                  className="breadcrumb-link"
                  itemProp="item"
                  title={item.label}
                >
                  {isFirst && showHomeIcon && (
                    <Home size={14} className="breadcrumb-home-icon" aria-hidden="true" />
                  )}
                  {item.icon && <span className="breadcrumb-item-icon">{item.icon}</span>}
                  <span className="breadcrumb-text" itemProp="name">
                    {item.label}
                  </span>
                </Link>
              ) : (
                <span
                  className="breadcrumb-current"
                  aria-current={isLast ? 'page' : undefined}
                  itemProp="item"
                  title={item.label}
                >
                  {item.icon && <span className="breadcrumb-item-icon">{item.icon}</span>}
                  <span className="breadcrumb-text" itemProp="name">
                    {item.label}
                  </span>
                  {item.badge && (
                    <span className="breadcrumb-badge">
                      {item.badge}
                    </span>
                  )}
                </span>
              )}
              <meta itemProp="position" content={String(index + 1)} />

              {!isLast && (
                <ChevronRight
                  size={13}
                  className="breadcrumb-separator"
                  aria-hidden="true"
                />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

/**
 * Helper to dynamically generate the hierarchy based on routes and parameters
 */
function getDynamicBreadcrumbItems(pathname, params, searchParams) {
  const items = [
    {
      label: 'Home',
      to: '/',
    },
  ];

  // Route 1: Individual Lesson View (/lesson/:id)
  if (pathname.startsWith('/lesson/')) {
    const lessonId = params.id;
    const lesson = lessons.find((x) => x.id === lessonId);

    items.push({
      label: 'Curriculum',
      to: '/learn',
    });

    if (lesson) {
      const category = categories.find((c) => c.id === lesson.categoryId);
      if (category) {
        items.push({
          label: category.name,
          to: `/learn?category=${category.id}`,
          icon: category.icon,
        });
      }

      if (lesson.topic) {
        items.push({
          label: lesson.topic,
          to: category ? `/learn?category=${category.id}` : '/learn',
        });
      }

      items.push({
        label: lesson.title,
        isCurrent: true,
        badge: (lesson.isLatest && isLessonNew(lesson)) ? 'Latest' : isLessonNew(lesson) ? 'New' : undefined,
      });
    } else {
      items.push({
        label: 'Lesson Not Found',
        isCurrent: true,
      });
    }
    return items;
  }

  // Route 2: Learn / Curriculum Overview (/learn)
  if (pathname === '/learn') {
    const categoryParam = searchParams.get('category');
    items.push({
      label: 'Curriculum',
      to: categoryParam ? '/learn' : undefined,
      isCurrent: !categoryParam,
    });

    if (categoryParam && categoryParam !== 'all') {
      const category = categories.find(
        (c) =>
          c.id === categoryParam ||
          (categoryParam === 'cardio' && c.id === 'cardiovascular') ||
          (categoryParam === 'gi' && c.id === 'gastrointestinal')
      );
      if (category) {
        items.push({
          label: category.name,
          icon: category.icon,
          isCurrent: true,
          badge: isModuleNew(category) ? 'New Module' : undefined,
        });
      }
    }
    return items;
  }

  // Route 3: Animations (/animations)
  if (pathname === '/animations') {
    items.push({
      label: 'Interactive Animations',
      isCurrent: true,
    });
    return items;
  }

  // Route 4: Videos (/videos)
  if (pathname === '/videos') {
    items.push({
      label: 'Video Lectures',
      isCurrent: true,
    });
    return items;
  }

  // Route 5: Rapid Revision (/revision)
  if (pathname === '/revision') {
    items.push({
      label: 'Curriculum',
      to: '/learn',
    });
    items.push({
      label: 'Rapid Revision Cards',
      isCurrent: true,
    });
    return items;
  }

  // Route 6: Quiz (/quiz)
  if (pathname === '/quiz') {
    items.push({
      label: 'Self-Assessment',
      to: '/learn',
    });
    items.push({
      label: 'Quiz Challenge',
      isCurrent: true,
    });
    return items;
  }

  // Route 7: Search (/search)
  if (pathname === '/search') {
    const q = searchParams.get('q');
    items.push({
      label: 'Search',
      to: q ? '/search' : undefined,
      isCurrent: !q,
    });
    if (q) {
      items.push({
        label: `"${q}"`,
        isCurrent: true,
      });
    }
    return items;
  }

  // Route 8: About (/about)
  if (pathname === '/about') {
    items.push({
      label: 'Dr. Manoj Goyal Tribute & About',
      isCurrent: true,
    });
    return items;
  }

  return items;
}
