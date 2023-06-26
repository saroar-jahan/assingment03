// 1.Date Object:

// a. Create a function that takes a date in the format "YYYY-MM-DD" as a parameter and returns the day of the week for that date. The function should use the Date object.

// b. Implement the function to display the day of the week for the current date.

function getDayOfWeek(dateString) {
    const date = new Date(dateString);
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayOfWeekIndex = date.getDay();
    const dayOfWeek = daysOfWeek[dayOfWeekIndex];
    return dayOfWeek;
  }
  
  const dayOfWeek = getDayOfWeek("2023-06-27");
  console.log(dayOfWeek); // Output: Sunday