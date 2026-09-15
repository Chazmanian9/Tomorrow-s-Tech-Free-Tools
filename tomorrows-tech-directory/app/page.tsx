import { Header } from '@/components/Header';
import { ToolDirectory } from '@/components/ToolDirectory';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <ToolDirectory />
      <Footer />
    </main>
  );
}
