# 🏋️‍♂️ Gerador Inteligente de Cronogramas de Treino

Este é um sistema web que utiliza Inteligência Artificial para gerar cronogramas de treinos personalizados com base em dados físicos, objetivos e preferências do usuário. Ideal para quem quer treinar de forma segura e eficiente.

## 🚀 Funcionalidades

- Cadastro e login de usuários
- Registro de avaliações físicas detalhadas
- Geração automática de cronogramas com ChatGPT
- Armazenamento e visualização dos treinos por dia da semana
- Visualização detalhada dos exercícios (musculação, aeróbico, funcional)
- Estrutura backend com Express + Prisma
- Possibilidade de geração de frontend por IA

## ✅ Requisitos Funcionais

- **RF01** – Cadastro de usuário
- **RF02** – Autenticação via e-mail e senha
- **RF03** – Registro de avaliação física (altura, peso, lesões, etc.)
- **RF04** – Geração de cronograma via IA (ChatGPT)
- **RF05** – Armazenamento do cronograma no banco de dados
- **RF06** – Visualização de treinos por dia da semana
- **RF07** – Visualização detalhada de cada exercício

## 🚫 Requisitos Não Funcionais

- **RNF01** – Armazenamento seguro de senhas com hashing
- **RNF02** – Interface responsiva (desktop e mobile)
- **RNF03** – API RESTful no backend
- **RNF04** – Tolerância a falhas na API de IA

## 👤 Histórias de Usuário

- Como **usuário**, quero **criar minha conta**, para acessar meus treinos.
- Como **usuário**, quero **fazer login**, para acessar meus dados com segurança.
- Como **usuário**, quero **registrar minha avaliação física**, para gerar um cronograma adequado.
- Como **usuário**, quero **receber um cronograma de treino personalizado**, com base em minhas metas.
- Como **usuário**, quero **visualizar meus treinos por dia da semana**, para me organizar melhor.
- Como **usuário**, quero **ver os detalhes dos exercícios do dia**, para saber como executar cada treino.
- Como **usuário**, quero **atualizar minhas informações físicas**, caso meus objetivos mudem.

## 🧱 Tecnologias e Ferramentas

- Node.js
- Express.js
- Prisma ORM
- PostgreSQL (ou outro banco relacional)
- OpenAI API (ChatGPT)
- JWT para autenticação
- IA auxiliar para geração de frontend (opcional)

## 📦 Instalação

```bash
git clone https://github.com/seu-usuario/seu-repo.git
cd seu-repo
npm install
npx prisma migrate dev
npm run dev
