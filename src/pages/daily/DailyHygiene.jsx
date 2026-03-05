import { useT } from "../../context/ThemeContext";
import Sec from "../../components/ui/Section";
import W from "../../components/ui/Warning";
import Acc from "../../components/ui/Accordion";
import Kw from "../../components/ui/keyword";

export default function DailyHygiene() {
  const t = useT();
  return (
    <Sec title="Hygiene, Clothing & Shoes" sub="Keeping clean and what you wear">
      <p style={{ color:t.dim, fontSize:15.5, lineHeight:1.7, marginBottom:10 }}>Personal cleanliness is your responsibility — for your health and others'. Use only the shared shower room or cell shower. Barber service is free. Tattooing is prohibited.</p>
      <Acc title="Free Hygiene Pack" open>
        <p>On arrival you receive a free pack: toilet soap, household soap, toothbrush, toothpaste, disposable razors (+ hygiene pads for women). After that, you can apply every 3 months if your average free funds were below €15/month over the past 3 months. Additional products can be purchased from the <Kw word="e-shop">e-shop</Kw>.</p>
      </Acc>
      <Acc title="Prison Clothing">
        <p>Convicts must wear prison clothing (usually brown pants and jacket). Arrested individuals and open prison inmates may wear personal clothing. You receive: T-shirt, long and short pants, skirt (women, optional), jacket, coat, winter/summer hat, mittens, neck scarf, and work clothes if applicable.</p>
        <p style={{ marginTop:6 }}>Allowed personal items: warm underwear, socks, shoes (up to 4 pairs), gloves, scarf, 3 hair ties if needed.</p>
      </Acc>
      <Acc title="Getting New Clothes & Shoes">
        <p>Buy from e-shop, or have relatives send items at designated times. If you lack clothes and money, submit a request with item and measurements. Clothes can generally be exchanged every 6 months. Shoes provided: one indoor pair (slippers) and one outdoor pair (sneakers/boots), plus up to 2 pairs of socks and underwear.</p>
        <W>Humanitarian aid is denied if: you already have the item, your average 3-month balance exceeds the item cost, or you previously sent similar items out of prison.</W>
      </Acc>
    </Sec>
  );
}
