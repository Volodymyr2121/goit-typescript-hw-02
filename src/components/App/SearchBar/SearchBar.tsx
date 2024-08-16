import { IoIosSearch } from "react-icons/io";
import css from "./SearchBar.module.css";
import toast from 'react-hot-toast';


interface SearchBarProps {
    onSubmit: (query: string) => void;
}

export default function SearchBar({ onSubmit }: SearchBarProps) {
     const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const form = event.currentTarget;
        const topicInput = form.elements.namedItem("topic") as HTMLInputElement;

        if (!topicInput) {
            toast.error("Error: Cannot find input field");
            return;
        }

        const topic = topicInput.value.trim();

        if (topic === "") {
            toast.error("Please enter a search term");
            return;
        }

        onSubmit(topic);
        form.reset();
    }

    return <header>
        <form onSubmit={handleSubmit}>
    <input
      type="text"
      // autocomplete="off"
      // autofocus
                placeholder="Search images and photos"
                name="topic"
    />
            <button className={css.searchButton} type="submit"><IoIosSearch size={20}/></button>
        </form>
</header>
}


