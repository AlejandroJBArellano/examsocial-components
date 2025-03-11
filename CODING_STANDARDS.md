# Coding Standards and Requirements for ExamSocial Components

This document outlines the coding standards and requirements for this project. All contributors must adhere to these guidelines to maintain code quality, consistency, and maintainability.

## General Coding Standards

- Always prefer simple solutions
- Avoid duplication of code whenever possible, which means checking for other areas of the codebase that might already have similar code and functionality
- Write code that takes into account the different environments: dev, test, and prod
- You are careful to only make changes that are requested or you are confident are well understood and related to the change being requested
- When fixing an issue or bug, do not introduce a new pattern or technology without first exhausting all options for the existing implementation. And if you finally do this, make sure to remove the old implementation afterwards so we don't have duplicate logic
- Keep the codebase very clean and organized
- Avoid writing scripts in files if possible, especially if the script is likely only to be run once
- Avoid having files over 200-300 lines of code. Refactor at that point
- Mocking data is only needed for tests, never mock data for dev or prod
- Never add stubbing or fake data patterns to code that affects the dev or prod environments
- Never overwrite .env file without first asking and confirming

## Component Requirements

### Component Structure

Each component must follow the compound pattern when appropriate, which includes:

1. A main component that serves as the container
2. Child components that represent different parts of the component
3. Context provider when necessary for state management
4. Export of all components through a single entry point

### Required Files for Each Component

Every component must include:

1. **Component Implementation**: The main .tsx file with the component code
2. **Story File**: A Storybook story file (.stories.tsx) that showcases all possible variations of the component
3. **Test File**: A comprehensive test file (.test.tsx) that ensures the component works correctly

### Testing Requirements

- All components must have unit tests that cover primary functionality
- Tests must validate that components render correctly with different props
- Interactive components should have tests for user interactions
- Test coverage should aim for at least 80%

### Story Requirements

- Each component must have a Storybook story
- Stories should demonstrate all component variations
- Include examples of common use cases
- Document all props in the story file
- Add controls for interactive playground

## Naming Conventions

- Use PascalCase for component names
- Use camelCase for variables, functions, and instances
- Use descriptive names that clearly indicate purpose

## Performance Considerations

- Components should be optimized for performance
- Use React.memo for expensive components when appropriate
- Avoid unnecessary re-renders through proper use of useCallback and useMemo

## Accessibility

- All components must be accessible (WCAG compliant)
- Include proper ARIA attributes when necessary
- Ensure keyboard navigation works properly
- Components should work with screen readers

## Documentation

- Include JSDoc comments for all component props
- Provide usage examples in the component's story file
- Document any non-obvious behavior or edge cases

Remember: Quality and maintainability are top priorities. Always aim to write clean, readable, and efficient code that is easy to understand and modify. 