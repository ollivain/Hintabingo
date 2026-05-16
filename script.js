const challenges = [
  {
    category: "Tuotteet",
    title: "Paljon maksaa Coca-Cola 1,5 l K-Citymarketissa?",
    description: "Tuotebingo: yksi 1,5 litran Coca-Cola-pullo pantin kanssa.",
    price: 3.89,
    image: "assets/cocacola.svg",
    imageAlt: "Kuvitus Coca-Cola-pullosta",
    background: "linear-gradient(135deg, #fff0b8, #ffd1be)",
    sourceName: "K-Ruoka / K-Citymarket",
    sourceUrl: "https://www.k-ruoka.fi/kauppa/tuote/coca-cola-15l-6415600501811",
    sourceChecked: "14.5.2026",
  },
  {
    category: "Tuotteet",
    title: "Paljon maksaa Coca-Cola Zero 1,5 l K-Citymarketissa?",
    description: "Tuotebingo: yksi 1,5 litran Coca-Cola Zero -pullo pantin kanssa.",
    price: 3.25,
    image: "assets/cocacola.svg",
    imageAlt: "Kuvitus kolapullosta",
    background: "linear-gradient(135deg, #dfe8ff, #f4f7ff)",
    sourceName: "K-Ruoka / K-Citymarket",
    sourceUrl: "https://www.k-ruoka.fi/kauppa/tuote/coca-cola-zero-15l-6415600502078",
    sourceChecked: "14.5.2026",
  },
  {
    category: "Tuotteet",
    title: "Paljon maksaa Pepsi Max 1,5 l K-Citymarketissa?",
    description: "Tuotebingo: yksi 1,5 litran Pepsi Max -pullo pantin kanssa.",
    price: 3.25,
    image: "assets/cocacola.svg",
    imageAlt: "Kuvitus virvoitusjuomapullosta",
    background: "linear-gradient(135deg, #d9efff, #d6e2ff)",
    sourceName: "K-Ruoka / K-Citymarket",
    sourceUrl: "https://www.k-ruoka.fi/kauppa/tuote/pepsi-max-15l-kmp-6413600015147",
    sourceChecked: "14.5.2026",
  },
  {
    category: "Tuotteet",
    title: "Paljon maksaa Pepsi Max 0,33 l 6-pack K-Citymarketissa?",
    description: "Tuotebingo: kuuden tölkin Pepsi Max -pakkaus pantteineen.",
    price: 4.95,
    image: "assets/cocacola.svg",
    imageAlt: "Kuvitus virvoitusjuomapakkauksesta",
    background: "linear-gradient(135deg, #e4f1ff, #d8fff5)",
    sourceName: "K-Ruoka / K-Citymarket",
    sourceUrl: "https://www.k-ruoka.fi/kauppa/tuote/pepsi-max-033l-tlk-6-pack-6413605015555",
    sourceChecked: "14.5.2026",
  },
  {
    category: "Tuotteet",
    title: "Paljon maksaa Juhla Mokka 500 g Prismassa?",
    description: "Tuotebingo: Paulig Juhla Mokka 500 g suodatinjauhatus.",
    price: 8.38,
    image: "assets/kahvipaketti.svg",
    imageAlt: "Kuvitus Juhla Mokka -tyylisestä kahvipaketista",
    background: "linear-gradient(135deg, #d9efff, #c7dcff)",
    sourceName: "S-kaupat / Prisma",
    sourceUrl: "https://www.s-kaupat.fi/tuote/paulig-juhla-mokka-kahvi-suodatinjauhatus-500g/6411300000494/1000",
    sourceChecked: "14.5.2026",
  },
  {
    category: "Tuotteet",
    title: "Paljon maksaa Fazerin Sininen 180 g K-Citymarketissa?",
    description: "Tuotebingo: Karl Fazer Sininen maitosuklaalevy 180 g.",
    price: 3.97,
    image: "assets/fazer-sininen.svg",
    imageAlt: "Kuvitus sinisestä suklaalevystä",
    background: "linear-gradient(135deg, #dcfff7, #c7f4dd)",
    sourceName: "K-Ruoka / K-Citymarket",
    sourceUrl: "https://www.k-ruoka.fi/kauppa/tuote/karl-fazer-suklaalevy-180g-sininen-6416453095014",
    sourceChecked: "14.5.2026",
  },
  {
    category: "Tuotteet",
    title: "Paljon maksaa Fazer Omar 180 g K-Citymarketissa?",
    description: "Tuotebingo: Karl Fazer Omar -suklaalevy 180 g.",
    price: 4.17,
    image: "assets/fazer-sininen.svg",
    imageAlt: "Kuvitus suklaalevystä",
    background: "linear-gradient(135deg, #fff0d8, #ffe0ef)",
    sourceName: "K-Ruoka / K-Citymarket",
    sourceUrl: "https://www.k-ruoka.fi/kauppa/tuote/karl-fazer-suklaalevy-180g-omar-6416453095168",
    sourceChecked: "14.5.2026",
  },
  {
    category: "Tuotteet",
    title: "Paljon maksaa Oululainen Reissumies 235 g K-Citymarketissa?",
    description: "Tuotebingo: Reissumies täysjyväruisleipä 4 kpl / 235 g.",
    price: 0.79,
    image: "assets/ruisleipa.svg",
    imageAlt: "Kuvitus ruisleivästä",
    background: "linear-gradient(135deg, #fff0d8, #f5d4a8)",
    sourceName: "K-Ruoka / K-Citymarket",
    sourceUrl: "https://www.k-ruoka.fi/kauppa/tuote/oululainen-reissumies-4kpl235g-6411402197108",
    sourceChecked: "14.5.2026",
  },
  {
    category: "Tuotteet",
    title: "Paljon maksaa Pirkka kevytmaito 1 l K-Citymarketissa?",
    description: "Tuotebingo: yksi litra Pirkka suomalaista kevytmaitoa.",
    price: 0.99,
    image: "assets/maito.svg",
    imageAlt: "Kuvitus maitotölkistä",
    background: "linear-gradient(135deg, #e7f7ff, #ffffff)",
    sourceName: "K-Ruoka / K-Citymarket",
    sourceUrl: "https://www.k-ruoka.fi/kauppa/tuote/pirkka-kevytmaito-1-l-6410405082657",
    sourceChecked: "14.5.2026",
  },
  {
    category: "Tuotteet",
    title: "Paljon maksaa Valio ruokakerma 2 dl K-Citymarketissa?",
    description: "Tuotebingo: Valio Hyvä suomalainen Arki ruokakerma 10 % 2 dl.",
    price: 0.59,
    image: "assets/kerma.svg",
    imageAlt: "Kuvitus ruokakermapurkista",
    background: "linear-gradient(135deg, #fff3cf, #fff9ea)",
    sourceName: "K-Ruoka / K-Citymarket",
    sourceUrl: "https://www.k-ruoka.fi/kauppa/tuote/valio-hyva-suom-arki-kerma-10-2dl-uht-6408430015481",
    sourceChecked: "14.5.2026",
  },
  {
    category: "Tuotteet",
    title: "Paljon maksaa Ben's Original riisi 1 kg K-Citymarketissa?",
    description: "Tuotebingo: Ben's Original pitkäjyväinen riisi 1 kg.",
    price: 3.77,
    image: "assets/riisi.svg",
    imageAlt: "Kuvitus riisipaketista",
    background: "linear-gradient(135deg, #fff2d8, #e8ffd9)",
    sourceName: "K-Ruoka / K-Citymarket",
    sourceUrl: "https://www.k-ruoka.fi/kauppa/tuote/bens-original-pitkajyvainen-riisi-1kg-5410673005861",
    sourceChecked: "14.5.2026",
  },
  {
    category: "Tuotteet",
    title: "Paljon maksaa Estrella Ranch & Sourcream 275 g K-Citymarketissa?",
    description: "Tuotebingo: yksi Estrella Ranch & Sourcream -sipsipussi 275 g.",
    price: 3.35,
    image: "assets/sipsit.svg",
    imageAlt: "Kuvitus sipsipussista",
    background: "linear-gradient(135deg, #fff0b8, #ffe3c7)",
    sourceName: "K-Ruoka / K-Citymarket",
    sourceUrl: "https://www.k-ruoka.fi/kauppa/tuote/estrella-sipsipussi-275g-ranch--sourcre-7310532105382",
    sourceChecked: "14.5.2026",
  },
  {
    category: "Tuotteet",
    title: "Paljon maksaa Pepsodent Super Fluor 75 ml K-Citymarketissa?",
    description: "Tuotebingo: koko perheen perushammastahna.",
    price: 1.79,
    image: "assets/pepsodent.svg",
    imageAlt: "Kuvitus hammastahnatuubista",
    background: "linear-gradient(135deg, #ffe0da, #ffd4ab)",
    sourceName: "K-Ruoka / K-Citymarket",
    sourceUrl: "https://www.k-ruoka.fi/kauppa/tuote/pepsodent-hammastahna-75ml-super-fluor-6411000004303",
    sourceChecked: "14.5.2026",
  },
  {
    category: "Tuotteet",
    title: "Paljon maksaa Pringles Original 185 g K-Citymarketissa?",
    description: "Tuotebingo: yksi Pringles Original -sipsipurkki 185 g.",
    price: 1,
    image: "assets/sipsit.svg",
    imageAlt: "Tuotekuva Pringles Original -sipseistä",
    background: "linear-gradient(135deg, #fff0d8, #ffe4b8)",
    sourceName: "K-Ruoka / K-Citymarket",
    sourceUrl: "https://www.k-ruoka.fi/kauppa/tuote/pringles-185g-original-5053990167807",
    sourceChecked: "16.5.2026",
  },
  {
    category: "Tuotteet",
    title: "Paljon maksaa Red Bull 0,25 l K-Citymarketissa?",
    description: "Tuotebingo: yksi Red Bull -energiajuomatölkki pantteineen.",
    price: 1.5,
    image: "assets/cocacola.svg",
    imageAlt: "Tuotekuva Red Bull -energiajuomasta",
    background: "linear-gradient(135deg, #e7edff, #fff6d8)",
    sourceName: "K-Ruoka / K-Citymarket",
    sourceUrl: "https://www.k-ruoka.fi/kauppa/tuote/red-bull-energiajuoma-025l-tlk-9002490100773",
    sourceChecked: "16.5.2026",
  },
  {
    category: "Tuotteet",
    title: "Paljon maksaa Monster Energy 0,5 l K-Citymarketissa?",
    description: "Tuotebingo: yksi Monster Energy -tölkki pantteineen.",
    price: 2.28,
    image: "assets/cocacola.svg",
    imageAlt: "Tuotekuva Monster Energy -energiajuomasta",
    background: "linear-gradient(135deg, #e8ffdc, #d9efff)",
    sourceName: "K-Ruoka / K-Citymarket",
    sourceUrl: "https://www.k-ruoka.fi/kauppa/tuote/monster-energy-drink-05l-tlk-5060166692698",
    sourceChecked: "16.5.2026",
  },
  {
    category: "Tuotteet",
    title: "Paljon maksaa Monster Ultra White 0,5 l K-Citymarketissa?",
    description: "Tuotebingo: yksi Monster Ultra White -energiajuomatölkki pantteineen.",
    price: 2.49,
    image: "assets/cocacola.svg",
    imageAlt: "Tuotekuva Monster Ultra White -energiajuomasta",
    background: "linear-gradient(135deg, #ffffff, #e7edff)",
    sourceName: "K-Ruoka / K-Citymarket",
    sourceUrl: "https://www.k-ruoka.fi/kauppa/tuote/monster-energy-ultra-white-05l-tlk-5060517880804",
    sourceChecked: "16.5.2026",
  },
  {
    category: "Tuotteet",
    title: "Paljon maksaa Nutella 350 g K-Citymarketissa?",
    description: "Tuotebingo: yksi Nutella hasselpähkinä-kaakaolevite 350 g.",
    price: 4.45,
    image: "assets/fazer-sininen.svg",
    imageAlt: "Tuotekuva Nutella-levitteestä",
    background: "linear-gradient(135deg, #fff0d8, #f7d7c2)",
    sourceName: "K-Ruoka / K-Citymarket",
    sourceUrl: "https://www.k-ruoka.fi/kauppa/tuote/nutella-hasselpahkina-kaakaolevite-350g-0000080177173",
    sourceChecked: "16.5.2026",
  },
  {
    category: "Tuotteet",
    title: "Paljon maksaa Oreo Original 154 g K-Citymarketissa?",
    description: "Tuotebingo: yksi Oreo Original -täytekeksipaketti 154 g.",
    price: 2.14,
    image: "assets/fazer-sininen.svg",
    imageAlt: "Tuotekuva Oreo-kekseistä",
    background: "linear-gradient(135deg, #eef3ff, #f4eaff)",
    sourceName: "K-Ruoka / K-Citymarket",
    sourceUrl: "https://www.k-ruoka.fi/kauppa/tuote/oreo-original-taytekeksi-154g-7622300336738",
    sourceChecked: "16.5.2026",
  },
  {
    category: "Tuotteet",
    title: "Paljon maksaa Haribo Matador Mix 275 g K-Citymarketissa?",
    description: "Tuotebingo: yksi Haribo Matador Mix -makeispussi 275 g.",
    price: 2.84,
    image: "assets/makupalamix.svg",
    imageAlt: "Tuotekuva Haribo Matador Mix -makeisista",
    background: "linear-gradient(135deg, #fff0b8, #ffd1be)",
    sourceName: "K-Ruoka / K-Citymarket",
    sourceUrl: "https://www.k-ruoka.fi/kauppa/tuote/haribo-matador-mix-275g-5701090068059",
    sourceChecked: "16.5.2026",
  },
  {
    category: "Tuotteet",
    title: "Paljon maksaa Fairy Original 450 ml K-Citymarketissa?",
    description: "Tuotebingo: yksi Fairy Original -astianpesuaine 450 ml.",
    price: 3.15,
    image: "assets/pepsodent.svg",
    imageAlt: "Tuotekuva Fairy-astianpesuaineesta",
    background: "linear-gradient(135deg, #e4fff8, #dce9ff)",
    sourceName: "K-Ruoka / K-Citymarket",
    sourceUrl: "https://www.k-ruoka.fi/kauppa/tuote/fairy-450ml-original-astianpesuaine-8700216667999",
    sourceChecked: "16.5.2026",
  },
  {
    category: "Tuotteet",
    title: "Paljon maksaa Lotus Soft Embo 8 rll K-Citymarketissa?",
    description: "Tuotebingo: Lotus Soft Embo wc-paperi 8 rullaa.",
    price: 4.79,
    image: "assets/kauppakassi.svg",
    imageAlt: "Tuotekuva Lotus Soft Embo -wc-paperista",
    background: "linear-gradient(135deg, #f4eaff, #ffffff)",
    sourceName: "K-Ruoka / K-Citymarket",
    sourceUrl: "https://www.k-ruoka.fi/kauppa/tuote/lotus-soft-embo-wc-paperi-8rll-valk-6413200330206",
    sourceChecked: "16.5.2026",
  },
  {
    category: "Tuotteet",
    title: "Paljon maksaa Lotus Soft Embo 16 rll K-Citymarketissa?",
    description: "Tuotebingo: Lotus Soft Embo wc-paperi 16 rullan perhepakkaus.",
    price: 8.39,
    image: "assets/kauppakassi.svg",
    imageAlt: "Tuotekuva Lotus Soft Embo -wc-paperista",
    background: "linear-gradient(135deg, #fff8ec, #f4eaff)",
    sourceName: "K-Ruoka / K-Citymarket",
    sourceUrl: "https://www.k-ruoka.fi/kauppa/tuote/lotus-soft-embo-wc-paperi-16rl-perhepak-6413200330404",
    sourceChecked: "16.5.2026",
  },
  {
    category: "Tuotteet",
    title: "Paljon maksaa Atria Lihapullat ja Muusi 300 g K-Citymarketissa?",
    description: "Tuotebingo: yksi Atria Kunnon Arki Lihapullat ja Muusi -mikroateria.",
    price: 2.45,
    image: "assets/kauppakassi.svg",
    imageAlt: "Tuotekuva Atria Lihapullat ja Muusi -ateriasta",
    background: "linear-gradient(135deg, #fff3cf, #fff9ea)",
    sourceName: "K-Ruoka / K-Citymarket",
    sourceUrl: "https://www.k-ruoka.fi/kauppa/tuote/atria-kunnon-arki-lihapull-ja-muusi-300g-6407860060146",
    sourceChecked: "16.5.2026",
  },
  {
    category: "Tuotteet",
    title: "Paljon maksaa Valio voi 500 g K-Citymarketissa?",
    description: "Tuotebingo: yksi Valio voi 500 g suolaamaton paketti.",
    price: 6.12,
    image: "assets/kerma.svg",
    imageAlt: "Tuotekuva Valio voista",
    background: "linear-gradient(135deg, #fff7d6, #ffffff)",
    sourceName: "K-Ruoka / K-Citymarket",
    sourceUrl: "https://www.k-ruoka.fi/kauppa/tuote/valio-palavoi-500g-suolaamaton-6408430030026",
    sourceChecked: "16.5.2026",
  },
  {
    category: "Tuotteet",
    title: "Paljon maksaa Dove suihkusaippua 250 ml Tokmannilla?",
    description: "Tuotebingo: Dove Essential Hydrate -suihkusaippua 250 ml.",
    price: 2.89,
    image: "assets/pepsodent.svg",
    imageAlt: "Kuvitus hygieniatuotteesta",
    background: "linear-gradient(135deg, #eef7ff, #fff4f8)",
    sourceName: "Tokmanni",
    sourceUrl: "https://www.tokmanni.fi/suihkusaippua-dove-250-ml-essential-hydrate-8720181466472",
    sourceChecked: "14.5.2026",
  },
  {
    category: "Tuotteet",
    title: "Paljon maksaa Apple AirPods 4 Verkkokauppa.comissa?",
    description: "Tuotebingo: Apple AirPods 4 -nappikuulokkeet.",
    price: 149,
    image: "assets/airpods.svg",
    imageAlt: "Kuvitus langattomista nappikuulokkeista",
    background: "linear-gradient(135deg, #f0e5ff, #d7f1ff)",
    sourceName: "Verkkokauppa.com",
    sourceUrl: "https://www.verkkokauppa.com/fi/product/956087/Apple-AirPods-4-nappikuulokkeet-MXP63",
    sourceChecked: "14.5.2026",
  },
  {
    category: "Tuotteet",
    title: "Paljon maksaa Sony WH-1000XM5 Verkkokauppa.comissa?",
    description: "Tuotebingo: Sony WH-1000XM5 -vastamelukuulokkeet, sininen.",
    price: 299,
    image: "assets/airpods.svg",
    imageAlt: "Kuvitus kuulokkeista",
    background: "linear-gradient(135deg, #e4ecff, #f4eaff)",
    sourceName: "Verkkokauppa.com",
    sourceUrl: "https://www.verkkokauppa.com/fi/product/870517/Sony-WH-1000XM5-vastamelukuulokkeet-sininen",
    sourceChecked: "14.5.2026",
  },
  {
    category: "Tuotteet",
    title: "Paljon maksaa iPhone 16 128 Gt Verkkokauppa.comissa?",
    description: "Tuotebingo: Apple iPhone 16 128 Gt -puhelin, sinivihreä.",
    price: 799,
    image: "assets/puhelin.svg",
    imageAlt: "Kuvitus älypuhelimesta",
    background: "linear-gradient(135deg, #e4fff8, #dce9ff)",
    sourceName: "Verkkokauppa.com",
    sourceUrl: "https://www.verkkokauppa.com/fi/product/955673/Apple-iPhone-16-128-Gt-puhelin-sinivihrea-MYED3",
    sourceChecked: "14.5.2026",
  },
  {
    category: "Tuotteet",
    title: "Paljon maksaa Samsung Galaxy A56 128 Gt Verkkokauppa.comissa?",
    description: "Tuotebingo: Samsung Galaxy A56 5G 128/8 Gt -puhelin.",
    price: 349,
    image: "assets/puhelin.svg",
    imageAlt: "Kuvitus älypuhelimesta",
    background: "linear-gradient(135deg, #e8ffdc, #e7edff)",
    sourceName: "Verkkokauppa.com",
    sourceUrl: "https://www.verkkokauppa.com/fi/product/979961/Samsung-Galaxy-A56-5G-puhelin-128-8-Gt-oliivinvihrea",
    sourceChecked: "14.5.2026",
  },
  {
    category: "Tuotteet",
    title: "Paljon maksaa Apple iPad 10,9\" 64 Gt Verkkokauppa.comissa?",
    description: "Tuotebingo: Apple iPad 10,9\" 64 Gt WiFi 2022 -tabletti.",
    price: 349.99,
    image: "assets/puhelin.svg",
    imageAlt: "Kuvitus tabletista",
    background: "linear-gradient(135deg, #eef3ff, #fff8ec)",
    sourceName: "Verkkokauppa.com",
    sourceUrl: "https://www.verkkokauppa.com/fi/product/837469/Apple-iPad-10-9-64-Gt-WiFi-2022-tabletti-hopea-MCM74",
    sourceChecked: "14.5.2026",
  },
  {
    category: "Tuotteet",
    title: "Paljon maksaa PlayStation 5 Slim Verkkokauppa.comissa?",
    description: "Tuotebingo: PS5 Slim -pelikonsoli 1 Tt SSD-levyllä.",
    price: 599.99,
    image: "assets/ps5.svg",
    imageAlt: "Kuvitus pelikonsolista ja ohjaimesta",
    background: "linear-gradient(135deg, #fff1c7, #ffd7c2)",
    sourceName: "Verkkokauppa.com",
    sourceUrl: "https://www.verkkokauppa.com/fi/product/904693/PlayStation-5-Slim-PS5-pelikonsoli",
    sourceChecked: "14.5.2026",
  },
  {
    category: "Tuotteet",
    title: "Paljon maksaa PS5 Slim Fortnite -paketti Verkkokauppa.comissa?",
    description: "Tuotebingo: PlayStation 5 Slim Fortnite -pelikonsolipaketti.",
    price: 379.99,
    image: "assets/ps5.svg",
    imageAlt: "Kuvitus pelikonsolista",
    background: "linear-gradient(135deg, #fff1c7, #ead7ff)",
    sourceName: "Verkkokauppa.com",
    sourceUrl: "https://www.verkkokauppa.com/fi/product/964094/PlayStation-5-Slim-Fortnite-PS5-pelikonsolipaketti",
    sourceChecked: "14.5.2026",
  },
  {
    category: "Tuotteet",
    title: "Paljon maksaa Nintendo Switch 2 Verkkokauppa.comissa?",
    description: "Tuotebingo: Nintendo Switch 2 -pelikonsoli, musta.",
    price: 569,
    image: "assets/switch2.svg",
    imageAlt: "Kuvitus Nintendo Switch -tyylisestä pelikonsolista",
    background: "linear-gradient(135deg, #d8fff5, #d6ead4)",
    sourceName: "Verkkokauppa.com",
    sourceUrl: "https://www.verkkokauppa.com/fi/product/974720/Nintendo-Switch-2-pelikonsoli-musta",
    sourceChecked: "14.5.2026",
  },
  {
    category: "Tuotteet",
    title: "Paljon maksaa CCM Tacks Int-99 -jääkiekkomaila XXL:ssä?",
    description: "Tuotebingo: CCM Tac Stick Grip Int-99 intermediate -jääkiekkomaila.",
    price: 149,
    image: "assets/jaakiekkomaila.svg",
    imageAlt: "Kuvitus jääkiekkomailasta urheilukaupassa",
    background: "linear-gradient(135deg, #e7edff, #d6e7f7)",
    sourceName: "XXL",
    sourceUrl: "https://www.xxl.fi/ccm-tac-stick-grip-int-99-intermediate/p/1263403_1_Style",
    sourceChecked: "14.5.2026",
  },
  {
    category: "Tuotteet",
    title: "Paljon maksaa CCM Tacks juniorimaila XXL:ssä?",
    description: "Tuotebingo: CCM Tac Stick Grip-99 nuorten jääkiekkomaila.",
    price: 72,
    image: "assets/jaakiekkomaila.svg",
    imageAlt: "Kuvitus jääkiekkomailasta",
    background: "linear-gradient(135deg, #ecf2ff, #d8fff5)",
    sourceName: "XXL",
    sourceUrl: "https://www.xxl.fi/ccm-tac-stick-grip-99-nuorten-jaakiekkomaila/p/1263404_1_Style",
    sourceChecked: "14.5.2026",
  },
];

