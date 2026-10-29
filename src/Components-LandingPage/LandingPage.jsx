import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../routes'
import './LandingPage.css'
import logoIcon from '../assets/LandingPageAssets/logoIcon.png'
import heroIllustration from '../assets/LandingPageAssets/heroIllustration.png'
import briefcase from '../assets/LandingPageAssets/briefcase.png'
import aiOperator from '../assets/LandingPageAssets/aiOperator.png'
import educationCap from '../assets/LandingPageAssets/educationCap.png'
import analytics from '../assets/LandingPageAssets/analytics.png'
import userFriends from '../assets/LandingPageAssets/userFriends.png'
import avatarOne from '../assets/LandingPageAssets/avatarOne.png'
import avatarTwo from '../assets/LandingPageAssets/avatarTwo.png'
import avatarThree from '../assets/LandingPageAssets/avatarThree.png'
import grok from '../assets/LandingPageAssets/grok.png'
import wipro from '../assets/LandingPageAssets/wipro.png'
import qwen from '../assets/LandingPageAssets/qwen.png'
import deepseek from '../assets/LandingPageAssets/deepseek.png'
import infosys from '../assets/LandingPageAssets/infosys.png'
import claude from '../assets/LandingPageAssets/claude.png'
import openai from '../assets/LandingPageAssets/openai.png'
import facebook from '../assets/LandingPageAssets/facebook.png'
import twitter from '../assets/LandingPageAssets/twitter.png'
import instagram from '../assets/LandingPageAssets/instagram.png'

const navLinks = [
  { label: 'Home', target: 'LandingPage-page' },
  { label: 'Features', target: 'LandingPage-features' },
  { label: 'For Recruiters/Employers', route: ROUTES.register },
  { label: 'For Training Institutions', route: ROUTES.register },
  { label: 'Success Stories', target: 'LandingPage-stories' },
]

const features = [
  { icon: briefcase, title: 'Wide Job Opportunities', lines: ['Access to thousands of', 'job opening from top', 'companies'] },
  { icon: aiOperator, title: 'AI Resume Matching', lines: ['Get matched with the', 'night jobs using', 'AI technology'] },
  { icon: educationCap, title: 'Training & Skill Readiness', lines: ['Build in-demand skills', 'with industry-relevant', 'training programs.'] },
  { icon: analytics, title: 'Placement Analytics', lines: ['Track performance and', 'make date-driven', 'decisions'] },
  { icon: userFriends, title: 'For Every User', lines: ['Tailored benefits for', 'job seekers, recruiters', 'and training institutions'] },
]

const testimonials = [
  {
    avatar: avatarOne,
    name: 'Sarah Chen',
    role: 'Product Designer @ Aura Systems',
    quote: ['"ConnectHire transformed my job search. The AI', 'matching felt intuitive, and within two weeks, I was', 'interviewed and hired by my dream company in', 'fintech. The process was seamless."'],
  },
  {
    avatar: avatarTwo,
    name: 'Jhon Francis',
    role: 'Recruitment Manager @ Vertex Solutions',
    quote: ['"The community gave me the confidence to showcase', 'my work and connect with amazing peoples.I got my', 'first full-time offer within 6 months.The support and', 'guidance here are unmatched."'],
  },
  {
    avatar: avatarThree,
    name: 'David Miller',
    role: 'Talent Director @ Zenith Capital',
    quote: ['"The quality of candidates on ConnectHire is', 'unmatched. We reduced our time-to-hire by 40%', 'and have found some of our most productive team', 'members through their automated screening."'],
  },
]

const companies = [
  { src: grok, alt: 'Grok', w: 120 },
  { src: wipro, alt: 'Wipro', w: 80 },
  { src: qwen, alt: 'Qwen', w: 100 },
  { src: deepseek, alt: 'DeepSeek', w: 160 },
  { src: infosys, alt: 'Infosys', w: 70 },
  { src: claude, alt: 'Claude', w: 140 },
  { src: openai, alt: 'OpenAI', w: 122 },
]

