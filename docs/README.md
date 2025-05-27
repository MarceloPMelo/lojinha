# Documentação do Projeto Lojinha

Este diretório contém a documentação do projeto Lojinha, incluindo as decisões de arquitetura (ADRs).

## Architecture Decision Records (ADRs)

Os ADRs são documentos que capturam decisões arquiteturais importantes feitas no projeto. Cada ADR descreve:

- O contexto em que a decisão foi tomada
- A decisão em si
- As consequências da decisão

### Estrutura dos ADRs

Cada ADR segue o formato:

```markdown
# N. Título

Data: YYYY-MM-DD

## Status

[Proposto | Aceito | Depreciado | Substituído]

## Contexto

[Descrição do contexto em que a decisão foi tomada]

## Decisão

[Descrição da decisão tomada]

## Consequências

### Positivas
- [Lista de consequências positivas]

### Negativas
- [Lista de consequências negativas]
```

### Lista de ADRs

1. [Registro de Decisões de Arquitetura](adr/0001-record-architecture-decisions.md)
2. [Stack de Frontend](adr/0002-frontend-stack.md)
3. [Design da Interface](adr/0003-interface-design.md)

## Como Contribuir

Ao fazer mudanças significativas na arquitetura do projeto:

1. Crie um novo ADR no diretório `adr/`
2. Use o formato padrão descrito acima
3. Atualize este README se necessário
4. Submeta as alterações para revisão 