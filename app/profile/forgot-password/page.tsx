"use client";

import React, { FormEvent, useState } from "react";
import styles from "../page.module.css";
import Link from "next/link";

export default function page() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  function onFormSubmit(event: FormEvent) {
    event.preventDefault();
  }

  return (
    <div>
      <form className={styles.form} onSubmit={onFormSubmit}>
        <h1>Enter your email</h1>
        <p>Password reset link will be sent to your registered email.</p>
        <div className={styles.element}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>

        <p className={styles.error}>{error}</p>

        <button type="submit" className={styles.buttonPrimary}>
          Send Link
        </button>
      </form>
    </div>
  );
}
