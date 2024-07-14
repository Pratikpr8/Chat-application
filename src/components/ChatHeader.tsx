'use client';

import React from 'react';
import { Button } from './ui/button';
import { createClient } from '@/lib/supabase/client';
import { User } from '@supabase/supabase-js';
import { useRouter } from 'next/navigation';

export default function ChatHeader({ user }: { user: User | undefined }) {
  const router = useRouter();

  const handleLoginWithGithub = async () => {
    const supabase = createClient();
    await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: location.origin + '/auth/callback',
      },
    });
  };

  const handleLogout = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.refresh();
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

        {user ? <Button onClick={handleLogout}>Logout</Button> : <Button onClick={handleLoginWithGithub}>Login</Button>}
      </div>
    </div>
  );
}
