// projects/render.js

import projects from "./data.js";

function renderProjects(targetId) {
  const container = document.getElementById(targetId);
  if (!container) return;

  const html = projects
    .filter((project) => !project.private) // skip private projects
    .map(
      (project) => `
      <div class="project bg-white hover:bg-purple-100 p-4 rounded-lg shadow-md transition cursor-pointer">
        <h3 class="text-xl font-semibold text-gray-800">${project.title}</h3>
        <p class="text-gray-600 text-sm mt-1 mb-2">${project.metaDescription}</p>
        <div class="text-sm text-gray-500 mb-2">
          <strong>Tech:</strong> ${project.tech.join(", ")}
        </div>
        <div class="flex flex-wrap gap-2 text-xs text-white mb-3">
          ${project.tags
            .map(
              (tag) => `<span class="bg-purple-600 px-2 py-1 rounded">${tag}</span>`
            )
            .join("")}
        </div>
        ${
          project.link
            ? `<a href="${project.link}" target="_blank" class="text-purple-700 underline text-sm">View Project</a>`
            : `<span class="text-gray-400 text-sm italic">No live link available</span>`
        }
      </div>
    `
    )
    .join("");

  container.innerHTML = html;
}

export default renderProjects;
