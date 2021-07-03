export const getAllDriversFromServer = () => {
    return fetch(`http://localhost:3000/getAllDrivers`)
    .then((res) => res.json())
    .then((data) =>{ 
      return data;
                 }
     )
    .catch((err) => {
      console.log("error", err);
    });
}

