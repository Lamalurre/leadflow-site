export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  body: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "snabbare-svar-vinner-jobbet",
    title: "Varför den som svarar snabbast vinner jobbet",
    excerpt:
      "Kunder hör sig för hos flera företag samtidigt, och de allra flesta väljer den som hör av sig först. Så påverkar svarstid faktiskt din vinstprocent.",
    date: "2026-06-02",
    body: [
      "De flesta kunder hör sig inte bara för hos ett företag. De skickar samma fråga till tre, fyra, ibland fem olika hantverkare eller firmor samtidigt, och väljer sedan den som hör av sig först med ett vettigt svar.",
      "Det är lätt att tro att det handlar om pris. Det gör det sällan. En kund som just bestämt sig för att byta golv eller boka en flytt vill ha problemet löst, inte jämföra offerter i tre veckor. Den som svarar snabbt får ofta jobbet innan konkurrenterna ens öppnat mejlet.",
      "Jag pratade med en plattsättare för ett tag sedan som räknade på det själv: av tio förfrågningar under en månad hann han svara samma dag på fyra. De fyra blev tre jobb. De sex han svarade på efter två, tre dagar blev ett enda jobb. Ingen skillnad i pris eller kvalitet, bara i hur snabbt han hörde av sig.",
      "Problemet är sällan vilja. De flesta småföretagare vill svara snabbt, men dagen är redan full. Man är uppe på ett tak, under en diskbänk, eller mitt i en offert när mejlet kommer in, och då blir det liggande till kvällen. Eller till morgondagen. Eller till man kommer ihåg det en vecka senare med dåligt samvete.",
      "Det som faktiskt hjälper är inte att jobba snabbare. Det är att separera 'kunden vet att de blivit sedda' från 'du har hunnit tänka igenom ett riktigt svar'. De två sakerna behöver inte hända samtidigt.",
      "Ett enkelt mottagningsbesked, skickat inom minuter, gör mer nytta än man tror. Det behöver inte innehålla pris eller löften, bara en bekräftelse på att förfrågan kommit fram och att ni återkommer. Kunden slutar leta vidare, och du får tid att svara på riktigt när du faktiskt har tid.",
      "Det är i grunden det Sylvor gör åt de företag som använder det: ett säkert autosvar går ut direkt när en förfrågan kommer in, oavsett om det är sex på morgonen eller en söndagkväll, medan det riktiga svaret väntar på att du ska godkänna det.",
      "Skillnaden mellan att kunden väntar och att kunden går vidare till nästa på listan handlar sällan om hur bra du faktiskt är på ditt jobb. Den handlar om vem som hörde av sig först. Det är den enda variabeln värd att fixa innan man ens börjar prata om pris eller kvalitet, och det är också varför vi lagt så mycket tid på just den delen i Sylvor.",
    ],
  },
  {
    slug: "prissatta-offert-pa-en-minut",
    title: "Så prissätter du en offert på under en minut",
    excerpt:
      "Manuell prisberäkning för varje ny förfrågan är den vanligaste tidstjuven för hantverkare. Så automatiserar du det utan att tappa kontrollen över priset.",
    date: "2026-06-08",
    body: [
      "Nästan alla hantverksfirmor jag känner har en prislista i något format. Kronor per kvadratmeter golv, kronor per timme snickeri, ett minimipris för utryckning. Ändå räknas nästan ingen offert direkt utifrån den listan. Den räknas ut för hand, i huvudet, eller i ett kalkylark man letar reda på mitt i något annat.",
      "Det är inte konstigt. Prislistan ligger i en pärm i bilen, eller i en gammal Excel-fil på en dator som inte är öppen just då. Att räkna en offert kräver att man sätter sig ner, och det finns aldrig tid mitt i en arbetsdag.",
      "Så vad händer i praktiken? Antingen skjuts svaret upp till kvällen, eller så gissas priset fram snabbt, ibland för lågt av ren stress, ibland för högt för säkerhets skull. Ingetdera är bra. Ett för lågt pris äter din marginal. Ett för högt pris kostar dig jobbet.",
      "Den bästa lösningen jag sett är inte att sluta bry sig om priset. Det är att göra uträkningen så mekanisk att den inte längre kräver att man sätter sig ner. Samma prislista, samma formel, varje gång, oavsett vem som svarar på förfrågan eller hur stressad dagen är.",
      "Det låter kanske uppenbart, men det är sällan så det fungerar i praktiken. De flesta system för offerthantering är byggda för att du ska fylla i ett formulär efteråt, inte för att räkna fram ett pris automatiskt utifrån en inkommande förfrågan.",
      "Det är den delen Sylvor faktiskt löser bra: du matar in din prislista en gång, och därefter räknas priset fram utifrån vad kunden skrivit, samma uträkning varje gång. Ingen AI som gissar ett pris den tycker låter rimligt, bara samma matematik du redan gör själv, fast direkt.",
      "Det viktiga är att priset alltid visas för dig innan något går ut. Om ett jobb är svårare än vanligt, eller kunden bor extra långt bort, justerar du helt enkelt siffran innan du skickar. Automatiken sparar tiden det tar att räkna, inte ditt omdöme om vad som är rätt pris för just det jobbet.",
      "Har du ingen strukturerad prislista än är det första steget, oavsett vilket system du använder sen. Ett par rader per tjänst, ett grundpris, ett tillägg per kvadratmeter eller timme. Det är investeringen som gör allt annat möjligt.",
    ],
  },
  {
    slug: "tecken-pa-att-du-tappar-leads",
    title: "5 tecken på att du tappar leads i inkorgen",
    excerpt:
      "De flesta missade affärer syns aldrig som en förlorad offert, bara som ett mejl som aldrig fick svar. Så känner du igen mönstret innan det kostar dig för mycket.",
    date: "2026-06-13",
    body: [
      "De flesta förlorade affärer syns aldrig i bokföringen. Det finns ingen rad som säger 'missad förfrågan, 12 000 kr'. Det finns bara ett mejl som aldrig fick svar, och en kund som bokade någon annan istället. Här är fem tecken jag stött på om och om igen hos företag som faktiskt tappar mer än de tror.",
      "Det första är det enklaste att känna igen: du hittar en förfrågan från förra veckan i mellanmappen eller bland reklam, och inser att ingen svarat. Händer det en gång är det mänskligt. Händer det varje månad har du redan förlorat pengar utan att veta hur mycket.",
      "Det andra är svarstider som varierar med humöret på dagen, om man ska vara ärlig. En lugn tisdag får kunden svar inom en timme. En hektisk fredag, med tre jobb på gång och en leverantör som inte svarar, väntar samma kund till måndag. Kunden vet förstås inte varför, den bara märker att svaret dröjde.",
      "Det tredje handlar om att förfrågningar kommer från fler håll än man håller koll på. Mejl, ett formulär på hemsidan, ett meddelande på Facebook, ibland ett sms från ett nummer man inte har sparat. Ju fler kanaler, desto lättare att missa en av dem helt, särskilt om ingen är ansvarig för att kolla alla.",
      "Det fjärde är kanske det mest irriterande för kunden: att behöva upprepa sig. Kunden skickade redan mått och önskat datum i sitt första mejl, men eftersom ingen läste det ordentligt ber man om samma uppgifter igen i svaret. Det känns oprofessionellt, även om avsikten var god.",
      "Det femte är att man helt enkelt inte vet. Hur många förfrågningar kom in förra månaden? Hur många blev jobb? De flesta jag pratat med kan inte svara på det utan att gissa, och utan siffran är det omöjligt att veta om problemet är stort eller obefintligt.",
      "Ingen av de här punkterna kräver ett dyrt system för att lösas. Det kräver egentligen bara att man bestämmer sig för att räkna, och att man sätter upp någon form av automatiskt mottagningsbesked så att ingen förfrågan tystnar helt i väntan på svar.",
      "Vi byggde Sylvor delvis för att den femte punkten, att inte veta, är den som förvånar folk mest när de väl mäter. Siffran är ofta större än man trodde, och det är den insikten som får folk att faktiskt göra något åt de andra fyra.",
    ],
  },
  {
    slug: "hantverkare-offertarbete-per-yrke",
    title: "Golvläggning, badrum eller målning: så skiljer sig offertarbetet",
    excerpt:
      "Alla hantverksjobb prissätts inte likadant. Så ser skillnaden ut mellan de vanligaste jobbtyperna, och vad det betyder för hur snabbt du kan svara.",
    date: "2026-06-18",
    body: [
      "Alla hantverksjobb prissätts inte likadant, och det märks tydligast när man jämför golvläggning, badrumsrenovering och målning sida vid sida. Var och en har sin egen logik för vad som går att svara direkt på och vad som kräver ett besök först.",
      "Golvläggning är det enklaste fallet. Priset styrs i praktiken av yta och materialval, och båda går ofta att få direkt i förfrågan. 'Vi ska lägga nytt golv i vardagsrummet, 27 kvadratmeter, laminat' ger dig i princip allt du behöver för att räkna ett rimligt pris utan att behöva åka dit först.",
      "Badrumsrenovering är rakt motsatsen. Priset beror på rivning, VVS-dragning, kaklets omfattning, om golvbrunn behöver flyttas, hur gammal fastigheten är. Ingen seriös hantverkare skriver ett fast pris på ett badrum utifrån ett mejl, och det ska man inte heller göra. Där handlar snabbt svar om att boka in besöket samma dag man hör av sig, inte om att räkna ett pris i förväg.",
      "Målning ligger någonstans mittemellan. Yta och antal strykningar ger en bra fingervisning, men underlaget spelar in mer än man tror: nymålad panel tar mindre tid än flagnande gammal färg, och utomhusjobb beror på väder och tillgänglighet på ett sätt inomhusjobb inte gör. Ett spann, snarare än ett exakt pris, är oftast det ärligaste svaret där.",
      "Det som förenar de tre är inte priset, det är vilken typ av svar kunden faktiskt behöver få. Ibland är det en siffra. Ibland är det ett bokat besök. Att svara med samma mall oavsett vilket jobb det gäller är ett vanligt misstag, för det gör antingen golvläggningsofferter onödigt långsamma eller badrumsofferter opålitligt snabba.",
      "När vi byggde prislogiken i Sylvor la vi mest tid på just den skillnaden: systemet ska räkna ett direkt pris när underlaget faktiskt räcker, och föreslå ett platsbesök när det inte gör det, istället för att alltid göra samma sak oavsett vilket jobb förfrågan gäller.",
      "Har du inte redan delat upp din egen prislista efter vilka jobb som går att prissätta direkt och vilka som alltid kräver besök är det värt en halvtimme en lugn eftermiddag. Det sparar mer tid i längden än det tar att göra.",
    ],
  },
  {
    slug: "flyttfirmor-svarstid-viktigare-an-pris",
    title: "Flyttfirmor: därför är svarstid viktigare än pris",
    excerpt:
      "Flyttkunder bokar ofta med kort varsel och jämför flera firmor samtidigt. Den som svarar snabbast får jobbet, oftare än den som har lägst pris.",
    date: "2026-06-23",
    body: [
      "Ingen planerar en flytt särskilt långt i förväg, i alla fall inte förfrågningarna som kommer in till en flyttfirma. Kunden bestämmer sig, googlar, och skickar samma fråga till tre eller fyra firmor samma eftermiddag.",
      "Det gör flyttbranschen till ett av de tydligaste exemplen på att svarstid slår pris. Kunden bokar sällan den billigaste. Den bokar den som hörde av sig först med ett rimligt pris och en ledig tid som passar.",
      "Priset för en flytt är sällan enkelt att räkna direkt heller. Det beror på antal rum, våningsplan, om det finns hiss, avstånd mellan adresserna, och ofta även på om det är trångt att parkera flyttbilen. En förfrågan som bara säger '3:a i Solna till Söderort i september' ger dig en riktning, men inte ett färdigt pris.",
      "Det bästa man kan göra där är inte att gissa ihop ett pris ändå, det är att direkt fråga om exakt det som saknas, helst i samma svar som bekräftar att man tagit emot förfrågan. Våningsplan och hiss. Exakt datum, inte bara månad. Två frågor, inte tio.",
      "Jag har sett firmor som skickar en hel enkät med femton frågor som svar på en enkel förfrågan, och det är nästan lika illa som att inte svara alls. Kunden orkar sällan fylla i allt, och hör av sig till nästa firma istället.",
      "Sylvor är byggt för att göra just den avvägningen: läsa vad kunden redan sagt, och bara fråga efter det som faktiskt saknas för att kunna ge ett pris. Inget mer, inget mindre.",
      "Om du driver en flyttfirma och läser det här: se på din senaste veckas förfrågningar och räkna hur lång tid det tog innan första svaret gick ut. Om svaret är mer än några timmar för de som kom in på kvällen, är det troligen där du tappar flest jobb, inte i prissättningen.",
    ],
  },
  {
    slug: "stadfirmor-engangsstad-vs-aterkommande",
    title: "Städfirmor: engångsstäd vs. återkommande, så hanterar du båda i samma inkorg",
    excerpt:
      "De två vanligaste typerna av städuppdrag kräver helt olika uppföljning. Så ser du snabbt skillnaden och prissätter rätt från start.",
    date: "2026-06-27",
    body: [
      "Städbranschen har en särskild utmaning som andra hantverksjobb inte riktigt har: samma inkorg tar emot både engångsjobb och löpande kundrelationer, och de två kräver helt olika sätt att tänka.",
      "Ett flyttstäd eller ett storstäd inför en fest är en enskild transaktion. Kunden vill ha ett pris, en tid, och sen är det klart. Återkommande hemstädning är ett avtal. Kunden förväntar sig samma pris och samma kvalitet varannan vecka, år ut och år in, och relationen är hela poängen.",
      "Blandar man ihop de två i samma svarsmall blir det fel åt båda hållen. Engångskunden får för mycket byråkrati för ett jobb som ska vara över på en dag. Den återkommande kunden blir behandlad som en engångsaffär, vilket sällan känns bra när man faktiskt vill bygga en relation.",
      "Det enklaste sättet att se skillnaden är att läsa vad kunden faktiskt skriver. 'Varannan vecka' eller 'löpande' är återkommande. 'Innan helgen' eller 'vi flyttar ut på fredag' är nästan alltid engångsstäd. Informationen finns oftast redan där, man behöver bara läsa efter den istället för att fråga rakt av.",
      "Det som är genuint värt att fråga om, oavsett typ, är sådant som faktiskt påverkar tidsåtgången: antal rum och badrum, ungefärlig standard, om det är möbler kvar eller tomt. Att istället fråga 'är det engångsstäd eller återkommande' när kunden precis skrev 'varannan vecka' är den typen av dubbelfråga som gör att kunder tappar förtroende för att man ens läst deras mejl.",
      "Det är exakt det Sylvor är tänkt att undvika: läsa vad som redan står där, och bara flagga det som genuint saknas, istället för att köra en generell checklista på varje förfrågan oavsett vad kunden redan svarat.",
      "Har du en mall för svar just nu, kolla igenom den med den här skillnaden i huvudet. Chansen är stor att den ställer minst en fråga som redan besvarats i hälften av förfrågningarna ni får.",
    ],
  },
  {
    slug: "ai-kundservice-utan-att-tappa-kontrollen",
    title: "Så funkar AI-assisterad kundservice utan att tappa den mänskliga kontrollen",
    excerpt:
      "Den vanligaste oron med AI i kundkontakt är att något skickas fel: ett löfte som inte hålls, ett pris som inte stämmer. Så är Sylvor byggt för att aldrig hamna där.",
    date: "2026-07-01",
    body: [
      "Den vanligaste invändningen jag hör när AI och kundkontakt kommer på tal är rimlig, inte överdriven skepsis: vad händer om systemet lovar något jag inte kan hålla, eller skickar iväg ett mejl i mitt namn som jag aldrig skulle skrivit själv?",
      "Det är en befogad oro, och den går att lösa med rätt design snarare än att bara hoppas att AI:n gör rätt varje gång.",
      "Men automation och mänsklig kontroll behöver inte vara varandras motsatser. Ett system kan göra det tidskrävande jobbet, läsa igenom en lång förfrågan, sammanfatta den, räkna ett pris, skriva ett första utkast, utan att för den skull ha rätt att trycka på skicka.",
      "Det är precis så vi har byggt Sylvor, delvis för att jag själv skulle bli obekväm med något annat. Det enda som går ut helt automatiskt är ett kort, säkert mottagningsbesked, alltid samma trygga formulering, aldrig ett pris eller ett löfte om leveranstid. Allt annat, offerten, priset, uppföljningen, är ett förslag som ligger och väntar tills du godkänner det.",
      "Skillnaden mot att skriva allt själv är inte att kontrollen försvinner, det är att du slipper det tunga första steget: att läsa igenom, sammanfatta och räkna fram ett förslag från noll varje gång. Du gör fortfarande sista bedömningen. Du gör den bara snabbare.",
      "Jag tror den här distinktionen, mellan att automatisera arbetet och att automatisera beslutet, är den viktigaste att förstå om man är skeptisk till AI i kundkontakt. De flesta som är oroliga är oroliga för det andra, inte det första, och det är fullt rimligt.",
      "Så om du testar ett system, oavsett vilket, är den enda frågan värd att ställa: vad skickas faktiskt utan att jag godkänt det? Om svaret är 'ingenting utöver ett tryggt mottagningsbesked', är risken du oroar dig för i praktiken inte där.",
    ],
  },
  {
    slug: "vad-kostar-en-missad-forfragan",
    title: "Vad kostar en missad förfrågan egentligen?",
    excerpt:
      "Det känns aldrig som en förlorad affär, bara ett mejl som aldrig fick svar. Så räknar du ut vad det faktiskt kostar dig varje månad.",
    date: "2026-07-04",
    body: [
      "Ingen skriver 'förlorade 45 000 kronor den här månaden' i sin bokföring, av den enkla anledningen att missade förfrågningar aldrig syns som en kostnad. De syns bara som frånvaro av en intäkt som annars hade funnits där, vilket gör dem enkla att helt ignorera.",
      "Det gör siffran svår att ta på allvar förrän man faktiskt räknar på den, så gör det. Hur många förfrågningar missar eller besvarar ni sent varje månad? Multiplicera det med ert genomsnittliga projektvärde. Multiplicera sen med hur stor andel av de missade som troligen hade blivit ett riktigt jobb om ni svarat i tid.",
      "Jag har sett den uträkningen göras av företagare som var övertygade om att de inte tappade särskilt mycket, och som sen blev ganska tysta när siffran landade på fem eller sex siffror per år. Det handlar inte om att de var dåliga på sitt jobb. Det handlar om att dagen bara är full, och inkorgen är det första som får vänta.",
      "Det som gör siffran extra lömsk är att den inte känns som en förlust i stunden. Man märker inte att man tappar en kund, man märker bara att telefonen inte ringer lika ofta som man hoppats, utan att någonsin koppla ihop det med det obesvarade mejlet från tre veckor sen.",
      "Vår egen ROI-kalkylator på hemsidan gör i princip den här uträkningen åt dig: fyll i era egna siffror för antal missade förfrågningar, genomsnittligt projektvärde och en rimlig andel som hade blivit jobb, och se vad det landar på per månad och per år.",
      "Poängen med att räkna är inte att skrämmas. Det är att gå från en känsla, 'vi borde nog svara snabbare', till en siffra man faktiskt kan agera på. Det ena är lätt att skjuta upp. Det andra är svårare att ignorera.",
      "Om du gör räkningen och siffran känns hög är nästa steg inte att gissa dig till en lösning. Det är att se vad som faktiskt får ner den siffran snabbast: ett tryggt mottagningsbesked som går ut på sekunder, och ett pris som räknas fram innan kunden hunnit gå vidare till nästa firma på listan. Det är precis den kombinationen Sylvor är byggt kring.",
    ],
  },
  {
    slug: "epost-eller-formular-vilken-leadkalla",
    title: "E-post eller formulär: vilken leadkälla ska du satsa på?",
    excerpt:
      "De flesta småföretag tar emot förfrågningar via flera kanaler samtidigt utan att egentligen ha valt det. Så ser du vilken som faktiskt levererar.",
    date: "2026-07-08",
    body: [
      "De flesta hantverkare, städfirmor och flyttfirmor jag pratat med tar emot förfrågningar via en blandning av kanaler de aldrig riktigt valt aktivt. Ett formulär på hemsidan som webbyrån satte upp för några år sen, ett mejl som funnits sen starten, kanske ett meddelande på Facebook nu och då. Det har bara växt fram.",
      "Frågan jag ofta får är vilken kanal man borde satsa på. Formulär eller mejl, vilket är bäst? Ärligt svar: det spelar mindre roll än man tror, förutsatt att man faktiskt ser allt som kommer in på samma ställe.",
      "Formulär har en fördel: de tvingar fram struktur. Ett bra formulär ber om vad, var och när innan kunden ens kan skicka in det, vilket sparar en hel fram-och-tillbaka jämfört med ett löst mejl. Nackdelen är tröskeln. En del kunder orkar inte fylla i ett formulär, de vill bara skriva ett mejl och vara klara.",
      "Direktmejl är motsatsen. Lägsta möjliga tröskel för kunden, men ofta minimalt med information. 'Hej, kan ni hjälpa oss?' utan mer är vanligare än man kanske tror, särskilt från kunder som redan känner till er sen tidigare eller fått er rekommenderad.",
      "Sociala medier ligger nånstans mittemellan, beroende på plattform. Ett meddelande på Instagram är ofta lika kort som ett mejl, men kommer med en helt annan förväntan på snabbt svar, eftersom appen i sig känns direkt och personlig på ett sätt mejl inte gör.",
      "Det som faktiskt spelar roll, mer än vilken kanal som är bäst, är att ingen av dem hamnar i ett hörn ingen kollar. Jag har sett firmor med ett perfekt formulär på hemsidan som samtidigt missar hälften av sina Facebook-meddelanden, för att ingen kommer ihåg att kolla den appen varje dag.",
      "Det som faktiskt spelar roll är inte vilken kanal som är bäst, utan att ingenting tystnar bara för att det kom in på ett ovanligt sätt. Att samla alla kanaler i samma inkorg, med samma automatik oavsett väg in, är den delen som är svårast att lappa ihop själv och lättast att lösa med rätt verktyg. Det är precis vad Sylvor gör: vidarebefordra formulärnotiser och direktmejl till samma adress, så blir båda automatiskt ett lead i samma inkorg, oavsett vilken väg de kom in.",
    ],
  },
  {
    slug: "fran-forfragan-till-godkant-svar",
    title: "Från förfrågan till godkänt svar: en genomgång av Sylvors flöde",
    excerpt:
      "Vad händer egentligen mellan att en kund skickar en förfrågan och att du klickar godkänn? Här är hela kedjan, steg för steg.",
    date: "2026-07-12",
    body: [
      "Jag får ofta frågan vad som egentligen händer mellan att en kund skickar en förfrågan och att vi säger att svaret är klart att skicka. Så här ser kedjan ut i Sylvor, steg för steg, utan att skala bort något.",
      "Först kommer förfrågan in, precis som den alltid gjort, via formulär, ett vidarebefordrat mejl, eller ett direktmeddelande. Ett säkert mottagningsbesked går ut inom loppet av sekunder, samma trygga text varje gång, så att kunden vet att de blivit sedda innan någon människa ens hunnit öppna mejlet.",
      "Sen läses texten. Inte bara ytligt, utan tillräckligt noga för att plocka ut vad kunden faktiskt frågar efter, vilken typ av jobb det gäller, och om det finns någon brådska i tonen. Ett mejl som säger 'helst innan fredag' prioriteras annorlunda än ett som bara säger 'när ni har tid'.",
      "Om något viktigt saknas, ett mått, ett datum, en adress, flaggas det direkt, istället för att gissas eller ignoreras. Det är den delen som gör mest skillnad i praktiken, för det är precis de detaljerna som annars glöms bort och tvingar fram en extra mejlrunda senare.",
      "Priset räknas fram utifrån din egen prislista, den du själv matat in, inte utifrån vad ett språkmodell tycker låter rimligt. Samma uträkning, varje gång, oavsett vem eller vad som svarar på förfrågan.",
      "Utifrån allt det skrivs ett svarsförslag, i den ton du valt, baserat på vad kunden ursprungligen skrev. Det är ett utkast, inte ett färdigt svar, och det ligger och väntar tills du tittar på det.",
      "Då kommer det viktigaste steget: du läser igenom det. Justerar priset om något känns fel, ändrar en formulering om tonen inte stämmer, eller skickar det som det är om allt ser bra ut. Ingenting går till kunden utan att du sagt ja till just det.",
      "Svarar kunden tillbaka börjar samma sak om, men nu med hela den tidigare konversationen som underlag, inte bara det senaste mejlet. Det är därför systemet aldrig frågar om något kunden redan svarat på tidigare i tråden, en detalj som lät självklar när vi byggde den men som visade sig vara förvånansvärt ovanlig i andra verktyg vi testat.",
      "Hela poängen med upplägget, om jag ska sammanfatta det i en mening, är att du ska få tillbaka tiden det tar att läsa och räkna, utan att ge upp kontrollen över vad som faktiskt skickas i ditt namn.",
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