const LandingPage = () => {
  const navigate = useNavigate()

  const handleNavClick = (link) => {
    if (link.route) {
      navigate(link.route)
      return
    }
    document.getElementById(link.target)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="LandingPage-page" id="LandingPage-page">
      {/* ===== Nav bar ===== */}
      <div className="LandingPage-nav">
        <div className="LandingPage-brand">
          <img className="LandingPage-brandIcon" src={logoIcon} alt="logo" />
          <p className="LandingPage-brandText">
            Placement &amp;<br />
            Recruitment Platform
          </p>
        </div>
        <div className="LandingPage-navLinks">
          {navLinks.map((link, index) => (
            <div
              key={link.label}
              className={`LandingPage-navLink LandingPage-navLink${index}${index === 0 ? ' LandingPage-navLinkActive' : ''}`}
              onClick={() => handleNavClick(link)}
            >
              {link.label}
            </div>
          ))}
        </div>
        <div className="LandingPage-navButtons">
          <button className="LandingPage-loginBtn" onClick={() => navigate(ROUTES.login)}>Login</button>
          <button className="LandingPage-registerBtn" onClick={() => navigate(ROUTES.register)}>Register</button>
        </div>
      </div>

      {/* ===== Hero ===== */}
      <div className="LandingPage-hero">
        <div className="LandingPage-heroText">
          <p className="LandingPage-eyebrow">BUILD YOUR FUTURE</p>
          <h1 className="LandingPage-heroTitle">
            Connect. Learn.<br />
            Get Placed.
          </h1>
          <p className="LandingPage-heroDesc">
            The all-in-one platform that bridges the gap between{' '}<br />
            talented individuals, top employers and training institutions.
          </p>
          <div className="LandingPage-heroButtons">
            <button className="LandingPage-getStartedBtn" onClick={() => navigate(ROUTES.register)}>Get Started</button>
            <button className="LandingPage-exploreBtn" onClick={() => navigate(ROUTES.login)}>Explore Jobs</button>
          </div>
        </div>
        <img className="LandingPage-heroImage" src={heroIllustration} alt="Placement illustration" />
      </div>

      {/* ===== Why choose us ===== */}
      <div className="LandingPage-features" id="LandingPage-features">
        <p className="LandingPage-featuresEyebrow">WHY CHOOSE US</p>
        <h2 className="LandingPage-featuresTitle">Everything You Need for a Successful Career</h2>
        <div className="LandingPage-featureCards">
          {features.map((item) => (
            <div key={item.title} className="LandingPage-featureCard">
              <div className="LandingPage-featureIconWrap">
                <img className="LandingPage-featureIcon" src={item.icon} alt="" />
              </div>
              <h3 className="LandingPage-featureTitle">{item.title}</h3>
              <p className="LandingPage-featureDesc">
                {item.lines.map((line) => (
                  <span key={line}>{line}<br /></span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ===== Success stories ===== */}
      <div className="LandingPage-stories" id="LandingPage-stories">
        <p className="LandingPage-storiesEyebrow">SUCCESS STORIES</p>
        <h2 className="LandingPage-storiesTitle">WHAT OUR USERS SAY</h2>
        <div className="LandingPage-storyCards">
          {testimonials.map((t) => (
            <div key={t.name} className="LandingPage-storyCard">
              <svg className="LandingPage-storyQuoteMark" viewBox="0 0 100 70" aria-hidden="true">
                <path d="M24 0C38 0 48 10 48 24C48 40 36 58 14 68H2C12 58 18 50 19 44C8 42 0 34 0 22C0 10 10 0 24 0Z" />
                <path d="M76 0C90 0 100 10 100 24C100 40 88 58 66 68H54C64 58 70 50 71 44C60 42 52 34 52 22C52 10 62 0 76 0Z" />
              </svg>
              <div className="LandingPage-storyHead">
                <img className="LandingPage-storyAvatar" src={t.avatar} alt={t.name} />
                <div className="LandingPage-storyMeta">
                  <div className="LandingPage-storyStars">★★★★★</div>
                  <p className="LandingPage-storyName">{t.name}</p>
                  <p className="LandingPage-storyRole">{t.role}</p>
                </div>
              </div>
              <p className="LandingPage-storyQuote">
                {t.quote.map((line) => (
                  <span key={line}>{line}<br /></span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ===== Trusted by ===== */}
      <div className="LandingPage-companies">
        <p className="LandingPage-companiesEyebrow">TRUSTED BY LEADING COMPANIES</p>
        <h2 className="LandingPage-companiesTitle">TOP COMPANIES HIRE HERE</h2>
        <div className="LandingPage-companyLogos">
          {companies.map((c) => (
            <div key={c.alt} className="LandingPage-companyCell">
              <img src={c.src} alt={c.alt} style={{ width: c.w, height: c.alt === 'Wipro' ? 40 : 30 }} />
            </div>
          ))}
        </div>
      </div>

      <div className="LandingPage-gap" />

      {/* ===== Footer ===== */}
      <div className="LandingPage-footer">
        <div className="LandingPage-footerColumns">
          <div className="LandingPage-footerColumn">
            <h4 className="LandingPage-footerHeading">COMPANY</h4>
            <a className="LandingPage-footerLink">About Us</a>
            <a className="LandingPage-footerLink">Careers</a>
            <a className="LandingPage-footerLink">contact</a>
          </div>
          <div className="LandingPage-footerColumn">
            <h4 className="LandingPage-footerHeading">PLATFORM</h4>
            <a className="LandingPage-footerLink">Job Postings</a>
            <a className="LandingPage-footerLink">AI Resume Matching</a>
            <a className="LandingPage-footerLink">Training &amp; skill Readiness</a>
            <a className="LandingPage-footerLink">Placement Analytics</a>
          </div>
          <div className="LandingPage-footerColumn">
            <h4 className="LandingPage-footerHeading">SUPPORT</h4>
            <a className="LandingPage-footerLink">Help Center</a>
            <a className="LandingPage-footerLink">FAQ</a>
            <a className="LandingPage-footerLink">Raise Issue</a>
            <a className="LandingPage-footerLink">Contact Support</a>
          </div>
          <div className="LandingPage-footerColumn">
            <h4 className="LandingPage-footerHeading">LEGAL</h4>
            <div className="LandingPage-legalList">
              <a className="LandingPage-legalLink">Privacy Policy</a>
              <a className="LandingPage-legalLink LandingPage-legalIndent">Terms &amp; Conditions</a>
              <a className="LandingPage-legalLink LandingPage-legalIndent">Cookie Policy</a>
            </div>
          </div>
        </div>
        <div className="LandingPage-footerDivider" />
        <div className="LandingPage-footerBottom">
          <p className="LandingPage-copyright">© 2026 Placement and Recruitment Platform.</p>
          <div className="LandingPage-social">
            <img src={facebook} alt="Facebook" />
            <img className="LandingPage-socialMono" src={twitter} alt="X" />
            <img className="LandingPage-socialMono" src={instagram} alt="Instagram" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
