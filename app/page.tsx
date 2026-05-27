export default function Home() {
  return (
    <main style={styles.page}>

      {/* HERO */}
      <section style={styles.hero}>
        <div style={styles.overlay}>
          <h1 style={styles.title}>PNEUSERVIS KRNOV</h1>

          <p style={styles.subtitle}>
            Jsme tu pro vás každý den
          </p>

          <p style={styles.heroText}>
            Přezutí • Vyvážení • Opravy defektů • Servis vozidel
          </p>
        </div>
      </section>

      {/* SLUŽBY */}
      <section style={styles.section}>
        <h2 style={styles.h2}>Služby</h2>

        <div style={styles.serviceBox}>

          <p style={styles.serviceText}>
            ✔ <b>
              Přezutí pneumatik osobních, dodávkových i 🚛 NÁKLADNÍCH VOZIDEL
            </b>
          </p>

          <p style={styles.serviceText}>
            ✔ Vyvážení kol a opravy defektů
          </p>

          <p style={styles.serviceText}>
            ✔ Příprava vozidel na STK + zajištění STK
          </p>

          <p style={styles.serviceText}>
            ✔ Výměna oleje, servis brzd, čepů a mechanických částí vozidel
          </p>

          <p style={styles.serviceText}>
            ✔ Rychlé a férové jednání
          </p>

        </div>
      </section>

      {/* GALERIE */}
      <section style={styles.dark}>
        <h2 style={styles.h2}>Práce</h2>

        <div style={styles.gallery}>
          <img src="/foto1.jpg" style={styles.img} />
          <img src="/foto2.jpg" style={styles.img} />
          <img src="/foto3.jpg" style={styles.img} />
        </div>
      </section>

      {/* OTEVÍRACÍ DOBA */}
      <section style={styles.section}>
        <h2 style={styles.h2}>Otevírací doba</h2>

        <div style={styles.hours}>
          <p>Pondělí: 9:00 - 17:00</p>
          <p>Úterý: 9:00 - 17:00</p>
          <p>Středa: 9:00 - 17:00</p>
          <p>Čtvrtek: 9:00 - 17:00</p>
          <p>Pátek: 9:00 - 17:00</p>
          <p>Sobota: 9:00 - 14:00</p>
          <p>Neděle: 9:00 - 14:00</p>

          <br />

          <b>Po telefonické domluvě 24/7</b>
        </div>
      </section>

      {/* KONTAKT */}
      <section style={styles.contact}>
        <h2 style={styles.h2}>Kontakt</h2>

        <div style={styles.contactBox}>
          <p>📞 <b>737 886 632</b></p>
          <p>📍 Opavská 61, Krnov (areál Řempo)</p>
          <p>⚡ Rychlé a férové ceny</p>
        </div>
      </section>

    </main>
  );
}

/* STYLES */
const styles: any = {
  page: {
    fontFamily: "Arial, sans-serif",
    background: "#0b1220",
    color: "white",
  },

  hero: {
    height: "85vh",
    backgroundImage: "url('/hero.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    position: "relative",
  },

  overlay: {
    background: "rgba(0,0,0,0.65)",
    padding: "40px",
    borderRadius: "16px",
    maxWidth: "800px",
  },

  title: {
    fontSize: "56px",
    marginBottom: "10px",
  },

  subtitle: {
    fontSize: "18px",
    opacity: 0.9,
    marginBottom: "10px",
  },

  heroText: {
    opacity: 0.8,
    fontSize: "16px",
  },

  section: {
    padding: "80px 20px",
    textAlign: "center",
  },

  dark: {
    padding: "80px 20px",
    textAlign: "center",
    background: "#0f172a",
  },

  h2: {
    fontSize: "34px",
    marginBottom: "30px",
  },

  serviceBox: {
    maxWidth: "900px",
    margin: "0 auto",
    background: "#111827",
    padding: "35px",
    borderRadius: "18px",
    textAlign: "left",
    lineHeight: "2",
  },

  serviceText: {
    fontSize: "20px",
    marginBottom: "15px",
  },

  gallery: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "15px",
    maxWidth: "1000px",
    margin: "0 auto",
  },

  img: {
    width: "100%",
    height: "220px",
    objectFit: "cover",
    borderRadius: "14px",
  },

  hours: {
    maxWidth: "420px",
    margin: "0 auto",
    background: "#111827",
    padding: "20px",
    borderRadius: "14px",
    lineHeight: "1.8",
  },

  contact: {
    padding: "80px 20px",
    textAlign: "center",
    background: "#0b1220",
  },

  contactBox: {
    maxWidth: "420px",
    margin: "0 auto",
    background: "#111827",
    padding: "25px",
    borderRadius: "14px",
    lineHeight: "1.8",
  },
};