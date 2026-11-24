# SWYNEX Accessibility Audit Report - Task 2
**Site Audited:** https://www.irctc.co.in
**Date:** 24 Nov 2026 | **Method:** 1) Lighthouse Audit 2) Keyboard-Only Pass - No Mouse Used

## Lighthouse Scores
| Category | Score |
| Performance | 42 / 100 |
| Accessibility | 78 / 100 |
| Best Practices | 71 / 100 |
| SEO | 84 / 100 |

## Keyboard Navigation Test
Test: Tab from Home -> Login -> From Station -> Date Picker -> Search
Result: FAILED - User gets stuck in Date Picker, focus disappears, Login modal cannot be closed with Esc.

## 5 Issues

### Issue 1 - Low Colour Contrast - P0 HIGH
Evidence: Grey text #8A8A8A on white in train list. Lighthouse: "Background and foreground colors do not have sufficient contrast ratio"
WCAG: 1.4.3 Contrast Minimum (AA) - Needs 4.5:1, site has 2.8:1
Fix: Use #1A1A1A text on #FFFFFF.

### Issue 2 - Images Without Alt Text - P0 HIGH
Evidence: 14 banner images have alt="" or missing alt. Lighthouse: "Image elements do not have [alt] attributes"
WCAG: 1.1.1 Non-text Content (A)
Fix: Every img must have alt="description".

### Issue 3 - No Skip To Main Content Link - P1 MEDIUM
Evidence: Tab goes through 40+ header links before main search. No skip link.
WCAG: 2.4.1 Bypass Blocks (A)
Fix: Added in App.jsx: <a href="#main">Skip to main content</a>

### Issue 4 - Form Inputs Without Labels - P0 HIGH
Evidence: From, To, Date inputs use placeholder only, no label. Screen reader says "edit text blank".
WCAG: 1.3.1 + 3.3.2 Labels (A)
Fix: Every input has <label htmlFor="...">.

### Issue 5 - Keyboard Trap + No Visible Focus - P0 CRITICAL
Evidence: Date picker traps Tab, cannot exit. CSS has outline:none, focus invisible.
WCAG: 2.1.2 No Keyboard Trap + 2.4.7 Focus Visible
Fix: Never use outline:none. Use :focus-visible { outline: 2px solid #2563EB; }. Modal closes with Esc.
