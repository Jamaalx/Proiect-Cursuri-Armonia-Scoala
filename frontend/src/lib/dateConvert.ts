export function getTodayFormatted() {
  const date = new Date();
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  const raw = date.toLocaleDateString('ro-RO', options);
  return raw.charAt(0).toUpperCase() + raw.slice(1);
}