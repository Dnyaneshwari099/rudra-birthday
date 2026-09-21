"use client";

import { useEffect, useMemo, useState } from "react";
import { Heart, Gift, Camera, Sparkles, Trophy, ChevronDown } from "lucide-react";

const memories = [
  {
    title: "The beginning",
    text: "The chapter where somehow, out of all the people in the world, our paths found each other.",
  },
  {
    title: "The little things",
    text: "The calls, jokes, random updates, arguments, laughter and all the tiny moments that became ours.",
  },
  {
    title: "Us, even from far away",
    text: "Distance could make days harder, but it also showed me how much your presence means to me.",
  },
  {
    title: "Today",
    text: "Another birthday of yours, and another reason for me to be grateful that you exist.",
  },
];

const reasons = [
  "You make ordinary moments feel important.",
  "You make me laugh even when I am trying not to.",
  "I love how much passion you have for football.",
  "You have become one of my safest, most familiar people.",
  "You are completely, unmistakably you — and I love that.",
  "Even our chaos feels special because it is ours.",
];

function getCountdown() {
  const now = new Date();
  let target = new Date(now.getFullYear(), 9, 5, 0, 0, 0);
  if (now > target) target = new Date(now.getFullYear() + 1, 9, 5, 0, 0, 0);
  const diff = Math.max(0, target - now);
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function Home() {
  const [opened, setOpened] = useState(false);
  const [countdown, setCountdown] = useState(getCountdown());

  useEffect(() => {
    const timer = setInterval(() => setCountdown(getCountdown()), 1000);
    return () => clearInterval(timer);
  }, []);

  const units = useMemo(
    () => [
      ["Days", countdown.days],
      ["Hours", countdown.hours],
      ["Minutes", countdown.minutes],
      ["Seconds", countdown.seconds],
    ],
    [countdown]
  );

  if (!opened) {
    return (
      <main className="min-h-screen flex items-center justify-center px-6 overflow-hidden relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-[12%] text-rose-300/20 text-7xl floaty">♡</div>
          <div className="absolute bottom-24 right-[14%] text-amber-200/20 text-6xl floaty">✦</div>
        </div>
        <section className="max-w-3xl text-center fade-up">
          <div className="mx-auto mb-6 w-16 h-16 rounded-full glass flex items-center justify-center soft-shadow">
            <Gift className="w-7 h-7 text-rose-300" />
          </div>
          <p className="uppercase tracking-[0.35em] text-xs text-rose-200/70 mb-5">A little something made just for you</p>
          <h1 className="text-5xl md:text-7xl font-semibold leading-tight">
            Happy Birthday,
            <span className="block text-rose-300 mt-2">Rudra ❤️</span>
          </h1>
          <p className="mt-6 text-lg text-stone-300 max-w-xl mx-auto">
            I could have sent you a message. But you deserve something you can come back to.
          </p>
          <button
            onClick={() => setOpened(true)}
            className="mt-10 px-7 py-4 rounded-full bg-rose-300 text-stone-950 font-semibold hover:scale-[1.03] transition"
          >
            Open your birthday surprise
          </button>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      <section className="min-h-screen flex items-center justify-center px-6 relative">
        <div className="max-w-5xl w-full text-center fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-rose-100 mb-7">
            <Sparkles className="w-4 h-4" /> 5 October
          </div>
          <h1 className="text-5xl md:text-8xl font-semibold tracking-tight">
            To my favourite football person,
            <span className="block text-rose-300 mt-3">happy birthday.</span>
          </h1>
          <p className="max-w-2xl mx-auto mt-7 text-lg md:text-xl text-stone-300 leading-relaxed">
            This tiny corner of the internet is yours. A few memories, a few words, and a lot of love from me to you.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-12">
            {units.map(([label, value]) => (
              <div key={label} className="glass rounded-3xl p-6 soft-shadow">
                <div className="text-3xl md:text-5xl font-semibold text-rose-200">{String(value).padStart(2, "0")}</div>
                <div className="text-xs uppercase tracking-[0.2em] text-stone-400 mt-2">{label}</div>
              </div>
            ))}
          </div>

          <a href="#story" className="inline-flex flex-col items-center mt-14 text-stone-400 hover:text-white transition">
            <span className="text-sm mb-2">Keep scrolling</span>
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </a>
        </div>
      </section>

      <section id="story" className="px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <p className="text-rose-300 uppercase tracking-[0.28em] text-xs">Our little timeline</p>
          <h2 className="text-4xl md:text-6xl font-semibold mt-3">Somewhere along the way, there became an “us.”</h2>
          <div className="grid md:grid-cols-2 gap-5 mt-12">
            {memories.map((item, i) => (
              <article key={item.title} className="glass rounded-[2rem] p-7 md:p-9">
                <div className="text-sm text-rose-300/80">0{i + 1}</div>
                <h3 className="text-2xl font-semibold mt-4">{item.title}</h3>
                <p className="text-stone-300 leading-relaxed mt-3">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 text-amber-200 mb-4"><Trophy className="w-5 h-5" /> Ronaldo-level important</div>
          <h2 className="text-4xl md:text-6xl font-semibold">A few reasons I love you</h2>
          <div className="grid md:grid-cols-3 gap-4 mt-10">
            {reasons.map((reason, i) => (
              <div key={reason} className="glass rounded-3xl p-6 min-h-40 flex flex-col justify-between hover:-translate-y-1 transition">
                <Heart className="w-5 h-5 text-rose-300" />
                <p className="text-lg leading-relaxed mt-8">{reason}</p>
                <span className="text-xs text-stone-500 mt-5">#{i + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 text-rose-300 mb-4"><Camera className="w-5 h-5" /> Memories</div>
          <h2 className="text-4xl md:text-6xl font-semibold">Photos that deserve a permanent place here.</h2>
          <p className="text-stone-400 mt-4">Replace these placeholders with your favourite photos together.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-10">
            {[1,2,3,4,5,6].map((n) => (
              <div key={n} className="aspect-[4/5] rounded-[1.75rem] glass overflow-hidden flex items-center justify-center text-center p-5">
                <div>
                  <Camera className="w-7 h-7 mx-auto text-rose-300/80" />
                  <p className="text-sm text-stone-400 mt-3">Add photo {n}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="max-w-3xl mx-auto glass rounded-[2rem] p-8 md:p-12 soft-shadow">
          <p className="text-rose-300 uppercase tracking-[0.28em] text-xs">A letter for you</p>
          <h2 className="text-4xl md:text-5xl font-semibold mt-4">Dear Rudra,</h2>
          <div className="mt-8 space-y-5 text-stone-200 leading-8 text-lg">
            <p>
              Happy birthday to the person who somehow became such a huge part of my everyday life.
              You are in the random thoughts, the tiny updates, the jokes, the fights, the laughter and all the moments in between.
            </p>
            <p>
              I hope this year gives you more reasons to be proud of yourself, more football nights that make you lose your mind,
              and more moments that make you genuinely happy.
            </p>
            <p>
              Thank you for being you. Thank you for being part of my story. I hope I get to celebrate many more versions of you.
            </p>
            <p className="text-rose-200 font-medium">Happy birthday. I love you. ❤️</p>
            <p className="text-stone-400">— Waru</p>
          </div>
        </div>
      </section>

      <footer className="px-6 py-14 text-center text-sm text-stone-500">
        Made with entirely too much love for Rudra • 5 October ❤️
      </footer>
    </main>
  );
}
