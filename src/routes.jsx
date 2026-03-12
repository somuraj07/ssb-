import { lazy, createElement } from 'react';

const Home = lazy(() => import('./pages/Home.jsx'));
const About = lazy(() => import('./pages/About.jsx'));
const Contact = lazy(() => import('./pages/Contact.jsx'));
const Inquiry = lazy(() => import('./pages/Inquiry.jsx'));
const Committees = lazy(() => import('./pages/Committees.jsx'));

// About Us pages
const AboutOverview = lazy(() => import('./pages/About/Overview.jsx'));
const MissionVision = lazy(() => import('./pages/About/MissionVision.jsx'));
const AboutChairperson = lazy(() => import('./pages/About/Chairperson.jsx'));
const GoverningBody = lazy(() => import('./pages/About/GoverningBody.jsx'));
const PoliciesDocuments = lazy(() => import('./pages/About/PoliciesDocuments.jsx'));
const AcademicCouncil = lazy(() => import('./pages/About/AcademicCouncil.jsx'));
const FinanceCommittee = lazy(() => import('./pages/About/FinanceCommittee.jsx'));
const OrganisationChart = lazy(() => import('./pages/About/OrganisationChart.jsx'));
const AboutRISE = lazy(() => import('./pages/About/RISE.jsx'));
const MOUs = lazy(() => import('./pages/About/MOUs.jsx'));
const Milestones = lazy(() => import('./pages/About/Milestones.jsx'));
const SOP = lazy(() => import('./pages/About/SOP.jsx'));

// Academics pages
const Academics = lazy(() => import('./pages/Academics/index.jsx'));
const AboutBBA = lazy(() => import('./pages/Academics/BBA.jsx'));
const AboutMBA = lazy(() => import('./pages/Academics/MBA.jsx'));
const AboutPGDM = lazy(() => import('./pages/Academics/PGDM.jsx'));

// Admissions sub-pages
const TestPage = lazy(() => import('./pages/Admissions/TestPage.jsx'));
const Courses = lazy(() => import('./pages/Admissions/Courses.jsx'));
const AdmissionProcedure = lazy(() => import('./pages/Admissions/AdmissionProcedure.jsx'));
const FeeStructure = lazy(() => import('./pages/Admissions/FeeStructure.jsx'));
const FeePayment = lazy(() => import('./pages/Admissions/FeePayment.jsx'));
const AdmissionScholarships = lazy(() => import('./pages/Admissions/Scholarships.jsx'));
const Ranks = lazy(() => import('./pages/Admissions/Ranks.jsx'));
const AdmissionsCommittee = lazy(() => import('./pages/Admissions/AdmissionsCommittee.jsx'));
const AdmissionCalendar = lazy(() => import('./pages/Admissions/Calendar.jsx'));
const AdmissionRegulations = lazy(() => import('./pages/Admissions/Regulations.jsx'));

// Other pages
const Admissions = lazy(() => import('./pages/Admissions.jsx'));
const CampusLife = lazy(() => import('./pages/CampusLife/index.jsx'));

// Campus Life sub-pages
const AboutSSBCampus = lazy(() => import('./pages/CampusLife/Campus.jsx'));
const Library = lazy(() => import('./pages/CampusLife/Library.jsx'));
const Transportation = lazy(() => import('./pages/CampusLife/Transportation.jsx'));
const HostelFacility = lazy(() => import('./pages/CampusLife/Hostel.jsx'));
const Cafeteria = lazy(() => import('./pages/CampusLife/Cafeteria.jsx'));
const ComputerCentre = lazy(() => import('./pages/CampusLife/ComputerCentre.jsx'));
const SportsFacility = lazy(() => import('./pages/CampusLife/Sports.jsx'));
const ActivitiesEvents = lazy(() => import('./pages/CampusLife/Activities.jsx'));
const Examinations = lazy(() => import('./pages/Examinations/index.jsx'));

// Examinations sub-pages
const ExaminationTeam = lazy(() => import('./pages/Examinations/Team.jsx'));
const EvaluationProcedure = lazy(() => import('./pages/Examinations/EvaluationProcedure.jsx'));
const ExaminationCalendar = lazy(() => import('./pages/Examinations/Calendar.jsx'));
const RecountingProcedure = lazy(() => import('./pages/Examinations/Recounting.jsx'));
const Malpractices = lazy(() => import('./pages/Examinations/Malpractices.jsx'));
const ExamsResultsCommittee = lazy(() => import('./pages/Examinations/Committee.jsx'));
const AnnualExaminationReport = lazy(() => import('./pages/Examinations/AnnualReport.jsx'));
const PreviousQuestionPapers = lazy(() => import('./pages/Examinations/QuestionPapers.jsx'));
const ExaminationDownloads = lazy(() => import('./pages/Examinations/Downloads.jsx'));
const UploadPdf = lazy(() => import('./pages/UploadPdf.jsx'));
const NAAC = lazy(() => import('./pages/NAAC.jsx'));
const DVV = lazy(() => import('./pages/NAAC/DVV.jsx'));
const Placements = lazy(() => import('./pages/Placements.jsx'));

