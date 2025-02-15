import { useZxing } from "react-zxing";

export const Reader = () => {
  const { ref } = useZxing({
    onDecodeResult(result) {
      const text = result.getText();

      if (/^https?:\/\//.test(text)) {
        window.location.href = text;
      }
    },
  });

  return (
    <div style={{ display: "flex", gap: "2rem" }}>
      <div>
        <h1>This is Reader</h1>
      </div>
      <div>
        <video ref={ref} />
      </div>
    </div>
  );
};
