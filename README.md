# Template de Site para Pizzarias

Este projeto é uma versão **white-label** do site demonstrativo: a estrutura visual e os componentes ficam prontos e os dados da pizzaria ficam concentrados em `data/site.ts`.

## Para vender para outra pizzaria

1. Abra `data/site.ts`.
2. Troque `name`, `shortName`, telefone, WhatsApp, endereço, horários e textos.
3. Ajuste os preços, produtos, categorias e imagens.
4. Cole o embed do Google Maps em `mapEmbed`.
5. Substitua os depoimentos de demonstração por avaliações reais do cliente.
6. Se quiser outra identidade visual, altere as cores em `app/globals.css`.

## Instalação

```bash
npm install
npm run dev
```

## Produção

```bash
npm run build
npm start
```

### Estratégia comercial

O projeto foi pensado para funcionar como um **modelo base**: você apresenta o mesmo layout para diferentes pizzarias e personaliza marca, conteúdo, cardápio, fotos, localização e contato antes de publicar.
