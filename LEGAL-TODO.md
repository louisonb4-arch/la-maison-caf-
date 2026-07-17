# LEGAL-TODO — La Maison Café (SARL LES PADAWANS)

> **Ne pas mettre en ligne avant d'avoir traité la section 1.**
> État au 17 juillet 2026. Aucune donnée n'a été inventée : tout ce qui n'a pas pu être
> vérifié à une source est marqué `[à fournir]` et apparaît **en surbrillance rose sur le
> site lui-même**, exprès — pour qu'un trou se voie au lieu de se combler avec une
> supposition.

---

## 1. Bloquant avant la mise en ligne

### 1.1 Identité de l'éditeur (`mentions-legales.html`)

| Donnée | État |
|---|---|
| Capital social | **manquant** — obligatoire pour une SARL, ne figure dans aucun registre public |
| RCS | **à confirmer** — « RCS Nantes 791 209 851 » est la forme attendue (greffe déduit du siège), non vérifiée à une source |
| Directeur de la publication | **manquant** — la société n'a qu'un gérant, **Alexandre L'Hérondelle** : c'est lui par défaut, mais la désignation doit être confirmée et le nom inscrit |
| E-mail | **manquant** — apparaît dans les mentions légales, la confidentialité et le bloc accessibilité |

Le téléphone (**02 40 37 04 12**) et l'adresse (**4 rue Lebrun, 44000 Nantes**) sont déjà
renseignés partout : ils sont vérifiés.

### 1.2 Enseigne ≠ dénomination sociale — le point à ne pas rater

Le bar s'appelle **La Maison Café**. Ce n'est **pas** le nom de la société.

