export default function CapitalLetter(str) {
  if (!str) return str;
  return str[0].toUpperCase() + str.slice(1);
}
