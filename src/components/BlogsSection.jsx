// components/BlogsSection.jsx
import React from "react";
import { Calendar, Clock, ArrowUpRight, CircleCheck } from "lucide-react";

export default function BlogsSection() {
     const blogs = [
  {
    title: "How I Built a Real-Time Garage Booking System with MERN",
    description:
      "A deep dive into designing and building a real-time garage service booking platform using the MERN stack, Redis, and WebSockets—covering architecture, challenges, and performance trade-offs.",
    image: "/blog/garagego.png",
    badges: ["MERN", "WebSockets", "System Design"],
    date: "2025-02-10",
    readTime: "10 min",
    learnings: [
      "Designing real-time booking systems without race conditions",
      "Using WebSockets for live slot availability",
      "Implementing role-based access control in MERN",
      "Optimizing MongoDB queries for high-read workloads",
      "Handling concurrent bookings safely",
    ],
    fullArticle: "https://your-blog-link.com/garagego-realtime-booking",
    insights: {
      title: "Architecture Insight",
      description:
        "Real-time systems fail most often due to race conditions. Using optimistic locking and server-side validation ensures bookings remain consistent even under high concurrency.",
      sources: [
        {
          text: "GarageGo GitHub Repository",
          url: "https://github.com/your-username/garagego",
        },
        {
          text: "MongoDB Transactions Guide",
          url: "https://www.mongodb.com/docs/manual/core/transactions/",
        },
      ],
    },
  },
];

  return (
    <section
      id="blogs"
     className="
  container-wide
  w-full
  px-5
  sm:px-8
  lg:px-12
  xl:px-16
  py-10
  scroll-mt-16
  border-t border-blue-400/20
"
    >
      {/* Section Header */}
      <div className="flex flex-col gap-2 mb-16">
        <h4 className="text-blue-300 font-mono text-sm tracking-widest uppercase font-bold">
          03. Writing
        </h4>
        <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-slate-100">
          Technical Insights
        </h2>
      </div>

      <div className="w-full space-y-20">
        {blogs.map((blog, idx) => (
          <div
            key={idx}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start group"
          >
            {/* Image Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="relative aspect-[4/3] lg:aspect-[5/4]
                              rounded-[2.5rem] overflow-hidden
                              border border-blue-400/20
                              shadow-2xl shadow-blue-500/10">
                <img
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="100vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#011b59]/80 to-transparent" />

                {/* Badges */}
                <div className="absolute bottom-8 left-8 flex flex-wrap gap-2">
                  {blog.badges.map((badge, i) => (
                    <span
                      key={i}
                      className="bg-blue-500/20 backdrop-blur-md
                                 text-blue-100 border border-blue-400/30
                                 uppercase text-[10px] font-bold
                                 px-3 py-1 rounded-full"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>

              {/* Meta */}
              <div className="flex items-center gap-6 text-sm text-blue-200/70 font-medium px-4">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-blue-400" />
                  <span>{blog.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-blue-400" />
                  <span>{blog.readTime} Read</span>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-5xl font-black leading-tight tracking-tight text-slate-100">
                  {blog.title}
                </h2>
                <p className="text-lg text-blue-200/80 leading-relaxed max-w-2xl">
                  {blog.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Learnings */}
                <div className="space-y-5">
                  <h3 className="text-sm font-black uppercase tracking-widest text-blue-300">
                    What you'll learn
                  </h3>

                  <ul className="space-y-3">
                    {blog.learnings.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm text-blue-200/80"
                      >
                        <CircleCheck className="h-4 w-4 text-green-400 mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={blog.fullArticle}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2
                               h-14 px-8 rounded-full
                               bg-gradient-to-r from-blue-600 to-indigo-600
                               text-white font-bold
                               transition-all
                               hover:scale-105 hover:shadow-xl
                               hover:shadow-blue-500/30
                               max-sm:hidden"
                  >
                    Read Full Article
                    <ArrowUpRight className="h-5 w-5" />
                  </a>
                </div>

                {/* Expert Insights */}
                <div className="bg-blue-500/10 backdrop-blur-md
                                rounded-3xl p-6
                                border border-blue-400/20">
                  <h3 className="text-sm font-black uppercase tracking-widest text-blue-200 mb-3">
                    {blog.insights.title}
                  </h3>

                  <p className="text-sm text-blue-200/80 italic leading-relaxed">
                    {blog.insights.description}
                  </p>

                  <div className="mt-6 pt-6 border-t border-blue-400/20">
                    <p className="text-[10px] font-bold text-blue-300 uppercase mb-2">
                      Source Links
                    </p>

                    <div className="flex flex-col gap-4">
                      {blog.insights.sources.map((src, i) => (
                        <a
                          key={i}
                          href={src.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-bold text-blue-400
                                     hover:text-blue-300
                                     flex items-center gap-1"
                        >
                          {src.text}
                          <ArrowUpRight className="h-3 w-3" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
