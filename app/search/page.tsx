"use client";

import React, { LegacyRef, useRef, useState } from "react";
import styles from "./page.module.css";

export default function page() {
  const [searchQuery, setSearchQuery] = useState("");
  const inputReference = useRef<HTMLInputElement>();

  function onSubmitForm(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // search implementation
    // .......
    // .......
    // end of search

    inputReference.current?.blur();
  }
  return (
    <div className={styles.search}>
      <form onSubmit={onSubmitForm}>
        <input
          type="text"
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
          placeholder="Search for your favourite movie or genere"
          ref={inputReference! as LegacyRef<HTMLInputElement>}
        />
      </form>
    </div>
  );
}
