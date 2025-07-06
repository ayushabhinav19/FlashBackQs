import { FaLaptopCode, FaMicrochip, FaCalculator, FaComments, FaProjectDiagram, FaNetworkWired, FaBrain, FaDatabase, FaCogs, FaBook, FaChalkboardTeacher, FaUserGraduate, FaLock, FaTasks, FaSignal, FaLightbulb, FaGlobe, FaLeaf, FaUserTie, FaFlask, FaRobot, FaFolderOpen } from 'react-icons/fa';
import "./semesterSubjects.css"

const subjectIcons = {
  'Introduction to Programming': <FaLaptopCode />,
  'Basic Electrical and Electronics Engineering': <FaMicrochip />,
  'Computer Skills': <FaLaptopCode />,
  'Applied Computational Mathematics-I': <FaCalculator />,
  'Applied Computational Mathematics-II': <FaCalculator />,
  'Soft Skills': <FaComments />,
  'Data Structures': <FaProjectDiagram />,
  'Digital Logic Design': <FaMicrochip />,
  'Design Thinking and Fabrication Workshop': <FaLightbulb />,
  'Human physiology': <FaUserGraduate />,
  'Introduction to Communication Systems': <FaNetworkWired />,
  'Summer Internship-I': <FaUserTie />,
  'Design and Analysis of Algorithms': <FaProjectDiagram />,
  'Digital Communications': <FaSignal />,
  'Computer Organization': <FaCogs />,
  'Embedded Systems Design': <FaMicrochip />,
  'Technology Management and Commercialization': <FaBook />,
  'Design Project-I': <FaTasks />,
  'Introduction to Intelligent Systems': <FaBrain />,
  'Database Management Systems': <FaDatabase />,
  'Systems Software': <FaCogs />,
  'Computer Networks': <FaNetworkWired />,
  'Environmental Studies/Climate/Sustainable Development': <FaLeaf />,
  'Design Project-II': <FaTasks />,
  'Summer Internship-II': <FaUserTie />,
  'Systems Security': <FaLock />,
  'Software Engineering and Project Management': <FaTasks />,
  'Digital Signal Processing Systems': <FaSignal />,
  'Track Core (TC1)': <FaFolderOpen />,
  'Track Core (TC2)': <FaFolderOpen />,
  'Track Core (TC3)': <FaFolderOpen />,
  'Track Core (TC4)': <FaFolderOpen />,
  'Track Core (TC5)': <FaFolderOpen />,
  'Open Elective 1': <FaBook />,
  'Open Elective 2': <FaBook />,
  'Research Internship': <FaFlask />,
};

const semesters = [
  {
    name: "Semester I",
    subjects: [
      "Introduction to Programming",
      "Basic Electrical and Electronics Engineering",
      "Computer Skills",
      "Applied Computational Mathematics-I",
      "Soft Skills"
    ]
  },
  {
    name: "Semester II",
    subjects: [
      "Data Structures",
      "Digital Logic Design",
      "Design Thinking and Fabrication Workshop",
      "Applied Computational Mathematics-II",
      "Human physiology",
      "Introduction to Communication Systems",
      "Summer Internship-I"
    ]
  },
  {
    name: "Semester III",
    subjects: [
      "Design and Analysis of Algorithms",
      "Digital Communications",
      "Computer Organization",
      "Embedded Systems Design",
      "Technology Management and Commercialization",
      "Design Project-I"
    ]
  },
  {
    name: "Semester IV",
    subjects: [
      "Introduction to Intelligent Systems",
      "Database Management Systems",
      "Systems Software",
      "Computer Networks",
      "Environmental Studies/Climate/Sustainable Development",
      "Design Project-II",
      "Summer Internship-II"
    ]
  },
  {
    name: "Semester V",
    subjects: [
        "Systems Security",
        "Software Engineering and Project Management",
        "Digital Signal Processing Systems",
        "Track Core (TC1)",
        "Track Core (TC2)"    
    ]
  },
  {
    name: "Semester VI",
    subjects: [
        "Track Core (TC3)",
        "Track Core (TC4)",
        "Track Core (TC5)",
        "Open Elective 1",
        "Open Elective 2",
        "Research Internship"
    ]
  }
]

export const SemesterSubjects = () => {
  return (
    <section className="semester-section" id="subjects">
      <div className="semester-section-header">
        <h2>BTech CSE Subjects by Semester</h2>
        <p>DY Patil International University</p>
      </div>
      <div className="semester-grid">
        {semesters.map((sem, idx) => (
          <div className="semester-card" key={idx}>
            <div className="semester-title">{sem.name}</div>
            <ul className="subject-list">
              {sem.subjects.map((subject, sidx) => (
                <li key={sidx} className="subject-item">
                  <span className="subject-icon">{subjectIcons[subject] || <FaBook />}</span>
                  <span>{subject}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
} 