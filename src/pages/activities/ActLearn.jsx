import { useT } from "../../context/ThemeContext";
import Sec from "../../components/ui/Section";
import W from "../../components/ui/Warning";
import Acc from "../../components/ui/Accordion";
import Tbl from "../../components/ui/Table";

export default function ActLearn() {
  const t = useT();
  return (
    <Sec title="Education" sub="What and how you can learn">
      <Tbl
        headers={["Type","Details","Language","Notes"]}
        rows={[
          ["Basic School","Up to 9th grade","Estonian & Russian","Mandatory if under 17 without basic education"],
          ["Gymnasium","10th–12th grade","Estonian only","B1 proficiency required"],
          ["Vocational","Construction, services (modules)","Estonian only","A2 required; convicted only"],
          ["Estonian Language","All levels","—","Assessed during ITK preparation"],
        ]}
      />
      <p style={{ color:t.dim, fontSize:15.5, lineHeight:1.7, margin:"10px 0" }}>School day: generally 9 AM–5 PM per timetable. Textbooks, notebooks, worksheets provided free. You can join year-round. To start, discuss with your contact person during ITK preparation. High school/vocational requires participation in economic work.</p>
      <Acc title="Rules at School">
        <p>Complete tasks assigned by teachers. No disrupting class (removal = unexcused absence). During practice, communicate only with staff/employer. Only learning materials allowed in school. Lost/broken tools: inform teacher immediately. Water bottle allowed but returned empty.</p>
        <W>Absence is justified only for illness, meetings, doctor appointments, or prison reasons. Unexcused absence is not allowed.</W>
      </Acc>
      <Acc title="Vocational Certificate & Continuing After Release">
        <p>Courses end with a certificate. You can obtain a vocational certificate if skills meet required level. After release, continue basic/high school at another school, or vocational education at relevant institutions. In open prison, you may attend regional schools outside.</p>
      </Acc>
    </Sec>
  );
}
