import { ImageResult } from "../../../articles-api";
import ImageCard from "./ImageCard/ImageCard"
import css from "./ImageGallery.module.css"



interface ImageGalleryProps {
    images: ImageResult[];
    onImageClick: (url: string, alt: string) => void;
}

export default function ImageGallery({ images, onImageClick }: ImageGalleryProps) {
   
    return (
        <ul className={css.imageGallery}>{images.map((image) => (
                <li key={image.id} className={css.imageItem}>
            <ImageCard image={image} onImageClick={ onImageClick} />
                </li>
            ))}</ul>
    )
}
