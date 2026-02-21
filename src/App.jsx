import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const heroRef = useRef(null);
  const carRef = useRef(null);

  useEffect(() => {
    // Headline intro animation
    gsap.from(".letter", {
      y: 40,
      stagger: 0.06,
      duration: 0.8,
      ease: "power3.out",
    });

    // Stats intro animation
    gsap.from(".stat", {
      y: 30,
      opacity: 0,
      stagger: 0.2,
      delay: 0.5,
      duration: 0.6,
      ease: "power2.out",
    });

    // Car scroll animation
    gsap.to(carRef.current, {
      x: 600,
      scale: 1.1,
      rotate: 3,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // Stats fade on scroll
    gsap.to(".stat", {
      y: -50,
      opacity: 0.3,
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

  }, []);

  const text = "WELCOME ITZFIZZ";

  return (
    <div className="relative bg-black text-white overflow-x-hidden">

      {/* Premium Gradient Glow Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-black to-blue-900/30 blur-3xl"></div>

      <div className="relative z-10">

        <section
          ref={heroRef}
          className="hero h-[200vh] relative"
        >
          <div className="sticky top-0 h-screen flex flex-col justify-center items-center">

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-[0.2em] md:tracking-[0.3em] mb-8 text-center px-4">
              {text.split("").map((char, index) => (
                <span key={index} className="letter inline-block mx-1">
                  {char}
                </span>
              ))}
            </h1>

            {/* Stats */}
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 text-center mb-10">
              <div className="stat">
                <h2 className="text-2xl md:text-3xl font-bold">98%</h2>
                <p>Client Satisfaction</p>
              </div>
              <div className="stat">
                <h2 className="text-2xl md:text-3xl font-bold">120+</h2>
                <p>Projects Delivered</p>
              </div>
              <div className="stat">
                <h2 className="text-2xl md:text-3xl font-bold">5X</h2>
                <p>Yearly Growth</p>
              </div>
            </div>

            {/* Car Image */}
            <img
              ref={carRef}
              src="https://images.unsplash.com/photo-1502877338535-766e1452684a"
              alt="Car"
              className="w-64 sm:w-72 md:w-96 mt-6"
            />

          </div>
        </section>

      </div>
    </div>
  );
}

export default App;