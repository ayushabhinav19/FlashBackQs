import "./hero.css"

const subjects = [
  { icon: "💻", name: "Programming" },
  { icon: "📐", name: "Math" },
  { icon: "🗃️", name: "Data Structures" },
  { icon: "🔌", name: "DLD" },
  { icon: "🌐", name: "Networks" },
  { icon: "🧠", name: "AI" }
]

export const Hero = () => {
  return (
    <section className="hero" id="home">
      {/* Modern blurred background shape */}
      <div className="hero-bg-blur"></div>
      <div className="hero-container simple-hero pro-hero">
        <div className="hero-content simple-hero-content pro-hero-content">
          <div className="hero-badge pro-hero-badge">Exclusively for DYPIU BTech CSE</div>
          <h1 className="hero-title simple-hero-title pro-hero-title">
            <span className="hero-highlight">FlashBackQs</span><br />
            <span className="hero-sub">All Your <span className="hero-accent">PYQs</span> in One Place</span>
          </h1>
          <p className="hero-description simple-hero-desc pro-hero-desc">
            Access every previous year question paper for BTech CSE at DY Patil International University. Study smart, score high, and get ahead—effortlessly.
          </p>
          <div className="subjects-row pro-subjects-row">
            <span className="subjects-label">Subjects:</span>
            {subjects.map((sub, i) => (
              <span className="subject-chip pro-subject-chip" key={i}>{sub.icon} {sub.name}</span>
            ))}
          </div>
          <a href="#browse" className="btn btn-primary simple-hero-btn pro-hero-btn">
            <span>Browse Papers</span>
            <span className="pro-btn-arrow">→</span>
          </a>
        </div>
        <div className="hero-visual simple-hero-visual pro-hero-visual">
          <div className="dypiu-card enhanced-glow pro-hero-card">
            <div className="dypiu-logo pro-dypiu-logo">DYPIU</div>
            <div className="pyq-label pro-pyq-label">PYQ</div>
            <div className="books-illustration pro-books-illustration">
              <span role="img" aria-label="books">📚</span>
              <span role="img" aria-label="cap">🎓</span>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator pro-scroll-indicator">
        <span className="arrow">↓</span>
        <span className="scroll-text">Scroll Down</span>
      </div>
    </section>
  )
} 