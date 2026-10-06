# Product Requirements Document (PRD)

# MripatMU

> **Implementasi Sistem Pengawasan Kehadiran Siswa Berbasis Face Recognition dan IoT untuk Meningkatkan Kedisiplinan di Sekolah Menengah**

**Project:** MripatMU
**Team:** G.O.A.T
**Primary Users:** Guru dan Administrasi Sekolah
**Secondary Users:** Siswa
**Product Type:** AI + IoT School Monitoring System

---

# 1. Product Overview

## 1.1 Apa itu MripatMU?

MripatMU adalah sistem pengawasan kehadiran dan perilaku siswa berbasis **Artificial Intelligence (AI)** dan **Internet of Things (IoT)**.

Sistem menggunakan kamera dan teknologi **face recognition** untuk mengenali siswa, **face tracking** untuk mengikuti posisi wajah, serta perangkat IoT berupa **NodeMCU ESP8266 dan servo** untuk mengarahkan kamera.

Sistem dirancang untuk:

* Memantau kehadiran siswa secara real-time.
* Mengenali identitas siswa secara otomatis.
* Mencatat aktivitas siswa.
* Mendeteksi siswa yang meninggalkan kelas.
* Membedakan siswa yang keluar dengan izin dan tanpa izin.
* Mengirimkan notifikasi otomatis.
* Menyediakan data untuk analisis kedisiplinan siswa.

Konsep tersebut merupakan inti produk yang dijelaskan dalam presentasi MripatMU.

---

# 2. Problem Statement

## 2.1 Masalah Utama

Sekolah menghadapi masalah ketidakhadiran dan perilaku siswa yang sulit dipantau secara konsisten.

Presentasi mengidentifikasi beberapa permasalahan:

1. Tingginya ketidakhadiran siswa di kelas.
2. Siswa pernah melakukan tindakan membolos.
3. Kasus membolos meningkat.
4. Pengawasan terhadap siswa masih lemah.
5. Kesadaran siswa terhadap kedisiplinan masih menjadi masalah.
6. Kondisi tersebut dapat berdampak terhadap kualitas pendidikan dan kedisiplinan.

---

# 3. Product Goal

MripatMU harus membuat proses monitoring siswa menjadi:

**Automatic → Real-Time → Accurate → Actionable**

Artinya:

### Automatic

Guru tidak perlu melakukan monitoring manual terhadap setiap siswa sepanjang waktu.

### Real-Time

Guru dapat mengetahui kondisi kehadiran dan status siswa secara langsung.

### Accurate

Sistem menggunakan identitas wajah untuk menghubungkan aktivitas dengan siswa tertentu.

### Actionable

Data yang diperoleh dapat digunakan guru/sekolah untuk mengambil tindakan.

---

# 4. Product Objectives

## Objective 1 — Automatic Attendance

Mengenali siswa yang berada di kelas dan mencatat kehadiran berdasarkan hasil face recognition.

## Objective 2 — Student Monitoring

Memantau keberadaan siswa menggunakan kamera dan face tracking.

## Objective 3 — Unauthorized Exit Detection

Mendeteksi ketika siswa meninggalkan kelas tanpa izin.

## Objective 4 — Automatic Notification

Memberikan pemberitahuan kepada guru ketika terdapat siswa yang keluar tanpa izin.

## Objective 5 — Data Analysis

Menyimpan riwayat aktivitas siswa sehingga sekolah dapat menganalisis pola kehadiran dan perilaku.

---

# 5. Target Users

## 5.1 Guru

Guru adalah pengguna utama sistem monitoring.

### Kebutuhan Guru

Guru membutuhkan:

* Dashboard monitoring kelas.
* Informasi siswa yang hadir.
* Informasi siswa yang keluar.
* Status izin siswa.
* Notifikasi ketika siswa keluar tanpa izin.
* Riwayat aktivitas siswa.

Presentasi secara eksplisit mendefinisikan guru sebagai pengguna yang membutuhkan monitoring kehadiran, laporan analisis, dan pemberitahuan otomatis.

---

# 5.2 Administrasi Sekolah

Administrasi menggunakan data MripatMU untuk:

* Melihat data kehadiran.
* Melihat laporan siswa.
* Melakukan evaluasi kedisiplinan.
* Mendukung pengambilan keputusan strategis.
* Mengoptimalkan proses manajemen sekolah.

