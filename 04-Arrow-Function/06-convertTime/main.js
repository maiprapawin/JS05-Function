// Abstraction >> ต้องคิดก่อนว่าอะไรจะต้องเป็น input

// day >> sec

// 1 day = 24 hrs * 60 min * 60 sec
// 1 day = 24 * 60 * 60
// 2 days = 2 * 1 day = 2 * 24 * 60 * 60

const HOUR_IN_DAY = 24;
const MIN_IN_HOUR = 60;
const SEC_IN_MIN = 60;

const convertDayToSec = (day) => day * HOUR_IN_DAY * MIN_IN_HOUR * SEC_IN_MIN;
