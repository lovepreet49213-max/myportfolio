import React from 'react'

export default function About() {
  return (
    <div className="grid md:grid-cols-3 gap-6 items-start">
      <div className="md:col-span-2">
        <h2 className="text-2xl font-semibold">About Me</h2>
        <p className="mt-4 text-zinc-300"> I am a Data Science intern with hands-on experience in Machine Learning, NLP, and Generative AI. I have worked on real-world datasets, built predictive models, and performed data analysis using Python and SQL. My interests include applying AI to practical problems and exploring Large Language Models and algorithmic trading.</p>

        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="animated-bg  p-4 rounded-md">Location: Remote</div>
          <div className="animated-bg  p-4 rounded-md">Degree: B.Tech</div>
          <div className="animated-bg  p-4 rounded-md">Experience: 1+ years</div>
          <div className="animated-bg  p-4 rounded-md">Open to work: Yes</div>
        </div>

        <div className="mt-6 border border-zinc-700 rounded-md p-4">
          <h3 className="text-lg font-medium">Quick bio</h3>
          <p className="mt-2 text-zinc-400">Recently completed my data science internship at Sabudh Foundation where
I gained hands-on experience in machine learning, deep learning, natural
language processing (NLP), generative AI, and large language models (LLM).
My primary internship project was "Document Analysis using LLMs," which
allowed me to apply these technologies to real-world challenges and deepen
my understanding of their practical applications.</p>

          <div className="mt-4 flex gap-3">
            <a href="#contact" className="px-4 py-2 bg-[var(--primary)] text-white rounded-md" >Contact me</a>
            <a href="/RupinderCv.pdf" download className="px-4 py-2 bg-[var(--primary)] text-white rounded-md" >Download CV</a>
          </div>
        </div>
      </div>

      <aside className="hidden md:block">
        <div className="animated-bg  p-4 rounded-md">
          <h3 className="text-lg font-medium mb-2">Skills Summary</h3>
          <p className="mt-2 text-zinc-400">Aspiring ML Engineer with a Bachelor of Technology in Computer
Science , complemented by hands-on experience in Machine
Learning , Deep Learning , and Natural Language Processing ️.</p>
                    <p className="mt-2 text-zinc-400">Via my real world projects, I have gained practical knowledge in
exploratory data analysis and the implementation of advanced
machine learning models. </p>
 <p className="mt-2 text-zinc-400">Well proficient in Python programming  and skilled in performing data
manipulation and analysis.</p>
 <p className="mt-2 text-zinc-400">My expertise extends to working with Generative AI and Large
Language Models, allowing me to explore innovative solutions in AI
driven applications </p>
        </div>
      </aside>
    </div>
  )
}
