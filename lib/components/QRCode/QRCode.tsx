import { ComponentProps } from "react";
import { QRCode as QR } from "react-qrcode-logo";

const QRCode = (props: ComponentProps<typeof QR>) => <QR {...props} />;

export default QRCode;
