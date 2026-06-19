import { useState } from "react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote:
        "This platform completely transformed how our team manages projects. The reduction in daily meeting overhead alone was worth the switch.",
      author: "Sarah Jenkins",
    },
    {
      id: 2,
      quote:
        "Clean code, zero clutter, and an intuitive layout. It honestly felt like the developers actually listened to what regular users needed.",
      author: "Marcus Chen",
    },
    {
      id: 3,
      quote:
        "I was highly skeptical at first, but after a single week of using this workflow, our setup times dropped from hours to literally minutes.",
      author: "Elena Rostova",
    },
    {
      id: 4,
      quote:
        "The customer support team went completely above and beyond to help us migrate our legacy systems over without a single second of downtime.",
      author: "David Brooks",
    },
    {
      id: 5,
      quote:
        "It's rare to find a tool that strikes such a perfect balance between deep customization options and simple, day-to-day usability.",
      author: "Aisha Rahman",
    },
  ];
  const nextTestimonial = () => {
    // setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    setCurrentIndex(
      (currentIndex + testimonials.length + 1) % testimonials.length,
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1,
    );
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.quoteIcon}>❝</div>
        <div style={styles.quote}>{testimonials[currentIndex].quote}</div>
        <div style={styles.author}>- {testimonials[currentIndex].author}</div>

        <div style={styles.controls}>
          <button onClick={prevTestimonial} style={styles.button}>
            ← Prev
          </button>
          <div style={styles.counter}>
            {currentIndex + 1} / {testimonials.length}
          </div>
          <button onClick={nextTestimonial} style={styles.button}>
            Next →
          </button>
        </div>

        <div style={styles.indicators}>
          {testimonials.map((_, index) => (
            <div
              key={index}
              style={
                index === currentIndex
                  ? styles.indicatorActive
                  : styles.indicatorInactive
              }
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#f5f7fa",
    padding: "20px",
  },
  card: {
    backgroundColor: "white",
    borderRadius: "12px",
    padding: "48px",
    boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)",
    maxWidth: "600px",
    width: "100%",
    textAlign: "center",
  },
  quoteIcon: {
    fontSize: "48px",
    color: "#3b82f6",
    marginBottom: "16px",
    lineHeight: "1",
  },
  quote: {
    fontSize: "18px",
    fontStyle: "italic",
    color: "#333",
    lineHeight: "1.6",
    marginBottom: "24px",
    minHeight: "100px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  author: {
    fontSize: "16px",
    fontWeight: "600",
    color: "#666",
    marginBottom: "32px",
  },
  controls: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "16px",
    marginBottom: "24px",
  },
  button: {
    padding: "8px 16px",
    backgroundColor: "#3b82f6",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "600",
    transition: "background-color 0.3s",
  },
  counter: {
    fontSize: "14px",
    color: "#666",
    fontWeight: "500",
    minWidth: "80px",
  },
  indicators: {
    display: "flex",
    justifyContent: "center",
    gap: "8px",
  },
  indicatorActive: {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    backgroundColor: "#3b82f6",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  indicatorInactive: {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    backgroundColor: "#ddd",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
};

export default Testimonials;
