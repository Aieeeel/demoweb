export default function Home() {
  return (
    <main>
      <nav style={{display:'flex',justifyContent:'space-between',padding:'24px 48px'}}>
        <h2>AIEL</h2>
        <div style={{display:'flex',gap:'24px'}}>
          <span>Portfolio</span>
          <span>About Us</span>
          <span>Contact Us</span>
        </div>
      </nav>

      <section style={{padding:'120px 48px',textAlign:'center'}}>
        <h1 style={{fontSize:'72px'}}>AIEL</h1>
        <p>Accumulate. Invest. Evolve. Legacy.</p>
        <p>Building long-term wealth through disciplined investing.</p>
      </section>

      <section style={{padding:'80px 48px'}}>
        <h2>Portfolio</h2>
        <p>Digital Assets • Emerging Technologies • Long-Term Opportunities</p>
      </section>

      <section style={{padding:'80px 48px'}}>
        <h2>About Us</h2>
        <p>AIEL stands for Accumulate. Invest. Evolve. Legacy.</p>
      </section>

      <section style={{padding:'80px 48px'}}>
        <h2>Contact Us</h2>
        <input placeholder="Name" /><br/><br/>
        <input placeholder="Email" /><br/><br/>
        <textarea placeholder="Message" />
      </section>
    </main>
  );
}