# Portfolio

Site de portfólio pessoal com projetos do GitHub.

## Como rodar no VS Code

### 1. Instale as dependências

Abra o terminal na pasta do projeto e rode:

```bash
npm install
```

### 2. Rode o servidor de desenvolvimento

```bash
npm run dev
```

Acesse `http://localhost:5173` no navegador.

### 3. Como gerar o build final

```bash
npm run build
```

Os arquivos prontos para hospedagem ficam na pasta `dist/`.

---

## Como personalizar

Abra o arquivo `src/pages/home.tsx` e mude o username:

```ts
const GITHUB_USERNAME = "seu-username-aqui";
```

Também mude os links de LinkedIn e email no arquivo `src/components/hero.tsx`.

---

## Como subir no GitHub Pages

Após rodar `npm run build`:

1. Instale o pacote: `npm install --save-dev gh-pages`
2. Adicione ao `package.json`:
   ```json
   "homepage": "https://seu-usuario.github.io/nome-do-repo",
   "scripts": {
     "deploy": "gh-pages -d dist"
   }
   ```
3. Rode: `npm run deploy`
