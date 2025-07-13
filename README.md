# Formulário de Cadastro React

Este é um pequeno projeto React que implementa um formulário de cadastro de usuários com nome e e-mail. Ao enviar, ele faz uma requisição POST para um endpoint local para registrar o usuário.

---

## Funcionalidades

- Entrada para nome e e-mail.
- Validação básica via HTML (campo email do tipo `email`).
- Envio dos dados via `fetch` para o backend.
- Reset dos campos após envio bem-sucedido.
- Tratamento simples de erros e alertas para o usuário.

---

## Como usar

1. Clone este repositório ou copie os arquivos do projeto.

2. Instale as dependências (supondo que use `create-react-app` ou similar):

```bash
npm install
```

3. Execute a aplicação:

```bash
npm start
```

4. Certifique-se que o backend está rodando em `http://localhost:433/api/register` e aceita requisições POST com JSON:

```json
{
  "nome": "Seu Nome",
  "email": "seu@email.com"
}
```

5. Acesse `http://localhost:3000` (ou outra porta) para ver o formulário e testar.

---

## Estrutura dos arquivos

- `Formulario.jsx` — componente React com o formulário.
- `Formulario.css` — estilos para o formulário.
- `README.md` — este arquivo com instruções.

---

## Detalhes técnicos

- React 18+ (Hooks: useState)
- Envio de dados com fetch API e async/await
- Controle dos campos via estado React (`value` e `onChange`)
- Prevenção do comportamento padrão do form com `e.preventDefault()`

---

## Melhorias possíveis

- Validação mais robusta de campos (ex: regex para e-mail).
- Feedback visual sem usar `alert`.
- Tratamento dos erros HTTP diferentes de 200.

---

## 👨‍💻 Autor

**Gabriel Sampaio**  
Desenvolvedor back-end em formação  
[LinkedIn](https://www.linkedin.com/in/gabrielsampaio) • [GitHub](https://github.com/GabrielSampaioS)