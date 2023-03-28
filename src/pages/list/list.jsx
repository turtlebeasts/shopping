import React, { useContext, useState } from "react";
import Card from "../../components/card";
import itemcontext from "../../context/itemcontext";

export default function List() {
  const data = useContext(itemcontext);
  const [search, setTerm] = useState("");
  const searchItem = () => {
    return data.filter(item=>item.title.toLowerCase().includes(search))
  }
  return (
    <div className="container text-center mt-5">
      <div className="row">
        <div className="col-12">
          <input
            type="text"
            className="form-control"
            placeholder="Search ..."
            value={search}
            onChange={(e) => setTerm(e.target.value.toLowerCase())}
          />
          <hr />
        </div>
      </div>
      <div className="row">
        {data.length
          ? searchItem().map((item, key) => (
              <div className="col-md-3 col-sm-6 mt-2" key={key}>
                <Card data={item}/>
              </div>
            ))
          : "loading...."}
      </div>
    </div>
  );
}
