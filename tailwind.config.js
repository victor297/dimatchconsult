/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppinsBold: ["Poppins", "sans-serif"], //font-weight: 700;
        poppinsSemiBold: ["Poppins", "sans-serif"], //font-weight: 600
        poppinsRegular: ["Poppins", "sans-serif"], //font-weight: 400
        interSemiBold: ["Inter", "sans-serif"], //font-weight: 600
        interRegular: ["Inter", "sans-serif"], //font-weight: 400
        cabinRegular: ["Cabin", "sans-serif"], //font-weight: 400
      },
      colors: {
        white: "rgba(255, 255, 255, 1)",
        blue: "rgba(107, 119, 229, 1)",
        lightBlue: " rgba(122,133,232,1.00)",
        green: "rgba(64, 221, 182, 1)",
        darkGray: "rgba(55, 57, 63, 1)",
        lightGray: "rgba(185, 185, 185, 1)",
        veryLightGray: "rgba(185, 185, 185, 1)",
        transparentGray: "rgba(55, 57, 63, 0.8)",
        transparentGrayBanner: "rgba(55, 57, 63, 0.91)",
      },
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
