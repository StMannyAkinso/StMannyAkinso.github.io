import experience from "./data.js";

export function renderExperience() {
  return experience
    .map(
      (exp) => `
      <div class="mb-6">
        <div class="font-bold text-lg text-purple-700">${exp.role}</div>
        <div class="text-sm text-gray-600">${exp.company} &mdash; ${exp.years}</div>
        <div class="mt-1 text-gray-700">${exp.description}</div>
      </div>
    `
    )
    .join("");
}
