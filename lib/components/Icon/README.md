# Icon Component

The Icon component provides an easy way to use Material Symbols icons in your application.

## Installation

Material Symbols is already installed as a dependency in this project. The CSS is imported in the main `index.css` file.

## Usage

```tsx
import { Icon } from 'examsocial-components';

// Basic usage
<Icon name="home" />

// With variant
<Icon name="home" variant="rounded" />
<Icon name="home" variant="sharp" />
<Icon name="home" variant="outlined" /> // default

// Filled variant
<Icon name="favorite" filled />

// Custom weight (100-700)
<Icon name="settings" weight={700} />

// Custom grade (-25, 0, 200)
<Icon name="star" grade={200} />

// Custom size
<Icon name="person" size={40} />

// With custom class
<Icon name="search" className="text-blue-500" />

// With click handler
<Icon 
  name="notifications" 
  onClick={() => console.log('Icon clicked')} 
  className="cursor-pointer"
/>
```

## Available Icons

You can find all available Material Symbols icons at the [Material Symbols website](https://fonts.google.com/icons?icon.style=Outlined&icon.set=Material+Symbols).

## Props

| Prop      | Type                              | Default     | Description                                |
|-----------|-----------------------------------|-------------|--------------------------------------------|
| name      | string                            | (required)  | The name of the Material Symbol icon       |
| className | string                            | undefined   | Optional CSS class names                   |
| variant   | "outlined" \| "rounded" \| "sharp" | "outlined"  | The variant of the icon                    |
| filled    | boolean                           | false       | Whether the icon should be filled          |
| weight    | 100 \| 200 \| 300 \| 400 \| 500 \| 600 \| 700 | 400 | The weight of the icon                |
| grade     | -25 \| 0 \| 200                   | 0           | The grade of the icon                      |
| size      | number                            | 24          | The size of the icon in pixels             |
| onClick   | function                          | undefined   | Optional click handler                     |

## Examples

See the `IconExample` component for examples of how to use the Icon component in a real-world scenario.

```tsx
import { IconExample } from 'examsocial-components';

<IconExample />
``` 