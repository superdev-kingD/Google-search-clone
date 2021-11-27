import React, { useContext, useState, createContext } from "react";
import { IResults } from "../interfaces";

interface IResultContext {
  getResults: (type: string) => Promise<void>;
  results: IResults;
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  isLoading: boolean;
}

const ResultContext = createContext<unknown>({});
const baseUrl = "https://google-search3.p.rapidapi.com/api/v1";

const ResultContextProvider = ({ children }: { children: React.ReactNode | React.ReactNode[] }): JSX.Element => {
  const [results, setResults] = useState<IResultContext>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("Thor");

  const getResults = async (type: string): Promise<void> => {
    setIsLoading(true);
    const res = await fetch(`${baseUrl}${type}`, {
      method: "GET",
      headers: {
        "x-user-agent": "desktop",
        "x-proxy-location": "US",
        "x-rapidapi-host": "google-search3.p.rapidapi.com",
        "x-rapidapi-key": String(process.env.REACT_APP_x_rapidapi_key),
      },
    });
    const data = await res.json();
    console.log(data);
    setResults(data);
    setIsLoading(false);
  };

  return <ResultContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, isLoading }}>{children}</ResultContext.Provider>;
};

export default ResultContextProvider;

export const useResultContext = () => useContext(ResultContext) as IResultContext;
