import { useT } from "../../context/ThemeContext";
import Sec from "../../components/ui/Section";
import Tp from "../../components/ui/Tip";
import Kw from "../../components/ui/keyword";

export default function HealthChaplain() {
  const t = useT();
  return (
    <Sec title="Chaplain & Spiritual Care" sub="Religious support in prison">
      <p style={{ color:t.dim, fontSize:15.5, lineHeight:1.7, marginBottom:10 }}>Every prison has a <Kw word="chaplain">chaplain</Kw> providing spiritual support regardless of denomination. Conversations are voluntary and confidential. Available denominations: primarily Lutheran and Orthodox, and where possible Catholic and others.</p>
      <p style={{ color:t.dim, fontSize:15.5, lineHeight:1.7, marginBottom:10 }}>Services: spiritual conversation, grief/crisis counseling, sacraments (baptism, communion, confession), religious literature (Bible, Quran, prayer books, cross, prayer mat — ordered through chaplain following security rules). Another clergy member can be arranged if needed.</p>
      <Tp>To contact the chaplain, write a request to your contact person or guard. You can specify a particular chaplain by name if you wish.</Tp>
    </Sec>
  );
}
