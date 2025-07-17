// engagement/process/data.js

const process = {
  title: "How to Proceed",
  buttons: [
    {
      id: "toggleProject",
      label: "Hire for Strategic Project",
      color: "purple",
      targetSectionId: "projectSection",
    },
    {
      id: "toggleEmployment",
      label: "Hire for Long-Term Partnership",
      color: "blue",
      targetSectionId: "employmentSection",
    },
  ],
  sections: [
    {
      id: "projectSection",
      visible: true,
      title: "For Strategic Project Engagements",
      steps: [
        {
          title: "Initial Consultation:",
          description:
            "Share your vision and goals for the project, and we'll align on scope, objectives, and key outcomes.",
          color: "purple",
        },
        {
          title: "Customised Proposal:",
          description:
            "After our consultation, I'll draft a tailored proposal outlining clear deliverables, timelines, and the investment required.",
          color: "purple",
        },
        {
          title: "Agreement & Commitment:",
          description:
            "Once you approve the proposal, we finalise the agreement to lock in timelines and key milestones for maximum impact.",
          color: "purple",
        },
        {
          title: "Kickoff & Vision Alignment:",
          description:
            "We start with a kickoff meeting to align the vision and ensure seamless execution, with ongoing strategic check-ins.",
          color: "purple",
        },
        {
          title: "Execution & Impact:",
          description:
            "I lead the execution phase, driving impactful results while maintaining clarity and momentum toward your goals.",
          color: "purple",
        },
        {
          title: "Ongoing Review & Refinement:",
          description:
            "We continuously review progress to refine and improve, ensuring that the work consistently exceeds expectations.",
          color: "purple",
        },
        {
          title: "Final Delivery & Legacy:",
          description:
            "I deliver the final product with all necessary documentation, ensuring the project leaves a lasting impact.",
          color: "purple",
        },
        {
          title: "Optional Continued Support:",
          description:
            "Following completion, I offer ongoing support to ensure the project remains optimised and continues to deliver results.",
          color: "purple",
        },
      ],
    },
    {
      id: "employmentSection",
      visible: false,
      title: "For Long-Term Partnerships",
      steps: [
        {
          title: "Initial Contact:",
          description:
            "Start by sending a brief overview of your organisation and the role you're looking to fill, including any specific expectations.",
          color: "blue",
        },
        {
          title: "Preliminary Discussion:",
          description:
            "We’ll discuss how my skills align with your needs and define the role's structure, including hours and duration (3, 6, 12 months etc).",
          color: "blue",
        },
        {
          title: "Contract Proposal:",
          description:
            "If we move forward, I'll send a formal proposal with scope, expected hours, and compensation, tailored to the service level (Standard, Advanced, or Expert).",
          color: "blue",
        },
        {
          title: "Agreement Finalisation:",
          description:
            "Once the proposal is accepted, we’ll finalize the contract details, including payment terms and deliverables.",
          color: "blue",
        },
        {
          title: "Onboarding & Integration:",
          description:
            "We’ll set a start date and I’ll be integrated into your team, ensuring smooth onboarding to hit the ground running.",
          color: "blue",
        },
        {
          title: "Ongoing Collaboration:",
          description:
            "Throughout the contract, we’ll maintain a close working relationship to ensure your business needs are met and expectations are exceeded.",
          color: "blue",
        },
        {
          title: "Contract Review & Renewal:",
          description:
            "As the contract nears its end, we’ll assess progress and discuss renewal or next steps, ensuring alignment for continued success.",
          color: "blue",
        },
      ],
    },
  ],
  contactButton: {
    label: "Get In Touch",
    href: "/contact.html",
    color: "purple",
  },
};

export default process;
