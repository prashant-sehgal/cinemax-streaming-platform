import React, { useState } from "react";
import styles from "./page.module.css";

export default function InputPassword({
  value,
  setValue,
  placeholder,
}: {
  value: string;
  setValue: Function;
  placeholder: string;
}) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  function onChangeVisibility(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    console.log(isPasswordVisible);
    setIsPasswordVisible(!isPasswordVisible);
  }
  return (
    <div className={styles.element}>
      <input
        type={isPasswordVisible ? "text" : "password"}
        placeholder={placeholder}
        value={value}
        onChange={(event) => setValue(event.target.value)}
        required
      />
      {value.length > 0 && (
        <button
          className={styles.visibilityButton}
          onClick={onChangeVisibility}
        >
          <span className="material-symbols-outlined">
            {isPasswordVisible ? "visibility_off" : "visibility"}
          </span>
        </button>
      )}
    </div>
  );
}
