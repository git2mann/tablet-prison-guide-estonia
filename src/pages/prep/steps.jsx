import React, { useRef, useState, useLayoutEffect, useEffect } from "react";
import Section from "../../components/ui/Section";
import Warning from "../../components/ui/Warning";
import Card from "../../components/ui/Card";

export default function PrepSteps({ language = "ET" }) {
  const content = {
    ET: "Alustage ettevalmistustega mitu kuud enne vabanemist. Teie kontaktisik aitab vajalike taotlustega.",
    EN: "Start preparations several months before release. Your contact person will help with necessary applications."
  };

  const steps = {
    ET: [
      "Dokumendid & Pank: kontrolli ID kehtivust, uuenda vanglas. Kinnita arve vabanemisfondi jaoks.",
      "Elukoht: võta ühendust omavalitsusega eluaseme või sotsiaalabi saamiseks.",
      "Tervishoid: taga ravi jätkumine, leia perearst, telli digiretseptid.",
      "Rahaseis: koosta võlgade tasumise kava, lepi kohtutäituriga kokku graafik.",
      "Töö: helista Töötukassasse enne vabanemist, registreeri kohe pärast vabanemist.",
      "Toetusvõrgustik: suhtle perega, küsi abi kontaktisikult ja meedikutelt."
    ],
    EN: [
      "Documents & Bank: check ID validity, renew in prison. Verify account for release funds.",
      "Housing: contact municipality for residence or social assistance.",
      "Healthcare: ensure treatment continues, find family doctor, get digital prescriptions.",
      "Finances: create debt repayment plan, agree on schedule with bailiff.",
      "Employment: call Unemployment Fund before release, register immediately after.",
      "Support: contact family, ask contact person and medics for help."
    ]
  };

  const warnings = {
    ET: [
      "Vabanemisel tagastage kogu vangla vara. Isiklikke asju ei tohi maha jätta."
    ],
    EN: [
      "Return all prison property upon release. Personal items must not be left behind."
    ]
  };

  const list = steps[language] || steps.EN;
  const text = content[language] || content.EN;
  const warnList = warnings[language] || warnings.EN;

  const containerRef = useRef(null);
  const cardRefs = useRef([]);

  const [lines, setLines] = useState([]);
  const [visible, setVisible] = useState(false);
  const [animateLines, setAnimateLines] = useState(false);
  useEffect(() => {
    cardRefs.current = [];
    setLines([]);
  }, [language]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);

         
          setTimeout(() => setAnimateLines(true), 500);
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  const updateLines = () => {
    if (!containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();

    const newLines = [];

    for (let i = 0; i < cardRefs.current.length - 1; i++) {
      const a = cardRefs.current[i];
      const b = cardRefs.current[i + 1];

      if (!a || !b) continue;

      const rectA = a.getBoundingClientRect();
      const rectB = b.getBoundingClientRect();

      newLines.push({
        x1: rectA.left + rectA.width / 2 - containerRect.left,
        y1: rectA.top + rectA.height / 2 - containerRect.top,
        x2: rectB.left + rectB.width / 2 - containerRect.left,
        y2: rectB.top + rectB.height / 2 - containerRect.top
      });
    }

    setLines(newLines);
  };

  useLayoutEffect(() => {
    if (!visible) return;

    let rafId;

    const run = () => {
      updateLines();
      rafId = requestAnimationFrame(run);
    };

   
    run();

    
    const stop = setTimeout(() => {
      cancelAnimationFrame(rafId);
      updateLines(); 
    }, 1200);

    const resizeObserver = new ResizeObserver(updateLines);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    window.addEventListener("resize", updateLines);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(stop);
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateLines);
    };
  }, [visible, language]);

  return (
    <Section title={language === "ET" ? "Olulised sammud" : "Important Steps"}>
      <p className="text-slate-600 mb-6">{text}</p>

      <div ref={containerRef} className="relative w-full min-h-[400px]">
        
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {lines.map((l, i) => {
            const length = Math.hypot(l.x2 - l.x1, l.y2 - l.y1);

            return (
              <line
                key={i}
                x1={l.x1}
                y1={l.y1}
                x2={l.x2}
                y2={l.y2}
                stroke="#334155"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeDasharray={length}
                strokeDashoffset={animateLines ? 0 : length}
                style={{
                  transition: "stroke-dashoffset 1.2s ease-in-out"
                }}
              />
            );
          })}
        </svg>

        <div className="flex flex-col gap-10 py-6">
          {list.map((step, i) => {
            const align = i % 2 === 0 ? "justify-start" : "justify-end";

            return (
              <div key={i} className={`flex ${align}`}>
                <div
                  ref={(el) => {
                    if (el) cardRefs.current[i] = el;
                  }}
                  className={`
                    w-[70%] md:w-[45%]
                    transition-all duration-700 ease-out
                    transform
                    ${
                      visible
                        ? "opacity-100 translate-y-0 scale-100"
                        : "opacity-0 translate-y-10 scale-95"
                    }
                  `}
                  style={{ transitionDelay: `${i * 120}ms` }}
                >
                  <Card className="border-l-[10px] border-teal-600 shadow-sm">
                    <p className="text-lg font-bold text-slate-700">
                      {step}
                    </p>
                  </Card>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-10 space-y-4">
        {warnList.map((w, i) => (
          <div
            key={i}
            className={`
              transition-all duration-700 ease-out
              ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }
            `}
            style={{ transitionDelay: `${i * 150}ms` }}
          >
            <Warning>{w}</Warning>
          </div>
        ))}
      </div>
    </Section>
  );
}