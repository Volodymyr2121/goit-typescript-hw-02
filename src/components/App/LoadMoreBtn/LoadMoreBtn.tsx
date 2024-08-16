import css from './LoadMoreBtn.module.css'

interface LoadMoreBtnProps {
    onClick: () => void;
}

export default function LoadMoreBtn({ onClick }: LoadMoreBtnProps) {
    return <button type="submit" className={css.buttonLoadMore} onClick={onClick}>Load More</button>
}