const stateKey = "arvaaHintaState";
const localPhotosByEan = {
  "6415600501811": "assets/product-images/coca-cola.jpg",
  "6415600502078": "assets/product-images/coca-cola-zero.jpg",
  "6413600015147": "assets/product-images/pepsi-max.jpg",
  "6413605015555": "assets/product-images/pepsi-max-6pack.jpg",
  "6416453095014": "assets/product-images/fazer-sininen.jpg",
  "6416453095168": "assets/product-images/fazer-omar.jpg",
  "6411402197108": "assets/product-images/reissumies.jpg",
  "6410405082657": "assets/product-images/pirkka-maito.jpg",
  "6408430015481": "assets/product-images/valio-kerma.jpg",
  "5410673005861": "assets/product-images/bens-riisi.jpg",
  "7310532105382": "assets/product-images/estrella-ranch.jpg",
  "6411000004303": "assets/product-images/pepsodent.jpg",
  "5053990167807": "assets/product-images/pringles-original.jpg",
  "9002490100773": "assets/product-images/red-bull.jpg",
  "5060166692698": "assets/product-images/monster-energy.jpg",
  "5060517880804": "assets/product-images/monster-ultra-white.jpg",
  "0000080177173": "assets/product-images/nutella.jpg",
  "7622300336738": "assets/product-images/oreo.jpg",
  "5701090068059": "assets/product-images/haribo-matador.jpg",
  "8700216667999": "assets/product-images/fairy.jpg",
  "6413200330206": "assets/product-images/lotus-embo-8.jpg",
  "6413200330404": "assets/product-images/lotus-embo-16.jpg",
  "6407860060146": "assets/product-images/atria-lihapullat-muusi.jpg",
  "6408430030026": "assets/product-images/valio-voi.jpg",
};

