"use client";

import { useState } from "react";

export default function Home() {
  const [opened, setOpened] = useState(false);
  const [opening, setOpening] = useState(false);

  const openLetter = () => {
    if (opening) return;

    setOpening(true);

    setTimeout(() => {
      setOpened(true);
    }, 1800);
  };

  if (!opened) {
    return (
      <main className={`letter-screen ${opening ? "opening-screen" : ""}`}>
        <div className="stars" />

        <div className="letter-intro">
          <p className="tiny-text">A little something for you</p>

          <h1>
            For <span>Rudra</span>
          </h1>

          <p className="subtitle">
            I made something especially for you.
          </p>

          <div
            className={`envelope-wrapper ${opening ? "opening" : ""}`}
            onClick={openLetter}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                openLetter();
              }
            }}
          >
            <div className="envelope">
              <div className="letter-paper">
                <p>To the one who has</p>
                <p>a very special place</p>
                <p>in my heart...</p>
              </div>

              <div className="envelope-back" />

              <div className="envelope-flap" />

              <div className="envelope-front">
                <div className="seal">♥</div>
              </div>
            </div>
          </div>

          <p className="tap-text">
            {opening ? "opening..." : "tap the letter to open it"}
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="birthday-site">
      <section className="reveal">
        <p className="tiny-text">05 · 10 · 2026</p>

        <h1>
          Happy Birthday,
          <br />
          <span>my love.</span>
        </h1>

        <p>
          This little corner of the internet is just for you.
        </p>

        <button
          onClick={() => {
            document
              .getElementById("birthday-content")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Read what I made for you ↓
        </button>
      </section>

      <section id="birthday-content" className="content">
        <p className="tiny-text">Our little story</p>

        <h2>Some moments I want to keep forever.</h2>

        <div className="memory">
          <span>Chapter 01</span>
          <h3>Where it all began</h3>
          <p>
            Add your first special memory here. The moment our story started.
          </p>
        </div>

        <div className="memory">
          <span>Chapter 02</span>
          <h3>Little moments</h3>
          <p>
            The silly conversations, late nights, random laughs and all the
            tiny things that became ours.
          </p>
        </div>

        <div className="memory">
          <span>Chapter 03</span>
          <h3>Us</h3>
          <p>
            And all the memories we haven't made yet.
          </p>
        </div>
      </section>

      <section className="reasons">
        <p className="tiny-text">Reasons</p>

        <h2>A few things I love about you.</h2>

        <div className="cards">
          <div className="card">
            <span>01</span>
            <p>You make ordinary days feel special.</p>
          </div>

          <div className="card">
            <span>02</span>
            <p>I can completely be myself around you.</p>
          </div>

          <div className="card">
            <span>03</span>
            <p>You somehow always make me smile.</p>
          </div>

          <div className="card">
            <span>04</span>
            <p>Because you're simply you. ❤️</p>
          </div>
        </div>
      </section>

      <section className="final-letter">
        <p className="tiny-text">A letter for you</p>

        <div className="paper">
          <h2>Dear Rudra,</h2>

          <p>
            Happy birthday to you. I hope this year brings you everything
            you're hoping for and so much more.
          </p>

          <p>
            I wanted to make you something instead of just sending you a
            message, because you deserve something made especially for you.
          </p>

          <p>
            So here it is — a tiny piece of the internet that belongs to us.
          </p>

          <p className="signature">
            Love,
            <br />
            Waru ❤️
          </p>
        </div>
      </section>

      <footer>
        Made with too much love for Rudra.
        <br />
        ❤️ · ⚽ · ✨
      </footer>
    </main>
  );
}
