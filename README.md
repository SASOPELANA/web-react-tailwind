# ⚡ Proyecto React + Tailwind + Vercel

Este proyecto está construido con **React** y estilizado con **Tailwind CSS**, y se despliega fácilmente usando **Vercel**.

---

<img src="./public/web-react.webp" alt="Deploy Vercel" />

---

## 🚀 Tecnologías

- ⚛️ React
- 🎨 Tailwind CSS
- 🌐 Vercel (deploy)

---

## 📦 Instalación

1. Cloná este repo:

   ```bash
   git clone https://github.com/SASOPELANA/web-react-tailwind.git

   cd web-react-tailwind
   ```

2. Instalá las dependencias:

   ```bash
   npm install
   ```

3. Iniciá el entorno de desarrollo:
   ```bash
   npm run dev
   ```

---

## 🌈 Scripts útiles

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "deploy": "vercel --prod"
}
```

---

## 🧾 Despliegue con Vercel CLI

### 📦 Instalación

#### Global (recomendado)

```bash
npm install -g vercel
```

#### Local (opcional)

```bash
npm install vercel --save-dev
```

---

### 🔧 Comandos principales

#### 1. Deploy de preview

```bash
vercel
```

- Despliega una **versión temporal de preview**.
- URL: `https://tu-proyecto-hash.vercel.app`

#### 2. Deploy a producción

```bash
vercel --prod
```

- Sube tu app al dominio oficial:  
  `https://tu-proyecto.vercel.app`

---

### 🔁 Flujo típico de deploy

```bash
vercel          # 1. Preview
vercel --prod   # 2. Producción (si todo va bien)
```

---

## 📂 Estructura básica del proyecto

```
mi-proyecto/
├── public/
├── src/
│   ├── components/
│   ├── App.jsx
│   └── main.jsx
├── tailwind.config.js
├── postcss.config.js
├── index.html
├── package.json
└── vite.config.js
```

---

## 🛑 `.gitignore` recomendado

```gitignore
node_modules/
.env
.vercel/
dist/
```

---

## 🧑‍💻 Autor

Hecho por el programapor [Sergio Devs].
