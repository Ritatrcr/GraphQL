# Cats & Students GraphQL — README

<img width="1548" height="116" alt="image" src="https://github.com/user-attachments/assets/8ba7bcba-b758-4690-8ebc-f8ea97300a3f" />


## 👥 Integrantes
- **Rita Trindade da Cruz**
- **Brandon Eduardo Merchan Sandocal**

---

## 🧭 Descripción
Aplicación **Full-Stack** que expone un **API GraphQL** con dos queries:
1. `breed(id: ID!)`: consulta una raza de gatos (TheCatAPI).
2. `students`: devuelve la lista de estudiantes desde Firestore.

El **frontend** en React permite:
- Ingresar un **ID de raza** y consultar.
- Seleccionar los **campos** que se desean ver en el resultado (tanto para `breed` como para `students`).

---

## 🛠 Tecnologías usadas
### Frontend
- **React** + **Vite**
- **TypeScript**
- **Apollo Client (GraphQL)**
- **CSS/Tailwind** (o CSS modular, según implementación)

### Backend
- **Node.js** + **Express**
- **Apollo Server (v4/v5)**
- **GraphQL 16**
- **Firebase Firestore** (via `firebase-admin`)
- **cross-fetch**, **cors**, **dotenv**

### Infra & Deploy
- **Render** (Backend Web Service)
- **Vercel** (Frontend estático)


---

## 📡 Endpoints de producción
- **GraphQL API (Backend):**  
  `https://graphql-1-1vgu.onrender.com/graphql`
- **Frontend:**  
  _URL pública del front (Vercel/)_
  `https://graph-ql-front-sable.vercel.app/`

---

## 📐 Esquema (resumen)
```graphql
type Weight { imperial: String, metric: String }

type Breed {
  id: ID!
  name: String!
  temperament: String
  origin: String
  life_span: String
  description: String
  wikipedia_url: String
  weight: Weight
}

type Student {
  id: ID!
  # según versión del esquema:
  # name, program, semester, email
  # o firstName, lastName, age, email
  name: String
  program: String
  semester: Int
  email: String
  firstName: String
  lastName: String
  age: Int
}

type Query {
  breed(id: ID!): Breed
  students: [Student!]!
}
```

---

## ▶️ Cómo correr localmente

### Backend
```bash
cd backend
npm ci
npm run build
npm start
# http://localhost:4000/graphql
```

### Frontend
> La URL del backend está **hardcodeada** en el cliente Apollo a  
> `https://graphql-1-1vgu.onrender.com/graphql` (sin variables de entorno).

```bash
cd frontend
npm ci
npm run dev
```

---

## 🔎 Pruebas rápidas (cURL)
```bash
# Students (ajusta campos a tu schema real)
curl -s https://graphql-1-1vgu.onrender.com/graphql   -H "Content-Type: application/json"   -d '{"query":"{ students { id name program semester email } }"}' | jq

# Breed
curl -s https://graphql-1-1vgu.onrender.com/graphql   -H "Content-Type: application/json"   -d '{"query":"query($id:ID!){ breed(id:$id){ id name origin temperament life_span }}","variables":{"id":"abys"}}' | jq
```

---

## 🌐 Despliegue

### Backend (Render)
- **Root Directory:** `backend/`  
- **Build:** `npm ci && npm run build`  
- **Start:** `npm start`  

### Frontend (Vercel)
- **Root Directory:** `frontend/`  
- **Build:** `npm run build`  
- **Publish/Output:** `dist`  

---

