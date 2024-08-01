import React from "react";

export default function Genre({ genre }: { genre: string }) {
  const styles: React.CSSProperties = {
    width: 100,
    textAlign: "center",
    background: "#1d1d1d",
    padding: 8,
  };
  return <div style={styles}>{genre}</div>;
}
