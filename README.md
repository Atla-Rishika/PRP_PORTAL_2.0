# PRP_PORTAL – Landing → Login / Register → Password reset

## Run
```
npm install
npm run dev
```
Open http://localhost:5173 (it redirects to the landing page).

## Routes (all paths live in `src/routes.js`)
| Page | Route | Component |
|------|-------|-----------|
| Landing | `/PRP_Portal/Landing` | Components-LandingPage/LandingPage |
| Login | `/PRP_Portal/Login` | Components-Login/CommonLoginScreen |
| Register | `/PRP_Portal/Register` | Components-RecruiterRegistration/RecruiterRegistration |
| Forgot password | `/PRP_Portal/ForgotPassword` | Components-ForgotPassword/ForgotPassword |
| Reset link sent | `/PRP_Portal/ResetLinkSent` | Components-PlacementReset/PlacementReset |
| New password | `/PRP_Portal/NewPassword` | Components-NewPassword/NewPassword |
| Reset success | `/PRP_Portal/ResetSuccess` | Components-SuccessfulPage/SuccessfulPage |

`/` and any unknown URL redirect to the Landing page.

## Flow
```
                        ┌──────────────► Login ──► Forgot Password ► Reset Link Sent ► New Password ► Success ─┐
Landing ── Login btn ───┘                 ▲  │                                                                │
   │       Explore Jobs                   │  └── "Create Account" ──┐                                         │
   │                                      │                         ▼                                         │
   └─ Register / Get Started /       Login link / after submit ◄── Register                                   │
      For Recruiters / Institutions ───────────────────────────────►                                         │
                                                                                                              │
   Login ◄──────────────────────────────────────────────────────────────────────── Back to Login ◄───────────┘
   Logo (Login / Register) ──► Landing
```

| From | Action | Goes to |
|------|--------|---------|
| Landing | Login, Explore Jobs | Login |
| Landing | Register, Get Started, For Recruiters/Employers, For Training Institutions | Register |
| Landing | Home / Features / Success Stories | smooth-scroll to that section |
| Login | Create Account | Register |
| Login | Forgot Password? | Forgot Password (then the existing reset flow) |
| Login / Register | logo / brand | Landing |
| Register | Login link, or successful submit | Login |

## Notes
- Landing page is responsive (exact 1920px design, scales down, stacks on tablet/mobile).
- Open Sans is bundled through `@fontsource/open-sans`, imported in `src/main.jsx`.
- Login "Sign In" and Register submit still only validate / `console.log`; there is no dashboard route yet.
