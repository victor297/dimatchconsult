/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "about-texture": "url('/about.jpg')",
        "contact-texture": "url('/contact.jpg')",
        "faq-texture": "url('/faq.jpg')",
        "home-texture": "url('/home.jpg')",
        "project-texture": "url('/project.jpg')",
        "projectdetail-texture": "url('/projectdetail.jpg')",
        "service-texture": "url('/service.jpg')",
        "servicedetail-texture": "url('/servicedetail.jpg')",
        "team-texture": "url('/team.jpg')",
      },
    },
  },
  plugins: [],
};
