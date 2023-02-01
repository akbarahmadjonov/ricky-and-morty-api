export const FilterButton = ({ statusName, index, name, setValue }) => {
  return (
    <div className="p-1">
      <input
        onClick={() => setValue(statusName)}
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
      {/* Gender */}
      {/* <input
        type="checkbox"
        className="btn-check"
        id="btn-check-outlined"
        autocomplete="off"
      />
      <label className="btn btn-secondary text-white" for="btn-check-outlined">
        {statusName}
      </label> */}
    </div>
  );
};
