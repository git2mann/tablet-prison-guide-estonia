import { useT } from "../../context/ThemeContext";
import Sec from "../../components/ui/Section";
import W from "../../components/ui/Warning";
import Tp from "../../components/ui/Tip";
import Kw from "../../components/ui/keyword";

export default function HealthPsych() {
  const t = useT();
  return (
    <Sec title="Psychologist" sub="Mental and emotional support">
      <p style={{ color:t.dim, fontSize:15.5, lineHeight:1.7, marginBottom:10 }}>The psychologist helps with stress, crises, and adjustment. They may recommend a mental health nurse, psychiatrist, or clinical psychologist. Conversations follow ethical and confidentiality requirements — content shared only with your consent.</p>
      <p style={{ color:t.dim, fontSize:15.5, lineHeight:1.7, marginBottom:10 }}>To see a psychologist, write a request to your <Kw word="contact person">contact person</Kw> (optionally state the reason: anxiety, sleep problems, grief). Wait time depends on prison and demand. Topics: coping with stress, mood changes, anxiety reduction exercises.</p>
      <W>In crisis (suicidal thoughts, panic) — inform the guard immediately. The duty nurse will respond as soon as possible.</W>
      <Tp>For non-psychological concerns, contact your contact person first — they'll direct you to the right specialist.</Tp>
    </Sec>
  );
}
