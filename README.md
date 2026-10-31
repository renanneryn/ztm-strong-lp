# ZTM Strong

Landing page da **ZTM STRONG Construções e Empreendimentos LTDA.**: serviços de construção civil, fachadas, impermeabilização, acabamentos, instalações e aluguel de equipamentos, com contato por WhatsApp.

## Stack

React 19, Vite 6, Tailwind CSS 4, motion (framer-motion), TypeScript e lucide-react.

## Rodando localmente

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # gera dist/
npm run lint     # checagem de tipos (tsc --noEmit)
```

## Estrutura

```text
src/
├── assets/        # imagens em WebP (logo, serviços e fotos das obras em projects/)
├── components/    # Header, Hero, Services, Values, SocialProof, Footer, PrivacyPolicy...
├── App.tsx        # página principal
└── main.tsx       # entrada; serve /politica-de-privacidade sem router
public/            # favicon.png e og.jpg (prévia de compartilhamento)
```

## Imagens

Use WebP. Fotos de serviços com no máximo ~1000 px de largura e a logo com ~400 px. As galerias de `src/assets/projects/` são carregadas sob demanda pelo `SocialProof`.

> O componente `SocialProof` (galeria de obras) existe, mas hoje não é renderizado em `App.tsx`.

## Deploy

Vercel: build `npm run build`, saída `dist`. O `vercel.json` reescreve todas as rotas para `index.html`, o que atende `/politica-de-privacidade`.
