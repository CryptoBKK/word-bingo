export function shuffle(array) {
  const a = [...array];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function generateBoard(wordPool) {
  const picked = shuffle(wordPool).slice(0, 24);
  const rows = [];
  let idx = 0;
  for (let r = 0; r < 5; r++) {
    const row = [];
    for (let c = 0; c < 5; c++) {
      if (r === 2 && c === 2) {
        row.push("FREE");
      } else {
        row.push(picked[idx++]);
      }
    }
    rows.push(row);
  }
  return rows;
}

export function generateBoards(wordPool, count) {
  const boards = [];
  for (let i = 0; i < count; i++) {
    boards.push(generateBoard(wordPool));
  }
  return boards;
}
