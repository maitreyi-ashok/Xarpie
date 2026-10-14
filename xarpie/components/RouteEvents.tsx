'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { analytics } from '@/lib/analytics';

/** Fires the per-section view events used by the analytics dashboard. */
const VIEW_EVENTS: Record<string, () => void> = {
  '/about': analytics.aboutView,
  '/team': analytics.leadershipView,
  '/operating-model': analytics.operatingModelView,
  '/capabilities': analytics.capabilitiesView,
  '/industries': analytics.industriesView,
};

export default function RouteEvents() {
  const pathname = usePathname();
  useEffect(() => {
    VIEW_EVENTS[pathname]?.();
  }, [pathname]);
  return null;
}
