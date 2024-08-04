"use client";

import React, { FormEvent, useState } from "react";
import styles from "../../page.module.css";
import InputPassword from "../../InputPassword";

export default function page() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [error, setError] = useState("");

  function onFormSubmit(event: FormEvent) {
    event.preventDefault();
  }

  return (
    <div>
      <form className={styles.form} onSubmit={onFormSubmit}>
        <h1>Enter your email</h1>
        <p>Password reset link will be sent to your registered email.</p>

        <InputPassword
          value={newPassword}
          setValue={setNewPassword}
          placeholder="Enter new password"
        />
        <InputPassword
          value={confirmNewPassword}
          setValue={setConfirmNewPassword}
          placeholder="Confirm new password"
        />

        <p className={styles.error}>{error}</p>

        <button type="submit" className={styles.buttonPrimary}>
          Reset Password
        </button>
      </form>
    </div>
  );
}
