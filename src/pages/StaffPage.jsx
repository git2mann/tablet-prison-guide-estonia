import { useT } from "../context/ThemeContext";
import Sec from "../components/ui/Section";
import Card from "../components/ui/Card";
import Acc from "../components/ui/Accordion";
import Tp from "../components/ui/Tip";
import Kw from "../components/ui/keyword";

export default function StaffPage() {
  const t = useT();
  return (
    <Sec title="Staff Guide" sub="Know who to ask for faster help">
      <Card style={{ marginBottom:14 }}>
        <p style={{ fontSize:15.5, color:t.dim, lineHeight:1.7 }}>Each employee handles different tasks. Approaching the right person means faster help. If unsure, ask your <Kw word="contact person">contact person</Kw> or guard — briefly explain your question for accurate referral.</p>
      </Card>
      {[
        { t:"Guard", d:"Most visible staff member — daily rounds, schedule enforcement", duties:["Makes rounds and counts","Ensures schedule and rule compliance","Monitors cameras","Distributes food and medications","Assists with phone and tablet","Relays needs to contact person"], qs:["How can I use the phone?","How do I fill out a doctor request?"], c:t.blue },
        { t:"Contact Person", d:"Your main support — ask them first for most questions", duties:["Meets you in early days, listens to concerns","Plans sentence course and release with you","Organizes activities: learning, hobbies, programs, therapy","Helps with letters, applications, warehouse requests","Resolves case-specific issues (violations)","Communicates with relatives and probation officer","Monitors ITK progress and can initiate changes"], qs:["How to apply for a meeting?","How to get a job?","When will I get a response?"], c:t.purple },
        { t:"Social Worker", d:"Conducts programs and group activities — contact via your contact person", duties:["Organizes social programs, restorative practices, family work","Assesses motivation and supports development goals","Helps understand consequences through group/individual work","Provides recommendations to contact person"], qs:["How will this program help?","How to apply skills learned?","Who supports me in applying these skills?"], c:t.green },
        { t:"Psychologist", d:"Mental and emotional support — contact via your contact person", duties:["Assesses psychological state","Listens and helps understand feelings","Uses individual and group therapy","Advises on stress coping","Gives feedback to contact person, refers to specialists"], qs:["How to cope with stress?","Can we talk about mood changes?","What exercises reduce anxiety?"], c:t.pink },
        { t:"Chaplain", d:"Spiritual and pastoral care — voluntary and confidential", duties:["Private spiritual/religious conversations","Prayer meetings and religious services","Supports in hardship, offers hope","Listens and respects your religious beliefs"], qs:["How to attend a religious ceremony?","How to access the church?"], c:t.accent },
        { t:"Probation Officer", d:"Supervises you after early release — similar to contact person", duties:["Regular meetings about preventing re-offending and repairing damages","Develops risk assessment and action plan with you","Monitors court requirements and obligations","Discusses setbacks and next steps","Collaborates with court, prosecutors, psychologists, social workers","Supports family and employer communication"], qs:["Where to turn for debt issues?","Which programs help avoid substance abuse?","Who to inform about changes in living/work/phone?"], c:t.teal },
      ].map(s => (
        <Acc key={s.t} title={s.t}>
          <p style={{ color:t.dim, marginBottom:10 }}>{s.d}</p>
          <div style={{ fontSize:11, fontWeight:600, letterSpacing:1.5, textTransform:"uppercase", color:s.c, marginBottom:6 }}>Duties</div>
          {s.duties.map((d, i) => (
            <div key={i} style={{ display:"flex", gap:8, marginBottom:3, fontSize:15, color:t.dim }}>
              <span style={{ width:4, height:4, background:s.c, borderRadius:"50%", flexShrink:0, marginTop:7 }}/>
              {d}
            </div>
          ))}
          <div style={{ fontSize:11, fontWeight:600, letterSpacing:1.5, textTransform:"uppercase", color:s.c, marginTop:12, marginBottom:6 }}>Example Questions</div>
          {s.qs.map((q, i) => (
            <div key={i} style={{ fontSize:15, color:t.dim, fontStyle:"italic", marginBottom:2 }}>"{q}"</div>
          ))}
        </Acc>
      ))}
      <Tp>All employees are here to support you. Don't hesitate to ask for help or advice!</Tp>
    </Sec>
  );
}
