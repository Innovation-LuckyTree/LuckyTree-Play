import { FC } from "react";
import { FilteredListTemplate } from "../../shared/components/structural/FilteredListTemplate";
import { CreditTrack } from "./models/CreditTrack";
import { CreditTrackItem } from "./components/CreditTrackItem";
import { PaginationProps } from "../../shared/types/PaginationProps";
import * as creditService from './../../services/creditService';

export const CreditTrackingPage: FC = () => {
  const handleFilter = async (pagination:PaginationProps) => {
    console.log(pagination.startDate, pagination.endDate);
    try{
      return await creditService.getCreditTracking(pagination);
    } catch(e){
      throw e;
    }
  }

  return(
    <FilteredListTemplate<CreditTrack>
      handleFilter={handleFilter}
      renderItem={
        (item)=>
        <CreditTrackItem credit={item}
        />}
    />
  )
}