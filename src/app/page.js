"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function WeddingInviteWebsite() {

  const [opened, setOpened] = useState(false);

  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  const audioRef = useRef(null);

  const [musicPlaying, setMusicPlaying] = useState(false);
  const [eventResult, setEventResult] = useState("");
  const [cryResult, setCryResult] = useState("");
  const [coolResult, setCoolResult] = useState("");
  const [loveResult, setLoveResult] = useState("");
  const [singerResult, setSingerResult] = useState("");
  const [sanuVotes, setSanuVotes] = useState(0);

  const [guestName, setGuestName] = useState("");
  const [guestMessage, setGuestMessage] = useState("");
  const [submitStatus, setSubmitStatus] = useState("");


const submitWish = async () => {
  if (!guestName || !guestMessage) {
    setSubmitStatus("Please fill all fields ❤️");
    return;
  }

  try {
    await fetch(
      "https://script.google.com/macros/s/AKfycbxRnXiidSFLwXgZNn34rmiiy87Kq_dZkfu_yaeQ__QBnvOimM3VDlIdmvpDjyUTjRQx/exec",
      {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify({
          name: guestName,
          message: guestMessage,
        }),
      }
    );

    setSubmitStatus("💜 Thank you for your blessings!");
    setGuestName("");
    setGuestMessage("");
  } catch (error) {
    console.log(error);
    setSubmitStatus("😢 Something went wrong.");
  }
};
  useEffect(() => {

    const targetDate = new Date(2026, 6, 1, 0, 1, 0).getTime();
    

    const timer = setInterval(() => {

      const now = new Date().getTime();

      const difference = targetDate - now;

      const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
      );

      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
      );

      const minutes = Math.floor(
        (difference % (1000 * 60 * 60)) /
        (1000 * 60)
      );

      const seconds = Math.floor(
        (difference % (1000 * 60)) / 1000
      );

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
      });

    }, 1000);

    return () => clearInterval(timer);

  }, []);

  const toggleMusic = () => {

    if (!audioRef.current) return;

    if (musicPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setMusicPlaying(!musicPlaying);
  };

  return (

    <main
      style={{
        background: "#05010a",
        color: "white",
        overflow: "hidden",
        fontFamily: "serif",
      }}
    >

      {/* MUSIC */}

      <audio ref={audioRef} loop>
        <source src="/music/wedding.mp3" type="audio/mp3" />
      </audio>

      <button
        onClick={toggleMusic}
        className={musicPlaying ? "pulse" : ""}
        style={{
          position: "fixed",
          bottom: "25px",
          right: "25px",
          width: "70px",
          height: "70px",
          borderRadius: "50%",
          border: "none",
          background: "#7c3aed",
          color: "white",
          fontSize: "28px",
          zIndex: 999,
          cursor: "pointer",
          boxShadow: "0 0 40px rgba(168,85,247,0.8)",
        }}
      >
        {musicPlaying ? "🔊" : "🎵"}
      </button>

      {/* OPENING SCREEN */}

      {!opened && (

        <section
          style={{
            position: "fixed",
            inset: 0,
            background: "black",
            zIndex: 999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >

          {/* BLUR BACKGROUND */}

          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: "url('/images/details.jPG')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "blur(12px) brightness(0.2)",
              transform: "scale(1.1)",
            }}
          />

          {/* CARD */}

          <div
            style={{
              width: "95%",
              maxWidth: "1600px",
              position: "relative",
            }}
          >

            {/* GLOW */}

            <div
              style={{
                position: "absolute",
                inset: "-2px",
                borderRadius: "40px",
                background: "#c084fc",
                filter: "blur(25px)",
                opacity: 0.7,
              }}
            />

            {/* IMAGE */}

            <div
              style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: "40px",
                border: "2px solid rgba(255,255,255,0.1)",
              }}
            >

              <img
                src="/images/details.jPG"
                alt="Wedding"
                style={{
                  width: "100%",
                  height: "88vh",
                  objectFit: "cover",
                  filter: "brightness(0.45)",
                }}
              />

              {/* RB BUTTON */}

              <button
                onClick={() => setOpened(true)}
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",

                  width: "clamp(130px, 22vw, 180px)",
                  height: "clamp(130px, 22vw, 180px)",

                  borderRadius: "50%",
                  border: "4px solid #f5d6ff",

                  background:
                  "linear-gradient(to bottom, #6a2356, #431238, #240318)",

                  color: "#f6deb7",

                  fontSize: "clamp(55px, 8vw, 80px)",

                  fontFamily: "serif",
                  cursor: "pointer",

                  boxShadow:
                  "0 0 80px rgba(216,180,254,1)",
                }}
              >
                RB
              </button>

            </div>

          </div>

        </section>

      )}

      {/* MAIN WEBSITE */}

      {opened && (

        <>

          {/* HERO SECTION */}

          <section
             style={{
              minHeight: "100svh",
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              overflow: "hidden",
              padding: "40px 20px",
            }}
          >

            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage: "url('/images/hero.jPG')",
                backgroundSize: "cover",
                backgroundPosition: "center 15%",
                filter: "brightness(0.68)",
              }}
            />

            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.7))",
              }}
            />
            <div className="floating-heart heart1">❤️</div>
            <div className="floating-heart heart2">❤️</div>
            <div className="floating-heart heart3">❤️</div>

            <div
              style={{
                position: "relative",
                zIndex: 2,
                padding: "20px",
              }}
            >

              <p
                style={{
                  letterSpacing: "4px",
                  color: "#d8b4fe",
                  marginBottom: "16px",
                  fontSize: "clamp(12px, 2.5vw, 18px)",
                }}
              >
                WEDDING INVITATION
              </p>

              <h1
                style={{
                  fontSize: "clamp(42px, 10vw, 110px)",
                  lineHeight: 1.15,
                }}
              >
                Ruturaj{" "}
                <span style={{ color: "#c084fc" }}>
                     &
                </span>{" "}
                Banishree
              </h1>

              <p
                style={{
                  marginTop: "20px",
                  color: "#ddd",
                  fontSize: "clamp(16px, 4vw, 24px)",
                  maxWidth: "700px",
                  marginInline: "auto",
                  lineHeight: 1.6,
                }}
              >
                Two Hearts. One Beautiful Forever.
              </p>

            </div>

          </section>

          {/* FAMILY SECTION */}

          <motion.section
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{
              minHeight: "100vh",
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "120px 20px",
              overflow: "hidden",
            }}
          >

            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage: "url('/images/family.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center 10%",
                filter: "brightness(0.35)",
              }}
            />

            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "rgba(0,0,0,0.6)",
              }}
            />

            <div
              style={{
                position: "relative",
                zIndex: 2,
                maxWidth: "900px",
                textAlign: "center",
                padding: "0 20px",
              }}
            >

              <h2
                style={{
                  fontSize: "clamp(32px, 8vw, 80px)",
                  color: "#f5e6c8",
                  lineHeight: 1.25,
                  padding: "0 10px",
                }}
              >
                With the Blessings
                <br />
                of Our Beloved Parents
              </h2>

              <div
                style={{
                  marginTop: "50px",
                }}
              >

                <p
                  style={{
                    color: "#d9b97d",
                    letterSpacing: "3px",
                    textTransform: "uppercase",
                    fontSize: "clamp(12px, 3vw, 16px)",
                  }}
                >
                  Groom's Parents
                </p>

                <h3
                  style={{
                    marginTop: "20px",
                    fontSize: "clamp(24px, 6vw, 40px)",
                  }}
                >
                  Promada Chandra Mishra
                </h3>

                <p
                  style={{
                    margin: "15px 0",
                    color: "#c084fc",
                    fontSize: "30px",
                  }}
                >
                  &
                </p>

                <h3
                  style={{
                    fontSize: "clamp(24px,6vw,40px)"
                  }}
                >
                  Sandhyarani Mishra
                </h3>

              </div>

              <div
                style={{
                  marginTop: "50px",
                }}
              >

                <p
                  style={{
                    color: "#d9b97d",
                    letterSpacing: "3px",
                    fontSize: "clamp(12px, 3vw, 16px)",
                    textTransform: "uppercase",
                  }}
                >
                  Bride's Parents
                </p>

                <h3
                  style={{
                    marginTop: "20px",
                    fontSize: "clamp(24px, 6vw, 40px)",
                  }}
                >
                    Durga Charan Pani
                </h3>

                <p
                  style={{
                    margin: "15px 0",
                    color: "#c084fc",
                    fontSize: "30px",
                  }}
                >
                  &
                </p>

                <h3
                  style={{
                    fontSize: "clamp(24px,6vw,40px)",
                  }}
                >
                 Namita Kumari Satapathy
                </h3>

              </div>

            </div>

          </motion.section>
          

          {/* COUNTDOWN */}

          <motion.section
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{
              padding: "80px 16px",
              textAlign: "center",
            }}
          >

            <h2
              style={{
                fontSize: "clamp(34px, 8vw, 80px)",
                color: "#f5e6c8",
                lineHeight: 1.2,
                padding: "0 10px",
              }}
            >
              Countdown To Forever
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(2, minmax(140px, 1fr))",
                gap: "15px",
                maxWidth: "700px",
                margin: "50px auto 0",
              }}
            >

              {[
                ["Days", timeLeft.days],
                ["Hours", timeLeft.hours],
                ["Minutes", timeLeft.minutes],
                ["Seconds", timeLeft.seconds],
              ].map((item, index) => (

                <div
                  key={index}
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border:
                      "1px solid rgba(192,132,252,0.2)",
                    borderRadius: "22px",
                    padding: "30px 12px",
                    backdropFilter: "blur(10px)",
                  }}
                >

                  <h3
                    style={{
                      fontSize: "clamp(32px, 8vw, 60px)",
                    }}
                  >
                    {item[1]}
                  </h3>

                  <p
                    style={{
                      marginTop: "8px",
                      color: "#d8b4fe",
                      letterSpacing: "2px",
                      fontSize: "clamp(12px, 3vw, 16px)",
                    }}
                  >
                    {item[0]}
                  </p>

                </div>

              ))}

            </div>

          </motion.section>
          {/* WEDDING EVENTS */}

