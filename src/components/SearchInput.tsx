function SearchInput() {
  return (
    <div className="px-4 py-3 rounded-[10px] border border-gray-90/10 flex gap-2.5 items-center">
      <img src="../assets/icons/Search-icon.svg" alt="" />
      <input className="outline-0" type="text" placeholder="Search" />
    </div>
  );
}

export default SearchInput;