const photoOverrides = [
  {
    test: "tokmanni.fi/suihkusaippua-dove",
    photo: "assets/product-images/dove-hydrate.jpg",
  },
  {
    test: "s-kaupat.fi/tuote/paulig-juhla-mokka",
    photo: "assets/product-images/juhla-mokka.webp",
  },
  {
    test: "verkkokauppa.com/fi/product/956087",
    photo: "assets/product-images/airpods.jpg",
  },
  {
    test: "verkkokauppa.com/fi/product/904693",
    photo: "assets/product-images/ps5.jpg",
  },
  {
    test: "verkkokauppa.com/fi/product/964094",
    photo: "assets/product-images/ps5.jpg",
  },
  {
    test: "verkkokauppa.com/fi/product/974720",
    photo: "assets/product-images/switch2.jpg",
  },
  {
    test: "verkkokauppa.com/fi/product/955673",
    photo: "assets/product-images/iphone16.jpg",
  },
  {
    test: "verkkokauppa.com/fi/product/870517",
    photo: "assets/product-images/sony-xm5.jpg",
  },
  {
    test: "verkkokauppa.com/fi/product/979961",
    photo: "assets/product-images/samsung-a56.jpg",
  },
  {
    test: "verkkokauppa.com/fi/product/837469",
    photo: "assets/product-images/ipad.jpg",
  },
  {
    test: "xxl.fi/ccm-tac-stick-grip-int-99",
    photo: "assets/product-images/ccm-tacks-int.jpg",
  },
  {
    test: "xxl.fi/ccm-tac-stick-grip-99-nuorten",
    photo: "assets/product-images/ccm-tacks-junior.jpg",
  },
];
const elements = {
  streakCount: document.querySelector("#streakCount"),
  challengeMedia: document.querySelector("#challengeMedia"),
  challengeImage: document.querySelector("#challengeImage"),
  categoryBadge: document.querySelector("#categoryBadge"),
  challengeDate: document.querySelector("#challengeDate"),
  challengeTitle: document.querySelector("#challengeTitle"),
  challengeDescription: document.querySelector("#challengeDescription"),
  guessForm: document.querySelector("#guessForm"),
  guessInput: document.querySelector("#guessInput"),
  guessButton: document.querySelector("#guessButton"),
  scoreRing: document.querySelector("#scoreRing"),
  scoreValue: document.querySelector("#scoreValue"),
  scoreHint: document.querySelector("#scoreHint"),
  scoreInfoButton: document.querySelector("#scoreInfoButton"),
  scoreRule: document.querySelector("#scoreRule"),
  sourceNote: document.querySelector("#sourceNote"),
  resultStats: document.querySelector("#resultStats"),
  actualPrice: document.querySelector("#actualPrice"),
  userGuess: document.querySelector("#userGuess"),
  difference: document.querySelector("#difference"),
  percentOff: document.querySelector("#percentOff"),
  shareButton: document.querySelector("#shareButton"),
  nextButton: document.querySelector("#nextButton"),
  shareText: document.querySelector("#shareText"),
  playedCount: document.querySelector("#playedCount"),
  bestScore: document.querySelector("#bestScore"),
  averageScore: document.querySelector("#averageScore"),
  categoryChips: document.querySelectorAll(".category-chip"),
};

