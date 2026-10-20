import { useState } from "react";
import type { CSSProperties, ReactNode } from "react";
import "./HomePage.css";

/* =====================================================================
   YOUR IMAGES AND LOGOS  (everything you need to change is in this block)
   1. Put your image files in the "public/images" folder.
   2. Type the file path between the quotes, for example: logo: "/images/logo.png"
   3. Leave "" (empty quotes) to keep the temporary drawing for that spot.
   ===================================================================== */
const IMAGES = {
  logo: "/image/logo.png",        // full logo (icon + MONEY) in the top header
  logoMark: "/image/logoMark.png",    // small square 316 icon: footer
  heroVisual:  "/image/heroVisual.png",  // big phone + floating cards on the right of the first screen
    heroAvatars: ["", "", "", ""], // leave this empty
  heroAvatarsGroup: "/image/happy.png", // all 4 faces saved as one picture
  menuPromo: "/image/menuPromo.png",   // phone + card picture inside the purple dropdown-menu panel
  telcos: [
    "/image/mtn.png", // MTN
    "/image/orange.png", // Orange
    "/image/glo.png", // Glo
    "/image/airtel.png", // Airtel
  ],
  giftLogos: [
    "/image/amazon.png", // 1 Amazon
    "/image/binance.png", // 2 Binance
    "/image/adidas.png", // 3 Adidas
    "/image/apple.png", // 4 Apple
    "/image/shein.png", // 5 Shein
    "/image/crypto.png", // 6 Crypto
    "/image/ea.png", // 7 EA
    "/image/mastercard.png", // 8 Mastercard
    "/image/netflix.png", // 9 Netflix
    "/image/zara.png", // 10 Zara
    "/image/switch.png", // 11 Nintendo Switch
    "/image/visa.png", // 12 Visa
  ],
  virtualCard: "/image/visual.png", // the black and green virtual card
  savings: "/image/savings.png",     // woman with phone (Put money aside)
  savingsPhone: "/image/savingsPhone.png",// "House savings" phone
  merchant: "/image/heroAvatars4.png",    // shop owner in apron (Looking to collect business payments)
  hotspot: "/image/hotspot.png",     // woman with laptop (316 Hotspots)
    avatars: ["", "", ""], // leave this empty
  avatarsGroup: "/image/avatars.png", // all 3 faces saved as one picture
  appPhone: "/image/appPhone.png",    // tilted phone in "Experience 316 MONEY"
};



type MenuColumn = { title: string; links: string[] };
type Menu = {
  heading: string;
  columns: MenuColumn[];
  promo: { title: string; text: string };
};
type NavItem = { label: string; menu?: Menu };

const PROMO = {
  title: "Get your 316 Money account",
  text: "Download the 316 App and create your account in a few easy steps. Hold and exchange multiple currencies. Create virtual cards.",
};

const NAV: NavItem[] = [
  {
    label: "Personal",
    menu: {
      heading: "316 Money for you",
      promo: PROMO,
      columns: [
        { title: "Features", links: ["Explore all features", "Send and receive", "Request money", "Currency wallets", "Saving pots"] },
        { title: "Cards", links: ["Explore cards", "Virtual cards", "Gift cards"] },
        { title: "More", links: ["Airtime top-up", "Bill payment", "Pay with 316 Money"] },
      ],
    },
  },
  {
    label: "Business",
    menu: {
      heading: "316 for businesses",
      promo: { ...PROMO, title: "Get a 316 Pay account for your business" },
      columns: [
        { title: "Payments", links: ["Accept online payments", "Payment links", "Online checkout page", "Invoicing"] },
        { title: "Integrations", links: ["3rd party integrations", "Developers"] },
        { title: "Extras", links: ["Offer rewards", "Accept donations", "Dispute resolution"] },
      ],
    },
  },
  {
    label: "Partner with us",
    menu: {
      heading: "Be a 316 Hotspot Agent",
      promo: { ...PROMO, title: "Be a 316 Hotspot Agent, unlock financial benefit" },
      columns: [
        { title: "Collection Agent", links: ["Getting started", "How it works", "Benefits", "Compliance"] },
        { title: "Payment Agent", links: ["Getting started", "How it works", "Benefits", "Compliance"] },
        { title: "Extras", links: ["Offer rewards", "Accept donations", "Dispute resolution"] },
      ],
    },
  },
  { label: "Contact" },
];

