import { useT } from "../../context/ThemeContext";
import Sec from "../../components/ui/Section";
import Acc from "../../components/ui/Accordion";
import Kw from "../../components/ui/keyword";

export default function DailyLetters() {
  const t = useT();
  return (
    <Sec title="Correspondence" sub="Sending and receiving letters">
      <p style={{ color:t.dim, fontSize:15.5, lineHeight:1.7, marginBottom:10 }}>Letters are sent and received through the prison via regular mail. Postage costs are paid from your <Kw word="personal account">personal account</Kw>. In exceptional cases (writing to government agencies like the Chancellor of Justice, courts, prosecutors), the prison may cover postage. Postage to loved ones is generally not covered.</p>
      <Acc title="Who Can You Write To?">
        <p>Family members, acquaintances, lawyers, government agencies, and others not restricted by court or prison order. You cannot write to someone whose address cannot be verified or whom officials consider dangerous to communicate with.</p>
      </Acc>
      <Acc title="Are Letters Read?">
        <p>Letter content can only be read with a court order related to criminal procedure. However, the prison may open envelopes in your presence to check for prohibited items. Letters to your guardian, lawyer, prosecutor, court, Chancellor of Justice, Ministry of Justice, or prison commission cannot be inspected.</p>
      </Acc>
    </Sec>
  );
}
