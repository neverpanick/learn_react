import React from 'react'

export default function CyborgFox({ width = 140, height = 140, className = '' }) {
  return (
    <svg className={className} width={width} height={height} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
      <defs>
        <linearGradient id="neon" x1="0" x2="1">
          <stop offset="0" stopColor="#64ffda"/>
          <stop offset="1" stopColor="#7c9fff"/>
        </linearGradient>
      </defs>
      <g fill="none" stroke="url(#neon)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M36 72 C24 46 36 28 66 28 C82 28 90 42 104 46 C118 50 134 46 142 44 C146 44 150 66 156 74 C160 80 164 86 162 96 C160 108 150 126 134 128 C118 131 92 140 70 132 C50 124 42 98 36 72 Z" fill="#07102a" />
        <path d="M66 28 L52 12" />
        <path d="M134 28 L148 12" />
        <circle cx="86" cy="84" r="6" fill="#64ffda"/>
        <circle cx="114" cy="80" r="6" fill="#64ffda"/>
        <path d="M96 92 L104 100" />
        <path d="M98 82 L106 76" strokeDasharray="4 4" />
        <path d="M86 124 L114 124" />
      </g>
    </svg>
  )
}
