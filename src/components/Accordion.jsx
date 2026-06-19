import { useState } from "react";

// Accordion component - accepts title and content as props
const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div style={styles.item}>
      {/* Accordion header - clickable to toggle content */}
      <div
        style={isActive ? styles.headerActive : styles.header}
        onClick={() => setIsActive(!isActive)}
      >
        <h3 style={styles.titleText}>{title}</h3>
        <span style={styles.icon}>{isActive ? "−" : "+"}</span>
      </div>

      {/* Accordion content - shown only when active */}
      {isActive && <div style={styles.content}>{content}</div>}
    </div>
  );
};

// Professional styling object
const styles = {
  // Individual accordion item
  item: {
    border: "1px solid #e5e7eb",
    borderRadius: "8px",
    overflow: "hidden",
    backgroundColor: "white",
    marginBottom: "12px",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)",
    transition: "all 0.2s ease",
  },
  // Accordion header (inactive state)
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "18px 20px",
    cursor: "pointer",
    backgroundColor: "#f9fafb",
    transition: "all 0.3s ease",
    userSelect: "none",
  },
  // Accordion header (active state)
  headerActive: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "18px 20px",
    cursor: "pointer",
    backgroundColor: "#eff6ff",
    transition: "all 0.3s ease",
    borderBottom: "2px solid #3b82f6",
    userSelect: "none",
  },
  // Title text styling
  titleText: {
    fontSize: "15px",
    fontWeight: "600",
    color: "#1f2937",
    margin: "0",
    flex: "1",
  },
  // Toggle icon styling
  icon: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#3b82f6",
    transition: "transform 0.3s ease",
    lineHeight: "1",
  },
  // Accordion content (when expanded)
  content: {
    padding: "16px 20px",
    backgroundColor: "white",
    fontSize: "14px",
    lineHeight: "1.6",
    color: "#4b5563",
    borderTop: "1px solid #e5e7eb",
    animation: "slideDown 0.3s ease",
  },
};

export default Accordion;
