import React, { useState } from 'react';
import { 
  Download, 
  CalendarCheck,
  Clock
} from 'lucide-react';
import { mockAttendance } from '../data/mockData';
import { StatusBadge } from '../components/StatusBadge';
import { SearchFilterBar } from '../components/SearchFilterBar';

export const Attendance: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL');

  const filteredAttendance = mockAttendance.filter(record => {
    const matchesSearch = record.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          record.studentNumber.includes(searchTerm);
    const matchesStatus = statusFilter === 'ALL' || record.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Presensi Kehadiran Siswa</h1>
          <p className="text-sm text-slate-500">Laporan hasil pengenalan wajah otomatis oleh sistem MripatMU.</p>
        </div>
        <button className="flex items-center gap-2 border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 px-4 py-2 rounded-lg text-sm font-semibold transition shadow-2xs self-start sm:self-auto cursor-pointer">
          <Download className="w-4 h-4 text-slate-500" />
          Ekspor Laporan (CSV)
        </button>
      </div>

      {/* Filters & Actions Bar */}
      <SearchFilterBar
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        placeholder="Cari siswa atau NIS..."
      >
        <select 
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="border border-slate-200 rounded-lg text-sm px-3 py-2 bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
        >
          <option value="ALL">Semua Status</option>
          <option value="PRESENT">Hadir (Present)</option>
          <option value="LATE">Terlambat (Late)</option>
          <option value="ABSENT">Alpa/Sakit (Absent)</option>
        </select>

        <div className="flex items-center gap-2 border border-slate-200 rounded-lg px-3 py-2 text-sm bg-white text-slate-600">
          <CalendarCheck className="w-4 h-4 text-slate-400" />
          <input type="date" defaultValue="2026-10-06" className="bg-transparent focus:outline-none text-slate-700 font-medium" />
        </div>
      </SearchFilterBar>

      {/* Table */}
      <div className="bg-white rounded-xl border border-slate-200/80 shadow-2xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 uppercase text-[11px] tracking-wider font-semibold">
              <tr>
                <th className="px-6 py-4">Siswa</th>
                <th className="px-6 py-4">NIS</th>
                <th className="px-6 py-4">Kelas</th>
                <th className="px-6 py-4">Tanggal</th>
                <th className="px-6 py-4">Waktu Presensi (AI)</th>
                <th className="px-6 py-4 text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {filteredAttendance.length > 0 ? (
                filteredAttendance.map((record) => (
                  <tr key={record.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="px-6 py-4 font-medium text-slate-900">{record.studentName}</td>
                    <td className="px-6 py-4 font-mono text-slate-500">{record.studentNumber}</td>
                    <td className="px-6 py-4">{record.className}</td>
                    <td className="px-6 py-4 text-slate-500">{record.date}</td>
                    <td className="px-6 py-4 font-mono text-slate-700">
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        {record.checkInTime}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <StatusBadge status={record.status} />
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-slate-500">
                    Tidak ada catatan kehadiran yang sesuai dengan filter.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
