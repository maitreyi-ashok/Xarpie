'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export const PAGE_SECTIONS: Record<string, { id: string; num: string; label: string }[]> = {
  '/': [
    { id: 'overview',    num: '01', label: 'Overview' },
    { id: 'build-buy',   num: '02', label: 'Build or buy' },
    { id: 'what-we-run', num: '03', label: 'What we run' },
    { id: 'explore',     num: '04', label: 'Explore' },
    { id: 'contact',     num: '05', label: 'Contact' },
  ],
  '/insights': [
    { id: 'evidence',       num: '01', label: 'What we argue, and why' },
    { id: 'foundation',     num: '02', label: 'The foundation decides' },
    { id: 'accountability', num: '03', label: 'Accountability past go-live' },
    { id: 'travels',        num: '04', label: 'A method that travels' },
  ],
  '/operating-model': [
    { id: 'method',   num: '01', label: 'Six steps' },
    { id: 'step-01',  num: '02', label: 'Start at the problem' },
    { id: 'step-02',  num: '03', label: 'Build or buy' },
    { id: 'step-03',  num: '04', label: 'Strategy & architecture' },
    { id: 'step-04',  num: '05', label: 'Engineer the solution' },
    { id: 'step-05',  num:
