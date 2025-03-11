import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import QRCodeCard from "./QRCodeCard";

// Mock the QRCode component from react-qrcode-logo
vi.mock("react-qrcode-logo", () => ({
  QRCode: ({ value, style }: { value: string; style: React.CSSProperties }) => (
    <div data-testid="qr-code" data-value={value} style={style}>
      Mocked QR Code
    </div>
  ),
}));

// Mock navigator.share for testing
const mockShare = vi.fn();
Object.defineProperty(global.navigator, "share", {
  value: mockShare,
  writable: true,
});

describe("QRCodeCard component", () => {
  beforeEach(() => {
    mockShare.mockClear();
  });

  it("should render with default props", () => {
    render(<QRCodeCard />);

    // Check heading
    expect(screen.getByText("Need a QR code?")).toBeInTheDocument();

    // Check QR code
    const qrCode = screen.getByTestId("qr-code");
    expect(qrCode).toBeInTheDocument();

    // Check buttons
    expect(screen.getByText("Share")).toBeInTheDocument();
    expect(screen.getByText("Download")).toBeInTheDocument();
  });

  it("should use custom URL when provided", () => {
    const customUrl = "https://example.com/test";
    render(<QRCodeCard url={customUrl} />);

    const qrCode = screen.getByTestId("qr-code");
    expect(qrCode).toHaveAttribute("data-value", customUrl);
  });

  it("should use custom alt text when provided", () => {
    const customAlt = "Custom QR code description";
    render(<QRCodeCard alt={customAlt} />);

    const figure = screen.getByRole("img");
    expect(figure).toHaveAttribute("aria-label", customAlt);
    expect(screen.getByText(customAlt)).toBeInTheDocument(); // The hidden figcaption
  });

  it("should apply custom className when provided", () => {
    const customClass = "test-class";
    render(<QRCodeCard className={customClass} />);

    const section = screen.getByRole("region");
    expect(section.className).toContain(customClass);
  });

  it("should call onShare callback when share button is clicked", () => {
    const handleShare = vi.fn();
    render(<QRCodeCard onShare={handleShare} />);

    const shareButton = screen.getByText("Share").closest("button");
    fireEvent.click(shareButton!);

    expect(handleShare).toHaveBeenCalledTimes(1);
  });

  it("should call navigator.share when share button is clicked and no callback provided", () => {
    render(<QRCodeCard url="https://test.com" />);

    const shareButton = screen.getByText("Share").closest("button");
    fireEvent.click(shareButton!);

    expect(mockShare).toHaveBeenCalledWith({
      title: document.title,
      url: "https://test.com",
    });
  });

  it("should call onDownload callback when download button is clicked", () => {
    const handleDownload = vi.fn();
    render(<QRCodeCard onDownload={handleDownload} />);

    const downloadButton = screen.getByText("Download").closest("button");
    fireEvent.click(downloadButton!);

    expect(handleDownload).toHaveBeenCalledTimes(1);
  });

  it("should render with semantic HTML elements", () => {
    render(<QRCodeCard />);

    // Check for semantic elements
    expect(screen.getByRole("region")).toBeInTheDocument(); // section
    expect(
      screen.getByRole("heading", { name: "Need a QR code?" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("img")).toBeInTheDocument(); // figure with role="img"
  });
});
