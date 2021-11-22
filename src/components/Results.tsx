import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";
import { useResultContext } from "../contexts/ResultContextProvider";
import Loading from "./Loading";

const Results = () => {
  const { isLoading,results,getResults } = useResultContext();
  const location = useLocation();

  useEffect(()=>{ getResults("")},[])

  if (isLoading) return <Loading />;

  switch (location.pathname) {
    case "/search":
      return (
        <div className="flex flex-wrap justify-between space-y-6 sm:px-56">
{results?.results?.map(({link,title},i)=>(
  // 
))}
        </div>
      );
    case "/images":
      return "IMAGES";
    case "/news":
      return "NEWS";
    case "/videos":
      return "VIDEOS";
    default:
      return "ERROR!";
  }
};

export default Results;
