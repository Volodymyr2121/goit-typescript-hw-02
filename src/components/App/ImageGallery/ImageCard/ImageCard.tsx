import { ImageResult } from '../../../../articles-api';
import css from './ImageCard.module.css'

interface ImageCardProps {
    image: ImageResult;
    onImageClick: (url: string, alt: string) => void;
}

export default function ImageCard({ image, onImageClick }: ImageCardProps) {
    return (
        <div>
            <img src={image.urls.small} alt={image.alt_description} className={css.cardFoto}
             onClick={() => onImageClick(image.urls.regular, image.alt_description || 'Image')}/>
</div>
    )
}