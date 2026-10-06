import React, { useState } from 'react';
import { 
  Bell, 
  AlertTriangle, 
  Info, 
  CheckCheck, 
  Trash2,
  Clock
} from 'lucide-react';
import { mockNotifications } from '../data/mockData';
import type { NotificationItem } from '../types';

export const Notifications: React.FC = () => {
  const [notifications, setNotifications] = useState<NotificationItem[]>(mockNotifications);
  const [filter, setFilter] = useState<'ALL' | 'UNREAD' | 'WARNING'>('ALL');

  const markAllAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, isRead: true })));
  };

  const clearAll = () => {
    setNotifications([]);
  };

  const filtered = notifications.filter(item => {
    if (filter === 'UNREAD') return !item.isRead;
    if (filter === 'WARNING') return item.severity === 'WARNING' || item.severity === 'CRITICAL';
    return true;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Pusat Notifikasi & Alert</h1>
          <p className="text-sm text-slate-500">Daftar log peristiwa pengawasan kamera dan peringatan pergerakan kelas.</p>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-auto">
          <button 
            onClick={markAllAsRead}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 rounded-lg text-xs font-semibold transition"
          >
            <CheckCheck className="w-4 h-4 text-emerald-600" />
            Tandai Sudah Dibaca
          </button>
          <button 
            onClick={clearAll}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200 hover:bg-rose-50 hover:text-rose-600 text-slate-500 rounded-lg text-xs font-semibold transition"
          >
            <Trash2 className="w-4 h-4" />
            Bersihkan
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 border-b border-slate-200 pb-2">
        <button 
          onClick={() => setFilter('ALL')}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
            filter === 'ALL' ? 'bg-amber-500 text-white' : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          Semua ({notifications.length})
        </button>
        <button 
          onClick={() => setFilter('UNREAD')}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
            filter === 'UNREAD' ? 'bg-amber-500 text-white' : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          Belum Dibaca ({notifications.filter(n => !n.isRead).length})
        </button>
        <button 
          onClick={() => setFilter('WARNING')}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
            filter === 'WARNING' ? 'bg-amber-500 text-white' : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          Peringatan Kritis
        </button>
      </div>

      {/* Notification List */}
      <div className="space-y-3">
        {filtered.length > 0 ? (
          filtered.map((item) => (
            <div 
              key={item.id} 
              className={`p-4 rounded-xl border transition flex items-start gap-4 ${
                !item.isRead 
                  ? 'bg-amber-50/20 border-amber-200/70 shadow-2xs' 
                  : 'bg-white border-slate-200/80'
              }`}
            >
              <div className={`p-2 rounded-xl flex-shrink-0 ${
                item.severity === 'WARNING' 
                  ? 'bg-rose-100 text-rose-600' 
                  : item.severity === 'CRITICAL'
                  ? 'bg-rose-600 text-white'
                  : 'bg-amber-100 text-amber-700'
              }`}>
                {item.severity === 'WARNING' || item.severity === 'CRITICAL' ? (
                  <AlertTriangle className="w-5 h-5" />
                ) : (
                  <Info className="w-5 h-5" />
                )}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h4 className="font-bold text-sm text-slate-900 truncate">{item.title}</h4>
                  <span className="flex items-center gap-1 text-[11px] font-mono text-slate-400 flex-shrink-0">
                    <Clock className="w-3 h-3" />
                    {item.timestamp}
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">{item.message}</p>
              </div>

              {!item.isRead && (
                <span className="w-2 h-2 rounded-full bg-amber-500 flex-shrink-0 self-center"></span>
              )}
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center p-12 bg-white rounded-2xl border border-slate-200 text-center shadow-2xs">
            <Bell className="w-10 h-10 text-slate-300 mb-2" />
            <p className="text-sm font-semibold text-slate-800">Tidak Ada Notifikasi</p>
            <p className="text-xs text-slate-400">Semua pemberitahuan sudah diperiksa.</p>
          </div>
        )}
      </div>
    </div>
  );
};
