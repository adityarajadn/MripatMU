import React, { useState } from 'react';
import { 
  Check, 
  X, 
  AlertTriangle, 
  Clock, 
  ShieldAlert,
  User
} from 'lucide-react';
import { mockExits } from '../data/mockData';
import type { ExitEvent } from '../types';

export const Exits: React.FC = () => {
  const [exits, setExits] = useState<ExitEvent[]>(mockExits);

  const handleAllow = (id: string) => {
    setExits(prev => prev.map(item => {
      if (item.id === id) {
        return { ...item, status: 'ALLOWED', authorizedBy: 'Guru Piket (Saya)' };
      }
      return item;
    }));
  };

  const handleDeny = (id: string) => {
    setExits(prev => prev.map(item => {
      if (item.id === id) {
        return { ...item, status: 'DENIED', authorizedBy: 'Guru Piket (Ditolak)' };
      }
      return item;
    }));
  };

  const pendingExits = exits.filter(e => e.status === 'PENDING');
  const unauthorizedExits = exits.filter(e => e.status === 'UNAUTHORIZED');
  const pastExits = exits.filter(e => e.status === 'ALLOWED' || e.status === 'DENIED');

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Pantau Keluar Kelas</h1>
        <p className="text-sm text-slate-500">
          Otorisasi izin keluar siswa dan penindakan otomatis terhadap siswa keluar tanpa izin (Unauthorized Exit).
        </p>
      </div>

      {/* Critical Unauthorized Warning Banner if any */}
      {unauthorizedExits.length > 0 && (
        <div className="bg-rose-50 border border-rose-200 rounded-2xl p-5 shadow-2xs">
          <div className="flex items-start gap-4">
            <div className="p-2.5 bg-rose-500 text-white rounded-xl shadow-sm">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-bold text-base text-rose-950">
                  {unauthorizedExits.length} Siswa Terdeteksi Keluar Tanpa Izin!
                </h3>
                <span className="text-xs font-semibold px-2.5 py-1 bg-rose-200/80 text-rose-900 rounded-full">
                  Perlu Tindakan
                </span>
              </div>
              <p className="text-sm text-rose-800 mt-1">
                Kamera AI mendeteksi siswa meninggalkan kelas tanpa otorisasi sistem izin guru.
              </p>

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {unauthorizedExits.map((item) => (
                  <div key={item.id} className="bg-white p-3.5 rounded-xl border border-rose-200 shadow-2xs flex items-center justify-between">
                    <div>
                      <p className="text-sm font-bold text-slate-900">{item.studentName}</p>
                      <p className="text-xs text-slate-500 font-mono">Pukul {item.exitTime} · Kelas {item.className}</p>
                    </div>
                    <button 
                      onClick={() => handleAllow(item.id)}
                      className="px-3 py-1.5 bg-amber-500 hover:bg-amber-600 text-white text-xs font-semibold rounded-lg transition"
                    >
                      Beri Izin
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Pending Approval Requests */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-2xs space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-amber-500" />
            <h2 className="text-base font-bold text-slate-900">Permintaan Izin Menunggu Otorisasi ({pendingExits.length})</h2>
          </div>
        </div>

        {pendingExits.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {pendingExits.map((item) => (
              <div key={item.id} className="border border-amber-200 bg-amber-50/30 rounded-xl p-4 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-800 font-bold text-xs">
                        <User className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-slate-900">{item.studentName}</h4>
                        <p className="text-xs text-slate-500">Kelas {item.className}</p>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-slate-500 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {item.exitTime}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 bg-white p-2.5 rounded-lg border border-slate-200/60 mb-4">
                    Alasan: <span className="font-medium text-slate-800">{item.reason || 'Tidak ada catatan'}</span>
                  </p>
                </div>

                <div className="flex gap-2 pt-2 border-t border-amber-100">
                  <button 
                    onClick={() => handleAllow(item.id)}
                    className="flex-1 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition"
                  >
                    <Check className="w-4 h-4" />
                    Izinkan Keluar
                  </button>
                  <button 
                    onClick={() => handleDeny(item.id)}
                    className="py-2 px-3 bg-slate-100 hover:bg-rose-50 hover:text-rose-600 text-slate-600 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition"
                  >
                    <X className="w-4 h-4" />
                    Tolak
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-6 text-center text-slate-400 bg-slate-50/50 rounded-xl border border-dashed border-slate-200">
            <p className="text-sm">Tidak ada permintaan izin keluar yang tertunda saat ini.</p>
          </div>
        )}
      </div>

      {/* History Table */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-2xs overflow-hidden flex flex-col">
        <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between">
          <h3 className="font-bold text-slate-900">Riwayat Catatan Keluar Hari Ini</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 uppercase text-[11px] tracking-wider font-semibold">
              <tr>
                <th className="px-6 py-4">Siswa</th>
                <th className="px-6 py-4">Kelas</th>
                <th className="px-6 py-4">Waktu Keluar</th>
                <th className="px-6 py-4">Waktu Kembali</th>
                <th className="px-6 py-4">Keterangan</th>
                <th className="px-6 py-4">Diotorisasi Oleh</th>
                <th className="px-6 py-4 text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {pastExits.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50/80 transition">
                  <td className="px-6 py-4 font-medium text-slate-900">{item.studentName}</td>
                  <td className="px-6 py-4">{item.className}</td>
                  <td className="px-6 py-4 font-mono text-slate-600">{item.exitTime}</td>
                  <td className="px-6 py-4 font-mono text-slate-500">{item.returnTime || '-'}</td>
                  <td className="px-6 py-4 text-slate-600">{item.reason}</td>
                  <td className="px-6 py-4 text-slate-500">{item.authorizedBy || '-'}</td>
                  <td className="px-6 py-4 text-center">
                    <span className={`inline-flex px-2.5 py-1 rounded-full text-xs font-semibold
                      ${item.status === 'ALLOWED' ? 'bg-emerald-50 text-emerald-700 border border-emerald-100' : ''}
                      ${item.status === 'DENIED' ? 'bg-rose-50 text-rose-700 border border-rose-100' : ''}
                    `}>
                      {item.status === 'ALLOWED' ? 'Diizinkan' : 'Ditolak'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
