import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import PatientPresenter from '../components/PatientPresenter';

const Home: NextPage = () => {
  const [sessionId, setSessionId] = useState<string>('');
  useEffect(() => {
    import('../services/sessionService').then(({ startSession }) => {
      startSession().then(id => setSessionId(id));
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      {sessionId && <PatientPresenter sessionId={sessionId} />}
    </div>
  );
};

export default Home;