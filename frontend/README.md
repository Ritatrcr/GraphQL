# Frontend React + TypeScript + Apollo (Vite)

## Requisitos
- Node.js 18+
- pnpm / npm / yarn

## Instalación
```bash
cd frontend
npm i
cp .env.example .env
# edita VITE_GRAPHQL_URL si lo deseas (por defecto /graphql)
npm run dev
```

- Durante desarrollo, `vite.config.ts` proxya `/graphql` -> `http://localhost:4000`.
- En producción, si el backend sirve el build y expone `/graphql` en la misma URL, no necesitas cambiar nada.

## Estructura
- `src/apollo/client.ts` — Configuración de Apollo Client (lee `VITE_GRAPHQL_URL`)
- `src/config/*Fields.ts` — Campos fijos seleccionables
- `src/utils/buildQuery.ts` — Construye los queries dinámicos de acuerdo a los campos elegidos
- `src/components/FieldPicker.tsx` — Selector de campos (checkboxes)
- `src/components/ResultsTable.tsx` — Tabla genérica
- `src/pages/Home.tsx` — UI principal con dos consultas: `breed(id)` y `students`

## Notas
- Asegúrate de que los campos definidos en `*Fields.ts` coincidan con tu schema del backend.
- Para `breed`, ingresa un ID válido según tu backend.
