import { QRCode } from "react-qrcode-logo";
import { Button } from "../Button";
import { FocusSpan, Heading3 } from "../FontFaces";
import { Icon } from "../Icon";

const QRCodeCard = () => {
  return (
    <div className="w-full max-w-md justify-between space-y-10 rounded-lg border border-zinc-300 bg-neutral-50 p-8">
      <Heading3 className="text-center">Need a QR code?</Heading3>
      <QRCode
        bgColor="#FAFAFA"
        quietZone={0}
        style={{ width: "100%", height: "100%" }}
      />
      <div className="flex items-center justify-between gap-6">
        <Button
          theme="extra"
          rounded
          className="flex w-1/2 items-center justify-center gap-2"
        >
          <Icon name="share" size={20} filled />
          <FocusSpan>Share</FocusSpan>
        </Button>
        <Button
          rounded
          className="flex w-1/2 items-center justify-center gap-2"
        >
          <Icon name="download" size={20} filled />
          <FocusSpan>Download</FocusSpan>
        </Button>
      </div>
    </div>
  );
};

export default QRCodeCard;
