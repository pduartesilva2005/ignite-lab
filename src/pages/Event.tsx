import { useParams } from 'react-router-dom';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import { Video } from '../components/Video';
import { Footer } from '../components/Footer';
import { LoadingEvent } from '../components/Loading/LoadingEvent';

export function Event() {
  const { slug } = useParams<{ slug: string }>();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex flex-1">
        <div className="flex flex-1 flex-col">
          {slug ? <Video lessonSlug={slug} /> : <LoadingEvent />}
          
          <div className="bg-gray-900 px-8 mt-8">
            <Footer />
          </div>
        </div>
        
        <div className="hidden xl:flex flex-initial">
          <Sidebar />
        </div>
      </main>
    </div>
  );
}
