import React, { useState } from "react";
import {
  FaBriefcase, FaGraduationCap, FaCode, FaTrophy, FaBuilding, FaSchool, FaUniversity,
  FaServer, FaTools, FaDatabase, FaCheckCircle, FaExternalLinkAlt,
  FaMapMarkerAlt, FaCalendarAlt, FaReact, FaNodeJs, FaGitAlt, FaDocker, FaJira, FaBug, FaJava, FaCloud
} from "react-icons/fa";
import {
  SiPython, SiJavascript, SiC, SiCsharp, SiPhp, SiRedux, SiPostman, SiBootstrap, SiTailwindcss, SiExpress, SiMysql, SiMongodb, SiJest, SiBitbucket, SiFirebase, SiRailway, SiVercel, SiDjango, SiMicrosoftsqlserver, SiCloudera
} from "react-icons/si";
import { FaChrome } from "react-icons/fa";
import { useTheme } from "../ThemeContext";

// ========== THEME STYLES (certificate style) ==========
const themeStyles = {
  icy: {
    cardBg: "bg-white/15 backdrop-blur-xl border-white/20",
    cardHover: "hover:bg-white/25 hover:border-cyan-300/40 hover:shadow-cyan-400/20",
    text: "text-gray-800",
    textSecondary: "text-gray-600",
    accent: "text-cyan-600",
    cardTitle: "font-bold text-gray-800",
    cardDesc: "font-normal text-gray-700",
    percent: "text-cyan-500",
    barBg: "bg-cyan-100/50",
    bar: "from-cyan-400 to-cyan-200",
    button: "bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-800 border-cyan-400/40",
    glow: "shadow-cyan-400/20",
    badge: "bg-cyan-100/30 text-cyan-800 border-cyan-300/40",
    filterActive: "bg-cyan-500/30 text-cyan-800 border-cyan-400/60",
    sidebarActive: "bg-cyan-500/20 text-cyan-800 border-cyan-400/40 font-bold",
    sidebar: "text-cyan-900 hover:text-cyan-700"
  },
  hot: {
    cardBg: "bg-yellow-50/15 backdrop-blur-xl border-yellow-300/20",
    cardHover: "hover:bg-yellow-50/25 hover:border-yellow-400/40 hover:shadow-yellow-400/20",
    text: "text-yellow-900",
    textSecondary: "text-yellow-800",
    accent: "text-yellow-600",
    cardTitle: "font-bold text-yellow-900",
    cardDesc: "font-normal text-yellow-800",
    percent: "text-yellow-600",
    barBg: "bg-yellow-100/50",
    bar: "from-yellow-400 to-yellow-200",
    button: "bg-yellow-400/20 hover:bg-yellow-400/30 text-yellow-900 border-yellow-500/40",
    glow: "shadow-yellow-400/20",
    badge: "bg-yellow-100/30 text-yellow-900 border-yellow-400/40",
    filterActive: "bg-yellow-500/30 text-yellow-900 border-yellow-500/60",
    sidebarActive: "bg-yellow-400/20 text-yellow-900 border-yellow-500/40 font-bold",
    sidebar: "text-yellow-900 hover:text-yellow-700"
  },
  dark: {
    cardBg: "bg-gray-900/15 backdrop-blur-xl border-gray-700/20",
    cardHover: "hover:bg-gray-900/25 hover:border-blue-500/40 hover:shadow-blue-400/20",
    text: "text-gray-100",
    textSecondary: "text-gray-300",
    accent: "text-blue-400",
    cardTitle: "font-bold text-gray-100",
    cardDesc: "font-normal text-gray-300",
    percent: "text-blue-400",
    barBg: "bg-blue-900/50",
    bar: "from-blue-400 to-blue-900",
    button: "bg-blue-600/20 hover:bg-blue-600/30 text-blue-200 border-blue-500/40",
    glow: "shadow-blue-400/20",
    badge: "bg-blue-900/30 text-blue-200 border-blue-500/40",
    filterActive: "bg-blue-600/30 text-blue-200 border-blue-500/60",
    sidebarActive: "bg-blue-600/20 text-blue-200 border-blue-500/40 font-bold",
    sidebar: "text-blue-200 hover:text-blue-400"
  }
};

