# AI-assisted Todo Full-Stack Web Application Constitution

<!-- Sync Impact Report
Version change: 1.0.0 (new constitution)
Added sections: Core Principles, Technology Stack, Development Workflow, Security Standards, Governance
Templates requiring updates: ✅ plan-template.md, ✅ spec-template.md, ✅ tasks-template.md
Follow-up TODOs: None
-->

## Core Principles

### I. Spec-Driven Development
All implementation must derive strictly from written specifications. No manual coding allowed - all development must follow the Spec → Plan → Tasks → Code workflow using the Agentic Dev Stack.

### II. Agentic Workflow Purity
All development tasks must be executed through specialized agents (Auth Agent, Frontend Agent, Backend Agent, DB Agent). Agents must prioritize MCP tools and CLI commands for all operations.

### III. Security by Design
Authentication, authorization, and user isolation must be enforced at every layer. JWT tokens are required for all API access. User data isolation is mandatory and enforced server-side.

### IV. Deterministic Behavior
API responses and state transitions must be predictable and consistent. RESTful API design conventions must be followed strictly.

### V. Production Realism
Development must use real databases, real authentication, and real deployment constraints. Environment configuration must be explicit and reproducible.

### VI. Decoupled Architecture
Frontend and backend must remain independent services communicating only through defined RESTful APIs. No direct database access from frontend.

## Technology Stack

**Frontend**: Next.js 16+ (App Router) - Responsive UI components, client-side routing, and API integration
**Backend**: Python FastAPI - RESTful API endpoints, business logic, and JWT authentication middleware
**ORM**: SQLModel - Database schema management and object-relational mapping
**Database**: Neon Serverless PostgreSQL - Persistent data storage with automatic scaling
**Authentication**: Better Auth with JWT tokens - User signup/signin and session management
**Development Framework**: Claude Code + Spec-Kit Plus - Agentic development workflow

## Development Workflow

1. **Specification**: Write comprehensive feature specifications following the spec template
2. **Planning**: Generate architectural plans using the plan template and /sp.plan command
3. **Task Breakdown**: Create testable tasks using the tasks template and /sp.tasks command
4. **Implementation**: Execute tasks using specialized agents (Auth, Frontend, Backend, DB)
5. **Validation**: Ensure all changes are spec-driven, traceable, and meet acceptance criteria

## Security Standards

- **Authentication**: JWT tokens required for all API access via Authorization: Bearer header
- **Authorization**: Token verification handled in backend middleware using shared secret
- **Data Isolation**: Task ownership validated on every read/write operation
- **Error Handling**: Requests without valid JWT must return 401 Unauthorized
- **Secrets Management**: Shared secrets configured via environment variables, never hardcoded

## Governance

This constitution supersedes all other development practices. Amendments require:
- Documentation of changes and rationale
- Approval through the /sp.constitution command
- Migration plan for existing implementations
- Version update following semantic versioning rules

All PRs and code reviews must verify compliance with these principles. Complexity must be justified and documented.

**Version**: 1.0.0 | **Ratified**: 2026-01-24 | **Last Amended**: 2026-01-24
