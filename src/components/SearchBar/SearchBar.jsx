export default function SearchBar({ onSearch }) {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const input = evt.target;
    const topic = input.elements.topic.value;

    /* Якщо текстове поле порожнє, виводимо повідомлення і припиняємо виконання функції. */
    if (input.elements.topic.value.trim() === "") {
      alert("Please enter search term");
      return;
    }

    /* У протилежному випадку викликаємо пропс і передаємо йому значення поля */
    onSearch(topic);
    input.reset;
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
}
