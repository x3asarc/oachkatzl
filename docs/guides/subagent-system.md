# Sub-Agent Research System Guide

## Overview
The Sub-Agent Research System is designed to handle complex development tasks while preserving the main agent's context window through specialized research agents that provide detailed technical analysis and implementation plans.

## System Architecture

### Core Philosophy
- **Token Optimization**: Massive research happens in isolated contexts
- **Specialization**: Expert agents for different technical domains
- **Implementation Ready**: Detailed plans that main agent can execute immediately
- **Context Preservation**: Main conversation history remains clean

### Agent Roles
- **Sub-Agent**: Research and planning only, never implements code
- **Main Agent**: Executes implementation based on sub-agent research
- **User**: Coordinates between agents and updates context

## Available Sub-Agents

### 1. Vercel Expert Agent
**Specialization**: Deployment strategies, build optimization, edge functions, serverless functions
**Knowledge Areas**:
- Next.js deployment optimization
- Environment variable management
- Domain configuration and DNS
- Build process troubleshooting
- Analytics and monitoring
- Edge and serverless functions

**Research Output**: `docs/research/vercel-analysis-[timestamp].md`

### 2. shadcn/ui Expert Agent
**Specialization**: Component implementation, theming, accessibility, form patterns
**Knowledge Areas**:
- Radix primitive integration
- Tailwind CSS customization
- Dark mode implementation
- Responsive design patterns
- Form validation and handling
- Accessibility compliance

**Research Output**: `docs/research/shadcn-analysis-[timestamp].md`

### 3. GitHub Integration Expert Agent
**Specialization**: CI/CD workflows, GitHub Actions, branch strategies, deployment automation
**Knowledge Areas**:
- Workflow optimization
- Secret management
- Automated testing pipelines
- Vercel integration
- Branch protection rules
- Release management

**Research Output**: `docs/research/github-analysis-[timestamp].md`

### 4. Full-Stack Integration Expert Agent
**Specialization**: End-to-end architecture, API design, database integration, authentication
**Knowledge Areas**:
- Next.js API routes
- Database integration patterns
- Authentication flows
- State management
- Security best practices
- Performance optimization

**Research Output**: `docs/research/fullstack-analysis-[timestamp].md`

## Workflow Process

### Phase 1: Task Preparation
1. **Update Current Context**
   ```
   docs/task/current-context.md
   ```
   - Define the specific challenge
   - Set expected outcomes
   - Note any constraints
   - Update project current state

2. **Activate Sub-Agent**
   - Specify which expert agent is needed
   - Provide clear problem statement
   - Reference context file location

### Phase 2: Research Phase (Sub-Agent)
1. **Context Analysis**
   - Read `docs/task/current-context.md` thoroughly
   - Understand project constraints and requirements
   - Review existing codebase structure

2. **Specialized Research**
   - Conduct deep technical research in specialty area
   - Review latest documentation and best practices
   - Identify potential solutions and approaches
   - Plan implementation strategy

3. **Research Documentation**
   - Create comprehensive research report
   - Include step-by-step implementation plan
   - Document all dependencies and configurations
   - Anticipate challenges and provide solutions

4. **Brief Response**
   - Respond with only filename and key points
   - Preserve main conversation tokens
   - Clear instructions for next steps

### Phase 3: Implementation Phase (Main Agent)
1. **Research Review**
   - Read detailed research report
   - Understand implementation plan
   - Verify all requirements are addressed

2. **Execute Implementation**
   - Follow step-by-step plan from research
   - Implement code changes
   - Configure necessary settings
   - Test functionality

3. **Context Update**
   - Update `docs/task/current-context.md`
   - Mark research as implemented
   - Document any changes or issues
   - Prepare for next task

## File Structure

```
docs/
├── task/
│   ├── current-context.md      # ALWAYS update before/after tasks
│   └── requirements.md         # Additional requirements if needed
├── research/
│   ├── vercel-analysis-YYYYMMDD-HHMMSS.md
│   ├── shadcn-analysis-YYYYMMDD-HHMMSS.md
│   ├── github-analysis-YYYYMMDD-HHMMSS.md
│   └── fullstack-analysis-YYYYMMDD-HHMMSS.md
└── guides/
    ├── subagent-system.md      # This guide
    ├── vercel-troubleshooting.md
    └── shadcn-guide.md
```

