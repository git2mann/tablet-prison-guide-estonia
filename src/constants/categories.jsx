import React, { useMemo } from 'react';
import { 
  Zap, Clock, HeartPulse, Users, Scale, FileText, ArrowRight, Activity, 
  ShieldCheck, GraduationCap, Gavel, Home, Thermometer, BrainCircuit, 
  Compass, Target, Flame, Sparkles, LayoutGrid, BarChart3, Waves, 
  MousePointer2, ChevronRightSquare, AlertTriangle, Lightbulb
} from 'lucide-react';

export const useCategories = () => {
  return useMemo(() => [
    {
      id: 'arrival',
      title: { ET: 'Saabumine', EN: 'Arrival' },
      desc: { ET: 'Sissevõtt ja kord', EN: 'First steps' },
      icon: <Zap className="w-10 h-10" />,
      imageUrl: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80',
      color: 'bg-orange-50 border-orange-100 text-orange-900',
      articles: [
        {
          id: 'arrival.search',
          title: { ET: 'Otsing ja dokumendid', EN: 'Search & Documents' },
          content: { 
            ET: 'Olete saabunud vanglasse. On arusaadav, kui tunnete ebakindlust või ärevust. Meie eesmärk on teie turvalisus ja toetamine.\n\nSaabumisel läbiotsitakse teid samast soost ametniku poolt. Teil palutakse riided seljast võtta, kuid mitte kunagi täiesti alasti — läbiotsimine toimub pool keha korraga privaatses alas. Teilt võetakse sõrmejäljed ja fotod (sh eritunnused nagu tätoveeringud ja armid).\n\nTeie kohta avatakse isikutoimik, mis sisaldab isikut tõendavat dokumenti, kohtudokumente ja karistusega seotud dokumente. Teie isikutunnistust hoitakse turvaliselt ja see tagastatakse vabanemisel.',
            EN: "You have arrived at the prison. It's understandable to feel uncertain or anxious. The goal is your safety and support.\n\nUpon arrival, you will be searched by an officer of the same gender. You will be asked to undress but never completely naked — the search is done half-body at a time in a private area. Your fingerprints and photos (including distinguishing features like tattoos and scars) will be taken.\n\nA personal file will be opened containing your identification document, court documents, and sentence-related documents. Your ID will be securely stored and returned upon release."
          },
          tips: {
            ET: ['Isiklikud asjad, mis pole vanglas lubatud, hoiustatakse. Saate need kätte vabanemisel.'],
            EN: ["Personal belongings not allowed in prison will be stored. You'll get them back upon release."]
          }
        },
        {
          id: 'arrival.health',
          title: { ET: 'Tervisekontroll', EN: 'Health Check' },
          content: {
            ET: 'Teid testitakse alkoholi ja uimastite tarvitamise suhtes ning võetakse DNA-proov. Meditsiinitöötaja hindab teie üldist tervist, kaardistab haigused (sh kroonilised) ja tagab ravi jätkumise.\n\nHinnatakse ka teie vaimset seisundit. Kui teil on vaimse tervise probleeme — sealhulgas alkoholi-/uimastisõltuvus või suitsiidimõtted — teavitage sellest viivitamatult oma kontaktisikut või valvurit. Töötajad on koolitatud aitama ja suunavad teid spetsialistide juurde.',
            EN: 'You will be tested for alcohol and drug use, and a DNA sample will be taken. A medical professional will assess your overall health, map out illnesses (including chronic ones), and ensure treatment continues.\n\nYour mental state will also be assessed. If you have mental health issues — including alcohol/drug addiction or suicidal thoughts — inform your contact person or guard immediately. Staff are trained to help and will refer you to specialists.'
          },
          warnings: {
            ET: ['Isiklikud ravimid on vanglas keelatud. Teavitage meditsiinitöötajaid kõigist käimasolevatest ravidest koheselt, et vangla saaks teile vajalikud ravimid tagada.'],
            EN: ['Personal medications are prohibited in prison. Inform medical staff about all ongoing treatments immediately so the prison can provide your medications.']
          },
          tips: {
            ET: ['Kui te ei valda eesti või vene keelt piisavalt hästi, paluge tõlki — vangla korraldab tõlke või kasutab videotõlketeenust.'],
            EN: ["If you don't speak Estonian or Russian well enough, request a translator — the prison will arrange one or use a video translation service."]
          }
        },
        {
          id: 'arrival.needs',
          title: { ET: 'Baasvajad', EN: 'Basic Needs' },
          content: {
            ET: 'Teile luuakse isikuarve — ametnik või kontaktisik annab teile arvenumbri. Teile väljastatakse 1-eurose krediidiga telefonikaart (~10–20 min), et saaksite lähedastele helistada.\n\nSularaha ei ole vanglas lubatud. Isiklikud riided ei ole süüdimõistetutele lubatud (vahistatud võivad kanda oma riideid). Vanglas kehtivad ranged reeglid ja päevakava — tutvuge nendega järgmistes jaotistes.',
            EN: 'A personal account will be created for you — the officer or contact person will provide the account number. A phone card with €1 credit (~10–20 min) will be issued so you can call loved ones.\n\nCash is not allowed in prison. Personal clothing is not allowed for convicts (arrested persons may wear their own). There are strict rules and a daily schedule — familiarize yourself with them in the following sections.'
          },
          table: {
            headers: { ET: ['Ikoon', 'Väljastatav ese'], EN: ['Icon', 'Item Issued'] },
            rows: {
              ET: [
                ['📞','Telefonikaart (1€ krediiti)'],
                ['🆔','Isikukood ja arvenumber'],
                ['🧴','Hügieenikomplekt (seep, hambahari, raseerija)'],
                ['👕','Vanglariided (jakk, püksid, särk)'],
                ['👟','Jalatsid (kui teil endal pole)'],
                ['🛏️','Voodipesu, padi ja rätik'],
                ['🍽️','Söögiriistad'],
              ],
              EN: [
                ['📞','Phone card (€1 credit)'],
                ['🆔','Personal ID number'],
                ['🧴','Hygiene pack (soap, toothbrush, razor)'],
                ['👕','Prison clothing (jacket, pants, T-shirt)'],
                ['👟',"Shoes (if you don't have any)"],
                ['🛏️','Bedding, pillow & towel'],
                ['🍽️','Eating utensils'],
              ]
            }
          }
        }
      ]
    },
    {
      id: 'daily',
      title: { ET: 'Igapäevaelu', EN: 'Daily Life' },
      desc: { ET: 'Päevakava ja teenused', EN: 'Schedule & Services' },
      icon: <Clock className="w-10 h-10" />,
      imageUrl: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=800&q=80',
      color: 'bg-blue-50 border-blue-100 text-blue-900',
      articles: [
        {
          id: 'daily.schedule',
          title: { ET: 'Päevakava ja loendus', EN: 'Schedule & Count' },
          content: {
            ET: 'Vanglas kehtib range päevakava. Peate olema oma kambris, kui ajakava seda nõuab. Ajakava muutustest teavitatakse helisüsteemi, kambriterminali või ametniku kaudu.',
            EN: 'Prison has a strict daily schedule. You must be in your cell when the schedule requires it. Schedule changes will be communicated via sound system, cell terminal, or officer.'
          },
          table: {
            headers: { ET: ['Aeg', 'Tegevus'], EN: ['Time', 'Activity'] },
            rows: {
              ET: [
                ["06:00","Äratus — elekter sisse, kambri korrastamine, hügieen"],
                ["06:20–07:15","Hommikusöök, hommikune loendus, ravimid"],
                ["08:00–17:00","Tegevused — õppimine, töö, programmid, huvialad"],
                ["11:30–12:30","Lõuna — tuuakse kambrisse või töökohal"],
                ["17:30–18:30","Õhtusöök — õhtune loendus, ravimid"],
                ["22:00","Öörahu — elekter välja (erandkorras kuni südaööni)"],
              ],
              EN: [
                ["06:00","Wake up — electricity on, tidy cell, hygiene"],
                ["06:20–07:15","Breakfast served, morning count, medication"],
                ["08:00–17:00","Activities — study, work, programs, hobbies"],
                ["11:30–12:30","Lunch — brought to cell or at workplace"],
                ["17:30–18:30","Dinner — evening count, medication"],
                ["22:00","Night rest — electricity off (exception: unit manager may allow until midnight)"],
              ]
            }
          },
          warnings: {
            ET: ['Peate olema oma kambris, kui ajakava seda nõuab.'],
            EN: ['You must be in your cell when the schedule requires it.']
          },
          steps: {
            ET: [
              'Olge korrektselt riides, nimesilt nähtaval.',
              'Seiske oma tehtud voodi ees.',
              'Hoidke käed nähtaval — ärge nõjatuge ega istuge.',
              'Lülitage kõik seadmed välja või hääletule režiimile.',
              'Küsimisel öelge selgelt oma nimi.',
              'Ärge sööge, lugege, rääkige ega häirige loendust.'
            ],
            EN: [
              'Be properly dressed with your name tag visible.',
              'Stand in front of your made bed.',
              'Keep hands visible — don\'t lean or sit.',
              'Turn off all devices or set to silent.',
              'If asked, clearly state your name.',
              'Don\'t eat, read, talk, or disturb the count.'
            ]
          },
          tips: {
            ET: ['Loendused toimuvad hommikul ja õhtul teie kambris. Kui olete tööl, toimub loendus seal.'],
            EN: ['Counts happen morning and evening in your cell. If you\'re at work, count happens there.']
          }
        },
        {
          id: 'daily.account',
          title: { ET: 'Isikuarve', EN: 'Personal Account' },
          content: {
            ET: 'Teile avatakse isikuarve. Teie palk, perelt saadud raha ja kõik muud vahendid laekuvad siia. Jääki saate kontrollida tahvlist.\n\nVabanemisfondi maksimumsumma on 3-kordne Eesti miinimumpalk. Kui fond on täis, saate raha edasi säästa või kasutada. Perelt saadud raha jagatakse samamoodi — nt kui saadetakse 12€, saate kasutada 3.60€.\n\nSaate teha pangaülekandeid (nt riigilõivud) ja maksta teenuste (pesu, koopiad) ning kambri seadmete elektri eest.',
            EN: 'A personal account will be opened for you. Your salary, money from family, and all other funds go here. You can check your balance on the tablet.\n\nThe release fund maximum is 3x Estonian minimum wage. Once full, you can use or keep saving. Money from family is split the same way — e.g. if someone sends €12, you can use €3.60.\n\nYou can make bank transfers from your account (e.g. state fees) and pay for services (laundry, copies). You must also pay for electricity for devices in your cell.'
          },
          table: {
            headers: { ET: ['Olukord', 'Jaotus'], EN: ['Situation', 'Distribution'] },
            rows: {
              ET: [
                ["Võlgnevusi pole","70% → vabanemisfond · 30% → vabalt kasutatav"],
                ["On võlgnevusi","50% → võlad · 20% → vabanemisfond · 30% → vabalt kasutatav"],
              ],
              EN: [
                ["No debts","70% → release fund · 30% → yours"],
                ["Has debts","50% → debts · 20% → release fund · 30% → yours"],
              ]
            }
          },
          warnings: {
            ET: ['Planeerige e-poe oste hoolikalt — veenduge, et teil jätkub raha kohustuslike kulude (nt elekter) jaoks.'],
            EN: ['Plan e-shop purchases carefully — ensure you have enough for mandatory expenses like electricity.']
          }
        },
        {
          id: 'daily.phone',
          title: { ET: 'Telefonikõned', EN: 'Phone Calls' },
          content: {
            ET: 'Esimesel nädalal märkige üles kõik inimesed ja numbrid, kellele soovite helistada. Helistamine on tasuline — kandke raha oma isikuarvelt telefonikaardile. Ühe sessiooni ajal saate helistada mitmele inimesele.\n\nUue kontakti lisamiseks esitage vorm eelmise päeva õhtuseks loenduseks: nimi, sünniaeg, kamber, kellele helistate, number ja suhe.',
            EN: 'During the first week, write down all people and numbers you wish to call on a form given to prison staff. Calling costs money — transfer funds from your personal account to your phone card. You can call multiple people per session.\n\nTo call someone new, submit a form by evening count the previous day with: your name, DOB, cell number, who you\'re calling, their number, and your relationship.'
          },
          table: {
            headers: { ET: ['Üksus', 'Limiit', 'Märkused'], EN: ['Setting', 'Allowance', 'Notes'] },
            rows: {
              ET: [
                ["Avavangla","60 min/päevas","Graafikujärgsetel aegadel. Sisaldab ooteaega."],
                ["Kinnine üksus","≥10 min/nädalas","Kirjalik taotlus eelneva päeva õhtuks."],
              ],
              EN: [
                ["Open department","60 min/day","During scheduled hours. Includes wait time."],
                ["Closed unit","≥10 min/week","Must request in writing by evening count the day before."],
              ]
            }
          },
          warnings: {
            ET: ['Ärge kunagi jagage oma telefonikaardi PIN-koodi, kasutage teise vangi kaarti, lahkuge telefonist välja logimata ega andke telefoni teisele vangile.'],
            EN: ['Never share your phone card PIN, use another inmate\'s card, leave the phone without logging out, or pass the phone to another inmate.']
          },
          tips: {
            ET: ['Helistamisõiguse taotlus on vajalik, kui helistate väljaspool graafikut, osakond on lukus või helistate uuele kontaktile.'],
            EN: ['A call request is needed if: calling outside scheduled hours, the department is locked, you have limited communication rights, or calling a new contact.']
          }
        },
        {
          id: 'daily.eating',
          title: { ET: 'Söömine ja toit', EN: 'Eating & Food' },
          content: {
            ET: 'Söök on kolm korda päevas ja see tuuakse kambrisse. Lõunat saab süüa ka koolis või tööl. Peate toidu ise vastu võtma ja nõud tagastama (Tallinn) või pesema (Viru). Toidujäägid võib panna lubatud anumatesse.\n\nEridieedid: Tervislikel põhjustel võib arst määrata eridieedi või lisatoidu. Kui te ei söö liha (usulistel või muudel põhjustel), võite taotleda taimetoitu või sealiha vaba toitu — kuid siis ei tohi te e-poest lihatooteid osta.\n\nVõite vanglatoidust täielikult loobuda põhjendatud taotlusega, kuid ei saa loobuda ainult ühest toidukorrast.',
            EN: 'Food is provided three times a day and brought to the cell. Lunch can also be taken at school or work. You must pick up food yourself, return dishes after eating (Tallinn) or wash them (Viru). Leftover food can be transferred to approved containers.\n\nSpecial Diets: For health reasons, a doctor can prescribe a special diet or supplementary food. If you don\'t eat meat (religious or other reasons), apply for vegetarian or pork-free food — but you must not purchase meat products from the e-shop, or the option is revoked.\n\nYou can refuse prison food entirely by submitting a justified request. However, you cannot refuse just one meal.'
          },
          warnings: {
            ET: ['Kui toidu kvaliteet on halb, teavitage töötajaid koheselt — hilisemaid kaebusi ei saa kontrollida.'],
            EN: ['If food quality is poor, inform prison staff immediately — later complaints cannot be verified.']
          },
          tips: {
            ET: ['Täiendavat toitu (juust, konservid, maiustused, kohv, vürtsid) saate osta e-poest.'],
            EN: ['You can buy additional food (bread, cheese, canned goods, sweets, coffee, tea, spices) from the e-shop.']
          }
        },
        {
          id: 'daily.eshop',
          title: { ET: 'E-pood', EN: 'E-Shop' },
          content: {
            ET: 'Tooteid saab vaadata ja tellimusi esitada vangla tahvlis. Tellimusi saab esitada teatud päevadel (tavaliselt kaks korda kuus). Kaup saabub järgmisel nädalal. Hinnale lisandub teenustasu. Logimisel kontrollitakse teie isikut.\n\nSaadaval on toit, riided, hügieenitarbed, kirjatarbed, mängud ja elektroonika (TV, keetja). Mõned tooted on ainult naistele. Elektroonikaseadmed saavad enne väljastamist turvakleebise.',
            EN: 'Products can be viewed and orders placed on the prison tablet. Orders can be placed on certain days (usually twice a month per unit schedule). Goods arrive the following week. A service fee is added to prices. Your identity is verified upon login.\n\nAvailable items: food, clothing (socks, T-shirts, underwear), hygiene products, stationery (notebooks, pens, batteries), games, and electronics (TVs, kettles). Some products are women-only. Electronic devices receive a security sticker before delivery.'
          },
          warnings: {
            ET: ['Kui tellimus on esitatud, peate selle eest maksma isegi siis, kui kaubast loobute. Kogusepiirangute ületamisel kaupa ei väljastata, kuid raha peetakse kinni.'],
            EN: ['Once ordered, you must pay even if you refuse the goods. Exceeding quantity limits means no goods but money still deducted.']
          },
          tips: {
            ET: ['Kui soovite midagi, mida kataloogis pole, esitage kirjalik taotlus. Tarneviivitustest teatage e-poe rakenduses.'],
            EN: ['If you want something not in the catalog, submit a written request for prison approval. Report delivery problems in the e-shop app.']
          }
        },
        {
          id: 'daily.living',
          title: { ET: 'Eluruumid', EN: 'Living Quarters' },
          content: {
            ET: 'Jagate kambrit teise vangiga. Teile määratakse voodi, riiul ja koht külmkapis. Arst võib tervislikel põhjustel määrata alumise nari. Kambri kõrval on terminal raadio ja valvuriga suhtlemiseks.\n\nSisustus: Narivoodi, laud, toolid, tualett ja kraanikauss. Kasutada tohib ainult vangla määratud mööblit. Väljastatakse voodipesu, rätik ja koristusvahendid.\n\nLubatud asjad: TV, keetja, pardel (e-poest), hügieenitarbed, kirjutusvahendid, õppematerjalid ja kuni 5 raamatut. Kokku tohib olla maksimaalselt 30 kg asju (kamber + ladu).',
            EN: 'You share a cell with another inmate. You\'ll be assigned a bed, shelf, and refrigerator spot. The doctor may assign a lower bunk for health reasons. Next to the cell is the cell terminal for radio and guard communication.\n\nFurnishings: Bunk bed, table, two chairs, two shelves, coat rack, toilet, and faucet. Only prison-designated furniture is allowed. Bedding and towel are provided, plus cleaning supplies.\n\nAllowed items: TV, kettle, razor (from prison shop). Daily-use items: hygiene tools, writing instruments, learning materials, up to 5 books. Maximum 30 kg total in room and storage.'
          },
          steps: {
            ET: [
              'Mööbli muutmine ja peeglite paigaldamine on keelatud.',
              'Seintele kleepimine keelatud (kasutage stendi).',
              'Lampide, kaamerate ja toiduluukide katmine keelatud.',
              'Toidu kääritamine keelatud.',
              'Isetehtud elektriseadmed ja tööriistad keelatud.',
              'Ärge vahetage voodikohti ilma loata.',
              'Ärge andke/võtke asju teistelt vangidelt.'
            ],
            EN: [
              'No changes to furnishings or putting up mirrors.',
              'Nothing stuck to walls (use the sticky board).',
              'No covering lamps, cameras, or food hatches.',
              'No fermenting food.',
              'No homemade electrical devices or tools.',
              'Don\'t swap beds/shelves without permission.',
              'Don\'t accept/give items to other inmates.'
            ]
          }
        },
        {
          id: 'daily.hygiene',
          title: { ET: 'Hügieen ja riietus', EN: 'Hygiene & Clothing' },
          content: {
            ET: 'Isiklik puhtus on teie vastutus. Kasutage ühist duširuumi või kambri dušši. Juuksuriteenus on tasuta. Tätoveerimine on keelatud.\n\nTasuta pakk: Saabumisel saate seebi, hambaharja, pasta ja raseerijad. Hiljem saab seda taotleda iga 3 kuu tagant, kui teie vabad vahendid on olnud alla 15€ kuus.\n\nRiietus: Süüdimõistetud peavad kandma vanglariideid (pruunid püksid ja jakk). Vahistatud ja avavangla vangid võivad kanda isiklikke riideid. Lubatud on isiklik soe aluspesu, sokid ja jalatsid (kuni 4 paari).',
            EN: 'Personal cleanliness is your responsibility. Use only the shared shower room or cell shower. Barber service is free. Tattooing is prohibited.\n\nFree pack: On arrival you receive soap, toothbrush, toothpaste, disposable razors. After that, you can apply every 3 months if your average free funds were below €15/month.\n\nClothing: Convicts must wear prison clothing (usually brown pants and jacket). Arrested individuals and open prison inmates may wear personal clothing. Allowed personal items: warm underwear, socks, shoes (up to 4 pairs).'
          },
          warnings: {
            ET: ['Humanitaarabi keeldutakse, kui teil on asjad olemas, vahendeid piisavalt või olete sarnaseid asju vanglast välja saatnud.'],
            EN: ['Humanitarian aid is denied if: you already have the item, your average 3-month balance exceeds the item cost, or you previously sent similar items out of prison.']
          }
        },
        {
          id: 'daily.laundry',
          title: { ET: 'Pesemine ja remont', EN: 'Washing & Repair' },
          content: {
            ET: 'Vanglariideid ja voodipesu pestakse tasuta. Käterätid ja linad iga 14 päeva tagant. Isiklike riiete pesemine on tasuline (pesuvahendid e-poest või pesula hinnakirja alusel).\n\nRemont: Vanglariiete ja tööriiete remont on tasuta. Isiklike riiete remont pesulas on tasuline (1.50€–4€ ese). Jalatsite remont 1€ (tasuta, kui vahendeid on alla 9€).',
            EN: 'Prison clothes and bed linens are washed free of charge. Hand towels and linens every 14 days. Personal clothes washing is paid (buy tools from e-shop or pay per laundry list).\n\nRepair: Prison clothing and work clothes: repaired free. Personal clothes: paid service via laundry (€1.50–€4/item). Shoe repair costs €1 (free if funds below €9).'
          },
          warnings: {
            ET: ['Aluspesu, sokke ja nahkesemeid pesulas ei pesta — need peate ise pesema. Remonditöödel puudub garantii.'],
            EN: ['Underwear, socks, and leather items must NOT go to the laundry — wash these yourself. No warranty on repairs.']
          }
        },
        {
          id: 'daily.meetings',
          title: { ET: 'Kohtumised', EN: 'Meetings' },
          content: {
            ET: 'Kõik kohtumised tuleb ette registreerida. Järjekorrad võivad olla pikad. Külastajad peavad kaasa võtma dokumendi ja nad vaadatakse läbi. Mõlemale osapoolele võidakse teha narko/alkotesti.\n\nAlaealised külastajad: sünnitunnistus (alla 8a), fotoga dokument (8-15a), ID-kaart/pass (16+).',
            EN: 'All meetings must be registered in advance. Queues can be long. Visitors must present valid ID and will be searched. Both parties may be tested for alcohol/drugs.\n\nMinor visitors: birth certificate (under 8), photo document (8–15), or ID card/passport (16+).'
          },
          table: {
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
          },
          warnings: {
            ET: ['Keelatud: ebasünnis käitumine, uimastid, asjade üleandmine, intiimne puudutus lühikohtumisel. Rikkumine lõpetab kohtumise.'],
            EN: ['Prohibited: rude behavior, being under influence, bringing prohibited items, intimate touching during short meetings. Violations terminate the meeting.']
          },
          tips: {
            ET: ['Pikaajalisele kohtumisele tohib kaasa võtta ainult vangla e-poest ostetud asju. Kodust toodud asjad pole lubatud.'],
            EN: ['For long-term meetings, only items purchased from the prison e-shop may be brought. Items from home are not allowed.']
          }
        },
        {
          id: 'daily.letters',
          title: { ET: 'Kirjavahetus', EN: 'Correspondence' },
          content: {
            ET: 'Kirju saab saata ja vastu võtta tavapostiga. Postikulud tasute oma isikuarvelt. Erandkorras (riigiasutustele) võib vangla kulud katta.\n\nSisu kontroll: Kirja sisu loetakse ainult kohtumäärusega. Kuid vangla võib ümbrikke teie juuresolekul avada, et kontrollida keelatud esemeid. Järelevalveorganitele saadetavaid kirju ei kontrollita.\n\nKellele võib kirjutada: Perele, tuttavatele, advokaatidele. Ei tohi kirjutada isikutele, kelle aadressi pole või kes on ametnike hinnangul ohtlikud.',
            EN: 'Letters are sent and received via regular mail. Postage costs are paid from your personal account. In exceptional cases (to government agencies), the prison may cover postage.\n\nContent: Letter content can only be read with a court order. However, the prison may open envelopes in your presence to check for prohibited items. Letters to supervisory bodies cannot be inspected.\n\nWho: Family members, acquaintances, lawyers. You cannot write to someone whose address cannot be verified or who is considered dangerous.'
          }
        },
        {
          id: 'daily.movement',
          title: { ET: 'Liikumine ja jalutuskäigud', EN: 'Movement & Walks' },
          content: {
            ET: 'Vangla territooriumil liikumine toimub alati koos ametnikuga. Avavanglas on liikumine vabam.\n\nJalutuskäik: kord päevas, vähemalt 1 tund. Kandke ilmastikukindlaid riideid. Lubatud: taskurätik, kuni 0.5L vett plastikpudelis, käekell, usuline ese, abielusõrmus.\n\nLäbiotsimine: Toimub osakonnast lahkumisel/sisenemisel. Seiske näoga seina poole, käed pinnal.',
            EN: 'Movement on prison territory always requires an officer. In open departments, movement is freer.\n\nWalks: Once daily, at least 1 hour. Wear weather-appropriate clothing. Allowed: handkerchief, up to 0.5L water in plastic bottle, wristwatch, religious item, wedding ring.\n\nSearches: Done when leaving/entering the department. Stand facing the wall with hands on the surface.'
          },
          warnings: {
            ET: ['Jalutusalal ei tohi midagi maha visata ega üles korjata. Teiste jalutusaladega suhtlemine keelatud.'],
            EN: ['Nothing may be thrown, left, or picked up in the walking area. No communicating with inmates outside your area.']
          },
          steps: {
            ET: [
              'Liikumine paaris ja kolonnis (Tallinn).',
              'Ei tohi asju maast võtta ega visata.',
              'Füüsiline kontakt teistega keelatud.',
              'Ukseaugust sissekiikamine keelatud.',
              'Ärge puudutage lukke ega punaseid jooni.',
              'Väljudes võtke kaasa ainult vajalik (kooliasjad lubatud).'
            ],
            EN: [
              'Walk in pairs in a column (Tallinn).',
              'Don\'t take things from the ground or throw things.',
              'No physical contact with others.',
              'Don\'t peek through door peepholes.',
              'Don\'t touch locks or red lines.',
              'Take only necessary approved items when leaving.'
            ]
          }
        },
        {
          id: 'daily.leisure',
          title: { ET: 'Vaba aeg ja sport', EN: 'Leisure & Sports' },
          content: {
            ET: 'Raamatukogu: Avavanglas on raamatud riiulitel. Võite taotleda konkreetseid raamatuid. Tagastage raamatud üleviimisel või vabanemisel. Kahjustatud raamatute eest tuleb maksta.\n\nMeedia: Riiklikud lehed on kättesaadavad. Saate tellida teisi oma kulul vangla aadressile. Vägivaldne sisu keelatud.\n\nHuviringid: Kunst, muusika jne — küsige kontaktisikult. Valmistatud esemed jäävad vanglasse (väljasaatmine kokkuleppel). Uhkeid hasartmänge raha peale ei toimu.',
            EN: 'Library: In open departments, books are on shelves. Request specific books if needed. Return books when transferring or releasing. Damaged books must be paid for.\n\nMedia: National papers available. Subscribe to others at your own expense. No violent content allowed.\n\nHobbies: Art, music, etc. — ask your contact person. Items made stay in prison (sending out by agreement). No gambling for money.'
          },
          warnings: {
            ET: ['Kasutage spordivarustust heaperemehelikult. Rikkumistest teatage koheselt. Reeglite rikkumine lõpetab treeningu.'],
            EN: ['Use equipment properly. Report breakages immediately. Rule violations end the session.']
          },
          tips: {
            ET: ['Kui teil on oskusi (muusika, käsitöö), öelge seda kontaktisikule — võite hakata ringijuhendajaks!'],
            EN: ['If you have a skill (music, crafts, art), tell your contact person — you might lead a hobby group!']
          }
        },
        {
          id: 'daily.tablet',
          title: { ET: 'Tahvli kasutamine', EN: 'Tablet Use' },
          content: {
            ET: 'Tahvlid on õppimiseks, info vaatamiseks ja lubatud tegevusteks. Internet on piiratud. Tahvli kasutamine on eelis, mitte õigus.\n\nKasutusvaldkonnad: Õpingud, tööharjutused, vangla programmid, siseinfo (graafikud, seadused), e-pood ja isikuarve jääk.',
            EN: 'Tablets are for learning, info, and authorized activities. Internet is restricted. Tablet use is a privilege, not a right.\n\nUses: Studies, work exercises, prison programs, internal info (schedules, laws), e-shop and account balance.'
          },
          warnings: {
            ET: ['Ärge võtke tahvlit lahti, muutke seadeid, andke teisele vangile ega vaadake keelatud sisu. Lõhkumisel maksate remondi eest.'],
            EN: ['Do NOT: disassemble or change settings, give to another inmate, or view prohibited content. If broken, you pay for repairs.']
          }
        }
      ]
    },
    {
      id: 'rules',
      title: { ET: 'Reeglid ja kord', EN: 'Rules & Discipline' },
      desc: { ET: 'Distsipliin ja õigused', EN: 'Discipline & Rights' },
      icon: <Scale className="w-10 h-10" />,
      imageUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80',
      color: 'bg-red-50 border-red-100 text-red-900',
      articles: [
        {
          id: 'rules.process',
          title: { ET: 'Rikkumiste menetlemine', EN: 'Violation Process' },
          content: {
            ET: 'Reeglitest kinnipidamine annab teile rohkem õigusi. Rikkumised võivad edasi lükata avavanglasse saamist või ennetähtaegset vabanemist. Karistused kehtivad tavaliselt 1 aasta.\n\nMenetlus: Esimesena teatab ametnik rikkumisest. Kui asi on tõsine, algatab kontaktisik menetluse. Kogutakse tõendid (video, fotod). Otsus tehakse varasemat käitumist arvestades.',
            EN: 'Adhering to rules gives you more rights. Violations may delay open prison or early release. Penalties generally last 1 year.\n\nProcess: First, the officer informs you of the violation. If serious, the contact person initiates proceedings. Evidence is collected (video, photos). Decision is made considering previous behavior.'
          },
          tips: {
            ET: ['Lugege otsus rahulikult läbi. Seal on kirjas ka see, kuidas seda vajadusel vaidlustada.'],
            EN: ['Take time to read the decision calmly. It states how to contest it if you wish.']
          }
        },
        {
          id: 'rules.punishments',
          title: { ET: 'Karistused', EN: 'Punishments' },
          content: {
            ET: 'Karistusi saab määrata ka katseajaga (1–6 kuud). Kui te selle aja jooksul uut rikkumist ei tee, siis karistust ei täideta. Mitme kartsa-karistuse vahel peab olema vähemalt 48 tundi.',
            EN: 'Punishments can be assigned with a probation period (1–6 months). If you don\'t violate rules during that time, the punishment won\'t be enforced. Multiple solitary sentences must have at least 48 hours between them.'
          },
          table: {
            headers: { ET: ['Karistus', 'Detailid'], EN: ['Punishment', 'Details'] },
            rows: {
              ET: [
                ["Kirjalik noomitus","Ametlik hoiatus isikutoimikus"],
                ["Seadme äravõtmine","TV, keetja jne — kuni 45 päevaks"],
                ["Kohtumiste keelamine","Lühi- või pikaajalised kohtumised"],
                ["Töölt eemaldamine","Kuni 1 kuuks"],
                ["Distsiplinaarkamber","Kuni 14 päevaks (3 päeva alla 21a)"],
              ],
              EN: [
                ["Written reprimand","Formal warning on record"],
                ["Device confiscation","TV, kettle, etc. — up to 45 days"],
                ["Visit deprivation","Short or long-term visits removed"],
                ["Removed from work","Up to 1 month"],
                ["Solitary confinement","Up to 14 days (3 if under 21)"],
              ]
            }
          }
        },
        {
          id: 'rules.solitary',
          title: { ET: 'Distsiplinaarkamber', EN: 'Solitary Confinement' },
          content: {
            ET: 'Distsiplinaarkambris olete üksi, kannate kartsariietust ja teil pole isiklikke asju. Kambrit jälgitakse. Liikumine on piiratud 1 tunniga õues.\n\nKohtumised on lubatud ainult pereliikmetega. Telefonikõned ja meedia võivad olla piiratud. Televiisorit ei ole.',
            EN: 'In solitary confinement: you are alone, wearing solitary clothing, with no personal belongings. The cell is monitored. Movement restricted to 1 hour outside.\n\nVisits only with family. Phone calls and media may be restricted. No television.'
          },
          warnings: {
            ET: ['Kartsa paigutamisel hoiustatakse teie isiklikud asjad eraldi kuni karistuse lõpuni.'],
            EN: ['If placed in solitary, your personal items will be stored separately until the period ends.']
          }
        }
      ]
    },
    {
      id: 'health',
      title: { ET: 'Tervis ja heaolu', EN: 'Health & Wellbeing' },
      desc: { ET: 'Arstiabi ja tugi', EN: 'Medical Care & Support' },
      icon: <HeartPulse className="w-10 h-10" />,
      imageUrl: 'https://images.unsplash.com/photo-1505751172107-16785669b61d?auto=format&fit=crop&w=800&q=80',
      color: 'bg-green-50 border-green-100 text-green-900',
      articles: [
        {
          id: 'health.services',
          title: { ET: 'Meditsiiniteenused', EN: 'Medical Services' },
          content: {
            ET: 'Teie terviseandmed on konfidentsiaalsed — neile pääsevad ligi ainult meditsiinitöötajad. Teil on õigus samaväärsele ravile kui vabaduses viibivatel isikutel.',
            EN: 'Your health data is confidential — only medical staff can access it. You have the right to equivalent care as a free person.'
          },
          table: {
            headers: { ET: ['Teenus', 'Detailid', 'Maksumus'], EN: ['Service', 'Details', 'Cost'] },
            rows: {
              ET: [
                ["Perearst & õde","Igapäevane tervis, retseptid","Tasuta"],
                ["Erakorraline 24/7","Tugev valu, traumad — valvur kutsub õe","Tasuta"],
                ["Eriarstid","Psühhiaater, neurolog jne — suunamisega","Tasuta"],
                ["Hambaravi","Valu leevendamine, paratamatud tööd","Valu tasuta; proteesid omaosalusega"],
                ["Psühholoogiline abi","Nõustamine, kriisiabi","Tasuta"],
                ["Nägemine","Kontroll, baasprillid","Tasuta; erisoovid omaosalusega"],
              ],
              EN: [
                ["Nurse & Family Doctor","Daily health, prescriptions","Free"],
                ["Emergency 24/7","Severe pain, trauma — guard calls nurse","Free"],
                ["Specialists","Psychiatrist, neurologist, etc. — referral needed","Free"],
                ["Dental","Pain management, essential repairs","Pain free; dentures at cost"],
                ["Psychological","Counseling, crisis intervention","Free"],
                ["Vision","Eye exam, basic glasses","Standard free; special at cost"],
              ]
            }
          }
        },
        {
          id: 'health.doctor',
          title: { ET: 'Arsti vastuvõtt', EN: 'Seeing a Doctor' },
          content: {
            ET: 'Mittekiirete murede korral täitke avaldus tahvlis või paberil. Teid vaatab esmalt üle üksuse pereõde (kohal tööpäeviti), kes suunab vajadusel perearsti juurde.\n\nPerearst käib vähemalt kord nädalas. Eriarstide ooteajad võivad olla pikad, sarnaselt vabadusele. Digilugu on kättesaadav. Avavanglas olles käite arsti juures jätkuvalt kinnises vanglas.\n\nErakorralised mured (tugev valu, verejooks, hingamisraskused) — pöörduge koheselt valvuri poole (abi 24/7).',
            EN: 'For non-urgent concerns, fill out an application. Your unit\'s family nurse reviews your case first (available on weekdays). She refers you to the family doctor if needed.\n\nThe family doctor visits at least once a week. Specialist wait times may take months. Digital health record is available. In open prison, you still see the doctor in the closed prison.\n\nFor emergencies (severe pain, bleeding, breathing difficulties), contact the guard immediately (24/7 availability).'
          }
        },
        {
          id: 'health.meds',
          title: { ET: 'Ravimite reeglid', EN: 'Medication Rules' },
          content: {
            ET: 'Ravimeid jagab valvurite meeskond (hommikul ja õhtul). Psühhotroopsed ravimid antakse meditsiinitöötaja poolt ja need tuleb võtta tema juuresolekul. Ravimid tuleb alla neelata ametniku ees.',
            EN: 'Medications are distributed by guards (morning and evening). Psychotropic meds are given by a medical professional and must be taken in their presence. Meds must be swallowed in front of an officer.'
          },
          warnings: {
            ET: ['Ravimite kogumine, jagamine, müümine või vahetamine on rangelt KEELATUD. Võõra nime all ravimite võtmine toob kaasa karistuse.'],
            EN: ['Do NOT collect, share, sell, or exchange medications. Taking medication under a false name is prohibited. Violations result in disciplinary action.']
          },
          tips: {
            ET: ['Võite küsida arstilt, kui kaua ravi kestab ja kas ravimid toimivad. Saate taotleda uut vastuvõttu.'],
            EN: ['You can ask your family doctor how long treatment is prescribed and whether medications are working. You can request to see the doctor again.']
          }
        },
        {
          id: 'health.psych',
          title: { ET: 'Psühholoog', EN: 'Psychologist' },
          content: {
            ET: 'Psühholoog aitab stressi, kriiside ja kohanemisega. Vestlused on konfidentsiaalsed. Psühholoogi juurde pääsemiseks kirjutage avaldus kontaktisikule (võite lisada põhju: ärevus, uni, lein). Ooteajad sõltuvad nõudlusest.',
            EN: 'The psychologist helps with stress, crises, and adjustment. Conversations are confidential. To see a psychologist, write a request to your contact person (you can state the reason: anxiety, sleep, grief). Wait times depend on demand.'
          },
          warnings: {
            ET: ['Kriisiolukorras (suitsiidimõtted, paanika) — teavitage koheselt valvurit. Valveõde reageerib esimesel võimalusel.'],
            EN: ['In crisis (suicidal thoughts, panic) — inform the guard immediately. The duty nurse will respond as soon as possible.']
          },
          tips: {
            ET: ['Muude kui psühholoogiliste muredega pöörduge esmalt oma kontaktisiku poole — tema suunab õige spetsialistini.'],
            EN: ['For non-psychological concerns, contact your contact person first — they\'ll direct you to the right specialist.']
          }
        },
        {
          id: 'health.chaplain',
          title: { ET: 'Kaplan', EN: 'Chaplain' },
          content: {
            ET: 'Igas vanglas on kaplan, kes pakub hingelist tuge sõltumata usutunnistusest. Vestlused on vabatahtlikud ja konfidentsiaalsed.\n\nTeenused: hingehoid, leinanõustamine, sakramendid, usuline kirjandus (Piibel, Koraan, palvematid — tellimine läbi kaplani).',
            EN: 'Every prison has a chaplain who provides spiritual support regardless of denomination. Conversations are voluntary and confidential.\n\nServices: spiritual conversation, grief counseling, sacraments, religious literature (Bible, Quran, prayer mat — ordered through chaplain).'
          },
          tips: {
            ET: ['Kaplani poole pöördumiseks kirjutage sooviavaldus kontaktisikule või valvurile. Võite küsida ka konkreetset kaplanit nime järgi.'],
            EN: ['To contact the chaplain, write a request to your contact person or guard. You can specify a particular chaplain by name if you wish.']
          }
        }
      ]
    },
    {
      id: 'activities',
      title: { ET: 'Tegevused', EN: 'Activities' },
      desc: { ET: 'Haridus ja töö', EN: 'Education & Work' },
      icon: <GraduationCap className="w-10 h-10" />,
      imageUrl: 'https://images.unsplash.com/photo-1454165833767-02302306d649?auto=format&fit=crop&w=800&q=80',
      color: 'bg-purple-50 border-purple-100 text-purple-900',
      articles: [
        {
          id: 'act.risk',
          title: { ET: 'Riskihindamine ja ITK', EN: 'Risk Assessment & ITK' },
          content: {
            ET: 'Riskihindamisega hinnatakse uue kuriteo toimepanemise tõenäosust. See koostatakse lausepõhiselt (üle 1a karistus) saabumisel ja ennetähtaegse vabanemise eel.\n\nITK: Isiklik täitmiskava paneb paika vajalikud tegevused ja kuupäevad. Seda koostate koos kontaktisikuga ja seda vaadatakse kord kuus üle ning kord aastas uuendatakse.',
            EN: 'Risk assessment evaluates re-offending likelihood. It\'s conducted for sentences over 1 year upon arrival and before early release.\n\nITK: Personal action plan outlining needs and dates. It\'s prepared with your contact person and reviewed monthly/updated yearly.'
          },
          steps: {
            ET: [
              'Ajalugu: kuriteo raskus, varasem käitumine, sõltuvused.',
              'Karistuse ajal: õppimine/töötamine, programmid, käitumine ametnikega.',
              'Vabanemisel: ITK täitmine, ohtlikkus väljaspool, distsiplinaar-ajalugu.'
            ],
            EN: [
              'History: crime severity, previous behavior, substance problems.',
              'During sentence: learning/working, programs, behavior with staff.',
              'For release: ITK completion, danger to others, disciplinary record.'
            ]
          },
          tips: {
            ET: ['ITK täitmine on kriitiline, kui kohus arutab avavanglat või ennetähtaegset vabanemist.'],
            EN: ['ITK completion significantly matters when court discusses early release or open prison placement.']
          }
        },
        {
          id: 'act.programs',
          title: { ET: 'Sotsiaalprogrammid', EN: 'Social Programs' },
          content: {
            ET: 'Sotsiaalprogrammid aitavad tegeleda sõltuvuste, viha ja sotsiaalsete oskustega. Osavõtt parandab võimalusi avavanglasse saamiseks ja ennetähtaegseks vabanemiseks. Toimumine tavaliselt 1–2 korda nädalas rühmades või individuaalselt.',
            EN: 'Social programs help with addiction, anger, and social skills. Participation improves chances for open prison and early release. Sessions usually 1-2 times/week in groups or individually.'
          },
          table: {
            headers: { ET: ['Programm', 'Sessioone', 'Fookus'], EN: ['Program', 'Sessions', 'Focus'] },
            rows: {
              ET: [
                ["Viha juhtimine","9","Emotsioonide kontroll"],
                ["ART (agressiivsuse asendamine)","18","Sotsiaalsed oskused, konfliktid"],
                ["Elustiil 24/7","Muutuv","Sõltuvuskäitumise muutmine"],
                ["Liiklusohutus","Muutuv","Joobes juhtimise probleemid"],
              ],
              EN: [
                ["Anger Management","9","Controlling emotions"],
                ["ART","18","Social skills, conflict resolution"],
                ["Lifestyle 24/7","Varies","Changing addictive behavior"],
                ["Traffic Safety","Varies","Drunk driving problems"],
              ]
            }
          },
          warnings: {
            ET: ['Osalemisest keeldumine võib mõjutada teie riskiskoori. Osalemine üksi ei garanteeri vabanemist — loeb üldine käitumine.'],
            EN: ['Refusal may affect your risk score. Participation alone doesn\'t guarantee early release — it\'s based on overall behavior.']
          }
        },
        {
          id: 'act.learn',
          title: { ET: 'Haridus', EN: 'Education' },
          content: {
            ET: 'Vanglas saab omandada põhiharidust, gümnaasiumiharidust ja kutseharidust. Koolipäev on tavaliselt 9–17. Õppevahendid on tasuta. Saate liituda aastaringselt. Gümnaasiumi/kutseõppe ajal peate osalema ka majandustöödel.',
            EN: 'In prison you can obtain basic, secondary, and vocational education. School day: 9–17. Learning materials provided free. You can join year-round. High school/vocational requires participation in economic work.'
          },
          table: {
            headers: { ET: ['Tüüp', 'Keel', 'Märkused'], EN: ['Type', 'Language', 'Notes'] },
            rows: {
              ET: [
                ["Põhikool","Eesti/Vene","Kohustuslik alla 17a ilma põhihariduseta"],
                ["Gümnaasium","Eesti","Vajalik B1 tase"],
                ["Kutseõpe","Eesti","Vajalik A2; ainult süüdimõistetutele"],
                ["Eesti keel","Kõik tasemed","Hinnatakse ITK käigus"],
              ],
              EN: [
                ["Basic School","EST/RUS","Mandatory if under 17 without basic education"],
                ["Gymnasium","EST","B1 proficiency required"],
                ["Vocational","EST","A2 required; convicted only"],
                ["EST Language","All levels","Assessed during ITK"],
              ]
            }
          },
          warnings: {
            ET: ['Puudumine on lubatud ainult haiguse, arsti või vangla põhjustel. Põhjuseta puudumine on rikkumine.'],
            EN: ['Absence is justified only for illness, doctor, or prison reasons. Unexcused absence is not allowed.']
          }
        },
        {
          id: 'act.work',
          title: { ET: 'Töötamine', EN: 'Working' },
          content: {
            ET: 'Töötamine on vanglas kohustuslik (erandiks pensionärid, haiged ja õppurid). Miinimumpalk on 0.74€/tund. Palk kantakse isikuarvele ja jagatakse standardse valemi järgi.\n\nOhutus: Vangla annab kõik tööriistad ja kaitsevahendid (kindad, prillid). Enne algust toimub ohutuskoolitus.',
            EN: 'Working is mandatory (except retirement age, medical, or students). Minimum salary: €0.74/hour. Pay is credited to personal account and split per standard formula.\n\nSafety: Prison provides tools and protective equipment. Safety training occurs before starting.'
          },
          table: {
            headers: { ET: ['Samm', 'Tegevus'], EN: ['Step', 'What Happens'] },
            rows: {
              ET: [
                ["1. ITK planeerimine","Töötegevuste arutamine kontaktisikuga"],
                ["2. Majandustöö","Esimene ülesanne (koristamine, köök) — tööharjumus"],
                ["3. VEK (Tööstus)","Proovipäev → tööleping (tisler, keevitaja jne)"],
                ["4. Avavangla","Töö leidmine väljaspool vanglat"],
              ],
              EN: [
                ["1. ITK Planning","Discuss work with contact person"],
                ["2. Economic Work","First assignment (cleaning, cooking) — work habit"],
                ["3. VEK (Industry)","Trial day → employment contract"],
                ["4. Open Prison","Find a job outside"],
              ]
            }
          },
          warnings: {
            ET: ['Tööriistade kaotamine või lõhkumine toob kaasa hüvitamise ja võimaliku karistuse. Kaitsevahendite kandmata jätmine toob kaasa töölt eemaldamise.'],
            EN: ['Losing or damaging tools results in compensation and possible punishment. Refusing safety equipment leads to removal.']
          }
        }
      ]
    },
    {
      id: 'release',
      title: { ET: 'Vabanemine', EN: 'Release' },
      desc: { ET: 'Tee vabadusse', EN: 'Path to Freedom' },
      icon: <ArrowRight className="w-10 h-10" />,
      imageUrl: 'https://images.unsplash.com/photo-1506784365847-bbad939e9335?auto=format&fit=crop&w=800&q=80',
      color: 'bg-emerald-50 border-emerald-100 text-emerald-900',
      articles: [
        {
          id: 'rel.open',
          title: { ET: 'Avavangla', EN: 'Open Prison' },
          content: {
            ET: 'Avavanglas on rohkem vabadust: vaba liikumine territooriumil, õppimine/töötamine väljaspool, kojusõidud (kuni 21 päeva aastas). Kojusõidu taotlus esitatakse 3 päeva ette.\n\nElu avavanglas: Võite ise süüa teha. Isiklikud riided lubatud. Pikaajalisi kohtumisi pole (asendatakse kojusõitudega). Erakorraline väljasõit perehaiguse korral (kuni 7 päeva).',
            EN: 'Open prison offers more freedom: free movement on grounds, study/work outside, outings (up to 21 days/year). Outing requests submitted 3 days in advance.\n\nLife: You can cook for yourself. Personal clothing allowed. No long-term meetings (replaced by outings). Emergency outings for family illness (up to 7 days).'
          },
          warnings: {
            ET: ['Reeglite rikkumine (uimastid, loata lahkumine) → tagasi kinnisesse vanglasse.'],
            EN: ['Breaking rules (drugs, leaving without permission) → return to closed prison.']
          },
          tips: {
            ET: ['Eluaegsed vangid, kes on istunud vähemalt 23 aastat, võivad küsida avavanglasse pääsemise kohta.'],
            EN: ['Life sentence inmates who have served at least 23 years may inquire about open prison eligibility.']
          }
        },
        {
          id: 'rel.etev',
          title: { ET: 'Elektrooniline valve', EN: 'Electronic Monitoring' },
          content: {
            ET: 'ETEV võimaldab ennetähtaegset vabanemist koos jala-võruga. See kestab 1–12 kuud. Peate viibima kohtu määratud kodus ja järgima ranget ajakava. Kodus peab olema elekter ja mobiililevi ning teiste elanike nõusolek.\n\nKuidas toimib: Pärast kohut saate kutse kriminaalhooldaja juurde. Seadmed paigaldatakse koju. Võite lahkuda ainult loaga määratud tegevusteks.',
            EN: 'ETEV allows early release with an ankle bracelet. Lasts 1–12 months. Stay at court-designated home and follow strict schedule. Home needs electricity, mobile coverage, and resident consent.\n\nProcess: After court, meet probation officer. Devices installed at home. Only leave with permission for specific tasks.'
          },
          table: {
            headers: { ET: ['Karistus', 'ETEV võimalus pärast'], EN: ['Sentence', 'ETEV Eligible After'] },
            rows: {
              ET: [
                ["Kuni 5 aastat","1/3 karistusest (min 4 kuud)"],
                ["Üle 5 aasta","1/2 karistusest (min 4 kuud)"],
              ],
              EN: [
                ["Up to 5 years","1/3 of sentence (min 4 months)"],
                ["Over 5 years","1/2 of sentence (min 4 months)"],
              ]
            }
          },
          warnings: {
            ET: ['ETEV tingimuste rikkumine → karistus jätkub vanglas. ETEV aega ei arvestata karistuse hulka.'],
            EN: ['Violating ETEV conditions → sentence continues in prison. ETEV time will NOT be deducted from your sentence.']
          }
        },
        {
          id: 'rel.tev',
          title: { ET: 'Kriminaalhooldus', EN: 'Probation (TEV)' },
          content: {
            ET: 'Kriminaalhooldus tähendab vabadust järelevalve all. Peate elama määratud kodus, käima kohtumistel, läbima teste ja vajadusel ravi või programme.\n\nRikkumised: Esmalt vestlus hooldajaga. Tõsise rikkumise korral erakorraline ettekanne kohtule — võib tuua uusi kohustusi, pikendada hooldust (+1a) või saata tagasi vanglasse.',
            EN: 'Probation means freedom under supervision. Live at designated home, attend meetings, pass tests, and undergo treatment/programs if needed.\n\nViolations: First, a meeting with the officer. Serious violations lead to a court report — may result in new obligations, extension (+1y), or return to prison.'
          },
          table: {
            headers: { ET: ['Karistus', 'TEV võimalus pärast'], EN: ['Sentence', 'TEV Eligible After'] },
            rows: {
              ET: [
                ["Kuni 5 aastat","1/2 karistusest (min 4 kuud)"],
                ["Üle 5 aasta","2/3 karistusest (min 4 kuud)"],
              ],
              EN: [
                ["Up to 5 years","1/2 of sentence (min 4 months)"],
                ["Over 5 years","2/3 of sentence (min 4 months)"],
              ]
            }
          },
          tips: {
            ET: ['Raskuste korral rääkige oma hooldajaga koheselt — varajane reageerimine hoiab ära suuremad probleemid.'],
            EN: ['If you encounter difficulties, talk to your officer early — early action prevents bigger problems.']
          }
        }
      ]
    },
    {
      id: 'calc',
      title: { ET: 'Rahakalkulaator', EN: 'Money Calculator' },
      desc: { ET: 'Sissetulekute jaotus', EN: 'Income breakdown' },
      icon: <FileText className="w-10 h-10" />,
      imageUrl: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80',
      color: 'bg-slate-50 border-slate-100 text-slate-900',
      articles: [
        {
          id: 'calc.info',
          title: { ET: 'Kuidas jaotus toimib?', EN: 'How does it work?' },
          content: {
            ET: 'Teie isikuarvele laekuv raha jagatakse automaatselt. Jaotus sõltub võlgnevustest ja sellest, kas vabanemisfond on täis.',
            EN: 'Money in your personal account is automatically divided. The split depends on debts and whether your release fund is full.'
          },
          table: {
            headers: { ET: ['Olukord', 'Võlad', 'Vabanemisfond', 'Vabalt kasutatav'], EN: ['Situation', 'Debts', 'Release Fund', 'Available'] },
            rows: {
              ET: [
                ["Võlgnevusi pole","—","70%","30%"],
                ["On võlgnevusi","50%","20%","30%"],
                ["Fond täis, võlgu pole","—","—","100%"],
                ["Fond täis, on võlgu","50%","—","50%"],
              ],
              EN: [
                ["No debts","—","70%","30%"],
                ["Has debts","50%","20%","30%"],
                ["Fund full, no debts","—","—","100%"],
                ["Fund full, has debts","50%","—","50%"],
              ]
            }
          }
        }
      ]
    },
    {
      id: 'prep',
      title: { ET: 'Vabanemise ettevalmistus', EN: 'Preparation' },
      desc: { ET: 'Sammud vabadusse', EN: 'Steps to freedom' },
      icon: <ShieldCheck className="w-10 h-10" />,
      imageUrl: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80',
      color: 'bg-teal-50 border-teal-100 text-teal-900',
      articles: [
        {
          id: 'prep.steps',
          title: { ET: 'Olulised sammud', EN: 'Important Steps' },
          content: {
            ET: 'Alustage ettevalmistustega mitu kuud enne vabanemist. Teie kontaktisik aitab vajalike taotlustega.',
            EN: 'Start preparations several months before release. Your contact person will help with necessary applications.'
          },
          steps: {
            ET: [
              'Dokumendid & Pank: kontrolli ID kehtivust, uuenda vanglas. Kinnita arve vabanemisfondi jaoks.',
              'Elukoht: võta ühendust omavalitsusega eluaseme või sotsiaalabi saamiseks.',
              'Tervishoid: taga ravi jätkumine, leia perearst, telli digiretseptid.',
              'Rahaseis: koosta võlgade tasumise kava, lepi kohtutäituriga kokku graafik.',
              'Töö: helista Töötukassasse enne vabanemist, registreeri kohe pärast vabanemist.',
              'Toetusvõrgustik: suhtle perega, küsi abi kontaktisikult ja meedikutelt.'
            ],
            EN: [
              'Documents & Bank: check ID validity, renew in prison. Verify account for release funds.',
              'Housing: contact municipality for residence or social assistance.',
              'Healthcare: ensure treatment continues, find family doctor, get digital prescriptions.',
              'Finances: create debt repayment plan, agree on schedule with bailiff.',
              'Employment: call Unemployment Fund before release, register immediately after.',
              'Support: contact family, ask contact person and medics for help.'
            ]
          },
          warnings: {
            ET: ['Vabanemisel tagastage kogu vangla vara. Isiklikke asju ei tohi maha jätta. Kui teil pole riideid, annab vangla need.'],
            EN: ['Return all prison property upon release. Personal items must not be left behind. If you lack clothing, the prison will provide it.']
          }
        }
      ]
    },
    {
      id: 'staff',
      title: { ET: 'Töötajate teejuht', EN: 'Staff Guide' },
      desc: { ET: 'Kellelt küsida abi?', EN: 'Who to ask for help?' },
      icon: <Users className="w-10 h-10" />,
      imageUrl: 'https://images.unsplash.com/photo-1521791136064-7986c2959d43?auto=format&fit=crop&w=800&q=80',
      color: 'bg-indigo-50 border-indigo-100 text-indigo-900',
      articles: [
        {
          id: 'staff.roles',
          title: { ET: 'Rollid ja ülesanded', EN: 'Roles & Tasks' },
          content: {
            ET: 'Iga töötaja tegeleb erinevate ülesannetega. Õige inimese poole pöördumine tähendab kiiremat abi.',
            EN: 'Each employee handles different tasks. Approaching the right person means faster help.'
          },
          steps: {
            ET: [
              'Valvur: päevaringid, loendused, režiimi tagamine, toit, ravimid, telefon/tahvel.',
              'Kontaktisik: peamine tugi, karistuse planeerimine, tegevused (õpe, töö), kirjad, taotlused.',
              'Sotsiaaltöötaja: programmid, pere-töö, motivatsiooni hindamine, soovitused kontaktisikule.',
              'Psühholoog: vaimne tugi, kuulamine, stressiga toimetulek, teraapia, suunamine eriarstile.',
              'Kaplan: hingehoid, palvused, usuline tugi (Lutheri, Õigeusu jne), piiblid/koraanid.',
              'Kriminaalhooldaja: järelevalve pärast vabanemist, riskihindamine, koostöö kohtuga.'
            ],
            EN: [
              'Guard: rounds, counts, regime enforcement, food, meds, phone/tablet assistance.',
              'Contact Person: main support, sentence planning, activities (study, work), letters, applications.',
              'Social Worker: programs, family work, motivation assessment, recommendations.',
              'Psychologist: mental support, listening, stress coping, therapy, referrals.',
              'Chaplain: spiritual care, prayers, religious support, Bibles/Qurans.',
              'Probation Officer: supervision after release, risk assessment, court collaboration.'
            ]
          },
          tips: {
            ET: ['Kõik töötajad on siin teid toetamas. Ärge kartke küsida abi või nõu!'],
            EN: ['All employees are here to support you. Don\'t hesitate to ask for help or advice!']
          }
        }
      ]
    },
    {
      id: 'journey',
      title: { ET: 'Minu teekond', EN: 'My Journey' },
      desc: { ET: 'Ülevaade etappidest', EN: 'Journey overview' },
      icon: <Activity className="w-10 h-10" />,
      imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
      color: 'bg-cyan-50 border-cyan-100 text-cyan-900',
      articles: [
        {
          id: 'journey.overview',
          title: { ET: 'Teekonna etapid', EN: 'Journey Stages' },
          content: {
            ET: 'Teie teekond vanglas koosneb etappidest: saabumine, igapäevaelu, tegevused ja tee vabadusse.',
            EN: 'Your journey in prison consists of stages: arrival, daily life, activities, and the path to freedom.'
          },
          steps: {
            ET: [
              'Saabumine: läbiotsimine, tervisekontroll, baasvajad, isikuarve.',
              'Igapäevaelu: päevakava, telefon, kirjad, söömine, hügieen, liikumine.',
              'Reintegratsioon: riskihindamine, ITK, sotsiaalprogrammid, haridus, töö.',
              'Vabaduse tee: avavangla, ETEV (elektrooniline), TEV (hooldus).',
              'Ettevalmistus: dokumendid, elukoht, töö, tervishoid, toetus.'
            ],
            EN: [
              'Arrival: search, health check, basic needs, account.',
              'Daily Life: schedule, phone, letters, eating, hygiene, movement.',
              'Reintegration: risk assessment, ITK, social programs, education, employment.',
              'Freedom Path: open prison, ETEV (electronic), TEV (probation).',
              'Preparation: documents, housing, employment, healthcare, support.'
            ]
          },
          table: {
            headers: { ET: ['Olulised kuupäevad'], EN: ['Important Dates'] },
            rows: {
              ET: [
                ['📅 Saabumise kuupäev'],
                ['📅 Avavangla (AVO) kuupäev ITK järgi'],
                ['📅 AVO kuupäev seaduse järgi'],
                ['📅 ETEV kuupäev'],
                ['📅 TEV kuupäev'],
                ['📅 Vabanemise kuupäev'],
              ],
              EN: [
                ['📅 Arrival date'],
                ['📅 Open prison (AVO) date from ITK'],
                ['📅 AVO date from sentence'],
                ['📅 ETEV date'],
                ['📅 TEV date'],
                ['📅 Release date'],
              ]
            }
          }
        }
      ]
    }
  ], []);
};
