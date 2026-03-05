import { useT } from "../../context/ThemeContext";
import Sec from "../../components/ui/Section";
import W from "../../components/ui/Warning";
import Tp from "../../components/ui/Tip";
import Acc from "../../components/ui/Accordion";
import Tbl from "../../components/ui/Table";
import Kw from "../../components/ui/keyword";

export default function ActPrograms() {
  const t = useT();
  return (
    <Sec title="Social Programs" sub="Addressing behavior and building skills">
      <p style={{ color:t.dim, fontSize:15.5, lineHeight:1.7, marginBottom:10 }}><Kw word="social programs">Social programs</Kw> help with addiction, anger, violent tendencies, and social skills. They support personal development and teach useful everyday coping strategies. Participation improves chances for open prison and early release.</p>
      <Acc title="Available Programs" open>
        <Tbl
          headers={["Program","Sessions","Focus"]}
          rows={[
            ["Anger Management","9","Controlling emotions"],
            ["Aggression Replacement Training","18","Social skills, conflict resolution"],
            ["Family & Partner Violence","Varies","Safety, coping with violent patterns"],
            ["Lifestyle 24/7","Varies","Changing addictive behavior (individual/group)"],
            ["Traffic Safety","Varies","Drunk driving problems"],
            ["Social Skills Development","Varies","General social skills"],
            ["Christian Values Program","Varies","Values and attitudes"],
          ]}
        />
        <p style={{ marginTop:8 }}>Sessions 1–2 times/week, groups of 4–8 or individual. The social worker shares information but doesn't register you — tell your <Kw word="contact person">contact person</Kw> directly.</p>
      </Acc>
      <W>Refusal may affect your risk score. Participation alone doesn't guarantee early release — it's based on overall behavior. If registered, don't miss sessions without valid reason.</W>
      <Tp>Join addiction support groups as early as possible, especially before release.</Tp>
    </Sec>
  );
}
