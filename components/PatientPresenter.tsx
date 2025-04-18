import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ZonePanel from './ZonePanel';
import { recordDecision } from '../services/sessionService';
import { v4 as uuidv4 } from 'uuid';

export default function PatientPresenter({ sessionId }) {
  const [patientId] = useState(() => uuidv4());
  const [timeLeft, setTimeLeft] = useState(45);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(t => {
        if (t <= 1) {
          recordDecision(sessionId, patientId, null, true);
          clearInterval(timer);
          // TODO: load next patient
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleDecision = (zone: string) => {
    recordDecision(sessionId, patientId, zone, false);
    // TODO: load next patient
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-full max-w-md">
      <div className="bg-white shadow-md rounded p-4">
        <div className="text-right text-sm text-gray-600">Time: {timeLeft}s</div>
        {/* TODO: display patient info */}
        <div className="mt-4">
          <ZonePanel onSelect={handleDecision} />
        </div>
      </div>
    </motion.div>
  );
}