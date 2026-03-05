import { useT } from "../../context/ThemeContext";
import Sec from "../../components/ui/Section";
import W from "../../components/ui/Warning";
import Acc from "../../components/ui/Accordion";
import Tbl from "../../components/ui/Table";
import Kw from "../../components/ui/keyword";

export default function ActWork() {
  const t = useT();
  return (
    <Sec title="Working" sub="Mandatory work and career progression">
      <p style={{ color:t.dim, fontSize:15.5, lineHeight:1.7, marginBottom:10 }}>Working is <strong style={{ color:t.text }}>mandatory</strong> for all inmates. Exempt: retirement age, medical reasons, and students (during term — must work during breaks). Minimum salary: €0.74/hour (at least 10% of national minimum wage).</p>
      <Acc title="Job Progression" open>
        <Tbl
          headers={["Step","What Happens"]}
          rows={[
            ["1. ITK Planning","Discuss work activities with contact person"],
            ["2. Economic Work","First assignment (cleaning, cooking, etc.) — builds work habit"],
            ["3. VEK (Prison Industry)","Trial day → employment contract if suitable (carpenter, welder, etc.)"],
            ["4. Job Change","Submit written request with justification to contact person"],
            ["5. Open Prison","Find a job yourself, or get help from Employment Office/prison"],
          ]}
        />
      </Acc>
      <Acc title="Workplace Behavior & Rules">
        <p>Follow supervisor instructions. Maintain good work pace. Treat tools responsibly. Wear <Kw word="name tag">name tag</Kw>. No conflicts with inmates. Follow general prison behavior rules. Tools and equipment must NOT be taken to your cell or exchanged.</p>
        <W>Losing, damaging, or misusing tools results in compensation and possible removal/punishment. Refusing safety equipment may also lead to removal.</W>
      </Acc>
      <Acc title="Absence & Lateness">
        <p>If ill, inform guard/VEK/employer ASAP (tablet message or verbally). If you know in advance (doctor, court), coordinate absence through your contact person at least 24 hours ahead.</p>
      </Acc>
      <Acc title="Salary & Tax">
        <p>Salary credited to <Kw word="personal account">personal account</Kw> and split per the standard formula. Keep an eye on your balance via tablet. If income is below the tax-free threshold (€654/month in 2025), no tax declaration needed. Otherwise, the prison arranges a pre-filled declaration from EMTA (Tax and Customs Board) on paper.</p>
      </Acc>
      <Acc title="Training & Safety">
        <p>Prison provides all tools and protective equipment (gloves, glasses, headphones). Short safety training before starting. Personal instruction for complex machines.</p>
      </Acc>
    </Sec>
  );
}
