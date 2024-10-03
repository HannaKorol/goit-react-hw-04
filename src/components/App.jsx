import { useEffect, useState } from "react";
import { SearchBar } from "./SearchBar/SearchBar.jsx";
import Loader from "./Loader/Loader.jsx";
import ErrorMessage from "./ErrorMessage/ErrorMessage.jsx";
import fetchImages from "../Services/api.js";

//1)HTTP-запити можна виконувати як за подією(при кліку на елементі чи відправці форми) або при монтажі компонента. 2-варіант - використовується ефект - оскільки компонент є в ДОМ і готовий оновлювати стан. Але Оскільки тепер користувач сам вводить рядок для пошуку статей, нам не потрібний ефект.
//2)Форма пошуку рендериться в компоненті App, а функція handleSearch буде відповідати за код, який необхідно виконати при сабміті форми.

export default function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false); // lectioon 1 (50:28)
  const [error, setError] = useState(false);

  //вся логіка запиту і обробки службового стейту (isLoading, error) виконуєится в useEffect з залежностями [query, page]
  useEffect(() => {
    const getData = async () => {
      try {
        setError(false);             // при новому запиті помилка зникає
        setLoading(true);
        const data = await fetchImages();
        setLoading(false);
        setImages(data.hits);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {loading && <Loader />}
      {error && <ErrorMessage/>}
      {images.length > 0 && <ImagesGallery images={images} />}
    </div>
  );
}

/*   const handleSearch = async (topic) => {
    try {
      setImages([]);
      setError(false);
      setLoading(true);
      const data = await fetchImagesWithTopic(topic);
      setImages(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false)
    }
   }; */

/*    //вся логіка запиту і обробки службового стейту (isLoading, error) виконуєится в useEffect з залежностями [query, page]
  useEffect(() => {
    if (!query) return;
    //логіка запиту і його подальшої обробки
  }, [query, page]); */

//-----------

/*   Loader:
  1)Додали стейт
  2) Додали лоадер в функцію 
  3) Додали до розмітки з якої зробили окремий компонент і винисли в окрему папку а до розмітки додали тільки посилання  */
