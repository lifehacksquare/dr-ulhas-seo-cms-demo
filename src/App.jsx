import React from 'react'

export default function App() {
  return (
    <div className="min-h-screen bg-slate-100">
      <div className="bg-[#1d2327] text-white px-6 py-4 flex justify-between">
        <h1 className="font-bold text-xl">Dr Ulhas SEO CMS Demo</h1>
        <div>WordPress-Style SEO Dashboard</div>
      </div>

      <div className="grid grid-cols-12">
        <aside className="col-span-2 bg-[#1d2327] text-white min-h-screen p-4">
          <div className="space-y-3">
            <div className="bg-blue-700 p-3 rounded">Dashboard</div>
            <div className="hover:bg-slate-700 p-3 rounded">SEO Content Builder</div>
            <div className="hover:bg-slate-700 p-3 rounded">Pages</div>
            <div className="hover:bg-slate-700 p-3 rounded">Services</div>
            <div className="hover:bg-slate-700 p-3 rounded">Posts / Blog</div>
            <div className="hover:bg-slate-700 p-3 rounded">Schema Studio</div>
            <div className="hover:bg-slate-700 p-3 rounded">Redirect Manager</div>
            <div className="hover:bg-slate-700 p-3 rounded">Sitemap & Robots</div>
          </div>
        </aside>

        <main className="col-span-10 p-8">
          <div className="grid grid-cols-4 gap-4">
            {[
              ['SEO Health', '93%'],
              ['Indexable URLs', '104'],
              ['Schema Valid', '89'],
              ['404 Errors', '7']
            ].map(([title, value]) => (
              <div key={title} className="bg-white rounded-xl shadow p-6">
                <div className="text-slate-500 text-sm">{title}</div>
                <div className="text-4xl font-bold mt-2">{value}</div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl shadow mt-8">
            <div className="p-5 border-b">
              <h2 className="text-xl font-semibold">SEO Content Builder</h2>
              <p className="text-slate-500 text-sm mt-1">
                Advanced WordPress/Gutenberg-style SEO publishing editor.
              </p>
            </div>

            <div className="p-5 border-b flex gap-2 flex-wrap">
              {['Paragraph','H1','H2','Bold','Italic','Link','Image','FAQ','CTA','Schema'].map(item => (
                <button key={item} className="border px-3 py-2 rounded bg-slate-50 text-sm">
                  {item}
                </button>
              ))}
            </div>

            <div className="p-6">
              <div className="border rounded-lg p-4 text-3xl font-bold">
                ACL Surgeon in Pune
              </div>

              <div className="mt-6 border rounded-lg p-6 min-h-[300px]">
                <h1 className="text-3xl font-bold">ACL Surgeon in Pune</h1>
                <p className="mt-4 text-slate-700">
                  This demo includes:
                </p>

                <ul className="list-disc ml-6 mt-4 space-y-2 text-slate-700">
                  <li>Index / Noindex controls</li>
                  <li>Follow / Nofollow controls</li>
                  <li>Schema Studio</li>
                  <li>SEO Score Panel</li>
                  <li>Keyword Density Checker</li>
                  <li>Internal Link Suggestions</li>
                  <li>FAQ Builder</li>
                  <li>Google Snippet Preview</li>
                  <li>Media SEO</li>
                  <li>Redirect Manager</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 mt-8">
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="font-bold text-lg">Indexing Controls</h3>

              <div className="grid grid-cols-2 gap-3 mt-4">
                {['Index','Noindex','Follow','Nofollow','Noarchive','Nosnippet'].map(item => (
                  <div key={item} className="border rounded-lg p-3 flex justify-between">
                    <span>{item}</span>
                    <span className="text-green-600">Enabled</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="font-bold text-lg">SEO Score</h3>

              <div className="text-6xl font-bold text-green-600 mt-4">96</div>

              <ul className="mt-4 space-y-2 text-sm">
                <li>✔ SEO title optimized</li>
                <li>✔ Meta description valid</li>
                <li>✔ Canonical added</li>
                <li>✔ FAQ schema valid</li>
                <li>⚠ 1 image missing alt text</li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}