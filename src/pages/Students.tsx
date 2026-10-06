import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Plus, 
  Filter, 
  ChevronRight,
  ScanFace
} from 'lucide-react';
import { mockStudents } from '../data/mockData';
import { StatusBadge } from '../components/StatusBadge';
import { SearchFilterBar } from '../components/SearchFilterBar';

export const Students: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredStudents = mockStudents.filter(student => 
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.studentNumber.includes(searchTerm)
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Data Siswa</h1>
          <p className="text-sm text-slate-500">Kelola data siswa dan registrasi wajah (Face Recognition).</p>
        </div>
        <button className="flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition self-start sm:self-auto cursor-pointer">
          <Plus className="w-4 h-4" />
          Tambah Siswa
        </button>
      </div>

      {/* Filters & Search */}
      <SearchFilterBar 
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        placeholder="Cari nama atau NIS..."
      >
        <select className="border border-slate-200 rounded-lg text-sm px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 text-slate-600">
          <option value="all">Semua Kelas</option>
          <option value="12-6">12-6</option>
        </select>
        <button className="flex items-center gap-2 border border-slate-200 hover:bg-slate-50 text-slate-600 px-3 py-2 rounded-lg text-sm font-medium transition cursor-pointer">
          <Filter className="w-4 h-4" />
          <span className="hidden sm:inline">Filter Detail</span>
        </button>
      </SearchFilterBar>

      {/* Table */}
      <div className="bg-white rounded-xl border border-slate-200/80 shadow-2xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 uppercase text-[11px] tracking-wider font-semibold">
              <tr>
                <th className="px-6 py-4 rounded-tl-xl">Siswa</th>
                <th className="px-6 py-4">NIS</th>
                <th className="px-6 py-4">Kelas</th>
                <th className="px-6 py-4 text-center">Registrasi Wajah</th>
                <th className="px-6 py-4 text-center">Status</th>
                <th className="px-6 py-4 text-right rounded-tr-xl">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {filteredStudents.length > 0 ? (
                filteredStudents.map((student) => (
                  <tr key={student.id} className="hover:bg-amber-50/30 transition-colors group">
                    <td className="px-6 py-4 font-medium text-slate-900">{student.name}</td>
                    <td className="px-6 py-4 font-mono text-slate-500">{student.studentNumber}</td>
                    <td className="px-6 py-4">{student.className}</td>
                    <td className="px-6 py-4 text-center">
                      <StatusBadge status={student.faceRegistered ? 'REGISTERED' : 'UNREGISTERED'} />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <StatusBadge status={student.status} />
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        {!student.faceRegistered && (
                          <button 
                            className="p-1.5 text-slate-400 hover:text-amber-600 hover:bg-amber-50 rounded-md transition tooltip-trigger relative cursor-pointer"
                            title="Registrasi Wajah"
                          >
                            <ScanFace className="w-4 h-4" />
                          </button>
                        )}
                        <NavLink 
                          to={`/students/${student.id}`}
                          className="flex items-center gap-1 text-xs font-semibold text-slate-500 hover:text-amber-600 group-hover:text-amber-600 transition"
                        >
                          Detail
                          <ChevronRight className="w-4 h-4" />
                        </NavLink>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-slate-500">
                    <p className="font-medium text-slate-900 mb-1">Siswa tidak ditemukan</p>
                    <p className="text-sm">Ganti kata kunci pencarian atau bersihkan filter.</p>
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
