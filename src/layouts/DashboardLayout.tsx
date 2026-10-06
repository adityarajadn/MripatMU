import React, { useState } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  CalendarCheck, 
  LogOut, 
  Bell, 
  Cpu, 
  Camera, 
  Radio, 
  Menu,
  X
} from 'lucide-react';

export const DashboardLayout: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { label: 'Dashboard', path: '/', icon: LayoutDashboard },
    { label: 'Data Siswa', path: '/students', icon: Users },
    { label: 'Kehadiran', path: '/attendance', icon: CalendarCheck },
    { label: 'Pantau Keluar', path: '/exits', icon: LogOut, badge: '1' },
    { label: 'Notifikasi', path: '/notifications', icon: Bell, badge: '3' },
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#0f172a] flex flex-col md:flex-row font-sans">
      {/* Mobile Top Header */}
      <div className="md:hidden flex items-center justify-between px-4 py-3 bg-white border-b border-slate-200">
        <div className="flex items-center gap-2">
          <img src="/mripatmu-logo.png" alt="MripatMU" className="h-8 w-auto object-contain" />
        </div>
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Sidebar */}
      <aside className={`
        ${mobileMenuOpen ? 'block' : 'hidden'} md:block
        w-full md:w-64 bg-white border-r border-slate-200 flex-shrink-0 flex flex-col justify-between
        z-30 sticky top-0 md:h-screen
      `}>
        <div>
          {/* Brand Header */}
          <div className="hidden md:flex items-center px-6 py-5 border-b border-slate-100">
            <img src="/mripatmu-logo.png" alt="MripatMU" className="h-16 w-auto object-contain" />
          </div>

          {/* Navigation Links */}
          <div className="px-3 py-4 space-y-1">
            <div className="px-3 pb-2 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Navigasi Utama</div>
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === '/'}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) => `
                    flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-medium transition-all duration-150
                    ${isActive 
                      ? 'bg-amber-500 text-white shadow-sm shadow-amber-500/30' 
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                    }
                  `}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </div>
                  {item.badge && (
                    <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-rose-500 text-white">
                      {item.badge}
                    </span>
                  )}
                </NavLink>
              );
            })}
          </div>
        </div>

        {/* Hardware & User Status Footer */}
        <div className="p-4 border-t border-slate-100 bg-slate-50/50">
          <div className="mb-4">
            <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">Status Perangkat</div>
            <div className="space-y-1.5 text-xs">
              <div className="flex items-center justify-between text-slate-600 bg-white p-2 rounded-md border border-slate-200/60 shadow-2xs">
                <div className="flex items-center gap-2">
                  <Camera className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Kamera Utama</span>
                </div>
                <span className="flex items-center gap-1 font-semibold text-emerald-600 text-[11px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> Online
                </span>
              </div>
              <div className="flex items-center justify-between text-slate-600 bg-white p-2 rounded-md border border-slate-200/60 shadow-2xs">
                <div className="flex items-center gap-2">
                  <Cpu className="w-3.5 h-3.5 text-emerald-600" />
                  <span>AI Face Engine</span>
                </div>
                <span className="flex items-center gap-1 font-semibold text-emerald-600 text-[11px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Aktif
                </span>
              </div>
              <div className="flex items-center justify-between text-slate-600 bg-white p-2 rounded-md border border-slate-200/60 shadow-2xs">
                <div className="flex items-center gap-2">
                  <Radio className="w-3.5 h-3.5 text-emerald-600" />
                  <span>NodeMCU Servo</span>
                </div>
                <span className="flex items-center gap-1 font-semibold text-emerald-600 text-[11px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Terhubung
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between pt-3 border-t border-slate-200/60">
            <div className="flex items-center gap-2.5">
              <div>
                <p className="text-xs font-semibold text-slate-900 leading-tight">Guru Piket</p>
                <p className="text-[11px] text-slate-500">Kelas 12-6</p>
              </div>
            </div>
            <button 
              onClick={() => navigate('/login')} 
              title="Keluar"
              className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-md transition-colors"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </aside>

      {/* Main Workspace Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Topbar */}
        <header className="h-16 bg-white border-b border-slate-200 px-6 flex items-center justify-between sticky top-0 z-20 shadow-2xs">
          <div></div>

          <div className="flex items-center gap-4">
            <NavLink 
              to="/notifications" 
              className="relative p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors"
            >
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-rose-500 ring-2 ring-white"></span>
            </NavLink>
            <div className="h-4 w-px bg-slate-200"></div>
            <div className="text-right">
              <p className="text-xs font-semibold text-slate-900">Selasa, 6 Okt 2026</p>
              <p className="text-[11px] font-mono text-slate-500">10:30:15 WIB</p>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6 max-w-7xl w-full mx-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
