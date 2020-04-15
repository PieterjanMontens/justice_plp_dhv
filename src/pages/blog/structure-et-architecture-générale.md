---
templateKey: article-page
title: Structure et architecture générale
slug: structure-architecture-generale
date: 2020-04-15T13:50:15.612Z
cover: /img/big_data_dashboard.jpg
tags:
  - français
  - architecture
  - Open Source
meta_title: Structure et architecture générale
meta_description: >-
  Réflexion et analyse sur la structure et l'architecture nécessaire au service
  envisagé.
---
Par une [loi du 16 août 2016](https://www.etaamb.be/fr/loi-du-16-aout-2016_n2017010145.html), le législateur avait imposé au Conseil d'État de [publier l'intégralité de ses avis](http://www.raadvst-consetat.be/?page=news&lang=fr&newsitem=397), le premier datant tout de même du [21 septembre 1948](http://www.raadvst-consetat.be/dbx/avis/1.pdf#search=1). Le délai ? Le 1er janvier 2017.

L'effort à fournir était colossal: recherche, scannage, vérification de la qualité, etc.. Une bonne partie des effectifs du Conseil étaient mobilisés et ont travaillé sans relâche, avec succès: le 1er janvier 2017, le Conseil d'État inaugura 3 accès aux Avis: un [moteur de recherche et de consultation](http://www.raadvst-consetat.be/?page=adv_search&lang=fr), des listes mensuelles et via une intégration dans un de ses autres outils, [refLex](http://reflex.raadvst-consetat.be).

J'étais en charge de la publication technique des avis, ainsi que du développement du moteur et de l'interface de recherche. Le procédé était fort simple (vu les contraintes de temps, une solution complexe était par définition écartée):

1. le back-office du Conseil signale la publication d'un avis (y compris son numéro et l'emplacement du fichier, et d'autres données) au service d'importation ;
2. le service d'importation démarre un simple flux de traitement, qui enrichit par étapes les données sur l'avis:

   * extraction du texte, via une instance [Tika](https://tika.apache.org/), un composant open source ;
   * obtention de diverses métadonnées internes ;
   * indexation dans le moteur de recherche ([Solr](https://lucene.apache.org/solr/), un moteur de recherche en texte intégral, open source)
   * enregistrement dans le moteur de publication (un composant [open source](https://github.com/RvS-CdE/dpserv), une API complète développée par le Conseil d'État, chaque avis étant accessible en PDF, Texte brut et HTML)
   * ...
3. dés la fin du traitement, l'avis est publié et à disposition du public.

Cette approche par fil de traitement permet l'ajout, le remplacement et le retrait d'étapes et de composants sans impacter les autres éléments du système.

Une approche similaire, basée sur 3 piliers (back-office, flux de traitement, moteur de recherche et de consultation), me semble donc le plus efficace, le plus évolutif et le plus réaliste pour assurer un service numérique de publication des jugements et arrêts de la justice, vu les délais à respecter.

Reste la question la plus importante, en termes d'architecture logicielle et opérationnelle: la quantité de documents est bien plus importante. C'est le plus grand défi du service, mais loin d'être le plus inquiétant. **Le passage à l'échelle est la raison d'être du numérique**. Remplacez le [*pipe* unix synchrone](https://fr.wikipedia.org/wiki/Tube_(shell)) employé par la solution du Conseil d'État par un [message broker](https://fr.wikipedia.org/wiki/Agent_de_messages) qui alimente les composants eux-mêmes distribués et multipliés selon les besoins, et la quantité des données à traiter ne pose plus vraiment problème.