import React from 'react';
//import Header from '../Components/Header';
//import Footer from '../Components/Footer';
import ImageSlider from '@/Components/ImageSlider';
import Gallery from '@/Components/Gallery';
import TextSection from '@/Components/TextSection';
import Header from '@/Components/Header';
import Footer from '@/Components/Footer';
import Footer2 from '@/Components/Footer2';
//import ImageSlider from './Components/ImageSlider';
//import Gallery from './Components/Gallery';
//import TextSection from './Components/TextSection';

const Welcome = () => {
    return (
        <div>
            <Header />
            <main className="mt-16">
                <section className="slider">
                    <ImageSlider />
                </section> 
                <section className="gallery py-8">
                    <Gallery />
                </section>
                <section className="texts py-8">
                    <TextSection />
                </section>
            </main>
            <Footer />
            <Footer2 />
        </div>
    );
};

export default Welcome;