<motion.section
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  style={{
    padding: "90px 16px",
    background: "#08010f",
    textAlign: "center",
  }}
>

  <h2
    style={{
      fontSize: "clamp(34px,8vw,80px)",
      color: "#f5e6c8",
      lineHeight: 1.2,
    }}
  >
    Wedding Celebrations
  </h2>

  <p
    style={{
      marginTop: "15px",
      color: "#d8b4fe",
      fontSize: "clamp(14px,3vw,20px)",
      letterSpacing: "2px",
    }}
  >
    Join us in celebrating every beautiful moment
  </p>

  <div
    style={{
      display: "grid",
      gridTemplateColumns:
        "repeat(auto-fit,minmax(300px,1fr))",
      gap: "25px",
      maxWidth: "1200px",
      margin: "60px auto 0",
    }}
  >

    {/* HALDI & MEHENDI */}

    <div
      style={{
        background: "rgba(255,255,255,0.05)",
        border:
          "1px solid rgba(192,132,252,0.2)",
        borderRadius: "30px",
        padding: "35px",
        backdropFilter: "blur(10px)",
      }}
    >

      <h3
        style={{
          fontSize: "clamp(26px,6vw,36px)",
          color: "#f5e6c8",
        }}
      >
        Haldi & Mehendi
      </h3>

      <p
        style={{
          marginTop: "15px",
          color: "#d8b4fe",
        }}
      >
        30 June 2026
      </p>

      <p
        style={{
          marginTop: "10px",
          color: "#ffffff",
        }}
      >
        6:00 PM Onwards
      </p>

      <div
        style={{
          marginTop: "30px",
        }}
      >

        <h4
          style={{
            color: "#f5e6c8",
            marginBottom: "10px",
          }}
        >
          Bride Side
        </h4>

        <a
          href="https://share.google/vXSIiswZj2nTmWgMo"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            padding: "12px 22px",
            background: "#7c3aed",
            color: "white",
            borderRadius: "30px",
            textDecoration: "none",
          }}
        >
          View Venue
        </a>

      </div>

      <div
        style={{
          marginTop: "25px",
        }}
      >

        <h4
          style={{
            color: "#f5e6c8",
            marginBottom: "10px",
          }}
        >
          Groom Side
        </h4>

        <a
          href="https://goo.gl/maps/KzzDfn3kHMNypvjY6"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            padding: "12px 22px",
            background: "#7c3aed",
            color: "white",
            borderRadius: "30px",
            textDecoration: "none",
          }}
        >
          View Venue
        </a>

      </div>

    </div>

    {/* WEDDING */}

    <div
      style={{
        background: "rgba(255,255,255,0.05)",
        border:
          "1px solid rgba(192,132,252,0.2)",
        borderRadius: "30px",
        padding: "35px",
        backdropFilter: "blur(10px)",
      }}
    >

      <h3
        style={{
          fontSize: "clamp(26px,6vw,36px)",
          color: "#f5e6c8",
        }}
      >
        Wedding
      </h3>

      <p
        style={{
          marginTop: "15px",
          color: "#d8b4fe",
        }}
      >
        01 July 2026
      </p>

      <p
        style={{
          marginTop: "10px",
          color: "#ffffff",
        }}
      >
        12:00 PM
      </p>

      <a
        href="https://share.google/vXSIiswZj2nTmWgMo"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-block",
          marginTop: "30px",
          padding: "12px 22px",
          background: "#7c3aed",
          color: "white",
          borderRadius: "30px",
          textDecoration: "none",
        }}
      >
        View Venue
      </a>

    </div>

    {/* RECEPTION */}

    <div
      style={{
        background: "rgba(255,255,255,0.05)",
        border:
          "1px solid rgba(192,132,252,0.2)",
        borderRadius: "30px",
        padding: "35px",
        backdropFilter: "blur(10px)",
      }}
    >

      <h3
        style={{
          fontSize: "clamp(26px,6vw,36px)",
          color: "#f5e6c8",
        }}
      >
        Reception
      </h3>

      <p
        style={{
          marginTop: "15px",
          color: "#d8b4fe",
        }}
      >
        02 July 2026
      </p>

      <p
        style={{
          marginTop: "10px",
          color: "#ffffff",
        }}
      >
        12:00 PM
      </p>

      <a
        href="https://share.google/vXSIiswZj2nTmWgMo"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-block",
          marginTop: "30px",
          padding: "12px 22px",
          background: "#7c3aed",
          color: "white",
          borderRadius: "30px",
          textDecoration: "none",
        }}
      >
        View Venue
      </a>

    </div>

  </div>

