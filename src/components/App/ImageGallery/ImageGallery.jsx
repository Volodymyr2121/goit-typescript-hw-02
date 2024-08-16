import ImageCard from "./ImageCard/ImageCard"
import css from "./ImageGallery.module.css"

export default function ImageGallery({ images, onImageClick}) {
   
    return (
        <ul className={css.imageGallery}>{images.map((image) => (
                <li key={image.id} className={css.imageItem}>
            <ImageCard image={image} onImageClick={ onImageClick} />
                </li>
            ))}</ul>
    )
}
