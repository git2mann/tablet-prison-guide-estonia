import { useT } from "../../context/ThemeContext";
import Sec from "../../components/ui/Section";
import Card from "../../components/ui/Card";
import Tp from "../../components/ui/Tip";

export default function ArrivalSearch() {
  const t = useT();
  return (
    <Sec title="Search & Documents" sub="What happens when you first arrive">
      <Card style={{ marginBottom:14 }}>
        <p style={{ fontSize:16, lineHeight:1.7, color:t.dim }}>You have arrived at the prison. It's understandable to feel uncertain or anxious. The goal is your safety and support.</p>
      </Card>
      <p style={{ color:t.dim, fontSize:15.5, lineHeight:1.7, marginBottom:10 }}>Upon arrival, you will be searched by an officer of the same gender. You will be asked to undress but never completely naked — the search is done half-body at a time in a private area. Your fingerprints and photos (including distinguishing features like tattoos and scars) will be taken.</p>
      <p style={{ color:t.dim, fontSize:15.5, lineHeight:1.7, marginBottom:10 }}>A personal file will be opened containing your identification document, court documents, and sentence-related documents. Your ID will be securely stored and returned upon release.</p>
      <Tp>Personal belongings not allowed in prison will be stored. You'll get them back upon release.</Tp>
    </Sec>
  );
}
