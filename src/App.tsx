/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { GoalEarnCanvasLanding } from './components/GoalEarnCanvasLanding';
import { AssessmentPage } from './components/AssessmentPage';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<string>(() => {
    return window.location.pathname || '/';
  });

  // Sync route with browser history
  useEffect(() => {
    const handlePopState = () => {
      setCurrentRoute(window.location.pathname || '/');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (route: string) => {
    const cleanRoute = route.startsWith('/') ? route : `/${route}`;
    if (cleanRoute !== currentRoute) {
      window.history.pushState({}, '', cleanRoute);
      setCurrentRoute(cleanRoute);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Canvas Mode: No Header, No Footer
  if (currentRoute === '/assessment') {
    return <AssessmentPage onNavigateHome={() => navigateTo('/')} />;
  }

  return (
    <GoalEarnCanvasLanding 
      onNavigateToAssessment={() => navigateTo('/assessment')} 
    />
  );
}
