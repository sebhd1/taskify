import React, { useEffect, useState } from "react";
import { axiosReq } from "../../api/axiosDefaults";
import Pack from "./Pack";
import { useParams } from "react-router";
import Asset from "../../components/Asset";


function PackDetail() {
  const { id } = useParams();
  const [pack, setPack] = useState({ results: [] });
  const [isLoading, setIsLoading] = useState(true);

  /* 
    Fetches all packs by ID
  */
  useEffect(() => {
    const handleMount = () => {
      axiosReq.get(`/packs/${id}`)
        .then((response) => {
          setPack({ results: [response.data] });
          setIsLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    handleMount();
  }, [id]);

  /* 
    Returns a pack detail page
  */
  return (
    <div className="h-100">
      <div className='mb-3'>
        <h3
            className="text-light text-center mt-auto"
        >
          PACK DETAIL
        </h3>
      </div>

      {isLoading ? (
        <Asset spinner />
      ) : (
        <Pack {...pack.results[0]} setPack={setPack} packDetail/>
      )}
    </div>
  );
}

export default PackDetail;
