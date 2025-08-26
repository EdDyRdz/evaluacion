# evaluacion

Este proyecto es una API básica en **Node.js** que se despliega en **Render** usando **Docker** y **GitHub Actions**.  
Incluye **CI/CD**, pruebas unitarias con **Jest**, y ejemplos de manejo seguro de credenciales.

---

## 🗂 Estructura del proyecto

```bash
evaluacion/
├── backend/
│   ├── github/
│   │   └── workflows/
│   │       ├── ci.yml
│   ├── models/
│   │   ├── User.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── userRoutes.js
│   ├── .env
│   ├── app.js
│   ├── Dockerfile
│   ├── index.js
│   ├── package-lock.json
│   ├── package.json
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Login.js
│   │   │   ├── Register.js
│   │   │   ├── Home.js
│   │   ├── App.js
│   │   ├── index.js
│   ├── package-lock.json
│   ├── package.json
│   └── README.md
├── tests/
│   └── test.js
├── .dockerignore
├── .gitignore
└── README.md
```