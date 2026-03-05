import Sec from "../../components/ui/Section";
import W from "../../components/ui/Warning";
import Acc from "../../components/ui/Accordion";

export default function DailyLaundry() {
  return (
    <Sec title="Washing & Repair" sub="How laundry and repairs work">
      <p style={{ fontSize:15.5, lineHeight:1.7, marginBottom:10 }}>Prison clothes and bed linens are washed free of charge. Hand towels and linens every 14 days. Work clothes as needed. You can give half your prison clothes set for washing. If you're not in the cell during exchange, fold dirty laundry at the foot of your bed.</p>
      <W>Underwear, socks, and leather items must NOT go to the laundry — wash and repair these yourself.</W>
      <Acc title="Personal Clothes Washing">
        <p>Personal clothes washing is paid. Options: buy washing tools from the e-shop, or send to the laundry and pay per the price list. Ironing can also be ordered.</p>
      </Acc>
      <Acc title="Repairs">
        <p>Prison clothing and work clothes: repaired free (submit request). Personal clothes: repair via prison laundry, paid service (€1.50–€4/item). Shoes: €1 repair (free if average funds below €9 over 3 months). Pillow/blanket/mattress replacement: ask the officer.</p>
        <W>No warranty on repairs — if the item breaks again, the prison is not responsible.</W>
      </Acc>
    </Sec>
  );
}
