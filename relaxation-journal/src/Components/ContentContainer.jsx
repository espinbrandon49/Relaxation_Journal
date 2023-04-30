import React, { useState } from 'react';
import Header from './Header';
import Home from './pages/Home';
import CalmBreathing from './pages/CalmBreathing';
import DailyRelaxationJournal from './pages/DailyRelaxationJournal';
import MuscleRelaxationGuide from './pages/MuscleRelaxationGuide';
import ReducingTheTension from './pages/ReducingTheTension';
import BodyScan from './pages/BodyScan';
import NavBar from './NavBar';
import "./style.css"

const ContentContainer = () => {
  const [page, setPage] = useState('home');

  const renderPage = () => {
    switch (page) {
      case "calmBreathing":
        return <CalmBreathing />;
      case "dailyRelaxationJournal":
        return <DailyRelaxationJournal />;
      case "muscleRelaxationGuide":
        return <MuscleRelaxationGuide />;
      case "reducingTheTension":
        return <ReducingTheTension />;
      case "bodyScan":
        return <BodyScan />;
      default:
        return <Home />;
    };
  }

  const handlePageChange = (page) => setPage(page);

  return (
    <>
      <Header />
      <div className='container' >
      {renderPage()}
      </div>
      <NavBar page={page} handlePageChange={handlePageChange} />
    </>
  )
}

export default ContentContainer