"use client";

import { cn } from "@/utils";
import React, { useState } from "react";
import { Heading3 } from "../FontFaces";

export interface ChartDataPoint {
  value: number;
  label: string;
}

export interface ChartProps {
  /**
   * Title of the chart
   */
  title: string;
  /**
   * Data points to be displayed in the chart
   */
  data: ChartDataPoint[];
  /**
   * Maximum value in the Y axis (default: 100)
   */
  maxY?: number;
  /**
   * The appearance style of the chart
   */
  variant?: "primary" | "secondary" | "accent" | "extra" | "light";
  /**
   * CSS classes to apply to the chart container
   */
  className?: string;
  /**
   * Enable/disable tooltips (default: true)
   */
  showTooltip?: boolean;
  /**
   * Enable/disable legend (default: false)
   */
  showLegend?: boolean;
  /**
   * Enable/disable animations (default: true)
   */
  animated?: boolean;
  /**
   * Custom label for the value in tooltip and legend
   */
  valueLabel?: string;
}

const Chart: React.FC<ChartProps> = ({
  title,
  data,
  maxY = 100,
  variant = "primary",
  className,
  showTooltip = true,
  showLegend = false,
  animated = true,
  valueLabel = "Value",
}) => {
  const [hoveredPoint, setHoveredPoint] = useState<{
    label: string;
    value: number;
    x: number;
    y: number;
  } | null>(null);

  // Determine the color based on variant
  const getColor = () => {
    switch (variant) {
      case "secondary":
        return "#B9B2FF";
      case "accent":
        return "#FF5C96";
      case "extra":
        return "#FFC34D";
      case "light":
        return "#E0E0E0";
      case "primary":
      default:
        return "#FFC34D";
    }
  };

  // Define the tint color
  const bgColorMap = {
    secondary: "bg-secondary-tint",
    accent: "bg-accent-tint",
    extra: "bg-extra-tint",
    primary: "bg-primary-tint",
    light: "bg-light",
  };

  const getStrokeColor = () => {
    return variant === "light" ? "#AAAAAA" : "#000000";
  };

  const svgWidth = 600;
  const svgHeight = 280;
  const paddingLeft = 40;
  const paddingRight = 20;
  const paddingTop = 20;
  const paddingBottom = 40;

  const chartWidth = svgWidth - paddingLeft - paddingRight;
  const chartHeight = svgHeight - paddingTop - paddingBottom;

  const yTicks = [0, 0.2, 0.4, 0.6, 0.8, 1].map((ratio) =>
    Math.round(maxY * ratio),
  );

  const numBars = data.length;
  const slotWidth = numBars > 0 ? chartWidth / numBars : chartWidth;
  const barWidth = Math.min(24, slotWidth * 0.5);

  return (
    <div
      className={cn(
        "space-y-4 rounded-lg border border-black p-6",
        bgColorMap[variant],
        className,
      )}
    >
      <Heading3>{title}</Heading3>

      {showLegend && (
        <div className="flex items-center gap-2 pt-2 text-sm font-medium">
          <span
            className="inline-block h-3 w-3 rounded-sm border border-black"
            style={{ backgroundColor: getColor() }}
          />
          <span>{valueLabel}</span>
        </div>
      )}

      <div className="h-80 w-full">
        <div
          data-testid="responsive-container"
          style={{ width: "100%", height: "100%" }}
          className="relative w-full h-full"
        >
          <svg
            role="graphics-document"
            viewBox={`0 0 ${svgWidth} ${svgHeight}`}
            className="h-full w-full overflow-visible"
          >
            {/* Grid horizontal lines */}
            {yTicks.map((tick) => {
              const y =
                paddingTop +
                chartHeight -
                (maxY > 0 ? (tick / maxY) * chartHeight : 0);
              return (
                <line
                  key={tick}
                  x1={paddingLeft}
                  y1={y}
                  x2={paddingLeft + chartWidth}
                  y2={y}
                  stroke={variant === "light" ? "#E6E6E6" : "#E6E6E6"}
                  strokeDasharray="3 3"
                />
              );
            })}

            {/* Y Axis */}
            <g className="recharts-yAxis text-xs font-sans fill-gray-500">
              {yTicks.map((tick) => {
                const y =
                  paddingTop +
                  chartHeight -
                  (maxY > 0 ? (tick / maxY) * chartHeight : 0);
                return (
                  <text
                    key={tick}
                    x={paddingLeft - 8}
                    y={y + 4}
                    textAnchor="end"
                    fontSize="11"
                    className="select-none"
                  >
                    {tick}
                  </text>
                );
              })}
            </g>

            {/* Baseline */}
            <line
              x1={paddingLeft}
              y1={paddingTop + chartHeight}
              x2={paddingLeft + chartWidth}
              y2={paddingTop + chartHeight}
              stroke={getStrokeColor()}
              strokeWidth={2}
            />

            {/* Bars */}
            {data.map((item, index) => {
              const barHeight =
                maxY > 0
                  ? (Math.min(Math.max(item.value, 0), maxY) / maxY) *
                    chartHeight
                  : 0;
              const x =
                paddingLeft +
                index * slotWidth +
                (slotWidth - barWidth) / 2;
              const y = paddingTop + chartHeight - barHeight;

              return (
                <rect
                  key={item.label}
                  x={x}
                  y={y}
                  width={barWidth}
                  height={barHeight}
                  fill={getColor()}
                  stroke={getStrokeColor()}
                  strokeWidth={1}
                  className={cn(
                    "recharts-bar-rectangle cursor-pointer transition-all duration-300 hover:opacity-80",
                    animated && "transition-all",
                  )}
                  onMouseEnter={() => {
                    if (showTooltip) {
                      setHoveredPoint({
                        label: item.label,
                        value: item.value,
                        x: (x / svgWidth) * 100,
                        y: (y / svgHeight) * 100,
                      });
                    }
                  }}
                  onMouseLeave={() => setHoveredPoint(null)}
                />
              );
            })}

            {/* X Axis */}
            <g className="recharts-xAxis text-xs font-sans fill-gray-700">
              {data.map((item, index) => {
                const x = paddingLeft + index * slotWidth + slotWidth / 2;
                const y = paddingTop + chartHeight + 20;

                return (
                  <text
                    key={item.label}
                    x={x}
                    y={y}
                    textAnchor="middle"
                    fontSize="12"
                    className="select-none"
                  >
                    {item.label}
                  </text>
                );
              })}
            </g>
          </svg>

          {/* Floating Tooltip */}
          {showTooltip && hoveredPoint && (
            <div
              className="pointer-events-none absolute z-20 -translate-x-1/2 -translate-y-full rounded border border-black bg-light p-2 shadow-md text-xs"
              style={{
                left: `${hoveredPoint.x}%`,
                top: `${hoveredPoint.y}%`,
              }}
            >
              <p className="font-semibold">{hoveredPoint.label}</p>
              <p className="text-sm">{`${valueLabel}: ${hoveredPoint.value}`}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Chart;