Target administrasi juga disebutkan dalam bagian target users pada presentasi.

---

# 5.3 Siswa

Siswa merupakan pihak yang dimonitor oleh sistem.

Siswa perlu:

* Terdaftar dalam database.
* Memiliki data wajah.
* Memiliki identitas siswa.
* Mendapat status kehadiran.
* Mendapat status ketika keluar kelas.
* Memiliki status izin apabila meninggalkan kelas.

---

# 6. Core Features

MripatMU memiliki empat fitur utama yang ditampilkan dalam presentasi:

1. **Face Recognition**
2. **Face Tracking**
3. **Automatic Notification**
4. **Real-Time Monitoring**

---

# 7. Feature Specification

# 7.1 Face Recognition

## Purpose

Mengidentifikasi siswa berdasarkan wajah yang tertangkap kamera.

## Input

* Video dari webcam.
* Frame kamera.
* Face detection result.
* Face database.

## Process

```text
Camera
   ↓
Capture Video
   ↓
Convert Frame
   ↓
Grayscale
   ↓
Face Detection
   ↓
Face Found?
   ↓
Face Recognition
   ↓
Compare with Student Database
   ↓
Match?
   ↓
Identify Student
```

Alur tersebut mengikuti flow yang ditampilkan dalam presentasi.

## Output

Jika wajah cocok:

```text
Student ID
Student Name
Class
Recognition Status
Timestamp
```

Jika tidak cocok:

```text
Unknown Face
```

## Acceptance Criteria

* Kamera dapat menangkap frame.
* Sistem dapat mendeteksi wajah.
* Sistem dapat mencocokkan wajah dengan database.
* Sistem dapat mengidentifikasi siswa yang cocok.
* Sistem mencatat timestamp pengenalan.
* Sistem tidak boleh menganggap wajah yang tidak cocok sebagai siswa terdaftar.

---

# 7.2 Face Tracking

## Purpose

Mengikuti posisi wajah siswa menggunakan kamera.

Face tracking digunakan agar kamera dapat mempertahankan siswa sebagai target monitoring.

## Process

```text
Detected Face
      ↓
Track Face Position
      ↓
Calculate Face Position
      ↓
Determine Camera Direction
      ↓
Send Command
      ↓
NodeMCU
      ↓
Servo
      ↓
Camera Direction Changes
```

Presentasi menunjukkan penggunaan `pyFirmata` untuk mengirim komunikasi ke NodeMCU 8266 dan menggerakkan servo berdasarkan hasil tracking wajah.

## Hardware Output

* Servo 1
* Servo 2

Keduanya digunakan untuk pergerakan kamera pada desain perangkat.

---

# 7.3 Real-Time Monitoring

## Purpose

Guru dapat melihat kondisi monitoring kelas secara langsung.

## Dashboard harus menyediakan

### Camera View

Menampilkan feed kamera.

### Detection Status

Contoh:

```text
Camera: ONLINE
AI Engine: ACTIVE
Tracking: ACTIVE
```

### Current Student

```text
Student:
Ahmad Hanif Zakaria

Class:
12-6

Status:
Present
```

### Exit Status

```text
Status:
Inside Classroom
```

atau

```text
Status:
Outside Classroom
```

atau

```text
Status:
Outside Without Permission
```

---

# 7.4 Automatic Notification

## Purpose

Memberitahu guru ketika siswa meninggalkan kelas tanpa izin.

Presentasi mendefinisikan notifikasi otomatis sebagai salah satu fitur utama dan bagian penting dari kebutuhan guru.

## Trigger

Notification harus dibuat ketika:

```text
Student detected
       ↓
Student leaves classroom
       ↓
Check permission
       ↓
Permission = NO
       ↓
Create notification
```

## Notification Data

```json
{
  "student_id": "19167",
  "student_name": "Aditya Rajadana",
  "class": "12-6",
  "event": "UNAUTHORIZED_EXIT",
  "timestamp": "2026-10-06T10:30:00"
}
```

## Notification Example

```text
⚠ Siswa Keluar Tanpa Izin

Nama:
Aditya Rajadana

Kelas:
12-6

Waktu:
10:30

Status:
Keluar Tanpa Izin
```

---

# 8. Permission System

Permission merupakan bagian penting dari business logic MripatMU.

Guru dapat menentukan apakah siswa diperbolehkan keluar.

## State