const AVATARS = ["U1", "U2", "U3", "U4"];

const Chevron = ({ open = false }: { open?: boolean }) => (
  <svg className={`chev ${open ? "chev--open" : ""}`} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
    <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Arrow = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

function Logo() {
  return (
    <a className="logo" href="/" aria-label="316 Money home">
      {IMAGES.logo ? (
        <img className="logo__img" src={IMAGES.logo} alt="316 Money" />
      ) : (
        <>
          <span className="logo__mark">316</span>
          <span className="logo__word">MONEY</span>
        </>
      )}
    </a>
  );
}

function MegaMenu({ menu }: { menu: Menu }) {
  return (
    <div className="mega" role="region" aria-label={menu.heading}>
      <div className="mega__main">
        <a href="#" className="mega__heading">{menu.heading} <Arrow size={20} /></a>
        <div className="mega__cols">
          {menu.columns.map((c) => (
            <div key={c.title} className="mega__col">
              <a href="#" className="mega__col-title">{c.title} <Arrow size={16} /></a>
              <ul>
                {c.links.map((l) => (
                  <li key={l}><a href="#">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <aside className="mega__promo">
        <h3>{menu.promo.title}</h3>
        <p>{menu.promo.text}</p>
        {IMAGES.menuPromo ? <img className="mini-img" src={IMAGES.menuPromo} alt="" /> : (
        <div className="mini">
          <div className="mini__phone">
            <small>Good Morning</small>
            <strong>£5,223.45</strong>
            <div className="mini__tiles"><i /><i /></div>
          </div>
          <div className="mini__card"><span /></div>
        </div>
        )}
      </aside>
    </div>
  );
}

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const activeMenu = NAV.find((n) => n.label === active)?.menu;

  return (
    <div
      className="header-wrap"
      onMouseLeave={() => setActive(null)}
      onKeyDown={(e) => e.key === "Escape" && setActive(null)}
    >
      <header className="header">
        <Logo />
        <nav className={`nav ${mobileOpen ? "nav--open" : ""}`} aria-label="Main">
          {NAV.map((n) => (
            <a
              key={n.label}
              href="#"
              className={`nav__link ${active === n.label ? "nav__link--active" : ""}`}
              aria-haspopup={n.menu ? "true" : undefined}
              aria-expanded={n.menu ? active === n.label : undefined}
              onMouseEnter={() => setActive(n.menu ? n.label : null)}
              onClick={(e) => {
                if (n.menu) {
                  e.preventDefault();
                  setActive(active === n.label ? null : n.label);
                }
              }}
            >
              {n.label}
              {n.menu && <Chevron open={active === n.label} />}
            </a>
          ))}
        </nav>
        <div className="header__actions">
          <button className="btn btn--outline-pill">Sign in</button>
          <button className="btn btn--solid-pill">Sign up</button>
          <button
            className="burger"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((o) => !o)}
          >
            <span /><span /><span />
          </button>
        </div>
      </header>
      {activeMenu && <MegaMenu menu={activeMenu} />}
    </div>
  );
}

function Flag({ colors }: { colors: [string, string, string] }) {
  return (
    <span className="flag" style={{ background: `linear-gradient(90deg, ${colors[0]} 33%, ${colors[1]} 33% 66%, ${colors[2]} 66%)` }} />
  );
}

function PhoneMockup() {
  return (
    <div className="visual" aria-hidden>
      <div className="visual__glow" />

      <div className="card card--balance-ngn">
        <div className="card__row">
          <small>Total Balance</small>
          <Flag colors={["#008751", "#fff", "#008751"]} />
        </div>
        <strong>₦78,562.80</strong>
        <div className="card__row card__row--muted">
          <span>**** **** **** 5678</span><span>09/28</span>
        </div>
        <small>Adeleke Samson</small>
      </div>

      <div className="phone">
        <div className="phone__notch" />
        <div className="phone__screen">
          <small className="phone__hello">Hello Cristina · Good Morning</small>
          <div className="phone__balance">
            <strong>£5,223.45</strong>
            <small>Available Balance</small>
          </div>
          <div className="phone__grid">
            <div className="tile tile--green"><b>Add Money</b><span>By mobile money, bank and others</span></div>
            <div className="tile tile--mint"><b>Pay someone</b><span>To wallet, bank or number</span></div>
            <div className="tile tile--peach"><b>Buy Airtime</b><span>Top up or send airtime across Africa</span></div>
            <div className="tile tile--green"><b>My cards</b><span>View your cards or buy new ones</span></div>
          </div>
          <b className="phone__wallets">Wallets</b>
          <div className="phone__wallet-row">
            <span><Flag colors={["#007a5e", "#ce1126", "#fcd116"]} /> XAF</span>
            <span><Flag colors={["#008751", "#fff", "#008751"]} /> NGN</span>
          </div>
        </div>
      </div>

      <div className="card card--balance-usd">
        <div className="card__row">
          <small>Total Balance</small>
          <Flag colors={["#b22234", "#fff", "#3c3b6e"]} />
        </div>
        <strong>$10,312.17</strong>
        <div className="card__row card__row--muted">
          <span>**** **** **** 5678</span><span>09/28</span>
        </div>
        <small>Ahmodu Bello</small>
      </div>

      <div className="card card--small card--received">
        <span className="badge badge--down">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.5"><path d="M12 4v16M6 14l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </span>
        <small>Payment Received</small>
        <b>125,230.12 XAF</b>
      </div>

      <div className="card card--small card--sent">
        <span className="badge badge--ok">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.5"><path d="m5 12 5 5 9-10" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </span>
        <small>Payment Sent</small>
        <b>125,230.12 XAF</b>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero__copy">
        <a href="#" className="announce">
          <span className="announce__tag">New</span>
          <span>316 Money is soon live in</span>
          <Flag colors={["#007a5e", "#ce1126", "#fcd116"]} />
          <Flag colors={["#008751", "#fff", "#008751"]} />
          <Arrow />
        </a>

        <h1 className="hero__title">
          <span className="hero__title--accent">Fast &amp; Secure</span>
          <span>Payments for Africa</span>
        </h1>

        <p className="hero__text">
          316 Money helps individuals and businesses hold, send, and receive money
          securely, instantly, in multiple currencies and with zero fees. Join
          thousands of satisfied users today.
        </p>

        <div className="hero__cta">
          <button className="btn btn--primary">Get started <Arrow /></button>
          <button className="btn btn--secondary">Learn more</button>
        </div>

               <div className="social-proof">
          <div className="avatars">
            {IMAGES.heroAvatarsGroup ? (
              <img className="avatars__group" src={IMAGES.heroAvatarsGroup} alt="Happy customers" />
            ) : (
              AVATARS.map((a, i) => IMAGES.heroAvatars[i] ? <img key={a} src={IMAGES.heroAvatars[i]} alt="" /> : <span key={a}>{a}</span>)
            )}
          </div>
          <p><b></b> </p>
        </div>
      </div>

      {IMAGES.heroVisual ? <img className="hero__img" src={IMAGES.heroVisual} alt="316 Money app" /> : <PhoneMockup />}
    </section>
  );
}
const LOREM =
  "316 Money helps individuals and businesses hold, send, and receive money securely, instantly, in multiple currencies and with zero fees. Join thousands of satisfied users today.";

const TRANSACTIONS = [
  { name: "James Olawale", date: "06 Jul", time: "02:25PM", amount: "+70,256.30", currency: "NGN", positive: true },
  { name: "Samuel Onana", date: "19 Apr", time: "04:11PM", amount: "-41,115.50", currency: "XAF", positive: false },
];

const TELCOS = [
  { name: "MTN", bg: "#ffcc00", fg: "#000" },
  { name: "orange", bg: "#ff7900", fg: "#fff" },
  { name: "glo", bg: "#1ea84b", fg: "#fff" },
  { name: "airtel", bg: "#e4202d", fg: "#fff" },
];

const BILLS = [
  { name: "Utility", icon: "\u26A1" },
  { name: "Internet services", icon: "\u25C9" },
  { name: "Cable TV", icon: "\u25A3" },
];

function CurrencyField({ label, code, flag }: { label: string; code: string; flag: [string, string, string] }) {
  return (
    <div className="cf">
      <span className="cf__label">{label}</span>
      <div className="cf__box">
        <span>0000.00</span>
        <span className="cf__sel"><Flag colors={flag} /> {code} <Chevron /></span>
      </div>
    </div>
  );
}

function FeaturesSection() {
  return (
    <section className="features" id="features">
      <h2 className="features__title"><span>Features</span> you’ll Enjoy</h2>
      <p className="features__sub">{LOREM}</p>

      <div className="bento">
        <div className="bento__row bento__row--top">
          <article className="fcard fcard--violet fcard--send">
            <h3>Send and receive money</h3>
            <p>{LOREM}</p>
            <ul className="tx">
              {TRANSACTIONS.map((x) => (
                <li key={x.name}>
                  <span className="tx__icon"><Arrow size={12} /></span>
                  <span className="tx__who"><b>{x.name}</b><small>{x.date} · {x.time}</small></span>
                  <span className="tx__amt">
                    <b className={x.positive ? "pos" : "neg"}>{x.amount}</b>
                    <small>{x.currency}</small>
                  </span>
                </li>
              ))}
            </ul>
          </article>

          <div className="bento__stack">
            <article className="fcard fcard--split">
              <div className="fcard__text">
                <h3>Hold &amp; exchange multiple currencies</h3>
                <p>{LOREM}</p>
              </div>
              <div className="fcard__widget">
                <CurrencyField label="Move from :" code="NGN" flag={["#008751", "#fff", "#008751"]} />
                <CurrencyField label="Move To :" code="USD" flag={["#b22234", "#fff", "#3c3b6e"]} />
              </div>
            </article>

            <article className="fcard fcard--split">
              <div className="fcard__text">
                <h3>Airtime &amp; Data Subscriptions</h3>
                <p>{LOREM}</p>
              </div>
              <div className="telcos">
                {TELCOS.map((c, i) => (
                  <span key={c.name} className="telco">
                    {IMAGES.telcos[i] ? (
                      <img src={IMAGES.telcos[i]} alt={c.name} />
                    ) : (
                      <i style={{ background: c.bg, color: c.fg }}>{c.name}</i>
                    )}
                  </span>
                ))}
              </div>
            </article>
          </div>
        </div>

        <div className="bento__row bento__row--bottom">
          <article className="fcard fcard--split fcard--bills">
            <div className="fcard__text">
              <h3>Bill Payments</h3>
              <p>Say goodbye to late fees and tedious bill management with our efficient bill payment feature straight from your 316 Money account.</p>
            </div>
            <ul className="bills">
              {BILLS.map((b) => (
                <li key={b.name}>
                  <span className="bills__icon" aria-hidden>{b.icon}</span>
                  <span><b>{b.name}</b><small>Pay your utility bills easy from your account</small></span>
                  <Chevron />
                </li>
              ))}
            </ul>
          </article>

          <article className="fcard fcard--violet fcard--more">
            <h3>See more of our features here</h3>
            <button className="btn btn--ghost">Learn more</button>
          </article>
        </div>
      </div>
    </section>
  );
}

/* ===== Gift cards & virtual cards ===== */
const COPY =
  "316 Money helps individuals and businesses hold, send, and receive money securely, instantly, in multiple currencies and with zero fees. Join thousands of satisfied users today.";

type Brand = { name: string; label: string; style: CSSProperties };

const BRANDS: Brand[] = [
  { name: "Amazon", label: "amazon", style: { background: "#232323", color: "#fff", fontWeight: 700, fontSize: 12 } },
  { name: "Binance", label: "BINANCE", style: { background: "#1a1a1a", color: "#f0b90b", fontSize: 6, letterSpacing: 1, border: "3px solid #f0b90b", borderRadius: "50%" } },
  { name: "Adidas", label: "adidas", style: { background: "#fff", color: "#000", fontWeight: 800, fontSize: 12 } },
  { name: "Apple", label: "Apple", style: { background: "linear-gradient(135deg,#1da1ff,#0a6cff)", color: "#fff", fontWeight: 700, fontSize: 12 } },
  { name: "Shein", label: "SHEIN", style: { background: "#fff", color: "#000", fontWeight: 700, fontSize: 10, letterSpacing: 2 } },
  { name: "Crypto", label: "Crypto", style: { background: "linear-gradient(160deg,#7b2ff7,#4b13b8)", color: "#ffd84d", fontWeight: 700, fontSize: 10 } },
  { name: "EA", label: "EA", style: { background: "#e8274b", color: "#fff", fontWeight: 900, fontSize: 20, fontStyle: "italic", borderRadius: "50%" } },
  { name: "Mastercard", label: "", style: { background: "#1a1a1a" } },
  { name: "Netflix", label: "NETFLIX", style: { background: "#b81d24", color: "#fff", fontWeight: 800, fontSize: 8, letterSpacing: 1 } },
  { name: "Zara", label: "ZARA", style: { background: "#fff", color: "#000", fontFamily: "Georgia, serif", fontSize: 14, letterSpacing: 1 } },
  { name: "Nintendo Switch", label: "SWITCH", style: { background: "#e60012", color: "#fff", fontWeight: 800, fontSize: 8 } },
  { name: "Visa", label: "VISA", style: { background: "linear-gradient(160deg,#1a56db,#0b2f8f)", color: "#fff", fontWeight: 900, fontStyle: "italic", fontSize: 14 } },
];

function GiftCardsSection() {
  return (
    <section className="gifts" id="gift-cards">
      <h2 className="gifts__title">
        <span>Gift cards</span> to share with your friends
        <br />and loved ones everywhere.
      </h2>
      <p className="gifts__sub">{COPY}</p>

      <ul className="gifts__grid">
        {BRANDS.map((b, i) => (
          <li key={b.name} className="gifts__tile" aria-label={b.name}>
            <span className="gifts__brand" style={IMAGES.giftLogos[i] ? undefined : b.style}>
              {IMAGES.giftLogos[i] ? (
                <img className="gifts__img" src={IMAGES.giftLogos[i]} alt={b.name} />
              ) : b.name === "Mastercard" ? (
                <span className="mc"><i /><i /></span>
              ) : (
                b.label
              )}
            </span>
          </li>
        ))}
      </ul>

      <a href="#" className="gifts__more">And much more</a>
    </section>
  );
}

function VirtualCardsSection() {
  return (
    <section className="vc-section" id="virtual-cards">
      <div className="vc">
        {IMAGES.virtualCard ? <img className="vc__card vc__card--img" src={IMAGES.virtualCard} alt="316 Money virtual card" /> : (
        <div className="vc__card" aria-hidden>
          <div className="vc__top">
            <span className="vc__num">•••• 4534</span>
            <span className="vc__type">Virtual card</span>
          </div>
          <div className="vc__bottom">
            <span className="mc"><i /><i /></span>
          </div>
        </div>
        )}

        <div className="vc__copy">
          <h2>Create virtual cards</h2>
          <p>{COPY}</p>
          <div className="vc__cta">
            <button className="vc__btn">Get started →</button>
            <button className="vc__btn">Learn more</button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===== Lower sections & footer ===== */
const Arr = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
    <path d="M4 12h16M14 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Icon = ({ children, size = 22 }: { children: ReactNode; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    {children}
  </svg>
);

const I = {
  phone: <><rect x="7" y="3" width="10" height="18" rx="2" /><path d="M11 18h2" /></>,
  globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" /></>,
  users: <><circle cx="9" cy="8" r="3" /><path d="M3 20c0-3 3-5 6-5s6 2 6 5" /><circle cx="17" cy="7" r="2" /></>,
  card: <><rect x="3" y="6" width="18" height="12" rx="2" /><path d="M3 11h18M7 15h4" /></>,
  support: <><circle cx="12" cy="8" r="3" /><path d="M7 20c0-3 2-5 5-5" /></>,
  swap: <><rect x="3" y="5" width="18" height="12" rx="2" /><path d="M3 10h18M16 20v-5m0 5-2-2m2 2 2-2" /></>,
  download: <><rect x="4" y="4" width="16" height="16" rx="3" /><path d="M12 8v7m-3-3 3 3 3-3" /></>,
  userPlus: <><circle cx="10" cy="8" r="3" /><path d="M4 20c0-3 3-5 6-5" /><circle cx="17" cy="17" r="3" /><path d="M17 15.5v3M15.5 17h3" /></>,
};

function Photo({ src, alt }: { src: string; alt: string }) {
  return src ? <img className="photo" src={src} alt={alt} /> : <div className="photo photo--ph" role="img" aria-label={alt} />;
}

function Title({ lead, rest, sub }: { lead: string; rest: string; sub: string }) {
  return (
    <>
      <h2 className="sec-title"><span>{lead}</span> {rest}</h2>
      <p className="sec-sub">{sub}</p>
    </>
  );
}

/* 1. Features grid */
const FEATURES = [
  { icon: I.phone, title: "Mobile Payments", text: "Send and receive money directly from your smartphone with our easy-to-use mobile app." },
  { icon: I.globe, title: "Cross-Border Transfers", text: "Send money across African countries and internationally with lower fees and better exchange rates." },
  { icon: I.users, title: "Group Payments", text: "Easily split bills or collect funds from multiple people for events or projects." },
  { icon: I.card, title: "Virtual Cards", text: "Create virtual cards for online purchases with customizable spending limits and controls." },
  { icon: I.support, title: "In-App Support", text: "Get help instantly through our dedicated customer support team available 24/7." },
  { icon: I.swap, title: "Quick Payments", text: "Transfer money in seconds, not days. Our platform ensures immediate payment processing." },
];

function FeatureGridSection() {
  return (
    <section className="band band--lav" id="all-features">
      <Title lead="Features" rest="you’ll Enjoy" sub={COPY} />
      <div className="fgrid">
        {FEATURES.map((f) => (
          <article key={f.title} className="fg">
            <span className="fg__icon"><Icon>{f.icon}</Icon></span>
            <h3>{f.title}</h3>
            <p>{f.text}</p>
          </article>
        ))}
      </div>
      <button className="btn-lg">Learn more <Arr /></button>
    </section>
  );
}

/* 2. Put money aside */
function SavingsSection() {
  return (
    <section className="split" id="savings">
      <div className="split__visual savings">
        <div className="savings__blob" />
        <Photo src={IMAGES.savings} alt="Woman using the 316 Money app" />
        {IMAGES.savingsPhone ? <img className="sphone sphone--img" src={IMAGES.savingsPhone} alt="Savings screen" /> : (
        <div className="sphone">
          <small>Wallet name</small>
          <b>House savings</b>
          <div className="sphone__pig">🐷</div>
          <small>Target Amount</small>
          <b className="sphone__amt">XAF 350,000 <i>OF 1.5M</i></b>
          <div className="sphone__acts"><span>Add money</span><span>Withdraw</span></div>
          <small className="sphone__by">BY JANUARY 2026</small>
          <b className="sphone__year">1 year</b>
          <div className="bar"><span /></div>
        </div>
        )}
        <div className="toggle-pill">Change savings to every month <span className="sw" /></div>
      </div>
      <div className="split__copy">
        <h2 className="big"><span>Put money aside</span> for the things you love</h2>
        <p>{COPY}</p>
        <button className="btn-md">Learn more <Arr /></button>
      </div>
    </section>
  );
}

/* 3. Steps */
const STEPS = [
  { icon: I.download, title: "Download the app", text: "Get our mobile app from the App Store or Google Play Store." },
  { icon: I.userPlus, title: "Create an Account", text: "Sign up in minutes with just your email and phone number." },
  { icon: I.swap, title: "Start Transacting", text: "Send money, pay bills, or request payments from friends instantly." },
];

function StepsSection() {
  return (
    <section className="band band--lav" id="steps">
      <Title lead="Get started" rest="in a few easy steps" sub="Get started with 316 Money in three simple steps and transform how you manage your money in Africa." />
      <div className="steps">
        {STEPS.map((s, i) => (
          <div key={s.title} className="step">
            <span className="step__circle"><Icon size={36}>{s.icon}</Icon><b>{i + 1}</b></span>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </div>
        ))}
      </div>
      <button className="btn-pill">Join waitlist <Arr /></button>
    </section>
  );
}

/* 4. Business payments */
function BusinessSection() {
  return (
    <section className="split split--rev" id="business-payments">
      <div className="split__copy">
        <h2 className="big">Looking to collect <br /><span>business payments?</span></h2>
        <p>{COPY}</p>
        <button className="btn-sm">Learn more</button>
      </div>
      <div className="split__visual merchant">
        <div className="merchant__blob" />
        <Photo src={IMAGES.merchant} alt="Smiling shop owner" />
      </div>
    </section>
  );
}

/* 5. Hotspots */
function HotspotsSection() {
  return (
    <section className="hot" id="hotspots">
      <div className="hot__inner">
        <div className="hot__visual">
          <div className="hot__blob" />
          <Photo src={IMAGES.hotspot} alt="Woman using a laptop and phone" />
        </div>
        <div className="hot__copy">
          <b>316 Hotspots</b>
          <h2>Join our partner network and unlock massive financial benefits</h2>
          <p>{COPY}</p>
          <div className="hot__cta">
            <button>Join now <Arr /></button>
            <button className="violet">Learn more</button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* 6. Download the app */
function AppSection() {
  return (
    <section className="app" id="download">
      <div className="app__copy">
        <h2>Experience <span>316 MONEY</span> in the palm of your hand</h2>
        <p>Download for iOS and Android. Open your account in under 3 minutes with zero paperwork and bring more ease to your financial life.</p>
        <div className="stores">
          <a href="#" className="store"><span className="store__ico">&#63743;</span><span><small>Download on the</small><b>Apple App Store</b></span></a>
          <a href="#" className="store"><span className="store__ico">▶</span><span><small>Get it on the</small><b>Google Play Store</b></span></a>
        </div>
      </div>
      {IMAGES.appPhone ? <img className="tilt-img" src={IMAGES.appPhone} alt="316 Money app" /> : (
      <div className="tilt" aria-hidden>
        <div className="tilt__screen"><span className="tilt__logo">316</span><b>MONEY</b></div>
      </div>
      )}
    </section>
  );
}

/* 7. Footer */
const FOOT = [
  { title: "Company", links: ["About us", "Careers", "Resources", "Help"] },
  { title: "For Individuals", links: ["Get started", "Features", "Security", "Getting started"] },
  { title: "For Business", links: ["Get Started", "Features", "Be a Partner", "Developer API"] },
  { title: "Legal", links: ["Privacy Policy", "Terms of Service", "AML Policy", "Cookie Settings"] },
];

function Footer() {
  return (
    <footer className="foot">
      <div className="foot__top">
        <div className="foot__brand">
         <div className="foot__logo">
  {IMAGES.logoMark ? (
    <img className="foot__logo-img" src={IMAGES.logoMark} alt="316 Money" />
  ) : (
    <><span>316</span> Money</>
  )}
</div>
          <p>The next generation payment platform for individuals and businesses. Send money anywhere, instantly.</p>
        </div>
        {FOOT.map((c) => (
          <nav key={c.title} aria-label={c.title}>
            <b>{c.title}</b>
            <ul>{c.links.map((l) => <li key={l}><a href="#">{l}</a></li>)}</ul>
          </nav>
        ))}
      </div>
      <div className="foot__bottom">.</div>
    </footer>
  );
}

/* ===== FAQ ===== */
const FAQS = [
  { q: "What can I do with 316 Money?", a: "Hold, send and receive money in multiple currencies, pay bills, buy airtime and data, create virtual cards and save towards your goals, all from one app." },
  { q: "How do I get started with 316 Money?", a: "Download the app from the App Store or Google Play Store, sign up with your email and phone number, and you can start transacting in minutes." },
  { q: "Can I send and receive money with 316 Money?", a: "Yes. You can send money to friends, family and businesses, and receive payments instantly, securely and with zero fees." },
  { q: "Can I hold money in different currencies?", a: "Yes. Your 316 Money account supports multiple currency wallets, and you can move money between them whenever you need to." },
  { q: "Can I save money towards specific goals?", a: "Yes. Create savings pots with a target amount and a timeline, then add money or withdraw whenever you like." },
  { q: "Are all 316 Money features available in every country?", a: "316 Money is rolling out across Africa. Some features may vary by country, so check the app for what is available where you are." },
];

function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="faq" id="faq">
      <div className="faq__intro">
        <h2 className="faq__title"><span>Questions</span> you might want to ask</h2>
        <div className="faq__proof">
          <div className="faq__avatars">
  {IMAGES.avatarsGroup ? (
    <img className="faq__avatars-group" src={IMAGES.avatarsGroup} alt="Users worldwide" />
  ) : (
    IMAGES.avatars.map((src, i) =>
      src ? <img key={i} src={src} alt="" /> : <span key={i} className={`av av--${i}`} aria-hidden />
    )
  )}
</div>
          <p><b>more than 10K+</b><br />users worldwide</p>
        </div>
      </div>

      <div className="faq__list">
        {FAQS.map((f, i) => (
          <div key={f.q} className="faq__item">
            <button
              className="faq__q"
              aria-expanded={open === i}
              aria-controls={`faq-a-${i}`}
              onClick={() => setOpen(open === i ? null : i)}
            >
              <span>{f.q}</span>
              <svg className={`faq__caret ${open === i ? "faq__caret--open" : ""}`} width="22" height="14" viewBox="0 0 22 14" aria-hidden>
                <path d="M1 1h20L11 13z" fill="currentColor" />
              </svg>
            </button>
            {open === i && <p id={`faq-a-${i}`} className="faq__a">{f.a}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <div className="page">
      <Header />
      <main>
        <Hero />
        <FeaturesSection />
        <GiftCardsSection />
        <VirtualCardsSection />
        <FeatureGridSection />
        <SavingsSection />
        <StepsSection />
        <BusinessSection />
        <HotspotsSection />
        <FaqSection />
        <AppSection />
      </main>
      <Footer />
    </div>
  );
}

