# Nuxt 4 - Full Stack Application

Proyecto desarrollado durante el curso de Nuxt 4 de Fernando Herrera.

![Nuxt](https://img.shields.io/badge/Nuxt-4-00DC82)
![Vue](https://img.shields.io/badge/Vue-3-42B883)
![Prisma](https://img.shields.io/badge/Prisma-ORM-2D3748)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-336791)

## 📚 Descripción

Aplicación Full Stack construida con Nuxt 4 que implementa:

- Renderizado con Vue 3
- Server API Routes
- Prisma ORM
- PostgreSQL
- Seeds de base de datos
- TypeScript
- Validaciones con Zod

El objetivo del proyecto es aprender la creación de aplicaciones modernas utilizando una única base de código para frontend y backend.

---

## 🚀 Tecnologías

| Tecnología   | Uso                  |
| ------------ | -------------------- |
| Nuxt 4       | Framework Full Stack |
| Vue 3        | UI Framework         |
| TypeScript   | Tipado estático      |
| Prisma       | ORM                  |
| PostgreSQL   | Base de datos        |
| Zod          | Validaciones         |
| Tailwind CSS | Estilos              |
| Nuxt UI      | Componentes UI       |

---

## 📂 Estructura del Proyecto

```bash
app/
├── assets/
├── components/
├── layouts/
├── pages/
└── utils/

server/
├── api/
├── utils/
└── shared/

prisma/
├── migrations/
├── generated/
└── schema.prisma

seed/
├── seed-database.ts
└── site-reviews.ts
```

---

## ⚙️ Variables de Entorno

Crear un archivo `.env`

```env
DATABASE_URL="postgresql://user:password@host/database"
```

Puedes utilizar el archivo `.env.template` como referencia.

---

## 📦 Instalación

Clonar repositorio:

```bash
git clone https://github.com/missael07/02-site.git
```

Entrar al proyecto:

```bash
cd 02-site
```

Instalar dependencias:

```bash
npm install
```

---

## 🗄️ Base de Datos

Generar cliente Prisma:

```bash
npx prisma generate
```

Aplicar migraciones:

```bash
npx prisma migrate dev
```

---

## 🌱 Datos Iniciales

Ejecutar seed:

```bash
npm run seed
```

---

## ▶️ Desarrollo

Levantar aplicación:

```bash
npm run dev
```

Abrir:

```text
http://localhost:3000
```

---

## 🏗️ Producción

Build:

```bash
npm run build
```

Preview:

```bash
npm run preview
```

---

## 📜 Scripts

```bash
npm run dev
npm run build
npm run generate
npm run preview
npm run seed
```

---

## 🎯 Temas Aprendidos

- Routing en Nuxt
- Layouts
- Server API Routes
- Prisma ORM
- PostgreSQL
- Validaciones
- TypeScript
- Full Stack Development
- Data Seeding
- Componentización

---

## 👨‍💻 Autor

Missael Padilla

- GitHub: https://github.com/missael07

---

## 🙏 Créditos

Proyecto desarrollado siguiendo el curso de Nuxt 4 impartido por Fernando Herrera.