```text
INSIDE
   ↓
EXIT REQUEST
   ↓
┌───────────────┐
│ Guru decision │
└───────────────┘
      ↓
 ┌────┴────┐
 YES       NO
 ↓          ↓
ALLOWED    UNAUTHORIZED
```

Presentasi memperlihatkan user flow guru:

```text
Guru masuk
    ↓
Dashboard
    ↓
Monitor kehadiran
    ↓
Siswa keluar
    ↓
Guru memberikan izin?
    ├── YES → Status: Diizinkan
    └── NO  → Status: Keluar tanpa izin
```

---

# 9. User Flow — Guru

```text
START
  ↓
Guru Login
  ↓
Dashboard
  ↓
Monitor Kehadiran Siswa
  ↓
System detects student
  ↓
Student leaves classroom
  ↓
System checks permission
  ↓
┌───────────────────┐
│ Guru gives permit?│
└───────────────────┘
      ↓
  ┌───┴───┐
 YES     NO
 ↓        ↓
Allowed  Unauthorized
 ↓        ↓
No       Notification
notification
```

Flow ini mengikuti user flow guru yang terdapat pada slide.

---

# 10. User Flow — Student

```text
START
  ↓
Student registers
  ↓
Face registration
  ↓
Student enters classroom
  ↓
Face Recognition
  ↓
Attendance confirmed
  ↓
Student leaves classroom
  ↓
Check teacher permission
  ↓
┌──────────────┐
│ Permission?  │
└──────────────┘
    ↓
 ┌──┴──┐
YES   NO
 ↓     ↓
No    Notification
notification
      ↓
Status:
Unauthorized Exit
```

Presentasi menunjukkan tiga aktivitas utama siswa:

* Pengenalan wajah saat pendaftaran.
* Konfirmasi kehadiran.
* Pemberitahuan ketika keluar tanpa izin.

---

# 11. End-to-End System Flow

```text
┌─────────────────────┐
│       WEBCAM        │
└──────────┬──────────┘
           ↓
┌─────────────────────┐
│   Video Processing  │
└──────────┬──────────┘
           ↓
┌─────────────────────┐
│   Face Detection    │
└──────────┬──────────┘
           ↓
      Face Found?
       /       \
     NO         YES
     ↓           ↓
   Ignore   Face Recognition
                 ↓
          Match Database?
            /       \
          NO         YES
          ↓           ↓
       Unknown     Student
                    Identified
                       ↓
                 Face Tracking
                       ↓
                pyFirmata
                       ↓
                  NodeMCU
                       ↓
                    Servo
                       ↓
                 Camera moves
                       ↓
              Student Activity
                       ↓
                Database
                       ↓
            Permission Checking
                 /       \
              YES         NO
               ↓           ↓
            Allowed     Notification
```

Flow utama ini berasal dari diagram “How Mripatmu Works” pada presentasi.

---

# 12. Hardware Architecture

## 12.1 Components

Hardware yang ditampilkan dalam desain MripatMU:

* Webcam
* NodeMCU ESP8266
* Servo 1
* Servo 2
* Computer/Laptop

Wiring diagram presentasi menghubungkan webcam, dua servo, NodeMCU ESP8266, dan komputer/laptop.

## 12.2 Architecture

```text
              ┌──────────────┐
              │    Webcam    │
              └──────┬───────┘
                     │
                     ▼
             ┌───────────────┐
             │ Computer/Laptop│
             │               │
             │ Face Detection│
             │ Recognition   │
             │ Tracking      │
             └───────┬───────┘
                     │
                pyFirmata
                     │
                     ▼
             ┌──────────────┐
             │ NodeMCU 8266 │
             └──────┬───────┘
                    │
             ┌──────┴──────┐
             ▼             ▼
         Servo 1        Servo 2
             │             │
             └──────┬──────┘
                    ▼
                 Webcam
```

---

# 13. Software Architecture

## Recommended Architecture for Vibecoding

> Bagian ini adalah rekomendasi implementasi. Presentasi tidak menentukan framework software secara spesifik.

Gunakan arsitektur:

```text
Frontend Dashboard
        │
        ▼
Backend API
        │
 ┌──────┼───────────┐
 ▼      ▼           ▼
AI    Database   Notification
Engine
        │
        ▼
   IoT Controller
        │
        ▼
     NodeMCU
```

---

# 14. Recommended Tech Stack

