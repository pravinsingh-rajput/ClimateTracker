import "./App.css";
import Weatherapp from "./Component/Weatherapp";

function App() {
  // const fetchdetails = () => {
  //   axios
  //     .get(
  //       `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`
  //     )
  //     .then((response) => {
  //       console.log(response.data.main);
  //       setData({
  //         temp: "",
  //       });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  return (
    <div className="App">
      <Weatherapp />
    </div>
  );
}

export default App;
