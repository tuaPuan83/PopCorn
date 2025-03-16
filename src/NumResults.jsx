import Navbar from "./Navbar";

function NumberResults({ movies }) {
  const moviesLength = movies.length;
  return (
    <p className="num-results">
      Found <strong>{moviesLength}</strong> results
    </p>
  );
}

export default NumberResults;
