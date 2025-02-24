import { Download, Share } from "@mui/icons-material";
import { Button } from "../Button";
import { FocusSpan, Heading3 } from "../FontFaces";
import { QRCode } from "../QRCode";

const QRCodeCard = () => {
  return (
    <div className="rounded-lg p-8 border-zinc-300 border flex flex-col justify-between bg-neutral-50">
      <Heading3>Need a QR code?</Heading3>
      <QRCode bgColor="#FAFAFA" quietZone={0} size={446} />
      <div className="flex justify-between items-center">
        <Button
          theme="extra"
          rounded
          className="flex items-center justify-center gap-2"
        >
          <Share className="!size-5" />
          <FocusSpan>Share</FocusSpan>
        </Button>
        <Button rounded className="flex items-center justify-between gap-2">
          <Download className="!size-5" />
          <FocusSpan>Download</FocusSpan>
        </Button>
      </div>
    </div>
  );
};

export default QRCodeCard;
