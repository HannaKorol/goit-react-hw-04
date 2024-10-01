import axios from "axios";
import { useEffect, useState } from "react";
import { SearchBar } from "./SearchBar/SearchBar.jsx"

//1)HTTP-запити можна виконувати як за подією(при кліку на елементі чи відправці форми) або при монтажі компонента. 2-варіант - використовується ефект - оскільки компонент є в ДОМ і готовий оновлювати стан. Але Оскільки тепер користувач сам вводить рядок для пошуку статей, нам не потрібний ефект.
//2)Форма пошуку рендериться в компоненті App, а функція handleSearch буде відповідати за код, який необхідно виконати при сабміті форми.

export default function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = async (topic) => {
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
   };


  useEffect(() => {
    async function  () => {
    
  }}, [])
}

return (
  <div>
    <SearchBar onSearch={handleSearch} />
    {loading && <Loader />}
    {error && <Error />}
    {articles.length > 0 && <ImagesGallery items={images}/>}
    
  </div>
)