## Research Report Template

All sub-agents must use this structure:

```markdown
# [Specialty] Research Report - [YYYY-MM-DD HH:MM:SS]

## Executive Summary
- **Problem**: [Brief description]
- **Recommended Solution**: [High-level approach]
- **Implementation Complexity**: [Low/Medium/High]
- **Estimated Time**: [Time estimate]

## Technical Analysis
### Current State Assessment
[Analysis of existing implementation]

### Recommended Approach
[Detailed technical recommendations]

### Implementation Plan
1. [Step 1 with specific actions]
2. [Step 2 with specific actions]
3. [Continue...]

### Code Structure Recommendations
[Detailed file structure and architecture]

### Configuration Requirements
[Specific config files and settings needed]

### Dependencies
[Required packages and versions]

### Testing Strategy
[How to validate the implementation]

### Potential Issues & Solutions
[Anticipated challenges and mitigation strategies]

### Performance Considerations
[Optimization recommendations]

### Security Considerations
[Security best practices to follow]

## Implementation Commands
[Exact commands to run]

## Verification Steps
[How to confirm implementation worked]

## Next Steps for Implementation
[Clear instructions for the main agent]

## Context Update Requirements
[What to update in current-context.md]

## References
[Sources and documentation links]
```

## Context Management Rules

### Before Starting Research
- **ALWAYS** read `docs/task/current-context.md` first
- Verify current project state
- Understand existing constraints
- Note any previous research files

### After Completing Implementation
- **ALWAYS** update `docs/task/current-context.md`
- Mark research as completed
- Update "Last Completed Task" section
- Document any new issues or changes
- Link to research file in "Research History"

### Context Update Template
```markdown
## Last Completed Task
- **Date**: [Implementation Date]
- **Task**: [What was implemented]
- **Research File**: [Link to research document]
- **Files Modified**: [List of changed files]
- **Status**: [Success/Partial/Issues]

## Research History
- **Last Research**: [Task description]
- **Research File**: docs/research/[filename].md
- **Implementation Status**: [Completed/In Progress/Blocked]
```

## Usage Examples

### Activating Vercel Expert Agent
```
Context updated in docs/task/current-context.md. Need Vercel Expert Agent to research deployment optimization for our Next.js property rental site. Site is experiencing slow build times and need edge function implementation for contact form.
```

### Activating shadcn/ui Expert Agent
```
Context ready in docs/task/current-context.md. Need shadcn/ui Expert Agent to research implementing a multi-step booking form with date picker, guest selection, and payment integration using shadcn components.
```

### Activating GitHub Integration Expert Agent
```
Context prepared in docs/task/current-context.md. Need GitHub Integration Expert Agent to research setting up automated testing and deployment pipeline from GitHub to Vercel with proper secret management.
```

## Best Practices

### For Users
1. Always update context before requesting research
2. Be specific about the challenge and expected outcome
3. Update context after implementation is complete
4. Reference previous research files when relevant

### For Sub-Agents
1. Always read context first, never assume
2. Research comprehensively - better to over-research
3. Provide specific, actionable implementation plans
4. Anticipate common issues and provide solutions
5. Keep final response brief to save tokens

### For Main Agents
1. Always read the research file completely before implementing
2. Follow the step-by-step plan precisely
3. Update context after implementation
4. Flag any deviations from the research plan

## Success Metrics

- **Token Efficiency**: Research happens in isolated contexts
- **Implementation Success**: Main agent can execute without additional research
- **Context Preservation**: Conversation history stays focused
- **Knowledge Retention**: Research files serve as project documentation
- **Consistency**: Standardized process across all agent types

## Troubleshooting

### Common Issues
1. **Context not updated**: Always check `docs/task/current-context.md` is current
2. **Research too vague**: Ensure implementation plans are specific and actionable
3. **Missing dependencies**: Research must include all required packages
4. **Context drift**: Regular context updates prevent information loss

### Emergency Procedures
- If context is lost, reconstruct from recent research files
- If implementation fails, refer back to research document
- If research is incomplete, activate same sub-agent with updated context

---
*This system ensures efficient, specialized research while maintaining clean conversation contexts and providing actionable implementation guidance.*