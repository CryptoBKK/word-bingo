export default function Caller({ currentWord, calledWords, wordPool }) {
  return (
    <div className="caller-section">
      <div className="current-word-display">
        {currentWord ? (
          <>
            <div className="current-label">Current Word:</div>
            <div className="current-word">{currentWord}</div>
          </>
        ) : (
          <div className="current-label">Press "Call Next Word" to begin!</div>
        )}
      </div>

      <div className="called-words">
        <h3>Called Words ({calledWords.length} / {wordPool.length})</h3>
        <div className="word-list">
          {calledWords.map((word, i) => (
            <span key={i} className="called-chip">{word}</span>
          ))}
        </div>
      </div>

      <div className="remaining-words">
        <h3>Remaining ({wordPool.length - calledWords.length})</h3>
        <div className="word-list">
          {wordPool
            .filter((w) => !calledWords.includes(w))
            .map((word, i) => (
              <span key={i} className="remaining-chip">{word}</span>
            ))}
        </div>
      </div>
    </div>
  );
}
