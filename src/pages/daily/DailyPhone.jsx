import { useT } from "../../context/ThemeContext";
import Sec from "../../components/ui/Section";
import W from "../../components/ui/Warning";
import Tp from "../../components/ui/Tip";
import Tbl from "../../components/ui/Table";
import Kw from "../../components/ui/keyword";

export default function DailyPhone() {
  const t = useT();
  return (
    <Sec title="Phone Calls" sub="Rules for calling from prison">
      <Tbl
        headers={["Setting","Allowance","Notes"]}
        rows={[
          ["Open department","60 min/day","During scheduled hours. Includes wait time."],
          ["Closed unit","≥10 min/week","Must request in writing by evening count the day before."],
        ]}
      />
      <p style={{ color:t.dim, fontSize:15.5, lineHeight:1.7, marginBottom:10 }}>During the first week, write down all people and numbers you wish to call on a form given to prison staff. Calling costs money — transfer funds from your <Kw word="personal account">personal account</Kw> to your <Kw word="phone card">phone card</Kw>. You can call multiple people per session.</p>
      <p style={{ color:t.dim, fontSize:15.5, lineHeight:1.7, marginBottom:10 }}>To call someone new, submit a form by evening count the previous day with: your name, DOB, cell number, who you're calling, their number, and your relationship.</p>
      <W>Never share your phone card PIN, use another inmate's card, leave the phone without logging out, or pass the phone to another inmate.</W>
      <Tp>A call request is needed if: calling outside scheduled hours, the department is locked, you have limited communication rights, or calling a new contact.</Tp>
    </Sec>
  );
}
