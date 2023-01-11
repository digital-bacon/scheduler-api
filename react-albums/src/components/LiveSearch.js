import React, { useEffect, Fragment, useState } from "react";
import axios from "axios"

import SearchBar from "components/SearchBar";
import Results from "components/Results";

export default function LiveSearch(props) {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const url = `https://search-itunes.vercel.app/?term=${term}&country=CA&media=music&entity=album&attribute=artistTerm`;
    axios.get(url)
      .then((response) => setResults(response.data.results))
      .catch((error) => console.log('Axios responded with an error: ', error.message));
  }, [term]);

  return (
    <Fragment>
      <header className="logo">
        <img src="images/brand.png" alt="Brand" />
      </header>
      <main>
        <SearchBar onSearch={term => setTerm(term)} />
        <Results results={results} />
      </main>
    </Fragment>
  );
}
