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
import quoteMark from '../assets/LandingPageAssets/quoteMark.png'
import ratingStars from '../assets/LandingPageAssets/ratingStars.png'
import facebook from '../assets/LandingPageAssets/facebook.png'
import xIcon from '../assets/LandingPageAssets/xIcon.png'
import instagram from '../assets/LandingPageAssets/instagram.png'

const navLinks = [
  { label: 'Home', target: 'LandingpagePage' },
  { label: 'Features', target: 'LandingpageFeatures' },
  { label: 'For Recruiters/Employers', route: ROUTES.register },
  { label: 'For Training Institutions', route: ROUTES.register },
  { label: 'Success Stories', target: 'LandingpageStories' },
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
    <div className="LandingpagePage" id="LandingpagePage">
      <div className="LandingpageNav">
        <div className="LandingpageBrand">
          <img className="LandingpageBrandIcon" src={logoIcon} alt="logo" />
          <p className="LandingpageBrandText">
            Placement &<br />
            Recruitment Platform
          </p>
        </div>
        <div className="LandingpageNavLinks">
          {navLinks.map((link, index) => (
            <div
              key={link.label}
              className={`LandingpageNavLink LandingpageNavLink${index}${index === 0 ? ' LandingpageNavLinkActive' : ''}`}
              onClick={() => handleNavClick(link)}
            >
              {link.label}
            </div>
          ))}
        </div>
        <div className="LandingpageNavButtons">
          <button className="LandingpageLoginBtn" onClick={() => navigate(ROUTES.login)}>Login</button>
          <button className="LandingpageRegisterBtn" onClick={() => navigate(ROUTES.register)}>Register</button>
        </div>
      </div>

      <div className="LandingpageHero">
        <div className="LandingpageHeroText">
          <p className="LandingpageEyebrow">BUILD YOUR FUTURE</p>
          <h1 className="LandingpageHeroTitle">
            Connect. Learn.<br />
            Get Placed.
          </h1>
          <p className="LandingpageHeroDesc">
            The all-in-one platform that bridges the gap between{' '}<br />
            talented individuals, top employers and training institutions.
          </p>
          <div className="LandingpageHeroButtons">
            <button className="LandingpageGetStartedBtn" onClick={() => navigate(ROUTES.register)}>Get Started</button>
            <button className="LandingpageExploreBtn" onClick={() => navigate(ROUTES.login)}>Explore Jobs</button>
          </div>
        </div>
        <img className="LandingpageHeroImage" src={heroIllustration} alt="Placement illustration" />
      </div>

      <div className="LandingpageFeatures" id="LandingpageFeatures">
        <p className="LandingpageFeaturesEyebrow">WHY CHOOSE US</p>
        <h2 className="LandingpageFeaturesTitle">Everything You Need for a Successful Career</h2>
        <div className="LandingpageFeatureCards">
          {features.map((item) => (
            <div key={item.title} className="LandingpageFeatureCard">
              <div className="LandingpageFeatureIconWrap">
                <img className="LandingpageFeatureIcon" src={item.icon} alt="" />
              </div>
              <h3 className="LandingpageFeatureTitle">{item.title}</h3>
              <p className="LandingpageFeatureDesc">
                {item.lines.map((line) => (
                  <span key={line}>{line}<br /></span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="LandingpageStories" id="LandingpageStories">
        <p className="LandingpageStoriesEyebrow">SUCCESS STORIES</p>
        <h2 className="LandingpageStoriesTitle">WHAT OUR USERS SAY</h2>
        <div className="LandingpageStoryCards">
          {testimonials.map((t) => (
            <div key={t.name} className="LandingpageStoryCard">
              <img className="LandingpageStoryQuoteMark" src={quoteMark} alt="" />
              <div className="LandingpageStoryHead">
                <img className="LandingpageStoryAvatar" src={t.avatar} alt={t.name} />
                <div className="LandingpageStoryMeta">
                  <img className="LandingpageStoryStars" src={ratingStars} alt="5 star rating" />
                  <p className="LandingpageStoryName">{t.name}</p>
                  <p className="LandingpageStoryRole">{t.role}</p>
                </div>
              </div>
              <p className="LandingpageStoryQuote">
                {t.quote.map((line) => (
                  <span key={line}>{line}<br /></span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="LandingpageCompanies">
        <p className="LandingpageCompaniesEyebrow">TRUSTED BY LEADING COMPANIES</p>
        <h2 className="LandingpageCompaniesTitle">TOP COMPANIES HIRE HERE</h2>
        <div className="LandingpageCompanyLogos">
          {companies.map((c) => (
            <div key={c.alt} className="LandingpageCompanyCell">
              <img src={c.src} alt={c.alt} style={{ width: c.w, height: c.alt === 'Wipro' ? 40 : 30 }} />
            </div>
          ))}
        </div>
      </div>

      <div className="LandingpageGap" />

      <div className="LandingpageFooter">
        <div className="LandingpageFooterColumns">
          <div className="LandingpageFooterColumn">
            <h4 className="LandingpageFooterHeading">COMPANY</h4>
            <a className="LandingpageFooterLink">About Us</a>
            <a className="LandingpageFooterLink">Careers</a>
            <a className="LandingpageFooterLink">contact</a>
          </div>
          <div className="LandingpageFooterColumn">
            <h4 className="LandingpageFooterHeading">PLATFORM</h4>
            <a className="LandingpageFooterLink">Job Postings</a>
            <a className="LandingpageFooterLink">AI Resume Matching</a>
            <a className="LandingpageFooterLink">Training & skill Readiness</a>
            <a className="LandingpageFooterLink">Placement Analytics</a>
          </div>
          <div className="LandingpageFooterColumn">
            <h4 className="LandingpageFooterHeading">SUPPORT</h4>
            <a className="LandingpageFooterLink">Help Center</a>
            <a className="LandingpageFooterLink">FAQ</a>
            <a className="LandingpageFooterLink">Raise Issue</a>
            <a className="LandingpageFooterLink">Contact Support</a>
          </div>
          <div className="LandingpageFooterColumn">
            <h4 className="LandingpageFooterHeading">LEGAL</h4>
            <div className="LandingpageLegalList">
              <a className="LandingpageLegalLink">Privacy Policy</a>
              <a className="LandingpageLegalLink LandingpageLegalIndent">Terms & Conditions</a>
              <a className="LandingpageLegalLink LandingpageLegalIndent">Cookie Policy</a>
            </div>
          </div>
        </div>
        <div className="LandingpageFooterDivider" />
        <div className="LandingpageFooterBottom">
          <p className="LandingpageCopyright">© 2026 Placement and Recruitment Platform.</p>
          <div className="LandingpageSocial">
            <img src={facebook} alt="Facebook" />
            <img className="LandingpageSocialMono" src={xIcon} alt="X" />
            <img className="LandingpageSocialMono" src={instagram} alt="Instagram" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
