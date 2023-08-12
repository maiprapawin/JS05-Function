// TEAM: ท่าเรือใบสีฟ้า (Man City)
// Total Match: 38 [ignore ไม่มีผลกับ total]
// WIN: 28 => 28 * 3 = 84 [significant ในการคำนวณคะแนนทั้งหมด]
// DRAW: 5 => 5 * 1 = 5 [significant]
// LOSE: 5 => 5 * 0 = 0 [ignore]
// TOTAL: 89 scores

/////////////////////////////////

// Abstruction
// Hiding Complexity
// Easy Interact

// ... => TOTAL (para ไหนบ้างที่มีผลกับ total >> win & draw)

// (WIN, DRAW) => TOTAL

const calMatchPoint = (win, draw) => win * 3 + draw;
// ชนะกี่ครั้ง * แต้ม + จำนวนครั้งที่เสมอ
