import { useState } from "react";
import "./HomePage.css";

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
      <span className="logo__mark">316</span>
      <span className="logo__word">MONEY</span>
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
        <div className="mini">
          <div className="mini__phone">
            <small>Good Morning</small>
            <strong>£5,223.45</strong>
            <div className="mini__tiles"><i /><i /></div>
          </div>
          <div className="mini__card"><span /></div>
        </div>
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
            {AVATARS.map((a) => <span key={a}>{a}</span>)}
          </div>
          <p><b>1,000+</b> happy customers</p>
        </div>
      </div>

      <PhoneMockup />
    </section>
  );
}

export default function HomePage() {
  return (
    <div className="page">
      <Header />
      <main><Hero /></main>
    </div>
  );
}
