import { useEffect, useState } from "react";

export const useApp = () => {
  const [text, setText] = useState<string>("");
  const [textLength, setTextLength] = useState<number>(text.length);

  useEffect(() => {
    setTextLength(text.length);
  }, [text]);

  // テキストボックスの値が変更されたときに呼び出される関数
  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // textの値を更新
    setText(e.target.value);
  };
  return {
    state: { text, textLength },
    handler: { handleTextChange },
  };
};
