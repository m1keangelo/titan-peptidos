# Titan Peptidos - Deployment Guide

## Deploy en Coolify (Hostinger VPS)

### 1. Preparar el Servidor

```bash
# En tu VPS Hostinger (Miami)
ssh root@your-vps-ip

# Actualizar sistema
apt update && apt upgrade -y

# Instalar Docker
curl -fsSL https://get.docker.com | sh

# Instalar Coolify
curl -fsSL https://cdn.coollabs.io/coolify/install.sh | bash
```

### 2. Configurar Coolify

1. Acceder a Coolify: `http://your-vps-ip:8000`
2. Crear proyecto: "titan-peptidos"
3. Configurar Git (GitHub/GitLab) o subir código manualmente

### 3. Dockerfile

Crear `Dockerfile` en raíz:

```dockerfile
FROM node:20-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Automatically leverage output traces to reduce image size
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]
```

### 4. Variables de Entorno

En Coolify, configurar:

```env
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://titanpeptidos.com
```

### 5. Configurar Dominio

1. Comprar dominio: `titanpeptidos.com` (o el que elijas)
2. Apuntar DNS al VPS: `A record → your-vps-ip`
3. En Coolify: Settings → Domains → Add `titanpeptidos.com`
4. Enable SSL (Let's Encrypt)

### 6. Deploy

```bash
# Opción A: Git Push (recomendado)
git push origin main
# Coolify auto-deploy on push

# Opción B: Manual
# Subir archivo ZIP a Coolify
```

### 7. Verificar Deploy

```bash
# Ver logs
docker logs -f container_name

# Verificar sitio
curl -I https://titanpeptidos.com
```

## Estructura de Deploy

```
Coolify Project: titan-peptidos
├── Service: Frontend (Next.js)
│   ├── Domain: titanpeptidos.com
│   ├── SSL: Let's Encrypt
│   └── Env: Production
│
└── Service: Backend (Próximamente)
    ├── Payload CMS
    └── PostgreSQL
```

## Rollback

Si algo falla:

```bash
# En Coolify dashboard
# 1. Ir a Deployments
# 2. Seleccionar versión anterior
# 3. Click "Rollback"
```

## Monitoreo

- Coolify Dashboard: Uso de recursos, logs
- Uptime: Configurar alertas en Coolify
- Analytics: Google Analytics 4

## Seguridad

- [ ] Cambiar contraseñas por defecto
- [ ] Configurar firewall (Coolify lo hace automático)
- [ ] SSL forzado (HTTPS only)
- [ ] Headers de seguridad (Next.js los maneja)

---

*Deploy documentado por Amaru*
