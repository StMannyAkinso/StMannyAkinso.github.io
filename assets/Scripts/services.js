import { renderServices } from "../../content/services/services/render.js";
import { renderEngagement } from "../../content/services/engagement/render.js";
import { renderPricing } from "../../content/services/pricing/render.js";
import renderProcess from "../../content/services/process/render.js";

document.addEventListener("DOMContentLoaded", () => {
  // Render Services Grid
 renderServices("services-grid");

  // Render Engagement Options
  renderEngagement("engagement-section");

  // Render Pricing Table
  // renderPricing("pricing-table");

  // Render Process Section
  renderProcess("process-section");
});
