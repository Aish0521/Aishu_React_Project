import { useState } from "react";
import Places from "./Places.jsx";
import Error from "./Error.jsx";
import { useEffect } from "react";
import { sortPlacesByDistance } from "../loc.js";
import { fetchAvailablePlaces } from "../http.js";

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState();
  useEffect(() => {
    async function fetchPlaces() {
      setIsFetching(true);
      try {
        const places = await fetchAvailablePlaces();
        navigator.geolocation.getCurrentPosition((position) => {
          const sortedPlaces = sortPlacesByDistance(
            places,
            position.coords.latitude,
            position.coords.longitude
          )
        setAvailablePlaces(sortedPlaces);
        setIsFetching(false);
        })
        // setAvailablePlaces(resData.places);
      } catch (error) {
        console.log(error);
        setError({ message: error.message || "failed to fetch places!" });
      }

      setIsFetching(false);
    }
    fetchPlaces();
    // fetch("http://localhost:3000/places")
    // .then((res) => {
    //   return res.json();
    // })
    // .then((resData) => {
    //   setAvailablePlaces(resData.places);
    // });
  }, []);

  if (error) {
    return <Error title="An error occurred!" message={error.message} />;
  }

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
      isLoading={isFetching}
      loadingText="fetching data..."
    />
  );
}
