/**
 * DVV (Data Verification and Validation) structure for NAAC.
 * 7 Criteria + Extended Profile. Each metric can have multiple document slots (one upload per slot).
 */
export const DVV_NAVBAR = [
  { id: 'extended', label: 'Extended Profile', href: '#extended' },
  { id: 'criterion-1', label: 'Criterion-1', href: '#criterion-1' },
  { id: 'criterion-2', label: 'Criterion-2', href: '#criterion-2' },
  { id: 'criterion-3', label: 'Criterion-3', href: '#criterion-3' },
  { id: 'criterion-4', label: 'Criterion-4', href: '#criterion-4' },
  { id: 'criterion-5', label: 'Criterion-5', href: '#criterion-5' },
  { id: 'criterion-6', label: 'Criterion-6', href: '#criterion-6' },
  { id: 'criterion-7', label: 'Criterion-7', href: '#criterion-7' },
];

/** Table row: metricId, deviationDetails, findings, response, documents: [{ label, slotId }] */
function row(metricId, deviationDetails, findings, response, documents) {
  return { metricId, deviationDetails, findings, response, documents: documents || [] };
}

export const DVV_CRITERIA = [
  {
    id: 'extended',
    title: 'Extended Profile',
    sections: [
      {
        metricId: '1.1',
        title: '1.1 Students',
        subTitle: 'Number Of Students Year Wise During The Last Five Years',
        heiInput: { '2021-22': 216, '2020-21': 222, '2019-20': 285, '2018-19': 318, '2017-18': 303 },
        affectedMetrics: ['2.2.1', '5.1.3', '1.2.2', '5.1.1', '4.3.2', '1.3.2'],
        rows: [
          row('1.1', 'Provide appropriate link to the admission approval documents received from the university for assessment period Provide Year wise list of students approved by the affiliating University for 2017-18 , 2018-19 and 2019-20, 2020-21, 2021-22.', 'Provide appropriate link to the admission approval documents received from the university for assessment period Provide Year wise list of students approved by the affiliating University for 2017-18 , 2018-19 and 2019-20, 2020-21, 2021-22.', 'Provided the link to the admission approval documents received from the university for assessment period', [{ label: 'Admission approval documents', slotId: '1.1-doc1' }]),
          row('', 'Provided Year wise list of students approved by the affiliating University for 2017-18 , 2018-19 and 2019-20, 2020-21, 2021-22.', '', 'Provided Year wise list of students approved by the affiliating University', [{ label: 'List of students approved by statutory body', slotId: '1.1-doc2' }]),
        ],
      },
      {
        metricId: '2.1',
        title: '2.1 Teacher',
        subTitle: 'Number of teaching staff / full time teachers during the last five years (Without repeat count)',
        heiInput: '35',
        affectedMetrics: ['3.3.1', '3.3.2'],
        rows: [
          row('2.1', 'Provide the list of all full time teachers indicating the departmental affiliation during the assessment period authenticated by the Principal (Without repeat count):', 'Provide the list of all full time teachers indicating the departmental affiliation during the assessment period authenticated by the Principal (Without repeat count):', 'Provided the list of all full time teachers indicating the departmental affiliation during the assessment period authenticated by the Principal (Without repeat count):', [{ label: 'List of teachers without repeat count', slotId: '2.1-doc1' }]),
        ],
      },
      {
        metricId: '2.2',
        title: '2.2 Curriculum Enrichment',
        subTitle: 'Number of teaching staff / full time teachers year wise during the last five years',
        heiInput: { '2021-22': 24, '2020-21': 22, '2019-20': 21, '2018-19': 21, '2017-18': 19 },
        affectedMetrics: ['3.3.1', '3.3.2'],
        rows: [
          row('2.2', 'Provide the list of all full time teachers indicating the departmental affiliation during the assessment period authenticated by the Principal (Without repeat count):', 'Provide the list of all full time teachers indicating the departmental affiliation during the assessment period authenticated by the Principal (Without repeat count):', 'Provided the list of all full time teachers indicating the departmental affiliation during the assessment period authenticated by the Principal (Without repeat count):', [{ label: 'List of teachers during last five years', slotId: '2.2-doc1' }]),
        ],
      },
      {
        metricId: '3.1',
        title: '3.1 Institution',
        subTitle: 'Expenditure excluding salary component year wise during the last five years (INR in lakhs)',
        heiInput: { '2021-22': '23.24', '2020-21': '20.92', '2019-20': '28.68', '2018-19': '101.18', '2017-18': '56.36' },
        affectedMetrics: ['4.4.1', '4.1.2'],
        rows: [
          row('3.1', 'Provide Audited Statement of income and expenditure duly certified by the Principal and Charted Accountant in case of privately funded institutions highlighting the salary component. Also provide a statement showing the total expenditure excluding the salary component for each of the years certified by the Principal and Charted Accountant for 2017-18 , 2018-19 and 2019-20, 2020-21, 2021-22.', 'Provide Audited Statement of income and expenditure duly certified by the Principal and Charted Accountant.', 'Provided Audited Statement of income and expenditure duly certified by the Principal and Charted Accountant in case of privately funded institutions highlighting the salary component', [{ label: 'Audited statement highlighting salary component', slotId: '3.1-doc1' }]),
          row('', 'Provided a statement showing the total expenditure excluding the salary component for each of the years certified by the Principal and Charted Accountant for 2017-18 , 2018-19 and 2019-20, 2020-21, 2021-22.', '', 'Provided a statement showing the total expenditure excluding the salary component', [{ label: 'Statement showing total expenditure excluding salary', slotId: '3.1-doc2' }]),
        ],
      },
    ],
  },
  {
    id: 'criterion-1',
    title: 'Criterion-1',
    sections: [
      {
        metricId: '1.2.1',
        title: '1.2.1 Number of Certificate/Value added courses offered and online courses of MOOCs, SWAYAM, NPTEL etc',
        subTitle: 'Number of Certificate/Value added courses offered and online courses of MOOCs, SWAYAM, NPTEL etc. (where the students of the institution have enrolled and successfully completed during the last five years)',
        heiInput: '26',
        rows: [
          row('1.2.1', 'Provide Details of each program such as: Name of the program, duration, list of students enrolled', 'Details of each program such as: Name of the program, duration, list of students enrolled', 'Details of each program such as: Name of the program, duration, list of students enrolled', [{ label: 'Name of Add-on/Value-added Courses with duration and students list', slotId: '1.2.1-doc1' }]),
          row('', 'Signature of students', 'Attendance of students', 'Attendance of students', [{ label: 'Attendance List Of Students Certificate/Add-on/Value-added Courses', slotId: '1.2.1-doc2' }]),
          row('', 'Model certificates', 'Model certificates', 'Model certificates', [{ label: 'Model certificates of Value added Courses', slotId: '1.2.1-doc3' }]),
          row('', 'Curriculum, assessment procedures year-wise', 'Curriculum, assessment procedures year-wise', 'Curriculum, assessment procedures year-wise', [{ label: 'Curriculum and feedback', slotId: '1.2.1-doc4' }]),
        ],
      },
      {
        metricId: '1.2.2',
        title: '1.2.2 Percentage of students enrolled in Certificate/ Value added courses and also completed online courses of MOOCs, SWAYAM, NPTEL etc.',
        subTitle: '1.2.2.1. Number of students enrolled in Certificate/ Value added courses and also completed online courses of MOOCs, SWAYAM, NPTEL etc. as against the total number of students during the last five years',
        heiInput: { '2021-22': 215, '2020-21': 222, '2019-20': 285, '2018-19': 317, '2017-18': 303 },
        rows: [
          row('1.2.2', 'Provide Year-wise List of the students enrolled in the Program as defined in 1.2.1', 'Provide Year-wise List of the students enrolled in the Program as defined in 1.2.1', 'Provided Year-wise List of the students enrolled in the Program', [{ label: 'Yearwise list of student enrolled in the program', slotId: '1.2.2-doc1' }]),
        ],
      },
      {
        metricId: '1.3.2',
        title: '1.3.2 Percentage of students undertaking project work/field work/ internships (Data for the latest completed academic year)',
        subTitle: '1.3.2.1. Number of students undertaking project work/field work / internships',
        heiInput: '216',
        rows: [
          row('1.3.2', 'Provide List of students along with the details of title, place of work, duration etc., Provide Internship completion certificate / project work completion certificate from the organization where internship / project was completed.', 'Provide List of students along with the details of title, place of work, duration etc.', 'Provided the list of students along with the details of title, place of work, duration etc.,', [{ label: 'Students List Of Field projects/projects/Internships', slotId: '1.3.2-doc1' }]),
          row('', '', 'Provide Internship completion certificate / project work completion certificate from the organization where internship / project was completed.', 'Provided Internship completion certificate / project work completion certificate', [{ label: 'Project certificates', slotId: '1.3.2-doc2' }]),
        ],
      },
      {
        metricId: '1.4.1',
        title: '1.4.1 Institution obtains feedback on the academic performance and ambience of the institution from various stakeholders',
        subTitle: 'Institution obtains feedback on the academic performance and ambience of the institution from various stakeholders, such as Students, Teachers, Employers, Alumni etc. and action taken report on the feedback is made available on institutional website',
        heiInput: 'A. Feedback collected, analysed, action taken & communicated to the relevant bodies and feedback hosted on the institutional website',
        rows: [
          row('1.4.1', 'Provide Sample Filled in feedback forms from at least two stakeholders. Provide Stakeholders\' feedback analysis report. Provide Action taken Report on feedback.', 'Provide Sample Filled in feedback forms from at least two stakeholders. Provide Stakeholders\' feedback analysis report. Provide Action taken Report on feedback.', 'Provided Sample Filled in feedback forms from at least two stakeholders', [{ label: 'Sample Feedback Form from all the stakeholder (2017-18 to 2021-22)', slotId: '1.4.1-doc1' }]),
          row('', 'Provided Stakeholders\' feedback analysis report. Provide Action taken Report on feedback.', '', 'Provided Stakeholders\' feedback analysis report. Provide Action taken Report on feedback.', [{ label: 'Feedback-Analysis-and-Action-Report-Department-minutes (2017-18 to 2021-22)', slotId: '1.4.1-doc2' }]),
        ],
      },
      {
        metricId: '2.1.1',
        title: '2.1.1 Enrolment percentage',
        subTitle: '2.1.1.1. Number of seats filled year wise during last five years (Only first year admissions to be considered). 2.1.1.2. Number of sanctioned seats year wise during last five years',
        heiInput: { seatsFilled: { '2021-22': 153, '2020-21': 117, '2019-20': 152, '2018-19': 147, '2017-18': 174 }, sanctioned: { '2021-22': 180, '2020-21': 180, '2019-20': 180, '2018-19': 180, '2017-18': 180 } },
        rows: [
          row('2.1.1', 'Provide Document related to sanction of intake from affiliating University/ Government/statutory body for first year students only. Provide Approved admission list year-wise (first year admission / lateral entry admission) program wise from the Affiliating university.', 'Provide Document related to sanction of intake from affiliating University/ Government/statutory body for first year students only. Provide Approved admission list year-wise.', 'Provided Document related to sanction of intake from affiliating University/ Government/statutory body for first year students only.', [{ label: 'Document related to sanction of intake from affiliating University', slotId: '2.1.1-doc1' }]),
          row('', 'Provided Approved admission list year-wise (first year admission / lateral entry admission) program wise from the Affiliating university.', '', 'Provided Approved admission list year-wise', [{ label: 'Approved List Of Filled Seats (2017-18 to 2021-22)', slotId: '2.1.1-doc2' }]),
        ],
      },
      {
        metricId: '2.1.2',
        title: '2.1.2 Percentage of seats filled against reserved categories (SC, ST, OBC etc.)',
        subTitle: 'Percentage of seats filled against reserved categories (SC, ST, OBC etc.) as per applicable reservation policy for the first year admission during the last five years',
        heiInput: { admitted: { '2021-22': 90, '2020-21': 69, '2019-20': 78, '2018-19': 85, '2017-18': 90 }, earmarked: { '2021-22': 90, '2020-21': 90, '2019-20': 90, '2018-19': 90, '2017-18': 90 } },
        rows: [
          row('2.1.2', 'Provide Copy of letter issued by state govt. or Central Government indicating the reserved categories to be considered as per the state rule (in English as applicable) Provide Number of seats year wise earmarked for the reserved categories', 'Provide Copy of letter issued by state govt. or Central Government indicating the reserved categories.', 'Provided copy of letter issued by state govt. or Central Government indicating the reserved categories to be considered as per the state rule (in English as applicable)', [{ label: 'Copy of letter issued by state govt indicating the reserved categories', slotId: '2.1.2-doc1' }]),
          row('', 'Provided number of seats year wise earmarked for the reserved categories', '', 'Provided number of seats year wise earmarked for the reserved categories', [{ label: 'Number of seats earmarked for the reserved categories', slotId: '2.1.2-doc2' }]),
        ],
      },
      {
        metricId: '2.2.1',
        title: '2.2.1 Student – Full time Teacher Ratio',
        subTitle: 'Provide the appointment letter of MRS. A. VIJAYASRI, MRS. B. ASWINI, MR. M. JEEVAN SAI, MR. N.JAYATHEJA REDDY, MR. P LINGAMAIAH, MRS. B. O. PRASANTHI, MR. THIMMAIAH BAYAVANDA, CHINNAPPA, DR D RAJESH BABU, MR V RANGANATHAM, MR M BABJAN, MR B KRISHNA MOHAN REDDY, MS. D HIDAYATHUNNISA for 2021-22.',
        rows: [
          row('2.2.1', 'Student – Full time Teacher Ratio', 'Provide the appointment letter of the said faculty members for 2021-22.', 'Provided the appointment letters of the said faculty members', [{ label: 'Faculty Appointment Orders', slotId: '2.2.1-doc1' }]),
        ],
      },
      {
        metricId: '2.4.1',
        title: '2.4.1 Percentage of full-time teachers against sanctioned posts during the last five years',
        subTitle: '2.4.1.1. Number of sanctioned posts year wise during the last five years',
        heiInput: { '2021-22': 24, '2020-21': 22, '2019-20': 21, '2018-19': 21, '2017-18': 19 },
        rows: [
          row('2.4.1', 'Provide Sanction letters (in English) indicating number of posts (including Management sanctioned posts) by competent authority.', 'Provide Sanction letters (in English) indicating number of posts by competent authority.', 'Provided Sanction letters indicating number of posts by competent authority', [{ label: 'Sanction letters indicating number of posts by competent authority', slotId: '2.4.1-doc1' }]),
        ],
      },
      {
        metricId: '2.4.2',
        title: '2.4.2 Percentage of full time teachers with NET/SET/SLET/ Ph. D./D.Sc. / D.Litt./L.L.D. during the last five years',
        subTitle: '2.4.2.1. Number of full time teachers with NET/SET/SLET/Ph. D./ D.Sc. / D.Litt./L.L.D year wise during the last five years',
        heiInput: { '2021-22': 9, '2020-21': 9, '2019-20': 10, '2018-19': 8, '2017-18': 7 },
        rows: [
          row('2.4.2', 'Provide List of faculties with highest degree should be provided as per academic session wise along with particulars of degree awarding university, subject and the year of award.', 'Provide List of faculties with highest degree as per academic session wise along with particulars of degree awarding university, subject and the year of award.', 'Provided the list of faculties with highest degree as per academic session wise along with particulars of degree awarding university, subject and the year of award.', [{ label: 'Highest degree qualification details', slotId: '2.4.2-doc1' }]),
        ],
      },
      {
        metricId: '2.6.3',
        title: '2.6.3 Pass percentage of Students during last five years (excluding backlog students)',
        subTitle: '2.6.3.1. Number of final year students who passed the university examination year wise during the last five years. 2.6.3.2. Number of final year students who appeared for the university examination year-wise during the last five years',
        heiInput: { passed: { '2021-22': 84, '2020-21': 111, '2019-20': 121, '2018-19': 113, '2017-18': 94 }, appeared: { '2021-22': 85, '2020-21': 114, '2019-20': 129, '2018-19': 149, '2017-18': 117 } },
        rows: [
          row('2.6.3', 'Provide Result sheet published by the affiliating university Provide Certified report from Head of the institution / Controller of Examination of the affiliating university indicating pass percentage of students of the final year (final semester) eligible for the degree program wise / year-wise.', 'Provide Result sheet published by the affiliating university. Provide Certified report from Head of the institution / Controller of Examination of the affiliating university indicating pass percentage of students of the final year.', 'Provided result sheet published by the affiliating university. Provide Certified report from Head of the institution / Controller of Examination of the affiliating university indicating pass percentage of students of the final year', [{ label: 'List of students who appeared for the final year exams indicating pass-fail', slotId: '2.6.3-doc1' }, { label: 'Annual report of COE from University of last five years', slotId: '2.6.3-doc2' }]),
        ],
      },
    ],
  },
  {
    id: 'criterion-2',
    title: 'Criterion-2',
    sections: [
      { metricId: '2.1.1', title: '2.1.1 Enrolment percentage', subTitle: '2.1.1.1. Number of seats filled year wise during last five years. 2.1.1.2. Number of sanctioned seats year wise during last five years', heiInput: { seatsFilled: { '2021-22': 153, '2020-21': 117, '2019-20': 152, '2018-19': 147, '2017-18': 174 }, sanctioned: { '2021-22': 180, '2020-21': 180, '2019-20': 180, '2018-19': 180, '2017-18': 180 } }, rows: [ row('2.1.1', 'Provide Document related to sanction of intake from affiliating University/ Government/statutory body for first year students only. Provide Approved admission list year-wise.', 'Provide Document related to sanction of intake from affiliating University/ Government/statutory body for first year students only.', 'Provided Document related to sanction of intake from affiliating University/ Government/statutory body for first year students only.', [{ label: 'Document related to sanction of intake from affiliating University', slotId: '2.1.1-doc1' }]), row('', 'Provided Approved admission list year-wise (first year admission / lateral entry admission) program wise from the Affiliating university.', '', 'Provided Approved admission list year-wise', [{ label: 'Approved List Of Filled Seats (2017-18 to 2021-22)', slotId: '2.1.1-doc2' }]) ] },
      { metricId: '2.1.2', title: '2.1.2 Percentage of seats filled against reserved categories (SC, ST, OBC etc.)', subTitle: 'Percentage of seats filled against reserved categories as per applicable reservation policy for the first year admission during the last five years', heiInput: { admitted: { '2021-22': 90, '2020-21': 69, '2019-20': 78, '2018-19': 85, '2017-18': 90 }, earmarked: { '2021-22': 90, '2020-21': 90, '2019-20': 90, '2018-19': 90, '2017-18': 90 } }, rows: [ row('2.1.2', 'Provide Copy of letter issued by state govt. or Central Government indicating the reserved categories. Provide Number of seats year wise earmarked for the reserved categories', 'Provide Copy of letter issued by state govt. or Central Government indicating the reserved categories.', 'Provided copy of letter issued by state govt. or Central Government indicating the reserved categories (in English as applicable)', [{ label: 'Copy of letter issued by state govt indicating the reserved categories', slotId: '2.1.2-doc1' }]), row('', 'Provided number of seats year wise earmarked for the reserved categories', '', 'Provided number of seats year wise earmarked for the reserved categories', [{ label: 'Number of seats earmarked for the reserved categories', slotId: '2.1.2-doc2' }]) ] },
      { metricId: '2.2.1', title: '2.2.1 Student – Full time Teacher Ratio', subTitle: 'Provide the appointment letter of the said faculty members for 2021-22.', rows: [ row('2.2.1', 'Student – Full time Teacher Ratio', 'Provide the appointment letter of the said faculty members for 2021-22.', 'Provided the appointment letters of the said faculty members', [{ label: 'Faculty Appointment Orders', slotId: '2.2.1-doc1' }]) ] },
      { metricId: '2.4.1', title: '2.4.1 Percentage of full-time teachers against sanctioned posts during the last five years', subTitle: '2.4.1.1. Number of sanctioned posts year wise during the last five years', heiInput: { '2021-22': 24, '2020-21': 22, '2019-20': 21, '2018-19': 21, '2017-18': 19 }, rows: [ row('2.4.1', 'Provide Sanction letters (in English) indicating number of posts (including Management sanctioned posts) by competent authority.', 'Provide Sanction letters (in English) indicating number of posts by competent authority.', 'Provided Sanction letters indicating number of posts by competent authority', [{ label: 'Sanction letters indicating number of posts by competent authority', slotId: '2.4.1-doc1' }]) ] },
      { metricId: '2.4.2', title: '2.4.2 Percentage of full time teachers with NET/SET/SLET/ Ph. D./D.Sc. / D.Litt./L.L.D. during the last five years', subTitle: '2.4.2.1. Number of full time teachers with NET/SET/SLET/Ph. D./ D.Sc. / D.Litt./L.L.D year wise during the last five years', heiInput: { '2021-22': 9, '2020-21': 9, '2019-20': 10, '2018-19': 8, '2017-18': 7 }, rows: [ row('2.4.2', 'Provide List of faculties with highest degree as per academic session wise along with particulars of degree awarding university, subject and the year of award.', 'Provide List of faculties with highest degree as per academic session wise.', 'Provided the list of faculties with highest degree as per academic session wise along with particulars of degree awarding university, subject and the year of award.', [{ label: 'Highest degree qualification details', slotId: '2.4.2-doc1' }]) ] },
      { metricId: '2.6.3', title: '2.6.3 Pass percentage of Students during last five years (excluding backlog students)', subTitle: '2.6.3.1. Number of final year students who passed. 2.6.3.2. Number of final year students who appeared for the university examination year-wise during the last five years', heiInput: { passed: { '2021-22': 84, '2020-21': 111, '2019-20': 121, '2018-19': 113, '2017-18': 94 }, appeared: { '2021-22': 85, '2020-21': 114, '2019-20': 129, '2018-19': 149, '2017-18': 117 } }, rows: [ row('2.6.3', 'Provide Result sheet published by the affiliating university. Provide Certified report from Head of the institution / Controller of Examination of the affiliating university indicating pass percentage of students of the final year (final semester) eligible for the degree program wise / year-wise.', 'Provide Result sheet published by the affiliating university. Provide Certified report from Head of the institution / Controller of Examination.', 'Provided result sheet published by the affiliating university. Provide Certified report from Head of the institution / Controller of Examination of the affiliating university indicating pass percentage of students of the final year', [{ label: 'List of students who appeared for the final year exams indicating pass-fail', slotId: '2.6.3-doc1' }, { label: 'Annual report of COE from University of last five years', slotId: '2.6.3-doc2' }]) ] },
    ],
  },
  {
    id: 'criterion-3',
    title: 'Criterion-3',
    sections: [
      {
        metricId: '3.1.1',
        title: '3.1.1 Grants received from Government and non-governmental agencies for research projects / endowments in the institution during the last five years (INR in Lakhs)',
        subTitle: '3.1.1.1. Total Grants from Government and non-governmental agencies for research projects / endowments in the institution during the last five years (INR in Lakhs)',
        heiInput: { '2021-22': '1.0', '2020-21': '0', '2019-20': '7.81', '2018-19': '9.02', '2017-18': '7.67' },
        rows: [
          row('3.1.1', 'Provide List of grants for research projects received during the assessment years along with the nature of the award, and the awarding agency with amount. (sanctioned letter highlighting the required parts)', 'List of grants for research projects received during the assessment years along with the nature of the award, and the awarding agency with amount.', 'List of grants for research projects received during the assessment years along with the nature of the award', [{ label: 'E-copies of Grants from Government/Non-government bodies (2017-18 to 2021-22)', slotId: '3.1.1-doc1' }, { label: 'List of Grants received with Agency details/PIs Details (2017-18 to 2021-22)', slotId: '3.1.1-doc2' }]),
        ],
      },
      {
        metricId: '3.2.2',
        title: '3.2.2 Number of workshops/seminars/conferences including on Research Methodology, IPR and entrepreneurship conducted during the last five years',
        subTitle: '3.2.2.1. Total number of workshops/seminars/conferences including programs conducted on Research Methodology, Intellectual Property Rights (IPR) and entrepreneurship year wise during last five years',
        heiInput: { '2021-22': 27, '2020-21': 19, '2019-20': 6, '2018-19': 16, '2017-18': 10 },
        rows: [
          row('3.2.2', 'Provide Brochure/Geo tagged Photograph with date and captions; title of the workshops / seminars conducted. Provide Link to the detailed report for each program as in the template.', 'Brochure and Photograph with date and captions; title of the workshops / seminars conducted.', 'Brochure and Photograph with date and captions; title of the workshops / seminars conducted.', [{ label: 'Brochures and photographs of the programs', slotId: '3.2.2-doc1' }, { label: 'Research Methodology Workshops / Seminars', slotId: '3.2.2-doc2' }, { label: 'IPR Workshops/Seminars', slotId: '3.2.2-doc3' }, { label: 'Entrepreneurship Workshops/Seminars', slotId: '3.2.2-doc4' }]),
        ],
      },
      {
        metricId: '3.3.1',
        title: '3.3.1 Number of research papers published per teacher in the Journals notified on UGC care list during the last five years',
        subTitle: '3.3.1.1. Number of research papers in the Journals notified on UGC CARE list year wise during the last five years',
        heiInput: { '2021-22': 34, '2020-21': 31, '2019-20': 18, '2018-19': 7, '2017-18': 6 },
        rows: [
          row('3.3.1', 'Provide Link landing to the research paper Provide Link to the journal website. Provide URL of the content page in case print journal.', 'Provide Link landing to the research paper. Provide Link to the journal website. Provide URL of the content page in case print journal.', 'Provide Link landing to the research paper', [{ label: 'List Of Research Papers with Details (2017-18 to 2021-22)', slotId: '3.3.1-doc1' }, { label: 'Publication screenshots', slotId: '3.3.1-doc2' }]),
        ],
      },
      {
        metricId: '3.3.2',
        title: '3.3.2 Number of books and chapters in edited volumes/books published and papers published in national/ international conference proceedings per teacher during last five years',
        subTitle: '3.3.2.1. Total number of books and chapters in edited volumes/books published and papers in national/ international conference proceedings year wise during the last five years',
        heiInput: { '2021-22': 76, '2020-21': 16, '2019-20': 3, '2018-19': 2, '2017-18': 1 },
        rows: [
          row('3.3.2', 'Provide Cover page, content page and first page of the selected publication. Provide Web-link of books.', 'Provide Cover page, content page and first page of the selected publication. Provide Web-link of books.', 'Cover page, content page and first page of the selected publication', [{ label: 'Cover page, content page and first page', slotId: '3.3.2-doc1' }, { label: 'List of Books Published', slotId: '3.3.2-doc2' }]),
        ],
      },
      {
        metricId: '3.4.3',
        title: '3.4.3 Number of extension and outreach programs conducted by the institution through NSS/NCC with involvement of community during the last five years',
        subTitle: '3.4.3.1. Number of extension and outreach Programs conducted in collaboration with industry, community, and Non- Government Organizations through NSS/ NCC etc., year wise during the last five years',
        heiInput: { '2021-22': 20, '2020-21': 19, '2019-20': 15, '2018-19': 15, '2017-18': 7 },
        rows: [
          row('3.4.3', 'Provide Links / uploads of Photographs (preferably with banner) and any other supporting document of relevance should have proper captions and dates', 'Provide Links / uploads of Photographs with proper captions and dates', 'Report of extension and outreach programs conducted by the Institute', [{ label: 'Extension-outreach program reports', slotId: '3.4.3-doc1' }, { label: 'Newspaper report', slotId: '3.4.3-doc2' }]),
        ],
      },
      {
        metricId: '3.5.1',
        title: '3.5.1 Number of functional MoUs/linkages with institutions/ industries in India and abroad for internship, on-the-job training, project work, student / faculty exchange and collaborative research during the last five years',
        subTitle: 'Number of functional MoUs/linkages during the last five years.',
        heiInput: '32',
        rows: [
          row('3.5.1', 'Provide Copies of MoUs/ collaboration/ related documents indicating the nature of collaboration and activities year-wise.', 'Provide Copies of MoUs/ collaboration/ related documents indicating the nature of collaboration and activities year-wise.', 'Copies of MOU\'s', [{ label: 'Copies Of MoUs collaboration linkages', slotId: '3.5.1-doc1' }, { label: 'List Of Functional MoUs collaboration linkages etc', slotId: '3.5.1-doc2' }, { label: 'Activities Of MoUs collaboration linkages', slotId: '3.5.1-doc3' }]),
        ],
      },
    ],
  },
  {
    id: 'criterion-4',
    title: 'Criterion-4',
    sections: [
      {
        metricId: '4.1.2',
        title: '4.1.2 Percentage of expenditure for infrastructure development and augmentation excluding salary during the last five years',
        subTitle: '4.1.2.1. Expenditure for infrastructure development and augmentation, excluding salary year wise during last five years (INR in lakhs)',
        heiInput: { '2021-22': '1.54', '2020-21': '0.60', '2019-20': '0', '2018-19': '37.17', '2017-18': '0.681' },
        rows: [
          row('4.1.2', 'Provide the consolidated fund allocation towards infrastructure augmentation facilities duly certified by Principal and CA. Provide Highlight the relevant items in the audited income and expenditure statement.', 'Provide the consolidated fund allocation towards infrastructure augmentation facilities duly certified by Principal and CA.', 'Consolidated fund allocation towards infrastructure augmentation facilities', [{ label: 'Consolidated fund allocation towards infrastructure augmentation facilities', slotId: '4.1.2-doc1' }, { label: 'Audited Statement For Infrastructure Augmentation Facilities (2017-18 to 2021-22)', slotId: '4.1.2-doc2' }]),
        ],
      },
      {
        metricId: '4.3.2',
        title: '4.3.2 Student – Computer ratio (Data for the latest completed academic year)',
        subTitle: '4.3.2.1. Number of computers available for students usage during the latest completed academic year',
        heiInput: '80',
        rows: [
          row('4.3.2', 'Provide Bills for the purchase of computers to be provided. Provide The stock entry of computers allotted for student use to be highlighted.', 'Provide Bills for the purchase of computers. Provide The stock entry of computers allotted for student use to be highlighted.', 'Provide Bills for the purchase of computers', [{ label: 'Purchase Bill', slotId: '4.3.2-doc1' }, { label: 'Stock register', slotId: '4.3.2-doc2' }]),
        ],
      },
      {
        metricId: '4.4.1',
        title: '4.4.1 Percentage expenditure incurred on maintenance of physical facilities and academic support facilities excluding salary component, during the last five years (INR in Lakhs)',
        subTitle: '4.4.1.1. Expenditure incurred on maintenance of infrastructure (physical facilities and academic support facilities) excluding salary component year wise during the last five years (INR in lakhs)',
        heiInput: { '2021-22': '21.51', '2020-21': '20.32', '2019-20': '28.68', '2018-19': '63.94', '2017-18': '55.68' },
        rows: [
          row('4.4.1', 'Provide audited income and expenditure statement highlighting the items of expenditure incurred on maintenance of physical facilities and academic support facilities, duly certified by Principal and CA.', 'Provide audited income and expenditure statement highlighting the items of expenditure incurred on maintenance of physical facilities and academic support facilities, duly certified by Principal and CA.', 'Audited income and expenditure statement highlighting the items of expenditure incurred on maintenance of physical facilities and academic support facilities, duly certified by Principal and CA.', [{ label: 'Expenditure incurred on maintenance of physical facilities and academic support facilities', slotId: '4.4.1-doc1' }, { label: 'Audited Statement of Expenditure Maintenance Of physical Facilities and academic support facilities', slotId: '4.4.1-doc2' }]),
        ],
      },
    ],
  },
  {
    id: 'criterion-5',
    title: 'Criterion-5',
    sections: [
      {
        metricId: '5.1.1',
        title: '5.1.1 Percentage of students benefited by scholarships and freeships provided by the institution, government and non-government bodies during the last five years',
        subTitle: '5.1.1.1. Number of students benefited by scholarships and freeships provided by the institution, Government and non-government bodies, industries, individuals, philanthropists during the last five years',
        heiInput: { '2021-22': 61, '2020-21': 166, '2019-20': 258, '2018-19': 308, '2017-18': 270 },
        rows: [
          row('5.1.1', 'Provide Upload sanction letter of scholarship and freeships (in English). Provide Year-wise list of students in Reimbursement of Tuition Fee from AP. Government (NA) Central Government Schemes: NATIONAL SCHOLARSHIP PROGRAM POST MATRIC SCHOLARSHIP SCHEMES FOR MINORITIES provided by the institution, government and non-government bodies, industries, individuals, philanthropists for 2017-18, 2018-19, 2019-20, 2020-21 and 2021-22.', 'Provide Upload sanction letter of scholarship and freeships (in English). Provide Year-wise list of students.', 'Institute policy on Scholarship', [{ label: 'Institute Policy On Scholarships And Freeships', slotId: '5.1.1-doc1' }, { label: 'Summary report on scholarship', slotId: '5.1.1-doc2' }, { label: 'List of students benefitted', slotId: '5.1.1-doc3' }, { label: 'Scanned Letters Of Scholarships And Freeships', slotId: '5.1.1-doc4' }]),
        ],
      },
      {
        metricId: '5.1.2',
        title: '5.1.2 Following capacity development and skills enhancement activities are organised for improving students\' capability',
        subTitle: '1. Soft skills 2. Language and communication skills 3. Life skills (Yoga, physical fitness, health and hygiene) 4. ICT/computing skills. HEI Input: A. All of the above',
        heiInput: 'A. All of the above',
        rows: [
          row('5.1.2', 'Provide Copy of circular /brochure /report of the event with Geo tagged Photographs with date and caption for Soft skills, Language and communication skills, Life skills (Yoga, physical fitness, health and hygiene), ICT/computing skills for 2021-22.', 'Provide Copy of circular /brochure /report of the event with Geo tagged Photographs with date and caption.', 'Soft skills programs report', [{ label: 'Soft-skill-report', slotId: '5.1.2-doc1' }, { label: 'Report on Language/communication Skills Initiatives', slotId: '5.1.2-doc2' }, { label: 'Report on Life Skills Initiatives', slotId: '5.1.2-doc3' }, { label: 'Report-on-ICT-Computing-skills-Initiatives', slotId: '5.1.2-doc4' }, { label: 'Sample photographs', slotId: '5.1.2-doc5' }]),
        ],
      },
      {
        metricId: '5.1.3',
        title: '5.1.3 Percentage of students benefitted by guidance for competitive examinations and career counseling offered by the Institution during the last five years',
        subTitle: '5.1.3.1. Number of students benefitted by guidance for competitive examinations and career counselling offered by the institution year wise during last five years',
        heiInput: { '2021-22': 216, '2020-21': 222, '2019-20': 285, '2018-19': 318, '2017-18': 303 },
        rows: [
          row('5.1.3', 'Provide Soft copy of Circular / brochure / report of program with photographs with captions of such programs along with details of the resource persons. Provide Year-wise list of students attending these schemes, signed by competent authority', 'Provide Soft copy of Circular / brochure / report of program with photographs with captions. Provide Year-wise list of students attending these schemes, signed by competent authority', 'Report of program with photographs with captions of such programs along with details of the resource persons.', [{ label: 'Reports of career counseling and Guidance programs', slotId: '5.1.3-doc1' }, { label: 'List of Students Attending Career Counselling And Guidance for competitive examination', slotId: '5.1.3-doc2' }]),
        ],
      },
      {
        metricId: '5.1.4',
        title: '5.1.4 The institution adopts redressal of student grievances including sexual harassment and ragging cases',
        subTitle: 'The institution adopts the following for redressal of student grievances: 1. Implementation of guidelines of statutory/regulatory bodies 2. Organisation wide awareness and undertakings on policies with zero tolerance 3. Mechanisms for submission of online/offline students\' grievances 4. Timely redressal of the grievances through appropriate committees. HEI Input: A. All of the above',
        heiInput: 'A. All of the above',
        rows: [
          row('5.1.4', 'Provide Proof of constitution of Internal committees / Grievances Committee formation / other committees as per UGC norms. Provide Circular/web-link/ committee report justifying the objective of Implementation of guidelines of statutory/regulatory bodies Organisation wide awareness and undertakings on policies with zero tolerance Mechanisms for submission of online/offline students\' grievances Timely redressal of the grievances through appropriate committees for 2021-22.', 'Provide Proof of constitution of Internal committees / Grievances Committee formation / other committees as per UGC norms.', 'Grievance Redressal policy', [{ label: 'Grievances Policy Zero tolerance', slotId: '5.1.4-doc1' }, { label: 'Guidelines of Statutory bodies', slotId: '5.1.4-doc2' }, { label: 'Grievance Redressal Awareness Program', slotId: '5.1.4-doc3' }, { label: 'Online-offline grievances filing mechanism', slotId: '5.1.4-doc4' }, { label: 'Report on timely redressal of grievances', slotId: '5.1.4-doc5' }, { label: 'Various committees to address the grievances', slotId: '5.1.4-doc6' }]),
        ],
      },
      {
        metricId: '5.2.1',
        title: '5.2.1 Percentage of placement of outgoing students and students progressing to higher education during the last five years',
        subTitle: '5.2.1.1. Number of outgoing students placed and / or progressed to higher education year wise during the last five years. 5.2.1.2. Number of outgoing students year wise during the last five years',
        heiInput: { placed: { '2021-22': 84, '2020-21': 102, '2019-20': 147, '2018-19': 137, '2017-18': 116 }, outgoing: { '2021-22': 84, '2020-21': 138, '2019-20': 147, '2018-19': 171, '2017-18': 132 } },
        rows: [
          row('5.2.1', 'Provide List of students placed along with placement details as per template year wise. Provide Links/documents relating to placement cell such as brochures, tie-ups etc., can be uploaded.', 'Provide List of students placed along with placement details as per template year wise. Provide Links/documents relating to placement cell.', 'List of students placed', [{ label: 'List of students placed with details', slotId: '5.2.1-doc1' }, { label: 'Offer letter of Appointments', slotId: '5.2.1-doc2' }]),
        ],
      },
      {
        metricId: '5.2.2',
        title: '5.2.2 Percentage of students qualifying in state/national/ international level examinations during the last five years',
        subTitle: '5.2.2.1. Number of students qualifying in state/ national/ international level examinations year wise during last five years (eg: IIT/JAM/NET/SLET/GATE/GMAT/GPAT/CLAT/CAT/ GRE/TOEFL/ IELTS/Civil Services/State government examinations etc.)',
        heiInput: { '2021-22': 5, '2020-21': 3, '2019-20': 2, '2018-19': 4, '2017-18': 2 },
        rows: [
          row('5.2.2', 'Provide List of qualified students year- wise under each category Provide Qualifying Certificates of the students', 'Provide List of qualified students year- wise under each category. Provide Qualifying Certificates of the students', 'List of qualified students year-wise', [{ label: 'List of Students Qualifying in State/National/International level examinations', slotId: '5.2.2-doc1' }, { label: 'Qualifying Certificates', slotId: '5.2.2-doc2' }]),
        ],
      },
      {
        metricId: '5.3.1',
        title: '5.3.1 Number of awards/medals for outstanding performance in sports/ cultural activities at University / state/ national / international level during the last five years',
        subTitle: '5.3.1.1. Number of awards/medals for outstanding performance in sports/cultural activities at national/international level (award for a team event should be counted as one) year wise during the last five years',
        heiInput: { '2021-22': 10, '2020-21': 13, '2019-20': 4, '2018-19': 6, '2017-18': 8 },
        rows: [
          row('5.3.1', 'Provide e-copies of award letters and certificates to be uploaded.', 'Provide e-copies of award letters and certificates to be uploaded.', 'e-copies of certificates', [{ label: 'e-copies of awards and certificates', slotId: '5.3.1-doc1' }, { label: 'Report Of Students Interstate InterUniversity National Level sports / Cultural with E-certificates', slotId: '5.3.1-doc2' }]),
        ],
      },
      {
        metricId: '5.3.2',
        title: '5.3.2 Average number of sports and cultural programs in which students of the Institution participated during last five years',
        subTitle: '5.3.2.1. Number of sports and cultural programs in which students of the Institution participated year wise during last five years',
        heiInput: { '2021-22': 48, '2020-21': 44, '2019-20': 41, '2018-19': 38, '2017-18': 35 },
        rows: [
          row('5.3.2', 'Provide Soft copy of circular/brochure indicating such kind of activities. Provide List of events along with the list of participants and year wise signed by the Principal.', 'Provide Soft copy of circular/brochure indicating such kind of activities. Provide List of events along with the list of participants and year wise signed by the Principal.', 'List of sports/cultural activities', [{ label: 'List Of Sports / Cultural Events Organized report / photographs', slotId: '5.3.2-doc1' }, { label: 'List Of Students participated', slotId: '5.3.2-doc2' }]),
        ],
      },
    ],
  },
  {
    id: 'criterion-6',
    title: 'Criterion-6',
    sections: [
      {
        metricId: '6.2.2',
        title: '6.2.2 Institution implements e-governance in its operations',
        subTitle: '1. Administration 2. Finance and Accounts 3. Student Admission and Support 4. Examination. HEI Input: A. All of the above',
        heiInput: 'A. All of the above',
        rows: [
          row('6.2.2', 'Provide Institutional expenditure statements for the heads of e-governance implementation reflected in the audited statement. Provide Link to the ERP Document and Screen shots of user interfaces of Administration Finance and Accounts Student Admission and Support Examination for 2021-22', 'Provide Institutional expenditure statements for the heads of e-governance implementation reflected in the audited statement. Provide Link to the ERP Document and Screen shots of user interfaces.', 'ERP policy document', [{ label: 'ERP (Enterprise Resource Planning) Policy Document', slotId: '6.2.2-doc1' }, { label: 'Expenditure on E-governance audited statement', slotId: '6.2.2-doc2' }, { label: 'Screenshots of user interfaces document', slotId: '6.2.2-doc3' }]),
        ],
      },
      {
        metricId: '6.3.2',
        title: '6.3.2 Percentage of teachers provided with financial support to attend conferences/workshops and towards membership fee of professional bodies during the last five years',
        subTitle: '6.3.2.1. Number of teachers provided with financial support to attend conferences/workshops and towards membership fee of professional bodies year wise during the last five years',
        heiInput: { '2021-22': 14, '2020-21': 20, '2019-20': 4, '2018-19': 20, '2017-18': 19 },
        rows: [
          row('6.3.2', 'Provide Link to the policy document Provide e-copy of letter/s indicating financial assistance to teachers', 'Provide Link to the policy document. Provide e-copy of letter/s indicating financial assistance to teachers', 'Financial support policy document', [{ label: 'Policy document for financial support to teachers (2017-18 to 2021-22)', slotId: '6.3.2-doc1' }, { label: 'Financial support E-copies (2017-18 to 2021-22)', slotId: '6.3.2-doc2' }]),
        ],
      },
      {
        metricId: '6.3.3',
        title: '6.3.3 Percentage of teaching and non-teaching staff participating in Faculty development Programmes (FDP), Management Development Programmes (MDPs) professional development /administrative training programs during the last five years',
        subTitle: '6.3.3.1. Total number of teaching and non-teaching staff participating in FDP, MDPs professional development /administrative training programs during the last five years. 6.3.3.2. Number of non-teaching staff year wise during the last five years',
        heiInput: { participating: { '2021-22': 30, '2020-21': 30, '2019-20': 32, '2018-19': 30, '2017-18': 30 }, nonTeaching: { '2021-22': 10, '2020-21': 10, '2019-20': 10, '2018-19': 13, '2017-18': 13 } },
        rows: [
          row('6.3.3', 'Provide Event Brochures and reports year-wise. Provide e-copy of the certificates of the program attended by teaching and non-teaching staff. Provide List of participating teaching and non-teaching staff as per the prescribed format year wise during the 2017-18, 2018-19 and 2019-20, 2020-21, 2021-22.', 'Provide Event Brochures and reports year-wise. Provide e-copy of the certificates of the program attended by teaching and non-teaching staff. Provide List of participating teaching and non-teaching staff as per the prescribed format year wise.', 'Event Brochures and reports year-wise', [{ label: 'Brochures/circulars on training programs', slotId: '6.3.3-doc1' }, { label: 'List of professional development programs for teaching staff', slotId: '6.3.3-doc2' }, { label: 'List of professional development programs non teaching', slotId: '6.3.3-doc3' }, { label: 'List of teaching staff for training programs', slotId: '6.3.3-doc4' }, { label: 'List of non teaching staff for training', slotId: '6.3.3-doc5' }, { label: 'Copies of participation certificates', slotId: '6.3.3-doc6' }]),
        ],
      },
      {
        metricId: '6.5.2',
        title: '6.5.2 Quality assurance initiatives of the institution',
        subTitle: 'Quality assurance initiatives include: 1. Regular meeting of Internal Quality Assurance Cell (IQAC); quality improvement initiatives identified and implemented 2. Academic and Administrative Audit (AAA) and follow-up action taken 3. Collaborative quality initiatives with other institution(s) 4. Participation in NIRF and other recognized rankings 5. Any other quality audit/accreditation recognized by state, national or international agencies such as NAAC, NBA etc. HEI Input: A. Any 4 or more of the above',
        heiInput: 'A. Any 4 or more of the above',
        rows: [
          row('6.5.2', 'Provide Proceedings of meetings of IQAC and action taken report on feedback analysis Provide Supporting document links to be provided as per the options selected.', 'Provide Proceedings of meetings of IQAC and action taken report on feedback analysis. Provide Supporting document links to be provided as per the options selected.', 'IQAC meetings MOM', [{ label: 'IQAC minutes of meetings', slotId: '6.5.2-doc1' }, { label: 'Academic and administration audit (AAA) report', slotId: '6.5.2-doc2' }, { label: 'Collaborative workshops with other institutions', slotId: '6.5.2-doc3' }, { label: 'Report on participation in NIRF', slotId: '6.5.2-doc4' }]),
        ],
      },
    ],
  },
  {
    id: 'criterion-7',
    title: 'Criterion-7',
    sections: [
      {
        metricId: '7.1.2',
        title: '7.1.2 Institution Green initiatives',
        subTitle: 'The Institution has facilities and initiatives for: 1. Alternate sources of energy and energy conservation measures 2. Management of the various types of degradable and nondegradable waste 3. Water conservation 4. Green campus initiatives 5. Disabled-friendly, barrier free environment. HEI Input: A. 4 or All of the above',
        heiInput: 'A. 4 or All of the above',
        rows: [
          row('7.1.2', 'Provide Link to the policy documents of the institution Provide Geo tagged photographs and videos of the facilities with caption.', 'Provide Link to the policy documents of the institution. Provide Geo tagged photographs and videos of the facilities with caption.', 'Green Policy document', [{ label: 'Green campus policy and GB meetings', slotId: '7.1.2-doc1' }, { label: 'Geotagged photos', slotId: '7.1.2-doc2' }, { label: 'Video on Alternate Sources of Energy and Energy Conservation Measures', slotId: '7.1.2-doc3' }, { label: 'Video on Water conservation', slotId: '7.1.2-doc4' }, { label: 'Video on Green Campus Initiatives', slotId: '7.1.2-doc5' }, { label: 'Video on Disabled-Friendly Environment', slotId: '7.1.2-doc6' }]),
        ],
      },
      {
        metricId: '7.1.3',
        title: '7.1.3 Institutional environment and energy initiatives',
        subTitle: 'Quality audits on environment and energy regularly undertaken by the Institution. The institutional environment and energy initiatives are confirmed through the following: 1. Green audit / Environment audit 2. Energy audit 3. Clean and green campus initiatives 4. Beyond the campus environmental promotion activities. HEI Input: A. All of the above',
        heiInput: 'A. All of the above',
        rows: [
          row('7.1.3', 'Provide Policy document on environment and energy usage Provide Action taken reports and achievement report as clear and Green campus initiatives.', 'Provide Policy document on environment and energy usage. Provide Action taken reports and achievement report.', 'Policy document', [{ label: 'Environment and Energy usage policy', slotId: '7.1.3-doc1' }, { label: 'Environment Audit', slotId: '7.1.3-doc2' }, { label: 'ENERGY AUDIT', slotId: '7.1.3-doc3' }, { label: 'SUSTAINABLE CAMPUS report submitted to MGNCRE', slotId: '7.1.3-doc4' }, { label: 'Beyond the campus environmental promotional activities', slotId: '7.1.3-doc5' }]),
        ],
      },
    ],
  },
];
