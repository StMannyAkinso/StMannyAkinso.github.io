import preferredRoles from "./data.js";

export function renderPreferredRoles() {
  return `
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
      ${preferredRoles
        .map(
          (role) => `
          <div class="bg-white rounded-2xl shadow-md p-6 border border-purple-100 hover:shadow-lg transition">
            <h3 class="text-xl font-semibold text-purple-700 mb-2">${role.title}</h3>
            
            <div class="flex items-center text-sm text-gray-600 mb-2">
              <span class="mr-2">Proficiency:</span>
              <div class="flex">
                ${"⭐".repeat(role.proficiency)}
                ${"☆".repeat(5 - role.proficiency)}
              </div>
            </div>

            <p class="text-gray-600 text-sm leading-relaxed">${role.reason}</p>
          </div>
        `
        )
        .join("")}
    </div>
  `;
}
