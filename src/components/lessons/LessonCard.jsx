import { Link } from 'react-router-dom';
import { Clock, ChevronRight, Sparkles } from 'lucide-react';
import { isComplete } from '../../utils/progress';
import { isLessonNew } from '../../utils/contentUtils';

export default function LessonCard({ lesson }) {
  const isNew = isLessonNew(lesson);

  return (
    <Link to={'/lesson/' + lesson.id} className={`lesson-card ${isNew ? 'lesson-card-new' : ''}`}>
      <div className="card-top">
        <div className="card-top-left">
          <span className="pill">{lesson.level}</span>
          {isNew && (
            <span className="pill-new">
              <Sparkles size={11} /> NEW
            </span>
          )}
        </div>
        {isComplete(lesson.id) && <span className="done">✓ Complete</span>}
      </div>
      {lesson.topic && <div className="card-topic-tag">{lesson.topic}</div>}
      <h3>{lesson.title}</h3>
      <p>{lesson.description}</p>
      <div className="card-meta">
        <span>
          <Clock size={15} /> {lesson.time} min
        </span>
        <span className="start-link">
          Start <ChevronRight size={16} />
        </span>
      </div>
    </Link>
  );
}