if (elements.scoreRule && elements.scoreRing) {
  elements.scoreRing.before(elements.scoreRule);
}

let selectedCategory = "Tuotteet";
let appState = loadState();
let roundNumber = appState.totalRounds || 0;
let currentChallenge = getChallengeForRound(selectedCategory, roundNumber);
let activeCelebration;

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(stateKey));
    return {
      lastPlayedDate: saved?.lastPlayedDate || null,
      streak: Number(saved?.streak) || 0,
      totalRounds: Number(saved?.totalRounds) || 0,
      guesses: Array.isArray(saved?.guesses) ? saved.guesses : [],
    };
  } catch {
    return { lastPlayedDate: null, streak: 0, totalRounds: 0, guesses: [] };
  }
}

function saveState() {
  localStorage.setItem(stateKey, JSON.stringify(appState));
}

function getTodayKey() {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Europe/Helsinki",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());
}

function dateSeed(dateKey) {
  return [...dateKey].reduce((sum, char) => sum + char.charCodeAt(0), 0);
}

function getDailyChallenge() {
  const todayKey = getTodayKey();
  return challenges[dateSeed(todayKey) % challenges.length];
}

function getChallengePool(category) {
  if (category === "Tuotteet") {
    return challenges;
  }

  return challenges.filter((challenge) => challenge.category === category);
}

