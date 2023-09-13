const BookCard = ({ image, title, author, publisher, link }) => {
  return (
    <li className="book-card">
      <img className="book-image" src={image} alt="1" />
      <div className="book-info">
        <div className="book-text">
          <h2 className="book-title">{title}</h2>
          <h3>By: {author}</h3>
          <h3>Published By: {publisher}</h3>
        </div>
        <a href={link} target="_blank">
          <button type="button">See this Book</button>
        </a>
      </div>
    </li>
  );
};

export default BookCard;
