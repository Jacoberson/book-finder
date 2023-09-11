const BookCard = ({ image, title, author, publisher }) => {
  return (
    <div className="book-card">
      <img className="book-image" src="./img/cursed-child.jpg" alt="1" />
      <div className="book-info">
        <div className="book-text">
          <h2 className="book-title">{title}</h2>
          <h3>By: {author}</h3>
          <h3>Published By: {publisher}</h3>
        </div>
        <button type="button">See this Book</button>
      </div>
    </div>
  );
};

export default BookCard;
