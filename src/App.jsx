import "./App.css";
import Header from "./components/Header";
import BookCard from "./components/BookCard";

function App() {
  return (
    <>
      <Header />
      <div className="book-display">
        <BookCard
          title="Harry Potter and the Cursed Child -- Parts One and Two (Special
            Rehearsal Edition"
          author="No authors found"
          publisher="Pottermore Publishing"
        />
        <BookCard
          title="Harry Potter and the Sorcerer's Stone"
          author="J.K. Rowling"
          publisher="Pottermore Publishing"
        />
        <BookCard
          title="Harry Potter: A History of Magic"
          author="British Library"
          publisher="Arthur A. Levine Books"
        />
        <BookCard
          title="The Ivory Tower and Harry Potter"
          author="Lana A. Whited"
          publisher="University of Missouri Press"
        />
      </div>
    </>
  );
}

export default App;
