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

      {/* =========================
          BIRTHDAY OPENING
      ========================= */}

      <section className="birthday-hero">

        <div className="hero-stars" />

        <div className="floating-heart heart-one">♡</div>
        <div className="floating-heart heart-two">♥</div>
        <div className="floating-heart heart-three">♡</div>

        <p className="tiny-text">05 · 10 · 2026</p>

        <h1>
          Happy Birthday,
          <br />
          <span>my love.</span>
        </h1>

        <p className="hero-subtitle">
          Today is about celebrating you.
        </p>

        <div className="scroll-hint">
          <span>There is something waiting for you</span>
          <b>↓</b>
        </div>
      </section>


      {/* =========================
          FAIRYTALE INTRO
      ========================= */}

      <section className="fairytale-intro">

        <p className="tiny-text">A little story about us</p>

        <h2>
          Our little
          <br />
          <span>fairytale.</span>
        </h2>

        <p className="fairytale-description">
          Five photographs.
          <br />
          A thousand little memories.
          <br />
          And one story that means everything to me.
        </p>

        <div className="sparkle-line">
          <span>✦</span>
          <span>♡</span>
          <span>✦</span>
        </div>

      </section>


      {/* =========================
          PHOTO 1
      ========================= */}

      <section className="memory-scene scene-dark">

        <div className="memory-photo photo-one">
          <img src="/1.jpg" alt="A memory of us in the mountains" />
        </div>

        <div className="memory-copy">
          <span className="chapter">Chapter I</span>

          <h2>
            Somewhere between
            <br />
            the mountains
            <br />
            <em>and the clouds...</em>
          </h2>

          <p>
            there was us.
          </p>
        </div>

        <div className="memory-heart">♡</div>

      </section>


      {/* =========================
          PHOTO 2
      ========================= */}

      <section className="memory-scene scene-night">

        <div className="memory-copy">
          <span className="chapter">Chapter II</span>

          <h2>
            Some memories
            <br />
            don't need
            <br />
            <em>perfect lighting.</em>
          </h2>

          <p>
            They just need the right person beside you.
          </p>
        </div>

        <div className="memory-photo photo-two">
          <img src="/2.jpg" alt="A beautiful night memory of us" />
        </div>

        <div className="tiny-stars">✦ · ✧ · ✦</div>

      </section>


      {/* =========================
          PHOTO 3
      ========================= */}

      <section className="memory-scene scene-cream">

        <div className="scrapbook-photo photo-three">
          <div className="tape" />
          <img src="/3.jpg" alt="A close memory of us" />
        </div>

        <div className="memory-copy dark-copy">
          <span className="chapter">Chapter III</span>

          <h2>
            The two people
            <br />
            behind
            <br />
            <em>the story.</em>
          </h2>

          <p>
            Just us. Just being us.
          </p>
        </div>

      </section>


      {/* =========================
          PHOTO 4
      ========================= */}

      <section className="memory-scene scene-sky">

        <div className="memory-copy dark-copy">

          <span className="chapter">Chapter IV</span>

          <h2>
            If I could keep
            <br />
            one ordinary
            <br />
            moment
            <br />
            <em>forever...</em>
          </h2>

          <p>
            I'd probably choose one of these.
          </p>

        </div>

        <div className="memory-photo photo-four">
          <img src="/4.jpg" alt="A sunny memory of us" />
        </div>

      </section>


      {/* =========================
          PHOTO 5
      ========================= */}

      <section className="memory-scene scene-final-photo">

        <div className="final-photo-glow" />

        <div className="memory-photo photo-five">
          <img src="/5.jpg" alt="A special memory of us" />
        </div>

        <div className="memory-copy">

          <span className="chapter">Chapter V</span>

          <h2>
            And then
            <br />
            there was
            <br />
            <em>us.</em>
          </h2>

          <p>
            Still my favourite place to be.
          </p>

        </div>

        <div className="big-heart">♥</div>

      </section>


      {/* =========================
          BIRTHDAY TRANSITION
      ========================= */}

      <section className="birthday-transition">

        <div className="celebration-stars">✦ ✧ ✦</div>

        <p className="tiny-text">And today...</p>

        <h2>
          It's your
          <br />
          <span>day.</span>
        </h2>

        <p>
          So before we go any further,
          <br />
          there's something I want you to know.
        </p>

        <div className="celebration-heart">♡</div>

      </section>


      {/* =========================
          RUDRA SECTION
      ========================= */}

      <section className="rudra-section">

        <p className="tiny-text">Today, especially</p>

        <h2>
          This day is
          <br />
          <span>about you.</span>
        </h2>

        <div className="rudra-message">

          <p>
            The person who somehow became such a beautiful part
            of my life deserves more than just a birthday message.
          </p>

          <p>
            So I made you a little world instead.
          </p>

          <div className="heart-divider">
            ♥ · ♥ · ♥
          </div>

          <p className="small-message">
            And this is only the beginning...
          </p>

        </div>

      </section>


      {/* =========================
          LETTER PLACEHOLDER
      ========================= */}

      <section className="final-letter">

        <p className="tiny-text">A letter for you</p>

        <div className="paper">

          <h2>Dear Rudra,</h2>

          <p>
            Happy birthday to you. I hope this year brings you
            everything you're hoping for and so much more.
          </p>

          <p>
            I wanted to make you something instead of just sending
            you a message, because you deserve something made
            especially for you.
          </p>

          <p>
            So here it is — a tiny piece of the internet that belongs
            to us.
          </p>

          <p className="signature">
            Love,
            <br />
            Waru ❤️
          </p>

        </div>

      </section>


      {/* =========================
          END
      ========================= */}

      <footer>

        <div className="footer-heart">♥</div>

        Made with too much love for Rudra.

        <br />

        <span>05 · 10 · 2026</span>

      </footer>

    </main>
  );
}
