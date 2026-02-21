export default function Home({
  children
}: { children: React.ReactNode }) {
  return (
    <main className="w-full">
      {children}
    </main>
  );
}
