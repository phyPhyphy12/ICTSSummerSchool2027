'use client';

import React, { useState, useRef } from 'react';
import { 
  X, 
  UploadCloud, 
  CheckCircle2, 
  Image as ImageIcon, 
  Trash2, 
  Sparkles, 
  Clock, 
  FolderPlus,
  Eye,
  FileCheck
} from 'lucide-react';
import Image from 'next/image';

export interface DropzoneConfig {
  id: string;
  title: string;
  subtitle: string;
  accentColor: 'cyan' | 'amethyst' | 'amber';
  defaultPhotos: { title: string; src: string; caption: string }[];
}

interface PhotoDropzoneModalProps {
  config: DropzoneConfig | null;
  onClose: () => void;
}

export default function PhotoDropzoneModal({ config, onClose }: PhotoDropzoneModalProps) {
  const [uploadedFiles, setUploadedFiles] = useState<{ name: string; url: string; size: string }[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [selectedPhotoPreview, setSelectedPhotoPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  if (!config) return null;

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      processFiles(e.dataTransfer.files);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      processFiles(e.target.files);
    }
  };

  const processFiles = (files: FileList) => {
    setIsUploading(true);
    setUploadProgress(15);

    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 95) {
          clearInterval(interval);
          setTimeout(() => {
            const newUploaded: { name: string; url: string; size: string }[] = [];
            Array.from(files).forEach((file) => {
              newUploaded.push({
                name: file.name,
                url: URL.createObjectURL(file),
                size: (file.size / 1024).toFixed(1) + ' KB',
              });
            });
            setUploadedFiles((current) => [...current, ...newUploaded]);
            setIsUploading(false);
            setUploadProgress(0);
          }, 350);
          return 100;
        }
        return prev + 25;
      });
    }, 120);
  };

  const accentBorder = 
    config.accentColor === 'cyan' 
      ? 'border-cyan-400/40 text-cyan-400' 
      : config.accentColor === 'amethyst' 
      ? 'border-purple-400/40 text-purple-400' 
      : 'border-amber-400/40 text-amber-400';

  const accentGlow = 
    config.accentColor === 'cyan' 
      ? 'shadow-glow-cyan' 
      : config.accentColor === 'amethyst' 
      ? 'shadow-glow-amethyst' 
      : 'shadow-glow-amber';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl glass-panel-glow rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl max-h-[92vh] flex flex-col">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-800 bg-slate-900/60">
          <div>
            <div className="flex items-center space-x-2">
              <span className={`text-xs font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${accentBorder} bg-slate-900/80`}>
                Archival Media Dropzone
              </span>
              <span className="text-xs text-slate-400 font-mono">ID: {config.id}</span>
            </div>
            <h3 className="text-lg md:text-xl font-bold text-slate-100 font-mono mt-1">
              {config.title}
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              {config.subtitle}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 overflow-y-auto space-y-6 flex-1">
          {/* Active Dropzone Area */}
          <div>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileSelect}
              multiple
              accept="image/*"
              className="hidden"
            />
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
              className={`relative cursor-pointer group rounded-xl border-2 border-dashed transition-all p-7 text-center flex flex-col items-center justify-center ${
                isDragging
                  ? 'border-cyan-400 bg-cyan-950/30 scale-[1.01]'
                  : 'border-slate-700 hover:border-slate-500 bg-slate-900/40 hover:bg-slate-900/70'
              }`}
            >
              {isUploading ? (
                <div className="w-full max-w-xs space-y-3 py-3">
                  <div className="flex items-center justify-between text-xs font-mono text-cyan-300">
                    <span className="flex items-center space-x-1.5">
                      <Sparkles className="w-4 h-4 animate-spin" />
                      <span>Transmitting bytes into ICTS archive...</span>
                    </span>
                    <span>{uploadProgress}%</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden border border-slate-700">
                    <div
                      className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-150"
                      style={{ width: `${uploadProgress}%` }}
                    />
                  </div>
                </div>
              ) : (
                <>
                  <div className="w-12 h-12 rounded-2xl bg-slate-800/80 border border-slate-700 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:border-cyan-400/50 transition-all mb-3">
                    <UploadCloud className="w-6 h-6" />
                  </div>
                  <h4 className="font-mono text-sm font-semibold text-slate-200">
                    Drag & Drop snapshot files or <span className="text-cyan-400 underline underline-offset-4">browse disk</span>
                  </h4>
                  <p className="text-xs text-slate-400 mt-1 max-w-md">
                    Accepts PNG, JPG, WEBP, HEIC. Upload lab setups, chalkboard discussions, or experimental readouts to enrich the open repository.
                  </p>
                  <div className="mt-3 flex items-center space-x-3 text-[11px] font-mono text-slate-500">
                    <span className="flex items-center space-x-1">
                      <FileCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Auto-indexed metadata</span>
                    </span>
                    <span>•</span>
                    <span>Direct ICTS Lab repository sync</span>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* User Uploaded Photos List */}
          {uploadedFiles.length > 0 && (
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-emerald-400 font-bold flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Newly Added to Session ({uploadedFiles.length})</span>
                </span>
                <button
                  onClick={() => setUploadedFiles([])}
                  className="text-xs text-slate-500 hover:text-rose-400 transition-colors flex items-center space-x-1"
                >
                  <Trash2 className="w-3 h-3" />
                  <span>Clear</span>
                </button>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {uploadedFiles.map((file, idx) => (
                  <div
                    key={idx}
                    className="relative group rounded-xl overflow-hidden border border-slate-800 bg-slate-900 aspect-video"
                  >
                    <img src={file.url} alt={file.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity p-2 flex flex-col justify-end text-xs font-mono">
                      <div className="truncate text-slate-200 font-bold">{file.name}</div>
                      <div className="text-slate-400 text-[10px]">{file.size}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Historical Repository Photos */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono text-slate-300 font-semibold uppercase tracking-wider flex items-center space-x-2">
                <ImageIcon className="w-4 h-4 text-cyan-400" />
                <span>Historical Edition Records</span>
              </span>
              <span className="text-xs font-mono text-slate-500">ICTS Official Archive</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {config.defaultPhotos.map((photo, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedPhotoPreview(photo.src)}
                  className="group relative cursor-pointer rounded-xl overflow-hidden border border-slate-800 bg-slate-900/60 hover:border-cyan-400/50 transition-all hover:-translate-y-1"
                >
                  <div className="relative aspect-video w-full bg-slate-950 overflow-hidden">
                    <img
                      src={photo.src}
                      alt={photo.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2 right-2 p-1 rounded-md bg-slate-950/70 text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Eye className="w-3.5 h-3.5" />
                    </div>
                  </div>
                  <div className="p-2.5">
                    <div className="font-mono text-xs font-bold text-slate-200 group-hover:text-cyan-300 transition-colors">
                      {photo.title}
                    </div>
                    <p className="text-[11px] text-slate-400 mt-0.5 line-clamp-2">
                      {photo.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-900/80 flex items-center justify-between font-mono text-xs">
          <span className="text-slate-400">
            Press ESC or click close to return to the interactive timeline.
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold transition-all"
          >
            Done
          </button>
        </div>
      </div>

      {/* Lightbox Preview if photo clicked */}
      {selectedPhotoPreview && (
        <div
          onClick={() => setSelectedPhotoPreview(null)}
          className="fixed inset-0 z-60 bg-black/95 flex items-center justify-center p-4 cursor-zoom-out animate-in fade-in"
        >
          <div className="max-w-4xl max-h-[85vh] relative">
            <img
              src={selectedPhotoPreview}
              alt="Preview"
              className="max-w-full max-h-[85vh] object-contain rounded-lg border border-slate-700 shadow-2xl"
            />
            <button
              onClick={() => setSelectedPhotoPreview(null)}
              className="absolute -top-10 right-0 text-slate-300 hover:text-white font-mono text-xs flex items-center space-x-1"
            >
              <X className="w-4 h-4" />
              <span>Close Lightbox</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