// Placements sub-pages
const PlacementTeam = lazy(() => import('./pages/Placements/Team.jsx'));
const PlacementVisionMission = lazy(() => import('./pages/Placements/VisionMission.jsx'));
const TrainingPrograms = lazy(() => import('./pages/Placements/Training.jsx'));
const CampusDrives = lazy(() => import('./pages/Placements/CampusDrives.jsx'));
const PlacementMOUs = lazy(() => import('./pages/Placements/MOUs.jsx'));
const PlacementStatistics = lazy(() => import('./pages/Placements/Statistics.jsx'));
const ELearning = lazy(() => import('./pages/Placements/ELearning.jsx'));
const Internships = lazy(() => import('./pages/Placements/Internships.jsx'));

// Committees sub-pages
const IQAC = lazy(() => import('./pages/Committees/IQAC.jsx'));
const AntiRagging = lazy(() => import('./pages/Committees/AntiRagging.jsx'));
const GrievanceRedressal = lazy(() => import('./pages/Committees/GrievanceRedressal.jsx'));
const NPTEL = lazy(() => import('./pages/Committees/NPTEL.jsx'));
const SCSTCell = lazy(() => import('./pages/Committees/SCSTCell.jsx'));
const AcademicCommittee = lazy(() => import('./pages/Committees/Academic.jsx'));
const IIC = lazy(() => import('./pages/Committees/IIC.jsx'));
const RnDCell = lazy(() => import('./pages/Committees/RnDCell.jsx'));
const WomenEmpowerment = lazy(() => import('./pages/Committees/WomenEmpowerment.jsx'));
const InternalComplaint = lazy(() => import('./pages/Committees/InternalComplaint.jsx'));
const AntiSexualHarassment = lazy(() => import('./pages/Committees/AntiSexualHarassment.jsx'));
const LibraryCommittee = lazy(() => import('./pages/Committees/Library.jsx'));
const StudentWelfare = lazy(() => import('./pages/Committees/StudentWelfare.jsx'));
const ExtraCurricular = lazy(() => import('./pages/Committees/ExtraCurricular.jsx'));
const CareerGuidance = lazy(() => import('./pages/Committees/CareerGuidance.jsx'));
const GamesSports = lazy(() => import('./pages/Committees/GamesSports.jsx'));
const FinanceCommitteePage = lazy(() => import('./pages/Committees/Finance.jsx'));
const AlumniCell = lazy(() => import('./pages/Committees/AlumniCell.jsx'));

const CommunityService = lazy(() => import('./pages/CommunityService/index.jsx'));

// Community Service sub-pages
const NCC = lazy(() => import('./pages/CommunityService/NCC.jsx'));
const NSS = lazy(() => import('./pages/CommunityService/NSS.jsx'));
const GreenClub = lazy(() => import('./pages/CommunityService/GreenClub.jsx'));
const UnnatBharatAbhiyaan = lazy(() => import('./pages/CommunityService/UnnatBharatAbhiyaan.jsx'));
const EkBharatSreshthaBharat = lazy(() => import('./pages/CommunityService/EkBharatSreshthaBharat.jsx'));
const ViksitBharat2047 = lazy(() => import('./pages/CommunityService/ViksitBharat2047.jsx'));

