import type { Translation } from "./types";

export const lt = {
  //------ Header

  header: {
    work: "Darbai",
    services: "Paslaugos",
    about: "Apie mane",
    contacts: "Kontaktai",
  },
  //------ Hero section
  hero: {
    eyebrow: "Freelance Web Developer",
    title: "Jūsų verslas nusipelno geresnės interneto svetainės",
    description:
      "Nuo pirmos idėjos iki paskutinio pikselio kuriu greitas, modernias interneto svetaines, pritaikytas jūsų verslui.",
    button: "Kurkime drauge",
  },

  //------ Selected Works section
  selectedWork: {
    eyebrow: "Atrinkti darbai",
    title: "Projektai, kuriuos sukūriau — ir tai, kas laukia toliau",
  },
  //------- Project cards
  projects: {
    visitWebsite: "Peržiūrėti svetainę",

    items: {
      "event-masters": {
        title: "Event Masters",
        description:
          "Moderni interneto svetainė, skirta renginių studijai pristatyti savo paslaugas ir pritraukti potencialių klientų.",
      },

      "mano-servisas": {
        title: "Mano servisas",
        description:
          "Paslaugų svetainė, skirta automobilių servisui pristatyti savo paslaugas ir palengvinti registraciją.",
      },
    },
  },
  //--------- Coming Soon Card
  comingSoon: {
    nextProject: "Kitas projektas",
    title: "Jau greitai",
    descriptionTitle: "Netrukus laukia kažkas naujo",
    description: "Šiuo metu kuriama.",
  },
  //--------- Service section
  services: {
    eyebrow: "Paslaugos",
    title: "Ką galiu sukurti jūsų verslui",

    items: [
      {
        number: "01",
        title: "Verslo interneto svetainės",
        description:
          "Modernios interneto svetainės įmonėms, paslaugų teikėjams ir asmeniniams prekių ženklams.",
      },
      {
        number: "02",
        title: "Nukreipimo puslapiai",
        description:
          "Tikslinės svetainės, sukurtos konkrečiam produktui, paslaugai ar rinkodaros kampanijai.",
      },
      {
        number: "03",
        title: "Internetinių svetainių atnaujinimas",
        description:
          "Pasenusią interneto svetainę paverčiu modernia, greita ir patogia naudoti.",
      },
    ],
  },
  //-------- Pricing
  prices: {
    eyebrow: "Kainos",
    title: "Paprasta kainodara. Jokių netikėtumų.",

    items: [
      {
        title: "Nukreipimo puslapiai",
        price: "Nuo €300",
        description:
          "Tiksliniai puslapiai konkrečiam produktui, paslaugai ar kampanijai.",
      },
      {
        title: "Verslo svetainės",
        price: "Nuo €500",
        description:
          "Modernios svetainės, pritaikytos jūsų verslui, klientams ir tikslams.",
      },
      {
        title: "Svetainės atnaujinimas",
        price: "Nuo €400",
        description:
          "Atnaujinkite pasenusią svetainę švaresniu dizainu, geresne vartotojo patirtimi ir didesniu našumu.",
      },
    ],
    includes: {
      title: "Į kiekvieną svetainę įeina:",
      items: [
        "Individualus prisitaikantis dizainas",
        "Optimizavimas mobiliesiems įrenginiams",
        "Kontaktų forma",
        "Bazinis SEO paruošimas",
        "Našumo optimizavimas",
        "Svetainės paleidimas",
        "Tiesioginis bendravimas su programuotoju",
      ],
    },
    note: "Galutinė kaina priklauso nuo projekto apimties ir reikalavimų.",
    cta: {
      title: "Nežinote, ko jums reikia?",
      description:
        "Papasakokite apie savo verslą, o aš pasiūlysiu tinkamiausią sprendimą.",
      button: "Aptarkime",
    },
  },
  //--------- About section
  about: {
    eyebrow: "Sukurta verslui",

    title:
      "Kuriu ne tiesiog interneto svetaines. Kuriu skaitmeninę patirtį, paremtą jūsų verslo poreikiais.",

    description:
      "Tiesiogiai dirbau tiek su klientais, tiek su verslais, todėl suprantu, kad interneto svetainė turi atlikti savo funkciją — ne tik gerai atrodyti.",

    description2:
      "Kiekvienas verslas yra skirtingas. Todėl netikiu universaliu sprendimu, tinkančiu visiems. Skiriu laiko suprasti, kuo užsiimate, ką norite pasiekti ir kokią užduotį turi atlikti jūsų interneto svetainė.",

    description3:
      "Nesvarbu, ar jums reikia paprasto nukreipimo puslapio, ar išsamios verslo svetainės — daugiausia dėmesio skiriu aiškiai struktūrai, apgalvotam dizainui ir našumui, kad lankytojai iš karto suprastų, ką siūlote ir ką turėtų daryti toliau.",
  },
  //---------- Contact (CTA) section
  contact: {
    eyebrow: "Kurkime drauge",
    title: "Turite idėją projektui?",
    title2: "Sukurkime jį kartu.",
    description:
      "Turite idėją interneto svetainei? Papasakokite apie ją ir kartu nuspręsime, ką galime sukurti.",
    button: "Pradėkime projektą",
  },
} satisfies Translation;
