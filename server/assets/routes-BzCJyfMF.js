import { useEffect, useRef, useState } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { ArrowUp, Award, CheckCircle2, Diamond, FileCheck, FileSignature, Flame, Gauge, Gem, Globe2, Handshake, Inbox, Linkedin, Mail, MapPin, Menu, MessageCircle, Phone, Search, ShieldCheck, Ship, ShoppingCart, Target, Twitter, Wallet, X, Zap } from "lucide-react";
//#region src/assets/hero-oil-platform.jpg
var hero_oil_platform_default = "/assets/hero-oil-platform-Ch5BVVK7.jpg";
//#endregion
//#region src/components/site/Nav.tsx
var links = [
	{
		href: "#home",
		label: "Home"
	},
	{
		href: "#about",
		label: "About Us"
	},
	{
		href: "#services",
		label: "Our Services"
	},
	{
		href: "#why",
		label: "Why Partner"
	},
	{
		href: "#process",
		label: "Process"
	},
	{
		href: "#products",
		label: "Products"
	},
	{
		href: "#certifications",
		label: "Certifications"
	},
	{
		href: "#contact",
		label: "Contact"
	}
];
function Nav() {
	const [scrolled, setScrolled] = useState(false);
	const [open, setOpen] = useState(false);
	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 30);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ jsxs("header", {
		className: `fixed inset-x-0 top-0 z-50 border-b border-gold/40 transition-all duration-300 ${scrolled ? "bg-navy-deep/85 backdrop-blur-md" : "bg-navy/80 backdrop-blur"}`,
		children: [/* @__PURE__ */ jsxs("div", {
			className: "mx-auto flex h-20 max-w-[1280px] items-center justify-between px-6",
			children: [
				/* @__PURE__ */ jsxs("a", {
					href: "#home",
					className: "flex items-center gap-2.5",
					children: [/* @__PURE__ */ jsx("span", {
						className: "grid h-10 w-10 place-items-center rounded-md bg-gradient-to-br from-gold-bright to-gold text-navy-deep shadow-[0_0_20px_rgba(245,200,66,0.4)]",
						children: /* @__PURE__ */ jsx(Flame, {
							className: "h-5 w-5",
							strokeWidth: 2.5
						})
					}), /* @__PURE__ */ jsxs("span", {
						className: "flex flex-col leading-tight",
						children: [/* @__PURE__ */ jsx("span", {
							className: "font-display text-base font-bold tracking-wider text-white",
							children: "TEXARK"
						}), /* @__PURE__ */ jsx("span", {
							className: "text-[10px] font-semibold tracking-[0.3em] text-gold",
							children: "ENERGY LLC"
						})]
					})]
				}),
				/* @__PURE__ */ jsxs("nav", {
					className: "hidden items-center gap-7 lg:flex",
					children: [links.map((l) => /* @__PURE__ */ jsx("a", {
						href: l.href,
						className: "text-[12px] font-semibold uppercase tracking-[0.18em] text-mist/80 transition-colors hover:text-gold",
						children: l.label
					}, l.href)), /* @__PURE__ */ jsx("a", {
						href: "#contact",
						className: "btn-outline-teal !py-2 !px-4 !text-[11px]",
						children: "Get In Touch"
					})]
				}),
				/* @__PURE__ */ jsx("button", {
					"aria-label": "Toggle menu",
					className: "lg:hidden text-mist",
					onClick: () => setOpen((s) => !s),
					children: open ? /* @__PURE__ */ jsx(X, {}) : /* @__PURE__ */ jsx(Menu, {})
				})
			]
		}), open && /* @__PURE__ */ jsx("nav", {
			className: "border-t border-gold/30 bg-navy-deep px-6 py-4 lg:hidden",
			children: /* @__PURE__ */ jsx("ul", {
				className: "flex flex-col gap-3",
				children: links.map((l) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
					href: l.href,
					onClick: () => setOpen(false),
					className: "block py-1 text-sm font-semibold uppercase tracking-[0.18em] text-mist/85 hover:text-gold",
					children: l.label
				}) }, l.href))
			})
		})]
	});
}
//#endregion
//#region src/components/site/Reveal.tsx
function Reveal({ children, delay = 0, className = "" }) {
	const ref = useRef(null);
	const [visible, setVisible] = useState(false);
	useEffect(() => {
		const el = ref.current;
		if (!el) return;
		const obs = new IntersectionObserver((entries) => {
			entries.forEach((e) => {
				if (e.isIntersecting) {
					setTimeout(() => setVisible(true), delay);
					obs.disconnect();
				}
			});
		}, { threshold: .15 });
		obs.observe(el);
		return () => obs.disconnect();
	}, [delay]);
	return /* @__PURE__ */ jsx("div", {
		ref,
		className: `reveal ${visible ? "is-visible" : ""} ${className}`,
		children
	});
}
function Counter({ to, suffix = "", prefix = "", duration = 1800 }) {
	const ref = useRef(null);
	const [val, setVal] = useState(0);
	const started = useRef(false);
	useEffect(() => {
		const el = ref.current;
		if (!el) return;
		const obs = new IntersectionObserver((entries) => {
			entries.forEach((e) => {
				if (e.isIntersecting && !started.current) {
					started.current = true;
					const start = performance.now();
					const tick = (t) => {
						const p = Math.min(1, (t - start) / duration);
						setVal(Math.floor(p * to));
						if (p < 1) requestAnimationFrame(tick);
					};
					requestAnimationFrame(tick);
				}
			});
		}, { threshold: .4 });
		obs.observe(el);
		return () => obs.disconnect();
	}, [to, duration]);
	return /* @__PURE__ */ jsxs("span", {
		ref,
		children: [
			prefix,
			val.toLocaleString(),
			suffix
		]
	});
}
//#endregion
//#region src/components/site/FloatingActions.tsx
function FloatingActions() {
	const [show, setShow] = useState(false);
	useEffect(() => {
		const onScroll = () => setShow(window.scrollY > 300);
		window.addEventListener("scroll", onScroll, { passive: true });
		onScroll();
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("a", {
		href: "https://wa.me/message/4CLPHIUTKBC2L1",
		target: "_blank",
		rel: "noopener noreferrer",
		"aria-label": "Chat on WhatsApp",
		className: "fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-8px_rgba(37,211,102,0.6)] transition hover:scale-110",
		children: /* @__PURE__ */ jsx(MessageCircle, { className: "h-6 w-6" })
	}), show && /* @__PURE__ */ jsx("button", {
		onClick: () => window.scrollTo({
			top: 0,
			behavior: "smooth"
		}),
		"aria-label": "Scroll to top",
		className: "fixed bottom-24 right-6 z-40 grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-gold-bright to-gold text-navy-deep shadow-gold transition hover:scale-110",
		children: /* @__PURE__ */ jsx(ArrowUp, { className: "h-5 w-5" })
	})] });
}
//#endregion
//#region src/routes/index.tsx?tsr-split=component
function Home() {
	return /* @__PURE__ */ jsxs("div", {
		className: "overflow-x-hidden bg-navy-deep text-white",
		children: [
			/* @__PURE__ */ jsx(Nav, {}),
			/* @__PURE__ */ jsxs("main", { children: [
				/* @__PURE__ */ jsx(Hero, {}),
				/* @__PURE__ */ jsx(Stats, {}),
				/* @__PURE__ */ jsx(About, {}),
				/* @__PURE__ */ jsx(Goals, {}),
				/* @__PURE__ */ jsx(Services, {}),
				/* @__PURE__ */ jsx(Why, {}),
				/* @__PURE__ */ jsx(Process, {}),
				/* @__PURE__ */ jsx(Certifications, {}),
				/* @__PURE__ */ jsx(Contact, {})
			] }),
			/* @__PURE__ */ jsx(Footer, {}),
			/* @__PURE__ */ jsx(FloatingActions, {})
		]
	});
}
function Hero() {
	return /* @__PURE__ */ jsxs("section", {
		id: "home",
		className: "relative isolate flex min-h-screen items-center pt-24",
		children: [
			/* @__PURE__ */ jsx("img", {
				src: hero_oil_platform_default,
				alt: "Offshore oil platform at twilight",
				width: 1920,
				height: 1280,
				className: "absolute inset-0 -z-20 h-full w-full object-cover"
			}),
			/* @__PURE__ */ jsx("div", { className: "absolute inset-0 -z-10 bg-gradient-to-b from-navy-deep/85 via-navy/80 to-navy-deep" }),
			/* @__PURE__ */ jsx("div", {
				className: "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
				children: Array.from({ length: 22 }).map((_, i) => /* @__PURE__ */ jsx("span", {
					className: "particle",
					style: {
						top: `${Math.random() * 100}%`,
						left: `${Math.random() * 100}%`,
						animationDelay: `${Math.random() * 8}s`,
						animationDuration: `${6 + Math.random() * 6}s`,
						opacity: .3 + Math.random() * .5
					}
				}, i))
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "mx-auto w-full max-w-[1280px] px-6 py-24 text-center",
				children: [
					/* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("span", {
						className: "section-label",
						children: [/* @__PURE__ */ jsx("span", {
							className: "mr-2",
							children: "🌍"
						}), "Certified Global Energy Mandate"]
					}) }),
					/* @__PURE__ */ jsx(Reveal, {
						delay: 120,
						children: /* @__PURE__ */ jsxs("h1", {
							className: "mt-8 font-display text-5xl font-bold leading-[1.05] text-white sm:text-6xl md:text-7xl",
							children: ["TEXARK ", /* @__PURE__ */ jsx("span", {
								className: "text-gradient-gold",
								children: "ENERGY LLC"
							})]
						})
					}),
					/* @__PURE__ */ jsx(Reveal, {
						delay: 220,
						children: /* @__PURE__ */ jsx("p", {
							className: "mx-auto mt-6 max-w-3xl font-display text-2xl italic text-gold/90 md:text-3xl",
							children: "Your Premier Gateway to Global Oil & Gas Trade"
						})
					}),
					/* @__PURE__ */ jsx(Reveal, {
						delay: 300,
						children: /* @__PURE__ */ jsx("p", {
							className: "mx-auto mt-8 max-w-2xl text-base leading-relaxed text-mist/85 md:text-lg",
							children: "We connect verified Ready Buyers with Direct Sellers for 100% deliverable, legally certified, premium quality petroleum and energy products — at any safe port worldwide."
						})
					}),
					/* @__PURE__ */ jsx(Reveal, {
						delay: 400,
						children: /* @__PURE__ */ jsxs("div", {
							className: "mt-10 flex flex-wrap items-center justify-center gap-4",
							children: [/* @__PURE__ */ jsx("a", {
								href: "#contact",
								className: "btn-gold",
								children: "Partner With Us Today"
							}), /* @__PURE__ */ jsx("a", {
								href: "#services",
								className: "btn-outline-teal",
								children: "Explore Our Services"
							})]
						})
					}),
					/* @__PURE__ */ jsx(Reveal, {
						delay: 500,
						children: /* @__PURE__ */ jsx("ul", {
							className: "mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-3 text-sm sm:grid-cols-4",
							children: [
								{
									icon: ShieldCheck,
									label: "Legally Certified"
								},
								{
									icon: CheckCircle2,
									label: "100% Deliverable"
								},
								{
									icon: Globe2,
									label: "Global Reach"
								},
								{
									icon: Handshake,
									label: "Consulting Verified"
								}
							].map(({ icon: Icon, label }) => /* @__PURE__ */ jsxs("li", {
								className: "flex items-center justify-center gap-2 rounded-full border border-gold/30 bg-navy/40 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-mist backdrop-blur",
								children: [/* @__PURE__ */ jsx(Icon, { className: "h-4 w-4 text-gold" }), label]
							}, label))
						})
					})
				]
			})
		]
	});
}
function Stats() {
	return /* @__PURE__ */ jsxs("section", {
		className: "relative bg-navy py-20",
		children: [
			/* @__PURE__ */ jsx("div", { className: "gold-divider absolute inset-x-0 top-0" }),
			/* @__PURE__ */ jsx("div", { className: "gold-divider absolute inset-x-0 bottom-0" }),
			/* @__PURE__ */ jsx("div", {
				className: "mx-auto grid max-w-[1280px] grid-cols-2 gap-10 px-6 md:grid-cols-4",
				children: [
					{
						value: 15,
						suffix: "+",
						label: "Years of Global Energy Trade Experience"
					},
					{
						value: 48,
						suffix: "+",
						label: "Countries Served Worldwide"
					},
					{
						value: 500,
						suffix: "+",
						label: "Successful Buyer–Seller Connections"
					},
					{
						value: 2,
						prefix: "$",
						suffix: "B+",
						label: "Total Trade Volumes Facilitated"
					}
				].map((s, i) => /* @__PURE__ */ jsx(Reveal, {
					delay: i * 100,
					children: /* @__PURE__ */ jsxs("div", {
						className: "text-center",
						children: [/* @__PURE__ */ jsx("div", {
							className: "font-display text-5xl font-bold text-gradient-gold md:text-6xl",
							children: /* @__PURE__ */ jsx(Counter, {
								to: s.value,
								prefix: s.prefix,
								suffix: s.suffix
							})
						}), /* @__PURE__ */ jsx("p", {
							className: "mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-mist/80",
							children: s.label
						})]
					})
				}, s.label))
			})
		]
	});
}
function About() {
	return /* @__PURE__ */ jsx("section", {
		id: "about",
		className: "py-32",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-[1280px] px-6",
			children: [/* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("div", {
				className: "text-center",
				children: [/* @__PURE__ */ jsx("span", {
					className: "section-label",
					children: "About Texark Energy LLC"
				}), /* @__PURE__ */ jsxs("h2", {
					className: "mx-auto mt-6 max-w-3xl font-display text-4xl font-bold md:text-5xl",
					children: [
						"A Decade of Trust, Precision, and Global Energy",
						" ",
						/* @__PURE__ */ jsx("span", {
							className: "text-gradient-gold",
							children: "Consultant Excellence"
						})
					]
				})]
			}) }), /* @__PURE__ */ jsxs("div", {
				className: "mt-16 grid gap-12 lg:grid-cols-5",
				children: [/* @__PURE__ */ jsx(Reveal, {
					className: "lg:col-span-3",
					children: /* @__PURE__ */ jsxs("div", {
						className: "space-y-6 text-mist/85",
						children: [
							/* @__PURE__ */ jsx("p", { children: "TEXARK ENERGY LLC is a premier global and independent energy consulting company, established to serve as a bridge between verified, ready buyers and certified, direct sellers of petroleum and energy products. We operate at the highest standards of international trade law, ensuring every transaction is transparent, legally sound, and fully deliverable." }),
							/* @__PURE__ */ jsx("p", { children: "With over 15 years of combined experience in the oil, gas, and energy sector, our mandate team has successfully facilitated trade deals across multiple continents, working with institutional buyers, government entities, private corporations, and independent refineries worldwide." }),
							/* @__PURE__ */ jsxs("p", { children: [
								"Our foundation is built on three unshakeable pillars:",
								" ",
								/* @__PURE__ */ jsx("span", {
									className: "font-semibold text-gold",
									children: "TRUST, TRANSPARENCY, and DELIVERY."
								}),
								" ",
								"Every client — whether a buyer or a seller — can rest assured that TEXARK ENERGY LLC operates with the highest level of integrity, compliance, and professional mandate ethics."
							] })
						]
					})
				}), /* @__PURE__ */ jsx(Reveal, {
					delay: 200,
					className: "lg:col-span-2",
					children: /* @__PURE__ */ jsxs("div", {
						className: "glass-card glass-card-hover p-8",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "mb-6 flex items-center gap-4",
							children: [/* @__PURE__ */ jsx("div", {
								className: "grid h-16 w-16 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-gold-bright to-gold text-navy-deep",
								children: /* @__PURE__ */ jsx(Award, {
									className: "h-7 w-7",
									strokeWidth: 2.4
								})
							}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
								className: "text-[11px] font-semibold uppercase tracking-[0.2em] text-gold",
								children: "Established"
							}), /* @__PURE__ */ jsx("p", {
								className: "font-display text-3xl font-bold",
								children: "Decade of Excellence"
							})] })]
						}), /* @__PURE__ */ jsx("ul", {
							className: "space-y-3",
							children: [
								"Registered & Legally Compliant Consulting Company",
								"NCNDA / MPA / IMFPA Ready",
								"Operates Under International Trade Protocols",
								"ISO Standards Compliance",
								"Full KYC / AML Procedure Adherence",
								"Direct Access to Verified Sellers & Ready Buyers"
							].map((p) => /* @__PURE__ */ jsxs("li", {
								className: "flex items-start gap-3 text-sm text-mist/90",
								children: [/* @__PURE__ */ jsx(CheckCircle2, { className: "mt-0.5 h-5 w-5 shrink-0 text-gold" }), /* @__PURE__ */ jsx("span", { children: p })]
							}, p))
						})]
					})
				})]
			})]
		})
	});
}
function Goals() {
	return /* @__PURE__ */ jsxs("section", {
		className: "relative bg-navy py-32",
		children: [/* @__PURE__ */ jsx("div", {
			className: "pointer-events-none absolute inset-0 opacity-[0.06]",
			style: {
				backgroundImage: "radial-gradient(circle at 1px 1px, var(--color-gold) 1px, transparent 0)",
				backgroundSize: "40px 40px"
			}
		}), /* @__PURE__ */ jsxs("div", {
			className: "relative mx-auto max-w-[1280px] px-6",
			children: [/* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("div", {
				className: "text-center",
				children: [/* @__PURE__ */ jsx("span", {
					className: "section-label",
					children: "Our Mission & Goals"
				}), /* @__PURE__ */ jsxs("h2", {
					className: "mx-auto mt-6 max-w-3xl font-display text-4xl font-bold md:text-5xl",
					children: ["What Drives Us ", /* @__PURE__ */ jsx("span", {
						className: "text-gradient-gold",
						children: "Every Single Day"
					})]
				})]
			}) }), /* @__PURE__ */ jsx("div", {
				className: "mt-16 grid gap-8 md:grid-cols-3",
				children: [
					{
						icon: Target,
						title: "Our Mission",
						text: "To serve as the world's most trusted energy mandate platform — connecting verified buyers and sellers with speed, legal compliance, and absolute transparency in every transaction."
					},
					{
						icon: Globe2,
						title: "Our Vision",
						text: "To become the leading global authority in oil, gas, and energy product facilitation — setting the gold standard for mandate ethics, deal accuracy, and cross-border energy trade."
					},
					{
						icon: Diamond,
						title: "Our Core Values",
						text: "Integrity. Transparency. Accountability. Precision. Global Compliance. Every deal we facilitate reflects these values — no exceptions, no shortcuts."
					}
				].map((c, i) => /* @__PURE__ */ jsx(Reveal, {
					delay: i * 120,
					children: /* @__PURE__ */ jsxs("div", {
						className: "glass-card glass-card-hover h-full p-8",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "grid h-14 w-14 place-items-center rounded-xl border border-gold/40 bg-gold/10 text-gold",
								children: /* @__PURE__ */ jsx(c.icon, { className: "h-7 w-7" })
							}),
							/* @__PURE__ */ jsx("h3", {
								className: "mt-6 font-display text-2xl font-bold text-white",
								children: c.title
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-4 text-mist/80",
								children: c.text
							})
						]
					})
				}, c.title))
			})]
		})]
	});
}
function Services() {
	return /* @__PURE__ */ jsx("section", {
		id: "services",
		className: "py-32",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-[1280px] px-6",
			children: [/* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("div", {
				className: "text-center",
				children: [
					/* @__PURE__ */ jsx("span", {
						className: "section-label",
						children: "What We Offer"
					}),
					/* @__PURE__ */ jsxs("h2", {
						className: "mx-auto mt-6 max-w-4xl font-display text-4xl font-bold md:text-5xl",
						children: [
							"Premium Energy Products —",
							" ",
							/* @__PURE__ */ jsx("span", {
								className: "text-gradient-gold",
								children: "100% Deliverable"
							}),
							" to Any Safe Port"
						]
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mx-auto mt-6 max-w-3xl text-mist/80",
						children: "TEXARK ENERGY LLC facilitates the trade of the following petroleum and energy products. All products are sourced from certified, direct sellers and delivered under internationally recognized terms. Pricing, quantities, and procedures are available upon verified inquiry."
					})
				]
			}) }), /* @__PURE__ */ jsx("div", {
				id: "products",
				className: "mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3",
				children: [
					{
						badge: "PETROLEUM",
						title: "Crude Oil (Various Grades)",
						details: [
							["Origin", "Multiple Countries"],
							["Grade", "Bonny Light, BLCO, ANS, Urals"],
							["Quantity", "500,000 – 5,000,000 BBL/Month"],
							["Delivery", "CIF / FOB / TTO / TTM"],
							["Port", "Any Safe Licensed World Port"]
						]
					},
					{
						badge: "REFINED",
						title: "Diesel / D2 / AGO / ULSD",
						details: [
							["Product", "D2, AGO, ULSD, EN590"],
							["Quantity", "50,000 – 2,000,000 MT/Month"],
							["Delivery", "CIF / FOB / TTO / TTM"]
						]
					},
					{
						badge: "GAS",
						title: "LNG / LPG / Natural Gas",
						details: [
							["Product", "LNG, LPG, Natural Gas"],
							["Origin", "Multiple Certified Sources"],
							["Quantity", "Upon Request"],
							["Delivery", "CIF / FOB / DAP"]
						]
					},
					{
						badge: "REFINED",
						title: "Jet Fuel / JP54 / Jet A1",
						details: [
							["Product", "JP54, Jet A1, Aviation Kerosene"],
							["Quantity", "500,000 – 2,000,000 Gallons/Month"],
							["Delivery", "CIF / FOB"]
						]
					},
					{
						badge: "PETROLEUM",
						title: "Base Oil / Lubricants",
						details: [["Product", "Base Oil SN 150, SN 500, SN 900"], ["Grade", "Group I, II, III"]]
					},
					{
						badge: "ENERGY",
						title: "Other Energy Products",
						details: [["Product", "Mazut M100, Bitumen, Fuel Oil CST 180/380"], ["Inquiry", "Available upon verified request"]]
					}
				].map((p, i) => /* @__PURE__ */ jsx(Reveal, {
					delay: i % 3 * 100,
					children: /* @__PURE__ */ jsxs("article", {
						className: "group relative h-full overflow-hidden rounded-2xl border border-gold/20 bg-gradient-to-b from-navy to-navy-deep p-7 transition hover:border-gold hover:shadow-gold",
						children: [
							/* @__PURE__ */ jsx("div", { className: "absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-gold to-gold-bright" }),
							/* @__PURE__ */ jsx("span", {
								className: "inline-block rounded-full bg-teal/15 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-teal-bright ring-1 ring-teal/40",
								children: p.badge
							}),
							/* @__PURE__ */ jsx("h3", {
								className: "mt-5 font-display text-2xl font-bold text-white",
								children: p.title
							}),
							/* @__PURE__ */ jsx("dl", {
								className: "mt-5 space-y-2.5 text-sm",
								children: p.details.map(([k, v]) => /* @__PURE__ */ jsxs("div", {
									className: "flex gap-2 border-b border-white/5 pb-2 last:border-0",
									children: [/* @__PURE__ */ jsx("dt", {
										className: "min-w-[90px] text-xs font-semibold uppercase tracking-wider text-gold/90",
										children: k
									}), /* @__PURE__ */ jsx("dd", {
										className: "text-mist/85",
										children: v
									})]
								}, k))
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "mt-5 flex items-center gap-2 text-xs font-semibold text-emerald-400",
								children: [/* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4" }), " 100% Available & Deliverable"]
							})
						]
					})
				}, p.title))
			})]
		})
	});
}
function Why() {
	return /* @__PURE__ */ jsx("section", {
		id: "why",
		className: "bg-navy py-32",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-[1280px] px-6",
			children: [/* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("div", {
				className: "text-center",
				children: [/* @__PURE__ */ jsx("span", {
					className: "section-label",
					children: "Why Choose Texark Energy LLC"
				}), /* @__PURE__ */ jsxs("h2", {
					className: "mx-auto mt-6 max-w-4xl font-display text-4xl font-bold md:text-5xl",
					children: [
						"10 Powerful Reasons to Make Us Your",
						" ",
						/* @__PURE__ */ jsx("span", {
							className: "text-gradient-gold",
							children: "Energy Mandate Partner"
						})
					]
				})]
			}) }), /* @__PURE__ */ jsx("div", {
				className: "mt-16 grid gap-6 md:grid-cols-2",
				children: [
					{
						icon: ShieldCheck,
						title: "100% Legally Certified Mandate Operations",
						text: "We operate strictly within international trade law frameworks. All mandate agreements including NCND, MPA, IMFPA, and LOI procedures are handled with absolute legal precision, protecting all parties at every stage."
					},
					{
						icon: CheckCircle2,
						title: "Verified Buyers & Direct Sellers Only",
						text: "We conduct thorough KYC/AML screening and due diligence on every buyer and seller. You will NEVER be connected to time-wasters, middlemen without access, or unverified counterparties."
					},
					{
						icon: Globe2,
						title: "Delivery to Any Safe Port in the World",
						text: "Our logistics and trade coordination ensure that all products can be delivered to any internationally recognized, safe, and licensed port worldwide — in full compliance with local and international shipping regulations."
					},
					{
						icon: Wallet,
						title: "Your Commission is Fully Protected",
						text: "Buyer mandates, agents, and brokers can be assured that their commissions are protected under legally binding NCND/IMFPA agreements signed before any introduction is made. We honor every agreement without exception."
					},
					{
						icon: Award,
						title: "Decades of Combined Industry Experience",
						text: "Our executive team and network carry over 15 years of combined experience in petroleum trading, energy mandate facilitation, and international commodity brokerage — knowledge that directly benefits every client we serve."
					},
					{
						icon: Search,
						title: "Full Transparency at Every Stage",
						text: "From the first email to final delivery, we maintain complete transparency. No hidden fees, no side deals, no surprises. Every party knows exactly where the deal stands at all times."
					},
					{
						icon: Zap,
						title: "Swift Deal Processing & Turnaround",
						text: "We understand that timing is everything in commodity trading. Our streamlined procedure minimizes delays while maintaining full compliance, getting you from LOI to contract faster than the industry average."
					},
					{
						icon: Gem,
						title: "Premium Quality — No Compromises",
						text: "Every product we facilitate meets or exceeds international quality certifications."
					},
					{
						icon: ShoppingCart,
						title: "Maximum Benefits for Buyers & Their Mandates",
						text: "Buyers gain direct access to competitive pricing, flexible delivery terms (CIF/FOB), reliable supply chains, and a mandate partner who ensures the deal closes. Your mandate's commission is always respected and protected including any mark-up price as agreed."
					},
					{
						icon: Inbox,
						title: "Maximum Benefits for Sellers & Their Representatives",
						text: "Sellers gain access to pre-screened, ready, financially capable buyers. No time is wasted on unqualified inquiries. Seller mandates are fully protected under NCND agreements before any buyer introduction."
					}
				].map((r, i) => /* @__PURE__ */ jsx(Reveal, {
					delay: i % 2 * 100,
					children: /* @__PURE__ */ jsxs("div", {
						className: "glass-card glass-card-hover flex h-full gap-5 p-6",
						children: [/* @__PURE__ */ jsx("div", {
							className: "grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-gold-bright to-gold text-navy-deep",
							children: /* @__PURE__ */ jsx(r.icon, {
								className: "h-7 w-7",
								strokeWidth: 2.2
							})
						}), /* @__PURE__ */ jsxs("div", {
							className: "min-w-0",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "flex items-center gap-2",
									children: /* @__PURE__ */ jsxs("span", {
										className: "font-display text-xs font-bold tracking-widest text-gold",
										children: ["0", i + 1 < 10 ? i + 1 : i + 1]
									})
								}),
								/* @__PURE__ */ jsx("h3", {
									className: "mt-1 font-display text-xl font-bold text-white",
									children: r.title
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-2 text-sm text-mist/80",
									children: r.text
								})
							]
						})]
					})
				}, r.title))
			})]
		})
	});
}
function Process() {
	return /* @__PURE__ */ jsx("section", {
		id: "process",
		className: "py-32",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-[1280px] px-6",
			children: [/* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("div", {
				className: "text-center",
				children: [/* @__PURE__ */ jsx("span", {
					className: "section-label",
					children: "Our Procedure"
				}), /* @__PURE__ */ jsxs("h2", {
					className: "mx-auto mt-6 max-w-4xl font-display text-4xl font-bold md:text-5xl",
					children: [
						"A Clear, Simple,",
						" ",
						/* @__PURE__ */ jsx("span", {
							className: "text-gradient-gold",
							children: "Legally Compliant"
						}),
						" Trade Process"
					]
				})]
			}) }), /* @__PURE__ */ jsxs("div", {
				className: "relative mt-20",
				children: [/* @__PURE__ */ jsx("div", { className: "absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-gold to-transparent lg:block" }), /* @__PURE__ */ jsx("div", {
					className: "grid gap-10 lg:grid-cols-5",
					children: [
						{
							icon: Inbox,
							title: "Initial Inquiry",
							text: "Buyer issues official ICPO addressed to the refinery or representative and Seller issues Commercial Invoice (CI). Buyer signs and returns the signed invoice to the seller."
						},
						{
							icon: FileCheck,
							title: "Verification & Due Diligence",
							text: "Seller issues partial proof of product documents: ATSC, DTA, Tank Storage Receipt (TSR), Product Passport, Statement of Product Availability, Commitment Letter to Supply, and ATV for verification."
						},
						{
							icon: Gauge,
							title: "Inspection / Dip Test",
							text: "Buyer extends seller's tanks for dip test. After a successful Dip Test, buyer takes over seller's tank or seller injects into the buyer's vessel/tank and buyer conducts Q&Q inspection."
						},
						{
							icon: FileSignature,
							title: "Payment & Documentation",
							text: "After a successful Q&Q dip test, the buyer makes payment for the total value of product injected via MT103 / SBLC / DLC / USDT / Wire Transfer (TT)."
						},
						{
							icon: Ship,
							title: "Delivery & Completion",
							text: "Upon receipt of payment, seller issues Title of Ownership and all exporting documents of the product, and pays all intermediaries involved in the transaction."
						}
					].map((s, i) => /* @__PURE__ */ jsx(Reveal, {
						delay: i * 120,
						children: /* @__PURE__ */ jsxs("div", {
							className: "relative text-center",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "relative z-10 mx-auto grid h-14 w-14 place-items-center rounded-full border-2 border-gold bg-navy-deep text-gold shadow-[0_0_20px_rgba(212,160,23,0.3)]",
									children: /* @__PURE__ */ jsx(s.icon, { className: "h-6 w-6" })
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "mt-4 font-display text-xs font-bold tracking-[0.3em] text-gold",
									children: ["STEP 0", i + 1]
								}),
								/* @__PURE__ */ jsx("h3", {
									className: "mt-2 font-display text-xl font-bold text-white",
									children: s.title
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-3 text-sm text-mist/75",
									children: s.text
								})
							]
						})
					}, s.title))
				})]
			})]
		})
	});
}
function Certifications() {
	return /* @__PURE__ */ jsx("section", {
		id: "certifications",
		className: "bg-navy py-32",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-[1280px] px-6",
			children: [
				/* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("div", {
					className: "text-center",
					children: [/* @__PURE__ */ jsx("span", {
						className: "section-label",
						children: "Certifications & Compliance"
					}), /* @__PURE__ */ jsxs("h2", {
						className: "mx-auto mt-6 max-w-4xl font-display text-4xl font-bold md:text-5xl",
						children: [
							"Globally Recognized. Fully Compliant.",
							" ",
							/* @__PURE__ */ jsx("span", {
								className: "text-gradient-gold",
								children: "Absolutely Trustworthy."
							})
						]
					})]
				}) }),
				/* @__PURE__ */ jsx(Reveal, {
					delay: 150,
					children: /* @__PURE__ */ jsx("div", {
						className: "mt-14 flex flex-wrap justify-center gap-4",
						children: [
							"Registered Business Entity",
							"NCND / IMFPA / MPA Compliant",
							"KYC / AML Verified Procedures",
							"ISO Certified Operations",
							"SGS / Intertek Inspection Ready",
							"International Trade Law Compliant",
							"OPEC Partner Protocols Observed"
						].map((b) => /* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-3 rounded-full border border-gold/40 bg-navy-deep px-5 py-3 text-sm font-semibold text-mist transition hover:border-gold hover:shadow-gold",
							children: [/* @__PURE__ */ jsx(Award, { className: "h-5 w-5 text-gold" }), b]
						}, b))
					})
				}),
				/* @__PURE__ */ jsx(Reveal, {
					delay: 250,
					children: /* @__PURE__ */ jsx("p", {
						className: "mx-auto mt-12 max-w-3xl text-center text-mist/80",
						children: "TEXARK ENERGY LLC maintains full compliance with all applicable local and international trade regulations. Our legal documentation, mandate agreements, and trade procedures are regularly reviewed by qualified trade attorneys to ensure that every deal we facilitate is protected and enforceable under international commercial law."
					})
				})
			]
		})
	});
}
function Contact() {
	return /* @__PURE__ */ jsx("section", {
		id: "contact",
		className: "py-32",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-[1280px] px-6",
			children: [/* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("div", {
				className: "text-center",
				children: [
					/* @__PURE__ */ jsx("span", {
						className: "section-label",
						children: "Get In Touch"
					}),
					/* @__PURE__ */ jsxs("h2", {
						className: "mx-auto mt-6 max-w-4xl font-display text-4xl font-bold md:text-5xl",
						children: [
							"Ready to Start a Mandate Deal?",
							" ",
							/* @__PURE__ */ jsx("span", {
								className: "text-gradient-gold",
								children: "Contact TEXARK ENERGY LLC"
							}),
							" Today"
						]
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mx-auto mt-6 max-w-3xl text-mist/80",
						children: "Whether you are a ready buyer, a direct seller, or a mandate representative, we welcome your inquiry. All communications are treated with strict confidentiality and professionalism."
					})
				]
			}) }), /* @__PURE__ */ jsxs("div", {
				className: "mt-16 grid gap-10 lg:grid-cols-5",
				children: [/* @__PURE__ */ jsx(Reveal, {
					className: "lg:col-span-2",
					children: /* @__PURE__ */ jsxs("div", {
						className: "glass-card h-full p-8",
						children: [/* @__PURE__ */ jsx("h3", {
							className: "font-display text-2xl font-bold text-white",
							children: "Contact Information"
						}), /* @__PURE__ */ jsxs("div", {
							className: "mt-8 space-y-7 text-sm",
							children: [
								/* @__PURE__ */ jsx(InfoBlock, {
									icon: Mail,
									label: "Primary Email",
									lines: ["support@texarkenergyllc.com"],
									href: "mailto:support@texarkenergyllc.com"
								}),
								/* @__PURE__ */ jsx(InfoBlock, {
									icon: Mail,
									label: "Mandate / Deals",
									lines: ["alexjefferson@texarkenergyllc.com"],
									href: "mailto:alexjefferson@texarkenergyllc.com"
								}),
								/* @__PURE__ */ jsx(InfoBlock, {
									icon: Phone,
									label: "Telephone",
									lines: ["+1 (551) 226-7463", "+1 (409) 292-7800"]
								}),
								/* @__PURE__ */ jsx(InfoBlock, {
									icon: MessageCircle,
									label: "WhatsApp",
									lines: ["+1 (214) 297-6450"],
									href: "https://wa.me/message/4CLPHIUTKBC2L1"
								}),
								/* @__PURE__ */ jsx(InfoBlock, {
									icon: MapPin,
									label: "Office Address",
									lines: [
										"TEXARK ENERGY LLC",
										"15707 Cascading Brook Way",
										"Cypress, Texas, 77433",
										"United States of America"
									]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "rounded-lg border border-gold/30 bg-navy-deep/50 p-4",
									children: [
										/* @__PURE__ */ jsx("p", {
											className: "text-xs font-semibold uppercase tracking-[0.2em] text-gold",
											children: "Business Hours"
										}),
										/* @__PURE__ */ jsx("p", {
											className: "mt-2 text-mist/85",
											children: "Monday – Friday: 9:00 AM – 6:00 PM (EST/GMT)"
										}),
										/* @__PURE__ */ jsx("p", {
											className: "text-mist/85",
											children: "Emergency Mandate Inquiries: 24/7 via WhatsApp"
										})
									]
								})
							]
						})]
					})
				}), /* @__PURE__ */ jsx(Reveal, {
					delay: 150,
					className: "lg:col-span-3",
					children: /* @__PURE__ */ jsxs("form", {
						onSubmit: (e) => {
							e.preventDefault();
							alert("Thank you. Your inquiry has been received. We will respond within 24 business hours.");
						},
						className: "glass-card space-y-5 p-8",
						children: [
							/* @__PURE__ */ jsx("h3", {
								className: "font-display text-2xl font-bold text-white",
								children: "Send Us an Inquiry"
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "grid gap-5 sm:grid-cols-2",
								children: [
									/* @__PURE__ */ jsx(Field, {
										label: "Full Name",
										name: "name",
										required: true
									}),
									/* @__PURE__ */ jsx(Field, {
										label: "Email Address",
										name: "email",
										type: "email",
										required: true
									}),
									/* @__PURE__ */ jsx(Field, {
										label: "Phone / WhatsApp",
										name: "phone",
										type: "tel"
									}),
									/* @__PURE__ */ jsx(Field, {
										label: "Country",
										name: "country"
									})
								]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "grid gap-5 sm:grid-cols-2",
								children: [/* @__PURE__ */ jsx(SelectField, {
									label: "I Am A",
									name: "role",
									options: [
										"Ready Buyer",
										"Direct Seller",
										"Mandate / Agent",
										"Other"
									]
								}), /* @__PURE__ */ jsx(SelectField, {
									label: "Product of Interest",
									name: "product",
									options: [
										"Crude Oil",
										"Diesel / D2",
										"Jet Fuel",
										"LNG / LPG",
										"Base Oil",
										"Other"
									]
								})]
							}),
							/* @__PURE__ */ jsx(TextArea, {
								label: "Estimated Quantity & Preferred Delivery Term",
								name: "quantity",
								rows: 2
							}),
							/* @__PURE__ */ jsx(TextArea, {
								label: "Your Message / Inquiry",
								name: "message",
								rows: 5,
								required: true
							}),
							/* @__PURE__ */ jsx(SelectField, {
								label: "How did you hear about us?",
								name: "source",
								options: [
									"Google",
									"LinkedIn",
									"Referral",
									"WhatsApp",
									"Other"
								]
							}),
							/* @__PURE__ */ jsx("button", {
								type: "submit",
								className: "btn-gold w-full sm:w-auto",
								children: "Send Inquiry →"
							}),
							/* @__PURE__ */ jsxs("p", {
								className: "flex items-start gap-2 pt-2 text-xs text-mist/70",
								children: [/* @__PURE__ */ jsx(ShieldCheck, { className: "mt-0.5 h-4 w-4 shrink-0 text-gold" }), "Your information is strictly confidential. TEXARK ENERGY LLC never shares client data with unauthorized third parties. All inquiries are responded to within 24 business hours."]
							})
						]
					})
				})]
			})]
		})
	});
}
function InfoBlock({ icon: Icon, label, lines, href }) {
	const content = /* @__PURE__ */ jsxs("div", {
		className: "flex gap-4",
		children: [/* @__PURE__ */ jsx("div", {
			className: "grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-gold/40 bg-gold/10 text-gold",
			children: /* @__PURE__ */ jsx(Icon, { className: "h-5 w-5" })
		}), /* @__PURE__ */ jsxs("div", {
			className: "min-w-0",
			children: [/* @__PURE__ */ jsx("p", {
				className: "text-[10px] font-bold uppercase tracking-[0.25em] text-gold",
				children: label
			}), lines.map((l) => /* @__PURE__ */ jsx("p", {
				className: "break-words text-mist",
				children: l
			}, l))]
		})]
	});
	return href ? /* @__PURE__ */ jsx("a", {
		href,
		target: href.startsWith("http") ? "_blank" : void 0,
		rel: "noopener noreferrer",
		className: "block transition hover:opacity-80",
		children: content
	}) : content;
}
function Field({ label, name, type = "text", required }) {
	return /* @__PURE__ */ jsxs("label", {
		className: "block",
		children: [/* @__PURE__ */ jsxs("span", {
			className: "mb-2 block text-[11px] font-semibold uppercase tracking-[0.18em] text-gold",
			children: [label, required && " *"]
		}), /* @__PURE__ */ jsx("input", {
			name,
			type,
			required,
			className: "w-full rounded-md border border-white/15 bg-navy-deep/70 px-4 py-3 text-sm text-white placeholder:text-mist/40 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
		})]
	});
}
function SelectField({ label, name, options }) {
	return /* @__PURE__ */ jsxs("label", {
		className: "block",
		children: [/* @__PURE__ */ jsx("span", {
			className: "mb-2 block text-[11px] font-semibold uppercase tracking-[0.18em] text-gold",
			children: label
		}), /* @__PURE__ */ jsxs("select", {
			name,
			className: "w-full rounded-md border border-white/15 bg-navy-deep/70 px-4 py-3 text-sm text-white focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold",
			defaultValue: "",
			children: [/* @__PURE__ */ jsx("option", {
				value: "",
				disabled: true,
				children: "Select…"
			}), options.map((o) => /* @__PURE__ */ jsx("option", {
				value: o,
				children: o
			}, o))]
		})]
	});
}
function TextArea({ label, name, rows = 4, required }) {
	return /* @__PURE__ */ jsxs("label", {
		className: "block",
		children: [/* @__PURE__ */ jsxs("span", {
			className: "mb-2 block text-[11px] font-semibold uppercase tracking-[0.18em] text-gold",
			children: [label, required && " *"]
		}), /* @__PURE__ */ jsx("textarea", {
			name,
			rows,
			required,
			className: "w-full rounded-md border border-white/15 bg-navy-deep/70 px-4 py-3 text-sm text-white placeholder:text-mist/40 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
		})]
	});
}
function Footer() {
	return /* @__PURE__ */ jsxs("footer", {
		className: "relative bg-navy-deep pt-20",
		children: [/* @__PURE__ */ jsx("div", { className: "gold-divider absolute inset-x-0 top-0" }), /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-[1280px] px-6",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "grid gap-12 md:grid-cols-2 lg:grid-cols-4",
				children: [
					/* @__PURE__ */ jsxs("div", { children: [
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-2.5",
							children: [/* @__PURE__ */ jsx("span", {
								className: "grid h-10 w-10 place-items-center rounded-md bg-gradient-to-br from-gold-bright to-gold text-navy-deep",
								children: /* @__PURE__ */ jsx(Flame, {
									className: "h-5 w-5",
									strokeWidth: 2.5
								})
							}), /* @__PURE__ */ jsxs("span", {
								className: "flex flex-col leading-tight",
								children: [/* @__PURE__ */ jsx("span", {
									className: "font-display text-base font-bold tracking-wider text-white",
									children: "TEXARK"
								}), /* @__PURE__ */ jsx("span", {
									className: "text-[10px] font-semibold tracking-[0.3em] text-gold",
									children: "ENERGY LLC"
								})]
							})]
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-5 text-sm text-mist/75",
							children: "Bridging global energy markets — legally, reliably, profitably. Your trusted mandate for premium oil & gas trade worldwide."
						}),
						/* @__PURE__ */ jsx("div", {
							className: "mt-5 flex gap-3",
							children: [
								Linkedin,
								MessageCircle,
								Twitter
							].map((Icon, i) => /* @__PURE__ */ jsx("a", {
								href: "#",
								"aria-label": "Social",
								className: "grid h-10 w-10 place-items-center rounded-full border border-gold/40 text-gold transition hover:bg-gold hover:text-navy-deep",
								children: /* @__PURE__ */ jsx(Icon, { className: "h-4 w-4" })
							}, i))
						})
					] }),
					/* @__PURE__ */ jsx(FooterCol, {
						title: "Quick Links",
						items: [
							["Home", "#home"],
							["About Us", "#about"],
							["Our Services", "#services"],
							["Why Partner", "#why"],
							["Certifications", "#certifications"],
							["Contact", "#contact"]
						]
					}),
					/* @__PURE__ */ jsx(FooterCol, {
						title: "Products",
						items: [
							["Crude Oil", "#products"],
							["Diesel / D2 / AGO", "#products"],
							["Jet Fuel / JP54", "#products"],
							["LNG / LPG", "#products"],
							["Base Oil", "#products"],
							["Other Energy Products", "#products"]
						]
					}),
					/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
						className: "font-display text-sm font-bold uppercase tracking-[0.2em] text-gold",
						children: "Contact Details"
					}), /* @__PURE__ */ jsxs("ul", {
						className: "mt-5 space-y-3 text-sm text-mist/80",
						children: [
							/* @__PURE__ */ jsxs("li", {
								className: "flex items-start gap-2",
								children: [/* @__PURE__ */ jsx(Mail, { className: "mt-0.5 h-4 w-4 shrink-0 text-gold" }), " alexjefferson@texarkenergyllc.com"]
							}),
							/* @__PURE__ */ jsxs("li", {
								className: "flex items-start gap-2",
								children: [/* @__PURE__ */ jsx(Phone, { className: "mt-0.5 h-4 w-4 shrink-0 text-gold" }), " +1 (551) 226-7463"]
							}),
							/* @__PURE__ */ jsxs("li", {
								className: "flex items-start gap-2",
								children: [/* @__PURE__ */ jsx(MessageCircle, { className: "mt-0.5 h-4 w-4 shrink-0 text-gold" }), " WhatsApp: +1 (214) 297-6450"]
							}),
							/* @__PURE__ */ jsxs("li", {
								className: "flex items-start gap-2",
								children: [/* @__PURE__ */ jsx(MapPin, { className: "mt-0.5 h-4 w-4 shrink-0 text-gold" }), " Texas, USA"]
							})
						]
					})] })
				]
			}), /* @__PURE__ */ jsxs("div", {
				className: "mt-16 flex flex-col gap-3 border-t border-white/10 py-7 text-xs text-mist/60 md:flex-row md:items-center md:justify-between",
				children: [/* @__PURE__ */ jsx("p", { children: "© 2026 TEXARK ENERGY LLC. All Rights Reserved. — Registered Consulting Company | International Petroleum & Energy Trade" }), /* @__PURE__ */ jsxs("div", {
					className: "flex gap-5",
					children: [
						/* @__PURE__ */ jsx("a", {
							href: "#",
							className: "hover:text-gold",
							children: "Privacy Policy"
						}),
						/* @__PURE__ */ jsx("a", {
							href: "#",
							className: "hover:text-gold",
							children: "Terms of Service"
						}),
						/* @__PURE__ */ jsx("a", {
							href: "#",
							className: "hover:text-gold",
							children: "NCND Policy"
						})
					]
				})]
			})]
		})]
	});
}
function FooterCol({ title, items }) {
	return /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
		className: "font-display text-sm font-bold uppercase tracking-[0.2em] text-gold",
		children: title
	}), /* @__PURE__ */ jsx("ul", {
		className: "mt-5 space-y-2.5 text-sm",
		children: items.map(([label, href]) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
			href,
			className: "text-mist/80 transition hover:text-gold",
			children: label
		}) }, label))
	})] });
}
//#endregion
export { Home as component };
