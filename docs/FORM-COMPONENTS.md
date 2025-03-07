# Componentes de Formularios

Esta sección documenta los componentes relacionados con formularios disponibles en la biblioteca ExamSocial Components.

## Índice

1. [Field](#field)
2. [ImageInput](#imageinput)
3. [ImageUploader](#imageuploader)
4. [BannerInput](#bannerinput)
5. [QuestionForm](#questionform)

## Field

El componente `Field` proporciona un campo de formulario con etiqueta y validación, diseñado para trabajar con Formik.

### Propiedades

| Propiedad | Tipo | Valor por defecto | Descripción |
|-----------|------|-------------------|-------------|
| `name` | `string` | - | Nombre del campo (debe coincidir con el nombre en Formik) |
| `label` | `string` | - | Etiqueta del campo |
| `type` | `"text" \| "email" \| "password" \| "number" \| "tel" \| "url" \| "date"` | `"text"` | Tipo de campo |
| `placeholder` | `string` | - | Texto de placeholder |
| `required` | `boolean` | `false` | Si el campo es obligatorio |
| `disabled` | `boolean` | `false` | Si el campo está deshabilitado |
| `className` | `string` | - | Clases CSS adicionales |
| `inputClassName` | `string` | - | Clases CSS adicionales para el input |
| `labelClassName` | `string` | - | Clases CSS adicionales para la etiqueta |
| `errorClassName` | `string` | - | Clases CSS adicionales para el mensaje de error |
| `helperText` | `string` | - | Texto de ayuda adicional |

### Ejemplos

```jsx
// Field básico con Formik
<Formik
  initialValues={{ name: "" }}
  onSubmit={handleSubmit}
>
  <Form>
    <Field 
      name="name"
      label="Name"
      placeholder="Enter your name"
      required
    />
    <Button type="submit">Submit</Button>
  </Form>
</Formik>

// Field con tipo específico
<Field 
  name="email"
  label="Email"
  type="email"
  placeholder="Enter your email"
  required
/>

// Field con texto de ayuda
<Field 
  name="password"
  label="Password"
  type="password"
  placeholder="Enter your password"
  required
  helperText="Password must be at least 8 characters long"
/>
```

## ImageInput

El componente `ImageInput` proporciona un campo para cargar imágenes con previsualización.

### Propiedades

| Propiedad | Tipo | Valor por defecto | Descripción |
|-----------|------|-------------------|-------------|
| `name` | `string` | - | Nombre del campo |
| `label` | `string` | - | Etiqueta del campo |
| `value` | `string \| File` | - | Valor actual (URL o archivo) |
| `onChange` | `(file: File) => void` | - | Función llamada cuando se selecciona una imagen |
| `onRemove` | `() => void` | - | Función llamada cuando se elimina la imagen |
| `accept` | `string` | `"image/*"` | Tipos de archivo aceptados |
| `maxSize` | `number` | `5242880` | Tamaño máximo en bytes (5MB por defecto) |
| `disabled` | `boolean` | `false` | Si el campo está deshabilitado |
| `error` | `string` | - | Mensaje de error |
| `className` | `string` | - | Clases CSS adicionales |

### Ejemplos

```jsx
// ImageInput básico
<ImageInput 
  name="profileImage"
  label="Profile Image"
  onChange={(file) => handleImageChange(file)}
/>

// ImageInput con valor inicial (URL)
<ImageInput 
  name="profileImage"
  label="Profile Image"
  value="https://example.com/profile.jpg"
  onChange={(file) => handleImageChange(file)}
  onRemove={() => handleImageRemove()}
/>

// ImageInput con restricciones
<ImageInput 
  name="profileImage"
  label="Profile Image"
  accept=".jpg,.jpeg,.png"
  maxSize={1048576} // 1MB
  onChange={(file) => handleImageChange(file)}
  error={imageError}
/>
```

## ImageUploader

El componente `ImageUploader` proporciona un área para arrastrar y soltar imágenes o seleccionarlas desde el dispositivo.

### Propiedades

| Propiedad | Tipo | Valor por defecto | Descripción |
|-----------|------|-------------------|-------------|
| `onUpload` | `(files: File[]) => void` | - | Función llamada cuando se cargan imágenes |
| `multiple` | `boolean` | `false` | Si se permiten múltiples imágenes |
| `maxFiles` | `number` | `5` | Número máximo de archivos (si multiple es true) |
| `maxSize` | `number` | `5242880` | Tamaño máximo en bytes (5MB por defecto) |
| `accept` | `string` | `"image/*"` | Tipos de archivo aceptados |
| `disabled` | `boolean` | `false` | Si el uploader está deshabilitado |
| `error` | `string` | - | Mensaje de error |
| `className` | `string` | - | Clases CSS adicionales |

### Ejemplos

```jsx
// ImageUploader básico
<ImageUploader 
  onUpload={(files) => handleImageUpload(files)}
/>

// ImageUploader para múltiples imágenes
<ImageUploader 
  onUpload={(files) => handleImagesUpload(files)}
  multiple
  maxFiles={3}
/>

// ImageUploader con restricciones
<ImageUploader 
  onUpload={(files) => handleImageUpload(files)}
  accept=".jpg,.jpeg,.png"
  maxSize={1048576} // 1MB
  error={uploadError}
/>
```

## BannerInput

El componente `BannerInput` proporciona un campo para cargar imágenes de banner con previsualización y recorte.

### Propiedades

| Propiedad | Tipo | Valor por defecto | Descripción |
|-----------|------|-------------------|-------------|
| `name` | `string` | - | Nombre del campo |
| `label` | `string` | - | Etiqueta del campo |
| `value` | `string \| File` | - | Valor actual (URL o archivo) |
| `onChange` | `(file: File) => void` | - | Función llamada cuando se selecciona una imagen |
| `onRemove` | `() => void` | - | Función llamada cuando se elimina la imagen |
| `aspectRatio` | `number` | `16/9` | Relación de aspecto para el recorte |
| `minWidth` | `number` | `1200` | Ancho mínimo recomendado en píxeles |
| `minHeight` | `number` | `675` | Alto mínimo recomendado en píxeles |
| `disabled` | `boolean` | `false` | Si el campo está deshabilitado |
| `error` | `string` | - | Mensaje de error |
| `className` | `string` | - | Clases CSS adicionales |

### Ejemplos

```jsx
// BannerInput básico
<BannerInput 
  name="examBanner"
  label="Exam Banner"
  onChange={(file) => handleBannerChange(file)}
/>

// BannerInput con valor inicial (URL)
<BannerInput 
  name="examBanner"
  label="Exam Banner"
  value="https://example.com/banner.jpg"
  onChange={(file) => handleBannerChange(file)}
  onRemove={() => handleBannerRemove()}
/>

// BannerInput con relación de aspecto personalizada
<BannerInput 
  name="examBanner"
  label="Exam Banner"
  aspectRatio={3/1}
  minWidth={1500}
  minHeight={500}
  onChange={(file) => handleBannerChange(file)}
  error={bannerError}
/>
```

## QuestionForm

El componente `QuestionForm` proporciona un formulario para crear o editar preguntas de examen.

### Propiedades

| Propiedad | Tipo | Valor por defecto | Descripción |
|-----------|------|-------------------|-------------|
| `initialValues` | `QuestionFormValues` | - | Valores iniciales del formulario |
| `onSubmit` | `(values: QuestionFormValues) => void` | - | Función llamada al enviar el formulario |
| `questionTypes` | `Array<{ value: string, label: string }>` | - | Tipos de preguntas disponibles |
| `isLoading` | `boolean` | `false` | Si el formulario está en estado de carga |
| `error` | `string` | - | Mensaje de error general |
| `onCancel` | `() => void` | - | Función llamada al cancelar |
| `className` | `string` | - | Clases CSS adicionales |

### Ejemplos

```jsx
// QuestionForm básico
<QuestionForm 
  initialValues={{
    type: "multiple_choice",
    text: "",
    options: [
      { id: "1", text: "", isCorrect: false },
      { id: "2", text: "", isCorrect: false },
    ],
    explanation: "",
  }}
  onSubmit={(values) => handleCreateQuestion(values)}
  questionTypes={[
    { value: "multiple_choice", label: "Multiple Choice" },
    { value: "true_false", label: "True/False" },
    { value: "short_answer", label: "Short Answer" },
  ]}
/>

// QuestionForm para editar una pregunta existente
<QuestionForm 
  initialValues={{
    type: "multiple_choice",
    text: "What is the capital of France?",
    options: [
      { id: "1", text: "London", isCorrect: false },
      { id: "2", text: "Paris", isCorrect: true },
      { id: "3", text: "Berlin", isCorrect: false },
      { id: "4", text: "Madrid", isCorrect: false },
    ],
    explanation: "Paris is the capital and most populous city of France.",
  }}
  onSubmit={(values) => handleUpdateQuestion(questionId, values)}
  onCancel={() => navigate(-1)}
  questionTypes={[
    { value: "multiple_choice", label: "Multiple Choice" },
    { value: "true_false", label: "True/False" },
    { value: "short_answer", label: "Short Answer" },
  ]}
/>

// QuestionForm en estado de carga
<QuestionForm 
  initialValues={initialValues}
  onSubmit={(values) => handleCreateQuestion(values)}
  questionTypes={questionTypes}
  isLoading={isSubmitting}
  error={submitError}
/>
``` 