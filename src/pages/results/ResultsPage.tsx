import { FC } from "react";
import * as gamesService from './../../services/gamesService';
import { Result } from "./models/Result";
import { ResultItem } from "./components/ResultItem";
import { FilteredListTemplate } from "../../shared/components/structural/FilteredListTemplate";
import { PaginationProps } from "../../shared/types/PaginationProps";

export const ResultsPage: FC = () => {
  const handleFilter = async (pagination:PaginationProps) => {
    console.log(pagination.startDate,pagination.endDate);
    try{
      return await gamesService.getResultList(pagination);
    } catch(e){
      throw e;
    }
  }

  return(
    <FilteredListTemplate<Result>
      handleFilter={handleFilter}
      renderItem={
        (item)=>
        <ResultItem result={item}
        />}
    />
  )
}