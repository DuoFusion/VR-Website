import { useCallback, useEffect, useState, useMemo } from "react";
import { Params, UseBasicTableFilterHelperOptions } from "../../types";

const useBasicTableFilterHelper = ({ initialParams, sortKey = "userFilter" }: UseBasicTableFilterHelperOptions = {}) => {
  const [pageNumber, setPageNumber] = useState(initialParams?.page ?? 1);
  const [pageSize, setPageSize] = useState(initialParams?.limit ?? 10);
  const [sortBy, setSortBy] = useState<string | null>(initialParams?.[sortKey] ?? null);

  const [params, setParams] = useState<Params>({
    page: pageNumber,
    limit: pageSize,
    ...initialParams,
  });

  // Sync sort with dynamic key
  useEffect(() => {
    setParams((prev) => {
      const updatedParams = { ...prev };
      if (sortBy) {
        updatedParams[sortKey] = sortBy;
      } else {
        delete updatedParams[sortKey];
      }
      return updatedParams;
    });
  }, [sortBy, sortKey]);

  const handlePaginationChange = useCallback((newPage: number, newPageSize: number) => {
    setPageNumber(newPage);
    setPageSize(newPageSize);
    setParams((prev) => ({
      ...prev,
      page: newPage,
      limit: newPageSize,
    }));
  }, []);

  const handleSetSortBy = useCallback((value: string) => setSortBy(value || null), []);

  return useMemo(
    () => ({
      pageNumber,
      pageSize,
      sortBy,
      params,
      setParams,
      handleSetSortBy,
      handlePaginationChange,
    }),
    [pageNumber, pageSize, sortBy, params, handlePaginationChange]
  );
};

export default useBasicTableFilterHelper;
