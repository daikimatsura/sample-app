import React, { useState, useCallback } from "react";
import "./App.css";

function App() {
  const [userName, setUserName] = useState<string>("");
  const [age, setAge] = useState<number>();
  const [isConfirm, setIsConfirm] = useState<boolean>(false);

  // テキストボックスの値が変更されたときに呼び出される関数
  const handleUserNameChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setUserName(e.target.value);
    },
    []
  );

  const handleAgeChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!Number(e.target.valueAsNumber)) return;
      setAge(e.target.valueAsNumber);
    },
    []
  );

  const handleConfirm = useCallback(() => {
    if (!userName || !age) return;
    setIsConfirm(true);
  }, [userName, age]);

  // テキストボックスと入力された値を表示
  return (
    <div className="App">
      <div className="formRow">
        <label className="formLabel">ユーザー名:</label>
        <input
          className="input"
          type="text"
          onChange={(e) => handleUserNameChange(e)}
        />
      </div>
      <div className="formRow">
        <label className="formLabel">年齢:</label>
        <input
          className="input"
          type="number"
          onChange={(e) => handleAgeChange(e)}
        />
      </div>

      <button className="button" onClick={handleConfirm}>
        入力確認
      </button>

      {isConfirm && (
        <div className="confirmText">
          <p>{`ユーザー名: ${userName}`}</p>
          <p>{`年齢: ${age}`}</p>
        </div>
      )}
    </div>
  );
}

export default App;
