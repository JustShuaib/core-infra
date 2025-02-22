function formatDate() {
  const targetDate = new Date(); // Create a Date object for 11 Nov 2025

  const day = targetDate.getDate();
  const month = targetDate.toLocaleString("default", {month: "short"}); // Get short month name
  const year = targetDate.getFullYear();

  return `${day} ${month} ${year}`;
}


export default formatDate
