import React, { useContext, useState, createContext } from "react";

interface IResultContext {
  getResults?: Promise<void> | CallableFunction;
  results?: unknown;
  searchTerm?: string;
  setSearchTerm?: React.Dispatch<React.SetStateAction<string>>;
  isLoading?: boolean;
}

const ResultContext = createContext<unknown>({});
const baseUrl = "https://google-search3.p.rapidapi.com/api/v1";

const ResultContextProvider = ({ children }: { children: React.ReactNode | React.ReactNode[] }): JSX.Element => {
  const [results, setResults] = useState<unknown>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const getResults = async (type: string) => {
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
    const data = res.json();
    console.log(data);
    setResults(data);
    setIsLoading(false);
  };

  return <ResultContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, isLoading }}>{children}</ResultContext.Provider>;
};

export default ResultContextProvider;

export const useResultContext = () => useContext(ResultContext) as IResultContext;
