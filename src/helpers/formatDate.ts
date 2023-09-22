export default function formatDate(dateString: string) {
  const date = new Date(dateString);
  if (!isNaN(date.getTime())) {
    return date.toLocaleDateString("pt-BR"); // Format the date as desired
  }
  return dateString; // Return the original string if it's not a valid date
}