function getChallengeForRound(category, round) {
  const pool = getChallengePool(category);
  const todayKey = getTodayKey();
  return pool[(dateSeed(todayKey) + round) % pool.length];
}

function getProductPhoto(challenge) {
  const override = photoOverrides.find((item) => challenge.sourceUrl.includes(item.test));

  if (override) {
    return override.photo;
  }

  const kRuokaEan = challenge.sourceUrl.match(/-(\d{8,14})(?:$|[/?#])/);

  if (challenge.sourceUrl.includes("k-ruoka.fi") && kRuokaEan && localPhotosByEan[kRuokaEan[1]]) {
    return localPhotosByEan[kRuokaEan[1]];
  }

  return challenge.image;
}

function formatEuro(value) {
  return new Intl.NumberFormat("fi-FI", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: value >= 100 ? 0 : 2,
  }).format(value);
}

function parseGuess(value) {
  const cleaned = value.replace(/\s/g, "").replace(",", ".").replace(/[^\d.]/g, "");
  return Number(cleaned);
}

function calculateResult(guess, actual) {
  const difference = Math.abs(guess - actual);
  const percentOff = (difference / actual) * 100;
  const score = Math.max(0, Math.round(100 - percentOff * 2));
  return { difference, percentOff, score };
}

function previousDateKey(dateKey) {
  const date = new Date(`${dateKey}T12:00:00`);
  date.setDate(date.getDate() - 1);
  return new Intl.DateTimeFormat("en-CA", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
}

function updateStreak(todayKey) {
  if (appState.lastPlayedDate === todayKey) {
    return;
  }

  appState.streak = appState.lastPlayedDate === previousDateKey(todayKey) ? appState.streak + 1 : 1;
  appState.lastPlayedDate = todayKey;
}

function renderChallenge() {
  elements.categoryBadge.textContent = currentChallenge.category;
  elements.challengeDate.textContent = new Intl.DateTimeFormat("fi-FI", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date()) + ` · hintabingo ${roundNumber + 1}`;
  elements.challengeTitle.textContent = currentChallenge.title;
  elements.challengeDescription.textContent = currentChallenge.description;
  elements.challengeImage.onerror = () => {
    elements.challengeImage.onerror = null;
    elements.challengeImage.src = currentChallenge.image;
  };
  elements.challengeImage.src = getProductPhoto(currentChallenge);
  elements.challengeImage.alt = currentChallenge.imageAlt;

  resetResult();
  renderStats();
}

function resetResult() {
  clearPerfectCelebration();
  elements.guessInput.value = "";
  elements.guessInput.disabled = false;
  elements.guessButton.disabled = false;
  elements.guessButton.textContent = "Lukitse arvaus";
  elements.scoreValue.textContent = "?";
  elements.scoreRing.style.setProperty("--score-deg", "0deg");
  elements.scoreHint.textContent = "Syötä arvaus ja katso, osuiko hinta kohdilleen.";
  elements.resultStats.hidden = true;
  elements.sourceNote.hidden = true;
  elements.sourceNote.textContent = "";
  elements.shareButton.hidden = true;
  elements.nextButton.hidden = true;
  elements.shareText.hidden = true;
}

function showResult(guess, result, shouldAnimate = true) {
  elements.guessInput.value = new Intl.NumberFormat("fi-FI").format(guess);
  elements.guessInput.disabled = true;
  elements.guessButton.disabled = true;
  elements.guessButton.textContent = "Arvaus lukittu";
  elements.scoreValue.textContent = result.score;
  elements.scoreRing.style.setProperty("--score-deg", `${result.score * 3.6}deg`);
  elements.scoreHint.textContent = getScoreMessage(result.score);
  elements.sourceNote.hidden = false;
  elements.sourceNote.innerHTML = `Lähde: <a href="${currentChallenge.sourceUrl}" target="_blank" rel="noreferrer">${currentChallenge.sourceName}</a>, tarkistettu ${currentChallenge.sourceChecked}.`;
  elements.resultStats.hidden = false;
  elements.actualPrice.textContent = formatEuro(currentChallenge.price);
  elements.userGuess.textContent = formatEuro(guess);
  elements.difference.textContent = formatEuro(result.difference);
  elements.percentOff.textContent = `${result.percentOff.toFixed(1).replace(".", ",")} %`;
  elements.shareButton.hidden = false;
  elements.nextButton.hidden = false;
  elements.shareText.hidden = true;
  elements.shareText.value = buildShareText(result);

  if (shouldAnimate) {
    elements.scoreRing.animate(
      [
        { transform: "scale(0.94)" },
        { transform: "scale(1.04)" },
        { transform: "scale(1)" },
      ],
      { duration: 520, easing: "cubic-bezier(.2,.8,.2,1)" }
    );

    if (result.score === 100) {
      triggerPerfectCelebration();
    }
  }
}

function clearPerfectCelebration() {
  if (activeCelebration) {
    activeCelebration.remove();
    activeCelebration = null;
  }
  document.body.classList.remove("perfect-score-active");
}

function triggerPerfectCelebration() {
  clearPerfectCelebration();
  document.body.classList.add("perfect-score-active");

  activeCelebration = document.createElement("div");
  activeCelebration.className = "perfect-burst";
  activeCelebration.setAttribute("aria-hidden", "true");

  const toast = document.createElement("div");
  toast.className = "perfect-toast";
  toast.textContent = "Täydet 100 pistettä!";
  activeCelebration.appendChild(toast);

  const colors = ["#8b5cf6", "#f97316", "#22c55e", "#06b6d4", "#facc15", "#ec4899"];

  for (let index = 0; index < 46; index += 1) {
    const piece = document.createElement("span");
    piece.className = "confetti-bit";
    piece.style.setProperty("--x", `${Math.random() * 100}vw`);
    piece.style.setProperty("--dx", `${Math.random() * 220 - 110}px`);
    piece.style.setProperty("--delay", `${Math.random() * 0.18}s`);
    piece.style.setProperty("--spin", `${Math.random() * 720 - 360}deg`);
    piece.style.background = colors[index % colors.length];
    activeCelebration.appendChild(piece);
  }

  document.body.appendChild(activeCelebration);
  playPerfectSound();

  window.setTimeout(() => {
    clearPerfectCelebration();
  }, 2200);
}

function playPerfectSound() {
  const AudioContext = window.AudioContext || window.webkitAudioContext;

  if (!AudioContext) {
    return;
  }

  const context = new AudioContext();
  const master = context.createGain();
  master.gain.setValueAtTime(0.0001, context.currentTime);
  master.gain.exponentialRampToValueAtTime(0.18, context.currentTime + 0.02);
  master.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + 1.05);
  master.connect(context.destination);

  [523.25, 659.25, 783.99, 1046.5].forEach((frequency, index) => {
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    const start = context.currentTime + index * 0.08;
    oscillator.type = "triangle";
    oscillator.frequency.setValueAtTime(frequency, start);
    gain.gain.setValueAtTime(0.0001, start);
    gain.gain.exponentialRampToValueAtTime(0.34, start + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.26);
    oscillator.connect(gain).connect(master);
    oscillator.start(start);
    oscillator.stop(start + 0.32);
  });

  window.setTimeout(() => {
    context.close();
  }, 1300);
}

function getScoreMessage(score) {
  if (score === 100) return "Täydellinen osuma. Hintavaisto kävi kuumana.";
  if (score >= 95) return "Täysosuman tuntua. Nyt oli hintavaisto kohdillaan.";
  if (score >= 80) return "Hyvä osuma. Pieni heitto, mutta vahva kierros.";
  if (score >= 55) return "Kelpo arvaus, mutta hintalappu ei ihan auennut.";
  if (score > 0) return "Hinta karkasi selvästi. Seuraava kierros voi korjata paljon.";
  return "Täysi ohiheitto, mutta juuri siksi tämä on hauskaa.";
}

function buildShareText(result) {
  return [
    "Hintabingo",
    `${currentChallenge.category}: ${currentChallenge.title}`,
    `Sain ${result.score}/100 pistettä.`,
    `Olin pielessä ${result.percentOff.toFixed(1).replace(".", ",")} %.`,
    `Putki: ${appState.streak} päivää. Kierroksia pelattu: ${appState.guesses.length}.`,
  ].join("\n");
}

function renderStats() {
  elements.streakCount.textContent = appState.streak;
  elements.playedCount.textContent = appState.guesses.length;

  if (!appState.guesses.length) {
    elements.bestScore.textContent = "-";
    elements.averageScore.textContent = "-";
    return;
  }

  const scores = appState.guesses.map((guess) => guess.score);
  const best = Math.max(...scores);
  const average = Math.round(scores.reduce((sum, score) => sum + score, 0) / scores.length);
  elements.bestScore.textContent = `${best}/100`;
  elements.averageScore.textContent = `${average}/100`;
}

elements.guessForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const guess = parseGuess(elements.guessInput.value);

  if (!Number.isFinite(guess) || guess <= 0) {
    elements.guessInput.focus();
    elements.guessInput.animate(
      [
        { transform: "translateX(0)" },
        { transform: "translateX(-8px)" },
        { transform: "translateX(8px)" },
        { transform: "translateX(0)" },
      ],
      { duration: 260 }
    );
    return;
  }

  const result = calculateResult(guess, currentChallenge.price);
  const todayKey = getTodayKey();
  updateStreak(todayKey);

  const savedResult = {
    date: todayKey,
    playedAt: new Date().toISOString(),
    round: roundNumber + 1,
    category: currentChallenge.category,
    title: currentChallenge.title,
    guess,
    actual: currentChallenge.price,
    difference: result.difference,
    percentOff: result.percentOff,
    score: result.score,
  };

  appState.totalRounds = roundNumber + 1;
  appState.guesses = [savedResult, ...appState.guesses].slice(0, 50);

  saveState();
  showResult(guess, savedResult);
  renderStats();

  if (window.matchMedia("(max-width: 900px)").matches) {
    elements.nextButton.scrollIntoView({ behavior: "smooth", block: "center" });
  }
});

