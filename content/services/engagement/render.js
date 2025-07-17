// engagement/render.js

import engagement from "./data.js";

export function renderEngagement(containerId = "engagement-section") {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <h2 class="text-3xl text-center font-bold text-purple-800 mb-4">
      Engagement Options
    </h2>
    ${engagement
      .map((option) => {
        return `
        <div class="mt-8">
          <h3 class="text-2xl font-semibold mt-4 text-purple-800">
            ${option.title}
          </h3>
          <p class="mt-2 text-gray-700">
            ${option.description}
          </p>

          <ul class="mt-4 text-gray-600">
            ${option.benefits
              .map(
                (b) => `
              <li>
                ✅ <strong>${b.title} –</strong> ${b.detail}
              </li>
            `
              )
              .join("")}
          </ul>

          <h4 class="text-xl font-semibold mt-4">${option.tiersTitle}</h4>
          <ul class="mt-4 text-gray-600">
            ${option.tiers
              .map(
                (tier) => `
              <li>
                🔹 <strong>${tier.name}:</strong> ${tier.detail}
              </li>
            `
              )
              .join("")}
          </ul>

          ${
            option.note
              ? `<p class="mt-4 text-gray-600 text-sm"><strong>${option.note}</strong></p>`
              : ""
          }
        </div>`;
      })
      .join("")}
  `;
}
