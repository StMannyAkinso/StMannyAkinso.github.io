import { technicalAttributes, mentalAttributes } from "./data.js";

export function renderAttributes() {
  const techHtml = `
    <h3 class="text-2xl font-bold text-purple-800 mb-4 border-b border-purple-700 pb-1">Technical Attributes</h3>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-3 mb-10 text-sm font-medium text-gray-700">
      ${technicalAttributes
        .map(
          (attr) =>
            `<div class="attribute flex justify-between"><span>${attr.label}</span><span>${attr.value}</span></div>`
        )
        .join("")}
    </div>
  `;
  const mentalHtml = `
    <h3 class="text-2xl font-bold text-purple-800 mb-4 border-b border-purple-700 pb-1">Mental Attributes</h3>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-3 text-sm font-medium text-gray-700">
      ${mentalAttributes
        .map(
          (attr) =>
            `<div class="attribute flex justify-between"><span>${attr.label}</span><span>${attr.value}</span></div>`
        )
        .join("")}
    </div>
  `;
  return techHtml + mentalHtml;
}
