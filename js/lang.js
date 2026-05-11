const translations = {
  de: {
    // Nav
    'nav.vita':          'Vita',
    'nav.lehre':         'Lehre',
    'nav.forschung':     'Forschung',
    'nav.kooperation':   'Kooperation',
    'nav.kontakt':       'Kontakt',

    // Hero
    'hero.subtitle':     'Professor für Versicherungsökonomie und Cyberversicherung &middot; TH Köln',
    'hero.tagline':      'Wo Versicherung<br>auf <em>CX</em> trifft.',
    'hero.body':         'Ich war dabei, als aus einfachen Kundenlisten ausgefeilte Kampagnensysteme wurden. 14 Jahre lang habe ich bei AXA und SIGNAL IDUNA Bestandskundenkampagnen von Grund auf gebaut — Briefe, E-Mails, Landingpages, dunkle Verarbeitung. Dieses Wissen bringe ich jetzt als Professor in Forschung und Lehre.',
    'hero.cta.primary':  'Kooperation anfragen',
    'hero.cta.secondary':'Forschung entdecken',

    // Stats
    'stats.years.num':      '14 Jahre',
    'stats.years.label':    'Industrieerfahrung',
    'stats.companies.num':  '2 Top-Konzerne',
    'stats.companies.label':'AXA &amp; SIGNAL IDUNA',
    'stats.prof.num':       '1 Professur',
    'stats.prof.label':     'Versicherungsökonomie &amp; Cyber',
    'stats.focus.num':      '360° CX',
    'stats.focus.label':    'Kampagnen-Expertise',

    // Vita
    'vita.heading':     'Vita',
    'vita.thk.year':    'Seit März 2026',
    'vita.thk.title':   'Professor für Versicherungsökonomie und Cyberversicherung',
    'vita.thk.desc':    'Meine Lehre und Forschung dreht sich um das, was ich wirklich kenne: Customer Experience, digitale Kampagnen und Cyberversicherung — immer mit dem Praxisbezug aus 14 Jahren Industrie. Lehrgebiete 2026: Versicherungsbetriebslehre, Grundlagen BWL und Versicherungen in der Gesamtwirtschaft.',
    'vita.si.year':     'April 2021 – März 2026',
    'vita.si.title':    'Leiter Chapter CRM Vertrieb &amp; Center of Excellence Marketing, Daten &amp; KI',
    'vita.si.desc':     'Das war meine Kernrolle im Bestandskundengeschäft: CRM-Strategie für alle Versicherungssparten, ein 17-köpfiges Team, drei Product Owner. Ich habe die CRM-Systemlandschaft verantwortet, die Kampagnenlogik aufgebaut und nebenbei eine Datenplattform mit KI-Anbindung aus dem Boden gestampft — im Rahmen der Google-Partnerschaft.',
    'vita.axa.year':    '2012–2021',
    'vita.axa.title':   'Verschiedene Führungsrollen — Prokurist, Innovation, Vorstandsassistent',
    'vita.axa.desc':    'Neun Jahre, vier Rollen — immer tiefer rein. Als Prokurist leitete ich drei Teams in der internationalen und betrieblichen Krankenversicherung und erzielte 40% Wachstum in zwei Jahren. Als Gründungsmitglied der Innovationsabteilung entwickelte ich die WayGuard-App und brachte die BlaBlaCar-Kooperation nach Deutschland. Und als Vorstandsassistent führte ich Cyber Risk erstmals ins Produktportfolio ein.',
    'vita.phd.year':    '2008–2012',
    'vita.phd.title':   'Promotion (Dr. rer. pol.)',
    'vita.phd.desc':    'Promotion an der Cologne Graduate School zum Thema „Forward Integration into Retailing" — mit Stipendium der Exzellenzinitiative und Zeit als Gastdoktorand an der ESADE Business School in Barcelona.',
    'vita.cems.year':   '2002–2007',
    'vita.cems.title':  'Diplom Volkswirt &amp; CEMS Master International Management',
    'vita.cems.desc':   'Diplom Volkswirt an der Universität zu Köln — Note 1,9, unter den besten 5% des Jahrgangs. Kombiniert mit dem internationalen CEMS Master an der ESADE Business School in Barcelona.',

    // Tabs
    'tab.lehre':        'Lehre',
    'tab.forschung':    'Forschung',
    'tab.kooperation':  'Kooperation',

    // Lehre
    'lehre.tag.semester': 'Sommersemester 2026',
    'lehre.tag.core':    'Kernveranstaltung',
    'lehre.tag.module':  'Modul',
    'lehre.cyber.title': 'Cyberversicherung',
    'lehre.cyber.desc':  'Grundlagen, Risikomodelle, Produkte und regulatorische Anforderungen moderner Cyberversicherung.',
    'lehre.cyber.t1':    'Cyber-Risikobewertung &amp; Modellierung',
    'lehre.cyber.t2':    'Regulierung (NIS2, DORA, BaFin)',
    'lehre.cyber.t3':    'Produktentwicklung &amp; Underwriting',
    'lehre.vbl1.title':  'Versicherungsbetriebslehre',
    'lehre.vbl1.desc':   'Einführung in Grundlagen und operative Steuerung der Versicherungswirtschaft.',
    'lehre.vbl1.t1':     'Vertrieb &amp; Vertriebswege',
    'lehre.vbl1.t2':     'CRM in der Versicherung',
    'lehre.vbl1.t3':     'Asset-Liability-Management',
    'lehre.vbl2.title':  'Versicherungsbetriebslehre II',
    'lehre.vbl2.desc':   'Vertiefung mit Fokus auf Regulierung, Rückversicherung und digitale Transformation.',
    'lehre.vbl2.t1':     'Rückversicherung',
    'lehre.vbl2.t2':     'KI in der Versicherung',
    'lehre.vbl2.t3':     'Solvency II, VVG, VAG',

    // Forschung
    'forschung.cx.title':    'Customer Experience &amp; Kampagnen-Optimierung',
    'forschung.cx.desc':     'Wie sieht der perfekte Kampagnen-Flow im Bestandskundengeschäft aus? Ich kenne jeden Schritt aus der Praxis: von der Zielgruppenanalyse über Briefe, E-Mails und Landingpages bis zur Conversion-Messung und dunklen Verarbeitung. Meine Forschung macht diesen Prozess messbar besser — für Marketing, Vertrieb und Service.',
    'forschung.ai.title':    'KI als Werkzeug für besseres Kundenmanagement',
    'forschung.ai.desc':     'KI ist kein Selbstzweck — sie ist ein kraftvolles Werkzeug. Ich forsche daran, wie Machine Learning und generative KI konkret helfen: Bestandskunden besser segmentieren, Kampagnen personalisieren und den richtigen Kunden zur richtigen Zeit mit dem richtigen Angebot erreichen.',
    'forschung.cyber.title': 'Cyberversicherung',
    'forschung.cyber.desc':  'Als Inhaber der Professur für Cyberversicherung kenne ich das Thema aus zwei Perspektiven: aus der Praxis (Einführung von Cyber Risk bei AXA) und aus der Forschung — Risikomodellierung, Produktentwicklung, NIS2 und DORA.',

    // Kampagnen-Flow
    'flow.heading': 'Der perfekte Kampagnen-Flow',
    'flow.sub':     'Von der ersten Idee bis zur messbaren Umsetzung — jeder Schritt zählt.',
    'flow.s1':      'Idee &amp; Strategie',
    'flow.s2':      'Zielgruppen-Selektion',
    'flow.s3':      'Kanal &amp; Creative',
    'flow.s4':      'Landingpage',
    'flow.s5':      'Dunkle Verarbeitung',
    'flow.s6':      'Messung &amp; Reporting',
    'flow.s7':      'Optimierung',

    // Kooperation
    'coop.heading':       'Lass uns zusammenarbeiten',
    'coop.body':          'Ich kenne den vollständigen Kampagnen-Flow im Bestandskundengeschäft aus eigener Erfahrung — vom ersten Datenpull bis zur Landingpage, von der A/B-Testung bis zur dunklen Verarbeitung im Backend. Das ist kein Lehrbuchstoff, das ist gelebte Praxis aus 14 Jahren bei AXA und SIGNAL IDUNA.',
    'coop.focus':         'Mich interessieren besonders Projekte, bei denen <strong>Marketing, Vertrieb und Service</strong> wirklich zusammenarbeiten — und bei denen am Ende messbar mehr Kunden gebunden, reaktiviert oder begeistert werden.',
    'coop.f1':            'Praxisprojekte mit Studierenden',
    'coop.f2':            'Gemeinsame Forschungsprojekte',
    'coop.f3':            'Vorträge &amp; Workshops zum Kampagnen-Flow',
    'coop.f4':            'Beratung &amp; Sparring',
    'coop.cta':           'Gespräch anfragen',
    'coop.focus.heading': 'Womit ich helfen kann',
    'coop.tag1':          'Kampagnen-Flow',
    'coop.tag2':          'CRM &amp; Bestandskunden',
    'coop.tag3':          'Digitale Kampagnen',
    'coop.tag4':          'Customer Journey',
    'coop.tag5':          'KI-gestütztes Marketing',
    'coop.tag6':          'Cyberversicherung',
    'coop.tag7':          'Datenplattformen',

    // Kontakt
    'kontakt.heading':       'Kontakt',
    'kontakt.body':          'Für Kooperationsanfragen, Abschlussarbeiten oder Vortragseinladungen — direkte Nachrichten bevorzugt.',
    'kontakt.booking':       'Termin buchen',
    'kontakt.booking.label': 'Termin',
    'kontakt.email':         'E-Mail',
    'kontakt.institution':   'Institution',
    'kontakt.linkedin':      'Profil ansehen',
    'kontakt.form.heading':  'Direkte Nachricht',
    'kontakt.form.name':     'Name',
    'kontakt.form.email':    'E-Mail',
    'kontakt.form.subject':  'Betreff',
    'kontakt.form.message':  'Nachricht',
    'kontakt.form.send':     'Nachricht senden',

    // Footer
    'footer.imprint': 'Impressum',
    'footer.privacy': 'Datenschutz',
  },

  en: {
    // Nav
    'nav.vita':          'CV',
    'nav.lehre':         'Teaching',
    'nav.forschung':     'Research',
    'nav.kooperation':   'Cooperation',
    'nav.kontakt':       'Contact',

    // Hero
    'hero.subtitle':     'Professor of Insurance Economics and Cyber Insurance &middot; TH Köln',
    'hero.tagline':      'Where Insurance<br>meets <em>CX</em>.',
    'hero.body':         'I was there when simple customer lists turned into sophisticated campaign systems. For 14 years at AXA and SIGNAL IDUNA, I built existing-customer campaigns from the ground up — letters, emails, landing pages, back-end processing. Now I bring that hands-on knowledge into research and teaching.',
    'hero.cta.primary':  'Request Cooperation',
    'hero.cta.secondary':'Explore Research',

    // Stats
    'stats.years.num':      '14 Years',
    'stats.years.label':    'Industry Experience',
    'stats.companies.num':  '2 Leading Companies',
    'stats.companies.label':'AXA &amp; SIGNAL IDUNA',
    'stats.prof.num':       '1 Professorship',
    'stats.prof.label':     'Insurance Economics &amp; Cyber',
    'stats.focus.num':      '360° CX',
    'stats.focus.label':    'Campaign Expertise',

    // Vita
    'vita.heading':     'CV',
    'vita.thk.year':    'Since March 2026',
    'vita.thk.title':   'Professor of Insurance Economics and Cyber Insurance',
    'vita.thk.desc':    'My teaching and research centres on what I genuinely know: customer experience, digital campaigns and cyber insurance — always grounded in 14 years of real industry practice. Courses 2026: Insurance Management, Fundamentals of Business Administration, and Insurance in the Overall Economy.',
    'vita.si.year':     'April 2021 – March 2026',
    'vita.si.title':    'Head of Chapter CRM Sales &amp; Centre of Excellence Marketing, Data &amp; AI',
    'vita.si.desc':     'This was my core role in existing-customer business: CRM strategy across all insurance lines, a 17-person team, three product owners. I owned the CRM system landscape, built the campaign logic, and alongside all that built a data platform with AI integration — through the Google partnership.',
    'vita.axa.year':    '2012–2021',
    'vita.axa.title':   'Multiple Leadership Roles — Authorised Signatory, Innovation, Board Assistant',
    'vita.axa.desc':    'Nine years, four roles — always going deeper. As authorised signatory I led three teams in international and occupational health insurance, achieving 40% growth in two years. As a founding member of the innovation unit I developed the WayGuard app and launched the BlaBlaCar partnership in Germany. As board assistant I first introduced cyber risk into the product portfolio.',
    'vita.phd.year':    '2008–2012',
    'vita.phd.title':   'PhD (Dr. rer. pol.)',
    'vita.phd.desc':    'Doctoral thesis on "Forward Integration into Retailing" at Cologne Graduate School — funded by the Excellence Initiative scholarship, with time as visiting doctoral researcher at ESADE Business School in Barcelona.',
    'vita.cems.year':   '2002–2007',
    'vita.cems.title':  'Diplom in Economics &amp; CEMS Master in International Management',
    'vita.cems.desc':   'Diplom in Economics at Universität zu Köln — grade 1.9, top 5% of year. Combined with the international CEMS Master at ESADE Business School, Barcelona.',

    // Tabs
    'tab.lehre':        'Teaching',
    'tab.forschung':    'Research',
    'tab.kooperation':  'Cooperation',

    // Lehre
    'lehre.tag.semester': 'Summer Semester 2026',
    'lehre.tag.core':    'Core Course',
    'lehre.tag.module':  'Module',
    'lehre.cyber.title': 'Cyber Insurance',
    'lehre.cyber.desc':  'Fundamentals, risk models, products, and regulatory requirements of modern cyber insurance.',
    'lehre.cyber.t1':    'Cyber risk assessment &amp; modelling',
    'lehre.cyber.t2':    'Regulation (NIS2, DORA, BaFin)',
    'lehre.cyber.t3':    'Product development &amp; underwriting',
    'lehre.vbl1.title':  'Insurance Management',
    'lehre.vbl1.desc':   'Introduction to the fundamentals and operative management of the insurance industry.',
    'lehre.vbl1.t1':     'Distribution &amp; sales channels',
    'lehre.vbl1.t2':     'CRM in insurance',
    'lehre.vbl1.t3':     'Asset-liability management',
    'lehre.vbl2.title':  'Insurance Management II',
    'lehre.vbl2.desc':   'Advanced topics: regulation, reinsurance, and digital transformation.',
    'lehre.vbl2.t1':     'Reinsurance',
    'lehre.vbl2.t2':     'AI in insurance',
    'lehre.vbl2.t3':     'Solvency II, VVG, VAG',

    // Forschung
    'forschung.cx.title':    'Customer Experience &amp; Campaign Optimisation',
    'forschung.cx.desc':     'What does the perfect campaign flow for existing customers look like? I know every step from practice: from target group analysis through letters, emails and landing pages to conversion measurement and back-end processing. My research makes this process measurably better — for marketing, sales and service.',
    'forschung.ai.title':    'AI as a Tool for Better Customer Management',
    'forschung.ai.desc':     'AI is not an end in itself — it\'s a powerful tool. My research focuses on how machine learning and generative AI help concretely: better segmentation of existing customers, personalised campaigns, and reaching the right customer at the right time with the right offer.',
    'forschung.cyber.title': 'Cyber Insurance',
    'forschung.cyber.desc':  'As chair professor for cyber insurance I know the subject from two angles: practice (introducing cyber risk at AXA) and research — risk modelling, product development, NIS2 and DORA.',

    // Kampagnen-Flow
    'flow.heading': 'The Perfect Campaign Flow',
    'flow.sub':     'From the first idea to measurable execution — every step counts.',
    'flow.s1':      'Idea &amp; Strategy',
    'flow.s2':      'Target Group Selection',
    'flow.s3':      'Channel &amp; Creative',
    'flow.s4':      'Landing Page',
    'flow.s5':      'Back-end Processing',
    'flow.s6':      'Measurement &amp; Reporting',
    'flow.s7':      'Optimisation',

    // Kooperation
    'coop.heading':       'Let\'s work together',
    'coop.body':          'I know the complete campaign flow in existing-customer business from personal experience — from the first data pull to the landing page, from A/B testing to back-end processing. This isn\'t textbook knowledge, it\'s lived practice from 14 years at AXA and SIGNAL IDUNA.',
    'coop.focus':         'I\'m particularly interested in projects where <strong>marketing, sales and service</strong> genuinely work together — and where the result is measurably more customers retained, reactivated or delighted.',
    'coop.f1':            'Student practice projects',
    'coop.f2':            'Joint research projects',
    'coop.f3':            'Talks &amp; workshops on campaign flow',
    'coop.f4':            'Consulting &amp; sparring',
    'coop.cta':           'Request a conversation',
    'coop.focus.heading': 'How I can help',
    'coop.tag1':          'Campaign Flow',
    'coop.tag2':          'CRM &amp; Existing Customers',
    'coop.tag3':          'Digital Campaigns',
    'coop.tag4':          'Customer Journey',
    'coop.tag5':          'AI-powered Marketing',
    'coop.tag6':          'Cyber Insurance',
    'coop.tag7':          'Data Platforms',

    // Kontakt
    'kontakt.heading':       'Contact',
    'kontakt.body':          'For cooperation inquiries, theses, or speaking invitations — direct messages preferred.',
    'kontakt.booking':       'Book a Meeting',
    'kontakt.booking.label': 'Meeting',
    'kontakt.email':         'Email',
    'kontakt.institution':   'Institution',
    'kontakt.linkedin':      'View profile',
    'kontakt.form.heading':  'Send a Message',
    'kontakt.form.name':     'Name',
    'kontakt.form.email':    'Email',
    'kontakt.form.subject':  'Subject',
    'kontakt.form.message':  'Message',
    'kontakt.form.send':     'Send message',

    // Footer
    'footer.imprint': 'Legal Notice',
    'footer.privacy': 'Privacy Policy',
  }
};

let currentLang = 'de';

function applyTranslations(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const text = translations[lang][key];
    if (text !== undefined) {
      el.innerHTML = text;
    }
  });
  document.documentElement.lang = lang;
  // Button shows the OTHER language (what you'll switch TO)
  document.getElementById('langToggle').textContent = lang === 'de' ? 'EN' : 'DE';
}

document.getElementById('langToggle').addEventListener('click', () => {
  currentLang = currentLang === 'de' ? 'en' : 'de';
  applyTranslations(currentLang);
  localStorage.setItem('orbach-lang', currentLang);
});

(function init() {
  const saved   = localStorage.getItem('orbach-lang');
  const browser = navigator.language && navigator.language.startsWith('en') ? 'en' : 'de';
  currentLang   = saved || browser;
  applyTranslations(currentLang);
})();
