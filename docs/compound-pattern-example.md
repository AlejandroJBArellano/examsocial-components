# Compound Pattern Example

This document provides an example of a component built using the compound pattern, as required by our [Coding Standards](../CODING_STANDARDS.md).

## What is the Compound Pattern?

The compound pattern is a design pattern that allows you to create components with multiple parts that work together as a whole. It's especially useful for complex UI components with multiple interacting parts, such as:

- Tabs and TabPanels
- Accordions
- Dropdown menus
- Form controls with labels, inputs, and error messages

## Example: Tabs Component

Below is an example of a Tabs component using the compound pattern:

```tsx
// Tabs.tsx
import React, { createContext, useState, useContext } from 'react';
import { cn } from '../../utils';

// Step 1: Create a context to share state between components
interface TabsContextType {
  activeTab: string;
  setActiveTab: (id: string) => void;
}

const TabsContext = createContext<TabsContextType | undefined>(undefined);

// Step 2: Create a hook to use the context
function useTabsContext() {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error('Tabs components must be used within a Tabs container');
  }
  return context;
}

// Step 3: Create the main container component
interface TabsProps {
  defaultTab: string;
  children: React.ReactNode;
  className?: string;
}

const Tabs = ({ defaultTab, children, className }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(defaultTab);

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className={cn('tabs-container', className)} data-testid="tabs">
        {children}
      </div>
    </TabsContext.Provider>
  );
};

// Step 4: Create the child components
interface TabListProps {
  children: React.ReactNode;
  className?: string;
}

const TabList = ({ children, className }: TabListProps) => {
  return (
    <div className={cn('flex gap-2 border-b border-gray-200', className)} data-testid="tab-list">
      {children}
    </div>
  );
};

interface TabProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

const Tab = ({ id, children, className }: TabProps) => {
  const { activeTab, setActiveTab } = useTabsContext();
  const isActive = activeTab === id;

  return (
    <button
      className={cn(
        'px-4 py-2 focus:outline-none',
        isActive ? 'border-b-2 border-primary font-medium' : 'text-gray-500 hover:text-gray-700',
        className
      )}
      onClick={() => setActiveTab(id)}
      aria-selected={isActive}
      role="tab"
      data-testid={`tab-${id}`}
    >
      {children}
    </button>
  );
};

interface TabPanelsProps {
  children: React.ReactNode;
  className?: string;
}

const TabPanels = ({ children, className }: TabPanelsProps) => {
  return (
    <div className={cn('mt-4', className)} data-testid="tab-panels">
      {children}
    </div>
  );
};

interface TabPanelProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

const TabPanel = ({ id, children, className }: TabPanelProps) => {
  const { activeTab } = useTabsContext();
  const isActive = activeTab === id;

  if (!isActive) return null;

  return (
    <div 
      className={cn('tab-panel', className)} 
      role="tabpanel" 
      data-testid={`tabpanel-${id}`}
    >
      {children}
    </div>
  );
};

// Step 5: Export all components through the main component
Tabs.List = TabList;
Tabs.Tab = Tab;
Tabs.Panels = TabPanels;
Tabs.Panel = TabPanel;

export default Tabs;
```

## Usage Example

Here's how you would use this compound component:

```tsx
import Tabs from './Tabs';

const TabsExample = () => {
  return (
    <Tabs defaultTab="tab1">
      <Tabs.List>
        <Tabs.Tab id="tab1">First Tab</Tabs.Tab>
        <Tabs.Tab id="tab2">Second Tab</Tabs.Tab>
        <Tabs.Tab id="tab3">Third Tab</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panels>
        <Tabs.Panel id="tab1">Content for the first tab</Tabs.Panel>
        <Tabs.Panel id="tab2">Content for the second tab</Tabs.Panel>
        <Tabs.Panel id="tab3">Content for the third tab</Tabs.Panel>
      </Tabs.Panels>
    </Tabs>
  );
};
```

## Example Story and Test Files

### Story File Example (Tabs.stories.tsx)

