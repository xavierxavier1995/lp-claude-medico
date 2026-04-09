# Landing Medico — Project Configuration

## Project Overview

**Type**: Doctor's Landing Page  
**Framework**: Next.js 16 + React 19 + Tailwind CSS 4  
**Build Status**: ✅ Passing (0 vulnerabilities)  
**Git**: https://github.com/xavierxavier1995/claude-teste

## Core Rules

1. **Do what's asked** — no scope creep
2. **Never commit `.env`, `*.key`, or secrets**
3. **Run `/quality` before any push to GitHub**
4. **Prefer editing over creating new files**
5. **Test before marking tasks complete**

## Available Skills (Project-Specific)

### `/design-critique`
Review visual design, UX, and accessibility:
- Typography & color hierarchy
- Responsive design (mobile/tablet/desktop)
- WCAG accessibility compliance
- User experience flow
- Touch target sizing (44×44px minimum)

**When to use**: Before major design changes, before launch

### `/marketing-seo`
SEO and marketing optimization:
- Page title & meta description review
- Open Graph tags (social sharing)
- Schema.org structured data
- Keyword analysis
- Conversion rate optimization
- Local SEO setup

**When to use**: Before Vercel deployment, before linking from Google Ads

## Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| Next.js | 16.2.3 | React framework with SSR |
| React | 19.2.4 | UI components |
| Tailwind | 4 | Utility-first CSS |
| TypeScript | 5 | Type safety |

## Build & Deploy

```bash
# Development
npm run dev              # http://localhost:3000

# Production
npm run build            # Compile for Vercel
npm run start            # Start production server

# Quality checks
npm run lint             # ESLint validation
/quality                 # Full quality gates
/security-scan           # Security audit
```

## Files to Never Edit

- `node_modules/` — dependency lock
- `.next/` — build artifacts
- `next.config.ts` — unless changing Next.js behavior
- Generated files under `src/generated/` (if added later)

## Sensitive Files to Protect

If adding a backend:
- `.env.local` — local secrets (never commit)
- `.env.production` — production secrets (Vercel dashboard only)
- `*.key`, `*.pem` — private keys

Hook `block-sensitive-files.sh` will prevent accidental commits.

## Quality Gates (Automated)

7 quality gates run before each commit:

1. ✅ **Secrets detection** (gitleaks) — blocks commit on secrets found
2. ✅ **Linting** (ESLint) — code style validation
3. ✅ **Type checking** (TypeScript) — caught at build time
4. ✅ **Format** (Prettier) — auto-formatted on save
5. ✅ **Tests** — run automatically after source edits
6. ✅ **Performance** — delegated to `/quality` command
7. ✅ **Security** — SAST + dependency scanning

## Git Workflow

**Branch**: `master`  
**Remote**: `origin` (GitHub)

```bash
# Before pushing
/quality                 # Run all gates

# Commit format
git commit -m "feat: description

Detailed explanation if needed.

Co-Authored-By: Claude <noreply@anthropic.com>"
```

## Deployment Checklist

Before pushing to Vercel:

- [ ] Run `/quality` — all gates pass
- [ ] Run `/security-scan` — no secrets/vulnerabilities
- [ ] Update metadata (`layout.tsx`): title, description
- [ ] Test responsive design (mobile/tablet/desktop)
- [ ] Verify form submissions (will be implemented with backend)
- [ ] Git push to origin/master
- [ ] Vercel auto-deploys on push

## Future Enhancements

### Phase 1 (Current)
- ✅ Landing page structure
- ✅ Form layout & validation
- ⏳ Backend API integration (Node.js/Python)

### Phase 2 (After Backend)
- Email notifications on form submission
- Doctor calendar/availability widget
- Patient testimonials section
- Blog/articles (SEO content)
- Admin dashboard

### Phase 3 (Growth)
- Multi-location support
- Appointment booking system
- Patient portal
- Payment integration
- Analytics dashboard

## Contact & Troubleshooting

**Questions about this project?**
- Check `.claude/skills/` for available tools
- Run `/context` to re-analyze the project
- Review `~/.claude/rules/` for general guidelines

**Framework documentation:**
- `~/.claude/CLAUDE.md` — global configuration
- `~/.claude/rules/` — 8 modular policy files
- `~/dotfiles/` — version control for all config
