# ADL.md - Uso do PostgreSQL como Banco de Dados

## Data
08-05-2025

## Status
Aceito

## Contexto
Durante a definição da arquitetura do projeto, foi necessário escolher um sistema de gerenciamento de banco de dados (SGBD) que atendesse aos requisitos de confiabilidade, consistência, robustez, suporte à modelagem relacional e boa performance em consultas complexas. A decisão precisava considerar também a familiaridade da equipe com a tecnologia e o suporte da comunidade.

## Decisão
O banco de dados escolhido para o projeto será o **PostgreSQL**, por se tratar de um SGBD open source altamente confiável e amplamente utilizado em ambientes corporativos e de missão crítica.

### Motivos para a escolha do PostgreSQL:
- **Confiabilidade e Robustez**: PostgreSQL é conhecido por sua conformidade com padrões ACID e excelente capacidade de manutenção de integridade dos dados.
- **Suporte a Modelagem Relacional Avançada**: Oferece suporte a tipos de dados avançados, constraints poderosas, e relacionamentos complexos com facilidade.
- **Comunidade Ativa e Suporte**: Uma comunidade madura com atualizações regulares e vasta documentação.
- **Ferramentas de Extensão e Integração**: Amplo suporte a extensões como PostGIS, além de fácil integração com diversas linguagens e frameworks.
- **Performance em Consultas Complexas**: Otimizado para operações que envolvem grandes volumes de dados e consultas analíticas.

## Consequências

### Positivas
- **Consistência e Segurança dos Dados**: Garantia de integridade transacional, ideal para aplicações críticas.
- **Ampla Adoção Corporativa**: Facilita contratação de profissionais e suporte em longo prazo.
- **Compatibilidade com Ferramentas Populares**: Integra-se bem com ORMs como Sequelize, Prisma e ferramentas de BI.

### Negativas
- **Curva de Aprendizado para Recursos Avançados**: Algumas funcionalidades podem exigir estudo mais aprofundado para uso eficaz.
- **Gerenciamento de Escalabilidade Horizontal**: Embora seja possível escalar horizontalmente, requer ferramentas ou arquiteturas adicionais (ex: CitusDB, sharding manual).

## Alternativas Consideradas

- **MySQL/MariaDB**: SGBDs populares com bom desempenho, mas com menor suporte a recursos avançados de modelagem e menor conformidade com padrões SQL.
- **MongoDB (NoSQL)**: Oferece escalabilidade e flexibilidade para dados sem estrutura fixa, mas não atende à necessidade de consistência transacional e modelagem relacional forte.
- **SQLite**: Útil para aplicações leves, mas não adequado para cenários multiusuário ou de alta concorrência.

PostgreSQL foi escolhido por fornecer um equilíbrio ideal entre robustez, escalabilidade e poder de modelagem relacional.

## Conclusão
A escolha do **PostgreSQL** como banco de dados do projeto nos proporciona uma base sólida, confiável e escalável para o desenvolvimento. Ele atende tanto às exigências técnicas quanto às operacionais, sendo uma tecnologia madura e consolidada no mercado.
