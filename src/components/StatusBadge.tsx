import React from 'react';
import { 
  CheckCircle2, 
  Clock, 
  XCircle, 
  AlertTriangle, 
  ShieldAlert,
  UserCheck
} from 'lucide-react';

export type StatusVariant = 
  | 'PRESENT' | 'present'
  | 'LATE' | 'late'
  | 'ABSENT' | 'absent'
  | 'INSIDE' | 'inside'
  | 'OUTSIDE' | 'outside'
  | 'ALLOWED' | 'allowed'
  | 'PENDING' | 'pending'
  | 'UNAUTHORIZED' | 'unauthorized'
  | 'DENIED' | 'denied'
  | 'REGISTERED' | 'registered'
  | 'UNREGISTERED' | 'unregistered';

interface StatusBadgeProps {
  status: StatusVariant;
  label?: string;
  size?: 'sm' | 'md';
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ 
  status, 
  label, 
  size = 'sm' 
}) => {
  const normStatus = status.toUpperCase();

  const getStyle = () => {
    switch (normStatus) {
      case 'PRESENT':
        return {
          bg: 'bg-emerald-50',
          text: 'text-emerald-700',
          border: 'border-emerald-200/80',
          icon: CheckCircle2,
          defaultLabel: 'Hadir'
        };
      case 'LATE':
        return {
          bg: 'bg-amber-50',
          text: 'text-amber-700',
          border: 'border-amber-200/80',
          icon: Clock,
          defaultLabel: 'Terlambat'
        };
      case 'ABSENT':
        return {
          bg: 'bg-rose-50',
          text: 'text-rose-700',
          border: 'border-rose-200/80',
          icon: XCircle,
          defaultLabel: 'Alpa'
        };
      case 'INSIDE':
        return {
          bg: 'bg-emerald-50',
          text: 'text-emerald-700',
          border: 'border-emerald-200/80',
          icon: UserCheck,
          defaultLabel: 'Di Kelas'
        };
      case 'OUTSIDE':
        return {
          bg: 'bg-amber-50',
          text: 'text-amber-700',
          border: 'border-amber-200/80',
          icon: Clock,
          defaultLabel: 'Di Luar'
        };
      case 'ALLOWED':
        return {
          bg: 'bg-emerald-50',
          text: 'text-emerald-700',
          border: 'border-emerald-200/80',
          icon: CheckCircle2,
          defaultLabel: 'Diizinkan'
        };
      case 'PENDING':
        return {
          bg: 'bg-amber-50',
          text: 'text-amber-700',
          border: 'border-amber-200/80',
          icon: AlertTriangle,
          defaultLabel: 'Menunggu'
        };
      case 'UNAUTHORIZED':
        return {
          bg: 'bg-rose-50',
          text: 'text-rose-700',
          border: 'border-rose-200/80',
          icon: ShieldAlert,
          defaultLabel: 'Tanpa Izin'
        };
      case 'DENIED':
        return {
          bg: 'bg-slate-100',
          text: 'text-slate-700',
          border: 'border-slate-200',
          icon: XCircle,
          defaultLabel: 'Ditolak'
        };
      case 'REGISTERED':
        return {
          bg: 'bg-emerald-50',
          text: 'text-emerald-700',
          border: 'border-emerald-200/80',
          icon: CheckCircle2,
          defaultLabel: 'Terdaftar'
        };
      case 'UNREGISTERED':
        return {
          bg: 'bg-rose-50',
          text: 'text-rose-700',
          border: 'border-rose-200/80',
          icon: XCircle,
          defaultLabel: 'Belum'
        };
      default:
        return {
          bg: 'bg-slate-50',
          text: 'text-slate-600',
          border: 'border-slate-200',
          icon: Clock,
          defaultLabel: normStatus
        };
    }
  };

  const config = getStyle();
  const Icon = config.icon;
  const displayText = label || config.defaultLabel;

  return (
    <span className={`inline-flex items-center gap-1.5 font-semibold rounded-full border ${config.bg} ${config.text} ${config.border} ${
      size === 'sm' ? 'px-2.5 py-0.5 text-[11px]' : 'px-3 py-1 text-xs'
    }`}>
      <Icon className={size === 'sm' ? 'w-3 h-3' : 'w-3.5 h-3.5'} />
      <span>{displayText}</span>
    </span>
  );
};
