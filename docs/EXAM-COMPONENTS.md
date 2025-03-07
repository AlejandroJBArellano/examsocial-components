# Componentes de Exámenes

Esta sección documenta los componentes relacionados con exámenes disponibles en la biblioteca ExamSocial Components.

## Índice

1. [ExamCard](#examcard)
2. [ExamDetail](#examdetail)
3. [CreateExam](#createexam)
4. [TakeExam](#takeexam)
5. [QuestionSet](#questionset)
6. [QuestionList](#questionlist)
7. [QuestionDetail](#questiondetail)
8. [AnswerOption](#answeroption)
9. [ReviewQuestionSet](#reviewquestionset)
10. [UserAnswers](#useranswers)

## ExamCard

El componente `ExamCard` muestra información resumida de un examen en formato de tarjeta.

### Propiedades

| Propiedad | Tipo | Valor por defecto | Descripción |
|-----------|------|-------------------|-------------|
| `title` | `string` | - | Título del examen |
| `description` | `string` | - | Descripción del examen |
| `author` | `string` | - | Autor del examen |
| `date` | `string` | - | Fecha de creación o publicación |
| `imageUrl` | `string` | - | URL de la imagen de portada |
| `questionsCount` | `number` | - | Número de preguntas |
| `onClick` | `() => void` | - | Función llamada al hacer clic en la tarjeta |
| `className` | `string` | - | Clases CSS adicionales |

### Ejemplos

```jsx
// ExamCard básico
<ExamCard 
  title="Matemáticas Básicas"
  description="Examen de matemáticas básicas para estudiantes de primaria"
  author="Juan Pérez"
  date="2023-05-15"
  questionsCount={10}
/>

// ExamCard con imagen
<ExamCard 
  title="Historia Universal"
  description="Examen de historia universal"
  author="María Rodríguez"
  date="2023-06-20"
  imageUrl="https://example.com/history.jpg"
  questionsCount={15}
/>

// ExamCard con manejador de clic
<ExamCard 
  title="Física Cuántica"
  description="Examen avanzado de física cuántica"
  author="Carlos Sánchez"
  date="2023-07-10"
  questionsCount={20}
  onClick={() => navigate(`/exams/${examId}`)}
/>
```

## ExamDetail

El componente `ExamDetail` muestra información detallada de un examen.

### Propiedades

| Propiedad | Tipo | Valor por defecto | Descripción |
|-----------|------|-------------------|-------------|
| `title` | `string` | - | Título del examen |
| `description` | `string` | - | Descripción del examen |
| `author` | `object` | - | Información del autor |
| `createdAt` | `string` | - | Fecha de creación |
| `updatedAt` | `string` | - | Fecha de última actualización |
| `imageUrl` | `string` | - | URL de la imagen de portada |
| `questions` | `array` | - | Lista de preguntas |
| `participants` | `array` | - | Lista de participantes |
| `onTakeExam` | `() => void` | - | Función llamada al hacer clic en "Realizar examen" |
| `className` | `string` | - | Clases CSS adicionales |

### Ejemplos

```jsx
// ExamDetail básico
<ExamDetail 
  title="Matemáticas Básicas"
  description="Examen de matemáticas básicas para estudiantes de primaria"
  author={{ name: "Juan Pérez", avatar: "https://example.com/avatar.jpg" }}
  createdAt="2023-05-15T10:30:00Z"
  updatedAt="2023-05-16T08:45:00Z"
  questions={questions}
  participants={participants}
/>

// ExamDetail con manejador para realizar examen
<ExamDetail 
  title="Historia Universal"
  description="Examen de historia universal"
  author={{ name: "María Rodríguez", avatar: "https://example.com/avatar.jpg" }}
  createdAt="2023-06-20T14:20:00Z"
  updatedAt="2023-06-21T09:15:00Z"
  questions={questions}
  participants={participants}
  onTakeExam={() => navigate(`/exams/${examId}/take`)}
/>
```

## CreateExam

El componente `CreateExam` proporciona un formulario para crear un nuevo examen.

### Propiedades

| Propiedad | Tipo | Valor por defecto | Descripción |
|-----------|------|-------------------|-------------|
| `onSubmit` | `(values: ExamFormValues) => void` | - | Función llamada al enviar el formulario |
| `initialValues` | `ExamFormValues` | - | Valores iniciales del formulario |
| `isLoading` | `boolean` | `false` | Si el formulario está en estado de carga |
| `className` | `string` | - | Clases CSS adicionales |

### Ejemplos

```jsx
// CreateExam básico
<CreateExam 
  onSubmit={(values) => createExam(values)}
/>

// CreateExam con valores iniciales
<CreateExam 
  initialValues={{
    title: "Nuevo Examen",
    description: "",
    isPublic: true,
    timeLimit: 60,
  }}
  onSubmit={(values) => createExam(values)}
/>

// CreateExam en estado de carga
<CreateExam 
  onSubmit={(values) => createExam(values)}
  isLoading={isSubmitting}
/>
```

## TakeExam

El componente `TakeExam` proporciona una interfaz para realizar un examen.

### Propiedades

| Propiedad | Tipo | Valor por defecto | Descripción |
|-----------|------|-------------------|-------------|
| `exam` | `Exam` | - | Datos del examen |
| `onSubmit` | `(answers: ExamAnswers) => void` | - | Función llamada al enviar las respuestas |
| `timeLimit` | `number` | - | Tiempo límite en minutos |
| `className` | `string` | - | Clases CSS adicionales |

### Ejemplos

```jsx
// TakeExam básico
<TakeExam 
  exam={exam}
  onSubmit={(answers) => submitExamAnswers(answers)}
/>

// TakeExam con tiempo límite
<TakeExam 
  exam={exam}
  timeLimit={60}
  onSubmit={(answers) => submitExamAnswers(answers)}
/>
```

## QuestionSet

El componente `QuestionSet` muestra un conjunto de preguntas para un examen.

### Propiedades

| Propiedad | Tipo | Valor por defecto | Descripción |
|-----------|------|-------------------|-------------|
| `questions` | `Question[]` | - | Lista de preguntas |
| `onAddQuestion` | `() => void` | - | Función llamada al añadir una pregunta |
| `onEditQuestion` | `(questionId: string) => void` | - | Función llamada al editar una pregunta |
| `onDeleteQuestion` | `(questionId: string) => void` | - | Función llamada al eliminar una pregunta |
| `className` | `string` | - | Clases CSS adicionales |

### Ejemplos

```jsx
// QuestionSet básico
<QuestionSet 
  questions={questions}
/>

// QuestionSet con manejadores
<QuestionSet 
  questions={questions}
  onAddQuestion={() => setShowAddQuestionModal(true)}
  onEditQuestion={(questionId) => navigateToEditQuestion(questionId)}
  onDeleteQuestion={(questionId) => deleteQuestion(questionId)}
/>
```

## QuestionList

El componente `QuestionList` muestra una lista de preguntas.

### Propiedades

| Propiedad | Tipo | Valor por defecto | Descripción |
|-----------|------|-------------------|-------------|
| `questions` | `Question[]` | - | Lista de preguntas |
| `onQuestionClick` | `(questionId: string) => void` | - | Función llamada al hacer clic en una pregunta |
| `selectedQuestionId` | `string` | - | ID de la pregunta seleccionada |
| `className` | `string` | - | Clases CSS adicionales |

### Ejemplos

```jsx
// QuestionList básico
<QuestionList 
  questions={questions}
/>

// QuestionList con manejador de clic
<QuestionList 
  questions={questions}
  onQuestionClick={(questionId) => setSelectedQuestionId(questionId)}
  selectedQuestionId={selectedQuestionId}
/>
```

## QuestionDetail

El componente `QuestionDetail` muestra información detallada de una pregunta.

### Propiedades

| Propiedad | Tipo | Valor por defecto | Descripción |
|-----------|------|-------------------|-------------|
| `question` | `Question` | - | Datos de la pregunta |
| `onEdit` | `() => void` | - | Función llamada al editar la pregunta |
| `onDelete` | `() => void` | - | Función llamada al eliminar la pregunta |
| `className` | `string` | - | Clases CSS adicionales |

### Ejemplos

```jsx
// QuestionDetail básico
<QuestionDetail 
  question={question}
/>

// QuestionDetail con manejadores
<QuestionDetail 
  question={question}
  onEdit={() => navigateToEditQuestion(question.id)}
  onDelete={() => deleteQuestion(question.id)}
/>
```

## AnswerOption

El componente `AnswerOption` muestra una opción de respuesta para una pregunta.

### Propiedades

| Propiedad | Tipo | Valor por defecto | Descripción |
|-----------|------|-------------------|-------------|
| `option` | `AnswerOptionType` | - | Datos de la opción |
| `isSelected` | `boolean` | `false` | Si la opción está seleccionada |
| `isCorrect` | `boolean` | - | Si la opción es correcta (para revisión) |
| `onSelect` | `() => void` | - | Función llamada al seleccionar la opción |
| `disabled` | `boolean` | `false` | Si la opción está deshabilitada |
| `showCorrectness` | `boolean` | `false` | Si se debe mostrar si la opción es correcta |
| `className` | `string` | - | Clases CSS adicionales |

### Ejemplos

```jsx
// AnswerOption básico
<AnswerOption 
  option={{ id: "1", text: "Opción 1" }}
/>

// AnswerOption seleccionado
<AnswerOption 
  option={{ id: "1", text: "Opción 1" }}
  isSelected={true}
  onSelect={() => selectOption("1")}
/>

// AnswerOption en modo revisión
<AnswerOption 
  option={{ id: "1", text: "Opción 1" }}
  isSelected={selectedOption === "1"}
  isCorrect={correctOption === "1"}
  showCorrectness={true}
  disabled={true}
/>
```

## ReviewQuestionSet

El componente `ReviewQuestionSet` permite revisar un conjunto de preguntas y respuestas.

### Propiedades

| Propiedad | Tipo | Valor por defecto | Descripción |
|-----------|------|-------------------|-------------|
| `questions` | `Question[]` | - | Lista de preguntas |
| `userAnswers` | `Record<string, string>` | - | Respuestas del usuario |
| `correctAnswers` | `Record<string, string>` | - | Respuestas correctas |
| `onFinishReview` | `() => void` | - | Función llamada al finalizar la revisión |
| `className` | `string` | - | Clases CSS adicionales |

### Ejemplos

```jsx
// ReviewQuestionSet básico
<ReviewQuestionSet 
  questions={questions}
  userAnswers={userAnswers}
  correctAnswers={correctAnswers}
/>

// ReviewQuestionSet con manejador de finalización
<ReviewQuestionSet 
  questions={questions}
  userAnswers={userAnswers}
  correctAnswers={correctAnswers}
  onFinishReview={() => navigate("/dashboard")}
/>
```

## UserAnswers

El componente `UserAnswers` muestra las respuestas de un usuario a un examen.

### Propiedades

| Propiedad | Tipo | Valor por defecto | Descripción |
|-----------|------|-------------------|-------------|
| `answers` | `Record<string, string>` | - | Respuestas del usuario |
| `questions` | `Question[]` | - | Lista de preguntas |
| `correctAnswers` | `Record<string, string>` | - | Respuestas correctas |
| `showCorrectness` | `boolean` | `false` | Si se debe mostrar si las respuestas son correctas |
| `className` | `string` | - | Clases CSS adicionales |

### Ejemplos

```jsx
// UserAnswers básico
<UserAnswers 
  answers={userAnswers}
  questions={questions}
/>

// UserAnswers con verificación de respuestas correctas
<UserAnswers 
  answers={userAnswers}
  questions={questions}
  correctAnswers={correctAnswers}
  showCorrectness={true}
/>
``` 