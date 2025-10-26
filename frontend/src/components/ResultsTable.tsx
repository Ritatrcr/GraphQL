import React from 'react'

interface Props {
  rows: Record<string, any>[]
  columns: string[]
  emptyText?: string
}

export default function ResultsTable({ rows, columns, emptyText = 'Sin resultados' }: Props) {
  if (!rows.length) return <p style={{ opacity: 0.7 }}>{emptyText}</p>

  return (
    <div style={{ overflowX: 'auto' }}>
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            {columns.map(c => (
              <th key={c} style={{ textAlign: 'left', borderBottom: '1px solid #ddd', padding: '8px 6px' }}>{c}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>
              {columns.map(c => (
                <td key={c} style={{ borderBottom: '1px solid #f0f0f0', padding: '8px 6px' }}>
                  {String(r?.[c] ?? '')}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
