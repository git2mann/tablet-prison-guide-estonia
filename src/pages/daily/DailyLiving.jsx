import { useT } from "../../context/ThemeContext";
import Sec from "../../components/ui/Section";
import Acc from "../../components/ui/Accordion";
import Kw from "../../components/ui/keyword";

export default function DailyLiving() {
  const t = useT();
  return (
    <Sec title="Living Quarters" sub="Your cell, furnishings, and rules">
      <p style={{ color:t.dim, fontSize:15.5, lineHeight:1.7, marginBottom:10 }}>You share a cell with another inmate. You'll be assigned a bed, shelf, and refrigerator spot. The doctor may assign a lower bunk for health reasons. Next to the cell is the <Kw word="cell terminal">cell terminal</Kw> for radio and guard communication.</p>
      <Acc title="Cell Furnishings" open>
        <p>Bunk bed, table, two chairs, two shelves, coat rack, toilet, and faucet. Only prison-designated furniture is allowed. Bedding and towel are provided, plus cleaning supplies for maintaining your cell, bed, personal items, and common areas.</p>
      </Acc>
      <Acc title="Personal Items Allowed">
        <p>TV, kettle, razor (from prison shop). Daily-use items: hygiene tools, writing instruments, learning materials, up to 5 books. Allowed personal clothing (warm underwear, footwear). Leisure items (games, books). Limited food and drink. Maximum 30 kg total in room and storage.</p>
        <p style={{ marginTop:6 }}>Since items are registered, you can't simply throw them away (except underwear/socks). Submit an application and dispose with your contact person.</p>
      </Acc>
      <Acc title="Cell Rules — What's Prohibited">
        <p>No changes to furnishings or putting up mirrors. Nothing stuck to walls (use the sticky board). No covering lamps, cameras, or food hatches. No fermenting food. No homemade electrical devices or tools. No altering door information. No pictures depicting naked individuals, indecent, disturbing, or hate-inciting content.</p>
        <p style={{ marginTop:6 }}>Don't swap beds/shelves with cellmates. Don't disturb others. Don't accept/give items to other inmates. Don't throw anything from windows or receive through doors/hatches.</p>
      </Acc>
      <Acc title="Broken Items & Storage">
        <p>Report broken items to the officer immediately — don't use broken furniture. For storage: submit an application to retrieve or store items (once a month). Hygiene products, food, medicines, and ignition devices won't be accepted for storage. Clothing must be clean.</p>
      </Acc>
    </Sec>
  );
}
