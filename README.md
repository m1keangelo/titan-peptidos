# Titan Peptidos

Telemedicina de péptidos premium en Bolivia. Sitio web construido con Next.js 14, React, Tailwind CSS y Framer Motion.

## Características

- **Diseño Premium Oscuro**: Tema de lujo con modo oscuro por defecto
- **4 Paletas de Color**: Midnight, Titan Gold, Bio Teal, Royal Purple (cambio en 1 click)
- **Mobile-First**: Diseño responsive optimizado para móviles
- **Animaciones Suaves**: Framer Motion + GSAP para scroll y micro-interacciones
- **Componentes UI**: Glassmorphism, botones glow, tipografía TITAN

## Estructura del Proyecto

```
titan-peptidos/
├── src/
│   ├── app/                 # Next.js App Router
│   ├── components/          # Componentes React
│   │   ├── ui/             # Componentes base (Button, Dropdown, etc.)
│   │   ├── hero-section.tsx
│   │   ├── how-it-works.tsx
│   │   ├── product-showcase.tsx
│   │   ├── transformations.tsx
│   │   └── ...
│   ├── lib/                 # Utilidades
│   └── styles/              # CSS global
├── public/                  # Assets estáticos
├── docs/                    # Documentación
├── deploy/                  # Configuración de deploy
└── package.json
```

## Instalación

```bash
cd titan-peptidos
npm install
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000)

## Scripts

- `npm run dev` - Modo desarrollo
- `npm run build` - Build de producción
- `npm run start` - Iniciar servidor de producción
- `npm run lint` - Linting con ESLint

## Temas

Cambiar tema en el dropdown del navbar. 4 opciones:

1. **Midnight** (default): Negro + Azul eléctrico
2. **Titan Gold**: Negro + Dorado/Cobre
3. **Bio Teal**: Gris oscuro + Teal médico
4. **Royal Purple**: Negro + Púrpura/Rosa

## Stack Tecnológico

- **Framework**: Next.js 14 (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **Animaciones**: Framer Motion, GSAP
- **Iconos**: Lucide React
- **UI Components**: Radix UI

## Próximos Pasos

- [ ] Integración de pagos (Stripe, MercadoPago)
- [ ] Sistema de autenticación
- [ ] Panel de administración (Payload CMS)
- [ ] Integración WhatsApp (Evolution API)
- [ ] Telehealth (video consultas)
- [ ] Blog y contenido SEO

## Licencia

Privado - Titan Peptidos Bolivia

---

Desarrollado por Amaru 🐍
