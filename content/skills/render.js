import {
  programmingLanguages,
  frontend,
  backend,
  databases,
  devopsTools,
  cmsEcommerce,
} from "./data.js";

function renderSkillSection(title, items) {
  return `
    <div class="mt-6">
      <h4 class="text-xl font-semibold text-gray-800 mb-2">${title}</h4>
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        ${items
          .map(
            (item) => `
            <div class="bg-gray-100 p-4 rounded-lg shadow-md flex flex-col items-center hover:shadow-lg transition">
              <img src="/Images/${item.img}.png" alt="${item.name}" class="h-16 w-16 mb-2" />
              <span class="text-gray-700">${item.name}</span>
            </div>
          `
          )
          .join("")}
      </div>
    </div>
  `;
}

export function renderSkills() {
  return `
    <h3 class="text-3xl font-bold text-purple-800 mb-4">💻 Tech Skills</h3>
    <p>
      I am well-versed in a variety of technologies, but I believe that
      skills go beyond specific tools. My focus is on continuously
      evolving and adapting to new technologies, as I am always eager to
      learn and grow in my craft.
    </p>
    ${renderSkillSection("Programming Languages", programmingLanguages)}
    ${renderSkillSection("Frontend Development", frontend)}
    ${renderSkillSection("Backend Development", backend)}
    ${renderSkillSection("Databases", databases)}
    ${renderSkillSection("Cloud/DevOps & Tools", devopsTools)}
    ${renderSkillSection("CMS & E-Commerce", cmsEcommerce)}
  `;
}
