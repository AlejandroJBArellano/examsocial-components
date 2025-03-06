/** @type {import('tailwindcss').Config} */
export default {
  content: ["./lib/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      lineHeight: {
        tight: "20px",
        loose: "32px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      borderWidth: {
        xs: "0.5px",
        sm: "1px",
        DEFAULT: "2px",
        lg: "4px",
        xl: "6px",
      },
      borderRadius: {
        sm: "4px",
        md: "8px",
        lg: "12px",
        xl: "16px",
        "2xl": "24px",
        "3xl": "32px",
        full: "9999px",
      },
      boxShadow: {
        "left-sm": "-2px 2px 0px 0px #000",
        left: "-4px 4px 0px 0px #000",
        "left-lg": "-8px 8px 0px 0px #000",
        "right-sm": "2px 2px 0px 0px #000",
        right: "4px 4px 0px 0px #000",
        "right-lg": "8px 8px 0px 0px #000",
      },
      spacing: {
        1: "4px",
        2: "8px",
        3: "12px",
        4: "16px",
        5: "20px",
        6: "24px",
        7: "28px",
        8: "32px",
        9: "36px",
        10: "40px",
        11: "44px",
        12: "48px",
        13: "52px",
        14: "52px",
        46: "184px",
      },
    },
  },
  plugins: [
    require("tailwindcss-themer")({
      defaultTheme: {
        extend: {
          colors: {
            primary: {
              DEFAULT: "#66E5FF",
              shadow: "#047C95",
              tint: "#EDFAFD",
            },
            secondary: {
              DEFAULT: "#B9B2FF",
              shadow: "#5647EB",
              tint: "#F1F0FF",
            },
            accent: {
              DEFAULT: "#FF5C96",
              shadow: "#AD1F51",
              tint: "#FFEBF2",
            },
            extra: {
              DEFAULT: "#FFC34D",
              shadow: "#E59800",
              tint: "#FFF5E0",
            },
            feedback: {
              success: "#19B244",
              "success-tint": "#C9F8D7",
              warning: "#F1DC1E",
              "warning-tint": "#FBF6C5",
              error: "#AD160B",
              "error-tint": "#FBC9C5",
            },
          },
        },
      },
      themes: [
        {
          name: "INDUSTRIAL-EDGE",
          extend: {
            colors: {
              primary: {
                shadow: "#CC2400",
                DEFAULT: "#FF5733",
                tint: "#FFEEEB",
              },
              secondary: {
                shadow: "#004D99",
                DEFAULT: "#0066CC",
                tint: "#E0F0FF",
              },
              accent: {
                shadow: "#E0AC00",
                DEFAULT: "#FFC300",
                tint: "#FFFAEB",
              },
              extra: {
                shadow: "#2D7676",
                DEFAULT: "#3B9C9C",
                tint: "#E9F7F7",
              },
              feedback: {
                success: "#19B244",
                "success-tint": "#C9F8D7",
                warning: "#F1DC1E",
                "warning-tint": "#FBF6C5",
                error: "#AD160B",
                "error-tint": "#FBC9C5",
              },
            },
          },
        },
        {
          name: "EARTHY-TONES",
          extend: {
            colors: {
              primary: {
                DEFAULT: "#66E5FF",
                shadow: "#047C95",
                tint: "#EDFAFD",
              },
              secondary: {
                DEFAULT: "#B9B2FF",
                shadow: "#5647EB",
                tint: "#F1F0FF",
              },
              accent: {
                DEFAULT: "#FF5C96",
                shadow: "#AD1F51",
                tint: "#FFEBF2",
              },
              extra: {
                DEFAULT: "#FFC34D",
                shadow: "#E59800",
                tint: "#FFF5E0",
              },
              feedback: {
                success: "#19B244",
                "success-tint": "#C9F8D7",
                warning: "#F1DC1E",
                "warning-tint": "#FBF6C5",
                error: "#AD160B",
                "error-tint": "#FBC9C5",
              },
            },
          },
        },
        {
          name: "VIBRANT-ORCHID",
          extend: {
            colors: {
              primary: {
                DEFAULT: "#66E5FF",
                shadow: "#047C95",
                tint: "#EDFAFD",
              },
              secondary: {
                DEFAULT: "#B9B2FF",
                shadow: "#5647EB",
                tint: "#F1F0FF",
              },
              accent: {
                DEFAULT: "#FF5C96",
                shadow: "#AD1F51",
                tint: "#FFEBF2",
              },
              extra: {
                DEFAULT: "#FFC34D",
                shadow: "#E59800",
                tint: "#FFF5E0",
              },
              feedback: {
                success: "#19B244",
                "success-tint": "#C9F8D7",
                warning: "#F1DC1E",
                "warning-tint": "#FBF6C5",
                error: "#AD160B",
                "error-tint": "#FBC9C5",
              },
            },
          },
        },
      ],
    }),
  ],
};
