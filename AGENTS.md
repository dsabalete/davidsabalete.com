# AGENTS.md - Codebase Guidelines for Agentic AI

This document provides guidelines for AI agents working on this codebase.

## Project Overview

This is a personal portfolio website built with **Nuxt 4**, **Vue 3**, **TypeScript**, and **Tailwind CSS**. The site showcases professional experience, projects, and skills with internationalization support (EN, ES, CA).

## Build, Lint, and Test Commands

```bash
# Development
npm run dev          # Start development server at localhost:3000

# Build
npm run build        # Build for production (nuxt build)
npm run generate     # Static site generation (nuxt generate)
npm run preview      # Preview production build

# Linting
npm run lint         # Run ESLint on all JS/TS/Vue files
npm run lint:fix     # Run ESLint with auto-fix

# Testing (Vitest)
npm run test         # Run tests in watch mode
npm run test:run     # Run tests once (CI mode)
npm run test:ui      # Run tests with UI dashboard
npm run test:coverage # Run tests with coverage report

# Single test file
npx vitest run tests/utils/index.test.ts

# Single test (use .only for temporary focus)
npx vitest run --testNamePattern="should format"
```

## Code Style Guidelines

### General Principles

- **No comments** in production code unless explaining complex business logic
- **No emojis** in code (comments, commit messages, etc.)
- **Concise, direct** communication and documentation
- Use **TypeScript** for all new TypeScript files

### Formatting

- **Prettier** is the primary formatter
- **No semicolons** at line ends
- **No trailing commas** in objects/arrays
- **Print width**: 120 characters
- **Tab size**: 2 spaces
- **Single quotes** for strings

### Vue Component Structure

```vue
<template>
  <!-- Template content with self-closing void elements -->
  <div />
</template>

<script setup lang="ts">
// Composition API with <script setup>
// Auto-imported composables available directly
</script>
```

### Imports and Auto-imports

Nuxt auto-imports the following without explicit imports:
- Composables from `composables/`
- Utils from `utils/`
- API helpers from `server/utils/`
- Vue's `ref`, `computed`, `watch`, etc.

Explicit imports required for:
- Vue components (though auto-registered in `components/`)
- Third-party libraries
- Type definitions

### TypeScript Conventions

- Use **explicit return types** for functions, especially utilities
- Use **interface** for object shapes, **type** for unions/primitives
- Avoid `any` - use `unknown` with type narrowing instead
- Use **PascalCase** for types and interfaces
- Use **camelCase** for variables and functions

### Naming Conventions

| Type | Convention | Example |
|------|------------|---------|
| Components | PascalCase | `ThemeToggle.vue`, `ProjectsSection.vue` |
| Composables | camelCase | `useColorMode.ts` |
| Utils | camelCase | `formatDate()`, `parseConfig()` |
| Variables | camelCase | `isLoading`, `userList` |
| Constants | SCREAMING_SNAKE_CASE | `MAX_RETRY_COUNT` |
| Types/Interfaces | PascalCase | `Project`, `ResumeItemProps` |
| CSS classes | kebab-case (Tailwind) | `bg-gray-100`, `dark:hover:bg-gray-800` |

### Error Handling

- Use **try/catch** with specific error handling
- Return **meaningful error messages** for user-facing errors
- Log errors appropriately for debugging
- Validate inputs with **Zod** schemas where applicable (already included as dependency)

### Tailwind CSS

- Use **utility classes** directly in templates
- Support **dark mode** with `dark:` prefix
- Use **responsive** prefixes (`sm:`, `md:`, `lg:`, `xl:`)
- Use **transition-colors** and **duration-200/300** for smooth transitions

### Internationalization (i18n)

- Translation files in `locales/` directory
- Keys: EN (en.json), ES (es.json), CA (ca.json)
- Use `$t()` or translation composables for user-facing text
- SEO metadata already configured for each locale

### Vue 3 Composition API

- Prefer `<script setup lang="ts">` for components
- Use **Composables** for shared logic (in `composables/`)
- Use **Props** with TypeScript interfaces for component inputs
- Use **defineEmits** for event declarations
- Use **ClientOnly** for client-side only components (like ThemeToggle icons)

### Testing with Vitest

- Test files: `*.test.ts` alongside source files or in `tests/`
- Use **describe/it/expect** from vitest
- Use **Vue Test Utils** for component testing
- Test environment: **happy-dom**
- Global APIs available (no imports needed)

### Directory Structure

```
├── components/      # Vue components (auto-imported)
├── composables/     # Vue composables (auto-imported)
├── utils/           # Utility functions (auto-imported)
├── pages/           # Nuxt pages (file-based routing)
├── layouts/         # Page layouts
├── plugins/         # Nuxt plugins
├── server/          # Server API routes
├── content/         # Nuxt Content documents
├── tests/           # Test files
├── assets/          # Static assets (CSS, images)
├── public/          # Public static files
├── types/           # TypeScript type definitions
├── locales/         # i18n translation files
├── nuxt.config.ts   # Nuxt configuration
├── vitest.config.ts # Vitest configuration
└── tailwind.config.js
```

### Git Workflow

- Create **feature branches** for new work
- Write **clear, concise commit messages** (1-2 sentences)
- Run **lint and tests** before committing
- Use **conventional commits** format when applicable

### Key Dependencies

- **Nuxt 4** - Vue framework with SSR/SSG
- **Vue 3** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Vitest** - Testing framework
- **Zod** - Schema validation
- **Nuxt i18n** - Internationalization
- **Nuxt Content** - Markdown content management
- **Floating Vue** - UI dropdowns/popovers

### VS Code Settings

Prettier is configured as the default formatter across all file types. Format on save is enabled. Do not use format on paste or format on type to avoid conflicts.
