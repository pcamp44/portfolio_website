import { useEffect, useRef, useState } from "react";
import { Image } from '@imagekit/react';

export default function AboutSection() {
    const [guitarRef, guitarInView] = useInView();
    const [photoRef, photoInView] = useInView();
    const [cafeRef, cafeInView] = useInView();
    const [booksRef, booksInView] = useInView();

    return (
        <div className="about-section">
            <div className="section-header">
                <h1>About Me</h1>
            </div>
            <p className="section-summary">Outside of development, I enjoy exploring creative expression through photography, design, and literature - all of which shape the way I approach user experiences and visual storytelling.</p>
            <section className="collage">
                {/* Hobby - guitar */}
                <div ref={guitarRef} className={`item guitar animation ${guitarInView ? "animate-in" : ""}`} style={{ gridArea: 'guitar' }}>
                    <Image urlEndpoint='https://ik.imagekit.io/1h1de1d5x' src='/static/guitar.png' alt="Electric guitar" height="310px" />
                    <p className="caption">Guitar ♫⋆｡♪ ₊˚♬ </p>
                </div>
                {/* Hobby - photography */}
                <div ref={photoRef} className={`item photography animation ${photoInView ? "animate-in" : ""}`} style={{ gridArea: 'photography' }}>
                    <Image urlEndpoint='https://ik.imagekit.io/1h1de1d5x' src='/static/camera.png' alt="books" width="200px" />
                    <p className="caption">Photography ✧˖°📸⋆｡</p>
                </div>
                {/* Hobby - cafe-hopping */}
                <div ref={cafeRef} className={`item cafe-hopping animation ${cafeInView ? "animate-in" : ""}`} style={{ gridArea: 'cafe-hopping' }}>
                    <div className="overlapping-img">
                        <Image urlEndpoint='https://ik.imagekit.io/1h1de1d5x' src='/static/cafe_img_one.png' alt="cafe food" width="160px" />
                        <Image className="overlap-two" urlEndpoint='https://ik.imagekit.io/1h1de1d5x' src='/static/cafe_img_two.png' alt="cafe food" width="150px" />
                    </div>
                    <p className='caption'>Café-hopping ⟡𓌉◯𓇋₊˚⊹♡</p>
                </div>
                {/* Hobby - reading */}
                <div ref={booksRef} className={`item book animation  ${booksInView ? "animate-in" : ""}`} style={{ gridArea: 'books' }}>
                    <div className="overlapping-img">
                        <Image urlEndpoint='https://ik.imagekit.io/1h1de1d5x' src='/static/books.png' alt="Stack of books" width="180px" />
                        <Image className="overlap-two" urlEndpoint='https://ik.imagekit.io/1h1de1d5x' src='/static/book.png' alt="Open novel" width="130px" height="150px" />
                    </div>
                    <p className='caption'>Reading ✧˖°.⊹📖⊹.°˖✧ </p>
                </div>
            </section>
        </div>
    );
}

function useInView(threshold = 0.2) {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect;
    }, [threshold]);

    return [ref, inView];
}