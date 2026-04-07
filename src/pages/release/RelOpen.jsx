import { useT } from "../../context/ThemeContext";
import Sec from "../../components/ui/Section";
import W from "../../components/ui/Warning";
import Tp from "../../components/ui/Tip";
import Acc from "../../components/ui/Accordion";

export default function RelOpen() {
  const t = useT();
  return (
    <Sec title="Open Prison" sub="More freedom, more responsibility">
      <Acc title="Conditions for Entry" open>
        <p>Your AVO date from ITK has arrived. You're not assessed as highly dangerous. No escape attempts or flight risk. No recent disciplinary violations. No ongoing new criminal cases. Required social programs completed. Drug addiction treatment completed (or agree to do so in open prison for alcohol issues).</p>
        <p style={{ marginTop:8 }}>The decision considers: whether conditions are met, behavior, ITK completion, and likelihood of new offense. The process takes several months.</p>
      </Acc>
      <Acc title="Life in Open Prison">
        <p>Free movement within grounds during the day. Quiet hours in your room (locked if needed). Allowed activities: studying, working, short outings. Communicate with loved ones via letters, phone, short meetings, outings. Leisure activities available. Personal clothing allowed (you maintain it). Follow the schedule, maintain order and cleanliness. You can cook for yourself.</p>
      </Acc>
      <Acc title="Work & Study Outside">
        <p>Work on economic tasks within prison, with contracted employers, or find your own job (prison must approve — job must allow timely evening return). Check opportunities with the Unemployment Insurance Fund. If permitted, study at a regional school outside prison.</p>
      </Acc>
      <Acc title="Outings & Family">
        <p>Short-term outings: up to 21 calendar days per year. Emergency outings (serious family illness/death): up to 7 days, doesn't count toward the 21-day limit — submit written request to prison director with certificate. Response within 3 working days.</p>
        <p style={{ marginTop:6 }}>Long-term meetings with relatives are not available in open prison — use short-term outings for family events instead.</p>
      </Acc>
      <Acc title="Other Opportunities">
        <p>Attend meetings at institutions (Unemployment Insurance Fund, job interviews). Participate in Unemployment Insurance Fund courses, social programs in criminal supervision, and support groups (e.g. anonymous drug addicts).</p>
      </Acc>
      <W>Breaking rules: minor → warning or restricted rights. Serious (prohibited items, leaving without permission) → return to closed prison.</W>
      <Tp>Life sentence inmates who have served at least 23 years may inquire about open prison eligibility — discuss with your contact person.</Tp>
    </Sec>
  );
}
