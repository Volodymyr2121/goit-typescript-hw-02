import css from './ImageCard.module.css'

export default function ImageCard({ image, onImageClick}) {
    return (
        <div>
            <img src={image.urls.small} alt={image.alt_description} className={css.cardFoto}
             onClick={() => onImageClick(image.urls.regular, image.alt_description || 'Image')}/>
</div>
    )
}