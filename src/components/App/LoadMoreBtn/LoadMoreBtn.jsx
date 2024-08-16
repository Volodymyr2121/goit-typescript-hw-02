import css from './LoadMoreBtn.module.css'

export default function LoadMoreBtn({ onClick }) {
    return <button type="submit" className={css.buttonLoadMore} onClick={onClick}>Load More</button>
}