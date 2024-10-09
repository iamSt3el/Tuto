import React, { useState, useEffect } from 'react';
import { CheckCircle, XCircle, Award } from 'lucide-react';
import styles from './testpage.module.scss';

const testData = [
    {
      "question": "What is the primary purpose of the Fibonacci heap data structure?",
      "options": [
        "To implement efficient sorting algorithms",
        "To optimize priority queue operations",
        "To store and retrieve key-value pairs",
        "To represent graphs efficiently"
      ],
      "correctAnswer": 1
    },
    {
      "question": "In the context of network flow problems, what does the Max-Flow Min-Cut theorem state?",
      "options": [
        "The maximum flow in a network is equal to the capacity of the minimum cut",
        "The minimum flow in a network is equal to the capacity of the maximum cut",
        "The maximum flow is always less than the minimum cut",
        "The minimum cut is always greater than the maximum flow"
      ],
      "correctAnswer": 0
    },
    {
      "question": "What is the time complexity of the Coppersmith–Winograd algorithm for matrix multiplication?",
      "options": [
        "O(n^2)",
        "O(n^2.376)",
        "O(n^3)",
        "O(n log n)"
      ],
      "correctAnswer": 1
    },
    {
      "question": "Which of the following is NOT a property of a skip list?",
      "options": [
        "Expected O(log n) search time",
        "O(n) worst-case search time",
        "Probabilistic balancing",
        "Guaranteed perfect balance"
      ],
      "correctAnswer": 3
    },
    {
      "question": "What is the main idea behind the Kirkpatrick-Seidel algorithm?",
      "options": [
        "It finds the shortest path in a graph",
        "It computes the convex hull of a set of points in 2D in O(n log h) time",
        "It solves the knapsack problem efficiently",
        "It performs matrix multiplication faster than the standard algorithm"
      ],
      "correctAnswer": 1
    },
    {
      "question": "In the context of string matching, what is the Z-algorithm used for?",
      "options": [
        "To compress strings efficiently",
        "To find all occurrences of a pattern in a text",
        "To sort strings lexicographically",
        "To generate random strings"
      ],
      "correctAnswer": 1
    },
    {
      "question": "What is the primary advantage of using a van Emde Boas tree?",
      "options": [
        "It provides O(log log u) time for operations on keys in the range [1, u]",
        "It uses less memory than binary search trees",
        "It allows for efficient range queries",
        "It supports efficient deletion of the minimum element"
      ],
      "correctAnswer": 0
    },
    {
      "question": "Which of the following is true about the Aho-Corasick algorithm?",
      "options": [
        "It is used for single pattern string matching",
        "It can match multiple patterns simultaneously",
        "It has a worst-case time complexity of O(n^2)",
        "It requires quadratic space complexity"
      ],
      "correctAnswer": 1
    },
    {
      "question": "What is the primary purpose of the Euler tour technique in graph algorithms?",
      "options": [
        "To find Eulerian circuits in a graph",
        "To linearize a tree for efficient processing of tree queries",
        "To compute the minimum spanning tree",
        "To detect cycles in a graph"
      ],
      "correctAnswer": 1
    },
    {
      "question": "In the context of computational geometry, what does Fortune's algorithm compute?",
      "options": [
        "The convex hull of a set of points",
        "The Delaunay triangulation",
        "The Voronoi diagram",
        "The closest pair of points"
      ],
      "correctAnswer": 2
    },
    {
      "question": "What is the main idea behind the Schönhage–Strassen algorithm?",
      "options": [
        "It sorts integers in linear time",
        "It multiplies large integers faster than the standard algorithm",
        "It finds prime factors of large numbers",
        "It computes the discrete Fourier transform efficiently"
      ],
      "correctAnswer": 1
    },
    {
      "question": "Which of the following data structures is most suitable for implementing a least recently used (LRU) cache?",
      "options": [
        "Array",
        "Binary Search Tree",
        "Hash Table with Doubly Linked List",
        "Min Heap"
      ],
      "correctAnswer": 2
    },
    {
      "question": "What is the primary purpose of the Tarjan's strongly connected components algorithm?",
      "options": [
        "To find the shortest path between two nodes",
        "To detect cycles in a graph",
        "To find all strongly connected components in a directed graph",
        "To compute the minimum spanning tree"
      ],
      "correctAnswer": 2
    },
    {
      "question": "In the context of string algorithms, what is the main advantage of using suffix arrays over suffix trees?",
      "options": [
        "Suffix arrays are faster to construct",
        "Suffix arrays use less space",
        "Suffix arrays support more operations",
        "Suffix arrays work better for very long strings"
      ],
      "correctAnswer": 1
    },
    {
      "question": "What is the time complexity of the push operation in an amortized analysis of a dynamic array?",
      "options": [
        "O(1)",
        "O(log n)",
        "O(n)",
        "O(n log n)"
      ],
      "correctAnswer": 0
    },
    {
      "question": "Which of the following is NOT a typical application of the Fast Fourier Transform (FFT)?",
      "options": [
        "Polynomial multiplication",
        "Signal processing",
        "Data compression",
        "Sorting algorithms"
      ],
      "correctAnswer": 3
    },
    {
      "question": "What is the main idea behind the Hopcroft-Karp algorithm?",
      "options": [
        "It finds the maximum matching in a bipartite graph",
        "It computes the shortest path in a weighted graph",
        "It determines if a graph is planar",
        "It finds the maximum flow in a network"
      ],
      "correctAnswer": 0
    },
    {
      "question": "In the context of string matching, what is the main advantage of the Rabin-Karp algorithm over the KMP algorithm?",
      "options": [
        "It has a better worst-case time complexity",
        "It can match multiple patterns simultaneously",
        "It doesn't require preprocessing of the pattern",
        "It uses less space"
      ],
      "correctAnswer": 1
    },
    {
      "question": "What is the primary purpose of the Dinic's algorithm?",
      "options": [
        "To find the shortest path in a graph",
        "To compute the maximum flow in a flow network",
        "To determine if a graph is bipartite",
        "To find the minimum spanning tree"
      ],
      "correctAnswer": 1
    },
    {
      "question": "Which of the following problems is NOT known to be in P (polynomial time)?",
      "options": [
        "Finding the maximum matching in a bipartite graph",
        "Determining if a number is prime",
        "Solving linear programming problems",
        "Finding a Hamiltonian cycle in a graph"
      ],
      "correctAnswer": 3
    }
  ];

