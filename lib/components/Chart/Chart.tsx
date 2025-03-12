import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  TooltipProps,
  XAxis,
  YAxis,
} from "recharts";
import { cn } from "../../utils";
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

/**
 * Custom tooltip component
 */
const CustomTooltip = ({
  active,
  payload,
  label,
  valueLabel,
}: TooltipProps<number, string> & { valueLabel?: string }) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded border border-black bg-white p-2 shadow-md">
        <p className="font-semibold">{label}</p>
        <p className="text-sm">{`${valueLabel || "Value"}: ${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};

/**
 * Chart component that uses Recharts with custom styling
 */
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
  // Format the data for Recharts
  const chartData = data.map((item) => ({
    name: item.label,
    value: item.value,
  }));

  // Determine the color based on variant
  const getColor = () => {
    switch (variant) {
      case "secondary":
        return "#B9B2FF"; // secondary color
      case "accent":
        return "#FF5C96"; // accent color
      case "extra":
        return "#FFC34D"; // extra color
      case "light":
        return "#E0E0E0"; // light gray color for bars
      case "primary":
      default:
        return "#FFC34D"; // default to extra color for consistency with previous design
    }
  };

  // Define the tint color
  const bgColorMap = {
    secondary: "bg-secondary-tint",
    accent: "bg-accent-tint",
    extra: "bg-extra-tint",
    primary: "bg-primary-tint",
    light: "bg-white",
  };

  // Define the stroke color based on variant
  const getStrokeColor = () => {
    return variant === "light" ? "#AAAAAA" : "#000000";
  };

  return (
    <div
      className={cn(
        "space-y-4 rounded-lg border border-black p-6",
        bgColorMap[variant],
        className,
      )}
    >
      <Heading3>{title}</Heading3>

      <div className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={chartData}
            margin={{ top: 20, right: 30, left: 30, bottom: 30 }}
            barSize={20}
            barGap={2}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              horizontal={true}
              vertical={false}
              stroke={variant === "light" ? "#E6E6E6" : "#E6E6E6"}
            />
            <XAxis
              dataKey="name"
              axisLine={{ stroke: getStrokeColor(), strokeWidth: 2 }}
              tickLine={false}
              padding={{ left: 10, right: 10 }}
            />
            <YAxis
              domain={[0, maxY]}
              axisLine={false}
              tickLine={false}
              tickCount={6}
            />
            <ReferenceLine y={0} stroke={getStrokeColor()} strokeWidth={2} />
            {showTooltip && (
              <Tooltip
                content={<CustomTooltip valueLabel={valueLabel} />}
                cursor={{ fill: "rgba(0, 0, 0, 0.1)" }}
              />
            )}
            {showLegend && (
              <Legend
                verticalAlign="top"
                height={36}
                wrapperStyle={{ paddingTop: "10px" }}
              />
            )}
            <Bar
              name={valueLabel}
              dataKey="value"
              fill={getColor()}
              stroke={getStrokeColor()}
              strokeWidth={1}
              isAnimationActive={animated}
              animationDuration={animated ? 1500 : 0}
              animationEasing="ease-out"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Chart;
