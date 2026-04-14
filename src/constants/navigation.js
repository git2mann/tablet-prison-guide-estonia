const NAV = [
  { id:"home", icon:"⬡", label:"Home" },
  { id:"arrival", icon:"→", label:"Arrival", sub:[
    {id:"arrival.search",label:"Search & Documents"},
    {id:"arrival.health",label:"Health Check"},
    {id:"arrival.needs",label:"Basic Needs"},
  ]},
  { id:"daily", icon:"◷", label:"Daily Life", sub:[
    {id:"daily.schedule",label:"Schedule & Count"},
    {id:"daily.account",label:"Personal Account"},
    {id:"daily.phone",label:"Phone Calls"},
    {id:"daily.eating",label:"Eating & Food"},
    {id:"daily.eshop",label:"E-Shop"},
    {id:"daily.living",label:"Living Quarters"},
    {id:"daily.hygiene",label:"Hygiene & Clothing"},
    {id:"daily.laundry",label:"Washing & Repair"},
    {id:"daily.meetings",label:"Meetings"},
    {id:"daily.letters",label:"Correspondence"},
    {id:"daily.movement",label:"Movement & Walks"},
    {id:"daily.leisure",label:"Leisure & Sports"},
  ]},
  { id:"calc", icon:"÷", label:"Money Calculator" },
  { id:"rules", icon:"§", label:"Rules & Discipline", sub:[
    {id:"rules.process",label:"Violation Process"},
    {id:"rules.punishments",label:"Punishments"},
    {id:"rules.solitary",label:"Solitary Confinement"},
  ]},
  { id:"health", icon:"+", label:"Health & Wellbeing", sub:[
    {id:"health.services",label:"Medical Services"},
    {id:"health.doctor",label:"Seeing a Doctor"},
    {id:"health.meds",label:"Medication Rules"},
    {id:"health.psych",label:"Psychologist"},
    {id:"health.chaplain",label:"Chaplain"},
  ]},
  { id:"activities", icon:"△", label:"Activities", sub:[
    {id:"activities.risk",label:"Risk Assessment & ITK"},
    {id:"activities.programs",label:"Social Programs"},
    {id:"activities.learn",label:"Education"},
    {id:"activities.work",label:"Working"},
  ]},
  { id:"release", icon:"◎", label:"Release Paths", sub:[
    {id:"release.open",label:"Open Prison"},
    {id:"release.etev",label:"Electronic Monitoring"},
    {id:"release.tev",label:"Probation (TEV)"},
  ]},
  { id:"prep", icon:"◇", label:"Preparation" },
  { id:"staff", icon:"⊕", label:"Staff Guide" },
  { id:"journey", icon:"⤳", label:"My Journey" },
];

export default NAV;
