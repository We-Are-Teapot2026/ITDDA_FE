import { NavLink, Outlet } from 'react-router-dom'

const navigation = [
  { label: '홈', icon: '⌂', to: '/' },
  { label: '내 수업', icon: '▣', to: '/classes' },
  { label: '과제', icon: '✓', to: '/assignments' },
  { label: '저장한 자료', icon: '◇', to: '/sources' },
  { label: '내 보고서', icon: '▤', to: '/reports' },
]

export function RootLayout() {
  return (
    <div className="min-h-screen bg-[#f6f8fb] text-slate-900">
      <header className="fixed inset-x-0 top-0 z-20 h-16 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="flex h-full items-center justify-between px-5 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex size-9 items-center justify-center rounded-xl bg-indigo-600 text-lg font-black text-white">
              잇
            </div>
            <NavLink className="text-xl font-extrabold tracking-tight" to="/">
              잇다
            </NavLink>
            <span className="hidden rounded-full bg-indigo-50 px-2.5 py-1 text-xs font-semibold text-indigo-600 sm:inline">
              STUDENT
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              aria-label="알림"
              className="relative flex size-10 items-center justify-center rounded-full border border-slate-200 bg-white text-lg text-slate-600"
              type="button"
            >
              ♧
              <span className="absolute right-2 top-2 size-2 rounded-full bg-rose-500" />
            </button>
            <div className="flex items-center gap-3 rounded-full bg-slate-100 py-1.5 pl-1.5 pr-3">
              <div className="flex size-8 items-center justify-center rounded-full bg-slate-800 text-xs font-bold text-white">
                김
              </div>
              <div className="hidden leading-tight sm:block">
                <p className="text-sm font-bold">김잇다</p>
                <p className="text-[11px] text-slate-500">2학년 3반</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <aside className="fixed bottom-0 left-0 top-16 hidden w-60 border-r border-slate-200 bg-white px-4 py-6 lg:flex lg:flex-col">
        <nav className="space-y-1.5">
          {navigation.map((item) => (
            <NavLink
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition ${
                  isActive
                    ? 'bg-indigo-50 text-indigo-700'
                    : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                }`
              }
              key={item.label}
              to={item.to}
            >
              <span className="flex size-6 items-center justify-center text-base">
                {item.icon}
              </span>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="mt-auto rounded-2xl bg-slate-900 p-4 text-white">
          <p className="text-xs font-semibold text-indigo-300">이번 주 탐구 습관</p>
          <p className="mt-2 text-sm font-bold">자료 5개를 직접 검증했어요!</p>
          <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/15">
            <div className="h-full w-3/4 rounded-full bg-indigo-400" />
          </div>
          <p className="mt-2 text-right text-[11px] text-slate-300">5 / 7개</p>
        </div>
      </aside>

      <main className="min-h-screen pt-16 lg:pl-60">
        <div className="mx-auto max-w-[1440px] px-5 py-8 lg:px-10 lg:py-10">
          <Outlet />
        </div>
      </main>
    </div>
  )
}
