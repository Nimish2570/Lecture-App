// Quiz.js
import React, { useState, useEffect } from 'react';

const Quiz = ({ quizData }) => {
  const [showQuiz, setShowQuiz] = useState(false);

  useEffect(() => {
    // Check if the current time is within the quiz interval
    const currentTime = new Date().toISOString().substr(11, 8);
    if (quizData[currentTime]) {
      setShowQuiz(true);
    } else {
      setShowQuiz(false);
    }
  }, [quizData]);

  return (
    <div>
      {showQuiz && (
        <div className="quiz-container">
          <h3>Quiz Time!</h3>
          {/* Display quiz questions and options here */}
        </div>
      )}
    </div>
  );
};

export default Quiz;
