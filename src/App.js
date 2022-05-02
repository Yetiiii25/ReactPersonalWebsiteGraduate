import './App.css';
import { Routes, Route } from 'react-router-dom'

import ContainerPage from './pages/ContainerPage';
import GlobalStyle from './globalStyles'
import ExperiencePage from './pages/ExperiencePage/ExperiencePage'
import MultiCountry from './components/Projects/MultiCountry'
import DarkLightTheme from './components/Projects/DarkLightTheme'
import PatientInfoSystem from './components/Projects/PatientInfoSystem'
import PersonalWebsiteCollege from './components/Projects/PersonalWebsiteCollege'
import PersonalWebsiteCollegeConversion from './components/Projects/PersonalWebsiteCollegeConversion'
import PersonalWebsiteUndergrad from './components/Projects/PersonalWebsiteUndergrad'

import AnimatedRoutes from './routes/AnimatedRoutes'


function App() {

  return (
    <>
      <GlobalStyle />
      <ContainerPage>
        <AnimatedRoutes />
      {/* <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutMePage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />

        <Route path="/multicountry" element={<MultiCountry />} />
        <Route path="/darklighttheme" element={<DarkLightTheme />} />
        <Route path="/patientinfo" element={<PatientInfoSystem />} />
        <Route path="/personalwebsitecollege" element={<PersonalWebsiteCollege />} />
        <Route path="/personalwebsitecollegeconversion" element={<PersonalWebsiteCollegeConversion />} />
        <Route path="/pesonalwebsiteundergrad" element={<PersonalWebsiteUndergrad />} />
      </Routes> */}
    </ContainerPage>
    </>
  );
}

export default App;
