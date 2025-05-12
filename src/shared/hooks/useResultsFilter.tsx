import dayjs, { Dayjs } from "dayjs";
import { useState } from "react"
import { ApiResponse } from "../types/ApiResponse";
import { PaginationProps } from "../types/PaginationProps";

interface UseResultsFilterProp<T>{
  handleFilter: (pagination:PaginationProps) => Promise<ApiResponse<T[]> | undefined>;
}

export const useResultsFilter = <T extends Record<string, any>>({handleFilter}:UseResultsFilterProp<T>)=> {
  const [displayFilter, setDisplayFilter] = useState("Today");
  const SIZE = 10;
  const [dateRange, setDateRange] = useState<[Dayjs, Dayjs] | undefined>();

  const handleSearch = async (page:number) => {
    if (dateRange) {
      let payload: PaginationProps = {
        startDate: dateRange[0].format('YYYY-MM-DD'),
        endDate: dateRange[1].format('YYYY-MM-DD'),
        page: page,
        size: SIZE
      }
      var response = await handleFilter(payload);
      setDisplayFilter(dateRangeToString(dateRange[0], dateRange[1]));
      console.log(dateRange);
      return response;
    }
    else{
      const today = dayjs();
      var payload = {
        startDate: today.format('YYYY-MM-DD'),
        endDate: today.format('YYYY-MM-DD'),
        page: page,
        size: SIZE
      }
      const response = await handleFilter(payload);
      setDisplayFilter("Today");
      return response;
    }
  };

  const dateRangeToString = (startDate:Dayjs, endDate:Dayjs): string => {
    var formattedString = "";
    var format = "MMM D";
    if(startDate.year() != endDate.year())
      format = "MMM D YYYY";

    formattedString = `${startDate.format(format)} - ${endDate.format(format)}`
    return formattedString;
  }

  return {
    dateRange,
    displayFilter,
    setDateRange,
    handleSearch
  }
}