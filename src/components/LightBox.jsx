import { useEffect, useCallback } from "react";

export default function LightBox({ photos, currentIndex, setCurrentIndex, onClose }) {
    const photo = photos[currentIndex];

    const next = useCallback(() => {
        setCurrentIndex((currentIndex + 1) % photos.length);
    }, [currentIndex, photos.length, setCurrentIndex]);

    const prev = useCallback(() => {
        setCurrentIndex((currentIndex - 1 + photos.length) % photos.length);
    }, [currentIndex, photos.length, setCurrentIndex]);

    useEffect(() => {
        function handleKey(e) {
            if (e.key === "ArrowRight") next();
            if (e.key === "ArrowLeft") prev();
            if (e.key === "Escape") onClose();
        }
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [next, prev, onClose]);

    if (!photo) return null;

    return (
        <div className="lightbox">
            <div className="lightbox-backdrop" onClick={onClose} />
            <div className="lightbox-content">
                <button className="close-btn" onClick={onClose}>✕</button>
                <button className="arrow left" onClick={prev}>‹</button>
                <img src={photo.src} alt={photo.caption} />
                <button className="arrow right" onClick={next}>›</button>
                <div className="lightbox-caption">
                    <h3>{photo.caption}</h3>
                    <p>{photo.city} · {photo.date}</p>
                </div>
            </div>
        </div>
    );
}