import { useT } from "../../context/ThemeContext";
import Sec from "../../components/ui/Section";
import W from "../../components/ui/Warning";
import Tp from "../../components/ui/Tip";

export default function DailyEshop() {
  const t = useT();
  return (
    <Sec title="E-Shop" sub="Ordering goods from the prison store">
      <p style={{ color:t.dim, fontSize:15.5, lineHeight:1.7, marginBottom:10 }}>View products and place orders on the prison tablet. Orders can be placed on certain days (usually twice a month per unit schedule). Goods arrive the following week. A service fee is added to prices. Your identity is verified upon login.</p>
      <p style={{ color:t.dim, fontSize:15.5, lineHeight:1.7, marginBottom:10 }}>Available items: food, clothing (socks, T-shirts, underwear), hygiene products, stationery (notebooks, pens, batteries), games, and electronics (TVs, kettles). Some products are women-only. Electronic devices receive a security sticker before delivery.</p>
      <W>Once ordered, you must pay even if you refuse the goods. Exceeding quantity limits means no goods but money still deducted.</W>
      <Tp>If you want something not in the catalog, submit a written request for prison approval. Report delivery problems in the e-shop app.</Tp>
    </Sec>
  );
}
