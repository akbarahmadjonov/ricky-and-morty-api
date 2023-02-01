import { useEffect, useState } from "react";
import { Search } from "../../Search/Search";
import { Filter } from "../../Filter/Filter";
import { Card } from "../../Card/Card";

export const Home = () => {
  const [activePage, setActivePage] = useState(1);
  const [status, setStatus] = useState("");
  const [gender, setGender] = useState("");
  const [data, setData] = useState([]);
  const API = `https://rickandmortyapi.com/api/character/?page=${activePage}&status=${status}&gender=${gender}`;
  const { info, results } = data;

  useEffect(() => {
    (async () => {
      const data = await fetch(API).then((res) => res.json());
      console.log(data);
      setData(data);
    })();
  }, [API]);

  return (
    <>
      <h4 className="mt-4 text-center">
        Ricky and Morty family <i class="fa-solid fa-people-roof"></i>
      </h4>
      <Search />
      <div className="row">
        <div className="col-9">
          {results?.length ? (
            <div className="d-flex flex-wrap gap-2">
              {results.map((item) => (
                <Card
                  image={item.image}
                  status={item.status}
                  name={item.name}
                  location={item.location.name}
                  gender={item.gender}
                />
              ))}
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="col-3">
          <Filter setStatus={setStatus} setGender={setGender} />
        </div>
      </div>
    </>
  );
};
