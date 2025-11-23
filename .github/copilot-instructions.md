# Copilot Instructions for folio-one

## Project Overview

This is a UI portfolio application built with React, TypeScript, Vite, and Tailwind CSS. It showcases modern web development practices with motion animations and a component-based architecture.

## Technology Stack

- **Framework**: React 19.1.1
- **Language**: TypeScript 5.9.3
- **Build Tool**: Vite 7.1.7
- **Styling**: Tailwind CSS 4.1.16 with @tailwindcss/vite plugin
- **Animation**: Motion 12.23.24 (Framer Motion)
- **State Management**: Redux Toolkit 2.10.1 with React Redux 9.2.0
- **Routing**: React Router DOM 7.9.5
- **UI Components**: Radix UI primitives
- **Utilities**: 
  - `clsx` and `tailwind-merge` for className management
  - `class-variance-authority` (CVA) for component variants
  - `lucide-react` and `@tabler/icons-react` for icons

## Project Setup

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

### Build
```bash
npm run build
```

### Lint
```bash
npm run lint
```

### Preview
```bash
npm run preview
```

## Code Conventions

### File Structure
- Components are organized in `src/components/` with UI primitives in `src/components/ui/`
- Utilities are in `src/lib/`
- Context providers are in `src/context/`
- Custom hooks are in `src/hooks/`
- Feature-specific code is organized in feature folders (e.g., `src/finta/`)

### Path Aliases
- Use `@/` prefix for imports from the `src/` directory (configured in vite.config.ts and tsconfig.json)
- Example: `import { cn } from "@/lib/utils"`

### Component Patterns

#### UI Components
- Use Radix UI primitives as base components
- Apply Tailwind CSS for styling
- Use CVA (class-variance-authority) for component variants
- Use the `cn()` utility function from `@/lib/utils` to merge Tailwind classes
- Export both the component and its prop types

Example pattern (using button as example):
```typescript
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground",
        // other variants
      },
      size: {
        default: "h-9 px-4 py-2",
        // other sizes
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
```

#### Animation
- Use Motion (Framer Motion) for animations
- Apply `initial`, `animate`, `whileInView`, and other motion props
- Consider performance when adding animations

### TypeScript
- **Avoid `any` type**: Specify explicit types instead
- Use proper type definitions for props and return values
- Leverage TypeScript's type inference where appropriate
- Use interface or type for component props

### React Best Practices
- Use functional components with hooks
- Use `React.forwardRef` for components that need ref forwarding
- Set `displayName` for components created with `forwardRef`
- Fast refresh requires files to only export components (use separate files for constants/utilities)

### ESLint Configuration
- Follow the ESLint rules defined in `eslint.config.js`
- Configuration extends:
  - `@eslint/js` recommended config
  - `typescript-eslint` recommended config
  - `eslint-plugin-react-hooks` recommended-latest config
  - `eslint-plugin-react-refresh` vite config
- Common issues to avoid:
  - Avoid `any` type - specify explicit types
  - Only export components from component files (for Fast Refresh compatibility)

### Styling
- Use Tailwind CSS utility classes
- Follow the configured Tailwind theme
- Use the `cn()` utility to conditionally merge classes
- Prefer Tailwind utilities over custom CSS
- Use semantic color tokens (e.g., `bg-primary`, `text-primary-foreground`)

### State Management
- Use Redux Toolkit for global state management
- Use React hooks (useState, useEffect, etc.) for local state
- Custom hooks are in `src/hooks/` (e.g., `useAuth`)

### Routing
- Use React Router DOM for navigation
- Implement protected routes with authentication checks
- Use `useNavigate` hook for programmatic navigation

## Authentication
- Authentication context is available via `useAuth` hook
- Provides `isAuthenticated` and `user` properties
- Protected routes should check authentication status

## Component Library
The project uses a custom component library based on Radix UI and Tailwind CSS:
- Button (with variants: default, destructive, outline, secondary, ghost, link)
- Input & InputGroup
- Textarea
- Toggle
- Badge
- Separator
- ButtonGroup

## When Making Changes
1. **Always run linter** before committing: `npm run lint`
2. **Build the project** to check for TypeScript errors: `npm run build`
3. **Test in development mode** to verify functionality: `npm run dev`
4. **Follow existing patterns** in the codebase
5. **Avoid breaking changes** to existing APIs
6. **Update types** when modifying component props
7. **Consider accessibility** when creating UI components (Radix UI provides good defaults)
8. **Optimize bundle size** by using tree-shakeable imports

## Testing
Currently, the project does not have a test suite configured. When adding tests:
- Consider using Vitest (pairs well with Vite)
- Use React Testing Library for component tests
- Test user interactions and accessibility

## Notes
- This is a private package in early development (version 0.0.0)
- Focus on maintaining consistency with existing code style
- Prioritize component reusability and maintainability
- Keep accessibility in mind when creating UI components