const allSkillDetails = [
  { key: "python", name: "Python", icon: <SiPython className="text-yellow-500" />, desc: "Programming Language", percent: 90 },
];

// GROUPS
const skillSections = [
  { group: "Programming Languages", icon: <FaCode className="text-yellow-600" />, keys: ["python", "java", "js", "php", "sql"] },
  { group: "Front-End Development", icon: <FaReact className="text-cyan-400" />, keys: ["react", "redux", "bootstrap", "tailwind"] },
  { group: "Back-End Development", icon: <FaServer className="text-blue-500" />, keys: ["nodejs", "express", "django", "restapi"] },
  { group: "Databases", icon: <FaDatabase className="text-orange-700" />, keys: ["mongodb", "mysql", "firebase", "cloudera"] },
  { group: "Testing & Debugging", icon: <FaBug className="text-red-500" />, keys: ["jest", "postman", "chromedevtools"] },
  { group: "DevOps & Deployment", icon: <FaTools className="text-green-600" />, keys: ["git", "bitbucket", "docker", "railway", "vercel", "gcp"] },
  { group: "Project Management", icon: <FaJira className="text-blue-500" />, keys: ["jira", "agile"] }
];
// HIGHLIGHTS, EXPERIENCE, EDUCATION
const highlights = [
  { emoji: "📱", text: "Tech Projects → Managing 3 active apps with 300K+ downloads and 15M+ past listeners.", link: "" },
  { emoji: "🕋", text: "Nusuk Card Project → Supervised the Guidance & Monitoring Center, delivered 70+ decision-support reports for the Ministry of Hajj.", link: "" },
  { emoji: "🏆", text: "Awards → Graduation project won 2 university-wide prizes (Best Poster & 3-Minute Pitch).", link: "" },
  { emoji: "🎤", text: "Communication & Leadership → Delivered 20+ partner presentations, 100+ stage appearances, strong negotiation & people skills.", link: "" },
  { emoji: "🌍", text: "Community & Growth → PMP-certified & PMI member, next milestone: PMI-PBA.", link: "" }
];

const experienceGroups = [
  {
    label: "Al-Burhan Association",
    entries: [
      {
        title: "Technical Project Manager",
        company: "Al-Burhan Association",
        location: "Makkah / Riyadh",
        period: "2023 – Present",
        description: [
          "Managing three active apps (Salem, Maher, Noble) with 300K+ downloads and 15M+ past listeners.",
          "Coordinating ~4 collaborators per project across development, design, and content.",
          "Handling challenges ranging from legal/contract issues to brand rebuilding and product growth."
        ],
        skills: [
          "Project Management",
          "Agile Delivery",
          "Stakeholder Alignment",
          "Vendor Management",
          "Product Development"
        ]
      }
    ]
  },
  {
    label: "Nusuk Card Project - Ministry of Hajj",
    entries: [
      {
        title: "Data Analysis Consultant - Decision Support",
        company: "EVC / Ministry of Hajj",
        location: "Makkah",
        period: "2024 – Present",
        description: [
          "Supervised the Guidance & Monitoring Center for the Nusuk Card project.",
          "Built and delivered 70+ decision-support reports for the Ministry of Hajj.",
          "Enabled better oversight and informed decision-making during Hajj operations."
        ],
        skills: [
          "Decision Support",
          "Data Analysis",
          "Reporting",
          "Team Supervision"
        ]
      }
    ]
  },
  {
    label: "The First City",
    entries: [
      {
        title: "React Native Intern",
        company: "The First City",
        location: "Makkah",
        period: "2022",
        description: [
          "Developed a mobile monitoring app for Hajj supervisors to evaluate and track worker performance.",
          "Learned and applied mobile development foundations in a real-world project context."
        ],
        skills: [
          "React Native",
          "Mobile App Development",
          "Field Monitoring Solutions"
        ]
      }
    ]
  },
  {
    label: "Aoun Society – Kibtar Tech Community",
    entries: [
      {
        title: "Founder Keptar (Volunteer)",
        company: "Aoun Society",
        location: "Makkah",
        period: "2021 – 2023",
        description: [
          "Founded Kibtar, a grassroots tech community under Aoun Society.",
          "Organized 10+ meetups for developers, entrepreneurs, and innovators in Makkah and Jeddah.",
          "Promoted collaboration and knowledge-sharing across the local tech ecosystem."
        ],
        skills: [
          "Community Building",
          "Event Organization",
          "Public Speaking",
          "Networking"
        ]
      }
    ]
  }
];


