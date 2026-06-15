import { createFileRoute } from "@tanstack/react-router";
import {
  Award,
  CheckCircle2,
  Diamond,
  FileCheck,
  FileSignature,
  Flame,
  Gauge,
  Gem,
  Globe2,
  Handshake,
  Inbox,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Package,
  Phone,
  Search,
  ShieldCheck,
  ShoppingCart,
  Ship,
  Target,
  Twitter,
  Wallet,
  Zap,
} from "lucide-react";
import heroImage from "@/assets/hero-oil-platform.jpg";
import { Nav } from "@/components/site/Nav";
import { Reveal, Counter } from "@/components/site/Reveal";
import { FloatingActions } from "@/components/site/FloatingActions";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TEXARK ENERGY LLC — Global Oil, Gas & Energy Mandate Brokerage" },
      {
        name: "description",
        content:
          "TEXARK ENERGY LLC connects verified ready buyers with direct sellers of premium, 100% deliverable oil, gas and energy products at any safe port worldwide.",
      },
      { name: "keywords", content: "oil, gas, energy, mandate, petroleum, crude oil, D2, jet fuel, LNG, LPG, broker, trade facilitation" },
      { property: "og:title", content: "TEXARK ENERGY LLC — Global Oil, Gas & Energy Mandate" },
      { property: "og:description", content: "Bridging global energy markets — legally, reliably, profitably." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="overflow-x-hidden bg-navy-deep text-white">
      <Nav />
      <main>
        <Hero />
        <Stats />
        <About />
        <Goals />
        <Services />
        <Why />
        <Process />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}

