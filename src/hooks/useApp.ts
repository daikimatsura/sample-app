import { useState, useCallback, useMemo } from "react";

export const useApp = () => {
  const [text, setText] = useState<string>("");
  const textLength = useMemo(() => text.length, [text]);

  // テキストボックスの値が変更されたときに呼び出される関数
  const handleTextChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      // textの値を更新
      setText(e.target.value);
    },
    []
  );
  return {
    state: { text, textLength },
    handler: { handleTextChange },
  };
};
