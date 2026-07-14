"use client";

import { useState } from "react";
import ReactPlayer from "react-player";

type VideoModalProps = {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
};

export default function VideoModal({ isOpen, onClose, videoUrl }: VideoModalProps) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
        <div className="relative w-[90%] md:w-[700px] bg-black rounded-lg">
            <button onClick={onClose} className="absolute -top-10 right-0 text-white text-2xl">✕</button>
            <ReactPlayer
                src={videoUrl}
                playing
                controls
                width="90%"
                height="400px"
            />
        </div>
    </div>
  );
}