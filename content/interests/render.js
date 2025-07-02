import interests from "./data.js";

export function renderInterests() {
  return `
    <h3 class="text-3xl font-bold text-purple-800 mb-4">🎯 Interests</h3>
    <p class="text-gray-700 mb-4">
      <strong>Preferred Roles:</strong> Data Analyst, Web Developer, Data Engineer
    </p>
    <p class="text-gray-700 mb-4">While I’m open to a wide range of projects, I’m naturally drawn to those that align with my passions and curiosities.</p>
    ${interests
      .map(
        (item) =>
          `<p class="text-gray-700 mb-2"><strong>${item.icon} ${item.label}:</strong> ${item.description}</p>`
      )
      .join("")}
  `;
}