## AI / Computer Vision

**Python**

Recommended libraries:

* OpenCV
* Face recognition library/model
* NumPy
* pyFirmata

Reason:

Computer vision dan komunikasi hardware lebih natural dikerjakan menggunakan Python.

---

## Backend

Recommended:

**FastAPI**

Responsibilities:

* Authentication
* Student management
* Attendance
* Permission management
* Exit events
* Notification
* AI engine communication
* IoT communication

---

## Frontend

Recommended:

**Next.js + TypeScript**

Responsibilities:

* Dashboard
* Camera monitoring UI
* Student table
* Attendance history
* Notifications
* Permission controls
* Analytics

---

## Database

Recommended:

**PostgreSQL**

Development dapat menggunakan:

**Supabase PostgreSQL**

---

# 15. Database Design

## 15.1 Students

```text
students
--------------------------------
id
student_number
name
major
class_name
starting_year
face_embedding
total_out
last_out_time
created_at
updated_at
```

Presentasi memberikan contoh struktur data siswa yang mencakup ID, nama, jurusan, tahun masuk, jumlah keluar, kelas, dan waktu keluar terakhir.

---

# 15.2 Attendance

```text
attendance
--------------------------------
id
student_id
date
check_in_time
check_out_time
status
created_at
```

Possible status:

```text
PRESENT
ABSENT
LATE
UNKNOWN
```

---

# 15.3 Exit Events

```text
exit_events
--------------------------------
id
student_id
detected_at
exit_time
return_time
permission_status
authorized_by
notification_sent
created_at
```

Possible permission:

```text
PENDING
ALLOWED
DENIED
UNAUTHORIZED
```

---

# 15.4 Notifications

```text
notifications
--------------------------------
id
student_id
type
title
message
is_read
created_at
```

Types:

```text
UNAUTHORIZED_EXIT
STUDENT_DETECTED
SYSTEM_WARNING
SYSTEM_ERROR
```

---

# 15.5 Users

```text
users
--------------------------------
id
name
email
password_hash
role
created_at
updated_at
```

Roles:

```text
ADMIN
TEACHER
```

---

# 16. Face Data

Face recognition membutuhkan data wajah siswa.

## Registration Flow

```text
Teacher/Admin
      ↓
Add Student
      ↓
Input Student Information
      ↓
Capture Face
      ↓
Validate Face
      ↓
Generate Face Embedding
      ↓
Store Embedding
      ↓
Student Registered
```

## Required Information

```text
Student ID
Name
Class
Major
Starting Year
Face Data
```

---

# 17. Attendance Logic

Sistem tidak boleh langsung membuat attendance record baru setiap kali wajah terdeteksi.

Contoh:

```text
Camera detects Aditya
        ↓
Recognition = Aditya
        ↓
Check today's attendance
        ↓
Already present?
     /       \
   YES        NO
    ↓          ↓
 Ignore    Create attendance
```

Hal ini mencegah satu siswa memiliki ratusan record hanya karena kamera mendeteksi wajahnya berkali-kali.

---

# 18. Exit Detection Logic

```text
Student currently INSIDE
          ↓
Face no longer detected
          ↓
Wait detection timeout
          ↓
Still absent?
          ↓
Consider EXIT
          ↓
Check permission
       /       \
    ALLOWED   NOT ALLOWED
       ↓          ↓
    Record      Record
    allowed     unauthorized
                   ↓
              Notification
```

## Important

Sistem **tidak boleh langsung menganggap wajah yang hilang selama satu frame sebagai siswa keluar**.

Harus ada:

* Detection timeout.
* Tracking state.
* Debouncing.
* Re-identification.

Tujuannya mengurangi false positive.

---

# 19. Permission Logic

## Teacher approves

```text
Teacher clicks:
"Allow Exit"

→ permission_status = ALLOWED
→ student may leave
→ no unauthorized notification
```

## Teacher denies

```text
Teacher clicks:
"Deny"

→ permission_status = DENIED
→ if student exits:
→ create unauthorized event
→ notify teacher
```

## No permission

Jika siswa keluar tanpa adanya permission record:

```text
permission_status = UNAUTHORIZED
```

---

# 20. Dashboard Requirements

# Dashboard Home

Dashboard utama harus memperlihatkan informasi paling penting secara cepat.

## Components

### 1. Attendance Summary