```tsx
import type { Meta, StoryObj } from "@storybook/react";
import Tabs from "./Tabs";

const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  render: () => (
    <Tabs defaultTab="tab1">
      <Tabs.List>
        <Tabs.Tab id="tab1">First Tab</Tabs.Tab>
        <Tabs.Tab id="tab2">Second Tab</Tabs.Tab>
        <Tabs.Tab id="tab3">Third Tab</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panels>
        <Tabs.Panel id="tab1">Content for the first tab</Tabs.Panel>
        <Tabs.Panel id="tab2">Content for the second tab</Tabs.Panel>
        <Tabs.Panel id="tab3">Content for the third tab</Tabs.Panel>
      </Tabs.Panels>
    </Tabs>
  ),
};

export const CustomStyles: Story = {
  render: () => (
    <Tabs defaultTab="tab1" className="bg-gray-100 p-4 rounded-lg">
      <Tabs.List className="gap-4">
        <Tabs.Tab id="tab1" className="rounded-t-lg">First Tab</Tabs.Tab>
        <Tabs.Tab id="tab2" className="rounded-t-lg">Second Tab</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panels className="bg-white p-4 rounded-b-lg">
        <Tabs.Panel id="tab1">Content for the first tab</Tabs.Panel>
        <Tabs.Panel id="tab2">Content for the second tab</Tabs.Panel>
      </Tabs.Panels>
    </Tabs>
  ),
};
```

### Test File Example (Tabs.test.tsx)

```tsx
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Tabs from "./Tabs";

describe("Tabs component", () => {
  it("should render with the default active tab", () => {
    render(
      <Tabs defaultTab="tab1">
        <Tabs.List>
          <Tabs.Tab id="tab1">First Tab</Tabs.Tab>
          <Tabs.Tab id="tab2">Second Tab</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panels>
          <Tabs.Panel id="tab1">Content for first tab</Tabs.Panel>
          <Tabs.Panel id="tab2">Content for second tab</Tabs.Panel>
        </Tabs.Panels>
      </Tabs>
    );

    expect(screen.getByTestId("tabs")).toBeInTheDocument();
    expect(screen.getByTestId("tab-list")).toBeInTheDocument();
    expect(screen.getByText("Content for first tab")).toBeInTheDocument();
    expect(screen.queryByText("Content for second tab")).not.toBeInTheDocument();
  });

  it("should change active tab when clicked", () => {
    render(
      <Tabs defaultTab="tab1">
        <Tabs.List>
          <Tabs.Tab id="tab1">First Tab</Tabs.Tab>
          <Tabs.Tab id="tab2">Second Tab</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panels>
          <Tabs.Panel id="tab1">Content for first tab</Tabs.Panel>
          <Tabs.Panel id="tab2">Content for second tab</Tabs.Panel>
        </Tabs.Panels>
      </Tabs>
    );

    const secondTab = screen.getByTestId("tab-tab2");
    fireEvent.click(secondTab);

    expect(screen.queryByText("Content for first tab")).not.toBeInTheDocument();
    expect(screen.getByText("Content for second tab")).toBeInTheDocument();
  });

  it("should have the correct ARIA attributes", () => {
    render(
      <Tabs defaultTab="tab1">
        <Tabs.List>
          <Tabs.Tab id="tab1">First Tab</Tabs.Tab>
          <Tabs.Tab id="tab2">Second Tab</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panels>
          <Tabs.Panel id="tab1">Content for first tab</Tabs.Panel>
          <Tabs.Panel id="tab2">Content for second tab</Tabs.Panel>
        </Tabs.Panels>
      </Tabs>
    );

    const firstTab = screen.getByTestId("tab-tab1");
    const secondTab = screen.getByTestId("tab-tab2");
    
    expect(firstTab).toHaveAttribute("aria-selected", "true");
    expect(secondTab).toHaveAttribute("aria-selected", "false");
    expect(firstTab).toHaveAttribute("role", "tab");
    expect(screen.getByTestId("tabpanel-tab1")).toHaveAttribute("role", "tabpanel");
  });
});
```

## Benefits of the Compound Pattern

1. **Flexibility**: Users can arrange and compose the parts as needed
2. **Encapsulation**: Internal state and logic are hidden from the consumer
3. **Reusability**: Each part can be styled and extended independently
4. **Readability**: The component usage is declarative and intuitive
5. **Maintainability**: Each part has a single responsibility

By following this pattern for complex components, we maintain consistency and provide a better developer experience for users of our component library. 