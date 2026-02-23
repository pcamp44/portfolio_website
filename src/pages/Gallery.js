import { useState } from "react";
import PhotoCard from "../components/PhotoCard";
import LightBox from "../components/LightBox";

const photos = [
    {
        id: 1,
        city: "japan",
        mood: "nature",
        src: "https://ik.imagekit.io/1h1de1d5x/photogaphy/000060880029.jpg",
        date: "12/5/25",
        caption: "Japanese Shrine",
    },
    {
        id: 2,
        city: "japan",
        mood: "nature",
        src: "https://ik.imagekit.io/1h1de1d5x/photogaphy/IMG_2200.heic",
        date: "12/5/25",
        caption: "Vending machines",
    },
    {
        id: 3,
        city: "korea",
        mood: "nature",
        src: "https://ik.imagekit.io/1h1de1d5x/photogaphy/jeju.jpeg?updatedAt=1771847064409",
        date: "12/5/25",
        caption: "Jeju Island",
    },
    {
        id: 4,
        city: "melbourne",
        mood: "architecture",
        src: "https://ik.imagekit.io/1h1de1d5x/photogaphy/flinders_st_station.jpg?updatedAt=1771847489342",
        date: "8/12/23",
        caption: "Flinders St. Station",
    },
];

const CITIES = ["all", "japan", "korea", "melbourne"];
const MOODS = ["all", "nature", "architecture"];

export default function Gallery() {
    const [activeCity, setActiveCity] = useState("all");
    const [activeMood, setActiveMood] = useState("all");
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const filteredPhotos = photos.filter(
        (photo) =>
            (activeCity === "all" || photo.city === activeCity) &&
            (activeMood === "all" || photo.mood === activeMood)
    );

    function openLightbox(index) {
        setCurrentIndex(index);
        setLightboxOpen(true);
    }

    function handleCityChange(city) {
        setActiveCity(city);
        setCurrentIndex(0);
    }

    function handleMoodChange(mood) {
        setActiveMood(mood);
        setCurrentIndex(0);
    }

    return (
        <div className="gallery-page">

            {/* HEADER */}
            <div className="gallery-header">
                <div className="header-info">
                    <p className="issue-tag">Vol 3. Digital Archive + Photography ♥</p>

                    <div className="big-title">
                        <span className="ghost">Digital Album</span>
                        <span className="real">Digital Album</span>
                    </div>

                    <h4 className="archive-sub">— a digital archive ✦</h4>

                    <p className="header-desc">
                        A snippet of life outside of work. One of my favourite hobbies is film photography!
                    </p>

                    <div className="spin-badge">FILM · PHOTO · ARCHIVE ·</div>

                    <div className="header-bottom">
                        <span>© made by pauline</span>
                        <span className="header-dots">· · · · ·</span>
                        <span>last updated 2025</span>
                    </div>
                </div>

                {/* FILTERS */}
                <div className="filter-panel">
                    <h4 className="filter-section-label">City</h4>
                    <ul className="filter-list">
                        {CITIES.map((city) => (
                            <li
                                key={city}
                                className={`filter-row ${activeCity === city ? "active" : ""}`}
                                onClick={() => handleCityChange(city)}
                            >
                                {city.toUpperCase()}
                            </li>
                        ))}
                    </ul>

                    <h4 className="filter-section-label">Mood</h4>
                    <ul className="filter-list">
                        {MOODS.map((mood) => (
                            <li
                                key={mood}
                                className={`filter-row ${activeMood === mood ? "active" : ""}`}
                                onClick={() => handleMoodChange(mood)}
                            >
                                {mood.toUpperCase()}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* PHOTO GRID */}
            <div className="album">
                {filteredPhotos.length === 0 ? (
                    <p className="no-results">No photos match this filter.</p>
                ) : (
                    <div className="photo-grid">
                        {filteredPhotos.map((photo, index) => (
                            <PhotoCard
                                key={photo.id}
                                photo={photo}
                                onClick={() => openLightbox(index)}
                            />
                        ))}
                    </div>
                )}
            </div>

            {/* LIGHTBOX */}
            {lightboxOpen && (
                <LightBox
                    photos={filteredPhotos}
                    currentIndex={currentIndex}
                    setCurrentIndex={setCurrentIndex}
                    onClose={() => setLightboxOpen(false)}
                />
            )}
        </div>
    );
}