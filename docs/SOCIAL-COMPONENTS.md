# Componentes Sociales

Esta sección documenta los componentes relacionados con funcionalidades sociales disponibles en la biblioteca ExamSocial Components.

## Índice

1. [SocialPost](#socialpost)
2. [Comment](#comment)
3. [FavoriteButton](#favoritebutton)
4. [SaveButton](#savebutton)
5. [ProfilePlaceholder](#profileplaceholder)
6. [PremiumBadge](#premiumbadge)

## SocialPost

El componente `SocialPost` muestra una publicación social con información del autor, contenido y acciones.

### Propiedades

| Propiedad | Tipo | Valor por defecto | Descripción |
|-----------|------|-------------------|-------------|
| `author` | `{ name: string, avatar: string, isPremium?: boolean }` | - | Información del autor |
| `content` | `string` | - | Contenido de la publicación |
| `date` | `string` | - | Fecha de publicación |
| `imageUrl` | `string` | - | URL de la imagen adjunta (opcional) |
| `likes` | `number` | `0` | Número de "me gusta" |
| `comments` | `number` | `0` | Número de comentarios |
| `isLiked` | `boolean` | `false` | Si el usuario actual ha dado "me gusta" |
| `isSaved` | `boolean` | `false` | Si el usuario actual ha guardado la publicación |
| `onLike` | `() => void` | - | Función llamada al dar "me gusta" |
| `onComment` | `() => void` | - | Función llamada al comentar |
| `onSave` | `() => void` | - | Función llamada al guardar |
| `onShare` | `() => void` | - | Función llamada al compartir |
| `className` | `string` | - | Clases CSS adicionales |

### Ejemplos

```jsx
// SocialPost básico
<SocialPost 
  author={{ name: "Juan Pérez", avatar: "https://example.com/avatar.jpg" }}
  content="Este es un post de ejemplo sobre ExamSocial"
  date="2023-05-15T10:30:00Z"
  likes={5}
  comments={2}
/>

// SocialPost con imagen
<SocialPost 
  author={{ name: "María Rodríguez", avatar: "https://example.com/avatar.jpg", isPremium: true }}
  content="Acabo de crear un nuevo examen de matemáticas"
  date="2023-06-20T14:20:00Z"
  imageUrl="https://example.com/exam-preview.jpg"
  likes={12}
  comments={4}
  isLiked={true}
  onLike={() => handleLike(postId)}
  onComment={() => openCommentModal(postId)}
/>

// SocialPost con todas las acciones
<SocialPost 
  author={{ name: "Carlos Sánchez", avatar: "https://example.com/avatar.jpg" }}
  content="Compartiendo mis resultados del último examen"
  date="2023-07-10T09:15:00Z"
  likes={8}
  comments={3}
  isLiked={false}
  isSaved={true}
  onLike={() => handleLike(postId)}
  onComment={() => openCommentModal(postId)}
  onSave={() => handleSave(postId)}
  onShare={() => handleShare(postId)}
/>
```

## Comment

El componente `Comment` muestra un comentario de un usuario en una publicación.

### Propiedades

| Propiedad | Tipo | Valor por defecto | Descripción |
|-----------|------|-------------------|-------------|
| `author` | `{ name: string, avatar: string, isPremium?: boolean }` | - | Información del autor |
| `content` | `string` | - | Contenido del comentario |
| `date` | `string` | - | Fecha del comentario |
| `likes` | `number` | `0` | Número de "me gusta" |
| `isLiked` | `boolean` | `false` | Si el usuario actual ha dado "me gusta" |
| `onLike` | `() => void` | - | Función llamada al dar "me gusta" |
| `onReply` | `() => void` | - | Función llamada al responder |
| `onDelete` | `() => void` | - | Función llamada al eliminar (solo visible para el autor) |
| `className` | `string` | - | Clases CSS adicionales |

### Ejemplos

```jsx
// Comment básico
<Comment 
  author={{ name: "Juan Pérez", avatar: "https://example.com/avatar.jpg" }}
  content="Excelente publicación, muy útil!"
  date="2023-05-15T11:45:00Z"
/>

// Comment con acciones
<Comment 
  author={{ name: "María Rodríguez", avatar: "https://example.com/avatar.jpg", isPremium: true }}
  content="Me encantó este examen, muy bien estructurado"
  date="2023-06-20T15:30:00Z"
  likes={3}
  isLiked={false}
  onLike={() => handleLikeComment(commentId)}
  onReply={() => openReplyModal(commentId)}
/>

// Comment con opción de eliminar (para el autor)
<Comment 
  author={{ name: "Carlos Sánchez", avatar: "https://example.com/avatar.jpg" }}
  content="Gracias por compartir estos recursos"
  date="2023-07-10T10:20:00Z"
  likes={1}
  isLiked={true}
  onLike={() => handleLikeComment(commentId)}
  onReply={() => openReplyModal(commentId)}
  onDelete={() => deleteComment(commentId)}
/>
```

## FavoriteButton

El componente `FavoriteButton` proporciona un botón para marcar elementos como favoritos.

### Propiedades

| Propiedad | Tipo | Valor por defecto | Descripción |
|-----------|------|-------------------|-------------|
| `isFavorite` | `boolean` | `false` | Si el elemento está marcado como favorito |
| `onClick` | `() => void` | - | Función llamada al hacer clic en el botón |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Tamaño del botón |
| `className` | `string` | - | Clases CSS adicionales |

### Ejemplos

```jsx
// FavoriteButton básico
<FavoriteButton 
  isFavorite={false}
  onClick={() => toggleFavorite(itemId)}
/>

// FavoriteButton marcado como favorito
<FavoriteButton 
  isFavorite={true}
  onClick={() => toggleFavorite(itemId)}
/>

// FavoriteButton con tamaño personalizado
<FavoriteButton 
  isFavorite={false}
  onClick={() => toggleFavorite(itemId)}
  size="lg"
/>
```

## SaveButton

El componente `SaveButton` proporciona un botón para guardar elementos.

### Propiedades

| Propiedad | Tipo | Valor por defecto | Descripción |
|-----------|------|-------------------|-------------|
| `isSaved` | `boolean` | `false` | Si el elemento está guardado |
| `onClick` | `() => void` | - | Función llamada al hacer clic en el botón |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Tamaño del botón |
| `className` | `string` | - | Clases CSS adicionales |

### Ejemplos

```jsx
// SaveButton básico
<SaveButton 
  isSaved={false}
  onClick={() => toggleSave(itemId)}
/>

// SaveButton guardado
<SaveButton 
  isSaved={true}
  onClick={() => toggleSave(itemId)}
/>

// SaveButton con tamaño personalizado
<SaveButton 
  isSaved={false}
  onClick={() => toggleSave(itemId)}
  size="sm"
/>
```

## ProfilePlaceholder

El componente `ProfilePlaceholder` muestra un placeholder para perfiles de usuario cuando no hay una imagen disponible.

### Propiedades

| Propiedad | Tipo | Valor por defecto | Descripción |
|-----------|------|-------------------|-------------|
| `name` | `string` | - | Nombre del usuario (se usarán las iniciales) |
| `size` | `"xs" \| "sm" \| "md" \| "lg" \| "xl"` | `"md"` | Tamaño del placeholder |
| `color` | `"primary" \| "secondary" \| "accent" \| "extra"` | `"primary"` | Color de fondo |
| `className` | `string` | - | Clases CSS adicionales |

### Ejemplos

```jsx
// ProfilePlaceholder básico
<ProfilePlaceholder 
  name="Juan Pérez"
/>

// ProfilePlaceholder con tamaño personalizado
<ProfilePlaceholder 
  name="María Rodríguez"
  size="lg"
/>

// ProfilePlaceholder con color personalizado
<ProfilePlaceholder 
  name="Carlos Sánchez"
  size="md"
  color="accent"
/>
```

## PremiumBadge

El componente `PremiumBadge` muestra una insignia para usuarios premium.

### Propiedades

| Propiedad | Tipo | Valor por defecto | Descripción |
|-----------|------|-------------------|-------------|
| `size` | `"xs" \| "sm" \| "md" \| "lg"` | `"md"` | Tamaño de la insignia |
| `variant` | `"icon" \| "text" \| "full"` | `"icon"` | Variante de la insignia |
| `className` | `string` | - | Clases CSS adicionales |

### Ejemplos

```jsx
// PremiumBadge básico (solo icono)
<PremiumBadge />

// PremiumBadge con texto
<PremiumBadge 
  variant="text"
/>

// PremiumBadge completo (icono y texto)
<PremiumBadge 
  variant="full"
  size="lg"
/>
``` 