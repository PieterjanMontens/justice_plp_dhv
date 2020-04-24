---
templateKey: article-page
title: Accessibilité
slug: a11y
date: 2020-04-24T13:03:14.755Z
cover: /img/screen_reader.jpg
tags:
  - accessibilité
  - technologie
meta_title: a11y
meta_description: >-
  L'un des aspects auquel j'ai été sensibilisé récemment est celui de
  **l’accessibilité**: rendre une interface compréhensible et utilisable au plus
  grand nombre de personnes, en particulier aux personnes en situation de
  handicap, qu'il soit moteur, visuel, cognitif ou autre
---
L'un des aspects auquel j'ai été sensibilisé récemment est celui de **l’accessibilité**: rendre une interface compréhensible et utilisable au plus grand nombre de personnes, en particulier aux personnes en situation de handicap, qu'il soit moteur, visuel, cognitif ou autre. Cette sensibilisation se manifeste dans les choix de mes outils, par exemple [Gatsby](https://www.gatsbyjs.org/), qui m'avertit et peut m'empêcher de publier une modification si celle-ci met à mal l'accessibilité de ce site.

Des [normes](https://www.w3.org/WAI/fundamentals/accessibility-intro/fr) existent et sont régulièrement mis à jour, et suivant les nouveaux usages et développements technologiques. Elles commencent par un simple respect des standards du web, et vont jusqu'à assister les lecteurs d'écrans dans leur compréhension détaillée d'une page, afin qu'elle puisse être vocalisée éfficacement.

Un outil développé pour et par un service public se doit, évidemment, d'être le plus accessible et inclusif possible.

Malheureusement, les outils et services mis à dispotision par la Justice ont, par obsolescence ou choix technologiques infortunés, un niveau d'accessibilité **généralement faible**.

[Plusieurs outils](https://www.anysurfer.be/fr/en-pratique/sites-web/outils-de-test) existent pour vérifier et valider l'accessibilité d'un site. Le navigateur Chrome (celui de Google), par exemple, intègre un [outil d'audit de l’accessibilité](https://developers.google.com/web/tools/chrome-devtools/accessibility/reference), qui donne un score sur 100 (c'est à nuancer car toute validation automatique de l'accessibilité manque d'exhaustivité: un bon score indique une accessibilité généralement bonne, mais pas nécessairement fantastique). La** [responsivité](https://www.definitions-marketing.com/definition/responsive-web-design/)**, ou la capacité de la page à s'adapter à des écrans plus ou moins grands (laptops, tablettes, smartphones) est également un aspect important (une grande part du public utilise des interfaces tactiles, tablettes smartphones). 

J'ai soumis quelques interfaces de recherche documentaires, qu'on peut trouver sur [BelgiqueLex,](https://www.belgiquelex.be/fr/legislation) à un test rapide, donc voici les résultats (HTTPS indique la sécurisation par défaut de la connexion):

| Nom             | Url                                                             | Score | Responsif | HTTPS |
| --------------- | --------------------------------------------------------------- | ----- | --------- | ----- |
| Justel          | http://www.ejustice.just.fgov.be/loi/loi.htm                    | 27    | Non       | Non   |
| Portail Justice | https://justice.belgium.be/fr                                   | 90    | Oui       | Oui   |
| Vlaamse Codex   | https://codex.vlaanderen.be/                                    | 91    | Oui       | Oui   |
| Wallex          | https://wallex.wallonie.be/home.html                            | 58    | Oui       | Oui   |
| RefLex          | http://reflex.raadvst-consetat.be/reflex/?page=chrono&lang=fr   | 36    | Non       | Non   |
| Juridat         | http://jure.juridat.just.fgov.be/JuridatSearchCombined/?lang=fr | 0*    | Non       | Non   |
| SenLex          | https://senlex.senate.be/fr                                     | 83    | Oui       | Oui   |
| Moniteur Belge  | http://www.ejustice.just.fgov.be/doc/rech_f2.htm                | 32    | Non       | Non   |

* résultats complets sur le [google drive](https://docs.google.com/spreadsheets/d/1eNgYdjcoS3k-1AiNVAWDodzAbUo8KEiQ1rpZvcR2IWY/edit#gid=0)
* Juridat se compose d'une interface Flash, peu accessible voir indisponible sur certains supports et navigateurs

Les résultats sont plutôt indicateurs de l'obsolescence de ces outils: un outil récent développé par une équipe compétente aura de bonnes chances d'intégrer les meilleures pratiques. Les services plus anciens n'ont pu intégrer, au moment de leur conception, les moyens et stratégies disponibles aujourd'hui (ce qui ne veut pas dire qu'ils n'ont pu être mis à jour depuis... ).