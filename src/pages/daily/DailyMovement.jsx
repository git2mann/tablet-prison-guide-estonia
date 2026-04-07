import { useT } from "../../context/ThemeContext";
import Sec from "../../components/ui/Section";
import W from "../../components/ui/Warning";
import Acc from "../../components/ui/Accordion";
import Kw from "../../components/ui/keyword";

export default function DailyMovement() {
  const t = useT();
  return (
    <Sec title="Movement & Walks" sub="How you move around prison">
      <p style={{ color:t.dim, fontSize:15.5, lineHeight:1.7, marginBottom:10 }}>The prison has <Kw word="open department">open departments</Kw> (cell doors open during day, free movement within) and <Kw word="closed cell">closed cells</Kw> (23 hrs/day locked, escort only). Movement on prison territory always requires a prison officer and follows designated routes.</p>
      <Acc title="Movement Rules" open>
        <p>Walk in pairs in a column (Tallinn prison). Don't take things from the ground or throw things. No physical contact with others. Don't peek through door peepholes. Don't enter rooms you're not allowed in. Don't cross the red line in front of cell doors or touch locks. Don't press buttons/switches without reason.</p>
        <p style={{ marginTop:6 }}>When leaving the department, take only necessary pre-approved items. On return, you must not have items you didn't leave with (exception: school materials).</p>
      </Acc>
      <Acc title="Walks">
        <p>Once daily, at least 1 hour in the designated area per schedule. Wear weather-appropriate clothing. Allowed: handkerchief, up to 0.5L water in plastic bottle, wristwatch, religious item/prayer beads, wedding ring. Once a month: one blanket and pillow for shaking.</p>
        <W>Nothing may be thrown, left, or picked up in the walking area. No communicating with inmates outside your area. Violations may end the walk.</W>
      </Acc>
      <Acc title="Searches">
        <p>Searches ensure security. When leaving/entering the department, stand facing the wall with hands on the surface. Strip searches are done half-body at a time, always privately.</p>
      </Acc>
      <Acc title="Dress Code">
        <p>Own clothes in the cell only. Outside: prison clothing + <Kw word="name tag">name tag</Kw> on strap around neck (may be under clothes when cooking or using machines). No going half-naked or bare-chested.</p>
      </Acc>
    </Sec>
  );
}
