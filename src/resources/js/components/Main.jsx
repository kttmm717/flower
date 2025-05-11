import React from 'react'
import Information from './Information';
import Gallery from './Gallery';
import Access from './Access';
import Contact from './Contact';

class Main extends React.Component {
    componentDidMount() {
        const fadeInElements = document.querySelectorAll('.fadein');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                }
            });
        });

        fadeInElements.forEach(el => observer.observe(el));
    }

    render() {
        return (
            <main className='main'>
                <Information />
                <Gallery />
                <Access />
                <Contact />
            </main>
        );
    }
}

export default Main;