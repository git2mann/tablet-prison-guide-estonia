import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "../../components/ui/Section";
import Card from "../../components/ui/Card";
import Table from "../../components/ui/Table";

export default function JourneyOverview({ language = "ET" }) {
  const [activeStep, setActiveStep] = useState(0);

  const steps = {
    ET: [
      "Saabumine: läbiotsimine, tervisekontroll, baasvajad, isikuarve.",
      "Igapäevaelu: päevakava, telefon, kirjad, söömine, hügieen, liikumine.",
      "Reintegratsioon: riskihindamine, ITK, sotsiaalprogrammid, haridus, töö.",
      "Vabaduse tee: avavangla, ETEV (elektrooniline), TEV (hooldus).",
      "Ettevalmistus: dokumendid, elukoht, töö, tervishoid, toetus."
    ],
    EN: [
      "Arrival: search, health check, basic needs, account.",
      "Daily Life: schedule, phone, letters, eating, hygiene, movement.",
      "Reintegration: risk assessment, ITK, social programs, education, employment.",
      "Freedom Path: open prison, ETEV (electronic), TEV (probation).",
      "Preparation: documents, housing, employment, healthcare, support."
    ]
  };

  const labels = steps[language];
  const total = labels.length;

  const progress = ((activeStep + 1) / total) * 100;

  const next = () => {
    if (activeStep < total - 1) setActiveStep((s) => s + 1);
  };

  const prev = () => {
    if (activeStep > 0) setActiveStep((s) => s - 1);
  };

  return (
    <Section
      title={language === "ET" ? "Teekonna etapid" : "Journey Stages"}
      sub={language === "ET" ? "Samm-sammuline kogemus" : "Step-by-step experience"}
    >
      {/* Progress Bar (smooth fill) */}
      <div className="w-full bg-slate-200 rounded-full h-3 mb-8 overflow-hidden">
        <motion.div
          className="h-full bg-cyan-600"
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />
      </div>

      {/* Step counter */}
      <div className="text-center mb-6 text-slate-600 font-semibold">
        {language === "ET" ? "Samm" : "Step"} {activeStep + 1} / {total}
      </div>

      {/* Animated Card */}
      <div className="flex justify-center mb-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            transition={{ duration: 0.45, ease: "easeInOut" }}
            className="w-full md:w-2/3"
          >
            <Card className="border-l-[12px] border-cyan-600 shadow-lg">
              <p className="text-2xl font-bold text-slate-700">
                {labels[activeStep]}
              </p>

              <p className="mt-4 text-sm text-slate-500">
                {activeStep === 0 &&
                  (language === "ET" ? "Alustad siit" : "You start here")}
                {activeStep === total - 1 &&
                  (language === "ET" ? "Viimane samm" : "Final step")}
              </p>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls (slight tap animation) */}
      <div className="flex justify-center gap-4 mb-12">
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={prev}
          disabled={activeStep === 0}
          className="px-6 py-2 rounded-lg bg-slate-200 disabled:opacity-50"
        >
          {language === "ET" ? "Tagasi" : "Back"}
        </motion.button>

        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={next}
          disabled={activeStep === total - 1}
          className="px-6 py-2 rounded-lg bg-cyan-600 text-white disabled:opacity-50"
        >
          {language === "ET" ? "Järgmine" : "Next"}
        </motion.button>
      </div>

      {/* Step dots (animated transitions) */}
      <div className="flex justify-center gap-3 flex-wrap">
        {labels.map((_, idx) => {
          const isActive = idx === activeStep;
          const isDone = idx < activeStep;

          return (
            <motion.button
              key={idx}
              onClick={() => setActiveStep(idx)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              animate={{
                scale: isActive ? 1.2 : 1,
                backgroundColor: isDone
                  ? "#22c55e"
                  : isActive
                  ? "#0891b2"
                  : "#ffffff"
              }}
              transition={{ duration: 0.3 }}
              className="w-10 h-10 rounded-full border-2 flex items-center justify-center font-bold"
            >
              {isDone ? "✓" : idx + 1}
            </motion.button>
          );
        })}
      </div>
    </Section>
  );
}