```text
Total Students     32
Present            29
Absent              2
Outside             1
```

### 2. Live Camera

Menampilkan feed kamera.

### 3. Current Activity

```text
10:32 — Aditya detected
10:33 — Arkana entered
10:35 — Ahmad exited
```

### 4. Alert Panel

```text
⚠ 1 Unauthorized Exit
```

### 5. System Status

```text
Camera       ● Online
AI Engine    ● Active
NodeMCU      ● Connected
Servo        ● Ready
Database     ● Connected
```

---

# 21. Student Management

Teacher/Admin dapat:

* Melihat daftar siswa.
* Menambahkan siswa.
* Mengedit siswa.
* Menghapus siswa.
* Melakukan registrasi wajah.
* Melihat riwayat kehadiran.
* Melihat riwayat keluar kelas.

## Student Table

```text
| ID | Name | Class | Status | Last Exit | Actions |
|----|------|-------|--------|-----------|---------|
| ...| ...  | ...   | Present| ...       | View    |
```

---

# 22. Attendance Page

Filter:

```text
Date
Class
Student
Status
```

Data:

```text
Student
Class
Date
Check In
Check Out
Status
```

---

# 23. Exit Monitoring Page

Menampilkan:

```text
Student
Exit Time
Return Time
Permission
Status
Teacher
```

Contoh:

```text
Aditya Rajadana
10:32
10:37
Denied
Unauthorized
```

---

# 24. Notification Center

Guru harus dapat melihat:

* Notification baru.
* Notification yang sudah dibaca.
* Waktu kejadian.
* Siswa terkait.
* Jenis kejadian.

Notification dapat memiliki severity:

```text
INFO
WARNING
CRITICAL
```

Unauthorized exit minimal:

```text
WARNING
```

---

# 25. Analytics

Tujuan analytics adalah membantu sekolah mendapatkan informasi dari data kehadiran.

## Metrics

### Attendance Rate

```text
Present Students / Total Students × 100%
```

### Absence Rate

```text
Absent Students / Total Students × 100%
```

### Unauthorized Exit Count

Jumlah siswa keluar tanpa izin.

### Student Exit Frequency

Berapa kali siswa keluar kelas dalam periode tertentu.

### Daily Trend

Grafik:

```text
Mon ███████
Tue █████
Wed ████████
Thu ████
Fri ██████
```

---

# 26. Student Detail Page

Ketika guru membuka siswa:

```text
Student Profile

Name:
Aditya Rajadana

Student ID:
19167

Class:
12-6

Major:
TI

Starting Year:
2020
```

Statistics:

```text
Attendance Rate
Total Absence
Total Exit
Unauthorized Exit
Last Exit
```

History:

```text
Date | Check In | Exit | Return | Status
```

---

# 27. API Design

> API berikut merupakan rekomendasi untuk implementasi.

## Authentication

```http
POST /api/auth/login
POST /api/auth/logout
GET  /api/auth/me
```

## Students

```http
GET    /api/students
GET    /api/students/:id
POST   /api/students
PATCH  /api/students/:id
DELETE /api/students/:id
```

## Face Registration

```http
POST /api/students/:id/face/register
POST /api/face/recognize
```

## Attendance

```http
GET /api/attendance
GET /api/attendance/today
GET /api/attendance/:studentId
```

## Exit Events

```http
GET  /api/exits
POST /api/exits/:id/allow
POST /api/exits/:id/deny
```

## Notifications

```http
GET  /api/notifications
POST /api/notifications/:id/read
```

## System

```http
GET /api/system/status
GET /api/system/camera
GET /api/system/iot
```

---

# 28. AI Engine

AI Engine bertanggung jawab terhadap:

```text
Camera Input
     ↓
Frame Processing
     ↓
Face Detection
     ↓
Face Recognition
     ↓
Face Tracking
     ↓
Student Identification
     ↓
Event Detection
```

AI engine tidak seharusnya menangani UI.

AI engine hanya menghasilkan structured events.

Contoh:

```json
{
  "event": "FACE_RECOGNIZED",
  "student_id": "19167",
  "confidence": 0.94,
  "timestamp": "2026-10-06T10:30:00"
}
```

---

# 29. Event System

Recommended internal event types:

