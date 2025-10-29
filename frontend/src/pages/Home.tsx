import React from 'react'
import { gql, useLazyQuery } from '@apollo/client'
import FieldPicker from '../components/FieldPicker'
import ResultsTable from '../components/ResultsTable'
import { BREED_FIELDS, BreedField } from '../config/breedFields'
import { STUDENT_FIELDS, StudentField } from '../config/studentFields'
import { buildBreedQuery, buildStudentsQuery } from '../utils/buildQuery'

export default function Home() {
  const [breedId, setBreedId] = React.useState('')
  const [breedCols, setBreedCols] = React.useState<string[]>(['id', 'name'])
  const [studentCols, setStudentCols] = React.useState<string[]>(['id', 'firstName', 'lastName'])

  const [runBreed, breedState] = useLazyQuery<any>(gql`query Dummy($id: ID!){ breed(id:$id){ id } }`, {
    fetchPolicy: 'no-cache'
  })
  const [runStudents, studentsState] = useLazyQuery<any>(gql`query Dummy{ students{ id } }`, {
    fetchPolicy: 'no-cache'
  })

  const onQueryBreed = React.useCallback(() => {
    const q = buildBreedQuery(breedCols as BreedField[])
    runBreed({ variables: { id: breedId }, query: gql(q) })
  }, [breedCols, breedId, runBreed])

  const onQueryStudents = React.useCallback(() => {
    const q = buildStudentsQuery(studentCols as StudentField[])
    runStudents({ query: gql(q) })
  }, [studentCols, runStudents])

  const breedRows = React.useMemo(() => {
    const obj = breedState.data?.breed
    return obj ? [obj] : []
  }, [breedState.data])

  const studentRows = React.useMemo(() => {
    const arr = studentsState.data?.students ?? []
    return Array.isArray(arr) ? arr : []
  }, [studentsState.data])

  return (
    <div className="page">
      {/* HERO */}
      <section className="hero">
        <div className="hero__inner">
          <h1>GraphQL Explorer</h1>
          <p>Selecciona campos, ejecuta consultas y visualiza resultados con un clic.</p>
          <div className="toolbar" style={{ marginTop: 6 }}>
            <a
              className="btn ghost"
              href="https://graphql-1-1vgu.onrender.com/graphql"
              target="_blank"
              rel="noopener noreferrer"
            >
              Abrir Playground /graphql
            </a>
          </div>
        </div>
      </section>

      {/* MAIN */}
      <main className="container">
        <div className="grid">
          {/* --- Breed Card --- */}
          <section className="card">
            <div className="card__header">
              <h2 className="card__title">Raza por ID</h2>
              <span className="card__hint">Consulta <code>breed(id: ID!)</code></span>
            </div>

            <div className="toolbar">
              <label className="field">
                <span style={{ color: 'var(--muted)' }}>Breed ID</span>
                <input
                  className="input"
                  value={breedId}
                  onChange={e => setBreedId(e.target.value)}
                  placeholder="Ej: abys"
                />
              </label>

              <button
                className="btn"
                onClick={onQueryBreed}
                disabled={!breedId || !breedCols.length || breedState.loading}
              >
                {breedState.loading ? 'Consultando…' : 'Consultar raza'}
              </button>
            </div>

            <FieldPicker
              title="Campos de Breed"
              options={BREED_FIELDS.map(f => ({ value: f }))}
              selected={breedCols}
              onChange={setBreedCols}
            />

            <div style={{ display: 'flex', alignItems: 'center', gap: 10, minHeight: 28 }}>
              {breedState.loading && <div className="spinner" aria-label="Cargando" />}
              {breedState.error && <div className="alert error">Error: {breedState.error.message}</div>}
              {(!breedState.loading && !breedState.error && breedRows.length === 0 && breedId) && (
                <div className="alert">Sin resultados para ese ID.</div>
              )}
            </div>

            <ResultsTable rows={breedRows} columns={breedCols} emptyText="Sin datos de raza" />
          </section>

          {/* --- Students Card --- */}
          <section className="card">
            <div className="card__header">
              <h2 className="card__title">Estudiantes</h2>
              <span className="card__hint">Consulta <code>students</code> (todos)</span>
            </div>

            <div className="toolbar">
              <button
                className="btn"
                onClick={onQueryStudents}
                disabled={!studentCols.length || studentsState.loading}
              >
                {studentsState.loading ? 'Consultando…' : 'Consultar estudiantes'}
              </button>
            </div>

            <FieldPicker
              title="Campos de Student"
              options={STUDENT_FIELDS.map(f => ({ value: f }))}
              selected={studentCols}
              onChange={setStudentCols}
            />

            <div style={{ display: 'flex', alignItems: 'center', gap: 10, minHeight: 28 }}>
              {studentsState.loading && <div className="spinner" aria-label="Cargando" />}
              {studentsState.error && <div className="alert error">Error: {studentsState.error.message}</div>}
              {(!studentsState.loading && !studentsState.error && studentRows.length === 0) && (
                <div className="alert">Sin estudiantes.</div>
              )}
            </div>

            <ResultsTable rows={studentRows} columns={studentCols} emptyText="Sin estudiantes" />
          </section>
        </div>
      </main>
    </div>
  )
}
