import ChatHeader from '@/components/ChatHeader';
import InitUser from '@/lib/store/initUser';
import { createClientServer } from '@/lib/supabase/server';

export default async function Home() {
  const supabase = createClientServer();
  const { data } = await supabase.auth.getSession();
  console.log(data.session?.user);

  return (
    <>
      <main className="mx-auto h-screen max-w-3xl md:py-10">
        <div className="h-full rounded-md border">
          <ChatHeader user={data.session?.user} />
        </div>
      </main>

      <InitUser user={data.session?.user} />
    </>
  );
}
