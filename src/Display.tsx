import { QRCodeSVG } from "qrcode.react";

export const Display = () => {
  return (
    <div>
      <h2>QR Display</h2>
      <QRCodeSVG value={"https://nakanishi-s.jp"} />
    </div>
  );
};
