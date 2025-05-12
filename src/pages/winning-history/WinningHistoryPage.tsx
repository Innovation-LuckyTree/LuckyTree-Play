import { FC } from "react";
import { FilteredListTemplate } from "../../shared/components/structural/FilteredListTemplate";
import { WinningItem } from "./components/WinningItem";
import { PaginationProps } from "../../shared/types/PaginationProps";
import * as gamesService from './../../services/gamesService';
import { Winning } from "./models/Winning";

export const WinningHistoryPage: FC = () => {
  const handleFilter = async (pagination:PaginationProps) => {
    console.log(pagination.startDate, pagination.endDate);
    try{
      return await gamesService.getWinningHistory(pagination);
    } catch(e){
      throw e;
    }
  }

  return(
    <FilteredListTemplate<Winning>
      handleFilter={handleFilter}
      renderItem={
        (item)=>
        <WinningItem winning={item}
        />}
    />
  )
}