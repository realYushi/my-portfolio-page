"use client";

import React, { useRef, useState } from "react";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxRotation?: number;
}

export const TiltCard = ({
  children,
  className = "",
  maxRotation = 20,
}: TiltCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={cardRef} className={`rounded-lg ${className}`}>
      {children}
    </div>
  );
};
