//Створимо компонент форми пошуку:

export default function SearchBar({ onSearch }) {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const topic = form.elements.topic.value;

    /* Якщо текстове поле порожнє, виводимо повідомлення і припиняємо виконання функції. */
    if (form.elements.topic.value.trim() === "") {
      alert("Please enter search term");
      return;
    }

    /* У протилежному випадку викликаємо пропс і передаємо йому значення поля */
    onSearch(topic);
    form.reset;
  };

  return (
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
