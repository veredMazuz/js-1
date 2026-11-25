
// ג - משחק ניחושים V1

let playAgain = true;

while (playAgain) {

  // בחירת מספר אקראי בין 1 ל-20
  let secret = Math.floor(Math.random() * 20) + 1;

  // מונה הניחושים מתחיל מחדש בכל משחק
  let guesses = 0;

  let guessedCorrectly = false;

  // לולאת הניחושים
  while (!guessedCorrectly) {

    let answer = prompt("נחשי מספר בין 1 ל-20:");

    // אם לחצו ביטול, יוצאים מהמשחק
    if (answer === null) {
      alert("המשחק הסתיים.");
      break;
    }

    let guess = Number(answer);

    // בדיקה שהוכנס מספר תקין
    if (!Number.isInteger(guess) || guess < 1 || guess > 20) {
      alert("נא להכניס מספר שלם בין 1 ל-20.");
      continue;
    }

    guesses++;

    // בדיקת הניחוש
    if (guess < secret) {
      alert("נמוך מדי! נסי מספר גדול יותר.");
    }

    else if (guess > secret) {
      alert("גבוה מדי! נסי מספר קטן יותר.");
    }

    else {
      guessedCorrectly = true;
    }
  }

  // אם המשתמשת ביטלה את המשחק
  if (!guessedCorrectly) {
    break;
  }

  // קביעת הודעה לפי מספר הניחושים
  let message;

  if (guesses <= 3) {
    message = "מדהים!";
  }

  else if (guesses <= 6) {
    message = "יפה מאוד";
  }

  else {
    message = "אפשר לשפר";
  }

  let finalMessage = message + " ניחשת אחרי " + guesses + " ניסיונות";

  alert(finalMessage);
  console.log(finalMessage);

  // האם לשחק שוב?
  playAgain = confirm("לשחק שוב?");
}
