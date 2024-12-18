import { Dispatch } from "react";
import MyButton from "./MyButton";
import MyRow from "./MyRow";
import MyCol from "./MyCol";
import { FilterOutlined } from "@ant-design/icons";

export type filter = {
  label: string;
  value: string;
  active: boolean;
};
const Filter = ({
  filterOptions,
  setFilterOptions,
}: {
  filterOptions: filter[];
  setFilterOptions: Dispatch<React.SetStateAction<filter[]>>;
}) => {
  const toggleFilter = (value: string) => {
    setFilterOptions((filters) => {
      return filters.map((fil) => {
        const obj = fil;
        if (obj.value === value) {
          obj.active = !obj.active;
        } else {
          obj.active = obj.active;
        }

        return obj;
      });
    });
  };
  return (
    <MyRow gutter={6} style={{ marginBottom: 10 }}>
      <FilterOutlined
        style={{ fontSize: 30, color: "grey", marginRight: 10 }}
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
      />
      {filterOptions.map((fil: filter) => (
        <FilterBadges
          filter={fil}
          key={fil.value}
          toggleFilter={toggleFilter}
        />
      ))}
    </MyRow>
  );
};

export default Filter;

const FilterBadges = ({
  filter,
  toggleFilter,
}: {
  filter: filter;
  toggleFilter: (value: string) => void;
}) => {
  return (
    <MyCol>
      <MyButton
        onClick={() => toggleFilter(filter.value)}
        type={filter.active ? "primary" : "default"}
      >
        {filter.label}
      </MyButton>
    </MyCol>
  );
};
