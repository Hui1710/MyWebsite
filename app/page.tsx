// Add the GitHub Pages repository prefix only during the Actions build.
// Assets in public/ need this prefix because plain <img> and <a> tags
// do not automatically apply Next.js basePath.
const assetBase = process.env.GITHUB_ACTIONS === "true" ? "/MyWebsite" : "";

// NAVIGATION LINKS: This list supplies the section names and matching page anchors.
const navItems = [
  ["Impact", "impact"],
  ["Expertise", "expertise"],
  ["Projects", "projects"],
  ["Experience", "experience"],
  ["Education", "education"],
];

export default function Home() {
  return (
    // <main> wraps the complete visible page.
    <main>
      {/* TOP NAVIGATION: Logo, section links, and contact button. */}
      <nav className="nav" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Back to top">HFS</a>
        <div className="navLinks">
          {navItems.map(([label, id]) => (
            <a key={id} href={`#${id}`}>{label}</a>
          ))}
        </div>
        <a className="navContact" href="#contact">Let&apos;s talk <span>↗</span></a>
      </nav>

      {/* HERO SECTION: Main headline, buttons, and visual portrait. */}
      <section className="hero" id="top">
        <div className="heroCopy">
          <p className="eyebrow"><span /> Available for opportunities</p>
          <h1>Hi, I&apos;m <em>Huzaifah.</em><br />I turn financial data<br />into clear decisions.</h1>
          <div className="heroActions">
            <a className="button buttonDark" href="#projects">View Projects <span>↘</span></a>
            <a className="button buttonLight" href="https://www.linkedin.com/in/huzaifah-fatima-syed" target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a>
            <a className="textLink" href={`${assetBase}/Huzaifah-Fatima-Syed-Resume.pdf`} target="_blank">View Resume <span>↗</span></a>
          </div>
        </div>
        <div className="heroVisual" aria-label="Financial analysis portfolio visual">
          <div className="orbit orbitOne" />
          <div className="orbit orbitTwo" />
          <div className="portraitCard">
            <div className="chartGrid">
              <span /><span /><span /><span /><span />
            </div>
            <div className="chartLine"><i /><i /><i /><i /><i /></div>
            <img className="portraitInitials" src={`${assetBase}/Hijabi avt.png`} alt="Illustration of Huzaifah working on a laptop" />
          </div>
        </div>
      </section>

      {/* ABOUT AND IMPACT: Personal introduction and resume highlights. */}
      <section className="section impact" id="impact">
        <div className="sectionIntro">
          <p className="sectionLabel">Introduction</p>
          <h2>About</h2>
        </div>
        <div className="aboutGrid">
          <p className="lead">Financial insight is most valuable when it leads to action.</p>
          <p>I&apos;m a financial modeling and analysis professional who transforms complex financial data into forecasts, valuations, and operational recommendations. My work spans forecasting, cash flow planning, profitability analysis, benchmarking, and client reporting across commercial, veterinary, and franchise businesses.</p>
        </div>
        <div className="impactHeader"><p>By the numbers</p><h3>Key impact</h3></div>
        <div className="metrics">
          <article><strong>12%</strong><span>Revenue growth through margin-led focus</span></article>
          <article><strong>18%</strong><span>Revenue optimization across 100+ locations</span></article>
          <article><strong>96%</strong><span>Customer churn model accuracy</span></article>
          <article><strong>$637M</strong><span>Personal account balances analyzed</span></article>
        </div>
      </section>

      {/* EXPERTISE: Four service or skill cards. */}
      <section className="section" id="expertise">
        <div className="sectionIntro"><p className="sectionLabel">Expertise</p><h2>What I do</h2></div>
        <div className="expertiseGrid">
          <article><span className="cardNumber">01</span><h3>Financial modeling</h3><p>Forecasting, 13-week cash flow models, P&amp;L analysis, scenario planning, and long-range strategic support.</p><div className="tags"><span>Forecasting</span><span>Cash flow</span><span>FP&amp;A</span></div></article>
          <article><span className="cardNumber">02</span><h3>Valuation &amp; strategy</h3><p>DCF, FCF, APV, sensitivity analysis, deal structuring, and investment recommendations grounded in value drivers.</p><div className="tags"><span>DCF</span><span>APV</span><span>IRR</span></div></article>
          <article><span className="cardNumber">03</span><h3>Data &amp; analytics</h3><p>Data cleaning, KPI reporting, dashboards, benchmarking, and predictive modeling to uncover clear business patterns.</p><div className="tags"><span>Python</span><span>SQL</span><span>Power BI</span></div></article>
          <article><span className="cardNumber">04</span><h3>Reporting &amp; operations</h3><p>AR/AP aging, invoicing automation, billing workflows, and timely reporting that improve liquidity and accuracy.</p><div className="tags"><span>QuickBooks</span><span>Excel</span><span>Bill.com</span></div></article>
        </div>
      </section>

      {/* PROJECTS: Two selected portfolio case studies. */}
      <section className="section projects" id="projects">
        <div className="sectionTop"><div><p className="sectionLabel">Selected work</p><h2>Projects</h2></div><p>Real-world financial and analytical problems,<br />turned into measurable recommendations.</p></div>
        <div className="projectGrid">
          <article className="projectCard">
            <div className="projectVisual greenVisual"><div className="miniDashboard"><b>COHORT HEALTH</b><div className="bars"><i /><i /><i /><i /><i /></div><div className="lineChart"><i /><i /><i /></div></div></div>
            <div className="projectBody"><p className="projectTags">PYTHON · MACHINE LEARNING · EXCEL</p><h3>Customer Churn Prediction</h3><p>Built a LASSO regression and decision-tree model to identify churn drivers across personal and business banking accounts.</p><ul><li>96% model accuracy</li><li>140 variables analyzed</li><li>$1.56B in balances assessed</li></ul></div>
          </article>
          <article className="projectCard">
            <div className="projectVisual pinkVisual"><div className="valuationCard"><b>AMC BUYOUT</b><strong>$24.50</strong><span>per share valuation</span><div className="valuationBars"><i /><i /><i /></div></div></div>
            <div className="projectBody"><p className="projectTags">DCF · APV · SENSITIVITY ANALYSIS</p><h3>AMC Entertainment Buyout</h3><p>Led valuation and strategic modeling for a buyout case using advanced methods and scenario analysis.</p><ul><li>$2.1B equity valuation</li><li>$19.40 proposed offer</li><li>20–25% estimated IRR</li></ul></div>
          </article>
        </div>
      </section>

      {/* EXPERIENCE: A vertical timeline of past roles. */}
      <section className="section journey" id="experience">
        <div className="sectionIntro"><p className="sectionLabel">Professional journey</p><h2>Experience</h2></div>
        <div className="timeline">
          <article><div className="timelineDate">Jul 2024 — Present</div><div><h3>Financial Modeling Analyst</h3><p className="company">Capital Concepts USA · Atlanta, GA</p><p>Lead monthly financial analysis and reporting for commercial, veterinary, and franchise clients. Build forecasts, cash flow models, KPI dashboards, profitability analyses, and operational recommendations.</p></div></article>
          <article><div className="timelineDate">Aug 2023 — Dec 2024</div><div><h3>Graduate Research Assistant</h3><p className="company">Georgia State University · Atlanta, GA</p><p>Cleaned and analyzed SEC financial datasets, improved data accuracy by 20%, reconciled research records, and supported validation across 5,000 confidential treatment orders.</p></div></article>
          <article><div className="timelineDate">Jan 2020 — Apr 2020</div><div><h3>Finance Intern</h3><p className="company">Finance House · Abu Dhabi, UAE</p><p>Reviewed EMI schedules, audited interest calculations, validated financial transactions, and identified operational discrepancies and industry trends.</p></div></article>
        </div>
      </section>

      {/* EDUCATION: Degrees and certification cards. */}
      <section className="section education" id="education">
        <div className="sectionIntro"><p className="sectionLabel">Background</p><h2>Education</h2></div>
        <div className="educationGrid">
          <article><span>2024</span><h3>Master of Science in Finance</h3><p>Georgia State University<br />J. Mack Robinson College of Business</p><strong>GPA 3.6 / 4.0</strong></article>
          <article><span>2022</span><h3>MS — Banking &amp; Finance</h3><p>International Islamic University<br />Kuala Lumpur, Malaysia</p><strong>GPA 3.8 / 4.0</strong></article>
          <article><span>2024</span><h3>FinTech Certificate</h3><p>Georgia State University<br />Atlanta, Georgia</p><strong>Certificate</strong></article>
        </div>
      </section>

      {/* CONTACT: Email, LinkedIn, and downloadable resume links. */}
      <section className="contact" id="contact">
        <div><p className="sectionLabel">Let&apos;s work together</p><h2>Open to finance<br />and analytics roles.</h2></div>
        <div className="contactLinks"><a href="mailto:fshuzaifah@gmail.com"><span>Email</span>fshuzaifah@gmail.com ↗</a><a href="https://www.linkedin.com/in/huzaifah-fatima-syed" target="_blank" rel="noreferrer"><span>LinkedIn</span>View profile ↗</a><a href={`${assetBase}/Huzaifah-Fatima-Syed-Resume.pdf`} target="_blank"><span>Resume</span>Download PDF ↗</a></div>
      </section>

      {/* FOOTER: Closing logo, copyright, and back-to-top link. */}
      <footer><a className="brand" href="#top">HFS</a><p>© 2026 Huzaifah Fatima Syed</p><a href="#top">Back to top ↑</a></footer>
    </main>
  );
}
