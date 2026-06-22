import { useState, useCallback } from "react";
import ROUND_WORDS, { GRADE_LEVELS } from "./words";
import { shuffle, generateBoard } from "./bingo";
import BingoBoard from "./components/BingoBoard";
import Caller from "./components/Caller";
import PrintView from "./components/PrintView";
import "./App.css";

export default function App() {
  const [gradeLevel, setGradeLevel] = useState("3_4");
  const [round, setRound] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [wordPool, setWordPool] = useState([]);
  const [calledWords, setCalledWords] = useState([]);
  const [shuffledPool, setShuffledPool] = useState([]);
  const [callIndex, setCallIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState(null);
  const [demoBoard, setDemoBoard] = useState(null);
  const [showPrint, setShowPrint] = useState(false);

  const startRound = useCallback((roundIdx) => {
    const data = ROUND_WORDS[gradeLevel][roundIdx];
    const pool = [...data.words];
    const shuffled = shuffle(pool);
    setRound(roundIdx);
    setWordPool(pool);
    setShuffledPool(shuffled);
    setCalledWords([]);
    setCallIndex(0);
    setCurrentWord(null);
    setDemoBoard(generateBoard(pool));
    setGameStarted(true);
    setShowPrint(false);
  }, [gradeLevel]);

  function callNextWord() {
    if (callIndex >= shuffledPool.length) return;
    const word = shuffledPool[callIndex];
    setCurrentWord(word);
    setCalledWords((prev) => [...prev, word]);
    setCallIndex((prev) => prev + 1);
  }

  function nextRound() {
    if (round < 9) {
      startRound(round + 1);
    }
  }

  function resetGame() {
    setGameStarted(false);
    setRound(0);
    setWordPool([]);
    setCalledWords([]);
    setShuffledPool([]);
    setCallIndex(0);
    setCurrentWord(null);
    setDemoBoard(null);
    setShowPrint(false);
  }

  if (showPrint) {
    return (
      <PrintView
        wordPool={wordPool}
        round={round + 1}
        theme={ROUND_WORDS[gradeLevel][round].theme}
        onClose={() => setShowPrint(false)}
      />
    );
  }

  if (!gameStarted) {
    return (
      <div className="app">
        <div className="welcome">
          <h1>Word Bingo!</h1>
          <p className="subtitle">A fun reading game for kids</p>

          <div className="grade-select">
            <h2>Choose a Grade Level</h2>
            <div className="grade-grid">
              {Object.entries(GRADE_LEVELS).map(([key, label]) => (
                <button
                  key={key}
                  className={`btn grade-btn ${gradeLevel === key ? "active" : ""}`}
                  onClick={() => setGradeLevel(key)}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div className="round-select">
            <h2>Choose a Round to Start</h2>
            <div className="round-grid">
              {ROUND_WORDS[gradeLevel].map((data, i) => (
                <button
                  key={i}
                  className="btn round-btn"
                  onClick={() => startRound(i)}
                >
                  <span className="round-num">Round {i + 1}</span>
                  <span className="round-theme">{data.theme}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  const allCalled = callIndex >= shuffledPool.length;
  const theme = ROUND_WORDS[gradeLevel][round].theme;
  const gradeLevelLabel = GRADE_LEVELS[gradeLevel];

  return (
    <div className="app">
      <header className="game-header no-print">
        <h1>Word Bingo!</h1>
        <div className="round-info">
          <span className="grade-badge">{gradeLevelLabel}</span>
          <span className="round-badge">Round {round + 1} / 10</span>
          <span className="theme-badge">{theme}</span>
        </div>
        <div className="header-actions">
          <button className="btn print" onClick={() => setShowPrint(true)}>
            Print Boards
          </button>
          <button className="btn reset" onClick={resetGame}>
            Home
          </button>
        </div>
      </header>

      <main className="game-main no-print">
        <div className="controls">
          <button
            className="btn call"
            onClick={callNextWord}
            disabled={allCalled}
          >
            {allCalled
              ? "All Words Called!"
              : currentWord
                ? "Call Next Word"
                : "Start Calling!"}
          </button>

          {allCalled && round < 9 && (
            <button className="btn next-round" onClick={nextRound}>
              Next Round
            </button>
          )}
        </div>

        <Caller
          currentWord={currentWord}
          calledWords={calledWords}
          wordPool={wordPool}
        />

        <div className="demo-section">
          <h3>Sample Board (for caller reference)</h3>
          <BingoBoard board={demoBoard} calledWords={calledWords} />
          <button
            className="btn shuffle-demo"
            onClick={() => setDemoBoard(generateBoard(wordPool))}
          >
            Shuffle Demo Board
          </button>
        </div>
      </main>
    </div>
  );
}
