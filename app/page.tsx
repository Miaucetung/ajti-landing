export default function UnifiedLearningPlatformLandingPage() {
  const platforms = [
    {
      name: "CompTIA",
      description:
        "Hands-on Vorbereitung für Server+, Security+, Linux+ und A+ mit Prüfungen, Fortschrittsanalyse und Gamification.",
      badge: "Zertifizierungen",
      href: "https://comptia.ajti.online",
      available: true,
    },
    {
      name: "Networking & Cisco",
      description:
        "Schwerpunkt CCNA – mit zusätzlichen Lernpfaden für CompTIA Network+. Praxisnahe Übungen, Topologie-Szenarien und realistische Prüfungssimulation.",
      badge: "Networking",
      href: "https://training.ajti.online",
      available: true,
    },
    {
      name: "Azure & AWS",
      description:
        "Interaktive Cloud-Lernpfade für Azure Administrator und AWS – Architektur-Szenarien, Labs und prüfungsnahe Inhalte. AWS läuft parallel als Track im selben Lerntempo.",
      badge: "Cloud",
      href: "https://azure.ajti.online",
      available: true,
    },
    {
      name: "Linux & Kubernetes",
      description:
        "Linux-Grundlagen, LPIC-Vorbereitung und produktionsnahe Container-Praxis – Kubernetes läuft als eigener Track direkt in der Plattform.",
      badge: "Systems",
      href: "https://linux-k8s.ajti.online",
      available: true,
    },
    {
      name: "Microsoft 365 & Endpoint",
      description:
        "Prüfungssimulationen und Szenarien für MD-102 (Endpoint Administrator) und MS-102 (Microsoft 365 Administrator) – Intune, Entra, Defender und moderne Workplace-Themen.",
      badge: "Modern Work",
      href: "https://md102.ajti.online",
      available: true,
    },
    {
      name: "Fachinformatiker Systemintegration",
      description:
        "Lernplattform für die IHK-Ausbildung zum FiSi – mit prüfungsrelevanten Themen, Lernkarten, Szenarien und gezielter Vorbereitung auf die Abschlussprüfung Teil 1 und 2.",
      badge: "Ausbildung",
      href: "https://fisi.ajti.online",
      available: true,
    },
  ];

  const trustMetrics = [
    { value: "Multi", label: "Plattform-Ökosystem" },
    { value: "Labs", label: "Interaktive Praxis" },
    { value: "XP", label: "Gamified Progress" },
    { value: "AI", label: "Empfehlungen & Fokus" },
    { value: "Exam", label: "Prüfungsorientiert" },
  ];

  const differentiators = [
    {
      title: "Echte Szenarien statt trockenem Frontal-Lernen",
      text: "Die Plattform kombiniert Lernmodule, Labs, Quiz, Prüfungssimulation und Fortschrittsanalyse in einem System.",
    },
    {
      title: "Alle Zertifizierungen in einer zentralen Lernoberfläche",
      text: "CompTIA, Cisco/CCNA, Azure, AWS, Linux, Kubernetes, Microsoft 365 und FiSi-Ausbildung folgen derselben starken Lernlogik.",
    },
    {
      title: "Messbare Exam Readiness statt Bauchgefühl",
      text: "Du siehst sofort, wo deine Schwächen liegen, welche Domänen zurückfallen und was dein sinnvollster nächster Schritt ist.",
    },
  ];

  const features = [
    "Interaktive Labs und Praxisaufgaben",
    "Prüfungssimulationen mit echter Struktur",
    "Schwächen-Analyse nach Domains",
    "XP, Streaks und Achievements",
    "Empfohlene nächste Aktionen",
    "Kurs-, Statistik- und Fortschritts-Dashboards",
    "Architektur- und Szenario-basierte Lernpfade",
    "Multi-Plattform-System für Zertifizierungen",
  ];

  const workflow = [
    {
      step: "01",
      title: "Lernpfad wählen",
      text: "Wähle die Zertifizierung oder Plattform, die zu deinem Ziel passt – vom Einstieg bis zur Prüfungsvorbereitung.",
    },
    {
      step: "02",
      title: "Mit Modulen und Labs lernen",
      text: "Verstehe Themen nicht nur theoretisch, sondern über echte Szenarien, Labs und strukturierte Übungen.",
    },
    {
      step: "03",
      title: "Fortschritt messen",
      text: "Sieh Lernzeit, Streaks, Quiz-Scores, Domänen-Schwächen und Empfehlungen in Echtzeit.",
    },
    {
      step: "04",
      title: "Prüfungsreife erreichen",
      text: "Nutze Exam Readiness, Simulationsmodus und Wiederholungen, um gezielt auf Bestehensniveau zu kommen.",
    },
  ];

  const audience = [
    "Umschüler und Quereinsteiger in die IT",
    "IT-Admins mit Zertifizierungsziel",
    "Selbstlerner mit Fokus auf Praxis",
    "Fortgeschrittene für Cloud, Linux und Infrastruktur",
    "Teams und Unternehmen für interne Weiterbildung",
  ];

  const plans = [
    {
      name: "Starter",
      price: "Kostenlos",
      description:
        "Für den ersten Einstieg in Plattform, Oberfläche und Lernlogik.",
      features: [
        "Begrenzte Module und Vorschauen",
        "Basis-Dashboard",
        "Erste Quiz- und Lernfunktionen",
      ],
      cta: "Kostenlos starten",
      featured: false,
    },
    {
      name: "Pro",
      price: "ab 14,99€",
      description:
        "Für ambitionierte Lernende mit Fokus auf Zertifizierung und Praxis.",
      features: [
        "Alle Kurse und Lernpfade",
        "Labs, Szenarien und Prüfungen",
        "Exam Readiness & Analytics",
        "XP, Streaks und Achievements",
      ],
      cta: "Pro testen",
      featured: true,
    },
    {
      name: "Business",
      price: "Auf Anfrage",
      description:
        "Für Teams, Weiterbildung und strukturierte Lernprogramme im Unternehmen.",
      features: [
        "Team-Zugänge",
        "Reporting & Fortschrittsübersicht",
        "Individuelle Lernpfade",
      ],
      cta: "Business anfragen",
      featured: false,
    },
  ];

  const faqs = [
    {
      q: "Ist die Plattform für Anfänger geeignet?",
      a: "Ja. Die Plattform deckt sowohl Grundlagen als auch fortgeschrittene Themen ab und führt Nutzer schrittweise durch Lernpfade, Übungen und Szenarien.",
    },
    {
      q: "Welche Lernformate sind enthalten?",
      a: "Je nach Track stehen Module, Quiz, Labs, Prüfungssimulationen, Lernkarten, Fortschrittsstatistiken und empfohlene Wiederholungen zur Verfügung.",
    },
    {
      q: "Ist das nur für eine Zertifizierung gedacht?",
      a: "Nein. Das System ist als zentrales Multi-Plattform-Ökosystem gedacht und verbindet CompTIA, Cisco/CCNA, Azure, Linux, Kubernetes, Microsoft 365 und die IHK-Ausbildung zum FiSi.",
    },
    {
      q: "Was unterscheidet die Plattform von klassischen Kursportalen?",
      a: "Der Fokus liegt auf aktiver Anwendung: echte Szenarien, Labs, Prüfungssimulationen, Fortschrittsmessung und motivierende Mechaniken statt reiner Videokonsum-Logik.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div>
            <div className="text-xl font-semibold tracking-tight">
              AJTI Learning Ecosystem
            </div>
            <div className="text-sm text-slate-400">
              Cloud, Systems, Security & Certification Training
            </div>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a href="#platforms" className="hover:text-white">
              Plattformen
            </a>
            <a href="#features" className="hover:text-white">
              Features
            </a>
            <a href="#workflow" className="hover:text-white">
              Lernlogik
            </a>
            <a href="#pricing" className="hover:text-white">
              Pricing
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="#preview"
              className="rounded-xl border border-white/15 px-4 py-2 text-sm text-slate-200 transition hover:border-white/30 hover:bg-white/5"
            >
              Demo ansehen
            </a>
            <a
              href="#cta"
              className="rounded-xl bg-indigo-500 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-indigo-500/30 transition hover:bg-indigo-400"
            >
              Kostenlos starten
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.25),_transparent_35%),radial-gradient(circle_at_80%_20%,_rgba(168,85,247,0.18),_transparent_30%),linear-gradient(180deg,_rgba(15,23,42,1),_rgba(2,6,23,1))]" />
          <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-28">
            <div className="max-w-2xl">
              <div className="mb-4 inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm text-cyan-300">
                Eine zentrale Plattform für IT-Zertifizierungen
              </div>
              <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Lerne für{" "}
                <span className="text-cyan-300">
                  CompTIA, Cisco, Azure, Linux
                </span>{" "}
                und Microsoft – inklusive FiSi-Ausbildung.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                Interaktive Lernpfade, echte Labs, Prüfungssimulationen,
                Analytics, Gamification und klare Exam-Readiness – für
                IT-Zertifizierungen, Quereinsteiger und IHK-Azubis.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#cta"
                  className="rounded-2xl bg-indigo-500 px-6 py-3 text-base font-medium text-white shadow-lg shadow-indigo-500/30 transition hover:bg-indigo-400"
                >
                  Kostenlos starten
                </a>
                <a
                  href="#preview"
                  className="rounded-2xl border border-white/15 px-6 py-3 text-base text-slate-200 transition hover:border-white/30 hover:bg-white/5"
                >
                  Plattform entdecken
                </a>
              </div>
              <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-300">
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                  Labs & Szenarien
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                  Exam Readiness
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                  XP & Achievements
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                  Multi-Plattform
                </span>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-8 top-10 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl" />
              <div className="absolute -right-8 bottom-10 h-44 w-44 rounded-full bg-fuchsia-500/20 blur-3xl" />
              <div className="relative rounded-[28px] border border-white/10 bg-white/5 p-4 shadow-2xl shadow-black/30 backdrop-blur">
                <div className="mb-4 flex items-center gap-2 border-b border-white/10 pb-4 text-xs text-slate-400">
                  <div className="h-3 w-3 rounded-full bg-red-400" />
                  <div className="h-3 w-3 rounded-full bg-amber-400" />
                  <div className="h-3 w-3 rounded-full bg-emerald-400" />
                  <span className="ml-2">Live Dashboard Preview</span>
                </div>
                <div className="grid gap-4">
                  <div className="rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 p-6">
                    <div className="text-xs uppercase tracking-[0.2em] text-blue-100/80">
                      Unified Learning OS
                    </div>
                    <div className="mt-2 text-3xl font-semibold">
                      Exam Readiness in Echtzeit
                    </div>
                    <p className="mt-3 max-w-md text-sm text-blue-100/80">
                      Kurse, Labs, Prüfungen, Lernzeit und personalisierte
                      nächste Schritte in einer Oberfläche.
                    </p>
                    <div className="mt-5 grid grid-cols-3 gap-3 text-sm">
                      <div className="rounded-2xl bg-white/10 p-3">
                        <div className="text-2xl font-semibold">82%</div>
                        <div className="text-blue-100/70">Quiz Ø</div>
                      </div>
                      <div className="rounded-2xl bg-white/10 p-3">
                        <div className="text-2xl font-semibold">7</div>
                        <div className="text-blue-100/70">Streak</div>
                      </div>
                      <div className="rounded-2xl bg-white/10 p-3">
                        <div className="text-2xl font-semibold">575</div>
                        <div className="text-blue-100/70">XP</div>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-5">
                      <div className="text-sm text-slate-400">
                        Empfohlene Aktion
                      </div>
                      <div className="mt-2 text-lg font-semibold">
                        Linux+ Bootprozess fortsetzen
                      </div>
                      <div className="mt-3 h-2 rounded-full bg-white/10">
                        <div className="h-2 w-2/3 rounded-full bg-cyan-400" />
                      </div>
                    </div>
                    <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-5">
                      <div className="text-sm text-slate-400">
                        Aktiver Track
                      </div>
                      <div className="mt-2 text-lg font-semibold">
                        Azure Administrator
                      </div>
                      <div className="mt-3 text-sm text-slate-300">
                        5 Themen · Labs · Szenarien
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-white/10 bg-slate-900/70">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-6 py-8 sm:grid-cols-3 lg:grid-cols-5 lg:px-8">
            {trustMetrics.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-center"
              >
                <div className="text-xl font-semibold text-white">
                  {item.value}
                </div>
                <div className="mt-1 text-sm text-slate-400">{item.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="text-sm font-medium uppercase tracking-[0.22em] text-cyan-300">
              Warum diese Plattform?
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Nicht nur Kurse. Ein komplettes Lernsystem für Zertifizierungen.
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              Statt isolierter Videos oder Fragebanken verbindet die Plattform
              Lernen, Anwendung, Wiederholung und Prüfungsvorbereitung in einem
              zentralen Ökosystem.
            </p>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {differentiators.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-lg shadow-black/10"
              >
                <div className="text-xl font-semibold text-white">
                  {item.title}
                </div>
                <p className="mt-4 leading-7 text-slate-300">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="platforms"
          className="border-y border-white/10 bg-slate-900/50"
        >
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="max-w-2xl">
              <div className="text-sm font-medium uppercase tracking-[0.22em] text-cyan-300">
                Ökosystem
              </div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Eine zentrale Einstiegsseite für alle deine Lernplattformen.
              </h2>
              <p className="mt-4 text-lg text-slate-300">
                Nutzer starten an einem Ort – und wechseln von dort direkt in
                die spezialisierte Plattform für ihre Zertifizierung, ihr
                Themenfeld oder ihren Karrierepfad.
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {platforms.map((platform) => (
                <a
                  key={platform.name}
                  href={platform.href}
                  target={platform.available ? "_blank" : undefined}
                  rel={platform.available ? "noopener noreferrer" : undefined}
                  aria-disabled={!platform.available}
                  className={
                    platform.available
                      ? "group rounded-3xl border border-white/10 bg-white/5 p-7 transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/10"
                      : "group rounded-3xl border border-white/10 bg-white/5 p-7 opacity-70 cursor-not-allowed"
                  }
                >
                  <div className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-medium uppercase tracking-wide text-cyan-200">
                    {platform.badge}
                  </div>
                  <div className="mt-5 text-2xl font-semibold text-white">
                    {platform.name}
                  </div>
                  <p className="mt-3 leading-7 text-slate-300">
                    {platform.description}
                  </p>
                  <div className="mt-6 text-sm font-medium text-cyan-300 transition group-hover:text-cyan-200">
                    {platform.available ? "Plattform öffnen →" : "Bald verfügbar"}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="features" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <div className="text-sm font-medium uppercase tracking-[0.22em] text-cyan-300">
                Feature Stack
              </div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Alles, was Nutzer brauchen, um nicht nur zu lernen – sondern zu
                bestehen.
              </h2>
              <p className="mt-4 text-lg text-slate-300">
                Vom ersten Modul bis zur finalen Prüfungssimulation: jede
                Komponente ist darauf optimiert, Wissenslücken sichtbar zu
                machen und echte Fortschritte auszulösen.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 text-slate-200"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan-300" />
                    <div className="leading-7">{feature}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="preview"
          className="border-y border-white/10 bg-slate-900/50"
        >
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="max-w-3xl">
              <div className="text-sm font-medium uppercase tracking-[0.22em] text-cyan-300">
                Produkt-Vorschau
              </div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Moderne Dashboards, klare Empfehlungen und echte Praxisnähe.
              </h2>
              <p className="mt-4 text-lg text-slate-300">
                Die Landingpage soll bewusst zeigen, dass hinter dem Produkt
                kein statischer Kurskatalog steckt, sondern ein visuell starkes,
                didaktisch durchdachtes Lernsystem.
              </p>
            </div>
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-6 lg:col-span-2">
                <div className="text-sm text-slate-400">
                  Dashboard & Lernsteuerung
                </div>
                <div className="mt-4 rounded-3xl border border-white/10 bg-slate-950/60 p-6">
                  <div className="grid gap-4 md:grid-cols-4">
                    {[
                      ["52h", "Lernzeit"],
                      ["83%", "Quiz-Durchschnitt"],
                      ["7", "Streak"],
                      ["65%", "Exam Readiness"],
                    ].map(([value, label]) => (
                      <div key={label} className="rounded-2xl bg-white/5 p-4">
                        <div className="text-2xl font-semibold text-white">
                          {value}
                        </div>
                        <div className="mt-1 text-sm text-slate-400">
                          {label}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-5">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <div className="text-lg font-semibold text-white">
                          Empfohlene nächste Aktion
                        </div>
                        <div className="mt-1 text-sm text-slate-400">
                          RAID-Konfiguration wiederholen · +15% Potenzial
                        </div>
                      </div>
                      <button className="rounded-xl bg-cyan-400 px-4 py-2 text-sm font-medium text-slate-950">
                        Jetzt üben
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-600/25 to-fuchsia-600/20 p-6">
                <div className="text-sm text-slate-300">Gamification</div>
                <div className="mt-4 text-3xl font-semibold">
                  XP, Erfolge & Motivation
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  Nutzer sehen nicht nur Ergebnisse, sondern erleben
                  Fortschritt, Streaks, Badges, Achievements und sichtbare
                  Bewegung Richtung Zertifizierung.
                </p>
                <div className="mt-6 grid gap-3">
                  <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                    <div className="text-sm text-slate-300">Gesamt XP</div>
                    <div className="mt-1 text-2xl font-semibold">575</div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                    <div className="text-sm text-slate-300">
                      Freigeschaltete Achievements
                    </div>
                    <div className="mt-1 text-2xl font-semibold">6 / 17</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="workflow" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-2xl">
            <div className="text-sm font-medium uppercase tracking-[0.22em] text-cyan-300">
              Lernlogik
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Eine Nutzerführung, die aus Lernen echte Resultate macht.
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {workflow.map((item) => (
              <div
                key={item.step}
                className="rounded-3xl border border-white/10 bg-white/5 p-7"
              >
                <div className="text-sm font-medium text-cyan-300">
                  {item.step}
                </div>
                <div className="mt-4 text-xl font-semibold text-white">
                  {item.title}
                </div>
                <p className="mt-3 leading-7 text-slate-300">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-y border-white/10 bg-slate-900/50">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1fr_1fr] lg:px-8">
            <div>
              <div className="text-sm font-medium uppercase tracking-[0.22em] text-cyan-300">
                Praxis statt Theorie
              </div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Labs, Architektur-Szenarien und Aufgaben wie im echten Job.
              </h2>
              <p className="mt-4 text-lg text-slate-300">
                Besonders im Cloud- und Infrastruktur-Bereich entsteht der große
                Unterschied über praktische Anwendung. Deine Plattformen haben
                genau dafür die stärksten Assets.
              </p>
              <div className="mt-8 grid gap-4">
                {[
                  "Azure Architektur- und Netzwerkszenarien",
                  "Linux- und Terminal-nahe Hands-on-Labs",
                  "Prüfungssimulationen mit klarer Bestehenslogik",
                  "Smart Recommendations auf Basis echter Schwächen",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-slate-200"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-slate-950 to-slate-900 p-6 shadow-2xl shadow-black/20">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="text-sm text-slate-400">
                  Architektur-Szenario
                </div>
                <div className="mt-3 text-2xl font-semibold text-white">
                  Azure Architektur Builder
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Plane Netzwerke, Ressourcen und Infrastruktur visuell – und
                  verknüpfe Szenarien mit echtem Verständnis statt reiner
                  Theorie.
                </p>
                <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
                  <div className="rounded-2xl bg-white/5 p-4">
                    <div className="font-semibold text-white">VMSS</div>
                    <div className="mt-1 text-slate-400">
                      Scale Sets & Architektur
                    </div>
                  </div>
                  <div className="rounded-2xl bg-white/5 p-4">
                    <div className="font-semibold text-white">Networking</div>
                    <div className="mt-1 text-slate-400">
                      Subnets, NSG, Load Balancer
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
            <div>
              <div className="text-sm font-medium uppercase tracking-[0.22em] text-cyan-300">
                Zielgruppen
              </div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Für Menschen gebaut, die in der IT nicht nur konsumieren –
                sondern liefern wollen.
              </h2>
              <div className="mt-8 grid gap-4">
                {audience.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-slate-200"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-600/20 to-cyan-500/10 p-8">
              <div className="text-sm uppercase tracking-[0.2em] text-cyan-200">
                Use Case
              </div>
              <div className="mt-4 text-2xl font-semibold text-white">
                Von der Umschulung bis zum Team-Enablement
              </div>
              <p className="mt-4 leading-7 text-slate-300">
                Die Plattform kann sowohl einzelne Lernende als auch ganze Teams
                bedienen – mit klaren Lernpfaden, Reporting, Prüfungsnähe und
                strukturierter Skill-Entwicklung.
              </p>
            </div>
          </div>
        </section>

        <section
          id="pricing"
          className="border-y border-white/10 bg-slate-900/50"
        >
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="text-sm font-medium uppercase tracking-[0.22em] text-cyan-300">
                Pricing
              </div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Niedrige Einstiegshürde. Klare Upgrades für echten Mehrwert.
              </h2>
              <p className="mt-4 text-lg text-slate-300">
                Die Landingpage sollte Monetarisierung vorbereiten, ohne früh zu
                aggressiv zu verkaufen. Erst Vertrauen, dann Upgrade-Pfade.
              </p>
            </div>
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`rounded-3xl border p-8 ${
                    plan.featured
                      ? "border-indigo-400/50 bg-gradient-to-b from-indigo-500/15 to-fuchsia-500/10 shadow-xl shadow-indigo-500/10"
                      : "border-white/10 bg-white/5"
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="text-2xl font-semibold text-white">
                      {plan.name}
                    </div>
                    {plan.featured && (
                      <div className="rounded-full bg-indigo-400/20 px-3 py-1 text-xs font-medium text-indigo-200">
                        Empfohlen
                      </div>
                    )}
                  </div>
                  <div className="mt-4 text-3xl font-semibold text-white">
                    {plan.price}
                  </div>
                  <p className="mt-3 leading-7 text-slate-300">
                    {plan.description}
                  </p>
                  <div className="mt-6 space-y-3">
                    {plan.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-start gap-3 text-slate-200"
                      >
                        <div className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan-300" />
                        <div>{feature}</div>
                      </div>
                    ))}
                  </div>
                  <button
                    className={`mt-8 w-full rounded-2xl px-5 py-3 text-sm font-medium transition ${
                      plan.featured
                        ? "bg-indigo-500 text-white hover:bg-indigo-400"
                        : "border border-white/15 bg-white/5 text-white hover:bg-white/10"
                    }`}
                  >
                    {plan.cta}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-sm font-medium uppercase tracking-[0.22em] text-cyan-300">
              FAQ
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Die wichtigsten Fragen vor dem Start.
            </h2>
          </div>
          <div className="mt-12 space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <div className="text-lg font-semibold text-white">{faq.q}</div>
                <p className="mt-3 leading-7 text-slate-300">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="cta"
          className="border-t border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,1),rgba(8,47,73,1))]"
        >
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="rounded-[32px] border border-cyan-300/15 bg-gradient-to-r from-cyan-500/10 via-indigo-500/10 to-fuchsia-500/10 p-10 text-center shadow-2xl shadow-black/20">
              <div className="mx-auto max-w-3xl">
                <div className="text-sm font-medium uppercase tracking-[0.22em] text-cyan-300">
                  Final CTA
                </div>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
                  Starte jetzt mit einer Plattform, die Lernen, Praxis und
                  Zertifizierung endlich zusammenbringt.
                </h2>
                <p className="mt-5 text-lg leading-8 text-slate-300">
                  Zentraler Einstieg, spezialisierte Plattformen, echte Labs,
                  moderne Dashboards und klare Fortschrittslogik – bereit für
                  dein nächstes Level.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <a
                    href="#platforms"
                    className="rounded-2xl bg-cyan-400 px-6 py-3 text-base font-medium text-slate-950 transition hover:bg-cyan-300"
                  >
                    Plattformen entdecken
                  </a>
                  <a
                    href="#pricing"
                    className="rounded-2xl border border-white/15 px-6 py-3 text-base text-white transition hover:bg-white/5"
                  >
                    Preise ansehen
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