```text
FACE_DETECTED
FACE_RECOGNIZED
FACE_LOST
STUDENT_ENTERED
STUDENT_EXITED
UNAUTHORIZED_EXIT
PERMISSION_GRANTED
PERMISSION_DENIED
CAMERA_CONNECTED
CAMERA_DISCONNECTED
NODEMCU_CONNECTED
NODEMCU_DISCONNECTED
```

Contoh:

```text
FACE_RECOGNIZED
        ↓
Attendance Service
        ↓
STUDENT_ENTERED
        ↓
Database
        ↓
Dashboard WebSocket
```

---

# 30. Real-Time Communication

Untuk dashboard real-time, gunakan:

**WebSocket**

Flow:

```text
AI Engine
    ↓
Event
    ↓
Backend
    ↓
WebSocket
    ↓
Teacher Dashboard
```

Contoh:

```json
{
  "type": "UNAUTHORIZED_EXIT",
  "student": {
    "id": "19167",
    "name": "Aditya Rajadana"
  },
  "timestamp": "2026-10-06T10:30:00"
}
```

Dashboard langsung memperbarui UI tanpa refresh halaman.

---

# 31. IoT Communication

Presentasi menggunakan:

```text
Computer
   ↓
pyFirmata
   ↓
NodeMCU ESP8266
   ↓
Servo
```

Untuk MVP, pertahankan arsitektur tersebut agar tidak memperluas scope.

---

# 32. IoT State

Backend/AI engine harus mengetahui status perangkat:

```text
CONNECTED
DISCONNECTED
ERROR
MOVING
IDLE
```

Example:

```json
{
  "device": "NODEMCU",
  "status": "CONNECTED"
}
```

---

# 33. Error Handling

## Camera Error

```text
Camera disconnected
        ↓
System detects error
        ↓
Dashboard:
"Camera disconnected"
```

## NodeMCU Error

```text
NodeMCU unavailable
        ↓
Tracking still runs
        ↓
Servo movement disabled
        ↓
System warning
```

## Unknown Face

```text
Face detected
     ↓
No database match
     ↓
UNKNOWN
```

Jangan membuat attendance siswa.

---

# 34. Loading / Empty / Error States

Semua halaman dashboard harus mempunyai tiga kondisi minimal:

## Loading

```text
Loading attendance...
```

## Empty

```text
Belum ada data kehadiran hari ini.
```

## Error

```text
Gagal mengambil data.
Coba lagi.
```

---

# 35. Security Requirements

Karena sistem menangani data wajah siswa, security harus menjadi bagian penting dari implementasi.

## Authentication

Dashboard hanya dapat diakses pengguna yang terautentikasi.

## Authorization

```text
ADMIN
TEACHER
```

Teacher tidak boleh mengubah konfigurasi sistem global jika fitur tersebut belum diberikan.

## Face Data

Face embedding tidak boleh ditampilkan sebagai data biasa di dashboard.

## API

Semua endpoint sensitif harus membutuhkan authentication.

---

# 36. Privacy Considerations

Karena MripatMU menggunakan kamera dan face recognition:

* Kamera hanya digunakan untuk tujuan monitoring yang ditentukan.
* Data siswa harus dibatasi aksesnya.
* Face data harus disimpan secara aman.
* Sistem harus memiliki mekanisme penghapusan data.
* Aktivitas monitoring sebaiknya memiliki audit trail.

> Detail kebijakan privasi/legal belum ditentukan dalam presentasi dan harus ditetapkan sebelum deployment di sekolah.

---

# 37. Non-Functional Requirements

## Performance

Target rekomendasi:

```text
Dashboard response:
< 2 seconds

Notification latency:
< 2 seconds

Recognition:
Near real-time
```

## Reliability

Jika database sementara tidak tersedia, AI engine tidak boleh langsung crash.

## Scalability

Architecture harus memungkinkan:

```text
1 classroom
     ↓
multiple classrooms
     ↓
multiple schools
```

Namun **multi-classroom dan multi-school bukan bagian MVP**.

---

# 38. MVP Scope

## MUST HAVE

### Hardware

* [x] Webcam
* [x] NodeMCU ESP8266
* [x] Servo
* [x] Computer/Laptop

### AI

* [x] Face detection
* [x] Face recognition
* [x] Basic face tracking

### Application

* [x] Student database
* [x] Attendance
* [x] Exit detection
* [x] Permission status
* [x] Unauthorized exit detection
* [x] Teacher notification
* [x] Dashboard

---

# 39. SHOULD HAVE

