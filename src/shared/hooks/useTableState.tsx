import { useEffect, useState } from "react";
import { ApiResponse } from "../types/ApiResponse";
import {  message } from "antd";

interface UseTableStateProps<T> {
    fetchData: (page:number) => Promise<ApiResponse<T[]> | undefined>;
  }

export const useTableState = <T extends Record<string,any>> ({fetchData}: UseTableStateProps<T>) => {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(true);
  

  const handleFetch = async () => {
      setLoading(true);
      try{
        const response = await fetchData(page);
        if (response) {
          if (page != 0) {
            setData(prev => [...prev, ...response.data]);
          } else {
            setData(response.data);
          }
          if (response.data.length === 0 || response.data.length < 10) {
            setHasMore(false);
          }
        }
      }catch (err){
        let errMessage = 'Opps. Something went wrong';
        setError(errMessage);
        message.error(errMessage);
        throw errMessage;
      } finally {
        setLoading(false);
      }
  };

  const handleFilter = () => {
    if(page == 0){
      handleFetch();
    }
    else{
      setPage(0);
    }
  }
  
  const handleRefresh = () => {
    if(page == 0){
      handleFetch();
    }
    else{
      setPage(0);
    }
  }
  
  const loadMore = async () => {
    setPage(page+1);
};


  useEffect(() => {
    handleFetch();
  },[page])
    
return {
  data,
  loading,
  hasMore,
  page,
  error,
  loadMore,
  handleFilter,
  handleRefresh
};
}