import { FilterFilled } from "@ant-design/icons";
import { Button, Divider, Flex, List, Skeleton } from "antd";
import {  useState } from "react";
import { FilterDrawer } from "../filters/FilterDrawer";
import { useResultsFilter } from "../../hooks/useResultsFilter";
import { useTableState } from "../../hooks/useTableState";
import { ApiResponse } from "../../types/ApiResponse";
import { PaginationProps } from "../../types/PaginationProps";
import InfiniteScroll from "react-infinite-scroll-component";
import PullToRefresh from "react-simple-pull-to-refresh";

interface FilteredListTemplateProps<T> {
  renderItem: (item: T) => React.ReactNode;
  handleFilter: (pagination:PaginationProps) => Promise<ApiResponse<T[]>>;
}

export const FilteredListTemplate = <T extends Record<string,any>>({renderItem, handleFilter}:FilteredListTemplateProps<T>) => {
  const [openFilter, setOpenFilter] = useState(false);
  
  const {displayFilter, dateRange, setDateRange, handleSearch} = useResultsFilter({handleFilter});
  const {data, loading, handleFilter:onFilter, hasMore, handleRefresh:onRefresh, loadMore} = useTableState<T>({fetchData:handleSearch});

  const handleRefresh = async () => {
    onRefresh();
    return Promise.resolve(); 
  }

  return(
    <Flex vertical style={{ height: "calc(100dvh - 100px)" }}>
      <Flex justify="space-between">
        <h2 className="font-bold text-lg">{`Filters: ${displayFilter}`}</h2>
        <Button onClick={()=>setOpenFilter(true)}><FilterFilled/></Button>
      </Flex>
      
      <div
        id="scrollableDiv"
        className="flex-grow overflow-auto pt-1"
      >
        <InfiniteScroll
          dataLength={data.length}
          next={loadMore}
          hasMore={hasMore}
          loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
          endMessage={<Divider plain>End</Divider>}
          scrollableTarget="scrollableDiv"
        >
          <PullToRefresh onRefresh={handleRefresh}>
            <List
              loading={loading}
              dataSource={data}
              renderItem={renderItem}
              />
          </PullToRefresh>
        </InfiniteScroll>
      </div>
      
      <FilterDrawer
          openFilter={openFilter}
          onClose={()=>setOpenFilter(false)}
          dateRange={dateRange}
          handleSearch={onFilter}
          setDateRange={setDateRange}
        />
    </Flex>
  )
}