import { IoIosSearch } from "react-icons/io";
import css from "./SearchBar.module.css";
import toast from 'react-hot-toast';


export default function SearchBar({ onSubmit }) {
    
    const handleSubmit = event => {
        event.preventDefault();
        const topic = event.target.elements.topic.value;

       if (topic.trim() === "") {
      toast.error("Please enter a search term");
      return;
    }
       onSubmit(topic)
        event.target.reset();

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


