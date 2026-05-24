import { useState } from "react";
import { generateBoards } from "../bingo";
import BingoBoard from "./BingoBoard";

export default function PrintView({ wordPool, round, theme, onClose }) {
  const [boardCount, setBoardCount] = useState(10);
  const [boards, setBoards] = useState(null);

  function handleGenerate() {
    setBoards(generateBoards(wordPool, boardCount));
  }

  function handlePrint() {
    window.print();
  }

  return (
    <div className="print-view">
      <div className="print-controls no-print">
        <h2>Print Boards &mdash; Round {round}: {theme}</h2>
        <div className="print-options">
          <label>
            Number of boards:
            <input
              type="number"
              min={1}
              max={30}
              value={boardCount}
              onChange={(e) =>
                setBoardCount(Math.min(30, Math.max(1, Number(e.target.value))))
              }
            />
          </label>
          <button className="btn generate" onClick={handleGenerate}>
            Generate Boards
          </button>
          {boards && (
            <button className="btn print" onClick={handlePrint}>
              🖨️ Print
            </button>
          )}
          <button className="btn back" onClick={onClose}>
            ← Back to Game
          </button>
        </div>
      </div>

      {boards && (
        <div className="print-boards">
          {boards.map((board, i) => (
            <div key={i} className="print-page">
              <div className="print-header">
                Round {round}: {theme}
              </div>
              <BingoBoard
                board={board}
                calledWords={[]}
                boardNumber={i + 1}
                printMode={true}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
