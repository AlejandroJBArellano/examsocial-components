import {
  Body,
  Head,
  Html,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

const EmailTemplate = () => {
  return (
    <Html>
      <Head />
      <Tailwind
        config={{
          theme: {
            extend: {
              backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                  "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
              },
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
                "46": "184px",
              },
            },
          },
        }}
      >
        <Body className="space-y-6">
          <Section className="my-auto flex items-center gap-3 space-x-3 border-b border-black bg-primary-tint p-6 pb-3 text-primary-shadow">
            <Text>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <path
                  d="M35.0001 28.3333V16.8333L20.0001 25L1.66675 15L20.0001 5L38.3334 15V28.3333H35.0001ZM20.0001 35L8.33341 28.6667V20.3333L20.0001 26.6667L31.6667 20.3333V28.6667L20.0001 35Z"
                  fill="#047C95"
                />
              </svg>
            </Text>
            <Text className="sentient text-2xl font-medium leading-7 tracking-[0.48px]">
              ExamSocial
            </Text>
          </Section>
          <Section className="border-t-sm !m-0 border-black bg-extra-tint">
            <Text className="px-6 py-2 text-xs">
              Recibiste este correo porque estás suscrito a nuestro listado de
              [Nombre del listado]. Si deseas dejar de recibir estos correos,
              por favor, haz click aquí.
            </Text>
          </Section>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default EmailTemplate;
