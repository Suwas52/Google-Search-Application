const SearchedItemTemplate = ({ data }) => {
  return (
    <div className="flex flex-col py-3 max-w-[700px] ">
      <div
        className="group cursor-pointer"
        onClick={() => window.open(data.link)}
      >
        <div className="text-sm truncate text-[#202124] ">
          {data.formattedUrl}
        </div>
      </div>
    </div>
  );
};

export default SearchedItemTemplate;
