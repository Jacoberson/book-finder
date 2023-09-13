import BookCard from "./BookCard";

function BookDisplay({ searchData }) {
  return (
    <ul className="book-display">
      {searchData
        ? searchData
            .map(data => data.volumeInfo)
            .map(book => (
              <BookCard
                key={book.industryIdentifiers[0].identifier}
                image={book.imageLinks.smallThumbnail || "None"}
                title={book.title}
                author={book.authors ? book.authors.join(", ") : "Unknown"}
                publisher={book.publisher || "Unknown"}
                link={book.infoLink}
              />
            ))
        : ""}
    </ul>
  );
}

export default BookDisplay;
