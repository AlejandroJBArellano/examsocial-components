import { Button } from "../Button";
import { FocusSpan, Heading3 } from "../FontFaces";
import { Icon } from "../Icon";
import { QRCode } from "../QRCode";

const QRCodeCard = () => {
  return (
    <div className="flex flex-col justify-between rounded-lg border border-zinc-300 bg-neutral-50 p-8">
      <Heading3>Need a QR code?</Heading3>
      <QRCode bgColor="#FAFAFA" quietZone={0} size={446} />
      <div className="flex items-center justify-between">
        <Button
          theme="extra"
          rounded
          className="flex items-center justify-center gap-2"
        >
          <Icon name="share" className="!size-5" />
          <FocusSpan>Share</FocusSpan>
        </Button>
        <Button rounded className="flex items-center justify-between gap-2">
          <Icon name="download" className="!size-5" />
          <FocusSpan>Download</FocusSpan>
        </Button>
      </div>
    </div>
  );
};

export default QRCodeCard;