const educationGroups = [
  {
    label: "High School",
    icon: <FaSchool className="text-cyan-500" />,
    entries: [{
      institution: "Al-Hakam Bin Hisham High School",
      period: "2018",
      location: "Makkah, Saudi Arabia",
      grade: "96.0%"
    }]
  },
  {
    label: "B.Sc. – Computer Science",
    icon: <FaUniversity className="text-blue-500" />,
    entries: [{
      institution: "Umm Al-Qura University",
      period: "2024",
      location: "Makkah, Saudi Arabia",
      grade: "GPA: 3.45 / 4.00"
    }]
  }
];


// ========== COMPONENTS ==========
function MainTabBar({ activeTab, setActiveTab, styles }) {
  const tabs = [
    // { id: "skills", label: "Skills", icon: <FaCode className="text-blue-500" /> },
    { id: "highlights", label: "Highlights", icon: <FaTrophy className="text-yellow-500" /> },
    { id: "experience", label: "Experience", icon: <FaBriefcase className="text-purple-600" /> },
    { id: "education", label: "Education", icon: <FaGraduationCap className="text-green-500" /> }
  ];
  return (
    <div className="grid grid-cols-4 md:flex md:flex-row items-center justify-center mb-8 md:mb-12 gap-2 md:gap-0">
      {tabs.map(tab => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`flex items-center gap-1 md:gap-2 px-3 md:px-6 py-2 md:py-3 rounded-xl font-semibold transition-all duration-300 justify-center text-sm md:text-base
            ${activeTab === tab.id
              ? `${styles.button} border ${styles.glow} shadow-lg scale-105`
              : `${styles.textSecondary} hover:${styles.text}`
            }`}
          style={{ minWidth: "auto" }}
        >
          <span className="text-base md:text-lg flex items-center">
            {tab.icon}
          </span>
          <span className="hidden sm:inline">{tab.label}</span>
        </button>
      ))}
    </div>
  );
}

function SideTabBar({ groups, activeIndex, setActiveIndex, iconMap = {} }) {
  const { theme } = useTheme();
  const styles = themeStyles[theme] || themeStyles.icy;
  return (
    <div className="grid grid-cols-2 md:flex md:flex-col gap-2 md:pr-6 mb-4 md:mb-0 w-full md:w-auto">
      {groups.map((g, idx) => (
        <button
          key={g.label || g.group}
          onClick={() => setActiveIndex(idx)}
          className={`
            text-left px-3 md:px-5 py-2 md:py-3 rounded-xl font-semibold transition-all duration-300 border flex items-center gap-1 md:gap-2 justify-left md:justify-start text-xs md:text-base
            ${activeIndex === idx
              ? `${styles.sidebarActive} border-2`
              : `${styles.sidebar} border-transparent`}
          `}
        >
          {iconMap && iconMap[g.label || g.group] ? iconMap[g.label || g.group] : g.icon}
          <span className="whitespace-nowrap text-xs md:text-lg leading-tight">{g.label || g.group}</span>
        </button>
      ))}
    </div>
  );
}

