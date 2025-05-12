import { FC, } from "react";
import { FilteredListTemplate } from "../../shared/components/structural/FilteredListTemplate";
import { CreditTransaction } from "./models/CreditTransaction";
import { CreditItem } from "./components/CreditItem";
import * as creditService from './../../services/creditService';
import { PaginationProps } from "../../shared/types/PaginationProps";

export const CreditHistoryPage: FC = () => {
  const handleFilter = async (pagination:PaginationProps) => {
    console.log(pagination.startDate, pagination.endDate);
    try{
      return await creditService.getCreditHistory(pagination);
    } catch(e){
      throw e;
    }
  }

  return(
    <FilteredListTemplate<CreditTransaction>
      handleFilter={handleFilter}
      renderItem={
        (item)=>
        <CreditItem credit={item}
        />}
    />
  )
}