</motion.section>
{/* A FEW WORDS BEFORE FOREVER */}

<motion.section
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  style={{
    padding: "80px 20px",
    background: "#08010f",
    textAlign: "center",
    position: "relative",
    overflow: "hidden",
  }}
>

  {/* Purple Glow Left */}
  <div
    style={{
      position: "absolute",
      top: "100px",
      left: "-100px",
      width: "250px",
      height: "250px",
      background: "#7c3aed",
      filter: "blur(120px)",
      opacity: 0.25,
    }}
  />

  {/* Purple Glow Right */}
  <div
    style={{
      position: "absolute",
      bottom: "100px",
      right: "-100px",
      width: "250px",
      height: "250px",
      background: "#c084fc",
      filter: "blur(120px)",
      opacity: 0.2,
    }}
  />

  <h2
    style={{
      fontSize: "clamp(2rem,6vw,4rem)",
      color: "#f5e6c8",
      marginBottom: "15px",
    }}
  >
    A Few Words Before Forever
  </h2>

  {/* rest of your bride/groom content */}



  <p
    style={{
      color: "#8c6f4e",
      marginBottom: "50px",
      fontSize: "18px",
    }}
  >
    From our hearts to yours ❤️
  </p>

  {/* Bride Section */}

  <div
    style={{
      maxWidth: "1100px",
      margin: "0 auto 80px",
      display: "flex",
      flexWrap: "wrap",
      gap: "30px",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <img
      src="/images/bride.jpg"
      alt="Bride"
      style={{
        width: "min(280px,80vw)",
        borderRadius: "20px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
      }}
    />

    <img
      src="/images/bride-note.jpg"
      alt="Bride Note"
      style={{
        width: "450px",
        maxWidth: "100%",
        borderRadius: "20px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
      }}
    />
  </div>

  <div
    style={{
      fontSize: "40px",
      marginBottom: "60px",
    }}
  >
    ❤️
  </div>

  {/* Groom Section */}

  <div
    style={{
      maxWidth: "1100px",
      margin: "0 auto",
      display: "flex",
      flexWrap: "wrap-reverse",
      gap: "30px",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <img
      src="/images/groom-note.jpg"
      alt="Groom Note"
      style={{
        width: "450px",
        maxWidth: "100%",
        borderRadius: "20px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
      }}
    />

    <img
      src="/images/groom.jpg"
      alt="Groom"
      style={{
        width: "280px",
        borderRadius: "20px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
      }}
    />
  </div>
</motion.section>
{/* ================= FUN QUESTIONS SECTION ================= */}

<motion.section
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  style={{
    padding: "100px 20px",
    background: "#08010f",
    textAlign: "center",
  }}
>
  <p
    style={{
      color: "#d8b4fe",
      letterSpacing: "5px",
      textTransform: "uppercase",
      marginBottom: "10px",
    }}
  >
    Join The Fun
  </p>

  <h2
    style={{
      fontSize: "clamp(2.5rem,8vw,5rem)",
      color: "#f5e6c8",
      marginBottom: "20px",
    }}
  >
    Celebrate With Us
  </h2>

  <p
    style={{
      color: "#d8b4fe",
      marginBottom: "60px",
    }}
  >
    A few fun questions before the big day! ❤️
  </p>

  <div
    style={{
      maxWidth: "1000px",
      margin: "0 auto",
      display: "grid",
      gap: "30px",
    }}
  >
{/* Question 1 */}

<div
  style={{
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(192,132,252,0.2)",
    borderRadius: "25px",
    padding: "clamp(20px,4vw,35px)",
  }}
>
  <h3 style={{ color: "#f5e6c8" }}>
    😎 Who Is More Cool?
  </h3>

  <div
    style={{
      display: "flex",
      justifyContent: "center",
      gap: "12px",
      flexWrap: "wrap",
      marginTop: "20px",
    }}
  >
    <button
      className="fun-btn"
      onClick={() =>
        setCoolResult("🔥 Sanu Wins Again! 😎👑")
      }
    >
      Silu 😎
    </button>

    <button
      className="fun-btn"
      onClick={() =>
        setCoolResult("🔥 Nice Try! Sanu Wins 😎👑")
      }
    >
      Bani 👑
    </button>

    <button
      className="fun-btn"
      onClick={() =>
        setCoolResult("🎉 Correct Answer! Sanu 😎👑")
      }
    >
      Sanu 🔥
    </button>
  </div>

  {coolResult && (
    <div
      style={{
        marginTop: "25px",
        background: "rgba(124,58,237,0.15)",
        border: "1px solid rgba(192,132,252,0.3)",
        borderRadius: "15px",
        padding: "15px",
        color: "#d8b4fe",
        fontWeight: "bold",
      }}
    >
      {coolResult}
    </div>
  )}
</div>

  {/* QUESTION 2 */}

<div
  style={{
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(192,132,252,0.2)",
    borderRadius: "25px",
    padding: "clamp(20px,4vw,35px)",
  }}
>
  <h3 style={{ color: "#f5e6c8" }}>
    🎤 Who Is The Khataranak Singer?
  </h3>

  <div
    style={{
      display: "flex",
      justifyContent: "center",
      gap: "12px",
      flexWrap: "wrap",
      marginTop: "20px",
    }}
  >
    <button
      className="fun-btn"
      onClick={() =>
        setSingerResult(
          "🎉 Congratulations! You Won ₹7 Crore 💰💰💰"
        )
      }
    >
      Ruturaj 🎤
    </button>

    <button
      className="fun-btn"
      onClick={() =>
        setSingerResult(
          "😱 Oops! You Lost ₹7 Crore 💸💸💸"
        )
      }
    >
      Banishree 🎶
    </button>
  </div>

  {singerResult && (
    <div
      style={{
        marginTop: "25px",
        background: "rgba(124,58,237,0.15)",
        border: "1px solid rgba(192,132,252,0.3)",
        borderRadius: "15px",
        padding: "18px",
        color: "#d8b4fe",
        fontWeight: "bold",
        fontSize: "18px",
      }}
    >
      {singerResult}
    </div>
  )}
</div>
    {/* Question 3 */}

    <div
      style={{
        background: "rgba(255,255,255,0.05)",
        border: "1px solid rgba(192,132,252,0.2)",
        borderRadius: "25px",
        padding: "clamp(20px,4vw,35px)",
      }}
    >
      <h3 style={{ color: "#f5e6c8" }}>
        ❤️ Who Is More Loveable?
      </h3>

      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "12px",
        flexWrap: "wrap",
        marginTop: "20px"
      }}>
        <button
          className="fun-btn"
          onClick={() =>
          setLoveResult(
          <>
            ❤️ Once upon a time,<br />
            there was "Me" and "You".<br /><br />

             Now there is only "Us".<br /><br />

              So every point I earn<br />
              belongs to her too. ❤️<br /><br />

              👑 Banishree Wins ❤️
      </>
    )
  }
>
  Ruturaj ❤️
</button>

<button
  className="fun-btn"
  onClick={() =>
    setLoveResult("👑 Correct Answer! Banishree Wins ❤️")
  }
>
  Banishree ❤️
</button>
      </div>
      {loveResult && (
  <div
    style={{
      marginTop: "25px",
      background: "rgba(124,58,237,0.15)",
      border: "1px solid rgba(192,132,252,0.3)",
      borderRadius: "15px",
      padding: "20px",
      color: "#d8b4fe",
      lineHeight: "1.8",
    }}
  >
    {loveResult}
  </div>
)}
    </div>

{/* Question 4 */}

<div
  style={{
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(192,132,252,0.2)",
    borderRadius: "25px",
    padding: "clamp(20px,4vw,35px)",
  }}
>
  <h3 style={{ color: "#f5e6c8" }}>
    😭 Who Will Cry First At The Wedding?
  </h3>

  <div
    style={{
      display: "flex",
      justifyContent: "center",
      gap: "12px",
      flexWrap: "wrap",
      marginTop: "20px",
    }}
  >
    <button
      className="fun-btn"
      onClick={() =>
        setCryResult(
          "😂 Ruturaj says: I am strong... but let's see on the wedding day 😭"
        )
      }
    >
      Ruturaj 😭
    </button>

    <button
      className="fun-btn"
      onClick={() =>
        setCryResult(
          "🥹 Banishree's eyes are already getting emotional ❤️"
        )
      }
    >
      Banishree 😭
    </button>

    <button
      className="fun-btn"
      onClick={() =>
        setCryResult(
          "💞 Correct Answer! Both will cry and make everyone emotional ❤️😭"
        )
      }
    >
      Both ❤️
    </button>
  </div>

  {cryResult && (
    <div
      style={{
        marginTop: "25px",
        background: "rgba(124,58,237,0.15)",
        border: "1px solid rgba(192,132,252,0.3)",
        borderRadius: "15px",
        padding: "20px",
        color: "#d8b4fe",
        lineHeight: "1.8",
      }}
    >
      {cryResult}
    </div>
  )}
</div>
{/* Question 5 */}

<div
  style={{
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(192,132,252,0.2)",
    borderRadius: "25px",
    padding: "clamp(20px,4vw,35px)",
  }}
>
  <h3 style={{ color: "#f5e6c8" }}>
    🎉 Which Event Are You Most Excited For?
  </h3>

  <div
    style={{
      display: "flex",
      justifyContent: "center",
      gap: "12px",
      flexWrap: "wrap",
      marginTop: "20px",
    }}
  >
    <button
      className="fun-btn"
      onClick={() =>
        setEventResult(
          "🌼 Great Choice! Haldi will be full of colors, laughter and fun!"
        )
      }
    >
      🌼 Haldi
    </button>

    <button
      className="fun-btn"
      onClick={() =>
        setEventResult(
          "🌿 Mehendi Night is going to be magical with music, dance and memories!"
        )
      }
    >
      🌿 Mehendi
    </button>

    <button
      className="fun-btn"
      onClick={() =>
        setEventResult(
          "💍 The Wedding Ceremony — where two hearts become one forever ❤️"
        )
      }
    >
      💍 Wedding
    </button>

    <button
      className="fun-btn"
      onClick={() =>
        setEventResult(
          "🎊 Reception Time! Food, Celebration and Unlimited Photos 📸"
        )
      }
    >
      🎊 Reception
    </button>

    <button
      className="fun-btn"
      onClick={() =>
        setEventResult(
          "🏆 Correct Answer! Why choose one when you can enjoy ALL OF THESE! ❤️🎉👑"
        )
      }
    >
      ✨ All Of These
    </button>
  </div>

  {eventResult && (
    <div
      style={{
        marginTop: "25px",
        background: "rgba(124,58,237,0.15)",
        border: "1px solid rgba(192,132,252,0.3)",
        borderRadius: "15px",
        padding: "20px",
        color: "#d8b4fe",
        lineHeight: "1.8",
      }}
    >
      {eventResult}
    </div>
  )}
</div>

  <style jsx>{`
    .fun-btn {
      padding: 12px 22px;
      border-radius: 30px;
      border: 1px solid rgba(192,132,252,0.4);
      background: rgba(124,58,237,0.15);
      color: white;
      cursor: pointer;
      transition: all 0.3s ease;
      font-size: 15px;
    }

    .fun-btn:hover {
      background: #7c3aed;
      transform: translateY(-2px);
      box-shadow: 0 0 20px rgba(124,58,237,0.5);
    }
      .pulse {
  animation: pulseGlow 2s infinite;
}

@keyframes pulseGlow {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.08);
  }

  100% {
    transform: scale(1);
  }
}

.floating-heart {
  position: absolute;
  font-size: 30px;
  opacity: 0.25;
  z-index: 1;
  animation: floatHeart 8s infinite ease-in-out;
}

.heart1 {
  top: 20%;
  left: 10%;
}

.heart2 {
  top: 50%;
  right: 15%;
  animation-delay: 2s;
}

.heart3 {
  bottom: 20%;
  left: 20%;
  animation-delay: 4s;
}

@keyframes floatHeart {
  0% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-20px);
  }

  100% {
    transform: translateY(0px);
  }
}
.fun-btn:hover {
  background: #7c3aed;
  transform: translateY(-2px);
  box-shadow: 0 0 20px rgba(124,58,237,0.5);
}

.pulse {
  animation: pulseGlow 2s infinite;
}


`}</style>
    </div>
 </motion.section>
 {/* ================= LEAVE US A NOTE ================= */}

<motion.section
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  style={{
    padding: "120px 20px",
    background: "#08010f",
    textAlign: "center",
  }}
>
  <p
    style={{
      color: "#d8b4fe",
      letterSpacing: "5px",
      textTransform: "uppercase",
      marginBottom: "10px",
    }}
  >
    Your Blessings Matter
  </p>

  <h2
    style={{
      fontSize: "clamp(2.5rem,8vw,5rem)",
      color: "#f5e6c8",
      marginBottom: "20px",
    }}
  >
    Leave Us A Note 💌
  </h2>

  <p
    style={{
      color: "#d8b4fe",
      maxWidth: "700px",
      margin: "0 auto 50px",
      lineHeight: "1.8",
    }}
  >
    Share your blessings, wishes, and beautiful words for the couple.
  </p>

  <div
    style={{
      maxWidth: "700px",
      margin: "0 auto",
      background: "rgba(255,255,255,0.05)",
      border: "1px solid rgba(192,132,252,0.2)",
      borderRadius: "30px",
      padding: "clamp(20px,5vw,40px)",
      backdropFilter: "blur(10px)",
    }}
  >
    <input
      type="text"
       value={guestName}
       onChange={(e) => setGuestName(e.target.value)}
       placeholder="Your Name"
       style={{
        width: "100%",
        padding: "16px",
        marginBottom: "20px",
        borderRadius: "15px",
        border: "1px solid rgba(192,132,252,0.3)",
        background: "rgba(255,255,255,0.05)",
        color: "#fff",
        fontSize: "16px",
        outline: "none",
      }}
    />

    <textarea
     value={guestMessage}
     onChange={(e) => setGuestMessage(e.target.value)}
      placeholder="Write your blessings and wishes here..."
      rows="6"
      style={{
        width: "100%",
        padding: "16px",
        borderRadius: "15px",
        border: "1px solid rgba(192,132,252,0.3)",
        background: "rgba(255,255,255,0.05)",
        color: "#fff",
        fontSize: "16px",
        resize: "none",
        outline: "none",
      }}
    />

    <button
       onClick={submitWish}
       style={{
        marginTop: "25px",
        padding: "15px 35px",
        borderRadius: "50px",
        border: "none",
        background: "linear-gradient(135deg,#7c3aed,#c084fc)",
        color: "#fff",
        fontSize: "16px",
        cursor: "pointer",
        fontWeight: "bold",
        boxShadow: "0 0 25px rgba(124,58,237,0.5)",
  }}
>
  Send Blessings ❤️
</button>
{submitStatus && (
  <p
    style={{
      marginTop: "20px",
      color: "#d8b4fe",
      fontWeight: "bold",
    }}
  >
    {submitStatus}
  </p>
)}
  </div>
</motion.section>

          {/* ENDING */}

          <section
            style={{
              padding: "160px 20px",
              textAlign: "center",
            }}
          >

            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            
            
            style={{
             fontSize: "clamp(42px, 12vw, 130px)",
               color: "#f5e6c8",
               lineHeight: "1.1",
                padding: "0 10px",
             }}
>
  Thank You
</motion.h2>

<motion.p
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ delay: 0.4, duration: 1 }}
  style={{
    maxWidth: "700px",
    margin: "40px auto 0",
    fontSize: "clamp(16px, 4vw, 22px)",
    lineHeight: 1.8,
    color: "#ddd",
    padding: "0 10px",
  }}
