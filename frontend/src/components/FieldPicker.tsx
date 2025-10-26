import React from 'react'

type Option = { value: string; label?: string }

interface Props {
  title: string
  options: Option[]
  selected: string[]
  onChange: (next: string[]) => void
}

export default function FieldPicker({ title, options, selected, onChange }: Props) {
  const toggle = (v: string) => {
    const set = new Set(selected)
    set.has(v) ? set.delete(v) : set.add(v)
    onChange(Array.from(set))
  }

  return (
    <fieldset style={{ border: '1px solid #ddd', padding: 12, borderRadius: 8 }}>
      <legend style={{ fontWeight: 600 }}>{title}</legend>
      <div style={{ display: 'grid', gap: 6, gridTemplateColumns: 'repeat(auto-fill,minmax(180px,1fr))' }}>
        {options.map(o => (
          <label key={o.value} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <input
              type="checkbox"
              checked={selected.includes(o.value)}
              onChange={() => toggle(o.value)}
            />
            <span>{o.label ?? o.value}</span>
          </label>
        ))}
      </div>
    </fieldset>
  )
}
