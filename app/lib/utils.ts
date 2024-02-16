export function isTokenExpired() {
  const token = localStorage.getItem("token");
  const maxAgeMillis = 30 * 1000;

  if (token) {
    // Get the token date and current date
    const tokenData = JSON.parse(token);
    const tokenDateInMillis = new Date(tokenData.date).getTime();
    const currentDate = new Date();

    // Calculate difference
    const differenceInMillis = currentDate.getTime() - tokenDateInMillis;

    return differenceInMillis > maxAgeMillis;
  }
}
