import React, { useState } from 'react';
import { quizQuestions, dinoResults } from './quizData';

const DinoQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [result, setResult] = useState(null);

  const handleAnswer = (trait) => {
    const newAnswers = [...answers, trait];
    setAnswers(newAnswers);

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResult(newAnswers);
    }
  };

  const calculateResult = (finalAnswers) => {
    const traitCount = finalAnswers.reduce((acc, trait) => {
      acc[trait] = (acc[trait] || 0) + 1;
      return acc;
    }, {});

    const matchedDino = dinoResults.reduce((best, dino) => {
      const score = dino.traits.reduce((sum, trait) => sum + (traitCount[trait] || 0), 0);
      return score > best.score ? { dino, score } : best;
    }, { dino: dinoResults[0], score: 0 }).dino;

    setResult(matchedDino);
    setShowResults(true);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
    setResult(null);
  };

  if (showResults && result) {
    return (
      <div className="quiz-container">
        <h2>Your Dinosaur Match:</h2>
        <h3>{result.name}</h3>
        <img src={result.image} alt={result.name} />
        <p>{result.description}</p>
        <button onClick={restartQuiz}>Take Quiz Again</button>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <h2>Which Dinosaur Are You?</h2>
      <p>Question {currentQuestion + 1} of {quizQuestions.length}:</p>
      <p>{quizQuestions[currentQuestion].question}</p>
      {quizQuestions[currentQuestion].options.map((option, index) => (
        <button key={index} onClick={() => handleAnswer(option.trait)}>
          {option.text}
        </button>
      ))}
    </div>
  );
};

export default DinoQuiz;