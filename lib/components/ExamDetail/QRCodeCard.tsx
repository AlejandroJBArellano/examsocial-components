import { useRef } from "react";
import { QRCode, IProps as QRCodeProps } from "react-qrcode-logo";
import { Button } from "../Button";
import { FocusSpan, Heading3 } from "../FontFaces";
import { Icon } from "../Icon";

interface QRCodeCardProps extends QRCodeProps {
  /**
   * URL to encode in the QR code
   * @default window.location.href
   */
  url?: string;
  /**
   * Alt text for the QR code for screen readers
   */
  alt?: string;
  /**
   * Optional callback when share button is clicked
   */
  onShare?: () => void;
  /**
   * Optional callback when download button is clicked
   */
  onDownload?: () => void;
  /**
   * Optional filename for QR code download
   * @default "qr-code"
   */
  fileName?: string;
  /**
   * Optional className for custom styling
   */
  className?: string;
}

const QRCodeCard = ({
  url = typeof window !== "undefined" ? window.location.href : "",
  alt = "QR code for the current page",
  onShare,
  onDownload,
  className = "",
  fileName,
  ...props
}: QRCodeCardProps) => {
  const ref = useRef<QRCode>(null);
  const handleShare = () => {
    if (onShare) {
      onShare();
      return;
    }

    // Default share functionality if navigator.share is available
    if (typeof navigator !== "undefined" && navigator.share) {
      navigator
        .share({
          title: document.title,
          url: url,
        })
        .catch((error) => console.error("Error sharing:", error));
    }
  };

  const handleDownload = () => {
    if (onDownload) {
      ref.current!.download("png", fileName);
      onDownload();
    }
    // Download functionality would be implemented here
  };

  return (
    <section
      className={`w-full max-w-md justify-between space-y-10 rounded-lg border border-zinc-300 bg-neutral-50 p-8 ${className}`}
      aria-labelledby="qr-code-heading"
    >
      <header>
        <Heading3 id="qr-code-heading" className="text-center">
          Need a QR code?
        </Heading3>
      </header>

      <figure className="flex justify-center" role="img" aria-label={alt}>
        <QRCode
          value={url}
          bgColor="transparent"
          quietZone={0}
          style={{ width: "100%", height: "100%" }}
          ref={ref}
          {...props}
        />
        <figcaption className="sr-only">{alt}</figcaption>
      </figure>

      <div className="flex items-center justify-between gap-6">
        <Button
          theme="extra"
          rounded
          className="flex w-1/2 items-center justify-center gap-2"
          onClick={handleShare}
          aria-label="Share QR code"
        >
          <Icon name="share" size={20} filled aria-hidden="true" />
          <FocusSpan>Share</FocusSpan>
        </Button>
        <Button
          rounded
          className="flex w-1/2 items-center justify-center gap-2"
          onClick={handleDownload}
          aria-label="Download QR code"
        >
          <Icon name="download" size={20} filled aria-hidden="true" />
          <FocusSpan>Download</FocusSpan>
        </Button>
      </div>
    </section>
  );
};

export default QRCodeCard;
