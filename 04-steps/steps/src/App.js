
import { useState } from "react";
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [step, setStep] = useState(1);

  const increment = () => {
    if(step === messages.length) return;
    setStep(step + 1);
  };

  const decrement = () => {
    if(step === 1) return;
    setStep(step - 1);
  };

  return (
    <>
      <div className="steps">
        <div className="numbers">
          <div className={`${step >= 1 ? "active" : ""}`}>1</div>
          <div className={`${step >= 2 ? "active" : ""}`}>2</div>
          <div className={`${step >= 3 ? "active" : ""}`}>3</div>
        </div>

        <p className="message">
          Step {step}: {messages[step - 1]}
        </p>

        <div className="buttons">
          <button style={{ backgroundColor: "#7950f2", color: "#fff" }} onClick={decrement}>
            Previous
          </button>
          <button style={{ backgroundColor: "#7950f2", color: "#fff" }} onClick={increment}>
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default App;