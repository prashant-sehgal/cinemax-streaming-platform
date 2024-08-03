"use client";

import React, { useState } from "react";
import styles from "../page.module.css";
import Link from "next/link";
import InputPassword from "../InputPassword";

export default function page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <form className={styles.form}>
        <h1>Sign In</h1>
        <div className={styles.element}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>
        <InputPassword
          value={password}
          setValue={setPassword}
          placeholder="Enter your password"
        />

        <Link href="/">
          <p className={styles.link}>Forgot Password?</p>
        </Link>

        <button type="submit" className={styles.buttonPrimary}>
          Sign In
        </button>

        <p className={styles.textCenter}>Or</p>

        <Link href="/profile/signup">
          <button className={styles.buttonSecondary}>Create an account</button>
        </Link>
      </form>
    </div>
  );
}
