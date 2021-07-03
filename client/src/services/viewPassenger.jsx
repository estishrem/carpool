export const getAllPassengersFromServer = () => {
    return fetch(`http://localhost:3000/getAllPassengers`)
    .then((res) => res.json())
    .then((data) =>{ 
      return data;
                 }
     )
    .catch((err) => {
      console.log("error", err);
    });
}

