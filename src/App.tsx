import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
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

  // テキストボックスと入力された値を表示
  return (
    <div className="App">
      <input
        className="input"
        type="text"
        value={text}
        onChange={(e) => handleTextChange(e)}
      />
      <div className="text">{`入力したテキスト: ${text}`}</div>
      <div className="text">{`入力したテキストの文字数: ${textLength}`}</div>
    </div>
  );
}

export default App;
