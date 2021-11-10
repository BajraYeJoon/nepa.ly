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
          title=" Experience The Himalayas Like Never Before"
          desc=" Make yourself closer to the snow covered mountains on air"
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
          title="Get Closer to Heritage Architecture"
          desc=" A peaceful cup of coffee around peaceful environment"
          descLink=""
          backgroundImg={Religious}
          leftBtnText="Explore Places"
          leftBtnLink=""
          rightBtnText="Book a Cab"
          rightBtnLink=""
          twoButtons="true"
        />

        <Item
          title="Familiarize with Tourists from all over the world"
          desc=" Get to know everything from our experts  "
          descLink=""
          backgroundImg={Tourism}
          leftBtnText="Hire an Agency"
          leftBtnLink=""
          rightBtnText="Open Maps"
          rightBtnLink=""
          twoButtons="true"
        />

        <Item
          title=" Life from a New Perspective "
          desc=" Jungle safari to feel closer to Nature "
          descLink=""
          backgroundImg={Wildlife}
          leftBtnText="Get a Tour"
          leftBtnLink=""
          rightBtnText="Book Now"
          rightBtnLink=""
          twoButtons="true"
        />

        <Item
          title=" Join The Diversed Culture "
          desc=" Make your stay feel like Home"
          descLink=""
          backgroundImg={Culture}
          leftBtnText="Follow Events"
          leftBtnLink=""
          rightBtnText="Book a Home Stay"
          rightBtnLink=""
          twoButtons="true"
        />
      </div>
    </div>
  );
}

export default App;
