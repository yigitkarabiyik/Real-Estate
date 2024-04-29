import loadingStatus from '@/helpers/loadingStatus';
import React, { useCallback, useState } from 'react'

function useGetRequest(url) {
  const [loadingState, setLoadingState] = useState(loadingStatus.isLoading);

  const get = useCallback(async () => {
    setLoadingState(loadingStatus.isLoading);
    try {
      const response = await fetch(url);
      const result = response.json();
      setLoadingState(loadingStatus.loaded);
      return result;
    } catch {
      setLoadingState(loadingStatus.hasErrored);
    }
  }, [url]);
  return {get, loadingState}
};

export default useGetRequest;