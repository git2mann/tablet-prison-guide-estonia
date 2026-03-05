import { useT } from "../../context/ThemeContext";
import Sec from "../../components/ui/Section";
import Tp from "../../components/ui/Tip";
import Acc from "../../components/ui/Accordion";
import Tbl from "../../components/ui/Table";
import Kw from "../../components/ui/keyword";

export default function RelTEV() {
  const t = useT();
  return (
    <Sec title="Probation (TEV)" sub="Serving remaining sentence in freedom">
      <Tbl
        headers={["Sentence","TEV Eligible After"]}
        rows={[
          ["Up to 5 years","1/2 of sentence (min 4 months)"],
          ["Over 5 years","2/3 of sentence (min 4 months)"],
        ]}
      />
      <p style={{ color:t.dim, fontSize:15.5, lineHeight:1.7, margin:"10px 0" }}><Kw word="TEV">TEV</Kw> means living in freedom under supervision with control requirements. Your <Kw word="probation officer">probation officer</Kw> develops a care/sentence plan with you.</p>
      <Acc title="Requirements" open>
        <p>Live at court-designated permanent residence. Attend all scheduled probation meetings. Pass alcohol/drug tests. May need to work, study, undergo treatment, or participate in programs.</p>
      </Acc>
      <Acc title="What Happens If You Violate Rules">
        <p>First: probation officer meets you to understand what happened. May refer to programs, counseling, or increase meeting frequency. For serious/repeated violations: emergency report to court, which may impose additional obligations, extend probation by up to 1 year, or send you back to prison.</p>
      </Acc>
      <Tp>If you encounter difficulties, always talk to your probation officer early — addressing issues early prevents bigger problems.</Tp>
    </Sec>
  );
}
