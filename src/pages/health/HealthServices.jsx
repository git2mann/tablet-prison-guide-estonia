import { useT } from "../../context/ThemeContext";
import Sec from "../../components/ui/Section";
import Tbl from "../../components/ui/Table";

export default function HealthServices() {
  const t = useT();
  return (
    <Sec title="Medical Services" sub="What healthcare is available">
      <Tbl
        headers={["Service","Details","Cost"]}
        rows={[
          ["Nurse & Family Doctor","Daily health, chronic monitoring, prescriptions","Free"],
          ["Emergency 24/7","Severe pain, trauma, breathing issues — guard calls duty nurse","Free"],
          ["Specialists","Psychiatrist, neurologist, cardiologist, gynecologist — referral needed","Free"],
          ["Dental","Pain management, essential repairs, dentures","Pain mgmt free; dentures at cost"],
          ["Psychological","Counseling, crisis intervention, medications","Free"],
          ["Vision","Eye exam, basic glasses","Standard free; special at cost"],
          ["Addiction support","Medications, group programs (AA)","Free"],
          ["Special needs","Wheelchair, language/visual aids","Individual solutions"],
        ]}
      />
      <p style={{ color:t.dim, fontSize:15.5, lineHeight:1.7, marginTop:10 }}>Your health data is confidential — only medical staff can access it. It will not reach guards or other inmates. You have the right to equivalent care as a free person.</p>
    </Sec>
  );
}
