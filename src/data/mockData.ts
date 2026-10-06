import type { Student, AttendanceRecord, ExitEvent, NotificationItem } from '../types';

export const mockStudents: Student[] = [
  {
    id: '1',
    studentNumber: '19167',
    name: 'Aditya Rajadana',
    major: 'Teknik Informatika',
    className: '12-6',
    startingYear: 2024,
    faceRegistered: true,
    status: 'OUTSIDE',
    totalOut: 3,
    lastOutTime: '10:30',
  },
  {
    id: '2',
    studentNumber: '19168',
    name: 'Ahmad Hanif Zakaria',
    major: 'Teknik Informatika',
    className: '12-6',
    startingYear: 2024,
    faceRegistered: true,
    status: 'INSIDE',
    totalOut: 1,
    lastOutTime: '08:45',
  },
  {
    id: '3',
    studentNumber: '19169',
    name: 'Arkana Rizky Faviansyah',
    major: 'Teknik Informatika',
    className: '12-6',
    startingYear: 2024,
    faceRegistered: true,
    status: 'INSIDE',
    totalOut: 0,
  },
  {
    id: '4',
    studentNumber: '19170',
    name: 'Mohammad Rahardian Atsil Qushoyyi',
    major: 'Teknik Informatika',
    className: '12-6',
    startingYear: 2024,
    faceRegistered: true,
    status: 'INSIDE',
    totalOut: 2,
    lastOutTime: '09:15',
  }
];

export const mockAttendance: AttendanceRecord[] = [
  {
    id: 'att-1',
    studentId: '1',
    studentNumber: '19167',
    studentName: 'Aditya Rajadana',
    className: '12-6',
    date: '2026-10-06',
    checkInTime: '06:55 WIB',
    status: 'PRESENT'
  },
  {
    id: 'att-2',
    studentId: '2',
    studentNumber: '19168',
    studentName: 'Ahmad Hanif Zakaria',
    className: '12-6',
    date: '2026-10-06',
    checkInTime: '07:02 WIB',
    status: 'PRESENT'
  },
  {
    id: 'att-3',
    studentId: '3',
    studentNumber: '19169',
    studentName: 'Arkana Rizky Faviansyah',
    className: '12-6',
    date: '2026-10-06',
    checkInTime: '07:10 WIB',
    status: 'PRESENT'
  },
  {
    id: 'att-4',
    studentId: '4',
    studentNumber: '19170',
    studentName: 'Mohammad Rahardian Atsil Qushoyyi',
    className: '12-6',
    date: '2026-10-06',
    checkInTime: '07:28 WIB',
    status: 'LATE'
  }
];

export const mockExits: ExitEvent[] = [
  {
    id: 'exit-1',
    studentId: '1',
    studentName: 'Aditya Rajadana',
    className: '12-6',
    exitTime: '10:30 WIB',
    status: 'UNAUTHORIZED',
    reason: 'Tidak terdaftar surat izin keluar'
  },
  {
    id: 'exit-2',
    studentId: '2',
    studentName: 'Ahmad Hanif Zakaria',
    className: '12-6',
    exitTime: '08:45 WIB',
    returnTime: '08:58 WIB',
    status: 'ALLOWED',
    authorizedBy: 'Guru Piket',
    reason: 'Izin ke kamar mandi'
  },
  {
    id: 'exit-3',
    studentId: '4',
    studentName: 'Mohammad Rahardian Atsil Qushoyyi',
    className: '12-6',
    exitTime: '10:25 WIB',
    status: 'PENDING',
    reason: 'Meminta izin ke UKS'
  }
];

export const mockNotifications: NotificationItem[] = [
  {
    id: 'notif-1',
    studentId: '1',
    studentName: 'Aditya Rajadana',
    className: '12-6',
    type: 'UNAUTHORIZED_EXIT',
    title: 'Siswa Keluar Tanpa Izin',
    message: 'Aditya Rajadana terdeteksi meninggalkan kelas 12-6 tanpa izin terkonfirmasi guru.',
    isRead: false,
    timestamp: '10:30 WIB (5 mnt lalu)',
    severity: 'WARNING'
  },
  {
    id: 'notif-2',
    studentId: '4',
    studentName: 'Mohammad Rahardian Atsil Qushoyyi',
    className: '12-6',
    type: 'STUDENT_DETECTED',
    title: 'Permintaan Izin Keluar',
    message: 'Mohammad Rahardian Atsil Qushoyyi mengajukan izin keluar menuju UKS.',
    isRead: false,
    timestamp: '10:25 WIB (10 mnt lalu)',
    severity: 'INFO'
  },
  {
    id: 'notif-3',
    type: 'SYSTEM_WARNING',
    title: 'Servo Tracking NodeMCU Kalibrasi',
    message: 'Servo 1 & 2 telah kembali ke posisi sudut netral (90 derajat).',
    isRead: true,
    timestamp: '09:00 WIB',
    severity: 'INFO'
  }
];
