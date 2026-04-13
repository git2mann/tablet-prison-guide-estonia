import React from 'react';
import Section from "../../components/ui/Section";
import Table from "../../components/ui/Table";
import Warning from "../../components/ui/Warning";
import Tip from "../../components/ui/Tip";

export default function DailyMeetings({ language = 'ET' }) {
  const content = {
    ET: 'Kõik kohtumised tuleb ette registreerida. Järjekorrad võivad olla pikad. Külastajad peavad kaasa võtma dokumendi ja nad vaadatakse läbi. Mõlemale osapoolele võidakse teha narko/alkotesti.\n\nAlaealised külastajad: sünnitunnistus (alla 8a), fotoga dokument (8-15a), ID-kaart/pass (16+).',
    EN: 'All meetings must be registered in advance. Queues can be long. Visitors must present valid ID and will be searched. Both parties may be tested for alcohol/drugs.\n\nMinor visitors: birth certificate (under 8), photo document (8–15), or ID card/passport (16+).'
  };

  const table = {
    headers: { ET: ['Tüüp', 'Kestus', 'Detailid'], EN: ['Type', 'Duration', 'Details'] },
    rows: {
      ET: [
        ["Lühiajaline","2 tundi","Tavaliselt klaasiga eraldatud. Klaasita kohtumist saab taotleda eraldi."],
        ["Pikaajaline","24 tundi","Eraldi ruum. Tasuline (pangaülekanne/kaart)."],
        ["Videokõne","1–2 tundi","Sugulased, advokaadid, kaplan, ametnikud."],
      ],
      EN: [
        ["Short-term","2 hours","Usually separated by glass. Apply separately for no-glass."],
        ["Long-term","24 hours","Separate room. Paid (bank card/transfer)."],
        ["Video call","1–2 hours","Relatives, lawyers, chaplain, notary, officials."],
      ]
    }
  };

  const warnings = {
    ET: ['Keelatud: ebasünnis käitumine, uimastid, asjade üleandmine, intiimne puudutus lühikohtumisel. Rikkumine lõpetab kohtumise.'],
    EN: ['Prohibited: rude behavior, being under influence, bringing prohibited items, intimate touching during short meetings. Violations terminate the meeting.']
  };

  const tips = {
    ET: ['Pikaajalisele kohtumisele tohib kaasa võtta ainult vangla e-poest ostetud asju. Kodust toodud asjad pole lubatud.'],
    EN: ['For long-term meetings, only items purchased from the prison e-shop may be brought. Items from home are not allowed.']
  };

  const title = { ET: 'Kohtumised', EN: 'Meetings' };

  return (
    <Section title={title[language]} sub={language === 'ET' ? 'Igapäevaelu' : 'Daily Life'}>
      <div className="prose prose-2xl prose-blue max-w-none font-bold whitespace-pre-wrap text-slate-700 leading-relaxed mb-12">
        {content[language]}
      </div>

      <Table 
        headers={table.headers[language] || table.headers.EN}
        rows={table.rows[language] || table.rows.EN}
      />

      {(warnings[language] || warnings.EN).map((w, i) => (
        <Warning key={i}>{w}</Warning>
      ))}

      {(tips[language] || tips.EN).map((t, i) => (
        <Tip key={i}>{t}</Tip>
      ))}
    </Section>
  );
}
