# 🏥 Sprint 3 - Front-End

### Integrantes

Johnny Dias Mathias Junior      RM: 566516
Luisa Ganasevici de Abreu       RM: 563403
Matheus Arazin de Oliveira      RM: 556649

## 📁 Estrutura Completa do Projeto

Front-End-Sprint-3/
├── node_modules/                 # Dependências do projeto
├── public/                       # Arquivos públicos
│   └── fonts/                   # Fontes customizadas
│       ├── Aa Porcelain.woff
│       ├── hc-usp.png
│       └── logo_hc-square.png
├── src/                         # Código fonte principal
│   ├── assets/                  # Recursos estáticos
│   │   └── members-pics/        # Fotos dos membros
│   │       ├── johnny.jpeg
│   │       ├── luisa.jpg
│   │       ├── matheus.jpeg
│   │       └── sad.svg
│   ├── components/              # Componentes React reutilizáveis
│   │   ├── agendamentos-card.tsx
│   │   ├── agendamentos-form.tsx
│   │   ├── agendamentos-list.tsx
│   │   ├── agendamentos-resume.tsx
│   │   ├── aluno.tsx
│   │   ├── fallback.tsx
│   │   ├── layout.tsx
│   │   ├── loading.tsx
│   │   ├── teleconsulta-card.tsx
│   │   ├── teleconsulta-form.tsx
│   │   └── teleconsulta-list.tsx
│   ├── pages/                   # Páginas da aplicação
│   │   ├── ajuda.tsx
│   │   ├── contato.tsx
│   │   ├── home.tsx
│   │   ├── meus-resultados.tsx
│   │   ├── not-found.tsx
│   │   ├── nova-teleconsulta.tsx
│   │   ├── novo-agendamento.tsx
│   │   ├── quem-somos.tsx
│   │   ├── recetias.tsx
│   │   ├── sobre.tsx
│   │   ├── teleconsulta-details.tsx
│   │   └── teleconsulta.tsx
│   ├── schemas/                 # Schemas de validação
│   │   ├── agendamentos-schema.tsx
│   │   └── teleconsulta-schema.tsx
│   └── types/                   # Definições de tipos TypeScript
│       ├── agendamentos-props.tsx
│       ├── agendamentos.tsx
│       ├── aluno-props.tsx
│       ├── teleconsulta-props.tsx
│       └── teleconsulta.tsx
├── App.css
├── App.tsx
├── index.css
├── main.tsx
├── vite-env.d.ts
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts


---

## 🚀 Tecnologias Utilizadas

- ⚛️ **React** com **TypeScript**  
- ⚡ **Vite** como build tool  
- 🧹 **ESLint** para linting  
- 🎨 **CSS** para estilização  

---

## 📋 Funcionalidades Principais

### 🗓️ Módulo de Agendamentos
- **agendamentos-form.tsx** → Formulário de agendamento  
- **agendamentos-list.tsx** → Listagem de agendamentos  
- **agendamentos-card.tsx** → Cartões de agendamento  
- **agendamentos-resume.tsx** → Resumo de agendamentos  

### 💻 Módulo de Teleconsultas
- **teleconsulta-form.tsx** → Formulário de teleconsulta  
- **teleconsulta-list.tsx** → Listagem de teleconsultas  
- **teleconsulta-card.tsx** → Cartões de teleconsulta  
- **teleconsulta-resume.tsx** → Resumo de teleconsultas  

---

## 🌐 Páginas do Sistema

### 📌 Páginas Principais
- **home.tsx** → Página inicial  
- **meus-resultados.tsx** → Acompanhamento de exames e resultados  
- **not-found.tsx** → Página 404  

### 📌 Agendamentos
- **nova-teleconsulta.tsx** → Agendamento de consultas online  
- **novo-agendamento.tsx** → Agendamento de consultas presenciais  
- **teleconsulta.tsx** → Lista de teleconsultas  
- **teleconsulta-details.tsx** → Detalhes/Chamada da teleconsulta  

### 📌 Institucional
- **quem-somos.tsx** → Informações sobre a equipe  
- **sobre.tsx** → Sobre a solução  
- **ajuda.tsx** → Central de ajuda  
- **contato.tsx** → Contatos  

### 📌 Recursos Médicos
- **receitas.tsx** → Área de prescrições e receitas médicas  

---

## 🔧 Componentes Utilitários

- **aluno.tsx** → Componente de perfil do aluno  
- **layout.tsx** → Layout principal da aplicação  
- **loading.tsx** → Componente de carregamento  
- **fallback.tsx** → Fallback para *error boundaries*  

---

Link do GitHub: https://github.com/CH-FIAP-2025-1TDSPV-JLM-MeSocorre-HC/Front-End-Sprint-3

Link do YouTube: https://youtu.be/Yi8vTy4gO0o