/* ───────────────────────── HERO ───────────────────────── */
function Hero() {
  return (
    <section id="home" className="relative isolate flex min-h-screen items-center pt-24">
      <img
        src={heroImage}
        alt="Offshore oil platform at twilight"
        width={1920}
        height={1280}
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-navy-deep/85 via-navy/80 to-navy-deep" />
      {/* particles */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {Array.from({ length: 22 }).map((_, i) => (
          <span
            key={i}
            className="particle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${6 + Math.random() * 6}s`,
              opacity: 0.3 + Math.random() * 0.5,
            }}
          />
        ))}
      </div>

      <div className="mx-auto w-full max-w-[1280px] px-6 py-24 text-center">
        <Reveal>
          <span className="section-label">
            <span className="mr-2">🌍</span>Certified Global Energy Mandate
          </span>
        </Reveal>
        <Reveal delay={120}>
          <h1 className="mt-8 font-display text-5xl font-bold leading-[1.05] text-white sm:text-6xl md:text-7xl">
            TEXARK <span className="text-gradient-gold">ENERGY LLC</span>
          </h1>
        </Reveal>
        <Reveal delay={220}>
          <p className="mx-auto mt-6 max-w-3xl font-display text-2xl italic text-gold/90 md:text-3xl">
            Your Premier Gateway to Global Oil &amp; Gas Trade
          </p>
        </Reveal>
        <Reveal delay={300}>
          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-mist/85 md:text-lg">
            We connect verified Ready Buyers with Direct Sellers for 100% deliverable, legally
            certified, premium quality petroleum and energy products — at any safe port worldwide.
          </p>
        </Reveal>
        <Reveal delay={400}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a href="#contact" className="btn-gold">Partner With Us Today</a>
            <a href="#services" className="btn-outline-teal">Explore Our Services</a>
          </div>
        </Reveal>
        <Reveal delay={500}>
          <ul className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-3 text-sm sm:grid-cols-4">
            {[
              { icon: ShieldCheck, label: "Legally Certified" },
              { icon: CheckCircle2, label: "100% Deliverable" },
              { icon: Globe2, label: "Global Reach" },
              { icon: Handshake, label: "Consulting Verified" },
            ].map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center justify-center gap-2 rounded-full border border-gold/30 bg-navy/40 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-mist backdrop-blur"
              >
                <Icon className="h-4 w-4 text-gold" />
                {label}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

/* ───────────────────────── STATS ───────────────────────── */
function Stats() {
  const stats = [
    { value: 15, suffix: "+", label: "Years of Global Energy Trade Experience" },
    { value: 48, suffix: "+", label: "Countries Served Worldwide" },
    { value: 500, suffix: "+", label: "Successful Buyer–Seller Connections" },
    { value: 2, prefix: "$", suffix: "B+", label: "Total Trade Volumes Facilitated" },
  ];
  return (
    <section className="relative bg-navy py-20">
      <div className="gold-divider absolute inset-x-0 top-0" />
      <div className="gold-divider absolute inset-x-0 bottom-0" />
      <div className="mx-auto grid max-w-[1280px] grid-cols-2 gap-10 px-6 md:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 100}>
            <div className="text-center">
              <div className="font-display text-5xl font-bold text-gradient-gold md:text-6xl">
                <Counter to={s.value} prefix={s.prefix} suffix={s.suffix} />
              </div>
              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-mist/80">
                {s.label}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ───────────────────────── ABOUT ───────────────────────── */
function About() {
  const points = [
    "Registered & Legally Compliant Consulting Company",
    "NCNDA / MPA / IMFPA Ready",
    "Operates Under International Trade Protocols",
    "ISO Standards Compliance",
    "Full KYC / AML Procedure Adherence",
    "Direct Access to Verified Sellers & Ready Buyers",
  ];
  return (
    <section id="about" className="py-32">
      <div className="mx-auto max-w-[1280px] px-6">
        <Reveal>
          <div className="text-center">
            <span className="section-label">About Texark Energy LLC</span>
            <h2 className="mx-auto mt-6 max-w-3xl font-display text-4xl font-bold md:text-5xl">
              A Decade of Trust, Precision, and Global Energy{" "}
              <span className="text-gradient-gold">Consultant Excellence</span>
            </h2>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <div className="space-y-6 text-mist/85">
              <p>
                TEXARK ENERGY LLC is a premier global and independent energy consulting company,
                established to serve as a bridge between verified, ready buyers and certified,
                direct sellers of petroleum and energy products. We operate at the highest standards
                of international trade law, ensuring every transaction is transparent, legally
                sound, and fully deliverable.
              </p>
              <p>
                With over 15 years of combined experience in the oil, gas, and energy sector, our
                mandate team has successfully facilitated trade deals across multiple continents,
                working with institutional buyers, government entities, private corporations, and
                independent refineries worldwide.
              </p>
              <p>
                Our foundation is built on three unshakeable pillars:{" "}
                <span className="font-semibold text-gold">TRUST, TRANSPARENCY, and DELIVERY.</span>{" "}
                Every client — whether a buyer or a seller — can rest assured that TEXARK ENERGY LLC
                operates with the highest level of integrity, compliance, and professional mandate
                ethics.
              </p>
            </div>
          </Reveal>

          <Reveal delay={200} className="lg:col-span-2">
            <div className="glass-card glass-card-hover p-8">
              <div className="mb-6 flex items-center gap-4">
                <div className="grid h-16 w-16 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-gold-bright to-gold text-navy-deep">
                  <Award className="h-7 w-7" strokeWidth={2.4} />
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
                    Established
                  </p>
                  <p className="font-display text-3xl font-bold">Decade of Excellence</p>
                </div>
              </div>
              <ul className="space-y-3">
                {points.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm text-mist/90">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── GOALS ───────────────────────── */
function Goals() {
  const cards = [
    {
      icon: Target,
      title: "Our Mission",
      text: "To serve as the world's most trusted energy mandate platform — connecting verified buyers and sellers with speed, legal compliance, and absolute transparency in every transaction.",
    },
    {
      icon: Globe2,
      title: "Our Vision",
      text: "To become the leading global authority in oil, gas, and energy product facilitation — setting the gold standard for mandate ethics, deal accuracy, and cross-border energy trade.",
    },
    {
      icon: Diamond,
      title: "Our Core Values",
      text: "Integrity. Transparency. Accountability. Precision. Global Compliance. Every deal we facilitate reflects these values — no exceptions, no shortcuts.",
    },
  ];
  return (
    <section className="relative bg-navy py-32">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, var(--color-gold) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="relative mx-auto max-w-[1280px] px-6">
        <Reveal>
          <div className="text-center">
            <span className="section-label">Our Mission &amp; Goals</span>
            <h2 className="mx-auto mt-6 max-w-3xl font-display text-4xl font-bold md:text-5xl">
              What Drives Us <span className="text-gradient-gold">Every Single Day</span>
            </h2>
          </div>
        </Reveal>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 120}>
              <div className="glass-card glass-card-hover h-full p-8">
                <div className="grid h-14 w-14 place-items-center rounded-xl border border-gold/40 bg-gold/10 text-gold">
                  <c.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-6 font-display text-2xl font-bold text-white">{c.title}</h3>
                <p className="mt-4 text-mist/80">{c.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── SERVICES / PRODUCTS ───────────────────────── */
function Services() {
  const products = [
    {
      badge: "PETROLEUM",
      title: "Crude Oil (Various Grades)",
      details: [
        ["Origin", "Multiple Countries"],
        ["Grade", "Bonny Light, BLCO, ANS, Urals"],
        ["Quantity", "500,000 – 5,000,000 BBL/Month"],
        ["Delivery", "CIF / FOB / TTO / TTM"],
        ["Port", "Any Safe Licensed World Port"],
      ],
    },
    {
      badge: "REFINED",
      title: "Diesel / D2 / AGO / ULSD",
      details: [
        ["Product", "D2, AGO, ULSD, EN590"],
        ["Quantity", "50,000 – 2,000,000 MT/Month"],
        ["Delivery", "CIF / FOB / TTO / TTM"],
      ],
    },
    {
      badge: "GAS",
      title: "LNG / LPG / Natural Gas",
      details: [
        ["Product", "LNG, LPG, Natural Gas"],
        ["Origin", "Multiple Certified Sources"],
        ["Quantity", "Upon Request"],
        ["Delivery", "CIF / FOB / DAP"],
      ],
    },
    {
      badge: "REFINED",
      title: "Jet Fuel / JP54 / Jet A1",
      details: [
        ["Product", "JP54, Jet A1, Aviation Kerosene"],
        ["Quantity", "500,000 – 2,000,000 Gallons/Month"],
        ["Delivery", "CIF / FOB"],
      ],
    },
    {
      badge: "PETROLEUM",
      title: "Base Oil / Lubricants",
      details: [
        ["Product", "Base Oil SN 150, SN 500, SN 900"],
        ["Grade", "Group I, II, III"],
      ],
    },
    {
      badge: "ENERGY",
      title: "Other Energy Products",
      details: [
        ["Product", "Mazut M100, Bitumen, Fuel Oil CST 180/380"],
        ["Inquiry", "Available upon verified request"],
      ],
    },
  ];
  return (
    <section id="services" className="py-32">
      <div className="mx-auto max-w-[1280px] px-6">
        <Reveal>
          <div className="text-center">
            <span className="section-label">What We Offer</span>
            <h2 className="mx-auto mt-6 max-w-4xl font-display text-4xl font-bold md:text-5xl">
              Premium Energy Products —{" "}
              <span className="text-gradient-gold">100% Deliverable</span> to Any Safe Port
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-mist/80">
              TEXARK ENERGY LLC facilitates the trade of the following petroleum and energy
              products. All products are sourced from certified, direct sellers and delivered under
              internationally recognized terms. Pricing, quantities, and procedures are available
              upon verified inquiry.
            </p>
          </div>
        </Reveal>

        <div id="products" className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 100}>
              <article className="group relative h-full overflow-hidden rounded-2xl border border-gold/20 bg-gradient-to-b from-navy to-navy-deep p-7 transition hover:border-gold hover:shadow-gold">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-gold to-gold-bright" />
                <span className="inline-block rounded-full bg-teal/15 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-teal-bright ring-1 ring-teal/40">
                  {p.badge}
                </span>
                <h3 className="mt-5 font-display text-2xl font-bold text-white">{p.title}</h3>
                <dl className="mt-5 space-y-2.5 text-sm">
                  {p.details.map(([k, v]) => (
                    <div key={k} className="flex gap-2 border-b border-white/5 pb-2 last:border-0">
                      <dt className="min-w-[90px] text-xs font-semibold uppercase tracking-wider text-gold/90">
                        {k}
                      </dt>
                      <dd className="text-mist/85">{v}</dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-5 flex items-center gap-2 text-xs font-semibold text-emerald-400">
                  <CheckCircle2 className="h-4 w-4" /> 100% Available &amp; Deliverable
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── WHY ───────────────────────── */
function Why() {
  const reasons = [
    { icon: ShieldCheck, title: "100% Legally Certified Mandate Operations", text: "We operate strictly within international trade law frameworks. All mandate agreements including NCND, MPA, IMFPA, and LOI procedures are handled with absolute legal precision, protecting all parties at every stage." },
    { icon: CheckCircle2, title: "Verified Buyers & Direct Sellers Only", text: "We conduct thorough KYC/AML screening and due diligence on every buyer and seller. You will NEVER be connected to time-wasters, middlemen without access, or unverified counterparties." },
    { icon: Globe2, title: "Delivery to Any Safe Port in the World", text: "Our logistics and trade coordination ensure that all products can be delivered to any internationally recognized, safe, and licensed port worldwide — in full compliance with local and international shipping regulations." },
    { icon: Wallet, title: "Your Commission is Fully Protected", text: "Buyer mandates, agents, and brokers can be assured that their commissions are protected under legally binding NCND/IMFPA agreements signed before any introduction is made. We honor every agreement without exception." },
    { icon: Award, title: "Decades of Combined Industry Experience", text: "Our executive team and network carry over 15 years of combined experience in petroleum trading, energy mandate facilitation, and international commodity brokerage — knowledge that directly benefits every client we serve." },
    { icon: Search, title: "Full Transparency at Every Stage", text: "From the first email to final delivery, we maintain complete transparency. No hidden fees, no side deals, no surprises. Every party knows exactly where the deal stands at all times." },
    { icon: Zap, title: "Swift Deal Processing & Turnaround", text: "We understand that timing is everything in commodity trading. Our streamlined procedure minimizes delays while maintaining full compliance, getting you from LOI to contract faster than the industry average." },
    { icon: Gem, title: "Premium Quality — No Compromises", text: "Every product we facilitate meets or exceeds international quality certifications." },
    { icon: ShoppingCart, title: "Maximum Benefits for Buyers & Their Mandates", text: "Buyers gain direct access to competitive pricing, flexible delivery terms (CIF/FOB), reliable supply chains, and a mandate partner who ensures the deal closes. Your mandate's commission is always respected and protected including any mark-up price as agreed." },
    { icon: Inbox, title: "Maximum Benefits for Sellers & Their Representatives", text: "Sellers gain access to pre-screened, ready, financially capable buyers. No time is wasted on unqualified inquiries. Seller mandates are fully protected under NCND agreements before any buyer introduction." },
  ];
  return (
    <section id="why" className="bg-navy py-32">
      <div className="mx-auto max-w-[1280px] px-6">
        <Reveal>
          <div className="text-center">
            <span className="section-label">Why Choose Texark Energy LLC</span>
            <h2 className="mx-auto mt-6 max-w-4xl font-display text-4xl font-bold md:text-5xl">
              10 Powerful Reasons to Make Us Your{" "}
              <span className="text-gradient-gold">Energy Mandate Partner</span>
            </h2>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={(i % 2) * 100}>
              <div className="glass-card glass-card-hover flex h-full gap-5 p-6">
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-gold-bright to-gold text-navy-deep">
                  <r.icon className="h-7 w-7" strokeWidth={2.2} />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-display text-xs font-bold tracking-widest text-gold">
                      0{i + 1 < 10 ? i + 1 : i + 1}
                    </span>
                  </div>
                  <h3 className="mt-1 font-display text-xl font-bold text-white">{r.title}</h3>
                  <p className="mt-2 text-sm text-mist/80">{r.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── PROCESS ───────────────────────── */
function Process() {
  const steps = [
    {
      icon: Inbox,
      title: "Initial Inquiry",
      text: "Buyer issues official ICPO addressed to the refinery or representative and Seller issues Commercial Invoice (CI). Buyer signs and returns the signed invoice to the seller.",
    },
    {
      icon: FileCheck,
      title: "Verification & Due Diligence",
      text: "Seller issues partial proof of product documents: ATSC, DTA, Tank Storage Receipt (TSR), Product Passport, Statement of Product Availability, Commitment Letter to Supply, and ATV for verification.",
    },
    {
      icon: Gauge,
      title: "Inspection / Dip Test",
      text: "Buyer extends seller's tanks for dip test. After a successful Dip Test, buyer takes over seller's tank or seller injects into the buyer's vessel/tank and buyer conducts Q&Q inspection.",
    },
    {
      icon: FileSignature,
      title: "Payment & Documentation",
      text: "After a successful Q&Q dip test, the buyer makes payment for the total value of product injected via MT103 / SBLC / DLC / USDT / Wire Transfer (TT).",
    },
    {
      icon: Ship,
      title: "Delivery & Completion",
      text: "Upon receipt of payment, seller issues Title of Ownership and all exporting documents of the product, and pays all intermediaries involved in the transaction.",
    },
  ];
  return (
    <section id="process" className="py-32">
      <div className="mx-auto max-w-[1280px] px-6">
        <Reveal>
          <div className="text-center">
            <span className="section-label">Our Procedure</span>
            <h2 className="mx-auto mt-6 max-w-4xl font-display text-4xl font-bold md:text-5xl">
              A Clear, Simple,{" "}
              <span className="text-gradient-gold">Legally Compliant</span> Trade Process
            </h2>
          </div>
        </Reveal>

        <div className="relative mt-20">
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-gold to-transparent lg:block" />
          <div className="grid gap-10 lg:grid-cols-5">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 120}>
                <div className="relative text-center">
                  <div className="relative z-10 mx-auto grid h-14 w-14 place-items-center rounded-full border-2 border-gold bg-navy-deep text-gold shadow-[0_0_20px_rgba(212,160,23,0.3)]">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <div className="mt-4 font-display text-xs font-bold tracking-[0.3em] text-gold">
                    STEP 0{i + 1}
                  </div>
                  <h3 className="mt-2 font-display text-xl font-bold text-white">{s.title}</h3>
                  <p className="mt-3 text-sm text-mist/75">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── CERTIFICATIONS ───────────────────────── */
function Certifications() {
  const badges = [
    "Registered Business Entity",
    "NCND / IMFPA / MPA Compliant",
    "KYC / AML Verified Procedures",
    "ISO Certified Operations",
    "SGS / Intertek Inspection Ready",
    "International Trade Law Compliant",
    "OPEC Partner Protocols Observed",
  ];
  return (
    <section id="certifications" className="bg-navy py-32">
      <div className="mx-auto max-w-[1280px] px-6">
        <Reveal>
          <div className="text-center">
            <span className="section-label">Certifications &amp; Compliance</span>
            <h2 className="mx-auto mt-6 max-w-4xl font-display text-4xl font-bold md:text-5xl">
              Globally Recognized. Fully Compliant.{" "}
              <span className="text-gradient-gold">Absolutely Trustworthy.</span>
            </h2>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="mt-14 flex flex-wrap justify-center gap-4">
            {badges.map((b) => (
              <div
                key={b}
                className="flex items-center gap-3 rounded-full border border-gold/40 bg-navy-deep px-5 py-3 text-sm font-semibold text-mist transition hover:border-gold hover:shadow-gold"
              >
                <Award className="h-5 w-5 text-gold" />
                {b}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={250}>
          <p className="mx-auto mt-12 max-w-3xl text-center text-mist/80">
            TEXARK ENERGY LLC maintains full compliance with all applicable local and international
            trade regulations. Our legal documentation, mandate agreements, and trade procedures are
            regularly reviewed by qualified trade attorneys to ensure that every deal we facilitate
            is protected and enforceable under international commercial law.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ───────────────────────── CONTACT ───────────────────────── */
function Contact() {
  return (
    <section id="contact" className="py-32">
      <div className="mx-auto max-w-[1280px] px-6">
        <Reveal>
          <div className="text-center">
            <span className="section-label">Get In Touch</span>
            <h2 className="mx-auto mt-6 max-w-4xl font-display text-4xl font-bold md:text-5xl">
              Ready to Start a Mandate Deal?{" "}
              <span className="text-gradient-gold">Contact TEXARK ENERGY LLC</span> Today
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-mist/80">
              Whether you are a ready buyer, a direct seller, or a mandate representative, we
              welcome your inquiry. All communications are treated with strict confidentiality and
              professionalism.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-10 lg:grid-cols-5">
          {/* Info */}
          <Reveal className="lg:col-span-2">
            <div className="glass-card h-full p-8">
              <h3 className="font-display text-2xl font-bold text-white">Contact Information</h3>
              <div className="mt-8 space-y-7 text-sm">
                <InfoBlock icon={Mail} label="Primary Email" lines={["support@texarkenergyllc.com"]} href="mailto:support@texarkenergyllc.com" />
                <InfoBlock icon={Mail} label="Mandate / Deals" lines={["alexjefferson@texarkenergyllc.com"]} href="mailto:alexjefferson@texarkenergyllc.com" />
                <InfoBlock icon={Phone} label="Telephone" lines={["+1 (551) 226-7463", "+1 (409) 292-7800"]} />
                <InfoBlock icon={MessageCircle} label="WhatsApp" lines={["+1 (214) 297-6450"]} href="https://wa.me/message/4CLPHIUTKBC2L1" />
                <InfoBlock
                  icon={MapPin}
                  label="Office Address"
                  lines={[
                    "TEXARK ENERGY LLC",
                    "15707 Cascading Brook Way",
                    "Cypress, Texas, 77433",
                    "United States of America",
                  ]}
                />
                <div className="rounded-lg border border-gold/30 bg-navy-deep/50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                    Business Hours
                  </p>
                  <p className="mt-2 text-mist/85">Monday – Friday: 9:00 AM – 6:00 PM (EST/GMT)</p>
                  <p className="text-mist/85">Emergency Mandate Inquiries: 24/7 via WhatsApp</p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={150} className="lg:col-span-3">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you. Your inquiry has been received. We will respond within 24 business hours.");
              }}
              className="glass-card space-y-5 p-8"
            >
              <h3 className="font-display text-2xl font-bold text-white">Send Us an Inquiry</h3>

              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Full Name" name="name" required />
                <Field label="Email Address" name="email" type="email" required />
                <Field label="Phone / WhatsApp" name="phone" type="tel" />
                <Field label="Country" name="country" />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <SelectField label="I Am A" name="role" options={["Ready Buyer", "Direct Seller", "Mandate / Agent", "Other"]} />
                <SelectField label="Product of Interest" name="product" options={["Crude Oil", "Diesel / D2", "Jet Fuel", "LNG / LPG", "Base Oil", "Other"]} />
              </div>

              <TextArea label="Estimated Quantity & Preferred Delivery Term" name="quantity" rows={2} />
              <TextArea label="Your Message / Inquiry" name="message" rows={5} required />
              <SelectField label="How did you hear about us?" name="source" options={["Google", "LinkedIn", "Referral", "WhatsApp", "Other"]} />

              <button type="submit" className="btn-gold w-full sm:w-auto">
                Send Inquiry →
              </button>

              <p className="flex items-start gap-2 pt-2 text-xs text-mist/70">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                Your information is strictly confidential. TEXARK ENERGY LLC never shares client
                data with unauthorized third parties. All inquiries are responded to within 24
                business hours.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function InfoBlock({
  icon: Icon,
  label,
  lines,
  href,
}: {
  icon: typeof Mail;
  label: string;
  lines: string[];
  href?: string;
}) {
  const content = (
    <div className="flex gap-4">
      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-gold/40 bg-gold/10 text-gold">
        <Icon className="h-5 w-5" />
      </div>
      <div className="min-w-0">
        <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-gold">{label}</p>
        {lines.map((l) => (
          <p key={l} className="break-words text-mist">
            {l}
          </p>
        ))}
      </div>
    </div>
  );
  return href ? (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="block transition hover:opacity-80">
      {content}
    </a>
  ) : (
    content
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
        {label}
        {required && " *"}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-md border border-white/15 bg-navy-deep/70 px-4 py-3 text-sm text-white placeholder:text-mist/40 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
      />
    </label>
  );
}

function SelectField({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
        {label}
      </span>
      <select
        name={name}
        className="w-full rounded-md border border-white/15 bg-navy-deep/70 px-4 py-3 text-sm text-white focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
        defaultValue=""
      >
        <option value="" disabled>
          Select…
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}

function TextArea({
  label,
  name,
  rows = 4,
  required,
}: {
  label: string;
  name: string;
  rows?: number;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
        {label}
        {required && " *"}
      </span>
      <textarea
        name={name}
        rows={rows}
        required={required}
        className="w-full rounded-md border border-white/15 bg-navy-deep/70 px-4 py-3 text-sm text-white placeholder:text-mist/40 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
      />
    </label>
  );
}

/* ───────────────────────── FOOTER ───────────────────────── */
function Footer() {
  return (
    <footer className="relative bg-navy-deep pt-20">
      <div className="gold-divider absolute inset-x-0 top-0" />
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-10 w-10 place-items-center rounded-md bg-gradient-to-br from-gold-bright to-gold text-navy-deep">
                <Flame className="h-5 w-5" strokeWidth={2.5} />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="font-display text-base font-bold tracking-wider text-white">TEXARK</span>
                <span className="text-[10px] font-semibold tracking-[0.3em] text-gold">ENERGY LLC</span>
              </span>
            </div>
            <p className="mt-5 text-sm text-mist/75">
              Bridging global energy markets — legally, reliably, profitably. Your trusted mandate
              for premium oil &amp; gas trade worldwide.
            </p>
            <div className="mt-5 flex gap-3">
              {[Linkedin, MessageCircle, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social"
                  className="grid h-10 w-10 place-items-center rounded-full border border-gold/40 text-gold transition hover:bg-gold hover:text-navy-deep"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <FooterCol
            title="Quick Links"
            items={[
              ["Home", "#home"],
              ["About Us", "#about"],
              ["Our Services", "#services"],
              ["Why Partner", "#why"],
              ["Certifications", "#certifications"],
              ["Contact", "#contact"],
            ]}
          />
          <FooterCol
            title="Products"
            items={[
              ["Crude Oil", "#products"],
              ["Diesel / D2 / AGO", "#products"],
              ["Jet Fuel / JP54", "#products"],
              ["LNG / LPG", "#products"],
              ["Base Oil", "#products"],
              ["Other Energy Products", "#products"],
            ]}
          />
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-gold">
              Contact Details
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-mist/80">
              <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> alexjefferson@texarkenergyllc.com</li>
              <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> +1 (551) 226-7463</li>
              <li className="flex items-start gap-2"><MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> WhatsApp: +1 (214) 297-6450</li>
              <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> Texas, USA</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-white/10 py-7 text-xs text-mist/60 md:flex-row md:items-center md:justify-between">
          <p>
            © 2026 TEXARK ENERGY LLC. All Rights Reserved. — Registered Consulting Company |
            International Petroleum &amp; Energy Trade
          </p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-gold">Privacy Policy</a>
            <a href="#" className="hover:text-gold">Terms of Service</a>
            <a href="#" className="hover:text-gold">NCND Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: [string, string][] }) {
  return (
    <div>
      <h4 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-gold">{title}</h4>
      <ul className="mt-5 space-y-2.5 text-sm">
        {items.map(([label, href]) => (
          <li key={label}>
            <a href={href} className="text-mist/80 transition hover:text-gold">
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export { Truck, Package };
