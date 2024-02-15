import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

function useGet(url: string) {
  const [data, setData] = useState(null);

  useEffect(() => {
    let ignore = false;

    console.log(ignore);

    axios
      .get(url)
      .then((response) => {
        if (!ignore) {
          setData(response.data);
        }
      })
      .catch((error) => {
        console.error(error);
      });

    return () => {
      ignore = true;
    };
  }, [url]);

  return data || [];
}

function usePost(url: string, data: any) {
  const [response, setResponse] = useState({ data: null });

  const cb = useCallback(() => {
    axios
      .post(url, data)
      .then(function (response) {
        console.log(response);
        setResponse(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [url, data]);

  return [response.data, cb];
}

export { useGet, usePost };
