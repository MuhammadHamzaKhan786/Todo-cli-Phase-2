'use client';

import { AuthProvider } from '@/contexts/auth-context';
import { ReactNode } from 'react';

// This wrapper simply passes through children with AuthProvider
// The AuthProvider handles its own SSR/client rendering internally
export default function AuthWrapper({ children }: { children: ReactNode }) {
  return <AuthProvider>{children}</AuthProvider>;
}