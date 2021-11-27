import React, { useEffect, useState } from "react";
import { useDebounce } from "use-debounce/lib";
import { useResultContext } from "../contexts/ResultContextProvider";
import Links from "./Links";

const Search: React.FC = (): JSX.Element => {
  const [text, setText] = useState<string>("Elon Musk");
  const { setSearchTerm } = useResultContext();
  const [debounceValue] = useDebounce<string>(text, 300);

  useEffect(() => {
    if (debounceValue) setSearchTerm(debounceValue);
  }, [debounceValue]);

  return (
    <div>
      Search
      <Links />
    </div>
  );
};

export default Search;
