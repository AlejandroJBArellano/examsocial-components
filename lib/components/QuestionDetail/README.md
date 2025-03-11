# QuestionDetail Component

A flexible React component for displaying quiz questions with answer options and management controls. 
This component implements the compound component pattern for a more declarative API.

## Features

- Displays a question with multiple answer options
- Shows which option is correct when requested
- Displays statistics for each answer option
- Visualizes percentage of student selections with SVG charts
- Supports both props-based and compound component patterns
- Includes edit and delete controls

## Usage

### Basic Usage with Props

```tsx
import { QuestionDetail, AnswerOptionType } from './path-to-component';

const options: AnswerOptionType[] = [
  {
    id: '1',
    content: 'Option A content',
    isCorrect: true,
    percentage: 42,
  },
  {
    id: '2',
    content: 'Option B content',
    isCorrect: false,
    percentage: 30,
  },
];

const MyComponent = () => {
  return (
    <QuestionDetail 
      options={options}
      onEdit={() => console.log('Edit clicked')}
      onDelete={() => console.log('Delete clicked')}
      showCorrectAnswer={true}
      correctPercentage={42}
    >
      This is the question text?
    </QuestionDetail>
  );
};
```

### Using Compound Component Pattern

```tsx
import { QuestionDetail, AnswerOptionType } from './path-to-component';

const options: AnswerOptionType[] = [
  {
    id: '1',
    content: 'Option A content',
    isCorrect: true,
    percentage: 42,
  },
  {
    id: '2',
    content: 'Option B content',
    isCorrect: false,
    percentage: 30,
  },
];

const MyComponent = () => {
  return (
    <QuestionDetail showCorrectAnswer={true}>
      <QuestionDetail.Header 
        onEdit={() => console.log('Edit clicked')} 
        onDelete={() => console.log('Delete clicked')}
      >
        This is the question text?
      </QuestionDetail.Header>
      <main>
        <QuestionDetail.Options>
          {options.map(option => (
            <QuestionDetail.Option key={option.id} id={option.id} />
          ))}
        </QuestionDetail.Options>
      </main>
    </QuestionDetail>
  );
};
```

## Component API

### QuestionDetail Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `showCorrectAnswer` | boolean | `true` | Whether to show which answer is correct |
| `correctPercentage` | number | `25` | Percentage of users who got the answer correct |
| `onEdit` | () => void | - | Callback for edit button click |
| `onDelete` | () => void | - | Callback for delete button click |
| `options` | AnswerOptionType[] | `[]` | Array of answer options |
| `children` | ReactNode | - | Question text or compound components |

### AnswerOptionType

```typescript
interface AnswerOptionType {
  id: string;
  content: ReactNode;
  isCorrect: boolean;
  percentage: number;
}
```

### Compound Components

| Component | Props | Description |
|-----------|-------|-------------|
| `QuestionDetail.Header` | `onEdit`, `onDelete`, `children` | Header containing question title and action buttons |
| `QuestionDetail.Question` | `children` | Question title |
| `QuestionDetail.Actions` | `onEdit`, `onDelete` | Action buttons for edit and delete |
| `QuestionDetail.Options` | `children` | Container for answer options |
| `QuestionDetail.Option` | `id` | Individual answer option |

## Styling

The component uses Tailwind CSS for styling. You can customize the appearance by providing your own CSS classes or by extending the component. 