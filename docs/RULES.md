# IRONFORGE FITNESS — Development Rules

## 1. General Rule

Before modifying the project, read:

- `docs/PROJECT.md`
- `docs/RULES.md`
- `docs/PROGRESS.md`

If a feature specification exists, read the relevant feature specification as well.

Do not start coding before understanding the existing project.

---

# 2. Feature Scope

Implement only the feature requested by the current task.

Do not:

- Start unrelated features
- Rewrite unrelated components
- Change the entire architecture unnecessarily
- Remove working functionality without a reason
- Install unnecessary dependencies

If an unrelated problem is discovered, report it instead of silently changing it.

---

# 3. One Feature at a Time

The project should be developed incrementally.

Preferred workflow:

1. Read requirements
2. Inspect existing implementation
3. Create plan
4. Ask for approval when appropriate
5. Implement
6. Test
7. Fix
8. Verify
9. Update progress
10. Report changes

Do not combine many major features into one implementation unless explicitly requested.

---

# 4. Existing Code

Before editing a file:

- Read the relevant existing code.
- Understand how it works.
- Preserve existing functionality.
- Make the smallest reasonable change.

Do not replace working code with a completely different implementation without explaining why.

---

# 5. Code Quality

Code should be:

- Readable
- Maintainable
- Consistent
- Modular
- Properly formatted
- Meaningfully named

Avoid:

- Unnecessary duplication
- Huge functions
- Huge components
- Unused variables
- Unused imports
- Dead code
- Excessive comments
- Magic numbers where avoidable

---

# 6. HTML Rules

Use:

- Semantic HTML5
- Proper heading hierarchy
- Accessible forms
- Meaningful class names
- Proper button elements
- Proper navigation elements

Avoid:

- Excessive div nesting
- Inline JavaScript
- Large amounts of inline CSS
- Invalid HTML

---

# 7. CSS Rules

Use:

- CSS variables
- Flexbox
- CSS Grid
- Media queries
- Reusable styles
- Consistent spacing

Avoid:

- `!important` unless necessary
- Excessive absolute positioning
- Duplicate styles
- Extremely long selectors
- Random arbitrary values everywhere

Maintain responsive behavior.

---

# 8. JavaScript Rules

Use:

- Modern JavaScript
- `const` and `let`
- Functions with clear responsibilities
- Event listeners
- Input validation
- Defensive programming

Avoid:

- Global variables unless necessary
- `eval()`
- Unnecessary libraries
- Duplicate event handlers
- Unhandled errors

---

# 9. React Rules

When working on the React version:

- Use functional components.
- Use meaningful component names.
- Keep components reasonably small.
- Use props for reusable data.
- Use state only when necessary.
- Avoid unnecessary state.
- Avoid unnecessary effects.
- Keep reusable data separate from UI where appropriate.

Do not put the entire application into `App.jsx`.

---

# 10. Dependencies

Do not install a dependency unless:

1. It is actually needed.
2. The reason is clear.
3. It fits the project.

Before installing a package, explain:

- What it does
- Why it is needed
- Whether it can be implemented without it

---

# 11. Security

Never:

- Expose API keys
- Hardcode passwords
- Commit secrets
- Add suspicious scripts
- Run destructive commands without approval

Do not delete large numbers of files without explicit confirmation.

---

# 12. Commands

Before running potentially destructive commands, ask for approval.

Examples requiring caution:

- File deletion
- Database deletion
- Package removal
- Git reset
- Git clean
- System configuration changes

Prefer safe commands.

---

# 13. Testing

After implementing a feature:

- Run relevant tests.
- Check the browser console.
- Check for compilation errors.
- Check broken imports.
- Test the feature manually where possible.
- Check that unrelated functionality still works.

Never mark a feature complete only because the code was written.

---

# 14. Bug Fixing

When a bug occurs:

1. Reproduce the problem.
2. Inspect relevant code.
3. Identify the root cause.
4. Explain the cause.
5. Implement the smallest appropriate fix.
6. Test the fix.
7. Check for regressions.

Do not randomly change multiple files hoping the problem disappears.

---

# 15. Progress Tracker

`docs/PROGRESS.md` is the project status source.

Use these states:

- `[ ]` Not started
- `[~]` In progress
- `[x]` Implemented and verified
- `[!]` Blocked / needs attention

Never mark a task `[x]` unless it has been implemented and verified.

---

# 16. Progress Updates

After successfully completing a feature:

Update:

`docs/PROGRESS.md`

Include:

- What was implemented
- Important files changed
- Testing performed
- Any known limitations

Do not rewrite unrelated progress information.

---

# 17. User Approval

The developer/user has final authority.

If there is uncertainty about:

- Architecture
- Major dependency
- Data model
- Destructive action
- Major visual redesign
- Security-sensitive change

Ask before proceeding.

---

# 18. Explain Important Changes

After completing a significant feature, provide a short summary:

### What changed
List the files/features changed.

### Why
Explain the design decision.

### Testing
Explain what was tested.

### Known issues
Mention anything remaining.

---

# 19. Do Not Pretend

Never claim:

- A test passed when it was not run.
- A file was created when it was not created.
- A bug was fixed when it was not verified.
- A feature works when it was not tested.

If something fails, report the failure honestly.

---

# 20. Learning Mode

This project is also being used to learn AI-assisted development.

When requested, explain:

- Why a solution was chosen.
- What the important code does.
- What alternatives exist.
- What concepts the implementation demonstrates.

Do not unnecessarily explain every line unless specifically requested.

---

# 21. Final Rule

Quality is more important than speed.

Prefer:

Small feature → test → review → commit

over:

Large implementation → difficult debugging → uncertain state.