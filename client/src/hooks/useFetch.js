import { useState, useEffect } from "react";

const useFetch = (url, refreshInterval = 120000) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    const intervalId = setInterval(fetchData, refreshInterval);

    return () => {
      clearInterval(intervalId);
    };
  }, [url, refreshInterval]);

  return { data, loading, error };
};

export default useFetch;
