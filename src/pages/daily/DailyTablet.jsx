import { useT } from "../../context/ThemeContext";
import Sec from "../../components/ui/Section";
import W from "../../components/ui/Warning";
import Acc from "../../components/ui/Accordion";
import Kw from "../../components/ui/keyword";

export default function DailyTablet() {
  const t = useT();
  return (
    <Sec title="Tablet Use" sub="What the prison tablet is for">
      <p style={{ color:t.dim, fontSize:15.5, lineHeight:1.7, marginBottom:10 }}>Tablets are used for learning, viewing prison information, and specific authorized activities. Internet access is controlled and restricted. Tablet use is a privilege, not a right.</p>
      <Acc title="What You Can Use It For" open>
        <p>Studies (general education, vocational, courses), work exercises, prison programs, viewing internal information (schedule, study materials, laws/documents), e-shop purchases, and checking your <Kw word="personal account">personal account</Kw> balance.</p>
      </Acc>
      <Acc title="Rules">
        <p>Tablets are prison property, not yours. Usage requires a request and follows a schedule. Everything is monitored and recorded. Return the device to its designated location when done.</p>
        <W>Do NOT: disassemble or change settings, give to another inmate, store/distribute/view prohibited content. Breaking the tablet means you pay for repairs. Rule violations may revoke usage rights.</W>
      </Acc>
    </Sec>
  );
}
