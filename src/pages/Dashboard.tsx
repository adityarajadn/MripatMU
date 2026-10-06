import React, { useState } from 'react';
import { 
  Users, 
  UserCheck, 
  UserX, 
  LogOut, 
  AlertTriangle, 
  Camera, 
  Activity, 
  CheckCircle2, 
  Clock, 
  Layers,
  RefreshCw,
  Sliders
} from 'lucide-react';
import { NavLink } from 'react-router-dom';

export const Dashboard: React.FC = () => {
  const [viewState, setViewState] = useState<'normal' | 'loading' | 'empty' | 'error'>('normal');

  const renderStateSwitcher = () => (
    <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-lg text-xs self-start">
      <span className="px-2 font-medium text-slate-400">State:</span>
      {(['normal', 'loading', 'empty', 'error'] as const).map((mode) => (
        <button
          key={mode}
          onClick={() => setViewState(mode)}
          className={`px-2.5 py-1 rounded-md font-medium capitalize transition ${
            viewState === mode
              ? 'bg-white shadow-2xs text-slate-900'
              : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          {mode}
        </button>
      ))}
    </div>
  );

  if (viewState === 'loading') {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Dashboard Monitoring Kelas</h1>
          {renderStateSwitcher()}
        </div>
        <div className="flex flex-col items-center justify-center min-h-[450px] bg-white rounded-2xl border border-slate-200/80 p-8 shadow-2xs">
          <RefreshCw className="w-8 h-8 text-amber-500 animate-spin mb-3" />
          <p className="text-sm font-semibold text-slate-700">Memuat telemetri kelas & AI...</p>
        </div>
      </div>
    );
  }

  if (viewState === 'empty') {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Dashboard Monitoring Kelas</h1>
          {renderStateSwitcher()}
        </div>
        <div className="flex flex-col items-center justify-center min-h-[450px] bg-white rounded-2xl border border-slate-200/80 p-8 text-center shadow-2xs">
          <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 mb-3">
            <Layers className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-slate-900 mb-1">Belum Ada Sesi Kelas Aktif</h3>
          <p className="text-sm text-slate-500 max-w-sm mb-4">Sistem monitoring belum mendeteksi aktivitas kelas pada jam ini.</p>
          <button 
            onClick={() => setViewState('normal')} 
            className="px-4 py-2 bg-amber-500 text-white rounded-lg text-sm font-semibold hover:bg-amber-600 transition"
          >
            Mulai Monitoring
          </button>
        </div>
      </div>
    );
  }

  if (viewState === 'error') {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Dashboard Monitoring Kelas</h1>
          {renderStateSwitcher()}
        </div>
        <div className="flex flex-col items-center justify-center min-h-[450px] bg-white rounded-2xl border border-rose-200 p-8 text-center shadow-2xs">
          <div className="w-12 h-12 rounded-full bg-rose-50 flex items-center justify-center text-rose-500 mb-3">
            <AlertTriangle className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-slate-900 mb-1">Koneksi Stream AI Terputus</h3>
          <p className="text-sm text-slate-500 max-w-sm mb-4">Gagal menghubungkan ke service backend AI recognition (port 8000).</p>
          <button 
            onClick={() => setViewState('normal')} 
            className="px-4 py-2 bg-rose-600 text-white rounded-lg text-sm font-semibold hover:bg-rose-700 transition"
          >
            Hubungkan Ulang
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Page Title & View state switcher */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Dashboard Monitoring Kelas</h1>
          <p className="text-sm text-slate-500">Pemantauan visual presensi dan deteksi pergerakan siswa secara real-time.</p>
        </div>
        {renderStateSwitcher()}
      </div>

      {/* KPI Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Total Students */}
        <div className="bg-white rounded-xl p-5 border border-slate-200/80 shadow-2xs">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Total Siswa</span>
            <div className="p-2 rounded-lg bg-slate-100 text-slate-600">
              <Users className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-slate-900">32</span>
            <span className="text-xs text-slate-400 font-medium">Siswa terdaftar</span>
          </div>
          <div className="mt-3 text-xs text-slate-500">Kelas 12-6 (Teknik Informatika)</div>
        </div>

        {/* Present */}
        <div className="bg-white rounded-xl p-5 border border-slate-200/80 shadow-2xs">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wider">Hadir di Kelas</span>
            <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600">
              <UserCheck className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-emerald-700">29</span>
            <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">90.6%</span>
          </div>
          <div className="mt-3 text-xs text-slate-500">Terverifikasi wajah otomatis</div>
        </div>

        {/* Outside */}
        <div className="bg-white rounded-xl p-5 border border-amber-200/80 shadow-2xs bg-amber-50/20">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-amber-700 uppercase tracking-wider">Di Luar Kelas</span>
            <div className="p-2 rounded-lg bg-amber-100 text-amber-700">
              <LogOut className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-amber-700">1</span>
            <span className="text-xs font-semibold text-rose-700 bg-rose-50 px-2 py-0.5 rounded-full">1 Tanpa Izin</span>
          </div>
          <div className="mt-3 text-xs text-amber-800 font-medium">Memerlukan atensi guru</div>
        </div>

        {/* Absent */}
        <div className="bg-white rounded-xl p-5 border border-slate-200/80 shadow-2xs">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Tidak Hadir</span>
            <div className="p-2 rounded-lg bg-rose-50 text-rose-600">
              <UserX className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-slate-800">2</span>
            <span className="text-xs text-slate-400 font-medium">Siswa alpa/izin</span>
          </div>
          <div className="mt-3 text-xs text-slate-500">1 Sakit, 1 Tanpa Keterangan</div>
        </div>
      </div>

      {/* Main Monitoring Row: Camera View + Alert / Telemetry */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Camera Feed & Face Tracking Box (Col span 2) */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200/80 p-5 shadow-2xs flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2.5">
              <div className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping"></div>
              <h2 className="text-base font-bold text-slate-900">Live Camera & Tracking Feed</h2>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-700">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                Webcam HD Active
              </span>
              <span className="text-xs font-mono text-slate-400 hidden sm:inline">28 FPS · 42ms</span>
            </div>
          </div>

          {/* Video Container Simulation */}
          <div className="relative aspect-video w-full rounded-xl bg-slate-950 overflow-hidden flex items-center justify-center border border-slate-800 group shadow-inner">
            {/* Visual Classroom Background Mock */}
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-900 via-slate-800 to-slate-900 opacity-90 flex items-center justify-center">
              <div className="text-center text-slate-600">
                <Camera className="w-16 h-16 mx-auto mb-2 opacity-30" />
                <p className="text-xs tracking-widest font-mono uppercase text-slate-500">FEED CAM 01 // KELAS 12-6</p>
              </div>
            </div>

            {/* AI Bounding Box 1: Verified Student Inside */}
            <div 
              className="absolute border-2 border-emerald-400 rounded-lg pointer-events-none transition-all duration-300"
              style={{ top: '24%', left: '26%', width: '130px', height: '170px' }}
            >
              <div className="absolute -top-7 left-0 bg-emerald-500 text-white text-[11px] font-semibold px-2 py-0.5 rounded shadow-sm flex items-center gap-1 whitespace-nowrap">
                <CheckCircle2 className="w-3 h-3" />
                <span>19168 · Ahmad (98%)</span>
              </div>
              <div className="absolute bottom-1 right-1 text-[9px] font-mono text-emerald-300 bg-slate-950/70 px-1 rounded">
                INSIDE
              </div>
            </div>

            {/* AI Bounding Box 2: Tracking Active (Target Moving) */}
            <div 
              className="absolute border-2 border-amber-400 rounded-lg pointer-events-none transition-all duration-300 shadow-[0_0_12px_rgba(245,158,11,0.3)]"
              style={{ top: '28%', left: '58%', width: '125px', height: '165px' }}
            >
              <div className="absolute -top-7 left-0 bg-amber-500 text-slate-900 text-[11px] font-bold px-2 py-0.5 rounded shadow-sm flex items-center gap-1 whitespace-nowrap">
                <Activity className="w-3 h-3 text-slate-900 animate-pulse" />
                <span>19167 · Aditya (94%)</span>
              </div>
              {/* Face Tracking Corner Reticles */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-amber-300"></div>
              <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-amber-300"></div>
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-amber-300"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-amber-300"></div>
              <div className="absolute bottom-1 right-1 text-[9px] font-mono text-amber-300 bg-slate-950/70 px-1 rounded">
                TRACKING
              </div>
            </div>

            {/* Hardware Servo Telemetry HUD Overlay */}
            <div className="absolute bottom-3 left-3 bg-slate-900/85 backdrop-blur-sm border border-slate-700/60 rounded-lg p-2.5 text-white text-xs font-mono space-y-1">
              <div className="flex items-center gap-2 text-slate-300 text-[11px]">
                <Sliders className="w-3.5 h-3.5 text-amber-400" />
                <span>SERVO PYFIRMATA:</span>
              </div>
              <div className="flex items-center gap-3 text-[11px] text-slate-200">
                <span>Pan (X): <strong className="text-amber-400">92°</strong></span>
                <span>Tilt (Y): <strong className="text-amber-400">45°</strong></span>
                <span className="text-emerald-400">STATUS: TRACKING</span>
              </div>
            </div>

            <div className="absolute top-3 right-3 bg-slate-900/80 backdrop-blur-sm px-2.5 py-1 rounded text-[11px] text-slate-300 font-mono">
              REC ● 10:30:15
            </div>
          </div>

          {/* Quick Camera Action / Info */}
          <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between text-xs text-slate-500 gap-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>Wajah Terdeteksi Aktif: <strong>2 Siswa</strong></span>
            </div>
            <div className="flex items-center gap-4">
              <span>Resolusi: <strong>1080p (60Hz)</strong></span>
              <span>Protokol IoT: <strong>StandardFirmata USB</strong></span>
            </div>
          </div>
        </div>

        {/* Right Column: Alert Panel & Quick Permission Action */}
        <div className="space-y-6">
          {/* Critical Alert Panel */}
          <div className="bg-rose-50/70 rounded-2xl border border-rose-200 p-5 shadow-2xs">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-rose-500 text-white rounded-xl shadow-sm">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-sm text-rose-950">Peringatan: Keluar Tanpa Izin</h3>
                  <span className="text-[11px] font-mono text-rose-700 bg-rose-100 px-2 py-0.5 rounded-full font-semibold">
                    10:30 WIB
                  </span>
                </div>
                <p className="text-xs text-rose-800 mt-1">
                  Siswa terdeteksi meninggalkan area pantauan kelas tanpa catatan izin guru.
                </p>

                {/* Target Student Mini Card */}
                <div className="mt-3 p-3 bg-white rounded-xl border border-rose-200/80 shadow-2xs">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-slate-900">Aditya Rajadana</p>
                      <p className="text-[11px] text-slate-500 font-mono">NIS: 19167 · Kelas 12-6</p>
                    </div>
                    <span className="text-[10px] font-bold text-rose-700 bg-rose-50 border border-rose-200 px-2 py-0.5 rounded-full">
                      UNAUTHORIZED
                    </span>
                  </div>

                  <div className="mt-3 flex gap-2">
                    <NavLink 
                      to="/exits" 
                      className="flex-1 text-center py-1.5 px-2 bg-amber-500 hover:bg-amber-600 text-white rounded-lg text-xs font-semibold transition"
                    >
                      Beri Izin Susulan
                    </NavLink>
                    <NavLink 
                      to="/students/1" 
                      className="py-1.5 px-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-semibold transition"
                    >
                      Profil
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Activity Timeline Mini */}
          <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-2xs">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-slate-500" />
                <h3 className="text-sm font-bold text-slate-900">Aktivitas Terkini</h3>
              </div>
              <NavLink to="/attendance" className="text-xs font-semibold text-amber-600 hover:text-amber-700">
                Semua
              </NavLink>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-3 text-xs pb-3 border-b border-slate-100">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 flex-shrink-0"></span>
                <div className="flex-1">
                  <p className="font-semibold text-slate-900">Aditya Rajadana keluar kelas</p>
                  <p className="text-slate-500 text-[11px]">Status: Tanpa izin guru</p>
                </div>
                <span className="font-mono text-slate-400 text-[11px]">10:30</span>
              </div>

              <div className="flex items-start gap-3 text-xs pb-3 border-b border-slate-100">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0"></span>
                <div className="flex-1">
                  <p className="font-semibold text-slate-900">Arkana Danendra terdeteksi masuk</p>
                  <p className="text-slate-500 text-[11px]">Presensi otomatis tercatat</p>
                </div>
                <span className="font-mono text-slate-400 text-[11px]">07:10</span>
              </div>

              <div className="flex items-start gap-3 text-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0"></span>
                <div className="flex-1">
                  <p className="font-semibold text-slate-900">Ahmad Hanif Zakaria terdeteksi masuk</p>
                  <p className="text-slate-500 text-[11px]">Presensi otomatis tercatat</p>
                </div>
                <span className="font-mono text-slate-400 text-[11px]">07:02</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
