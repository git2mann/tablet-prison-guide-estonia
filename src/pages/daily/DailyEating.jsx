import { useT } from "../../context/ThemeContext";
import Sec from "../../components/ui/Section";
import W from "../../components/ui/Warning";
import Tp from "../../components/ui/Tip";
import Acc from "../../components/ui/Accordion";
import Kw from "../../components/ui/keyword";

export default function DailyEating() {
  const t = useT();
  return (
    <Sec title="Eating & Food" sub="Three meals a day and special dietary options">
      <p style={{ color:t.dim, fontSize:15.5, lineHeight:1.7, marginBottom:10 }}>You eat three times a day. Food is brought to the cell. Lunch can also be taken at school or work. You must pick up food yourself, return dishes after eating (Tallinn) or wash them (Viru). Leftover food can be transferred to approved containers.</p>
      <Acc title="Special Diets">
        <p>If you have a health condition, the prison doctor can prescribe a special diet or supplementary food (also for above-average height). If you don't eat meat, apply for vegetarian or pork-free food — but you must not purchase meat products from the e-shop, or the option is revoked.</p>
        <p style={{ marginTop:6 }}>For religious dietary needs, inform your <Kw word="contact person">contact person</Kw> and a vegetarian menu will be arranged.</p>
      </Acc>
      <Acc title="Refusing Food">
        <p>You may refuse prison food entirely by submitting a justified request. However, you cannot refuse just one meal — it's all or nothing. To resume meals, submit a new application.</p>
        <W>If food quality is poor, inform prison staff immediately — later complaints cannot be verified.</W>
      </Acc>
      <Tp>You can buy additional food (bread, cheese, canned goods, sweets, coffee, tea, spices) from the <Kw word="e-shop">e-shop</Kw>.</Tp>
    </Sec>
  );
}
