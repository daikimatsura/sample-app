import { useApp } from "./hooks/useApp";
import "./App.css";

function App() {
  const {
    state: { text, textLength },
    handler: { handleTextChange },
  } = useApp();
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
