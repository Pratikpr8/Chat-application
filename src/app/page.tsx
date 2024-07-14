import ChatHeader from '@/components/ChatHeader';

export default function Home() {
  return (
    <main className="mx-auto h-screen max-w-3xl md:py-10">
      <div className="h-full rounded-md border">
        <ChatHeader />
      </div>
    </main>
  );
}
