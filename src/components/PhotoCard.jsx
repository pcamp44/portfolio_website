export default function PhotoCard({ photo, onClick }) {
    return (
        <div className="photo-card" onClick={onClick}>
            <p className="city">{photo.city.toUpperCase()}</p>
            <img
                src={photo.src}
                alt={`${photo.city} - ${photo.caption}`}
                style={{ width: "100%" }}
            />
            <div className="photo-card-body">
                <p className="date">{photo.date}</p>
                <div className="photo-card-footer">
                    <p className="photo-caption">{photo.caption}</p>
                    <div className="photo-card-mood">{photo.mood}</div>
                </div>
            </div>
        </div>
    );
}