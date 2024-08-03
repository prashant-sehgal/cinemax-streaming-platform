"use client";

import React, { useState } from "react";
import styles from "../page.module.css";
import Link from "next/link";
import InputPassword from "../InputPassword";

export default function page() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  return (
    <div>
      <form className={styles.form}>
        <h1>Create an account</h1>
        <div className={styles.element}>
          <input
            type="text"
            placeholder="Enter your full name"
            value={fullname}
            onChange={(event) => setFullname(event.target.value)}
            required
          />
        </div>
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
        <InputPassword
          value={confirmPassword}
          setValue={setConfirmPassword}
          placeholder="Confirm your password"
        />

        <button type="submit" className={styles.buttonPrimary}>
          Sign Up
        </button>
        <p className={styles.textCenter}>Or</p>

        <Link href="/profile/signin">
          <button className={styles.buttonSecondary}>
            Already have an account? Sign In
          </button>
        </Link>
      </form>
    </div>
  );
}
