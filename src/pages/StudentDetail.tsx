import React from 'react';
import { useParams, NavLink, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  User, 
  ScanFace, 
  Clock, 
  Calendar, 
  LogOut, 
  AlertTriangle,
  CheckCircle2
} from 'lucide-react';
import { mockStudents, mockAttendance, mockExits } from '../data/mockData';
import { StatusBadge } from '../components/StatusBadge';
import { StatCard } from '../components/StatCard';

export const StudentDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const student = mockStudents.find(s => s.id === id);

  if (!student) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] bg-white rounded-2xl border border-slate-200/80 p-8 text-center shadow-2xs">
        <User className="w-12 h-12 text-slate-300 mb-3" />
        <h3 className="text-base font-bold text-slate-900 mb-1">Siswa Tidak Ditemukan</h3>
        <p className="text-sm text-slate-500 mb-4">Siswa dengan ID tersebut tidak ada dalam database.</p>
        <button 
          onClick={() => navigate('/students')} 
          className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-semibold hover:bg-slate-200 transition cursor-pointer"
        >
          Kembali ke Data Siswa
        </button>
      </div>
    );
  }

  const studentAttendance = mockAttendance.filter(a => a.studentId === student.id);
  const studentExits = mockExits.filter(e => e.studentId === student.id);
  const unauthorizedExitCount = studentExits.filter(e => e.status === 'UNAUTHORIZED').length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <button 
          onClick={() => navigate('/students')}
          className="p-2 text-slate-400 hover:text-slate-900 bg-white hover:bg-slate-100 border border-slate-200 rounded-lg transition cursor-pointer"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Profil Siswa</h1>
          <p className="text-sm text-slate-500">Detail data, statistik kehadiran, dan riwayat keluar.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Profile Card */}
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-2xs relative overflow-hidden">
            {/* Background accent */}
            <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-slate-100 to-white border-b border-slate-100"></div>
            
            <div className="relative flex flex-col items-center text-center mt-4">
              <div className="w-20 h-20 bg-slate-100 rounded-full border-4 border-white shadow-sm flex items-center justify-center text-slate-400 mb-3">
                <User className="w-10 h-10" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">{student.name}</h2>
              <p className="text-sm font-mono text-slate-500 mt-1">NIS: {student.studentNumber}</p>
              
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                <span className="px-2.5 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded-md">
                  Kelas {student.className}
                </span>
                <span className="px-2.5 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded-md">
                  {student.major}
                </span>
                <span className="px-2.5 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded-md">
                  Angkatan {student.startingYear}
                </span>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-100 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-500 font-medium">Data Wajah (AI)</span>
                {student.faceRegistered ? (
                  <span className="flex items-center gap-1.5 text-emerald-600 text-xs font-semibold">
                    <CheckCircle2 className="w-4 h-4" /> Terdaftar
                  </span>
                ) : (
                  <span className="flex items-center gap-1.5 text-rose-600 text-xs font-semibold">
                    <AlertTriangle className="w-4 h-4" /> Belum Terdaftar
                  </span>
                )}
              </div>
              {!student.faceRegistered && (
                <button className="w-full py-2 bg-amber-50 hover:bg-amber-100 text-amber-700 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 border border-amber-200 transition cursor-pointer">
                  <ScanFace className="w-4 h-4" />
                  Mulai Registrasi Wajah
                </button>
              )}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 gap-4">
            <StatCard
              title="Hadir"
              value="92"
              unit="%"
              icon={Calendar}
            />
            <StatCard
              title="Ilegal Keluar"
              value={unauthorizedExitCount}
              icon={LogOut}
              variant="rose"
            />
          </div>
        </div>

        {/* Right Column: History Tables */}
        <div className="lg:col-span-2 space-y-6">
          {/* Recent Attendance */}
          <div className="bg-white rounded-2xl border border-slate-200/80 shadow-2xs overflow-hidden flex flex-col">
            <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
              <h3 className="font-bold text-slate-900">Riwayat Presensi AI (7 Hari Terakhir)</h3>
              <NavLink to="/attendance" className="text-xs font-semibold text-amber-600 hover:text-amber-700">Lihat Semua</NavLink>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm whitespace-nowrap">
                <thead className="bg-slate-50 border-b border-slate-100 text-slate-500 text-xs font-semibold">
                  <tr>
                    <th className="px-6 py-3">Tanggal</th>
                    <th className="px-6 py-3">Jam Masuk (Deteksi)</th>
                    <th className="px-6 py-3 text-center">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {studentAttendance.length > 0 ? studentAttendance.map(att => (
                    <tr key={att.id} className="hover:bg-slate-50">
                      <td className="px-6 py-3 text-slate-700">{att.date}</td>
                      <td className="px-6 py-3 font-mono text-slate-500">{att.checkInTime}</td>
                      <td className="px-6 py-4 text-center">
                        <StatusBadge status={att.status} />
                      </td>
                    </tr>
                  )) : (
                    <tr><td colSpan={3} className="px-6 py-6 text-center text-slate-400 text-sm">Tidak ada data kehadiran baru.</td></tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Exit History */}
          <div className="bg-white rounded-2xl border border-slate-200/80 shadow-2xs overflow-hidden flex flex-col">
            <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
              <h3 className="font-bold text-slate-900">Riwayat Keluar Kelas</h3>
              <NavLink to="/exits" className="text-xs font-semibold text-amber-600 hover:text-amber-700">Lihat Semua</NavLink>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm whitespace-nowrap">
                <thead className="bg-slate-50 border-b border-slate-100 text-slate-500 text-xs font-semibold">
                  <tr>
                    <th className="px-6 py-3">Waktu Keluar</th>
                    <th className="px-6 py-3">Waktu Kembali</th>
                    <th className="px-6 py-3">Keterangan</th>
                    <th className="px-6 py-3 text-center">Izin</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {studentExits.length > 0 ? studentExits.map(exit => (
                    <tr key={exit.id} className="hover:bg-slate-50">
                      <td className="px-6 py-3 font-mono text-slate-700">
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-slate-400" />
                          {exit.exitTime}
                        </div>
                      </td>
                      <td className="px-6 py-3 font-mono text-slate-500">{exit.returnTime || '-'}</td>
                      <td className="px-6 py-3 text-slate-600 truncate max-w-[150px]">{exit.reason || '-'}</td>
                      <td className="px-6 py-4 text-center">
                        <StatusBadge status={exit.status} />
                      </td>
                    </tr>
                  )) : (
                    <tr><td colSpan={4} className="px-6 py-6 text-center text-slate-400 text-sm">Belum ada riwayat keluar kelas.</td></tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
