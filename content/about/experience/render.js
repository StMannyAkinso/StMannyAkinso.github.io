import experience from "./data.js";

export function renderExperience() {
  return experience
    .map(
      (exp) => `
      <div class="bg-white rounded-2xl shadow-md p-6 border border-purple-100 hover:shadow-lg transition mb-6">
        <div class="font-bold text-lg text-purple-700">${exp.role}</div>
        <div class="text-sm text-gray-600">${exp.company} &mdash; ${exp.years}</div>
        <div class="text-gray-500">📍${exp.location}</div>
        <div class="mt-1 text-gray-700">${exp.description}</div>
        <ul class="list-disc pl-5 mt-2 text-gray-700">
          ${exp.responsibilities
            .map((responsibility) => `<li class='' >${responsibility}</li>`)
        .join("")}
        </ul>

      </div>
    `
    )
    .join("");
}
