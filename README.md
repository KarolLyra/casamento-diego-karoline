# 💍 Diego & Karoline — Site de Fotos do Casamento

Site estático com design de convite de casamento premium — elegante, romântico e sofisticado. Os convidados acessam pelo celular e enviam fotos por meio de um Google Forms.

---

## 📁 Estrutura do Projeto

```
casamento/
├── index.html          → Página principal
├── style.css           → Estilos visuais (variáveis no topo)
├── script.js           → JavaScript mínimo
├── README.md           → Este arquivo
└── assets/
    ├── casal.jpg       → Foto do casal
    └── favicon.svg     → Ícone da aba (D&K)
```

---

## 🖼️ Como trocar a foto do casal

1. Substitua o arquivo `assets/casal.jpg` pela nova foto.
2. Recomenda-se uma foto em orientação **retrato (vertical)** com pelo menos **800px de largura**.
3. Para ajustar o enquadramento (foco) da foto, abra o arquivo `style.css` e altere a variável:
   ```css
   --photo-position: center 25%;
   ```
   - `center center` = centro da imagem
   - `center top` = foco no topo
   - `center 25%` = foco nos rostos (padrão)
   - `center 40%` = foco um pouco abaixo do centro

4. Para alterar a altura da foto na tela:
   ```css
   --photo-height: 40dvh;  /* Ajuste entre 30dvh e 50dvh */
   ```

---

## 🔗 Como alterar o link do Google Forms

1. Abra o arquivo `index.html`.
2. Localize o elemento `<a class="hero__btn" ...>`.
3. Altere o valor do atributo `href` para o novo link do formulário.

---

## 💻 Como abrir o site localmente

### Opção 1 — Abrir diretamente
Dê um duplo clique no arquivo `index.html`. O site abrirá no seu navegador padrão.

### Opção 2 — Servidor local (recomendado para testar)
Se tiver Python instalado:
```bash
# Python 3
python3 -m http.server 8000

# Depois acesse no navegador:
# http://localhost:8000
```

Se tiver Node.js:
```bash
npx serve .
```

---

## 🚀 Como publicar no GitHub Pages

1. Crie um repositório no GitHub (ex: `casamento-diego-karoline`).
2. No terminal, dentro da pasta do projeto:
   ```bash
   git init
   git add .
   git commit -m "Site do casamento"
   git branch -M main
   git remote add origin https://github.com/SEU_USUARIO/casamento-diego-karoline.git
   git push -u origin main
   ```
3. No GitHub, vá em **Settings → Pages**.
4. Em **Source**, selecione **Deploy from a branch**.
5. Escolha a branch `main` e pasta `/ (root)`.
6. Clique em **Save**.
7. Após alguns minutos, o site estará disponível em:
   ```
   https://SEU_USUARIO.github.io/casamento-diego-karoline/
   ```

---

## 📱 Como testar no celular

### Pelo GitHub Pages
Após publicar, abra o link no celular ou envie para si mesmo pelo WhatsApp.

### Na rede local (antes de publicar)
1. Inicie um servidor local (veja acima).
2. Descubra seu IP local:
   ```bash
   # Linux/Mac
   hostname -I
   # ou
   ifconfig | grep "inet "
   ```
3. No celular (na mesma rede Wi-Fi), acesse:
   ```
   http://SEU_IP:8000
   ```

---

## ✏️ Como alterar textos, cores e posição da foto

### Textos
Todos os textos estão no `index.html`. Basta editar diretamente o conteúdo das tags.

### Cores
No início do `style.css`, altere as variáveis em `:root`:
```css
--blue-deep: #213A5C;        /* Azul profundo (textos e botão) */
--blue-serenity: #91A8D0;    /* Azul serenity (destaques) */
--blue-light: #DCE7F4;       /* Azul claro */
--gold: #C9A45F;             /* Dourado (detalhes e bordas) */
--white-warm: #FAF8F3;       /* Fundo principal */
--beige: #F4EFE7;            /* Bege alternativo */
```

### Altura da foto
```css
--photo-height: 40dvh;  /* Ajuste entre 30dvh e 50dvh */
```

### Enquadramento da foto
```css
--photo-position: center 25%;  /* Mude conforme necessidade */
```

---

## 🗜️ Como comprimir a foto antes de publicar

Para garantir carregamento rápido (especialmente em 4G):

1. **Online (gratuito):**
   - [Squoosh](https://squoosh.app/) — Arraste a foto e exporte como JPEG com qualidade 75-80%.
   - [TinyJPG](https://tinyjpg.com/) — Comprime automaticamente.

2. **No terminal (se tiver ImageMagick):**
   ```bash
   convert assets/casal.jpg -resize 1000x -quality 80 assets/casal.jpg
   ```

**Meta:** manter a foto abaixo de **200KB** para carregamento rápido.

---

## ✅ Como verificar o link compartilhado no WhatsApp

1. Publique o site no GitHub Pages.
2. Copie o link: `https://SEU_USUARIO.github.io/casamento-diego-karoline/`
3. Cole em uma conversa do WhatsApp (pode ser "Mensagens salvas").
4. O WhatsApp deve exibir:
   - **Título:** Diego & Karoline | Compartilhe suas fotos
   - **Descrição:** Compartilhe os momentos especiais do casamento de Diego e Karoline.
   - **Imagem:** A foto do casal

> **Dica:** Se a imagem não aparecer, aguarde alguns minutos para o cache do WhatsApp atualizar. Você também pode usar o [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) para forçar a atualização.

---

## 📋 Resumo técnico

- Design inspirado em convite de casamento de papelaria fina
- Paleta azul profundo, azul serenity, dourado e branco quente
- Elementos florais em SVG (aquarela azul, folhas douradas, pétalas brancas)
- Divisores e ornamentos dourados
- Tipografia: Great Vibes (nomes), Cormorant Garamond (mensagem), Montserrat (corpo)
- Textura de papel no fundo (CSS puro, sem imagem externa)
- Transição suave entre foto e conteúdo (gradiente + borda orgânica)
- HTML semântico e acessível
- CSS puro com variáveis customizáveis
- JavaScript mínimo (funciona sem ele)
- Responsivo mobile-first (320px a 480px+)
- Suporte a safe areas do iPhone (notch/barra inferior)
- Animações respeitam `prefers-reduced-motion`
- Otimizado para Lighthouse e GitHub Pages
- 100% gratuito, sem backend e sem dependências pagas
