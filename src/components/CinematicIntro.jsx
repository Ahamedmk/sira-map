import React, { useEffect, useState } from "react";


export default function CinematicIntro({ onFinish }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 2500),
      setTimeout(() => setStep(2), 5500),
      setTimeout(() => setStep(3), 8500),
      setTimeout(() => setStep(4), 11500),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="fixed inset-0 bg-neutral-950 text-white flex items-center justify-center px-6 z-50">
      <div className="max-w-md text-center space-y-3 animate-fade">
        {step === 0 && <p>La Mecque dort.</p>}
        {step === 1 && <p>Un homme s’est retiré.</p>}
        {step === 2 && <p className="text-2xl font-semibold">Iqraʾ</p>}
        {step === 3 && <p>Ce n’est pas un rêve.</p>}
        {step === 4 && (
          <>
            <p>Il redescend, troublé.</p>
            <button
              onClick={onFinish}
              className="mt-4 px-4 py-2 rounded-xl bg-white text-black font-medium"
            >
              Continuer
            </button>
          </>
        )}
      </div>
    </div>
  );
}
