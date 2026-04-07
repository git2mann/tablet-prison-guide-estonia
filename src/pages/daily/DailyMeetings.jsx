import { useT } from "../../context/ThemeContext";
import Sec from "../../components/ui/Section";
import W from "../../components/ui/Warning";
import Tp from "../../components/ui/Tip";
import Tbl from "../../components/ui/Table";
import Kw from "../../components/ui/keyword";

export default function DailyMeetings() {
  const t = useT();
  return (
    <Sec title="Meetings with Relatives" sub="Short, long-term, and video meetings">
      <Tbl
        headers={["Type","Duration","Details"]}
        rows={[
          ["Short-term","2 hours","Usually separated by glass. Apply separately for no-glass."],
          ["Long-term","24 hours","Separate room. Paid (bank card/transfer). Specific days/times."],
          ["Video call","1–2 hours","Relatives, lawyers, chaplain, notary, officials."],
        ]}
      />
      <p style={{ color:t.dim, fontSize:15.5, lineHeight:1.7, marginBottom:10 }}>All meetings must be registered in advance by phone or request. Start early — queues can be long. Visitors must arrive with time to spare, present valid ID, complete a visit request, and store prohibited items at the entrance. Both parties are searched. Alcohol/drug tests may be conducted.</p>
      <p style={{ color:t.dim, fontSize:15.5, lineHeight:1.7, marginBottom:10 }}>For minor visitors: birth certificate (under 8), photo document (8–15), or ID card/passport (16+).</p>
      <W>Prohibited during meetings: rude behavior, being under influence, bringing prohibited items, leaving items for inmates, intimate touching during short meetings or video calls. Violations may terminate the meeting.</W>
      <Tp>For long-term meetings, only items purchased from the prison <Kw word="e-shop">e-shop</Kw> may be brought. Items from home are not allowed.</Tp>
    </Sec>
  );
}
