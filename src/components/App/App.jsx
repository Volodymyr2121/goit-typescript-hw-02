import { useEffect, useState } from "react";
import ImageGallery from "../App/ImageGallery/ImageGallery";
import fetchArtical from "../../articles-api";
import SearchBar from "./SearchBar/SearchBar";
import Loader from "./Loader/Loader";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./ImageModal/ImageModal";
import {  toast, Toaster } from 'react-hot-toast';

export default function App() {
  
    
    const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(100);
  const [query, setQuery] = useState("");
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
   const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalImageUrl, setModalImageUrl] = useState("");
    const [modalAltDescription, setModalAltDescription] = useState("");


  const handleSearch = async (newQuery) => {
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

   const openModal = (imageUrl, altDescription) => {
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
        const data = await fetchArtical(query, page);
        setTotalPages(data.total_pages);
         if (data.length === 0) {
          toast.error("No images found for your search query");
        }
        setImages((prevImages) => [...prevImages, ...data]);
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