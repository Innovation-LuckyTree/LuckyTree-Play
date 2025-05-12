import { FC } from "react";
import * as gamesService from './../../services/gamesService';
import { FilteredListTemplate } from "../../shared/components/structural/FilteredListTemplate";
import { Bet } from "./models/Bet";
import { BetItem } from "./components/BetItem";
import { PaginationProps } from "../../shared/types/PaginationProps";

export const MyBetsPage: FC = () => {
  const handleFilter = async (pagination:PaginationProps) => {
    console.log(pagination.startDate,pagination.endDate);
    try{
      return await gamesService.getMyBets(pagination);
    } catch(e){
      throw e;
    }
  }

  return(
    <FilteredListTemplate<Bet>
      handleFilter={handleFilter}
      renderItem={
        (item)=>
        <BetItem bet={item}
        />}
    />
  )
}