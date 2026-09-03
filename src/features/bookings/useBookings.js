import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router";
import { PAGE_SIZE } from "../../utils/constants";
import { useEffect } from "react";

export function useBookings() {
  const queryClient = useQueryClient();
  const [searchParams, setSearchParams] = useSearchParams();

  //* Filter
  const filterValue = searchParams.get("status");
  const filter =
    !filterValue || filterValue === "all" ? null : { field: "status", value: filterValue };

  //* Sort By
  const sortByRaw = searchParams.get("sortBy") || "startDate-desc";
  const [field, direction] = sortByRaw.split("-");
  const sortBy = { field, direction };

  //* Pagination
  const page = searchParams.get("page") ? Number(searchParams.get("page")) : 1;

  const {
    isLoading,
    error,
    data: { data: bookings, totalCount, currentPage } = {},
  } = useQuery({
    queryKey: ["bookings", filter, sortBy, page],
    queryFn: () => getBookings({ filter, sortBy, page }),
  });

  //* Pre-fetching
  const pageCount = Math.ceil(totalCount / PAGE_SIZE);

  useEffect(() => {
    if (currentPage && currentPage !== page) {
      searchParams.set("page", currentPage);
      setSearchParams(searchParams);
    }
  }, [currentPage, page, searchParams, setSearchParams]);

  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["bookings", filter, sortBy, page + 1],
      queryFn: () => getBookings({ filter, sortBy, page: page + 1 }),
    });

  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ["bookings", filter, sortBy, page - 1],
      queryFn: () => getBookings({ filter, sortBy, page: page - 1 }),
    });

  return { isLoading, error, bookings, totalCount };
}
