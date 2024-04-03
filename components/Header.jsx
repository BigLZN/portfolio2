function Header() {
  function randomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  }

  function handleImgClick() {
    const numConfettis = 100;
    for (let i = 0; i < numConfettis; i++) {
      const confetti = document.createElement("div");
      confetti.className = "confetti";
      confetti.style.left = Math.random() * window.innerWidth + "px";
      confetti.style.animationDelay = Math.random() + "s";
      confetti.style.backgroundColor = randomColor();
      document.body.appendChild(confetti);
    }

    setTimeout(function () {
      const confettis = document.querySelectorAll(".confetti");
      confettis.forEach(function (confetti) {
        confetti.remove();
      });
    }, 1000);
  }

  return (
    <>
      <header>
        <nav>
          <div className="navselect">
            <a href="./Header.jsx">
              <img src="iMG/pp.png" alt="imgnav" className="imgnav" />
            </a>
            <ul>
              <li>
                <a href="#">Accueil</a>
              </li>
              <li>
                <a href="#">Projet</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <hr className="divider" />
      <main>
        <div className="topall">
          <img
            src="iMG/linkdin.jpg"
            alt="imgnav"
            className="topimg"
            onClick={handleImgClick}
          />
          <div className="top">
            <h1>Apprenti Développeur Web</h1>
            <hr className="divider1" />

            <p className="para">
              Salut, je suis Quentin THUILLIER, j&apos;ai 19 ans et depuis que
              je suis tout petit, l&apos;informatique m&apos;a toujours
              passionné. <br />
              C&apos;est comme si j&apos;avais été attiré par les écrans et les
              lignes de code dès mon plus jeune âge. <br />
              Je suis constamment à la <br />
              recherche de nouvelles connaissances et de nouvelles compétences
              dans ce domaine en perpétuelle évolution.
              <br />
              J&apos;adore explorer les différentes facettes de la technologie,
              que ce soit la programmation, <br />
              la conception de logiciels ou même la résolution de problèmes
              complexes. Pour moi, l&apos;informatique n&apos;est pas seulement
              un passe-temps, <br />
              c&apos;est une véritable passion qui me pousse à repousser mes
              limites et à découvrir de nouvelles possibilités chaque jour.{" "}
              <br />
              <br />
              J&apos;adore cacher des secrets dans mes sites :p
            </p>
          </div>
        </div>
      </main>
      <hr className="divider" />
    </>
  );
}

export default Header;
