export function decide(input) {
  if (!input) return "No input";

  if (input.includes("money"))
    return "Focus on building assets, not hours.";

  return "Decision processed.";
}
