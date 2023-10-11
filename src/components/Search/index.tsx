import { ChangeEvent } from "react";

interface SearchProps {
  placeholder: string;
  handleChange: (event: ChangeEvent<HTMLInputElements>) => void;
}

function Search({ placeholder, handleChange }: SearchProps) {
  return (
    <section>
      <form>
        <label>Search</label>
        <input
          type="search"
          placeholder={placeholder}
          onChange={handleChange}
        />
      </form>
    </section>
  );
}

export default Search;