- **Dénomination sociale : LES PADAWANS** (c'est ce nom qui figure au registre)
- **Enseigne : La Maison Café** (le nom sur la façade)

Les mentions légales **disent les deux**, et la ligne de pied de page affiche
« La Maison Café · SARL LES PADAWANS ». C'est volontaire : mentionner uniquement
l'enseigne serait un défaut d'identification de l'éditeur.

> **Contexte relevé** : le même gérant, Alexandre L'Hérondelle, dirige aussi
> **Le Delirium Café**. Vérifier auprès du client que c'est bien **LES PADAWANS**
> (SIREN 791 209 851) qui exploite La Maison Café et édite ce site, et non une autre
> de ses sociétés.

### 1.3 Hébergeur (article 6 III-1 LCEN — obligatoire)

Nom, adresse, téléphone et site de l'hébergeur. **Aucun hébergeur définitif n'est arrêté**,
donc les quatre champs sont vides dans `mentions-legales.html`, et la durée de conservation
des journaux de connexion est vide dans `confidentialite.html`.

Une fois l'hébergeur retenu, vérifier s'il implique un **transfert hors UE** (section
correspondante de `confidentialite.html`).

> Le dossier contient un `.vercel/project.json` (projet `la-maison-cafe`) : le site a été
> lié à Vercel. **Cela ne suffit pas à l'affirmer dans les mentions légales** — ni le
> domaine servi, ni l'entité d'hébergement retenue ne sont établis. À confirmer, puis à
> écrire.

### 1.4 La police Cornery n'est pas licenciée pour cet usage

Les titres du site (hero, titres de section, prix, noms de soirées) sont composés en
**Cornery**, fournie en version **« Demo — for Personal Use »**. **Un site d'établissement
est un usage commercial.** En l'état, le site est en infraction avec la licence de la police.

Trois issues, à trancher :

1. acheter la licence commerciale de Cornery ;
2. la remplacer par une police librement utilisable en commercial ;
3. la remplacer par une police achetée ailleurs.

> **Le remplacement est peu coûteux techniquement** : seule la variable `--d` dans
> `styles.css` est à changer (plus le bloc `@font-face` de Cornery en tête de fichier).
> La police de remplacement doit couvrir les accents français et le caractère €.

Le point est signalé sur `mentions-legales.html` (§ Polices de caractères) en surbrillance.

### 1.5 Photographies — ce sont toutes des placeholders

**Aucune image du site n'est une photo réelle de l'établissement.** `assets/img/` ne
contient que des visuels de substitution générés pour la maquette : `hero.jpg`, les cinq
`piece-*.jpg`, `histoire.jpg`, les `aff-1..5.jpg`, les `boisson-1..3.jpg` et les
`galerie-1..8.jpg`.

Conséquences :

- **il n'y a pas de crédit photo à afficher aujourd'hui**, et il n'y en a volontairement
  aucun sur le site : le pied de page ne crédite personne, contrairement à d'autres sites
  de la série ;
- la section « Photographies » des mentions légales **le dit franchement** plutôt que
  d'annoncer un auteur qui n'existe pas ;
- une fois les vraies photos livrées, il faudra : renseigner l'auteur et le crédit,
  documenter l'étendue de la cession de droits (support, durée, territoire), et vérifier
  les autorisations « droit à l'image » des personnes reconnaissables. **Un bar qui
  accueille du public et des concerts : le point est réel, pas théorique.**

Le détail des formats attendus est déjà dans le `README.md`.

### 1.6 Vérifier avant publication

```bash
grep -rn "à fournir\|à confirmer\|à trancher\|à régler" *.html    # ne doit plus rien renvoyer
```

---

## 2. Ce qui a été vérifié (et n'est donc pas à redemander)

Relevé le **17 juillet 2026** au registre national des entreprises via l'API publique
`recherche-entreprises.api.gouv.fr` :

- Dénomination sociale : **LES PADAWANS**
- Enseigne : **La Maison Café**
- Forme : **SARL** (code INSEE 5499 — société à responsabilité limitée)
- Siège : **4 rue Lebrun, 44000 Nantes**
- SIREN : **791 209 851** · SIRET siège : **791 209 851 00017**
- TVA : **FR86791209851**
- APE : **56.30Z — Débits de boissons** (cohérent avec l'activité : c'est un bar)
- Immatriculation : **30 janvier 2013**
- Gérant : **Alexandre L'Hérondelle** (personne physique, gérant unique)
- Coordonnées GPS du siège : **47.2201759488183, -1.54957601915081**
- État administratif : **actif**

**Le siège social est à la même adresse que le bar** (4 rue Lebrun). Il n'y a donc pas à
distinguer l'éditeur du lieu : c'est le même endroit. C'est écrit tel quel dans l'encadré
« D'où viennent ces données » des mentions légales.

Les coordonnées GPS ne sont pas utilisées sur le site (il n'y a pas de JSON-LD dans
`index.html`) — à ajouter si l'on veut un balisage `LocalBusiness` avec le champ `geo`.

---

## 3. Pages légales : ce qui a été créé, et ce qui ne l'a pas été

La rubrique s'appelle **« Le tiroir de l'entrée »** — dans une maison, les papiers finissent
tous là. C'est la déclinaison de la DA (« le bar est une maison ») sur les pages légales.

### Créées

| Page | Pourquoi |
|---|---|
| `mentions-legales.html` | Obligatoire (art. 6 III LCEN) pour tout site édité par une société. Contient la section **Vente d'alcool** (art. L3342-1 et L3342-3 du code de la santé publique), obligatoire pour un débit de boissons. |
| `confidentialite.html` | Transparence RGPD sur les journaux de l'hébergeur et les liens sortants, même sans collecte. Contient la section cookies (ancre `#cookies`). |

### Volontairement non créées

| Page | Pourquoi pas |
|---|---|
| **CGV** | Ce site ne vend rien : aucun paiement, aucune réservation en ligne. Les réservations se font **par téléphone**. Ce qui se vend au comptoir se règle au comptoir. Une CGV serait un document sans objet. |
| **CGU** | Aucun compte, aucun contenu déposé par l'utilisateur, aucun service interactif. Sans objet. |
| **Droit de rétractation** | Pas de vente à distance depuis ce site. |
| **Bannière de consentement cookies** | Voir § 4. |
| **`sitemap.xml`** | **Impossible sans inventer le domaine** — voir § 5. |

> Contrairement à d'autres sites de la série, **aucun lien légal ne pointe vers un ancien
> site du client** : il n'y a pas d'ancien site à raccorder, et donc pas de CGV ni de page
> Contact existantes qui tomberaient à la mise en ligne. Rien à préserver de ce côté.
> À reconfirmer avec le client s'il possède des CGV ailleurs.

---

## 4. Cookies, traceurs, données

### Ce que le site fait réellement — vérifié le 17 juillet 2026 dans le code

| | |
|---|---|
| Cookies déposés | **aucun** |
| Stockage local | **aucun** — aucun `localStorage`, aucun `sessionStorage` dans le code |
| Mesure d'audience | **aucune** |
| Requêtes vers des tiers | **aucune** — après rapatriement des polices, plus aucun `src`/`href` de ressource chargée hors du site |
| Formulaires | **aucun** |
| Comptes utilisateurs | **aucun** |
| Newsletter | **aucune** |
| Paiement | **aucun** |
| Carte Google Maps intégrée | **aucune** — le plan du pied de page est un **dessin SVG fait à la main**, il ne charge rien chez Google ; l'itinéraire est un simple lien sortant |

Commande de contrôle utilisée :

```bash
grep -rn -iE 'cookie|localStorage|sessionStorage|gtag|analytics|fbq|<iframe|<form' . --include='*.html' --include='*.js'
grep -rhoE '(src|href)="https?://[^"]*"' *.html
```

Les seules URL externes restantes sont des **liens sortants** (`href` sur lesquels il faut
cliquer) : Instagram, Google Maps, CNIL, l'API entreprises et Vokum. **Aucune ressource
tierce n'est chargée.**

### Pourquoi il n'y a pas de bannière

L'article 82 de la loi Informatique et Libertés impose le consentement **avant tout dépôt de
cookie non strictement nécessaire**. Aucun cookie n'étant déposé, il n'y a rien à consentir.
Une bannière serait une gêne sans objet. C'est un choix argumenté, pas un oubli.

**Ce qui déclencherait l'obligation d'en poser une :**

- ajouter Google Analytics, Matomo (en mode non exempté), un pixel Meta ou tout traceur ;
- **intégrer une carte Google Maps en `<iframe>`** (aujourd'hui l'itinéraire est un simple
  lien sortant, et le plan est un dessin — exprès) ;
- **intégrer un widget Instagram** pour l'agenda ou la galerie (aujourd'hui c'est un lien
  sortant, exprès) ;
