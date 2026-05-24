export default function BingoBoard({ board, calledWords, boardNumber, printMode }) {
  return (
    <div className={`bingo-board ${printMode ? "print-board" : ""}`}>
      {boardNumber != null && (
        <div className="board-number">Board #{boardNumber}</div>
      )}
      <table>
        <thead>
          <tr>
            {"BINGO".split("").map((letter, i) => (
              <th key={i}>{letter}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {board.map((row, r) => (
            <tr key={r}>
              {row.map((word, c) => {
                const isFree = word === "FREE";
                const isCalled = isFree || calledWords?.includes(word);
                return (
                  <td
                    key={c}
                    className={`cell ${isFree ? "free" : ""} ${isCalled && !printMode ? "called" : ""}`}
                  >
                    {isFree ? "⭐" : word}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
