# Roadmap Técnico para o Projeto de Cronograma de Treinos

Este roadmap detalha as fases para implementar o sistema de forma incremental e organizada.

---

## Fase 1 — MVP simples com CRUD

**Objetivo:** Permitir cadastro, login, avaliação física e geração básica de planejamento.

- Implementar autenticação (cadastro e login).
- CRUD de usuários.
- CRUD de avaliação física.
- Integração básica com ChatGPT (simulando uma resposta).
- Armazenar planejamentos de treino com respostas mockadas.

---

## Fase 2 — Treinos e Exercícios

- Implementar CRUD de treinos diários.
- Associar exercícios aos treinos.
- Modelar os três tipos de exercício:
  - Musculação
  - Aeróbio
  - Funcional

---

## Fase 3 — Execução e Histórico

- Registrar sessões de treino do usuário.
- Registrar execução real dos exercícios (carga, repetições, duração).
- Consultar histórico de sessões.
- Gerar relatórios simples por período (semana, mês).

---

## Fase 4 — Integrações e Inteligência Artificial

- Integrar a API real do OpenAI para gerar cronogramas.
- Permitir ajustes dinâmicos no planejamento via IA.
- Criar dashboard com gráficos de progresso e desempenho.

---

> **Dica:** Em cada fase, implemente testes automatizados, valide os dados de entrada e documente sua API para facilitar manutenção e expansão futura.
