# 🧩 Project Management Fullstack App

Sistema completo para **gerenciamento de projetos e tarefas**, com autenticação JWT, backend em **NestJS + PostgreSQL** e frontend em **Angular + TailwindCSS**.

---

## 🚀 Tecnologias

### 🔙 Backend (API)
- [NestJS](https://nestjs.com/)
- [TypeORM](https://typeorm.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [JWT](https://jwt.io/)
- [Class-validator](https://github.com/typestack/class-validator)
- [bcryptjs](https://www.npmjs.com/package/bcryptjs)

### 🔝 Frontend (SPA)
- [Angular](https://angular.io/)
- [RxJS](https://rxjs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Angular Forms](https://angular.io/guide/reactive-forms)
- [Angular Router](https://angular.io/guide/router)

---

## 📁 Estrutura do Projeto

project-management-app/
├── backend/                  # API REST com NestJS
│   └── src/
│       ├── auth/            # Módulo de autenticação (JWT)
│       ├── users/           # Usuários e perfil
│       ├── projects/        # CRUD de projetos
│       ├── tasks/           # CRUD de tarefas por projeto
│       └── main.ts          # Ponto de entrada da aplicação
│
├── frontend/                # Interface com Angular
│   └── src/
│       ├── app/
│       │   ├── auth/        # Login, cadastro e proteção de rotas
│       │   ├── dashboard/   # Tela principal (projetos e tarefas)
│       │   ├── services/    # Serviços de API e autenticação
│       │   └── shared/      # Componentes reutilizáveis
│       └── main.ts          # Bootstrap do Angular

---

## 🔐 Funcionalidades

### ✅ Autenticação (JWT)
- Registro e login de usuários
- Proteção de rotas com JWT
- Logout do sistema

### 📁 Projetos
- Criar e listar projetos
- Editar e deletar
- Projetos vinculados ao usuário autenticado

### 🧾 Tarefas
- Criar tarefas dentro de um projeto
- Listar tarefas por projeto
- Editar e deletar tarefas

---

## ⚙️ Instalação

### 🔙 Backend

```bash
cd backend

# Instale dependências
npm install

# Configure .env
cp .env.example .env

# Rode a API
npm run start:dev
```

```bash
cd frontend

# Instale dependências
npm install

# Rode o frontend (Angular)
ng serve
```

---
.env

PORT=3000
JWT_SECRET=sua_chave_secreta
JWT_EXPIRATION=1d

DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=postgres
DB_DATABASE=project_manager


| Método | Rota                | Descrição                    | Protegido |
| ------ | ------------------- | ---------------------------- | --------- |
| POST   | `/auth/register`    | Registrar novo usuário       | ❌         |
| POST   | `/auth/login`       | Login com e-mail e senha     | ❌         |
| POST   | `/auth/logout`      | Logout do usuário            | ✅         |
| GET    | `/users/userLogado`         | Dados do usuário autenticado | ✅         |
| POST   | `/projects`         | Criar novo projeto           | ✅         |
| GET    | `/projects`         | Listar projetos do usuário   | ✅         |
| PUT   | `/projects/:id`         | Atualizar novo projeto           | ✅         |
| DELET    | `/projects/:id`         | Deletar projetos do usuário   | ✅         |
| POST   | `/tasks`            | Criar nova tarefa            | ✅         |
| GET    | `/tasks/` | Listar tarefas de um projeto | ✅         |
| PUT   | `/tasks/id`            | Atualizar nova tarefa            | ✅         |
| DELETE    | `/tasks/:id` | deletar tarefas de um projeto | ✅         |
