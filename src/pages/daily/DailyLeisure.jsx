import W from "../../components/ui/Warning";
import Tp from "../../components/ui/Tip";
import Acc from "../../components/ui/Accordion";
import Sec from "../../components/ui/Section";
import Kw from "../../components/ui/keyword";

export default function DailyLeisure() {
  return (
    <Sec title="Leisure & Sports" sub="How to spend free time">
      <Acc title="Library & Reading" open>
        <p>Open department: books on department shelves, exchanged periodically. Request specific books if needed. You must return books when transferring or releasing. Don't use others' books. Lost/damaged books must be paid for. Previously damaging books may result in lending refusal.</p>
      </Acc>
      <Acc title="Newspapers & Magazines">
        <p>Major national dailies and magazines available. Subscribe to others at your own expense — in your name to the prison address. Family can pay but subscription must be in your name. No publications with violent or prohibited content. Ask your <Kw word="contact person">contact person</Kw> if unsure.</p>
      </Acc>
      <Acc title="Activities & Hobbies">
        <p>Art, music, and other hobby groups — ask your contact person or activity coordinator. You may need to sign participation rules. Items made in activities stay in prison (contact person for send-out rules — materials and shipping costs apply). Board games allowed, but no gambling for money or items.</p>
        <Tp>If you have a skill (music, crafts, art), tell your contact person — you might lead a hobby group!</Tp>
      </Acc>
      <Acc title="Sports">
        <p>Gym, football field, and other facilities available in groups per schedule (check bulletin board). Typically 1 hour per session. Options: strength training, ball games (basketball, volleyball), running, movement games, independent exercises (stretching, yoga, bodyweight — yoga materials available on request).</p>
        <p style={{ marginTop:6 }}>Open department: more time and options. Closed department/solitary: limited or temporarily prohibited.</p>
        <W>Use equipment properly. Report breakages immediately. Rule violations end the session. You participate at your own risk. One water bottle allowed.</W>
      </Acc>
    </Sec>
  );
}
