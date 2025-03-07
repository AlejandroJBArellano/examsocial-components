# Componentes de Navegación

Esta sección documenta los componentes relacionados con navegación disponibles en la biblioteca ExamSocial Components.

## Índice

1. [Navbar](#navbar)
2. [Tab](#tab)
3. [MenuItem](#menuitem)

## Navbar

El componente `Navbar` proporciona una barra de navegación principal para la aplicación.

### Propiedades

| Propiedad | Tipo | Valor por defecto | Descripción |
|-----------|------|-------------------|-------------|
| `logo` | `ReactNode \| string` | - | Logo de la aplicación (componente o URL) |
| `items` | `Array<{ label: string, href: string, icon?: ReactNode, isActive?: boolean }>` | `[]` | Elementos de navegación |
| `actions` | `ReactNode` | - | Acciones adicionales (botones, menús, etc.) |
| `userMenu` | `{ user: { name: string, avatar?: string, isPremium?: boolean }, items: Array<{ label: string, href?: string, onClick?: () => void, icon?: ReactNode }> }` | - | Menú de usuario |
| `mobileMenuOpen` | `boolean` | `false` | Si el menú móvil está abierto |
| `onMobileMenuToggle` | `() => void` | - | Función llamada al alternar el menú móvil |
| `sticky` | `boolean` | `true` | Si la barra de navegación debe ser fija en la parte superior |
| `className` | `string` | - | Clases CSS adicionales |

### Ejemplos

```jsx
// Navbar básico
<Navbar 
  logo={<img src="/logo.svg" alt="ExamSocial" />}
  items={[
    { label: "Home", href: "/", isActive: true },
    { label: "Exams", href: "/exams" },
    { label: "Create", href: "/exams/create" },
    { label: "Explore", href: "/explore" },
  ]}
/>

// Navbar con acciones y menú de usuario
<Navbar 
  logo={<img src="/logo.svg" alt="ExamSocial" />}
  items={[
    { label: "Home", href: "/", isActive: true },
    { label: "Exams", href: "/exams" },
    { label: "Create", href: "/exams/create" },
    { label: "Explore", href: "/explore" },
  ]}
  actions={
    <Button theme="primary" size="sm">Upgrade</Button>
  }
  userMenu={{
    user: {
      name: "John Doe",
      avatar: "https://example.com/avatar.jpg",
      isPremium: true,
    },
    items: [
      { label: "Profile", href: "/profile" },
      { label: "Settings", href: "/settings" },
      { label: "Logout", onClick: handleLogout },
    ]
  }}
  mobileMenuOpen={isMobileMenuOpen}
  onMobileMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
/>

// Navbar no fijo
<Navbar 
  logo="ExamSocial"
  items={[
    { label: "Home", href: "/" },
    { label: "Exams", href: "/exams" },
  ]}
  sticky={false}
/>
```

## Tab

El componente `Tab` proporciona un sistema de pestañas para navegación dentro de una página.

### Propiedades

| Propiedad | Tipo | Valor por defecto | Descripción |
|-----------|------|-------------------|-------------|
| `tabs` | `Array<{ label: string, id: string, icon?: ReactNode, disabled?: boolean }>` | - | Lista de pestañas |
| `activeTab` | `string` | - | ID de la pestaña activa |
| `onChange` | `(tabId: string) => void` | - | Función llamada al cambiar de pestaña |
| `variant` | `"default" \| "pills" \| "underline"` | `"default"` | Variante visual de las pestañas |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Tamaño de las pestañas |
| `fullWidth` | `boolean` | `false` | Si las pestañas deben ocupar todo el ancho disponible |
| `className` | `string` | - | Clases CSS adicionales |

### Ejemplos

```jsx
// Tab básico
<Tab 
  tabs={[
    { label: "All Exams", id: "all" },
    { label: "My Exams", id: "my" },
    { label: "Shared", id: "shared" },
  ]}
  activeTab="all"
  onChange={(tabId) => setActiveTab(tabId)}
/>

// Tab con iconos y variante pills
<Tab 
  tabs={[
    { label: "All", id: "all", icon: <AllIcon /> },
    { label: "Mine", id: "my", icon: <UserIcon /> },
    { label: "Shared", id: "shared", icon: <ShareIcon /> },
    { label: "Archived", id: "archived", icon: <ArchiveIcon />, disabled: true },
  ]}
  activeTab="my"
  onChange={(tabId) => setActiveTab(tabId)}
  variant="pills"
/>

// Tab con ancho completo y variante underline
<Tab 
  tabs={[
    { label: "Details", id: "details" },
    { label: "Questions", id: "questions" },
    { label: "Results", id: "results" },
  ]}
  activeTab="questions"
  onChange={(tabId) => setActiveTab(tabId)}
  variant="underline"
  fullWidth
  size="lg"
/>
```

## MenuItem

El componente `MenuItem` proporciona un elemento de menú para menús desplegables o de navegación.

### Propiedades

| Propiedad | Tipo | Valor por defecto | Descripción |
|-----------|------|-------------------|-------------|
| `label` | `string` | - | Texto del elemento de menú |
| `icon` | `ReactNode` | - | Icono opcional |
| `href` | `string` | - | URL de destino (opcional) |
| `onClick` | `() => void` | - | Función llamada al hacer clic (opcional) |
| `isActive` | `boolean` | `false` | Si el elemento está activo |
| `disabled` | `boolean` | `false` | Si el elemento está deshabilitado |
| `danger` | `boolean` | `false` | Si el elemento representa una acción peligrosa |
| `endIcon` | `ReactNode` | - | Icono al final del elemento (opcional) |
| `className` | `string` | - | Clases CSS adicionales |

### Ejemplos

```jsx
// MenuItem básico
<MenuItem 
  label="Profile"
  icon={<UserIcon />}
  href="/profile"
/>

// MenuItem activo
<MenuItem 
  label="Dashboard"
  icon={<DashboardIcon />}
  href="/dashboard"
  isActive
/>

// MenuItem con acción
<MenuItem 
  label="Logout"
  icon={<LogoutIcon />}
  onClick={handleLogout}
/>

// MenuItem de peligro
<MenuItem 
  label="Delete Account"
  icon={<TrashIcon />}
  onClick={handleDeleteAccount}
  danger
/>

// MenuItem con icono al final
<MenuItem 
  label="Settings"
  icon={<SettingsIcon />}
  href="/settings"
  endIcon={<ChevronRightIcon />}
/>

// MenuItem deshabilitado
<MenuItem 
  label="Premium Features"
  icon={<StarIcon />}
  disabled
/>
``` 