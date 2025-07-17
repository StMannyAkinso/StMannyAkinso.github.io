import { renderAttributes } from "../../content/about/attributes/render.js";
import { renderExperience } from "../../content/about/experience/render.js";
import { renderSkills } from "../../content/about/skills/render.js";
import { renderPreferredRoles } from "../../content/about/roles/render.js";

// Static About content
const aboutHtml = `
  <h3 class="text-3xl font-bold text-purple-800 mb-4">🤔 About Me</h3>
  <p class="mt-4 text-gray-700">
    I am Manny, a data-driven web developer specialising in
    transforming complex data into intuitive, visually engaging web
    experiences. I use data analytics to optimise websites and
    dashboards, creating dynamic visualisations that enhance user
    engagement and drive conversion. With a strong foundation in both
    web development and data science, I excel at managing data flows,
    ensuring that every element of a website serves a purpose aligned
    with business goals. I enjoy crafting seamless digital experiences
    that not only tell a story, but also empower users through clarity
    and insight. Let's connect to bring your data to life!
  </p>
`;

const tabs = [
  { key: "attributes", label: "Attributes" },
  { key: "about", label: "About" },
  { key: "experience", label: "Experience" },
  { key: "skills", label: "Skills" },
  { key: "roles", label: "Roles" },
];

const flagIconStyle = `width: 24px; height: 24px; display: inline-block; vertical-align: middle;`;

const profileData = [
  { label: "Name:", value: "Manny Akinso" },
  { label: "Age:", value: "28" },
  {
    label: "Nationality:",
    value: `<img src="/Images/Icons/uk.png" alt="English" style="${flagIconStyle}" />`,
  },
  { label: "Current Company:", value: "Lambeth Council" },
  { label: "Current Position:", value: "Data Analyst" },
  {
    label: "Languages:",
    value: `
      <img src="/Images/Icons/england.png" alt="English" style="${flagIconStyle}" />
      <img src="/Images/Icons/spain.png" alt="Spanish" style="${flagIconStyle}" />
      <img src="/Images/Icons/portugal.png" alt="Portuguese" style="${flagIconStyle}" />
    `,
  },
  {
    label: "Current Ability:",
    value: `<span class="text-yellow-400">⭐️⭐️⭐️⭐️</span>`,
  },
  {
    label: "Potential Ability:",
    value: `<span class="text-yellow-400">⭐️⭐️⭐️⭐️⭐️</span>`,
  },
];

function renderProfile() {
  return `
    <h2 class="text-3xl font-bold text-purple-800 mb-2">Profile</h2>
    ${profileData
      .map(
        ({ label, value }) => `
      <p>
        <strong class="text-purple-600 text-sm">${label}</strong> ${value}
      </p>
    `
      )
      .join("")}
    <div class="mt-2 space-y-3">
      ${tabs
        .map(
          (tab, idx) => `
        <button
          data-tab="${tab.key}"
          class="tab-btn ${
            idx === 0 ? "bg-purple-500 text-white" : "bg-purple-200"
          } px-6 py-2 rounded-lg w-full hover:bg-purple-600 transition text-sm"
        >${tab.label}</button>
      `
        )
        .join("")}
    </div>
  `;
}

function getTabContent(key) {
  switch (key) {
    case "attributes":
      return renderAttributes();
    case "about":
      return aboutHtml;
    case "experience":
      return `<h3 class="text-3xl font-bold text-purple-800 mb-4">💼 Experience</h3>
        <div class="mt-4 text-gray-700 space-y-4">${renderExperience()}</div>`;
    case "skills":
      return renderSkills();
    case "roles":
      return `<h3 class="text-3xl font-bold text-purple-800 mb-4">🔍 Preferred Roles</h3>
        <p class="mt-4 text-gray-700">
          For those that are looking to add me to their team log term, these are roles I am most interested in pursuing, where I can leverage my skills in data or web development to create impactful solutions. I believe that I can become a 5 star player in these positions with the right opportunities and challenges.
        <div class="mt-4 text-gray-700 space-y-4">${renderPreferredRoles()}</div>`;
    default:
      return "";
  }
}

function highlightTab(activeKey) {
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    const isActive = btn.getAttribute("data-tab") === activeKey;
    btn.classList.toggle("bg-purple-500", isActive);
    btn.classList.toggle("text-white", isActive);
    btn.classList.toggle("bg-purple-200", !isActive);
    btn.classList.toggle("hover:bg-purple-600", isActive);
    btn.classList.toggle("hover:bg-purple-300", !isActive);
  });
}

function colorCodeAttributes() {
  document.querySelectorAll(".attribute").forEach((attr) => {
    const spans = attr.querySelectorAll("span");
    if (spans.length < 2) return;
    const valSpan = spans[1];
    const val = parseInt(valSpan.textContent, 10);
    valSpan.classList.remove(
      "text-white",
      "text-yellow-400",
      "text-green-400",
      "text-gray-400"
    );
    if (val >= 0 && val <= 10) {
      valSpan.classList.add("text-gray-400");
    } else if (val >= 11 && val <= 15) {
      valSpan.classList.add("text-yellow-400");
    } else if (val >= 16 && val <= 20) {
      valSpan.classList.add("text-green-400");
    }
  });
}

function renderLayout() {
  document.getElementById("profile-section").innerHTML = renderProfile();
  showSection("attributes");
  // Attach tab event listeners
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const tab = btn.getAttribute("data-tab");
      showSection(tab);
    });
  });
}

function showSection(key) {
  const rightSection = document.getElementById("right-section");
  rightSection.innerHTML = getTabContent(key);
  highlightTab(key);
  if (key === "attributes") colorCodeAttributes();
}

document.addEventListener("DOMContentLoaded", renderLayout);
