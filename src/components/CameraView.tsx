import React from 'react';
import { Camera, CheckCircle2, Activity, Sliders } from 'lucide-react';

export interface DetectedFace {
  id: string;
  name: string;
  confidence: number;
  status: 'INSIDE' | 'TRACKING';
  box: {
    top: string;
    left: string;
    width: string;
    height: string;
  };
}

interface CameraViewProps {
  title?: string;
  cameraName?: string;
  fps?: number;
  latency?: number;
  servoPan?: number;
  servoTilt?: number;
  activeFaces?: DetectedFace[];
  resolution?: string;
  protocol?: string;
}

export const CameraView: React.FC<CameraViewProps> = ({
  title = 'Live Camera & Tracking Feed',
  cameraName = 'FEED CAM 01 // KELAS 12-6',
  fps = 28,
  latency = 42,
  servoPan = 92,
  servoTilt = 45,
  activeFaces = [
    {
      id: '19168',
      name: 'Ahmad',
      confidence: 98,
      status: 'INSIDE',
      box: { top: '24%', left: '26%', width: '130px', height: '170px' },
    },
    {
      id: '19167',
      name: 'Aditya',
      confidence: 94,
      status: 'TRACKING',
      box: { top: '28%', left: '58%', width: '125px', height: '165px' },
    },
  ],
  resolution = '1080p (60Hz)',
  protocol = 'StandardFirmata USB',
}) => {
  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-2xs flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2.5">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping"></div>
          <h2 className="text-base font-bold text-slate-900">{title}</h2>
        </div>
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-700">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            Webcam HD Active
          </span>
          <span className="text-xs font-mono text-slate-400 hidden sm:inline">
            {fps} FPS · {latency}ms
          </span>
        </div>
      </div>

      {/* Video Container Simulation */}
      <div className="relative aspect-video w-full rounded-xl bg-slate-950 overflow-hidden flex items-center justify-center border border-slate-800 shadow-inner">
        {/* Visual Classroom Background Mock */}
        <div className="absolute inset-0 bg-gradient-to-tr from-slate-900 via-slate-800 to-slate-900 opacity-90 flex items-center justify-center">
          <div className="text-center text-slate-600">
            <Camera className="w-16 h-16 mx-auto mb-2 opacity-30" />
            <p className="text-xs tracking-widest font-mono uppercase text-slate-500">{cameraName}</p>
          </div>
        </div>

        {/* Dynamic AI Bounding Boxes */}
        {activeFaces.map((face) => (
          <div
            key={face.id}
            className={`absolute border-2 rounded-lg pointer-events-none transition-all duration-300 ${
              face.status === 'TRACKING'
                ? 'border-amber-400 shadow-[0_0_12px_rgba(245,158,11,0.3)]'
                : 'border-emerald-400'
            }`}
            style={{
              top: face.box.top,
              left: face.box.left,
              width: face.box.width,
              height: face.box.height,
            }}
          >
            {/* Top Pill */}
            <div
              className={`absolute -top-7 left-0 text-[11px] font-semibold px-2 py-0.5 rounded shadow-sm flex items-center gap-1 whitespace-nowrap ${
                face.status === 'TRACKING'
                  ? 'bg-amber-500 text-slate-900 font-bold'
                  : 'bg-emerald-500 text-white'
              }`}
            >
              {face.status === 'TRACKING' ? (
                <Activity className="w-3 h-3 text-slate-900 animate-pulse" />
              ) : (
                <CheckCircle2 className="w-3 h-3" />
              )}
              <span>
                {face.id} · {face.name} ({face.confidence}%)
              </span>
            </div>

            {/* Corner tracking marks if TRACKING */}
            {face.status === 'TRACKING' && (
              <>
                <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-amber-300"></div>
                <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-amber-300"></div>
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-amber-300"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-amber-300"></div>
              </>
            )}

            <div
              className={`absolute bottom-1 right-1 text-[9px] font-mono px-1 rounded ${
                face.status === 'TRACKING'
                  ? 'text-amber-300 bg-slate-950/70'
                  : 'text-emerald-300 bg-slate-950/70'
              }`}
            >
              {face.status}
            </div>
          </div>
        ))}

        {/* Hardware Servo Telemetry HUD Overlay */}
        <div className="absolute bottom-3 left-3 bg-slate-900/85 backdrop-blur-sm border border-slate-700/60 rounded-lg p-2.5 text-white text-xs font-mono space-y-1">
          <div className="flex items-center gap-2 text-slate-300 text-[11px]">
            <Sliders className="w-3.5 h-3.5 text-amber-400" />
            <span>SERVO PYFIRMATA:</span>
          </div>
          <div className="flex items-center gap-3 text-[11px] text-slate-200">
            <span>Pan (X): <strong className="text-amber-400">{servoPan}°</strong></span>
            <span>Tilt (Y): <strong className="text-amber-400">{servoTilt}°</strong></span>
            <span className="text-emerald-400">STATUS: TRACKING</span>
          </div>
        </div>

        <div className="absolute top-3 right-3 bg-slate-900/80 backdrop-blur-sm px-2.5 py-1 rounded text-[11px] text-slate-300 font-mono">
          REC ● LIVE
        </div>
      </div>

      {/* Quick Camera Action / Info */}
      <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between text-xs text-slate-500 gap-2">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
          <span>
            Wajah Terdeteksi Aktif: <strong>{activeFaces.length} Siswa</strong>
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span>Resolusi: <strong>{resolution}</strong></span>
          <span>Protokol IoT: <strong>{protocol}</strong></span>
        </div>
      </div>
    </div>
  );
};
