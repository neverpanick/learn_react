import React from 'react'

export default function CyborgCat({ width = 120, height = 120, className = '' }) {
  return (
    <svg className={className} width={width} height={height} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
      <defs>
        <linearGradient id="catneon" x1="0" x2="1">
          <stop offset="0" stopColor="#ff7a9a"/>
          <stop offset="1" stopColor="#7c9fff"/>
        </linearGradient>
      </defs>
      <g fill="none" stroke="url(#catneon)" strokeWidth="3" strokeLinejoin="round">
        <path d="M54 88 C48 60 66 44 92 44 C118 44 138 62 150 68 C170 80 168 114 154 134 C136 160 100 160 76 152 C56 144 54 120 54 88 Z" fill="#07102a" />
        <path d="M74 44 L58 28" />
        <path d="M118 44 L132 28" />
        <circle cx="88" cy="84" r="8" fill="#ff7a9a"/>
        <circle cx="120" cy="84" r="8" fill="#ff7a9a"/>
        <path d="M92 108 L108 116" strokeDasharray="4 3" />
      </g>
    </svg>
  )
}
