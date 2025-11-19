# My UI Portfolio

A modern, performant portfolio application built with React, TypeScript, and Framer Motion.

## Performance Optimizations

This application has been optimized for maximum performance. See [PERFORMANCE_OPTIMIZATIONS.md](./PERFORMANCE_OPTIMIZATIONS.md) for detailed information about the optimizations implemented.

### Key Features
- 🚀 Custom hooks for reusable logic (`useUsers`, `useWindowSize`)
- ⚡ React.memo for preventing unnecessary re-renders
- 🎯 Memoized computations with useMemo/useCallback
- 📦 Optimized storage access patterns
- 🎨 Smooth animations with Framer Motion
- 🔒 Type-safe TypeScript implementation

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

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

## Project Structure

```
src/
├── components/     # Reusable UI components
├── context/        # React context providers (Auth, Theme)
├── finta/          # Feature components
├── hooks/          # Custom React hooks
├── lib/            # Utility functions
└── data/           # Static data
```

## Performance Features

- **Custom Hooks**: Centralized logic for user management and window sizing
- **Memoization**: Extensive use of useMemo and useCallback to prevent unnecessary computations
- **React.memo**: Pure components wrapped to prevent re-renders
- **Event Optimization**: Debounced resize listeners to reduce overhead
- **Storage Optimization**: Reduced localStorage/sessionStorage reads by ~66%

Stay tuned. Quite a lot of things are coming!
