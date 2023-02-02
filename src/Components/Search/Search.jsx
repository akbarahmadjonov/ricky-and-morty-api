export const Search = ({ setSearchAttr, setActivePageAttr }) => {
  return (
    <>
      <div className="wrapper">
        <div className="wrapper-input position-relative">
          <h4 className="mt-4 text-center display-2 text-light">
            Ricky and Morty family <i class="fa-solid fa-people-roof"></i>
          </h4>
          <div className="inp">
            <input
              type="search"
              onChange={(evt) => {
                setActivePageAttr(1);
                setSearchAttr(evt.target.value);
              }}
              className="input"
              placeholder="Search in Ricky & Morty family"
            />
          </div>
        </div>
      </div>
    </>
  );
};
