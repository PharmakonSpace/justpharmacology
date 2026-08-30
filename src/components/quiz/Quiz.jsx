import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, XCircle, Award, RotateCcw, ArrowRight, BookOpen, Sparkles, Check } from 'lucide-react';

export default function Quiz({ questions = [], title, onResetCategory }) {
  const [i, setI] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const [answersHistory, setAnswersHistory] = useState([]);

  if (!questions.length) {
    return (
      <div className="empty">
        <BookOpen size={36} style={{ color: '#16807d', marginBottom: '12px' }} />
        <h3>No quiz questions available for this selection</h3>
        <p>Try switching to another category or practice all questions across the curriculum.</p>
        {onResetCategory && (
          <button className="btn primary" onClick={onResetCategory} style={{ marginTop: '16px' }}>
            View All Questions
          </button>
        )}
      </div>
    );
  }

  const handleReset = () => {
    setI(0);
    setScore(0);
    setSelected(null);
    setDone(false);
    setAnswersHistory([]);
  };

  const currentQ = questions[i];
  const progressPercent = Math.round(((i) / questions.length) * 100);

  const answer = (n) => {
    if (selected !== null) return;
    setSelected(n);
    const isCorrect = n === currentQ.answer;
    if (isCorrect) setScore((s) => s + 1);
    setAnswersHistory((prev) => [
      ...prev,
      {
        questionIndex: i,
        question: currentQ.question,
        selectedOption: n,
        correctOption: currentQ.answer,
        isCorrect,
        explanation: currentQ.explanation,
        lessonTitle: currentQ.lessonTitle,
        lessonId: currentQ.lessonId,
        topic: currentQ.topic
      }
    ]);
  };

  const handleNext = () => {
    if (i + 1 >= questions.length) {
      setDone(true);
    } else {
      setI(i + 1);
      setSelected(null);
    }
  };

  if (done) {
    const accuracy = Math.round((score / questions.length) * 100);
    let gradeTitle = 'Pharmacology Scholar';
    let gradeDesc = 'Exceptional mastery across foundational and clinical pharmacology concepts!';
    let gradeColor = '#16807d';

    if (accuracy < 60) {
      gradeTitle = 'Building Knowledge';
      gradeDesc = 'Good effort! Review the lesson notes for missed questions to strengthen your core intuition.';
      gradeColor = '#d97706';
    } else if (accuracy < 85) {
      gradeTitle = 'Solid Understanding';
      gradeDesc = 'Great clinical intuition! A quick review of key pharmacokinetics and dynamics will push you to 100%.';
      gradeColor = '#0284c7';
    }

    return (
      <div className="quiz-result-card">
        <div className="result-icon-badge" style={{ borderColor: gradeColor }}>
          <Award size={48} style={{ color: gradeColor }} />
        </div>
        <span className="result-kicker">ASSESSMENT SUMMARY</span>
        <h2>{gradeTitle}</h2>
        <p className="result-desc">{gradeDesc}</p>

        <div className="result-stats-row">
          <div className="result-stat-box">
            <span className="result-stat-value">{score} / {questions.length}</span>
            <span className="result-stat-label">Total Score</span>
          </div>
          <div className="result-stat-box">
            <span className="result-stat-value">{accuracy}%</span>
            <span className="result-stat-label">Accuracy Rate</span>
          </div>
          <div className="result-stat-box">
            <span className="result-stat-value">{questions.length - score}</span>
            <span className="result-stat-label">Need Review</span>
          </div>
        </div>

        <div className="result-actions">
          <button className="btn primary" onClick={handleReset}>
            <RotateCcw size={16} /> Retry This Quiz
          </button>
          {onResetCategory && (
            <button className="btn outline" onClick={onResetCategory}>
              Browse Other Topics
            </button>
          )}
        </div>

        {answersHistory.some((a) => !a.isCorrect) && (
          <div className="missed-questions-panel">
            <h4>Recommended Review Items</h4>
            <div className="missed-list">
              {answersHistory
                .filter((a) => !a.isCorrect)
                .map((a, idx) => (
                  <div key={idx} className="missed-item">
                    <div className="missed-meta">
                      <span className="missed-topic">{a.topic || 'Pharmacology'}</span>
                      {a.lessonId && (
                        <Link to={`/lesson/${a.lessonId}`} className="missed-lesson-link">
                          Open Lesson <ArrowRight size={12} />
                        </Link>
                      )}
                    </div>
                    <p className="missed-q">{a.question}</p>
                    <p className="missed-exp">{a.explanation}</p>
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="quiz-interactive-card">
      <div className="quiz-header-bar">
        <div className="quiz-meta-tags">
          {currentQ.topic && <span className="quiz-topic-pill">{currentQ.topic}</span>}
          {currentQ.isNew && <span className="pill-new-pulse">NEW ARRIVAL</span>}
          {currentQ.lessonTitle && (
            <span className="quiz-lesson-ref">From: {currentQ.lessonTitle}</span>
          )}
        </div>
        <div className="quiz-counter">
          Question <strong>{i + 1}</strong> of {questions.length}
        </div>
      </div>

      <div className="quiz-progress-track">
        <div className="quiz-progress-fill" style={{ width: `${progressPercent}%` }} />
      </div>

      <h3 className="quiz-question-title">{currentQ.question}</h3>

      <div className="quiz-options-list">
        {currentQ.options.map((optionText, optIdx) => {
          let btnClass = 'quiz-option-btn';
          let icon = null;

          if (selected !== null) {
            if (optIdx === currentQ.answer) {
              btnClass += ' correct';
              icon = <CheckCircle2 size={18} className="option-state-icon" />;
            } else if (optIdx === selected) {
              btnClass += ' wrong';
              icon = <XCircle size={18} className="option-state-icon" />;
            } else {
              btnClass += ' disabled';
            }
          } else if (selected === optIdx) {
            btnClass += ' selected';
          }

          return (
            <button
              key={optIdx}
              className={btnClass}
              onClick={() => answer(optIdx)}
              disabled={selected !== null}
            >
              <span className="option-letter">{String.fromCharCode(65 + optIdx)}</span>
              <span className="option-text">{optionText}</span>
              {icon}
            </button>
          );
        })}
      </div>

      {selected !== null && (
        <div className={`quiz-feedback-box ${selected === currentQ.answer ? 'is-correct' : 'is-wrong'}`}>
          <div className="feedback-status-row">
            {selected === currentQ.answer ? (
              <span className="feedback-badge success">
                <CheckCircle2 size={16} /> Correct Answer
              </span>
            ) : (
              <span className="feedback-badge error">
                <XCircle size={16} /> Clinical Takeaway
              </span>
            )}
            {currentQ.lessonId && (
              <Link to={`/lesson/${currentQ.lessonId}`} className="feedback-lesson-link">
                <BookOpen size={14} /> Read Full Lesson Notes
              </Link>
            )}
          </div>
          <p className="feedback-explanation-text">{currentQ.explanation}</p>
          <div className="feedback-actions">
            <button className="btn primary" onClick={handleNext}>
              {i + 1 === questions.length ? (
                <>
                  View Assessment Results <ArrowRight size={16} />
                </>
              ) : (
                <>
                  Next Question <ArrowRight size={16} />
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
