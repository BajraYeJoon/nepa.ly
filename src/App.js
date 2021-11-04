import "./App.css";
import Header from "./components/Header";
import "./index.css";
import Item from "./components/Item";
import Culture from "./img/culture.jpg";
import Himalaya from "./img/Himalaya.jpg";
import Religious from "./img/Religious.jpg";
import Tourism from "./img/Tourism.jpeg";
import Wildlife from "./img/wildlife.jpg";

function App() {
  return (
    <div className="App">
      <Header />

      <div className="app__itemscontainer">
        <Item
          title=" Experience the adventure in Nepal"
          desc=" thrilling , excitement"
          descLink=""
          backgroundImg={Himalaya}
          leftBtnText="Get Tickets"
          leftBtnLink=""
          rightBtnText="Learn More"
          rightBtnLink=""
          twoButtons="true"
          first
        />

        <Item
          title=" Experience the adventure in Nepal"
          desc=" thrilling , excitement"
          descLink=""
          backgroundImg={Religious}
          leftBtnText="Get Tickets"
          leftBtnLink=""
          rightBtnText="Learn More"
          rightBtnLink=""
          twoButtons="true"
        />

        <Item
          title=" Experience the adventure in Nepal"
          desc=" thrilling , excitement"
          descLink=""
          backgroundImg={Tourism}
          leftBtnText="Get Tickets"
          leftBtnLink=""
          rightBtnText="Learn More"
          rightBtnLink=""
          twoButtons="true"
        />

        <Item
          title=" Experience the adventure in Nepal"
          desc=" thrilling , excitement"
          descLink=""
          backgroundImg={Wildlife}
          leftBtnText="Get Tickets"
          leftBtnLink=""
          rightBtnText="Learn More"
          rightBtnLink=""
          twoButtons="true"
        />

        <Item
          title=" Experience the adventure in Nepal"
          desc=" thrilling , excitement"
          descLink=""
          backgroundImg={Culture}
          leftBtnText="Get Tickets"
          leftBtnLink=""
          rightBtnText="Learn More"
          rightBtnLink=""
          twoButtons="true"
        />
      </div>
    </div>
  );
}

export default App;
