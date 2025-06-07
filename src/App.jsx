import './App.css' 
import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import BlogPost from './components/BlogPost';

function App() {
  return (
    <div>
      <Header />
      <Navigation />
      <main style={{ padding: '20px' }}>
        <BlogPost 
          title="React деген не?"
          content="React — компоненттік архитектураға негізделген JavaScript кітапханасы. Ол қолданбалар жасауды жеңілдетеді."
          author={{ name: 'Айдана', bio: 'Frontend әзірлеуші, React әуесқойы.' }}
        />
        <BlogPost 
          title="Компонент пен Props дегеніміз не?"
          content="Компонент — UI бөлігі, ал props — оған берілетін деректер. Компоненттерді қайта қолдануға болады."
          author={{ name: 'Нұржан', bio: 'JavaScript фанаты, оқытушы.' }}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;

  











