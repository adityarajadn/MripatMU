import React from 'react';
import { RefreshCw, Layers, AlertTriangle } from 'lucide-react';

export type ViewStateType = 'normal' | 'loading' | 'empty' | 'error';

interface StateViewProps {
  state: ViewStateType;
  loadingText?: string;
  emptyTitle?: string;
  emptyDescription?: string;
  emptyActionLabel?: string;
  onEmptyAction?: () => void;
  errorTitle?: string;
  errorDescription?: string;
  onRetry?: () => void;
  children: React.ReactNode;
}

export const StateView: React.FC<StateViewProps> = ({
  state,
  loadingText = 'Memuat data...',
  emptyTitle = 'Tidak Ada Data',
  emptyDescription = 'Belum ada rekaman data yang tersedia.',
  emptyActionLabel,
  onEmptyAction,
  errorTitle = 'Gagal Memuat Data',
  errorDescription = 'Terjadi kesalahan koneksi saat mengambil data dari sistem.',
  onRetry,
  children,
}) => {
  if (state === 'loading') {
    return (
      <div className="flex flex-col items-center justify-center min-h-[350px] bg-white rounded-2xl border border-slate-200/80 p-8 shadow-2xs">
        <RefreshCw className="w-8 h-8 text-amber-500 animate-spin mb-3" />
        <p className="text-sm font-semibold text-slate-700">{loadingText}</p>
      </div>
    );
  }

  if (state === 'empty') {
    return (
      <div className="flex flex-col items-center justify-center min-h-[350px] bg-white rounded-2xl border border-slate-200/80 p-8 text-center shadow-2xs">
        <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 mb-3">
          <Layers className="w-6 h-6" />
        </div>
        <h3 className="text-base font-bold text-slate-900 mb-1">{emptyTitle}</h3>
        <p className="text-sm text-slate-500 max-w-sm mb-4">{emptyDescription}</p>
        {emptyActionLabel && onEmptyAction && (
          <button
            onClick={onEmptyAction}
            className="px-4 py-2 bg-amber-500 text-white rounded-lg text-sm font-semibold hover:bg-amber-600 transition shadow-2xs cursor-pointer"
          >
            {emptyActionLabel}
          </button>
        )}
      </div>
    );
  }

  if (state === 'error') {
    return (
      <div className="flex flex-col items-center justify-center min-h-[350px] bg-white rounded-2xl border border-rose-200 p-8 text-center shadow-2xs">
        <div className="w-12 h-12 rounded-full bg-rose-50 flex items-center justify-center text-rose-500 mb-3">
          <AlertTriangle className="w-6 h-6" />
        </div>
        <h3 className="text-base font-bold text-slate-900 mb-1">{errorTitle}</h3>
        <p className="text-sm text-slate-500 max-w-sm mb-4">{errorDescription}</p>
        {onRetry && (
          <button
            onClick={onRetry}
            className="px-4 py-2 bg-rose-600 text-white rounded-lg text-sm font-semibold hover:bg-rose-700 transition shadow-2xs cursor-pointer"
          >
            Hubungkan Ulang / Coba Lagi
          </button>
        )}
      </div>
    );
  }

  return <>{children}</>;
};
