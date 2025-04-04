import { useState } from "react";
import { cn } from "../../utils";
import { FocusSpan, Heading6, Span } from "../FontFaces";
import { Icon } from "../Icon";

// Tipos para el componente
export type FeaturesCarouselType = "cancel" | "subscribe";

// Tipo para los iconos de Material Symbols
// Esto es una simplificación, ya que hay muchos iconos disponibles

export interface Feature {
  /**
   * Nombre de la característica
   */
  name: string;
  /**
   * Descripción de la característica
   */
  description: string;
  /**
   * Icono de la característica
   */
  icon: string;
}

export interface FeaturesCarouselProps {
  /**
   * Tipo de carrusel
   */
  type?: FeaturesCarouselType;
  /**
   * Lista de características
   */
  features: Feature[];
  /**
   * Clase CSS personalizada
   */
  className?: string;
}

/**
 * Componente que muestra un carrusel de características
 *
 * Tiene dos variantes:
 * - cancel: Muestra un mensaje de cancelación y las características que se perderán
 * - subscribe: Muestra un mensaje de suscripción y las características que se obtendrán
 */
const FeaturesCarousel = ({
  type = "cancel",
  features,
  className,
}: FeaturesCarouselProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = Math.ceil(features.length / 4);

  // Determinar el título según el tipo
  const title =
    type === "cancel"
      ? "If you cancel your membership, you will lose all these features:"
      : "With a Membership you can access all these amazing features:";

  // Obtener las características para la diapositiva actual
  const currentFeatures = features.slice(
    currentSlide * 4,
    (currentSlide + 1) * 4,
  );

  // Función para cambiar de diapositiva
  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
  };

  return (
    <div
      className={cn("flex flex-col gap-5 rounded-lg", className)}
      role="region"
      aria-label="Features carousel"
    >
      {/* Título */}
      <Heading6>{title}</Heading6>

      {/* Lista de características */}
      <div className="flex flex-col gap-4">
        {currentFeatures.map((feature, index) => (
          <div key={index} className="flex flex-col">
            <div className="flex items-center gap-2 text-extra-shadow">
              <Icon name={feature.icon} size={24} aria-hidden="true" filled />
              <FocusSpan>{feature.name}</FocusSpan>
            </div>
            <Span>{feature.description}</Span>
          </div>
        ))}
      </div>

      {/* Indicadores de diapositiva */}
      {totalSlides > 1 && (
        <div className="flex gap-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                "h-4 rounded-full transition-all",
                index === currentSlide ? "w-8 bg-extra-shadow" : "w-4 bg-extra",
              )}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === currentSlide ? "true" : "false"}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default FeaturesCarousel;
