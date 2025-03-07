# Componentes de UI Básicos

Esta sección documenta los componentes básicos de UI disponibles en la biblioteca ExamSocial Components.

## Índice

1. [Button](#button)
2. [Input](#input)
3. [Select](#select)
4. [Checkbox](#checkbox)
5. [Switch](#switch)
6. [Textarea](#textarea)
7. [Tag](#tag)

## Button

El componente `Button` proporciona un botón personalizable con diferentes temas y estilos.

### Propiedades

| Propiedad | Tipo | Valor por defecto | Descripción |
|-----------|------|-------------------|-------------|
| `theme` | `"extra" \| "light" \| "accent" \| "feedback-error" \| "primary"` | `"light"` | El tema del botón |
| `rounded` | `boolean` | `false` | Si el botón debe tener bordes redondeados |
| `children` | `ReactNode` | - | El contenido del botón |
| `className` | `string` | - | Clases CSS adicionales |
| `disabled` | `boolean` | `false` | Si el botón está deshabilitado |

### Ejemplos

```jsx
// Botón básico
<Button>Click me</Button>

// Botón con tema primario
<Button theme="primary">Primary Button</Button>

// Botón redondeado
<Button rounded>Rounded Button</Button>

// Botón deshabilitado
<Button disabled>Disabled Button</Button>
```

## Input

El componente `Input` proporciona un campo de entrada de texto personalizable.

### Propiedades

| Propiedad | Tipo | Valor por defecto | Descripción |
|-----------|------|-------------------|-------------|
| `label` | `string` | - | Etiqueta del campo de entrada |
| `error` | `string` | - | Mensaje de error |
| `className` | `string` | - | Clases CSS adicionales |
| `inputClassName` | `string` | - | Clases CSS adicionales para el input |

### Ejemplos

```jsx
// Input básico
<Input placeholder="Enter your name" />

// Input con etiqueta
<Input label="Name" placeholder="Enter your name" />

// Input con error
<Input label="Email" error="Invalid email" placeholder="Enter your email" />
```

## Select

El componente `Select` proporciona un selector desplegable personalizable.

### Propiedades

| Propiedad | Tipo | Valor por defecto | Descripción |
|-----------|------|-------------------|-------------|
| `options` | `Array<{ value: string, label: string }>` | `[]` | Opciones del selector |
| `label` | `string` | - | Etiqueta del selector |
| `error` | `string` | - | Mensaje de error |
| `placeholder` | `string` | - | Texto de placeholder |
| `className` | `string` | - | Clases CSS adicionales |

### Ejemplos

```jsx
// Select básico
<Select 
  options={[
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' }
  ]} 
/>

// Select con etiqueta
<Select 
  label="Select an option"
  options={[
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' }
  ]} 
/>

// Select con error
<Select 
  label="Select an option"
  error="Please select an option"
  options={[
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' }
  ]} 
/>
```

## Checkbox

El componente `Checkbox` proporciona una casilla de verificación personalizable.

### Propiedades

| Propiedad | Tipo | Valor por defecto | Descripción |
|-----------|------|-------------------|-------------|
| `label` | `string` | - | Etiqueta de la casilla |
| `checked` | `boolean` | `false` | Si la casilla está marcada |
| `onChange` | `(checked: boolean) => void` | - | Función llamada cuando cambia el estado |
| `className` | `string` | - | Clases CSS adicionales |

### Ejemplos

```jsx
// Checkbox básico
<Checkbox label="Accept terms and conditions" />

// Checkbox marcado
<Checkbox label="Accept terms and conditions" checked={true} />

// Checkbox con manejador de cambio
<Checkbox 
  label="Accept terms and conditions" 
  checked={checked} 
  onChange={(checked) => setChecked(checked)} 
/>
```

## Switch

El componente `Switch` proporciona un interruptor de activación/desactivación.

### Propiedades

| Propiedad | Tipo | Valor por defecto | Descripción |
|-----------|------|-------------------|-------------|
| `label` | `string` | - | Etiqueta del interruptor |
| `checked` | `boolean` | `false` | Si el interruptor está activado |
| `onChange` | `(checked: boolean) => void` | - | Función llamada cuando cambia el estado |
| `className` | `string` | - | Clases CSS adicionales |

### Ejemplos

```jsx
// Switch básico
<Switch label="Enable notifications" />

// Switch activado
<Switch label="Enable notifications" checked={true} />

// Switch con manejador de cambio
<Switch 
  label="Enable notifications" 
  checked={enabled} 
  onChange={(checked) => setEnabled(checked)} 
/>
```

## Textarea

El componente `Textarea` proporciona un área de texto para entradas más largas.

### Propiedades

| Propiedad | Tipo | Valor por defecto | Descripción |
|-----------|------|-------------------|-------------|
| `label` | `string` | - | Etiqueta del área de texto |
| `error` | `string` | - | Mensaje de error |
| `className` | `string` | - | Clases CSS adicionales |
| `textareaClassName` | `string` | - | Clases CSS adicionales para el textarea |

### Ejemplos

```jsx
// Textarea básico
<Textarea placeholder="Enter your message" />

// Textarea con etiqueta
<Textarea label="Message" placeholder="Enter your message" />

// Textarea con error
<Textarea label="Message" error="Message is required" placeholder="Enter your message" />
```

## Tag

El componente `Tag` proporciona una etiqueta para mostrar información categorizada.

### Propiedades

| Propiedad | Tipo | Valor por defecto | Descripción |
|-----------|------|-------------------|-------------|
| `label` | `string` | - | Texto de la etiqueta |
| `color` | `"primary" \| "secondary" \| "accent" \| "extra"` | `"primary"` | Color de la etiqueta |
| `onRemove` | `() => void` | - | Función llamada cuando se hace clic en el botón de eliminar |
| `className` | `string` | - | Clases CSS adicionales |

### Ejemplos

```jsx
// Tag básico
<Tag label="React" />

// Tag con color
<Tag label="TypeScript" color="accent" />

// Tag removible
<Tag 
  label="JavaScript" 
  onRemove={() => console.log('Tag removed')} 
/>
``` 