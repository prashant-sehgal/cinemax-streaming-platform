import React from "react";

export default function Logo({
  color = "#000",
  size = 20,
}: Readonly<{ color?: string; size?: number }>) {
  const style: React.CSSProperties = {
    color,
    fontSize: `${size}px`,
    fontFamily: '"Archivo Black", sans-serif',
    fontWeight: 400,
    fontStyle: "normal",
    textTransform: "uppercase",
  };
  return <p style={style}>cinemax</p>;
}
