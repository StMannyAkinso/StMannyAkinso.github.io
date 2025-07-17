import services from "./data.js";

export function renderServices(targetId) {
  const html = services
    .map(
      (service) => `
        <div class="bg-purple-50 p-6 rounded-lg shadow-md hover:shadow-lg transition transform hover:scale-105">
          <div class="${service.iconColor} text-4xl mb-4">
            <i class="${service.iconClass}"></i>
          </div>
          <h3 class="text-3xl font-bold text-purple-800 mb-4">
            ${service.title}
          </h3>
          <p class="mt-2 text-gray-700">
            ${service.description}
          </p>
          <ul class="mt-4 text-gray-600 text-sm">
            ${service.highlights
              .map(
                (item) =>
                  `<li><strong>${item.title}:</strong> ${item.detail}</li>`
              )
              .join("")}
          </ul>
        </div>
      `
    )
    .join("");
  const el = document.getElementById(targetId);
  if (el) el.innerHTML = html;
}