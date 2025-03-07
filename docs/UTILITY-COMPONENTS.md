# Componentes de Utilidades

Esta sección documenta los componentes de utilidades disponibles en la biblioteca ExamSocial Components.

## Índice

1. [Tooltip](#tooltip)
2. [Dialog](#dialog)
3. [QRCode](#qrcode)
4. [QRCodeCard](#qrcodecard)
5. [Separator](#separator)
6. [Stepper](#stepper)
7. [FeaturesCarousel](#featurescarousel)
8. [FeedbackScreen](#feedbackscreen)
9. [MainContainer](#maincontainer)

## Tooltip

El componente `Tooltip` muestra información adicional al pasar el cursor sobre un elemento.

### Propiedades

| Propiedad | Tipo | Valor por defecto | Descripción |
|-----------|------|-------------------|-------------|
| `children` | `ReactNode` | - | Contenido del tooltip |
| `trigger` | `ReactElement` | - | Elemento que activa el tooltip |
| `side` | `"top" \| "right" \| "bottom" \| "left"` | `"top"` | Posición del tooltip |
| `align` | `"start" \| "center" \| "end"` | `"center"` | Alineación del tooltip |
| `delayDuration` | `number` | `700` | Retraso antes de mostrar el tooltip (ms) |
| `className` | `string` | - | Clases CSS adicionales |

### Ejemplos

```jsx
// Tooltip básico
<Tooltip 
  trigger={<button>Hover me</button>}
>
  This is a tooltip
</Tooltip>

// Tooltip con posición personalizada
<Tooltip 
  trigger={<button>Hover me</button>}
  side="right"
  align="start"
>
  This is a tooltip on the right
</Tooltip>

// Tooltip con contenido personalizado
<Tooltip 
  trigger={<button>Hover me</button>}
>
  <div className="flex flex-col gap-1">
    <p className="font-bold">Custom tooltip</p>
    <p>With multiple lines of content</p>
  </div>
</Tooltip>
```

## Dialog

El componente `Dialog` muestra un diálogo modal sobre el contenido de la página.

### Propiedades

| Propiedad | Tipo | Valor por defecto | Descripción |
|-----------|------|-------------------|-------------|
| `title` | `string` | - | Título del diálogo |
| `description` | `string` | - | Descripción del diálogo |
| `children` | `ReactNode` | - | Contenido del diálogo |
| `isOpen` | `boolean` | `false` | Si el diálogo está abierto |
| `onClose` | `() => void` | - | Función llamada al cerrar el diálogo |
| `trigger` | `ReactElement` | - | Elemento que activa el diálogo |
| `size` | `"sm" \| "md" \| "lg" \| "xl" \| "full"` | `"md"` | Tamaño del diálogo |
| `className` | `string` | - | Clases CSS adicionales |

### Ejemplos

```jsx
// Dialog básico
<Dialog 
  title="Confirm Action"
  description="Are you sure you want to perform this action?"
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
>
  <div className="flex justify-end gap-2 mt-4">
    <Button onClick={() => setIsOpen(false)}>Cancel</Button>
    <Button theme="primary" onClick={handleConfirm}>Confirm</Button>
  </div>
</Dialog>

// Dialog con trigger
<Dialog 
  title="Create New Exam"
  trigger={<Button theme="primary">Create Exam</Button>}
>
  <form className="mt-4">
    {/* Form content */}
  </form>
</Dialog>

// Dialog con tamaño personalizado
<Dialog 
  title="Preview Exam"
  size="lg"
  isOpen={isPreviewOpen}
  onClose={() => setIsPreviewOpen(false)}
>
  <div className="mt-4">
    {/* Preview content */}
  </div>
</Dialog>
```

## QRCode

El componente `QRCode` genera un código QR para compartir enlaces o información.

### Propiedades

| Propiedad | Tipo | Valor por defecto | Descripción |
|-----------|------|-------------------|-------------|
| `value` | `string` | - | Valor a codificar en el QR |
| `size` | `number` | `200` | Tamaño del código QR en píxeles |
| `logoImage` | `string` | - | URL de la imagen del logo (opcional) |
| `logoWidth` | `number` | `50` | Ancho del logo en píxeles |
| `logoHeight` | `number` | `50` | Alto del logo en píxeles |
| `bgColor` | `string` | `"#FFFFFF"` | Color de fondo |
| `fgColor` | `string` | `"#000000"` | Color del código QR |
| `className` | `string` | - | Clases CSS adicionales |

### Ejemplos

```jsx
// QRCode básico
<QRCode 
  value="https://examsocial.com/exams/123"
/>

// QRCode con logo
<QRCode 
  value="https://examsocial.com/exams/123"
  logoImage="https://example.com/logo.png"
  size={250}
/>

// QRCode con colores personalizados
<QRCode 
  value="https://examsocial.com/exams/123"
  bgColor="#F3F4F6"
  fgColor="#4F46E5"
/>
```

## QRCodeCard

El componente `QRCodeCard` muestra un código QR dentro de una tarjeta con información adicional.

### Propiedades

| Propiedad | Tipo | Valor por defecto | Descripción |
|-----------|------|-------------------|-------------|
| `title` | `string` | - | Título de la tarjeta |
| `description` | `string` | - | Descripción de la tarjeta |
| `value` | `string` | - | Valor a codificar en el QR |
| `logoImage` | `string` | - | URL de la imagen del logo (opcional) |
| `onDownload` | `() => void` | - | Función llamada al descargar el código QR |
| `onShare` | `() => void` | - | Función llamada al compartir el código QR |
| `className` | `string` | - | Clases CSS adicionales |

### Ejemplos

```jsx
// QRCodeCard básico
<QRCodeCard 
  title="Exam: Mathematics 101"
  description="Scan this QR code to access the exam"
  value="https://examsocial.com/exams/123"
/>

// QRCodeCard con logo y acciones
<QRCodeCard 
  title="Exam: Physics Advanced"
  description="Scan this QR code to access the exam"
  value="https://examsocial.com/exams/456"
  logoImage="https://example.com/logo.png"
  onDownload={() => handleDownload("physics-exam-qr")}
  onShare={() => handleShare("https://examsocial.com/exams/456")}
/>
```

## Separator

El componente `Separator` proporciona una línea divisoria horizontal o vertical.

### Propiedades

| Propiedad | Tipo | Valor por defecto | Descripción |
|-----------|------|-------------------|-------------|
| `orientation` | `"horizontal" \| "vertical"` | `"horizontal"` | Orientación del separador |
| `label` | `string` | - | Texto opcional para mostrar en el separador |
| `className` | `string` | - | Clases CSS adicionales |

### Ejemplos

```jsx
// Separator horizontal
<Separator />

// Separator con etiqueta
<Separator label="OR" />

// Separator vertical
<Separator orientation="vertical" className="h-10" />
```

## Stepper

El componente `Stepper` muestra un indicador de pasos en un proceso.

### Propiedades

| Propiedad | Tipo | Valor por defecto | Descripción |
|-----------|------|-------------------|-------------|
| `steps` | `Array<{ label: string, description?: string }>` | - | Lista de pasos |
| `currentStep` | `number` | `0` | Índice del paso actual (0-based) |
| `orientation` | `"horizontal" \| "vertical"` | `"horizontal"` | Orientación del stepper |
| `onStepClick` | `(index: number) => void` | - | Función llamada al hacer clic en un paso |
| `className` | `string` | - | Clases CSS adicionales |

### Ejemplos

```jsx
// Stepper básico
<Stepper 
  steps={[
    { label: "Basic Info" },
    { label: "Questions" },
    { label: "Settings" },
    { label: "Review" }
  ]}
  currentStep={1}
/>

// Stepper con descripciones
<Stepper 
  steps={[
    { label: "Basic Info", description: "Exam details" },
    { label: "Questions", description: "Add questions" },
    { label: "Settings", description: "Configure exam" },
    { label: "Review", description: "Final review" }
  ]}
  currentStep={2}
/>

// Stepper vertical con navegación
<Stepper 
  steps={[
    { label: "Step 1" },
    { label: "Step 2" },
    { label: "Step 3" }
  ]}
  currentStep={currentStep}
  orientation="vertical"
  onStepClick={(index) => setCurrentStep(index)}
/>
```

## FeaturesCarousel

El componente `FeaturesCarousel` muestra un carrusel de características o contenido.

### Propiedades

| Propiedad | Tipo | Valor por defecto | Descripción |
|-----------|------|-------------------|-------------|
| `features` | `Array<{ title: string, description: string, icon?: ReactNode, imageUrl?: string }>` | - | Lista de características |
| `autoPlay` | `boolean` | `true` | Si el carrusel debe reproducirse automáticamente |
| `interval` | `number` | `5000` | Intervalo entre diapositivas (ms) |
| `showDots` | `boolean` | `true` | Si se deben mostrar los indicadores de diapositivas |
| `showArrows` | `boolean` | `true` | Si se deben mostrar las flechas de navegación |
| `className` | `string` | - | Clases CSS adicionales |

### Ejemplos

```jsx
// FeaturesCarousel básico
<FeaturesCarousel 
  features={[
    {
      title: "Create Exams",
      description: "Create interactive exams with various question types",
      icon: <PencilIcon />,
    },
    {
      title: "Share Easily",
      description: "Share exams with students via link or QR code",
      icon: <ShareIcon />,
    },
    {
      title: "Track Progress",
      description: "Monitor student progress and performance",
      icon: <ChartIcon />,
    }
  ]}
/>

// FeaturesCarousel con imágenes
<FeaturesCarousel 
  features={[
    {
      title: "Create Exams",
      description: "Create interactive exams with various question types",
      imageUrl: "https://example.com/create-exams.jpg",
    },
    {
      title: "Share Easily",
      description: "Share exams with students via link or QR code",
      imageUrl: "https://example.com/share-exams.jpg",
    },
    {
      title: "Track Progress",
      description: "Monitor student progress and performance",
      imageUrl: "https://example.com/track-progress.jpg",
    }
  ]}
  autoPlay={false}
  showDots={true}
  showArrows={true}
/>
```

## FeedbackScreen

El componente `FeedbackScreen` muestra una pantalla de retroalimentación después de completar una acción.

### Propiedades

| Propiedad | Tipo | Valor por defecto | Descripción |
|-----------|------|-------------------|-------------|
| `type` | `"success" \| "error" \| "info" \| "warning"` | `"success"` | Tipo de retroalimentación |
| `title` | `string` | - | Título de la retroalimentación |
| `message` | `string` | - | Mensaje de retroalimentación |
| `primaryAction` | `{ label: string, onClick: () => void }` | - | Acción principal |
| `secondaryAction` | `{ label: string, onClick: () => void }` | - | Acción secundaria (opcional) |
| `illustration` | `ReactNode` | - | Ilustración personalizada (opcional) |
| `className` | `string` | - | Clases CSS adicionales |

### Ejemplos

```jsx
// FeedbackScreen de éxito
<FeedbackScreen 
  type="success"
  title="Exam Created Successfully!"
  message="Your exam has been created and is ready to share with students."
  primaryAction={{
    label: "View Exam",
    onClick: () => navigate(`/exams/${examId}`),
  }}
  secondaryAction={{
    label: "Create Another",
    onClick: () => navigate("/exams/create"),
  }}
/>

// FeedbackScreen de error
<FeedbackScreen 
  type="error"
  title="Error Submitting Exam"
  message="There was an error submitting your exam. Please try again."
  primaryAction={{
    label: "Try Again",
    onClick: handleSubmit,
  }}
  secondaryAction={{
    label: "Go Back",
    onClick: () => navigate(-1),
  }}
/>

// FeedbackScreen con ilustración personalizada
<FeedbackScreen 
  type="info"
  title="Exam Completed"
  message="You have completed the exam. Your results will be available soon."
  primaryAction={{
    label: "View Results",
    onClick: () => navigate(`/results/${examId}`),
  }}
  illustration={<CompletedIllustration />}
/>
```

## MainContainer

El componente `MainContainer` proporciona un contenedor principal para la aplicación con estilos consistentes.

### Propiedades

| Propiedad | Tipo | Valor por defecto | Descripción |
|-----------|------|-------------------|-------------|
| `children` | `ReactNode` | - | Contenido del contenedor |
| `maxWidth` | `"xs" \| "sm" \| "md" \| "lg" \| "xl" \| "full"` | `"lg"` | Ancho máximo del contenedor |
| `padding` | `boolean` | `true` | Si se debe aplicar padding |
| `className` | `string` | - | Clases CSS adicionales |

### Ejemplos

```jsx
// MainContainer básico
<MainContainer>
  <h1>Welcome to ExamSocial</h1>
  <p>Create and share exams with ease.</p>
</MainContainer>

// MainContainer con ancho personalizado
<MainContainer maxWidth="sm">
  <LoginForm />
</MainContainer>

// MainContainer sin padding
<MainContainer padding={false} maxWidth="full">
  <Banner />
  <div className="px-4 py-8">
    <h1>Welcome to ExamSocial</h1>
    <p>Create and share exams with ease.</p>
  </div>
</MainContainer>
``` 