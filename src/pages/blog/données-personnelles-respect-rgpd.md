---
templateKey: article-page
title: 'Données personnelles, respect RGPD'
slug: rgpd
date: 2020-04-21T08:34:29.049Z
cover: /img/anon_etaamb.jpg
tags:
  - RGPD
  - architecture
meta_title: rgpd
meta_description: >-
  Un aspect majeur de toute solution de publication de données aussi sensibles
  que des arrêts et jugements est le respect du RGPD, **la protection des
  données personnelles**. La protection de ses données est même à l'origine de
  cette initiative: il ne paraît pas concevable que la Justice puisse perdre la
  maîtrise et le contrôle des données et des algorithmes qui les traitent.
---
Un aspect majeur de toute solution de publication de données aussi sensibles que des arrêts et jugements est le respect du RGPD, **la protection des données personnelles**. La protection de ses données est même à l'origine de cette initiative: il ne paraît pas concevable que la Justice puisse perdre la maîtrise et le contrôle des données et des algorithmes qui les traitent.

Plusieurs approches sont possible pour permettre la publication des textes: l'**anonymisation** (noircissement, troncature, substitution, et la généralisation de paramètres de taille, d'échelle ou de grandeur) et la **pseudonymisation** (qui garde un lien entre personnes et entités mentionnés dans le texte, mais sans qu'elles soient identifiables ou qu'elles puissent être mise en relation avec une personne ou une entité réelle).\
La première, l'anonymisation, est ce qu'il y a de plus simple et de rapide, et même une approche "naïve", à l'instar de ce que j'ai implémenté pour [etaamb.be](https://www.etaamb.be/fr/loi_n2016009207.html) en dialogue avec l'[autorité de protection des données](https://www.autoriteprotectiondonnees.be/lexique/commission-vie-privee) (anciennement commission vie privée) peut avoir des résultats valables, et pourrait suffire pour un MVP, une version "prototype".

La pseudonymisation, qui à des avantages par rapport à l'anonymisation, est plus complexe, et certains acteurs privés proposent des services très efficaces et experts, à l'instar de [Pythagoria](http://www.pythagoria.com/), pour en avoir vu une démonstration.

Sur ce point, il est important de faire une distinction: une architecture applicative modulaire correcte, tel que le flux de traitement [déjà détaillé](https://justice-pourlepeuple-doorhetvolk.be/blog/structure-et-architecture-g%C3%A9n%C3%A9rale/), est parfaitement capable d'intégrer une solution ou un service spécifique pour un besoin précis, **sans que l'ensemble soit rendu dépendant de ce service**. Le service peut être amélioré voir remplacé sans autre incidence ou effet secondaire. Le traitement doit également être capable de retraiter tous les contenus originaux afin de rafraîchir le contenu publié selon les dernières modalités et capacités du service: c'est un point crucial pour la continuité et l'amélioration continue d'un service numérique un tant soit peu sérieux (Deliveroo, Google ou Immoweb ne sont jamais en "maintenance": il sont constamment surveillés, ajustés et améliorés).

Dans le cas concret du commun numérique envisagé, la fonction de protection de données personnelles et le respect RGPD peut être assuré par un composant techniquement simple mais efficace qui raye toute information permettant une identification, voir mieux en fonction du temps et des compétences qui pourront être alloués à l'effort.

Par la suite, le SPF Justice, si elle fait le choix de suivre ou de s'inspirer de cette initiative, sera libre de faire évoluer ou de remplacer ce composant précis afin de mieux coller aux besoins et contraintes qu'elle devra respecter, sans à aucun moment risquer d'impacter le reste du service. Mieux encore: le fait que le cadre et les interactions du composant sera parfaitement documenté, détaillé et vérifiable, **une évaluation et une vraie sélection** pleinement maîtrisée sera possible.