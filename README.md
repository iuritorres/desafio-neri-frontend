# Guia de Instalação do Projeto

_OBS_: É importante destacar que para que o projeto funcione como esperado, é necessário ter o backend encontrado no repositório [desafio-neri-api](https://github.com/iuritorres/desafio-neri-api) rodando, caso faça uma mudança na URL ou na rota de conexão com a API, atualize também a constante `API_URL` em `src/api/desafio-neri-api.ts`.

**1. Clone o repositório:**

```bash
git clone https://github.com/iuritorres/desafio-neri-frontend.git
```

**2. Dentro da pasta do projeto, instale as dependências:**

```bash
cd .\desafio-neri-frontend\
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

## Descrição do Projeto

Este projeto é um FrontEnd Web desenvolvido para o desafio técnico da Neri.
Ele utiliza Typescript e React consumindo a API [desafio-neri-api](https://github.com/iuritorres/desafio-neri-api).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

-   Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
	languageOptions: {
		// other options...
		parserOptions: {
			project: ["./tsconfig.node.json", "./tsconfig.app.json"],
			tsconfigRootDir: import.meta.dirname,
		},
	},
});
```

-   Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
-   Optionally add `...tseslint.configs.stylisticTypeChecked`
-   Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
	// Set the react version
	settings: { react: { version: "18.3" } },
	plugins: {
		// Add the react plugin
		react,
	},
	rules: {
		// other rules...
		// Enable its recommended rules
		...react.configs.recommended.rules,
		...react.configs["jsx-runtime"].rules,
	},
});
```