* Attendance analytics.
* Student detail page.
* Exit history.
* Real-time WebSocket updates.
* Device status.
* Camera status.
* Filtering.
* Search student.

---

# 40. NICE TO HAVE

* Multiple cameras.
* Multiple classrooms.
* Mobile application.
* Parent notification.
* Advanced behavioral analytics.
* Cloud deployment.
* AI-based anomaly detection.

Fitur-fitur ini **jangan dibuat pada tahap awal** kecuali MVP sudah stabil.

---

# 41. OUT OF SCOPE

Untuk menjaga scope vibecoding:

* Facial emotion recognition.
* Student academic prediction.
* Automatic punishment.
* Parent-facing application.
* Full school ERP.
* Payment system.
* Complex recommendation engine.
* Multi-school SaaS.

---

# 42. Acceptance Criteria — MVP

MripatMU dianggap berhasil apabila:

### AC-01 — Face Registration

Guru dapat mendaftarkan siswa dan data wajahnya.

### AC-02 — Face Recognition

Sistem dapat mengenali siswa yang telah terdaftar.

### AC-03 — Attendance

Siswa yang dikenali dapat dicatat sebagai hadir.

### AC-04 — Tracking

Kamera dapat mengikuti wajah yang dikenali.

### AC-05 — Exit Detection

Sistem dapat mencatat siswa yang meninggalkan area monitoring.

### AC-06 — Permission

Guru dapat memberikan atau menolak izin keluar.

### AC-07 — Unauthorized Exit

Jika siswa keluar tanpa izin, sistem membuat event unauthorized exit.

### AC-08 — Notification

Guru menerima notification ketika unauthorized exit terjadi.

### AC-09 — History

Aktivitas siswa dapat dilihat kembali.

### AC-10 — Device Monitoring

Guru dapat mengetahui apakah kamera dan IoT device aktif.

---

# 43. Recommended Project Structure

```text
mripatmu/
│
├── frontend/
│   ├── app/
│   │   ├── login/
│   │   ├── dashboard/
│   │   ├── students/
│   │   ├── attendance/
│   │   ├── exits/
│   │   └── notifications/
│   │
│   ├── components/
│   ├── hooks/
│   ├── lib/
│   ├── types/
│   └── services/
│
├── backend/
│   ├── app/
│   │   ├── api/
│   │   ├── models/
│   │   ├── schemas/
│   │   ├── services/
│   │   ├── repositories/
│   │   └── core/
│   │
│   └── main.py
│
├── ai/
│   ├── detection/
│   ├── recognition/
│   ├── tracking/
│   ├── camera/
│   └── events/
│
├── iot/
│   ├── nodemcu/
│   ├── servo/
│   └── controller/
│
├── database/
│   ├── migrations/
│   └── seed/
│
└── docs/
    └── PRD.md
```

---

# 44. Implementation Phases

## Phase 1 — Project Setup

```text
Frontend
Backend
Database
AI environment
IoT environment
```

Goal:

Semua service dapat berjalan.

---

## Phase 2 — Student Management

Implement:

```text
Student CRUD
Student database
Student detail
```

---

## Phase 3 — Face Registration

Implement:

```text
Camera
Face capture
Face validation
Face embedding
Storage
```

---

## Phase 4 — Face Recognition

Implement:

```text
Camera
↓
Detection
↓
Recognition
↓
Student ID
```

---

## Phase 5 — Attendance

Implement:

```text
Recognition
↓
Attendance Service
↓
Database
↓
Dashboard
```

---

## Phase 6 — Face Tracking

Implement:

```text
Face position
↓
Tracking
↓
Servo calculation
↓
NodeMCU
↓
Servo
```

---

## Phase 7 — Exit Detection

Implement:

```text
Student state
↓
Face lost
↓
Timeout
↓
Exit event
```

---

## Phase 8 — Permission System

Implement:

```text
Teacher permission
↓
Allowed / Denied
```

---

## Phase 9 — Notification

Implement:

```text
Unauthorized Exit
↓
Notification Service
↓
WebSocket
↓
Dashboard
```

---

## Phase 10 — Analytics

Implement:

```text
Attendance statistics
Exit statistics
Student behavior history
```

---

## Phase 11 — Hardware Integration

Integrate:

```text
Webcam
+
AI
+
NodeMCU
+
Servo
```

---

## Phase 1
