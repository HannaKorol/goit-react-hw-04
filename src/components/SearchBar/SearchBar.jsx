// Варіант 1 - Створимо компонент форми пошуку:

import { Field, Form, Formik } from "formik";
import toast from "react-hot-toast";

const SearchBar = ({ setQuery }) => {
  const initialValues = {
    query: "",
  };

  const handleSubmit = (values) => {
    if (!values.query.trim()) {
      toast.error("Please enter text to search for images.");
    } else {
      setQuery(values.query);
    }
  };


  return (
    <div>
      <header>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          <Form>
            <Field name="query" placeholder="Enter search term..." />
            <button type="submit">Search</button>
          </Form>
        </Formik>
      </header>
    </div>
  );
};
export default SearchBar;

// Варіант 2 - Створимо компонент форми пошуку:

/* export default function SearchBar({ onSearch }) {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const topic = form.elements.topic.value; */

/* Якщо текстове поле порожнє, виводимо повідомлення і припиняємо виконання функції. */
/*     if (form.elements.topic.value.trim() === "") {
      alert("Please enter search term");
      return;
    } */

/* У протилежному випадку викликаємо пропс і передаємо йому значення поля */
/*     onSearch(topic);
    form.reset;
  };
 */
/*   return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          name="topic"
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
}
 */
