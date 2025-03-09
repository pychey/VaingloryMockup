import Hero from "./components/Hero";
import { HERO_DATA } from "./data";
import VainGlory from "./assets/logo.png";

function App() {
  return (
    <div>
      <header class="hero-banner">
          <h1>Meet The Heroes</h1>
          <img src={VainGlory} alt="VainGlory"/>
      </header>
      <section class="role">
          <ul>
              <li class="selected">All</li>
              <li>Assassin</li>
              <li>Mage</li>
              <li>Protector</li>
              <li>Sniper</li>
              <li>Warrior</li>
              <li>Free Hero Rotation</li>
          </ul>
      </section>
      <main class="hero-grid">
          { HERO_DATA.map((hero)=><Hero hero={hero}/>) }
      </main>
    </div>
  );
}

export default App;
