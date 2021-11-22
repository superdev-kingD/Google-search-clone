import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";
import { useResultContext } from "../contexts/ResultContextProvider";
import Loading from "./Loading";

// interface IResultContext {
//   getResults: Promise<void>;
//   results: unknown;
//   searchTerm: string;
//   setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
//   isLoading: boolean;
// }

const Results = () => {
  const { getResults, results, searchTerm, setSearchTerm, isLoading } = useResultContext();
  const location = useLocation();
  if (isLoading) return <Loading />;
  return (
    <div>
      <h1>Results</h1>
    </div>
  );
};

export default Results;
