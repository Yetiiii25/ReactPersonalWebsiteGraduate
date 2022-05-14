import React from 'react'
import { useLocation, Routes, Route } from 'react-router-dom'
import HomePage from '../pages/LandingPage/HomePage';
import AboutMePage from '../pages/AboutPage/AboutMePage';
import PortfolioPage from '../pages/PortfolioPage/PortfolioPage';
import ExperiencePage from '../pages/ExperiencePage/ExperiencePage'
import MultiCountry from '../components/Projects/MultiCountry'
import DarkLightTheme from '../components/Projects/DarkLightTheme'
import PatientInfoSystem from '../components/Projects/PatientInfoSystem'
import PersonalWebsiteCollege from '../components/Projects/PersonalWebsiteCollege'
import PersonalWebsiteCollegeConversion from '../components/Projects/PersonalWebsiteCollegeConversion'
import PersonalWebsiteUndergrad from '../components/Projects/PersonalWebsiteUndergrad'
import {AnimatePresence} from 'framer-motion'
import SimpleNotesMern from '../components/Projects/SimpleNotesMern';
import ExpenseTrackerMern from '../components/Projects/ExpenseTrackerMern';

const AnimatedRoutes = () => {
    const location = useLocation();
  return (
      <AnimatePresence>
    <Routes location={location} key={location.pathname}>
    <Route path="/" element={<HomePage />} />
    <Route path="/about" element={<AboutMePage />} />
    <Route path="/experience" element={<ExperiencePage />} />
    <Route path="/portfolio" element={<PortfolioPage />} />
    <Route path="/*" element={<HomePage />} />
    <Route path="/multicountry" element={<MultiCountry />} />
    <Route path="/darklighttheme" element={<DarkLightTheme />} />
    <Route path="/patientinfo" element={<PatientInfoSystem />} />
    <Route path="/personalwebsitecollege" element={<PersonalWebsiteCollege />} />
    <Route path="/personalwebsitecollegeconversion" element={<PersonalWebsiteCollegeConversion />} />
    <Route path="/pesonalwebsiteundergrad" element={<PersonalWebsiteUndergrad />} />
    <Route path="/simplenotes" element={<SimpleNotesMern />} />
    <Route path="/expensetracker" element={<ExpenseTrackerMern />} />
  </Routes>
  </AnimatePresence>
  )
}

export default AnimatedRoutes