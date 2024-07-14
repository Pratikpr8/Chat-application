'use client';

import React from 'react';
import { Button } from './ui/button';
import { createClient } from '@/lib/supabase/client';

export default function ChatHeader() {
  const handleLoginWithGithub = () => {
    const supabase = createClient();
    supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: location.origin + '/auth/callback',
      },
    });
  };

  return (
    <div className="h-20">
      <div className="flex items-center justify-between border-b p-5">
        <div>
          <h1 className="text-xl font-bold">Daily Chat</h1>
          <div className="flex items-center gap-1">
            <div className="h-4 w-4 animate-pulse rounded-full bg-green-500"></div>
            <h1 className="text-sm text-gray-400">2 onlines</h1>
          </div>
        </div>
        <Button onClick={handleLoginWithGithub}>Login</Button>
      </div>
    </div>
  );
}
