export interface Student {
  id: string;
  studentNumber: string;
  name: string;
  major: string;
  className: string;
  startingYear: number;
  faceRegistered: boolean;
  status: 'INSIDE' | 'OUTSIDE' | 'ABSENT';
  totalOut: number;
  lastOutTime?: string;
  avatarUrl?: string;
}

export interface AttendanceRecord {
  id: string;
  studentId: string;
  studentNumber: string;
  studentName: string;
  className: string;
  date: string;
  checkInTime: string;
  checkOutTime?: string;
  status: 'PRESENT' | 'ABSENT' | 'LATE';
}

export interface ExitEvent {
  id: string;
  studentId: string;
  studentName: string;
  className: string;
  exitTime: string;
  returnTime?: string;
  status: 'ALLOWED' | 'PENDING' | 'UNAUTHORIZED' | 'DENIED';
  authorizedBy?: string;
  reason?: string;
}

export interface NotificationItem {
  id: string;
  studentId?: string;
  studentName?: string;
  className?: string;
  type: 'UNAUTHORIZED_EXIT' | 'STUDENT_DETECTED' | 'SYSTEM_WARNING' | 'SYSTEM_ERROR';
  title: string;
  message: string;
  isRead: boolean;
  timestamp: string;
  severity: 'INFO' | 'WARNING' | 'CRITICAL';
}
