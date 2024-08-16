import { useEffect, useState } from "react";
import ImageGallery from "./ImageGallery/ImageGallery";
import fetchArtical from "../../articles-api";
import SearchBar from "./SearchBar/SearchBar";
import Loader from "./Loader/Loader";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./ImageModal/ImageModal";
import {  toast, Toaster } from 'react-hot-toast';


interface Image {
    id: string;
    urls: {
        regular: string;
        small: string;
        thumb: string;
    };
    alt_description: string;
}

interface FetchData {
  results: Image[];
  total_pages: number;
}


export default function App() {
  
    
    const [images, setImages] = useState<Image[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(100);
  const [query, setQuery] = useState<string>("");
  const [loader, setLoader] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
   const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
    const [modalImageUrl, setModalImageUrl] = useState<string>("");
    const [modalAltDescription, setModalAltDescription] = useState<string>("");


  const handleSearch = async (newQuery: string) => {
    setImages([]);
    setPage(1);
    setQuery(newQuery);
  };

   const handleLoadMore = () => {
     setPage(page + 1)
       if (page >= totalPages) {
      return toast.error("There is no more images to show!");
    }
  }

   const openModal = (imageUrl: string, altDescription: string) => {
        setModalImageUrl(imageUrl);
        setModalAltDescription(altDescription);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

  useEffect(() => {
    if (query.trim() === "") {
      return;
    }

    async function getImages() {
      setLoader(true)
      try {
        setError(false)
        const data: FetchData = await fetchArtical(query, page);
        setTotalPages(data.total_pages);
         if (data.results.length === 0) {
          toast.error("No images found for your search query");
        }
        setImages((prevImages) => [...prevImages, ...data.results]);
      } catch (error) {
          setError(true)
      } 
      finally {
        setLoader(false)
      }
    }
    getImages();
  }, [query, page]);

  

  return (
    <div >
      <h1>Image Gallery</h1>
      <Toaster />
        <SearchBar onSubmit={handleSearch} />
        {error && <ErrorMessage/>}
      {<ImageGallery images={images} onImageClick={openModal} />}
        {loader && <Loader />}
        {images.length > 0 && <LoadMoreBtn onClick={handleLoadMore} />}
        <ImageModal
                isOpen={modalIsOpen}
                closeModal={closeModal}
                imageUrl={modalImageUrl}
                altDescription={modalAltDescription}
            />
    </div>  
  );
}