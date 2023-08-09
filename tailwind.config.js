/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      poppins: "Poppins, sans-serif",
      noto: "Noto Sans JP, sans-serif",
      ubuntu: "Ubuntu Mono, monospace",
    },
    extend: {
      colors: {
        "dark-grey": "#333333",
        "bright-blue": "#2962FF",
        gunmetal: "#828282",
      },
      backgroundImage: {
        call: "url(assets/svg/call.svg)",
        lock: "url(assets/svg/lock.svg)",
      },
    },
  },
  plugins: [],
};
