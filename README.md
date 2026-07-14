# La Maison Café — site

Bar 70's, 4 rue Lebrun (quartier Joffre), Nantes.
Statique : HTML / CSS / JS, aucune dépendance, aucun build.

## Direction artistique

Groovy 70's plein cadre, calé sur les maquettes de référence : hero photo pleine
largeur, découpes « blob » ondulées sur les photos, vagues entre les sections,
grosse fleur tournante, bandeau défilant « Good vibes ».

**Palette**

| Rôle | Hex |
|---|---|
| Crème (fond) | `#FBF0DC` |
| Crème 2 / cartes | `#F7E7C6` |
| Blanc cassé | `#FFF7E6` |
| Orange brûlé | `#E2622B` |
| Moutarde | `#F0A93B` |
| Olive | `#4E5B25` |
| Brique | `#C0402B` |
| Brun (sections sombres) | `#2A1A12` |

**Typographie**
- **Cornery** — display groovy (hero, titres de section, prix, noms de soirées).
  Fichiers dans `assets/fonts/`. Couvre tous les accents français et l'€.
- **Archivo** — texte courant, nav, boutons (Google Fonts).

**Éléments récurrents** — fleur 8 pétales (masque SVG, réutilisé en icône et en
puce de titre), vagues SVG entre les sections, découpes blob via `clipPath`,
tampon rotatif « Good vibes », bandeau défilant.

## ⚠️ À régler avant mise en ligne

**Licence de la police.** Cornery est fournie en *« Demo for Personal Use »*
(voir `iFonts-License.txt` dans le dossier d'origine). Pour un site client —
donc un usage commercial — **il faut acheter la licence** ou remplacer la police.
En cas de remplacement, seule la variable `--d` dans `styles.css` est à changer.

**Les photos.** Tout le site repose sur les photos, et il n'y en a aucune de
vraie pour l'instant : `assets/img/` ne contient que des placeholders générés.
À remplacer en gardant les mêmes noms de fichiers :

| Fichier | Contenu attendu | Format |
|---|---|---|
| `hero.jpg` | Intérieur du bar, plan large, ambiance chaude | paysage, 1800×1100 min |
| `piece-cuisine.jpg` · `piece-salon.jpg` · `piece-grenier.jpg` · `piece-bain.jpg` · `piece-terrasse.jpg` | Une par pièce | portrait, ratio ~3/4 |
| `histoire.jpg` | La façade rue Lebrun | paysage 4/3 |
| `aff-1..5.jpg` | Les affiches des soirées récurrentes | portrait, ratio ~0.7 |
| `boisson-1..3.jpg` | Picon bière, pinte, cocktail | carré |
| `galerie-1..8.jpg` | Ambiance, public, soirées | paysage |

La **salle de bain** (on boit les pieds dans la baignoire) est le hook du lieu :
c'est la photo prioritaire.

## Contenu vérifié

Adresse, téléphone (02 40 37 04 12), horaires (lun–sam 15h→2h, dim 17h→2h),
happy hour 17h–20h lun–ven, demi 2,60 €, pinte 5 € / 4 € en HH, café 1,50 €,
Picon bière, fléchettes, babyfoot, jeux de société, terrasse, accès PMR.

**Rien n'est inventé dans l'agenda** : uniquement les formats récurrents
(Get Down, Coffee House, concerts, stand-up, soirées 70/80/90) avec renvoi vers
Instagram pour les vraies dates. Pas de date de création, pas d'e-mail : ces
informations n'ont pas été vérifiées.

## Lancer

```bash
cd /Users/louisonbobin/maisoncafe-site && python3 -m http.server 8899
```
