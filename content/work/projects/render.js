// projects/render.js

import projects from "./data.js";

function renderProjects(targetId) {
  const container = document.getElementById(targetId);
  if (!container) return;

  const html = projects
    .map((project, index) => {
      // Use project.id if available; otherwise, fallback to index for unique IDs
      const id = project.id || index;

      // Lock/unlock icons (SVG inline for better styling)
      const lockIcon = project.private
        ? `<i class="fa-solid fa-lock"></i>`
        : `<i class="fa-solid text-green-500 fa-lock-open"></i>`;

      const highlightsHtml = Array.isArray(project.highlights)
        ? `
    <button
      class="toggle-highlights mb-2 text-purple-600 hover:text-purple-800 text-sm font-semibold focus:outline-none"
      aria-expanded="false"
      aria-controls="highlights-${id}"
    >
      Show Highlights ▼
    </button>
    <div
      id="highlights-${id}"
      class="highlights hidden space-y-1 text-sm text-gray-700 mb-4"
    >
      <ul class="list-disc list-inside">
        ${project.highlights
          .map((highlight) => `<li>${highlight}</li>`)
          .join("")}
      </ul>
    </div>
  `
        : "";

      return `
        <div class="project bg-white border border-gray-200 rounded-2xl shadow hover:shadow-lg transition p-6 mb-6">
          <h3 class="text-2xl font-semibold text-gray-900 mb-1">
            ${project.title} ${lockIcon}
          </h3>
          <p class="text-gray-600 text-sm mb-3">${project.metaDescription}</p>
          ${highlightsHtml}
          <div class="text-sm text-gray-500 mb-3">
            <span class="font-medium text-gray-700">Tech:</span> ${project.tech.join(
              ", "
            )}
          </div>
          <div class="flex flex-wrap gap-2 text-xs mb-4">
            ${project.tags
              .map(
                (tag) =>
                  `<span class="bg-purple-100 text-purple-800 px-2 py-1 rounded-full font-medium">${tag}</span>`
              )
              .join("")}
          </div>
          ${
            project.link
              ? `<a href="${project.link}" target="_blank" class="inline-block text-sm font-medium text-purple-600 hover:text-purple-800 transition">🔗 View Project</a>`
              : `<span class="text-sm italic text-gray-400">Project is currently private</span>`
          }
        </div>
      `;
    })
    .join("");

  container.innerHTML = html;

  // Add toggle functionality for highlights
  const buttons = container.querySelectorAll(".toggle-highlights");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const controlsId = button.getAttribute("aria-controls");
      const highlightsDiv = document.getElementById(controlsId);
      if (!highlightsDiv) return;

      const isHidden = highlightsDiv.classList.contains("hidden");

      if (isHidden) {
        highlightsDiv.classList.remove("hidden");
        button.textContent = "Hide Highlights ▲";
        button.setAttribute("aria-expanded", "true");
      } else {
        highlightsDiv.classList.add("hidden");
        button.textContent = "Show Highlights ▼";
        button.setAttribute("aria-expanded", "false");
      }
    });
  });
}

export default renderProjects;