elements.nextButton.addEventListener("click", () => {
  roundNumber += 1;
  appState.totalRounds = roundNumber;
  currentChallenge = getChallengeForRound(selectedCategory, roundNumber);
  saveState();
  renderChallenge();

  if (window.matchMedia("(max-width: 900px)").matches) {
    elements.challengeTitle.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  elements.guessInput.focus();
});

elements.scoreInfoButton.addEventListener("click", () => {
  const isOpen = !elements.scoreRule.hidden;
  elements.scoreRule.hidden = isOpen;
  elements.scoreInfoButton.setAttribute("aria-expanded", String(!isOpen));
});

elements.shareButton.addEventListener("click", async () => {
  elements.shareText.hidden = false;
  elements.shareText.select();

  try {
    await navigator.clipboard.writeText(elements.shareText.value);
    elements.shareButton.textContent = "Kopioitu!";
    setTimeout(() => {
      elements.shareButton.textContent = "Jaa tulos";
    }, 1600);
  } catch {
    elements.shareButton.textContent = "Valitse ja kopioi";
  }
});

elements.categoryChips.forEach((chip) => {
  chip.addEventListener("click", () => {
    selectedCategory = chip.dataset.category;
    elements.categoryChips.forEach((item) => item.classList.toggle("active", item === chip));
    currentChallenge = getChallengeForRound(selectedCategory, roundNumber);
    renderChallenge();
  });
});

renderChallenge();
