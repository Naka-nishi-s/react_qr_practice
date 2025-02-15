import { useState } from "react";
import { useZxing } from "react-zxing";

export const Reader = () => {
  const [result, setResult] = useState("");
  const { ref } = useZxing({
    onDecodeResult(result) {
      const text = result.getText();
      setResult(text);

      if (/^https?:\/\//.test(text)) {
        window.location.href = text;
      }
    },
  });

  return (
    <>
      <video ref={ref} />
      <p>
        <span>Last result:</span>
        <span>{result}</span>
      </p>
    </>
  );
};
