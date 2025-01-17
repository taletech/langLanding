import React, {useEffect} from 'react';

import Header from './elements/Header';
import HeroHome from './elements/HeroHome';
import FeaturesHome from './elements/Features';
import TaleEarly from './elements/taleEarly';
import Footer from './elements/Footer';
import FloatingCards from "./FloatingCards";

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <HeroHome />
        <FeaturesHome />
        <FloatingCards/>

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Home;