export default [
  // Main pages
  { path: '/', element: createElement(Home) },
  { path: '/contact', element: createElement(Contact) },
  { path: '/inquiry', element: createElement(Inquiry) },
  { path: '/committees', element: createElement(Committees) },
  { path: '/admissions', element: createElement(Admissions) },
  
  // About Us pages
  { path: '/about', element: createElement(About) },
  { path: '/about/overview', element: createElement(AboutOverview) },
  { path: '/about/mission-vision', element: createElement(MissionVision) },
  { path: '/about/chairperson', element: createElement(AboutChairperson) },
  { path: '/about/governing-body', element: createElement(GoverningBody) },
  { path: '/about/policies-documents', element: createElement(PoliciesDocuments) },
  { path: '/about/academic-council', element: createElement(AcademicCouncil) },
  { path: '/about/finance-committee', element: createElement(FinanceCommittee) },
  { path: '/about/organisation-chart', element: createElement(OrganisationChart) },
  { path: '/about/rise', element: createElement(AboutRISE) },
  { path: '/about/mous', element: createElement(MOUs) },
  { path: '/about/milestones', element: createElement(Milestones) },
  { path: '/about/sop', element: createElement(SOP) },
  
  // Academics pages
  { path: '/academics', element: createElement(Academics) },
  { path: '/academics/bba', element: createElement(AboutBBA) },
  { path: '/academics/mba', element: createElement(AboutMBA) },
  { path: '/academics/pgdm', element: createElement(AboutPGDM) },
  
  // Admissions sub-pages
  { path: '/admissions/test', element: createElement(TestPage) },
  { path: '/admissions/courses', element: createElement(Courses) },
  { path: '/admissions/admission-procedure', element: createElement(AdmissionProcedure) },
  { path: '/admissions/fee-structure', element: createElement(FeeStructure) },
  { path: '/admissions/fee-payment', element: createElement(FeePayment) },
  { path: '/admissions/scholarships', element: createElement(AdmissionScholarships) },
  { path: '/admissions/ranks', element: createElement(Ranks) },
  { path: '/admissions/admissions-committee', element: createElement(AdmissionsCommittee) },
  { path: '/admissions/calendar', element: createElement(AdmissionCalendar) },
  { path: '/admissions/regulations', element: createElement(AdmissionRegulations) },
  
  // Other main sections
  { path: '/campus-life', element: createElement(CampusLife) },
  
  // Campus Life sub-pages
  { path: '/campus-life/campus', element: createElement(AboutSSBCampus) },
  { path: '/campus-life/library', element: createElement(Library) },
  { path: '/campus-life/transportation', element: createElement(Transportation) },
  { path: '/campus-life/hostel', element: createElement(HostelFacility) },
  { path: '/campus-life/cafeteria', element: createElement(Cafeteria) },
  { path: '/campus-life/computer-centre', element: createElement(ComputerCentre) },
  { path: '/campus-life/sports', element: createElement(SportsFacility) },
  { path: '/campus-life/activities', element: createElement(ActivitiesEvents) },
  { path: '/examinations', element: createElement(Examinations) },
  
  // Examinations sub-pages
  { path: '/examinations/team', element: createElement(ExaminationTeam) },
  { path: '/examinations/evaluation-procedure', element: createElement(EvaluationProcedure) },
  { path: '/examinations/calendar', element: createElement(ExaminationCalendar) },
  { path: '/examinations/recounting', element: createElement(RecountingProcedure) },
  { path: '/examinations/malpractices', element: createElement(Malpractices) },
  { path: '/examinations/committee', element: createElement(ExamsResultsCommittee) },
  { path: '/examinations/annual-report', element: createElement(AnnualExaminationReport) },
  { path: '/examinations/question-papers', element: createElement(PreviousQuestionPapers) },
  { path: '/examinations/downloads', element: createElement(ExaminationDownloads) },
  { path: '/upload-pdf', element: createElement(UploadPdf) },
  { path: '/naac', element: createElement(NAAC) },
  { path: '/naac/dvv', element: createElement(DVV) },
  { path: '/placements', element: createElement(Placements) },
  
  // Placements sub-pages
  { path: '/placements/team', element: createElement(PlacementTeam) },
  { path: '/placements/vision-mission', element: createElement(PlacementVisionMission) },
  { path: '/placements/training', element: createElement(TrainingPrograms) },
  { path: '/placements/campus-drives', element: createElement(CampusDrives) },
  { path: '/placements/mous', element: createElement(PlacementMOUs) },
  { path: '/placements/statistics', element: createElement(PlacementStatistics) },
  { path: '/placements/elearning', element: createElement(ELearning) },
  { path: '/placements/internships', element: createElement(Internships) },
  
  // Committees sub-pages
  { path: '/committees/iqac', element: createElement(IQAC) },
  { path: '/committees/anti-ragging', element: createElement(AntiRagging) },
  { path: '/committees/grievance-redressal', element: createElement(GrievanceRedressal) },
  { path: '/committees/nptel', element: createElement(NPTEL) },
  { path: '/committees/sc-st-cell', element: createElement(SCSTCell) },
  { path: '/committees/academic', element: createElement(AcademicCommittee) },
  { path: '/committees/iic', element: createElement(IIC) },
  { path: '/committees/rnd-cell', element: createElement(RnDCell) },
  { path: '/committees/women-empowerment', element: createElement(WomenEmpowerment) },
  { path: '/committees/internal-complaint', element: createElement(InternalComplaint) },
  { path: '/committees/anti-sexual-harassment', element: createElement(AntiSexualHarassment) },
  { path: '/committees/library', element: createElement(LibraryCommittee) },
  { path: '/committees/student-welfare', element: createElement(StudentWelfare) },
  { path: '/committees/extra-curricular', element: createElement(ExtraCurricular) },
  { path: '/committees/career-guidance', element: createElement(CareerGuidance) },
  { path: '/committees/games-sports', element: createElement(GamesSports) },
  { path: '/committees/finance', element: createElement(FinanceCommitteePage) },
  { path: '/committees/alumni-cell', element: createElement(AlumniCell) },
  
  { path: '/community-service', element: createElement(CommunityService) },
  
  // Community Service sub-pages
  { path: '/community-service/ncc', element: createElement(NCC) },
  { path: '/community-service/nss', element: createElement(NSS) },
  { path: '/community-service/green-club', element: createElement(GreenClub) },
  { path: '/community-service/unnat-bharat-abhiyaan', element: createElement(UnnatBharatAbhiyaan) },
  { path: '/community-service/ek-bharat-srestha-bharat', element: createElement(EkBharatSreshthaBharat) },
  { path: '/community-service/viksit-bharat-2047', element: createElement(ViksitBharat2047) },
];
