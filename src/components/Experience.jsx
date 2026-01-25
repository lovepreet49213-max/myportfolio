import React from 'react'

const items = [
  { year: '2025 Onward', title: 'AI Research Associate', company: 'Vusic Technologies' },
  { year: 'jan/2024-july/2024', title: 'Data Science Intern', company: 'Sabudh Foundation' },
  { year: '2020-2024', title: 'B.Tech', company: 'Punjabi University, Patiala (8.87 CGPA)' },
  
]

export default function Experience() {
  return (
    <div>
      <h2 className="text-2xl font-semibold">Experience & Education</h2>
      <div className="mt-6 space-y-4">
        {items.map((it) => (
          <div key={it.year} className="animated-bg p-4 rounded-md">
            <div className="flex justify-between items-center">
              <div>
                <div className="font-semibold">{it.title}</div>
                <div className="text-sm text-zinc-400">{it.company}</div>
              </div>
              <div className="text-sm text-zinc-500">{it.year}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
