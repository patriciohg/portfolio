# Etapa de construcción
FROM node:18-alpine as builder

WORKDIR /app

COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
RUN npm run export

# Etapa de producción con NGINX
FROM nginx:alpine

# Copiar la versión estática generada a la ruta de contenido de NGINX
COPY --from=builder /app/out /usr/share/nginx/html

# Opcional: Si tienes una configuración personalizada de NGINX, también puedes copiarla
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
