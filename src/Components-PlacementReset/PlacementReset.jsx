import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTES } from "../routes";
import "./PlacementReset.css";
import Placement from "../assets/PlacementResetAssets/Placement.png";
import ResearchPaper from "../assets/PlacementResetAssets/ResearchPaper.png";
import UnifiedPlatform from "../assets/PlacementResetAssets/UnifiedPlatform.png";
import ResetLink from "../assets/PlacementResetAssets/ResetLink.png";
import EmailLink from "../assets/PlacementResetAssets/EmailLink.png";
import Arrow from "../assets/PlacementResetAssets/Arrow.png";
import ResendLink from "../assets/PlacementResetAssets/ResendLink.png";


const resendWaitSeconds = 30;

function PlacementReset() {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || "your registered email";
  const [secondsLeft, setSecondsLeft] = useState(resendWaitSeconds);

  useEffect(() => {
    if (secondsLeft === 0) return undefined;

    const timerId = window.setTimeout(() => {
      setSecondsLeft((previous) => previous - 1);
    }, 1000);

    return () => window.clearTimeout(timerId);
  }, [secondsLeft]);

  const handleBackToLogin = () => {
    navigate(ROUTES.login);
  };

  const handleResendLink = () => {
    if (secondsLeft > 0) return;

    window.alert("Reset link has been resent.");
    setSecondsLeft(resendWaitSeconds);
  };

  return (
    <main className="placement-reset-page">
     
      <section className="placement-reset-left">
        <div className="placement-reset-brand">
          <div className="placement-reset-brand-logo">
            <img src={Placement} alt="Placement platform logo" />
          </div>

          <div className="placement-reset-brand-text">
            <h3>Placement & Recruitment Platform</h3>
            <div className="placement-reset-brand-meta">
              <span>Connect</span>
              <span className="placement-reset-meta-dot" aria-hidden="true" />
              <span>Discover</span>
              <span className="placement-reset-meta-dot" aria-hidden="true" />
              <span>Succeed</span>
            </div>
          </div>
        </div>

        <div className="placement-reset-heading">
          <h1>Check Your Inbox</h1>

          <p>
            We've sent a password reset link to your registered email address.
            <br />
            Follow the link to securely create a new password.
          </p>
        </div>

        <div className="placement-reset-image-area">
          <div className="placement-reset-paper-box">
            <img
              src={ResearchPaper}
              alt="Password reset illustration"
              className="placement-reset-research-paper"
            />
          </div>
        </div>

        <div className="placement-reset-quote">
          <div className="placement-reset-quote-icon">
            <img
              src={UnifiedPlatform}
              alt=""
              aria-hidden="true"
            />
          </div>

          <p>
            "A unified platform that simplifies training, placements,
            and recruitment management."
          </p>
        </div>
      </section>

      <section className="placement-reset-right">
        <div className="placement-reset-content">
          <div className="placement-reset-icon-wrapper">
            <img
              src={ResetLink}
              alt="Reset link sent"
              className="placement-reset-icon"
            />
          </div>

          <h2>Reset Link Sent!</h2>

          <p className="placement-reset-description">
            We've sent a password reset link to your email address.
          </p>

          <a
            className="placement-reset-email"
            href={`mailto:${email}`}
            aria-label={`Send email to ${email}`}
          >
            <img src={EmailLink} alt="" aria-hidden="true" />
            <span>{email}</span>
          </a>

          <p className="placement-reset-inbox-text">
            Check your inbox for the reset link.
          </p>

          <button
            type="button"
            className="placement-reset-login-btn"
            onClick={handleBackToLogin}
          >
            <span>Back to Login</span>
            <img src={Arrow} alt="" aria-hidden="true" />
          </button>

          <div className="placement-reset-resend-row">
            <span className="placement-reset-divider" aria-hidden="true" />

            <button
              type="button"
              className="placement-reset-resend-btn"
              onClick={handleResendLink}
              disabled={secondsLeft > 0}
              aria-disabled={secondsLeft > 0}
            >
              <img
                src={ResendLink}
                alt=""
                aria-hidden="true"
              />

              <span>Resend Reset Link</span>
            </button>

            <span className="placement-reset-divider" aria-hidden="true" />
          </div>

          <p
            className="placement-reset-timer"
            aria-live="polite"
          >
            {secondsLeft > 0
              ? `You can request a new link in ${secondsLeft} seconds.`
              : "You can request a new link now."}
          </p>

          <button
            type="button"
            className="placement-reset-demo-link"
            onClick={() => navigate(ROUTES.newPassword, { state: { email } })}
          >
            Demo: open the reset link from the email
          </button>

          <footer className="placement-reset-footer">
            <button type="button">Help</button>

            <span className="placement-reset-footer-dot" aria-hidden="true" />

            <button type="button">Privacy</button>

            <span className="placement-reset-footer-dot" aria-hidden="true" />

            <button type="button">Terms</button>
          </footer>
        </div>
      </section>
    </main>
  );
}

export default PlacementReset;