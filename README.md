# Durá Ventures Landing Page

Landing page premium minimalista para Durá Ventures - Holding de productos SaaS B2B high-ticket.

## Stack Tecnológico

- **React 18+** - Framework UI
- **Vite** - Build tool ultra rápido
- **TailwindCSS** - Estilos utility-first
- **Vercel** - Deploy automático

## Desarrollo Local

```bash
# Instalar dependencias
npm install

# Iniciar servidor desarrollo
npm run dev

# Build producción
npm run build

# Preview build producción
npm run preview
```

## Despliegue en Vercel

### Opción 1: Vercel CLI (Recomendado)

```bash
# Instalar Vercel CLI globalmente
npm i -g vercel

# Deploy
vercel
```

### Opción 2: GitHub Integration

1. Sube el código a un repositorio GitHub
2. Conecta el repositorio en [Vercel Dashboard](https://vercel.com/dashboard)
3. Vercel detectará automáticamente Vite y configurará el deploy

### Opción 3: Deploy Manual

```bash
# Build
npm run build

# La carpeta `dist` contiene los archivos estáticos listos para deploy
```

## Estructura del Proyecto

```
├── public/
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/
│   │   ├── Hero.jsx
│   │   ├── Portfolio.jsx
│   │   ├── Filosofia.jsx
│   │   ├── Numeros.jsx
│   │   ├── Contacto.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── vercel.json
```

## Identidad Visual

### Paleta de Colores
- Negro Absoluto: `#000000`
- Oro Ejecutivo: `#D4AF37`
- Blanco Puro: `#FFFFFF`
- Platino Dark: `#8C8C8C`
- Zinc Oscuro: `#09090b`
- Rojo Borde: `#DC2626`

### Tipografía
- Logo: Playfair Display ExtraBold (900)
- Headings: Inter (400, 600, 700, 900)
- Body: Inter Regular (400)
- Números: JetBrains Mono Regular (400)

## Performance

- Build <10s
- Carga <3s
- Lighthouse Score >95
- Optimizado para SEO y AI Search Engines

## SEO

Incluye:
- Meta tags completos (SEO tradicional, Open Graph, Twitter Cards)
- Schema.org JSON-LD estructurado
- HTML semántico
- robots.txt y sitemap.xml
- Optimizado para AI Search Engines (Perplexity, ChatGPT Search, Gemini)

## Licencia

© 2025 Durá Ventures S.L. | Madrid, España
