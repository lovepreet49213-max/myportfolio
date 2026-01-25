import React from 'react'

const SKILLS = {
  skill: [['Machine Learning', 'Beginner'], ['Natural Language Processing', 'Beginner'], ['Large Language Models (LLM)', 'Beginner'],['Deep Leraning ','pro'] ,['Generative AI', 'Intermediate'], ['Algorithmic Trading', 'Intermediate'], ['Data Analysis', 'Intermediate']],
  platform: ['Jupyter Notebook', 'Google Colab', 'Backtrader', 'QuantConnect', 'Kaggle'],
  tools: [  'Flask', 'Gradio', 'Hugging Face', 'OpenAI GPT', 'Neo4j', 'Streamlit', 'Scikit-learn' ],
}

export default function Skills() {
  return (
    <div>
      <h2 className="text-2xl font-semibold">Skills</h2>

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <h4 className="text-sm text-zinc-300 mb-2">AI & ML</h4>
          <div className="grid gap-3">
            {SKILLS.skill.map((s) => (
              <div key={s} className="animated-bg  p-3 rounded-md motion-safe-transition card-lift card-elevated flex items-center justify-between">
                <div className="font-medium">{s[0]}</div>
                <div className="text-zinc-400 text-sm">{s[1]}</div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm text-zinc-300 mb-2">Platforms</h4>
          <div className="grid gap-3">
            {SKILLS.platform.map((s) => (
              <div key={s} className="animated-bg  p-3 rounded-md motion-safe-transition card-lift card-elevated flex items-center justify-between">
                <div className="font-medium">{s}</div>
                <div className="text-zinc-400 text-sm">Intermediate</div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm text-zinc-300 mb-2">Tools</h4>
          <div className="grid gap-3">
            {SKILLS.tools.map((s) => (
              <div key={s} className="animated-bg  p-3 rounded-md motion-safe-transition card-lift card-elevated flex items-center justify-between">
                <div className="font-medium">{s}</div>
                <div className="text-zinc-400 text-sm">Pro</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
