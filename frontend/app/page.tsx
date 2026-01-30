import '../src/styles/globals.css';
import HeroSection from '@/components/HeroSection';
import FeatureCards from '@/components/FeatureCards';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <main className="container mx-auto px-4 py-8">
        <HeroSection />
        <FeatureCards />
      </main>
      <Footer />
    </div>
  );
}