- intégrer une vidéo, un lecteur audio tiers ou une billetterie ;
- **recharger les polices depuis Google Fonts** — voir ci-dessous.

Dans ces cas : dispositif Refuser / Accepter / Personnaliser, refus aussi simple que
l'acceptation, aucun dépôt avant consentement, lien permanent de modification du choix dans
le pied de page.

### Polices — ce qui a changé le 17 juillet 2026

Le site chargeait **Archivo depuis `fonts.googleapis.com` / `fonts.gstatic.com`**. Chaque
visite transmettait donc l'adresse IP du visiteur à Google, sans consentement — le point
précis sur lequel la CNIL et plusieurs autorités européennes ont sanctionné des éditeurs.
Les `<link rel="preconnect">` aggravaient le cas en ouvrant la connexion d'entrée de jeu.

Archivo est désormais **auto-hébergée** dans `assets/fonts/` :

| Fichier | Contenu | Poids |
|---|---|---|
| `archivo-normal-latin.woff2` | variable, wght 100→900 | 35 Ko |
| `archivo-normal-latin-ext.woff2` | variable, wght 100→900 | 32 Ko |
| `archivo-italic-latin.woff2` | statique, 400 | 16 Ko |
| `archivo-italic-latin-ext.woff2` | statique, 400 | 13 Ko |

Total **~97 Ko**, sous-ensembles **latin + latin-ext** uniquement (le vietnamien servi par
Google a été écarté : le site est en français). Licence **SIL Open Font License 1.1**.
Quatre règles `@font-face` en tête de `styles.css`, `font-display: swap`, plus un
`<link rel="preload">` sur le romain latin dans les trois pages.

> **Attention à ne pas confondre** : Archivo est réglée (§ licence OK, auto-hébergée).
> **Cornery ne l'est pas** — voir § 1.4, c'est un point bloquant distinct.

**Test de non-régression :** ouvrir l'onglet Réseau, filtrer sur « third-party ». Le compte
doit rester à zéro.

---

## 5. Le domaine n'est pas connu — pas de `sitemap.xml`, pas de `canonical`

**Le site ne contient aucune trace du domaine sur lequel il sera servi** : pas de
`sitemap.xml`, pas de `robots.txt`, aucune balise `canonical`, aucune `og:url` dans
`index.html`.

Conséquences assumées :

- **`sitemap.xml` n'a pas été créé.** Le protocole sitemap impose des URL **absolues** :
  en fabriquer un obligerait à inventer le domaine. Le nom du projet Vercel
  (`la-maison-cafe`) **n'est pas** un domaine — l'URL déployée peut porter un suffixe.
- Les pages légales ne portent **ni `canonical` ni `og:url`**, pour la même raison, alors
  que le gabarit de référence en a. Ce n'est pas un oubli.

**À faire dès que le domaine est arrêté** (c'est un travail de 10 minutes) :

1. ajouter `<link rel="canonical">` et `<meta property="og:url">` sur `index.html`,
   `mentions-legales.html` et `confidentialite.html` ;
2. créer `sitemap.xml` avec les trois pages — `index.html` en `priority` 1.0,
   `mentions-legales.html` et `confidentialite.html` en **`priority` 0.2**,
   `lastmod` **2026-07-17** ;
3. créer `robots.txt` pointant le sitemap.

---

## 6. À vérifier après la mise en ligne

- [ ] `grep -rn "à fournir\|à confirmer\|à trancher\|à régler" *.html` ne renvoie plus rien
- [ ] La licence de **Cornery** est achetée, ou la police est remplacée (§ 1.4)
- [ ] Les **vraies photos** ont remplacé les placeholders, avec crédit et droits documentés (§ 1.5)
- [ ] Le bloc **hébergeur** des mentions légales est renseigné (§ 1.3)
- [ ] `canonical`, `og:url`, `sitemap.xml` et `robots.txt` pointent le vrai domaine (§ 5)
- [ ] Le site est déclaré dans Google Search Console
- [ ] La fiche Google Business est cohérente avec les horaires et les prix du site
- [ ] Aucune requête tierce dans l'onglet Réseau
- [ ] `document.cookie` est vide
- [ ] Les prix affichés (demi 2,60 € · pinte 5 € / 4 € en HH · café 1,50 €) sont toujours
      ceux du comptoir — le site précise qu'ils sont indicatifs, mais autant qu'ils soient justes
