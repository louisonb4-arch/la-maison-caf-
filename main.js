/* La Maison Café — interactions */

/* ── Intro ────────────────────────────────────────────────
   Les rideaux montent, le hero se compose derrière.
   Filet de sécurité : quoi qu'il arrive, on lève au bout
   de 2,6 s — l'intro ne doit jamais bloquer la page.       */
const reduit = matchMedia('(prefers-reduced-motion: reduce)').matches;
const corps = document.body;

/* L'intro se joue TOUJOURS, et toujours sur le hero.

   Deux choses l'en empêchaient :
   · le navigateur restaure la position de scroll d'une visite à l'autre,
     donc on rechargeait au milieu du site ;
   · l'URL gardait le « #carte » d'un clic précédent, ce qui suffisait à
     faire sauter l'animation au rechargement.
   On coupe la restauration, on efface le fragment, on remonte en haut. */
if ('scrollRestoration' in history) history.scrollRestoration = 'manual';

if (location.hash) {
  history.replaceState(null, '', location.pathname + location.search);
}

scrollTo(0, 0);
corps.classList.add('ferme');

/* La marée, en un seul geste :
   1. leve → les vagues descendent du haut et s'arrêtent pile à la place
             des vagues du hero, pendant que le crème glisse vers le bas.
   2. fini → on efface l'intro. Les vraies vagues du hero sont dessous,
             au même endroit : on ne voit rien passer.               */
let lance = false;

const finir = () => {
  corps.classList.add('fini');
  corps.classList.remove('ferme');
};

const lancer = () => {
  if (lance) return;
  lance = true;

  if (reduit) {
    corps.classList.add('leve');
    finir();
    return;
  }

  scrollTo(0, 0);            // on est bien sur le hero au moment du geste
  corps.classList.add('leve');

  /* On efface l'intro à la VRAIE fin de la descente, pas sur un minuteur.
     Un setTimeout continue de tourner quand l'onglet est en arrière-plan,
     alors que les animations CSS y sont gelées : l'intro se serait effacée
     avant d'avoir joué une seule image, et on n'aurait jamais vu les vagues. */
  const derniere = document.querySelector('.maree--1');   // celle qui part en dernier
  derniere.addEventListener('animationend', finir, { once: true });

  setTimeout(finir, 6000);   // filet, si l'événement ne vient jamais
};

/* On n'ouvre le rideau que si la page est réellement regardée : en
   arrière-plan, le navigateur gèle les animations CSS. */
const lancerQuandVisible = () => {
  if (document.visibilityState === 'visible') lancer();
  else document.addEventListener('visibilitychange', lancerQuandVisible, { once: true });
};

/* Retour arrière : Safari et Firefox restaurent la page telle qu'on l'a
   quittée (bfcache), intro déjà jouée et effacée. On remet tout à zéro
   et on rejoue. */
addEventListener('pageshow', (e) => {
  if (!e.persisted) return;
  lance = false;
  corps.classList.remove('leve', 'fini');
  corps.classList.add('ferme');
  scrollTo(0, 0);
  lancerQuandVisible();
});

addEventListener('load', () => setTimeout(lancerQuandVisible, 600));

/* ── Bandeau ──────────────────────────────────────────────
   La piste est dupliquée : l'animation la décale de -50 %,
   donc il faut deux exemplaires pour que la boucle soit
   invisible.                                                */
const piste = document.getElementById('piste');
piste.append(...[...piste.children].map(n => n.cloneNode(true)));

// ── nav collante ──
const nav = document.getElementById('nav');
const surVeille = () => nav.classList.toggle('colle', scrollY > 60);
surVeille();
addEventListener('scroll', surVeille, { passive: true });

// ── burger ──
const burger = document.getElementById('burger');
const liens = document.getElementById('navLiens');
burger.addEventListener('click', () => {
  const ouvert = liens.classList.toggle('ouvert');
  burger.classList.toggle('actif', ouvert);
  burger.setAttribute('aria-expanded', String(ouvert));
  document.body.style.overflow = ouvert ? 'hidden' : '';
});
liens.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  liens.classList.remove('ouvert');
  burger.classList.remove('actif');
  burger.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}));

// ── lien actif selon la section visible ──
const cibles = [...liens.querySelectorAll('a')]
  .map(a => ({ a, section: document.querySelector(a.getAttribute('href')) }))
  .filter(x => x.section);

const obsNav = new IntersectionObserver((entrees) => {
  entrees.forEach(e => {
    if (!e.isIntersecting) return;
    const actif = cibles.find(x => x.section === e.target);
    cibles.forEach(x => x.a.classList.toggle('actif', x === actif));
  });
}, { rootMargin: '-45% 0px -50% 0px' });

cibles.forEach(x => obsNav.observe(x.section));

/* ── Révélations ─────────────────────────────────────────
   Cascade figée dans le HTML (pas dans l'ordre d'arrivée de
   l'observer) : un scroll rapide ne laisse jamais un bloc
   vide derrière lui.                                       */
const GROUPES = [
  '.pieces .titre-sec, .pieces__intro',
  '.carte',
  '.histoire__txt, .histoire__vue',
  '.agenda__txt',
  '.aff',
  '.carte-sec__txt',
  '.boisson',
  '.galerie .titre-sec',
  '.g',
  '.infos .titre-sec',
  '.bloc, .plan',
  '.commodites',
];

const aReveler = [];
GROUPES.forEach(sel => {
  document.querySelectorAll(sel).forEach((el, i) => {
    el.classList.add('rev');
    el.style.setProperty('--d2', `${Math.min(i * 70, 380)}ms`);
    aReveler.push(el);
  });
});

const montrer = el => { el.classList.add('vu'); obs.unobserve(el); };

const obs = new IntersectionObserver((entrees) => {
  entrees.forEach(e => { if (e.isIntersecting) montrer(e.target); });
}, { threshold: 0, rootMargin: '0px 0px -10% 0px' });

aReveler.forEach(el => obs.observe(el));

// Filet : ce qui est déjà sous le pli au chargement s'affiche sans attendre.
requestAnimationFrame(() => {
  aReveler.forEach(el => {
    if (el.getBoundingClientRect().top < innerHeight) montrer(el);
  });
});

document.getElementById('annee').textContent = new Date().getFullYear();
