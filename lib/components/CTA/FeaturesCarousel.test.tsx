import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import FeaturesCarousel from "./FeaturesCarousel";

// Datos de ejemplo para las pruebas
const testFeatures = [
  {
    name: "Feature 1",
    description: "Description 1",
    icon: "school",
  },
  {
    name: "Feature 2",
    description: "Description 2",
    icon: "analytics",
  },
  {
    name: "Feature 3",
    description: "Description 3",
    icon: "palette",
  },
  {
    name: "Feature 4",
    description: "Description 4",
    icon: "download",
  },
  {
    name: "Feature 5",
    description: "Description 5",
    icon: "group",
  },
];

describe("FeaturesCarousel", () => {
  test("renders cancel variant correctly", () => {
    render(<FeaturesCarousel type="cancel" features={testFeatures} />);

    // Verificar que el título es correcto
    expect(
      screen.getByText(
        "If you cancel your membership, you will lose all these features:",
      ),
    ).toBeInTheDocument();

    // Verificar que se muestran las primeras 4 características
    expect(screen.getByText("Feature 1")).toBeInTheDocument();
    expect(screen.getByText("Description 1")).toBeInTheDocument();
    expect(screen.getByText("Feature 4")).toBeInTheDocument();
    expect(screen.getByText("Description 4")).toBeInTheDocument();

    // La quinta característica no debería estar visible inicialmente
    expect(screen.queryByText("Feature 5")).not.toBeInTheDocument();
  });

  test("renders subscribe variant correctly", () => {
    render(<FeaturesCarousel type="subscribe" features={testFeatures} />);

    // Verificar que el título es correcto
    expect(
      screen.getByText(
        "With a Membership you can access all these amazing features:",
      ),
    ).toBeInTheDocument();

    // Verificar que se muestran las primeras 4 características
    expect(screen.getByText("Feature 1")).toBeInTheDocument();
    expect(screen.getByText("Description 1")).toBeInTheDocument();
  });

  test("navigates between slides", () => {
    render(<FeaturesCarousel features={testFeatures} />);

    // Inicialmente, debería mostrar las primeras 4 características
    expect(screen.getByText("Feature 1")).toBeInTheDocument();
    expect(screen.queryByText("Feature 5")).not.toBeInTheDocument();

    // Encontrar los indicadores de diapositiva (debería haber 2 para 5 características)
    const slideIndicators = screen.getAllByRole("button");

    // Hay 4 botones: anterior, siguiente y 2 indicadores
    expect(slideIndicators.length).toBeGreaterThan(1);

    // Encontrar el botón "Siguiente"
    const nextButton = screen.getByLabelText("Next slide");
    fireEvent.click(nextButton);

    // Ahora debería mostrar la quinta característica y no la primera
    expect(screen.queryByText("Feature 1")).not.toBeInTheDocument();
    expect(screen.getByText("Feature 5")).toBeInTheDocument();
  });

  test("applies custom className", () => {
    render(
      <FeaturesCarousel features={testFeatures} className="custom-class" />,
    );

    // Verificar que la clase personalizada se aplica al contenedor
    const container = screen.getByText(
      "If you cancel your membership, you will lose all these features:",
    ).parentElement;
    expect(container).toHaveClass("custom-class");
  });

  test("handles empty features array", () => {
    render(<FeaturesCarousel features={[]} />);

    // Verificar que el título se muestra
    expect(
      screen.getByText(
        "If you cancel your membership, you will lose all these features:",
      ),
    ).toBeInTheDocument();

    // No debería haber indicadores de diapositiva
    const slideIndicators = screen.queryAllByLabelText(/Go to slide/);
    expect(slideIndicators).toHaveLength(0);
  });
});
