"use client";
import gsap from "gsap";
import { Download, Mail } from "lucide-react";
import { useEffect, useRef } from "react";
import SocialIcons from "./SocialIconsWithWavyLines";
import Link from "next/link";

export default function HeroSection() {
  const timelineRef = useRef<GSAPTimeline | null>(null);

  const getRandomOffset = (val: number) => {
    const offset = Math.random() > 0.5 ? val : -val;
    return offset;
  };

  const splitText = ({
    text,
    className,
  }: {
    text: string;
    className: string;
  }) =>
    text
      .split(" ")
      .map((word, index) => (
        <span className={`inline-block ${className}`} key={`word-${index}`}>
          {word}
        </span>
      ))
      .reduce((acc: (JSX.Element | string)[], curr) => [...acc, curr, " "], []);

  useEffect(() => {
    // Important: Set initial states immediately when component mounts
    gsap.set(".hero-animated", { opacity: 0 });
    gsap.set(".hero-button", {
      opacity: 0,
      scale: 0.8,
      transformOrigin: "center",
    });

    timelineRef.current = gsap.timeline({
      defaults: {
        ease: "power3.out",
        duration: 0.8,
      },
      // Delay to ensure initial states are applied
      delay: 0.1,
    });

    timelineRef.current
      .set(".hero-animated", { opacity: 1 })
      .set([".hero-title", ".hero-subtitle"], {
        y: () => getRandomOffset(30),
        opacity: 0,
      })
      .set([".hero-slogan", ".hero-description"], {
        opacity: 0,
        y: 20,
      })
      // Text animations
      .to(".hero-title", {
        y: 0,
        opacity: 1,
        stagger: 0.15,
        ease: "back.out(1.2)",
      })
      .to(
        ".hero-subtitle",
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          ease: "back.out(1.2)",
        },
        "<0.2"
      )
      // Content fade-ins
      .to(
        [".hero-slogan", ".hero-description"],
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          ease: "power2.out",
        },
        "<0.3"
      )
      // Button animations
      .to(
        ".hero-button",
        {
          opacity: 1,
          scale: 1,
          stagger: 0.2,
          ease: "elastic.out(1,0.3)",
          duration: 1.2,
        },
        "<0.4"
      );

    return () => {
      timelineRef.current?.kill();
    };
  }, []);

  return (
    <div className="hero-container">
      <h1 className="hero-animated opacity-0 text-4xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-semibold text-center lg:text-left mt-10 lg:mt-0">
        {splitText({
          text: "Bienvenu sur la page de",
          className: "hero-title",
        })}
      </h1>

      <h2 className="hero-animated opacity-0 text-4xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-semibold mt-6 md:mt-8 lg:mt-7 xl:mt-8 2xl:mt-9 text-center lg:text-left">
        <span className="inline p-0 m-0 text-accent">{splitText({
          text: "Fi",
          className: "hero-subtitle",
        })} </span>

        <span className="inline p-0 m-0">{splitText({
          text: "anarana",
          className: "hero-subtitle",
        })} </span>
      </h2>

      <p className="hero-slogan hero-animated opacity-0 text-lg md:text-xl lg:text-xl 2xl:text-3xl mt-6 md:mt-8 lg:mt-7 xl:mt-8 2xl:mt-9 text-center lg:text-left">
        La bonne ressource, au bon moment, pour chaque examen
      </p>

      <p className="hero-description hero-animated opacity-0 text-sm md:text-lg lg:text-sm 2xl:text-xl mt-6 md:mt-8 lg:mt-6 xl:mt-8 2xl:mt-9 max-w-[100%] sm:max-w-[80%] lg:max-w-[90%] xl:max-w-[80%] 2xl:max-w-[70%] text-center lg:text-left mx-auto lg:mx-0">
        Accédez à une bibliothèque exhaustive de livres, <span className="font-bold">sujets d'examens et ressources pédagogiques</span>,
         spécialement conçue pour <span className="font-bold">vous accompagner vers la réussite</span>.
        <br />
        <span className="font-bold">Trouvez l'ouvrage idéal en un clic</span>, maîtrisez chaque sujet grâce à des annales corrigées et des outils interactifs, et multipliez vos chances de succès, quelle que soit votre session.
        <br />
        <br />
        L'excellence à portée de main – parce que chaque effort mérite d'être récompensé ! 🚀 
      </p>

      <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4 md:gap-6 mt-10 lg:mt-8 w-full sm:max-w-[80%] lg:max-w-[100%] mx-auto">
        <button className="relative hero-button cursor-pointer opacity-0 lg:px-3 py-3 lg:py-2 w-full sm:w-1/2 md:w-[40%] lg:w-auto bg-accent text-background font-bold rounded-lg border-2 border-accent transition-all duration-300 text-sm md:text-lg lg:text-sm 2xl:text-xl">
          <a
            href="https://drive.google.com/uc?export=download&id=1ZzlhSf6Z_ir5XtsdcL_0dy8th3otuhKB"
            download
            className="m-0 h-full w-full flex items-center justify-center gap-2"
          >
            <Download className="w-4 h-4 md:w-5 md:h-5 2xl:w-7 2xl:h-7" />
            <span>Télécharger APK</span>
          </a>
        </button>

        <button className="hero-button cursor-pointer opacity-0 flex items-center justify-center gap-2 lg:px-3 py-3 lg:py-2 2xl:px-4 2xl:py-3 w-full sm:w-1/2 md:w-[40%] lg:w-auto bg-transparent text-accent font-bold rounded-lg border-2 border-accent transition-all duration-300 text-sm md:text-lg lg:text-sm 2xl:text-xl">
          <a
            href="mailto:heritsilavo4835@gmail.com"
            className="m-0 h-full w-full flex items-center justify-center gap-2"
          >
            <Mail className="w-4 h-4 md:w-5 md:h-5 2xl:w-7 2xl:h-7" />
            <span>Nous Contacter</span>
          </a>
        </button>
      </div>
    </div>
  );
}
