# Temel imaj
FROM node:20-alpine

# Çalışma dizini
WORKDIR /app

# Bağımlılıkları yükle
COPY package.json package-lock.json ./
RUN npm install

# Tüm dosyaları kopyala
COPY . .

# Port
EXPOSE 3000

# Uygulamayı başlat
CMD ["npm", "run", "dev"] 