>
  Thank you for being part of our journey.
  <br />
  Your presence is the greatest gift. ❤️
</motion.p>

<motion.h3
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ delay: 0.5 }}
  style={{
    marginTop: "40px",
    fontSize: "clamp(28px, 7vw, 45px)",
    color: "#c084fc",
    lineHeight: "1.4",
  }}
>
  Ruturaj ❤️ Banishree
</motion.h3>

<div

  style={{
    padding: "70px 20px 100px",
    textAlign: "center",
    background: "#05010a",
    borderTop: "1px solid rgba(192,132,252,0.15)",
  }}
>
  <div
    style={{
      width: "120px",
      height: "1px",
      background: "#8b5cf6",
      margin: "0 auto 30px",
    }}
  />

  <p
    style={{
      color: "#b794f4",
      fontSize: "14px",
      letterSpacing: "2px",
      textTransform: "uppercase",
      marginBottom: "12px",
    }}
  >
    Crafted with Passion & Creativity ✨
  </p>

  <h3
    style={{
      color: "#f5e6c8",
      fontSize: "clamp(24px,6vw,38px)",
      marginBottom: "25px",
      fontWeight: "500",
    }}
  >
    Rudrakshi Misra
  </h3>

  <motion.a
  initial={{ opacity: 0, scale: 0.8 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }}
  transition={{ delay: 1.2, duration: 0.8 }}
  href="https://www.instagram.com/rudrakshi2003?igsh=ZDl1d3hpOTVrbmoz"
  target="_blank"
  rel="noopener noreferrer"
  style={{
    display: "inline-block",
    marginTop: "20px",
    padding: "14px 32px",
    borderRadius: "50px",
    border: "1px solid rgba(192,132,252,0.35)",
    color: "#f5e6c8",
    textDecoration: "none",
    fontSize: "16px",
    background: "rgba(124,58,237,0.08)",
  }}
>
  Instagram 📸
</motion.a>

  <p
    style={{
      marginTop: "40px",
      color: "#7c6b9a",
      fontSize: "12px",
      letterSpacing: "1px",
    }}
  >
    Designed for Ruturaj ❤️ Banishree
  </p>
  </div>

</section>

</>

)}


</main>
  );
}
