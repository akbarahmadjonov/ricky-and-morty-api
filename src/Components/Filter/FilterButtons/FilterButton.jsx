export const FilterButton = ({ statusName, index, name, setValue }) => {
  return (
    <div className="p-1 m-2">
      <input
        onClick={() => {
          setValue(statusName);
        }}
        type="checkbox"
        className="btn-check"
        id={`${name}-${index}`}
        autocomplete="off"
        name={name}
      />
      <label
        className="btn btn-secondary text-white"
        htmlFor={`${name}-${index}`}
      >
        {statusName}
      </label>
    </div>
  );
};