function SkillCard({ skill, styles, isMobile = false }) {
  if (isMobile) {
    // Mobile version - only show icon
    return (
      <div
        className={`
          ${styles.cardBg} ${styles.cardHover} border rounded-xl
          transition-all duration-300 transform ${styles.glow} shadow-lg
          hover:scale-105 flex items-center justify-center
        `}
        style={{
          minHeight: 60,
          padding: "1rem",
          border: "1.5px solid rgba(0,195,255,0.11)",
          backdropFilter: "blur(7px)",
          aspectRatio: "1"
        }}
      >
        <span className="text-2xl">{skill.icon}</span>
      </div>
    );
  }

  // Desktop version - full card
  return (
    <div
      className={`
        ${styles.cardBg} ${styles.cardHover} border rounded-2xl
        transition-all duration-300 transform ${styles.glow} shadow-lg
        hover:scale-105
      `}
      style={{
        minHeight: 110,
        padding: "1.2rem 1.4rem",
        border: "1.5px solid rgba(0,195,255,0.11)",
        backdropFilter: "blur(7px)"
      }}
    >
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center gap-2">
          <span className="text-3xl">{skill.icon}</span>
          <div>
            <div className={`text-[18px] ${styles.cardTitle}`}>{skill.name}</div>
            <div className={`text-[15px] ${styles.cardDesc}`} style={{ marginTop: -2 }}>{skill.desc}</div>
          </div>
        </div>
        <div className={`font-bold text-xl ${styles.percent}`}>{skill.percent}%</div>
      </div>
      {/* Progress Bar */}
      <div className="w-full mt-2 mb-1">
        <div className={`h-[6px] rounded-full relative overflow-hidden ${styles.barBg}`}>
          <div
            className={`absolute top-0 left-0 h-full rounded-full transition-all duration-300 ${styles.bar}`}
            style={{
              width: `${skill.percent}%`,
              background: styles.bar === "from-cyan-400 to-cyan-200"
                ? "linear-gradient(90deg, #22d3ee 25%, #a5f3fc 100%)"
                : styles.bar === "from-yellow-400 to-yellow-200"
                  ? "linear-gradient(90deg, #facc15 25%, #fef08a 100%)"
                  : "linear-gradient(90deg, #60a5fa 25%, #1e3a8a 100%)"
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

// ========== MAIN ==========
export default function About() {
  const { theme } = useTheme();
  const styles = themeStyles[theme] || themeStyles.icy;
  const [activeTab, setActiveTab] = useState("highlights");
  const [expTab, setExpTab] = useState(0);
  const [eduTab, setEduTab] = useState(0);

  const experienceIcons = { Infosys: <FaBuilding />, "Digitran Technologies": <FaBuilding /> };
  const skillGroupIcons = {};
  skillSections.forEach(s => { skillGroupIcons[s.group] = s.icon; });

  // Education heading coloring per theme
  const edulabelStyle = `text-xl md:text-2xl font-bold ${styles.text}`;

  return (
    <section id="about" className="relative w-full max-w-7xl mx-auto px-4 py-8 md:py-16 scroll-mt-24">
      {/* About Me heading and description - always at the top */}
      <div className="text-center mb-8 pt-8">
        <h1 className={`text-3xl md:text-5xl lg:text-6xl font-bold ${styles.text} mb-4`}>
          About <span className={styles.accent}>Me</span>
        </h1>
        <p className={`text-lg md:text-xl ${styles.textSecondary} max-w-3xl mx-auto leading-relaxed`}>
          Mazen here, a tech project manager who loves early-stage chaos and startup vibes.
          I juggle product development, team organizing, decision making, and business growth,
          I juggle them all with a smile and a cup of tea 🍵       </p>
      </div>
      {/* Main Tabs */}
      <MainTabBar activeTab={activeTab} setActiveTab={setActiveTab} styles={styles} />
      <div className="min-h-[400px] md:min-h-[600px] transition-all duration-500">
        {/* Skills */}

        {/* Highlights */}
        {activeTab === "highlights" && (
          <div className="w-full transition-all duration-500 animate-fadein">
            <div className={`w-full mx-auto ${styles.cardBg} ${styles.cardHover} border rounded-2xl shadow-xl p-4 md:p-7 ${styles.glow} transition-all duration-500`}>
              <div className="flex items-center mb-4 md:mb-6 gap-3">
                <FaTrophy className={`text-2xl md:text-3xl ${styles.accent}`} />
                <h2 className={`text-2xl md:text-3xl font-bold ${styles.text}`}>Highlights</h2>
              </div>
              <ul className="flex flex-col gap-4 md:gap-6 w-full">
                {highlights.map((ach, i) => (
                  <li key={i} className="flex gap-3 md:gap-4 items-start animate-slideup" style={{ animationDelay: `${i * 0.11}s` }}>
                    <span className="text-xl md:text-2xl mt-1 leading-none select-none">{ach.emoji}</span>
                    <div className="flex flex-col w-full">
                      <div className="flex items-center gap-2 text-sm md:text-lg font-medium">
                        <span className={`${styles.text}`}>{ach.text}</span>
                        {ach.link &&
                          <a
                            href={ach.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`ml-1 ${styles.accent} hover:underline inline-flex items-center`}
                          >
                            <FaExternalLinkAlt className="text-xs md:text-sm" />
                          </a>
                        }
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
        {/* Experience */}
        {activeTab === "experience" && (
          <div className="flex flex-col md:flex-row gap-6 md:gap-10 animate-fadein">
            <SideTabBar
              groups={experienceGroups}
              activeIndex={expTab}
              setActiveIndex={setExpTab}
              iconMap={experienceIcons}
            />
            <div className="flex-1">
              {experienceGroups[expTab].entries.map((exp, idx) => (
                <div
                  key={idx}
                  className={`mb-6 md:mb-8 p-4 md:p-6 rounded-2xl border ${styles.cardBg} ${styles.cardHover} ${styles.glow} shadow-lg animate-slideup`}
                  style={{ animationDelay: `${idx * 0.12}s` }}
                >
                  <div className="flex flex-col md:flex-row md:flex-wrap gap-2 mb-3 md:items-center">
                    <span className={`text-lg md:text-lg font-bold ${styles.text}`}>{exp.title}</span>
                    <span className={`text-base font-semibold ${styles.accent}`}>{exp.company}</span>
                    <span className={`flex items-center gap-2 text-sm ${styles.textSecondary}`}>
                      <FaCalendarAlt className="text-xs" />
                      {exp.period}
                    </span>
                    <span className={`flex items-center gap-2 text-sm ${styles.textSecondary}`}>
                      <FaMapMarkerAlt className="text-xs" />
                      {exp.location}
                    </span>
                  </div>
                  <ul className={`mb-3 pl-0 flex flex-col gap-2`}>
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex gap-2 items-start">
                        <span className="mt-1 text-cyan-400">
                          <FaCheckCircle className="text-sm md:text-base" />
                        </span>
                        <span className={`${styles.textSecondary} text-sm md:text-base`}>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <span key={i} className={`px-2 md:px-3 py-1 rounded-full text-xs ${styles.button} border`}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        {/* Education */}
        {activeTab === "education" && (
          <div className="flex flex-col md:flex-row gap-4 md:gap-7 items-stretch animate-fadein">
            {educationGroups.map((edu, idx) => (
              <div
                key={edu.label}
                className={`flex-1 min-w-[200px] mb-6 md:mb-0 p-4 md:p-6 rounded-2xl border ${styles.cardBg} ${styles.cardHover} ${styles.glow} shadow-lg flex flex-col gap-3 md:gap-4 items-center animate-slideup`}
                style={{ animationDelay: `${idx * 0.16}s` }}
              >
                <div className="mb-2 flex items-center gap-2">
                  {edu.icon}
                  <span className={edulabelStyle}>{edu.label}</span>
                </div>
                {edu.entries.map((entry, idy) => (
                  <div key={idy} className="flex flex-col items-center text-center">
                    <div className="text-base md:text-lg font-bold mb-1 flex items-center gap-2">
                      <FaGraduationCap className="text-cyan-500" />
                      {entry.degree}
                    </div>
                    <div className={`text-sm md:text-base font-semibold ${styles.accent}`}>{entry.institution}</div>
                    <div className="flex flex-wrap gap-2 md:gap-3 justify-center text-xs md:text-sm items-center my-2">
                      <span className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                        <FaCalendarAlt className="text-xs" />
                        {entry.period}
                      </span>
                      <span className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                        <FaMapMarkerAlt className="text-xs" />
                        {entry.location}
                      </span>
                    </div>
                    <div className={`text-sm md:text-base font-semibold ${styles.text} mt-2`}>
                      {entry.grade}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
      {/* Animation styles */}
      <style>{`
        @keyframes fadein {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideup {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadein {
          animation: fadein 0.6s ease-out forwards;
        }
        .animate-slideup {
          animation: slideup 0.8s ease-out forwards;
          opacity: 0;
          animation-fill-mode: forwards;
        }
      `}</style>
    </section>
  );
}