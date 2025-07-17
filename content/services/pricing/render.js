// pricing/render.js

import pricing from './data.js';

export function renderPricing(containerId = 'pricing-table') {
  const container = document.getElementById(containerId);
  if (!container) return;

  // Create table
  const table = document.createElement('table');
  table.className = 'w-full bg-white shadow-lg rounded-lg border border-gray-300';

  // Table header
  const thead = document.createElement('thead');
  thead.className = 'bg-purple-200';
  thead.innerHTML = `
    <tr>
      <th class="border border-gray-300 px-4 py-2 text-left">Service</th>
      <th class="border border-gray-300 px-4 py-2 text-left">Standard</th>
      <th class="border border-gray-300 px-4 py-2 text-left">Advanced</th>
      <th class="border border-gray-300 px-4 py-2 text-left">Expert</th>
    </tr>
  `;
  table.appendChild(thead);

  // Table body
  const tbody = document.createElement('tbody');

  pricing.forEach((item, index) => {
    const row = document.createElement('tr');
    row.className = `bg-white ${
      index % 2 === 1 ? 'hover:bg-gray-100' : 'hover:bg-purple-100'
    } transition duration-200`;

    // Service name
    const serviceCell = document.createElement('td');
    serviceCell.className = 'border border-gray-300 px-4 py-2 font-bold';
    serviceCell.textContent = item.service;
    row.appendChild(serviceCell);

    // Pricing tiers
    item.tiers.forEach((tier) => {
      const cell = document.createElement('td');
      cell.className = 'border border-gray-300 px-4 py-2';
      cell.innerHTML = `
        <strong class="text-purple-800">${tier.rate}</strong> (${tier.description})
      `;
      row.appendChild(cell);
    });

    tbody.appendChild(row);
  });

  table.appendChild(tbody);
  container.appendChild(table);
}