const MCQTest = () => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(0);

  useEffect(() => {
    setQuestions(testData);
  }, []);

  const handleAnswerSelect = (questionIndex, answerIndex) => {
    if (answers.hasOwnProperty(questionIndex)) return; // Prevent changing answer if already answered

    const newAnswers = { ...answers, [questionIndex]: answerIndex };
    setAnswers(newAnswers);

    if (answerIndex === questions[questionIndex].correctAnswer) {
      setScore(prevScore => prevScore + 1);
    }
  };

  const getOptionClass = (questionIndex, optionIndex) => {
    if (!answers.hasOwnProperty(questionIndex)) return styles.optionButton;
    if (optionIndex === questions[questionIndex].correctAnswer) return styles.correctAnswer;
    if (answers[questionIndex] === optionIndex) return styles.incorrectAnswer;
    return styles.optionButton;
  };

  const renderIcon = (questionIndex, optionIndex) => {
    if (!answers.hasOwnProperty(questionIndex)) return null;
    if (optionIndex === questions[questionIndex].correctAnswer) return <CheckCircle className={styles.icon} />;
    if (answers[questionIndex] === optionIndex) return <XCircle className={styles.icon} />;
    return null;
  };

  if (questions.length === 0) {
    return <div className={styles.loading}>Loading...</div>;
  }

  const allQuestionsAnswered = Object.keys(answers).length === questions.length;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Multiple Choice Quiz</h1>
      {questions.map((question, qIndex) => (
        <div key={qIndex} className={styles.card}>
          <div className={styles.cardHeader}>
            <h2 className={styles.questionTitle}>
              Question {qIndex + 1} of {questions.length}
            </h2>
            <p className={styles.question}>{question.question}</p>
          </div>
          <div className={styles.cardContent}>
            <div className={styles.optionsGrid}>
              {question.options.map((option, oIndex) => (
                <button
                  key={oIndex}
                  onClick={() => handleAnswerSelect(qIndex, oIndex)}
                  className={getOptionClass(qIndex, oIndex)}
                  disabled={answers.hasOwnProperty(qIndex)}
                >
                  {option}
                  {renderIcon(qIndex, oIndex)}
                </button>
              ))}
            </div>
            {answers.hasOwnProperty(qIndex) && (
              <p className={styles.explanation}>
                {answers[qIndex] === question.correctAnswer 
                  ? "Correct! Well done." 
                  : `Incorrect. The correct answer is: ${question.options[question.correctAnswer]}`}
              </p>
            )}
          </div>
        </div>
      ))}
      {allQuestionsAnswered && (
        <div className={styles.resultsCard}>
          <h2 className={styles.resultsTitle}>Quiz Complete!</h2>
          <div className={styles.scoreContainer}>
            <Award className={styles.scoreIcon} />
            <p className={styles.resultsScore}>
              Your score: {score} out of {questions.length}
            </p>
          </div>
          <p className={styles.encouragement}>
            {score === questions.length 
              ? "Perfect score! Congratulations!" 
              : "Good effort! Review the questions above to see where you can improve."}
          </p>
        </div>
      )}
    </div>
  );
};

export default MCQTest;