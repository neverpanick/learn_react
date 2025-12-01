import React from 'react'

export default function CyborgOwl({ width = 140, height = 140, className = '' }) {
  return (
    <svg className={className} width={width} height={height} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
      <defs>
        <linearGradient id="owlneon" x1="0" x2="1">
          <stop offset="0" stopColor="#7c9fff"/>
          <stop offset="1" stopColor="#64ffda"/>
        </linearGradient>
      </defs>
      <g fill="none" stroke="url(#owlneon)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M44 72 C40 46 54 34 80 28 C106 22 130 28 146 44 C160 60 156 90 146 110 C136 130 110 146 82 146 C60 146 44 126 44 100 Z" fill="#07102a" />
        <circle cx="78" cy="86" r="10" fill="#64ffda"/>
        <circle cx="122" cy="86" r="10" fill="#64ffda"/>
        <path d="M66 104 Q82 118 98 118 Q116 118 134 104" strokeDasharray="6 3" />
        <path d="M60 44 L46 28" />
        <path d="M140 44 L154 28" />
      </g>
    </svg>
  )
}
