import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from "./layout";
import Login from './components/Login';
import HomePage from './components/HomePage/HomePage';
import Activities from './components/HomePage/Activites';
import Activity from './components/HomePage/Activity';
import DocumentUploadPage from './components/HomePage/DocumentUploadPage';
import CreateContentPage from './components/HomePage/CreateContentPage';
import Courses from './components/Courese/Courses';
import CourseContent from './components/Courese/CourseChapters';
import Chapter from './components/Courese/Chapter';
import CourseCompletionPage from './components/Courese/ComplitionCertificate';
import LeaderBoard from './components/LeaderBoard/LeaderBoard';
import Report from './components/Reportes/Report';
import ReportForm from './components/Reportes/ReportForm';
import VolunteerRegistration from './components/Registration/Registration';
import FormPage from './components/Registration/FormPage';
import OathFormPage from './components/Registration/VolunteerOth';
import Message from './components/Registration/Message';
import InductionPage from './components/Starting Page/InductionPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<InductionPage />} />
        <Route path='/loginPage' element={<Login />} />
        <Route path='/register' element={<VolunteerRegistration />} />
        <Route path='/formpage' element={<FormPage />} />
        <Route path='/volunteerOath' element={<OathFormPage />} />
        <Route path='/message' element={<Message />} />
        <Route path='/homepage' element={<Layout><HomePage /></Layout>} />
        <Route path='/homepage/activities' element={<Layout><Activities /></Layout>} />
        <Route path='/homepage/activites/activity' element={<Layout><Activity /></Layout>} />
        <Route path='/homepage/activites/activity/documentupload' element={<Layout><DocumentUploadPage /></Layout>} />
        <Route path='/homepage/activites/activity/contentpage' element={<Layout><CreateContentPage /></Layout>} />
        <Route path='/courses' element={<Layout><Courses /></Layout>} />
        <Route path='/courses/courseDis' element={<Layout><CourseContent /></Layout>} />
        <Route path='/courses/courseDis/chapter' element={<Layout><Chapter /></Layout>} />
        <Route path='/certificate' element={<Layout><CourseCompletionPage /></Layout>} />
        <Route path='/leaderboard' element={<Layout><LeaderBoard /></Layout>} />
        <Route path='/report' element={<Layout><Report /></Layout>} />
        <Route path='/reportForm' element={<Layout><ReportForm /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;
