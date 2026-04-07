import { useT } from "../../context/ThemeContext";
import Sec from "../../components/ui/Section";
import W from "../../components/ui/Warning";
import Tp from "../../components/ui/Tip";
import Kw from "../../components/ui/keyword";

export default function ArrivalHealth() {
  const t = useT();
  return (
    <Sec title="Health Check" sub="Completed within 24–72 hours of arrival">
      <p style={{ color:t.dim, fontSize:15.5, lineHeight:1.7, marginBottom:10 }}>You will be tested for alcohol and drug use, and a DNA sample will be taken. A medical professional will assess your overall health, map out illnesses (including chronic ones), and ensure treatment continues.</p>
      <p style={{ color:t.dim, fontSize:15.5, lineHeight:1.7, marginBottom:10 }}>Your mental state will also be assessed. If you have mental health issues — including alcohol/drug addiction or suicidal thoughts — inform your <Kw word="contact person">contact person</Kw> or guard immediately. Staff are trained to help and will refer you to specialists.</p>
      <W>Personal medications are prohibited in prison. Inform medical staff about all ongoing treatments immediately so the prison can provide your medications.</W>
      <Tp>If you don't speak Estonian or Russian well enough, request a translator — the prison will arrange one or use a video translation service.</Tp>
    </Sec>
  );
}
