import Bg_Container from "./Components/Bg_Container";
import Chosen_Card from "./Components/Chosen_Card";
import Destination_card from "./Components/Destination_card";
import Subscribe from "./Components/SubsCribe";
import Tour_Card from "./Components/Tour_Card";
import Deals_Container from "./Deals_Container";

export default function Home() {
  return (
  <div>
     <Bg_Container></Bg_Container>
     <Tour_Card></Tour_Card>
     <Destination_card></Destination_card>
    <Chosen_Card></Chosen_Card>
    <Deals_Container></Deals_Container>
    <Subscribe></Subscribe>
  </div>
  );
}
