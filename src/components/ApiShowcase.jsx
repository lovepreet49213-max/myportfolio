import React from "react";
import { Code2 } from "lucide-react";
import { getProjectBySlug } from "./ProjectData";
import { Link } from "react-router-dom";

function ApiTable({ group }) {
  return (
    <div>
      <h3 className="text-lg font-bold text-slate-100 mb-4">{group.title}</h3>

      <div className="overflow-x-auto rounded-2xl border border-blue-400/20">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="bg-blue-500/10 text-blue-300 text-xs uppercase tracking-widest">
              <th className="px-4 py-3 font-bold">Method</th>
              <th className="px-4 py-3 font-bold">Endpoint</th>
              <th className="px-4 py-3 font-bold">Authentication</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-blue-400/10">
            {group.endpoints.map((api, idx) => (
              <tr key={idx} className="hover:bg-blue-500/5">
                <td className="px-4 py-3">
                  <span
                    className={`
                      inline-block px-2 py-0.5 rounded-md text-[10px] font-black
                      ${
                        api.method === "GET"
                          ? "bg-emerald-500/15 text-emerald-300 border border-emerald-400/30"
                          : api.method === "POST"
                          ? "bg-blue-500/15 text-blue-300 border border-blue-400/30"
                          : api.method === "PUT"
                          ? "bg-amber-500/15 text-amber-300 border border-amber-400/30"
                          : "bg-rose-500/15 text-rose-300 border border-rose-400/30"
                      }
                    `}
                  >
                    {api.method}
                  </span>
                </td>
                <td className="px-4 py-3 font-mono text-xs text-blue-100">
                  {api.endpoint}
                </td>
                <td className="px-4 py-3 text-xs text-blue-200/70">
                  {api.auth}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function ApiShowcase() {
  const realEstate = getProjectBySlug("real-estate");
  const groups = realEstate.apiGroups.filter((g) =>
    ["Authentication APIs", "Property APIs", "Booking APIs"].includes(g.title)
  );

  return (
    <section
      id="api-showcase"
      aria-label="API showcase"
      className="container-wide w-full px-5 sm:px-8 lg:px-12 xl:px-16 py-10 border-t border-blue-400/20"
    >
      {/* Header */}
      <div className="flex flex-col gap-3 mb-14 max-w-4xl">
        <span className="text-sm font-bold uppercase tracking-[0.3em] text-blue-300">
          API Showcase
        </span>

        <div className="flex items-center gap-3">
          <Code2 size={28} className="text-blue-400 shrink-0" />
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-100">
            REST Endpoints I've Built.
          </h2>
        </div>

        <p className="text-lg text-blue-200/80 leading-relaxed">
          Example endpoints from the Real Estate Management Platform and
          GarageGo. Only routes that exist in the deployed projects are shown.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {groups.map((group) => (
          <ApiTable key={group.title} group={group} />
        ))}
      </div>

      <div className="mt-10">
        <Link
          to="/project/real-estate"
          className="inline-flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors"
        >
          View full project architecture →
        </Link>
      </div>
    </section>
  );
}
