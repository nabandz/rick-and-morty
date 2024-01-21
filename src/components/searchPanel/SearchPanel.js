import { Input } from "../UI/input/Input";

export const SearchPanel = ({ search, setSearch }) => {
  return (
    <Input
      onChange={(e) => setSearch(e.target.value.trim())}
      value={search}
      placeholder={"Search by name"}
    />
  );
};
