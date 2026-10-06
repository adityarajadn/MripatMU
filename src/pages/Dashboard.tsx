import React, { useState } from 'react';
import { 
  Users, 
  UserCheck, 
  UserX, 
  LogOut, 
  AlertTriangle, 
  Clock 
} from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { StateView, type ViewStateType } from '../components/StateView';
import { StatCard } from '../components/StatCard';
import { CameraView } from '../components/CameraView';

export const Dashboard: React.FC = () => {
  const [viewState, setViewState] = useState<ViewStateType>('normal');

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

      <StateView 
        state={viewState}
        onEmptyAction={() => setViewState('normal')}
        emptyActionLabel="Mulai Monitoring"
        onRetry={() => setViewState('normal')}
      >
        {/* KPI Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard
            title="Total Siswa"
            value="32"
            subtitle="Kelas 12-6 (Teknik Informatika)"
            unit="Siswa terdaftar"
            icon={Users}
          />
          <StatCard
            title="Hadir di Kelas"
            value="29"
            subtitle="Terverifikasi wajah otomatis"
            badge={{ text: '90.6%', variant: 'success' }}
            icon={UserCheck}
            variant="emerald"
          />
          <StatCard
            title="Di Luar Kelas"
            value="1"
            subtitle="Memerlukan atensi guru"
            badge={{ text: '1 Tanpa Izin', variant: 'danger' }}
            icon={LogOut}
            variant="amber"
          />
          <StatCard
            title="Tidak Hadir"
            value="2"
            subtitle="1 Sakit, 1 Tanpa Keterangan"
            unit="Siswa alpa/izin"
            icon={UserX}
          />
        </div>

        {/* Main Monitoring Row: Camera View + Alert / Telemetry */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <CameraView />
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
      </StateView>
    </div>
  );
};

