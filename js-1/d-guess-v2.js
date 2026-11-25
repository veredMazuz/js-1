
// ד - משחק ניחושים V2

// המחשב בוחר מספר אקראי בין 1 ל-20
let secret = Math.floor(Math.random() * 20) + 1;

// בזמן הבדיקה אפשר להציג את המספר הסודי בקונסולה
// console.log(secret);

// מחרוזת שתכיל את כל הכפתורים
let html = "";

// יצירת 20 כפתורים
for (let i = 1; i <= 20; i++) {

  let action;

  // אם המספר קטן מהמספר הסודי
  if (i < secret) {

    action = `alert('${i} קטן מהמספר הסודי. נסי מספר גדול יותר')`;

  }

  // אם המספר גדול מהמספר הסודי
  else if (i > secret) {

    action = `alert('${i} גדול מהמספר הסודי. נסי מספר קטן יותר')`;

  }

  // אם המספר שווה למספר הסודי
  else {

    action = `document.body.style.color = 'green';
    document.body.innerHTML = '<h1>כל הכבוד! ניחשת נכון, המספר הסודי הוא ${secret}</h1>'`;

  }

  // הוספת הכפתור למחרוזת
  html += `<button onclick="${action}">${i}</button>`;

}

// הצגת כל הכפתורים בדף
document.body.innerHTML = html;
