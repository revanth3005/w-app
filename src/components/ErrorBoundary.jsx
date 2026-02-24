import { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("App Error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            background: "#06040A",
            color: "#F0E6D0",
            fontFamily: "'Lato', sans-serif",
            padding: "2rem",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontFamily: "'Great Vibes', cursive",
              fontSize: "2rem",
              color: "#D4AF37",
              marginBottom: "1rem",
            }}
          >
            Revanth & Ujwala
          </p>
          <p
            style={{
              fontSize: "0.875rem",
              opacity: 0.7,
              marginBottom: "1.5rem",
            }}
          >
            Something went wrong loading the invitation.
          </p>
          <button
            onClick={() => window.location.reload()}
            style={{
              padding: "0.6rem 2rem",
              border: "1px solid rgba(212,175,55,0.3)",
              borderRadius: "9999px",
              background: "transparent",
              color: "#D4AF37",
              fontSize: "0.75rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              cursor: "pointer",
            }}
          >
            Reload
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
