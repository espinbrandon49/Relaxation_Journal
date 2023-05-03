import React, { useState } from 'react';
import Header from './Header';
import Home from './pages/Home';
import CalmBreathing from './pages/CalmBreathing';
import DailyRelaxationLog from './pages/dailyRelaxationLog/DailyRelaxationLog';
import MuscleRelaxationGuide from './pages/MuscleRelaxationGuide';
import ReducingTheTension from './pages/ReducingTheTension';
import BodyScan from './pages/BodyScan';
import NavBar from './NavBar';
import "./style.css"
import FeelingWheel from './pages/FeelingWheel';

const ContentContainer = () => {
  const [page, setPage] = useState('home');

  const renderPage = () => {
    switch (page) {
      case "calmBreathing":
        return <CalmBreathing />;
      case "dailyRelaxationLog":
        return <DailyRelaxationLog />;
      case "muscleRelaxationGuide":
        return <MuscleRelaxationGuide />;
      case "reducingTheTension":
        return <ReducingTheTension />;
      case "bodyScan":
        return <BodyScan page={page} handlePageChange={handlePageChange} />;
      case "feelingWheel":
        return <FeelingWheel page={page} handlePageChange={handlePageChange} />;
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