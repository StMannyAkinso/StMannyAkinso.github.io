import process from "./data.js";

function renderProcess(targetId) {
  const html = `
    <section class="max-w-4xl mx-auto mt-10 mb-10 bg-${process.contactButton.color}-50 p-6 rounded-lg shadow-md z-10">
      <h2 class="text-3xl font-bold text-center text-${process.contactButton.color}-800 mb-4">
        ${process.title}
      </h2>

      <div class="flex justify-center mb-4">
        ${process.buttons
          .map(
            (btn, idx) => `
            <button
              id="${btn.id}"
              class="bg-${btn.color}-600 mx-2 text-white px-6 py-3 ${
                idx === 0 ? "rounded-l" : "rounded-r"
              } focus:outline-none hover:bg-${btn.color}-700 transition"
            >
              ${btn.label}
            </button>
          `
          )
          .join("")}
      </div>

      ${process.sections
        .map(
          (section) => `
        <div
          id="${section.id}"
          class="${section.visible ? "" : "hidden"} max-w-4xl mx-auto p-6 bg-${process.contactButton.color}-50"
        >
          <h4 class="text-2xl font-bold mb-4 text-center">
            ${section.title}
          </h4>
          <div class="relative">
            <div class="absolute left-0 top-0 h-full border-l-2 border-gray-300"></div>
            <ol class="mt-2 space-y-8">
              ${section.steps
                .map(
                  (step) => `
                <li class="relative flex items-start">
                  <div class="absolute w-6 h-6 bg-${step.color}-600 rounded-full -left-3"></div>
                  <div class="ml-4">
                    <strong class="text-lg">${step.title}</strong>
                    <p class="text-gray-600">${step.description}</p>
                  </div>
                </li>
              `
                )
                .join("")}
            </ol>
          </div>
        </div>
      `
        )
        .join("")}

      <div class="flex justify-center my-4">
        <a
          href="${process.contactButton.href}"
          class="mt-2 bg-${process.contactButton.color}-800 text-white px-6 py-3 rounded-lg hover:bg-${process.contactButton.color}-600 transition"
        >
          ${process.contactButton.label}
        </a>
      </div>
    </section>
  `;

  const el = document.getElementById(targetId);
  if (el) {
    el.innerHTML = html;

    // Add toggle functionality after DOM is injected
    const btnProject = el.querySelector("#toggleProject");
    const btnEmployment = el.querySelector("#toggleEmployment");
    const sectionProject = el.querySelector("#projectSection");
    const sectionEmployment = el.querySelector("#employmentSection");

    if (btnProject && btnEmployment && sectionProject && sectionEmployment) {
      btnProject.addEventListener("click", () => {
        sectionProject.classList.remove("hidden");
        sectionEmployment.classList.add("hidden");
        btnProject.classList.add("font-bold", "ring-2", "ring-purple-400");
        btnEmployment.classList.remove("font-bold", "ring-2", "ring-blue-400");
      });

      btnEmployment.addEventListener("click", () => {
        sectionEmployment.classList.remove("hidden");
        sectionProject.classList.add("hidden");
        btnEmployment.classList.add("font-bold", "ring-2", "ring-blue-400");
        btnProject.classList.remove("font-bold", "ring-2", "ring-purple-400");
      });
    }
  }
}

export default renderProcess;
