# SWYNEX - Architecture README

## Monorepo Tree
swynex-accessibility-audit/
  client/ - React Frontend
  server/ - Node Express Backend
  docs/ - audit-report.md, ARCHITECTURE.md
  test/ - a11y + api tests
  README.md

## Boundaries
- Client NEVER talks to Database directly. Only via /api.
- Server NEVER returns HTML. Only JSON.
- Auth: JWT in header.

## Local Setup
Client: cd client && npm install && npm run dev - http://localhost:5173
Server: cd server && npm install && npm run dev - http://localhost:5000

## First Vertical Feature Slice
1. Login - POST /api/auth/login
2. Tab to Add Expense button - visible focus
3. Fill labelled form - POST /api/expenses
4. Dashboard updates - aria-live="polite"
5. Full flow works WITHOUT mouse.
