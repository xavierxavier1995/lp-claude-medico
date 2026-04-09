---
name: Design Critique
description: Review visual design, UX, accessibility, and responsiveness of the landing page
type: skill
---

# Design Critique

Analyze the landing page for visual design quality, user experience, and accessibility compliance.

## Evaluation Criteria

### 1. Visual Hierarchy
- [ ] H1 is the largest and most prominent element
- [ ] Information flows logically (top to bottom, left to right)
- [ ] Color contrast distinguishes sections clearly
- [ ] Typography scale is consistent (h1 > h2 > body text)

### 2. Color & Typography
- [ ] Primary color (#007BFF blue) is accessible (WCAG AA 4.5:1 contrast)
- [ ] Text color against backgrounds meets WCAG AA (4.5:1 for body, 3:1 for large text)
- [ ] Font selection is professional and readable
- [ ] Line height and spacing aid readability

### 3. Responsive Design
- [ ] **Mobile (375px)**: Single column layout, touch-friendly buttons
- [ ] **Tablet (768px)**: Two-column grid with proper spacing
- [ ] **Desktop (1280px+)**: Full two-column layout with max-width container
- [ ] Images/content don't overflow on any viewport
- [ ] Form inputs are appropriately sized for mobile

### 4. User Experience (UX)
- [ ] CTA button is prominent and clearly clickable
- [ ] Form labels are associated with inputs (`htmlFor`)
- [ ] Placeholder text is helpful but doesn't replace labels
- [ ] Form fields are in logical order (name → contact → message)
- [ ] Submit button indicates action clearly
- [ ] Success/error states are defined (future: add toast notifications)

### 5. Accessibility (WCAG 2.1 Level AA)
- [ ] All form inputs have associated `<label>` tags
- [ ] Buttons have clear text (not just icons)
- [ ] Color is not the only way to convey information
- [ ] Focus order is logical (tab through form)
- [ ] Sufficient padding/spacing for touch targets (min 44×44px)
- [ ] Page has meaningful `<title>` and meta `description`
- [ ] Images/icons have alt text (if added)
- [ ] Form validation messages are clear

### 6. Mobile-First Approach
- [ ] Base styles target mobile (375px width)
- [ ] Breakpoints use `md:` for tablet+ (768px)
- [ ] Touch targets are 44×44px minimum
- [ ] Text is readable without zooming (16px minimum)

### 7. Performance & Loading
- [ ] No heavy images or unoptimized assets
- [ ] Tailwind CSS is production-optimized (PurgeCSS removes unused styles)
- [ ] No render-blocking resources
- [ ] Page loads quickly on slow 3G

### 8. Brand & Messaging
- [ ] Professional tone matches medical industry
- [ ] Hero section clearly communicates value
- [ ] Trust indicators present (experience, credentials, response time)
- [ ] CTA is compelling ("Solicitar agendamento")

## Quick Review Format

**Visual Design**: [Excellent | Good | Fair | Needs Work]  
**UX Flow**: [Excellent | Good | Fair | Needs Work]  
**Accessibility**: [Compliant | Minor Issues | Major Issues]  
**Mobile Experience**: [Excellent | Good | Fair | Needs Work]  

## Recommendations

After reviewing, provide:
1. **What's working well** (3-5 strengths)
2. **What needs improvement** (specific actionable items)
3. **Priority fixes** (high/medium/low impact changes)
4. **Nice-to-have enhancements** (future iterations)

## Testing Checklist

- [ ] Open DevTools and test at 375px, 768px, 1280px widths
- [ ] Tab through the form with keyboard only
- [ ] Check color contrast with WebAIM Contrast Checker
- [ ] Test on actual mobile device if possible
- [ ] Verify form validation works
- [ ] Check for layout shifts (CLS — Cumulative Layout Shift)
