import { useState } from "react";
import { FilterButton } from "./FilterButtons/FilterButton";

export const Filter = ({ setStatus, setGender, setSpecies }) => {
  // Variables
  const tabs = document.querySelectorAll(".tab");

  // Functions
  const toggleTab = (event) => {
    event.currentTarget.classList.toggle("active");
  };

  // Event Listeners
  tabs.forEach((tab) => {
    tab.addEventListener("click", toggleTab);
  });

  // Status data
  const statusData = ["Alive", "Dead", "Unknown"];

  // Gender data
  const genderData = ["Female", "Male", "Genderless", "Unknown"];

  // Species data
  const speciesData = [
    "Human",
    "Alien",
    "Humanoid",
    "Animal",
    "Robot",
    "Cronenberg",
    "Mytholog",
    "Disease",
    "Poopybutthole",
  ];

  // Clear filter
  const [clear, setClear] = useState();
  const handleClick = () => {
    setClear(true);
  };

  return (
    <>
      <div className="accordion mb-5">
        <h3 className="text-secondary text-center mb-5">
          <i className="fa-solid fa-arrow-up-wide-short"></i> Filter
        </h3>
        <button
          onClick={handleClick}
          type="button"
          className="clear mb-3 d-block mx-auto"
        >
          Clear All
        </button>
        <p className={clear ? "d-block text-danger" : "d-none"}>
          <i className="fa-solid fa-circle-exclamation"></i> Sorry for the
          inconvience, This feature is currently not working.
        </p>
        <a
          className={clear ? "d-block text-primary" : "d-none"}
          href="https://google.com"
        >
          More info
        </a>
        <div className="tab">
          <div className="tab-name">
            Filter by Status
            <svg
              className="chevron-icon"
              width="26"
              height="13"
              viewBox="0 0 26 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1.06414 1.06414C1.35704 0.771251 1.83191 0.771251 2.1248 1.06414L11.2676 10.2069C11.6724 10.6117 11.9445 10.883 12.1708 11.0751C12.3904 11.2615 12.5171 11.329 12.6137 11.3604C12.8648 11.442 13.1352 11.442 13.3863 11.3604C13.4829 11.329 13.6096 11.2615 13.8292 11.0751C14.0556 10.883 14.3276 10.6117 14.7324 10.2069L23.8752 1.06414C24.1681 0.771251 24.643 0.771251 24.9359 1.06414C25.2287 1.35704 25.2287 1.83191 24.9359 2.1248L15.7931 11.2676L15.7715 11.2892C15.3938 11.6668 15.0786 11.9821 14.8 12.2186C14.5094 12.4653 14.2098 12.67 13.8498 12.787C13.2975 12.9664 12.7025 12.9664 12.1502 12.787C11.7902 12.67 11.4906 12.4653 11.2 12.2186C10.9214 11.9821 10.6061 11.6668 10.2285 11.2891L10.2069 11.2676L1.06414 2.1248C0.771251 1.83191 0.771251 1.35704 1.06414 1.06414Z"
              />
            </svg>
          </div>
          <div className="tab-content">
            {statusData.map((item, index) => (
              <FilterButton
                setValue={setStatus}
                key={index}
                name="status"
                index={index}
                statusName={item}
              />
            ))}
          </div>
        </div>
        <div className="tab">
          <div className="tab-name">
            Filter by Species
            <svg
              className="chevron-icon"
              width="26"
              height="13"
              viewBox="0 0 26 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1.06414 1.06414C1.35704 0.771251 1.83191 0.771251 2.1248 1.06414L11.2676 10.2069C11.6724 10.6117 11.9445 10.883 12.1708 11.0751C12.3904 11.2615 12.5171 11.329 12.6137 11.3604C12.8648 11.442 13.1352 11.442 13.3863 11.3604C13.4829 11.329 13.6096 11.2615 13.8292 11.0751C14.0556 10.883 14.3276 10.6117 14.7324 10.2069L23.8752 1.06414C24.1681 0.771251 24.643 0.771251 24.9359 1.06414C25.2287 1.35704 25.2287 1.83191 24.9359 2.1248L15.7931 11.2676L15.7715 11.2892C15.3938 11.6668 15.0786 11.9821 14.8 12.2186C14.5094 12.4653 14.2098 12.67 13.8498 12.787C13.2975 12.9664 12.7025 12.9664 12.1502 12.787C11.7902 12.67 11.4906 12.4653 11.2 12.2186C10.9214 11.9821 10.6061 11.6668 10.2285 11.2891L10.2069 11.2676L1.06414 2.1248C0.771251 1.83191 0.771251 1.35704 1.06414 1.06414Z"
              />
            </svg>
          </div>
          <div className="tab-content overflow-auto">
            {speciesData.map((item, index) => (
              <FilterButton
                setValue={setSpecies}
                key={index}
                name="species"
                index={index}
                statusName={item}
              />
            ))}
          </div>
        </div>
        <div className="tab">
          <div className="tab-name">
            Filter by Gender
            <svg
              className="chevron-icon"
              width="26"
              height="13"
              viewBox="0 0 26 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1.06414 1.06414C1.35704 0.771251 1.83191 0.771251 2.1248 1.06414L11.2676 10.2069C11.6724 10.6117 11.9445 10.883 12.1708 11.0751C12.3904 11.2615 12.5171 11.329 12.6137 11.3604C12.8648 11.442 13.1352 11.442 13.3863 11.3604C13.4829 11.329 13.6096 11.2615 13.8292 11.0751C14.0556 10.883 14.3276 10.6117 14.7324 10.2069L23.8752 1.06414C24.1681 0.771251 24.643 0.771251 24.9359 1.06414C25.2287 1.35704 25.2287 1.83191 24.9359 2.1248L15.7931 11.2676L15.7715 11.2892C15.3938 11.6668 15.0786 11.9821 14.8 12.2186C14.5094 12.4653 14.2098 12.67 13.8498 12.787C13.2975 12.9664 12.7025 12.9664 12.1502 12.787C11.7902 12.67 11.4906 12.4653 11.2 12.2186C10.9214 11.9821 10.6061 11.6668 10.2285 11.2891L10.2069 11.2676L1.06414 2.1248C0.771251 1.83191 0.771251 1.35704 1.06414 1.06414Z"
              />
            </svg>
          </div>
          <div className="tab-content">
            {genderData.map((item, index) => (
              <FilterButton
                setValue={setGender}
                key={index}
                name="gender"
                index={index}
                statusName={item}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
