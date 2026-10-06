import React from 'react';
import type { LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  unit?: string;
  badge?: {
    text: string;
    variant?: 'success' | 'warning' | 'danger' | 'neutral';
  };
  icon: LucideIcon;
  variant?: 'default' | 'amber' | 'emerald' | 'rose';
}

export const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  subtitle,
  unit,
  badge,
  icon: Icon,
  variant = 'default',
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'emerald':
        return {
          cardBg: 'bg-white',
          border: 'border-slate-200/80',
          titleColor: 'text-emerald-600',
          valueColor: 'text-emerald-700',
          iconBg: 'bg-emerald-50 text-emerald-600',
        };
      case 'amber':
        return {
          cardBg: 'bg-amber-50/20',
          border: 'border-amber-200/80',
          titleColor: 'text-amber-700',
          valueColor: 'text-amber-700',
          iconBg: 'bg-amber-100 text-amber-700',
        };
      case 'rose':
        return {
          cardBg: 'bg-rose-50/20',
          border: 'border-rose-200/80',
          titleColor: 'text-rose-600',
          valueColor: 'text-rose-700',
          iconBg: 'bg-rose-50 text-rose-600',
        };
      default:
        return {
          cardBg: 'bg-white',
          border: 'border-slate-200/80',
          titleColor: 'text-slate-500',
          valueColor: 'text-slate-900',
          iconBg: 'bg-slate-100 text-slate-600',
        };
    }
  };

  const styles = getVariantStyles();

  const getBadgeStyle = () => {
    switch (badge?.variant) {
      case 'success':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'warning':
        return 'bg-amber-50 text-amber-700 border-amber-200';
      case 'danger':
        return 'bg-rose-50 text-rose-700 border-rose-200';
      default:
        return 'bg-slate-100 text-slate-600 border-slate-200';
    }
  };

  return (
    <div className={`${styles.cardBg} rounded-xl p-5 border ${styles.border} shadow-2xs`}>
      <div className="flex items-center justify-between mb-3">
        <span className={`text-xs font-semibold uppercase tracking-wider ${styles.titleColor}`}>
          {title}
        </span>
        <div className={`p-2 rounded-lg ${styles.iconBg}`}>
          <Icon className="w-4 h-4" />
        </div>
      </div>
      <div className="flex items-baseline gap-2">
        <span className={`text-3xl font-bold ${styles.valueColor}`}>{value}</span>
        {unit && <span className="text-xs text-slate-400 font-medium">{unit}</span>}
        {badge && (
          <span className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${getBadgeStyle()}`}>
            {badge.text}
          </span>
        )}
      </div>
      {subtitle && <div className="mt-3 text-xs text-slate-500">{subtitle}</div>}
    </div>
  );
};
