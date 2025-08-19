# evaluacion

Este proyecto es una API básica en **Node.js** que se despliega en **Render** usando **Docker** y **GitHub Actions**.  
Incluye **CI/CD**, pruebas unitarias con **Jest**, y ejemplos de manejo seguro de credenciales.

---

## 🗂 Estructura del proyecto

evaluacion/
├─ .github/workflows/
│ ├─ ci.yml
│ └─ deploy-prod.yml
├─ tests/
│ └─ health.test.js
├─ .dockerignore
├─ .gitignore
├─ .env.example
├─ Dockerfile
├─ app.js
├─ index.js
├─ package.json
└─ README.md

---

## 📌 Cronología de commits

### **Commit 1 — Inicializar proyecto**
- **Mensaje:** `chore: initial project scaffold`
- **Archivos agregados:** `package.json`, `app.js`, `index.js`, `README.md`
- **Descripción:** Se crea la estructura base del proyecto y el endpoint `/` con Express.