import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  const containerStyle = {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #000000 0%, #000000 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "16px",
  };

  const cardStyle = {
    background: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(10px)",
    borderRadius: "24px",
    padding: "48px",
    boxShadow: "0 20px 25px rgba(0, 0, 0, 0.3)",
    maxWidth: "448px",
    width: "100%",
  };

  const titleStyle = {
    textAlign: "center",
    color: "white",
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "32px",
  };

  const counterDisplayStyle = {
    textAlign: "center",
    marginBottom: "48px",
  };

  const numberStyle = {
    fontSize: "96px",
    fontWeight: "bold",
    color: "white",
    textShadow: "0 4px 6px rgba(0, 0, 0, 0.3)",
  };

  const buttonsContainerStyle = {
    display: "flex",
    gap: "32px",
    justifyContent: "center",
  };

  const buttonStyle = {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    background: "transparent",
    border: "4px solid white",
    color: "white",
    fontSize: "36px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "all 0.2s ease",
  };

  const handleMouseEnter = (e) => {
    e.target.style.background = "white";
    e.target.style.color = "#9333ea";
    e.target.style.transform = "scale(1.1)";
  };

  const handleMouseLeave = (e) => {
    e.target.style.background = "transparent";
    e.target.style.color = "white";
    e.target.style.transform = "scale(1)";
  };

  const handleMouseDown = (e) => {
    e.target.style.transform = "scale(0.95)";
  };

  const handleMouseUp = (e) => {
    e.target.style.transform = "scale(1.1)";
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h1 style={titleStyle}>Counter</h1>

        <div style={counterDisplayStyle}>
          <div style={numberStyle}>{count}</div>
        </div>

        <div style={buttonsContainerStyle}>
          <button
            onClick={decrement}
            style={buttonStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
          >
            −
          </button>

          <button
            onClick={increment}
            style={buttonStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
