
tp2:
Question 1 — Est-il facile de retrouver la fonction responsable de la recherche d’un centre ?
Réponse : Non, ce n'est pas facile si le fichier server.js contient plusieurs dizaines de routes et beaucoup de fonctions. Le fichier devient long et difficile à organiser.
Question 2 — Que se passe-t-il si plusieurs fichiers ont besoin de getCentreById() ?
Réponse : Si la fonction est définie uniquement dans server.js, les autres fichiers ne peuvent pas l'utiliser directement comme une fonction locale. Il faut la rendre accessible, par exemple en l'exportant depuis un module puis en l'important dans les fichiers qui en ont besoin.
Question 3 — Pourquoi serait-il intéressant de placer cette fonction dans un fichier séparé ?
Réponse : Pour mieux organiser le code, retrouver facilement la fonction, la réutiliser dans plusieurs fichiers et éviter de recopier le même code plusieurs fois.
Question 4 — Quel pourrait être le rôle d’un module ?
Réponse : Un module est un fichier JavaScript qui regroupe du code lié à une tâche précise et qui peut exporter des fonctions ou des données pour qu'elles soient utilisées dans d'autres fichiers.

L'idée principale de l'exercice : quand un projet devient grand, on sépare le code en modules pour le rendre plus clair, plus facile à maintenir et plus réutilisable.

act3:

Question 1. Pourquoi les accolades sont-elles utilisées lors de l’import ?
Réponse : Les accolades permettent d'importer des éléments précis qui ont été exportés avec un export nommé. Les noms importés doivent correspondre aux noms exportés.
Question 2. Peut-on exporter plusieurs fonctions depuis un même fichier ?
Réponse : Oui, on peut exporter plusieurs fonctions depuis un même fichier en utilisant export devant chaque déclaration de fonction.
Exemple : addition, multiplication et soustraction sont exportées depuis math.js.
Question 3. Quel est l’intérêt de regrouper plusieurs fonctions liées dans un module ?
Réponse : Cela permet d'organiser le code, de réutiliser les fonctions dans plusieurs fichiers, d'éviter les répétitions et de faciliter la maintenance du projet.


act4:
Question 1 — Pourquoi « Fin » apparaît-il avant « Opération terminée » ?
Réponse : Parce que setTimeout() programme l'exécution d'une fonction après un délai. JavaScript continue d'exécuter les instructions suivantes sans attendre la fin de ce délai.
Question 2 — Le programme est-il bloqué pendant les deux secondes ?
Réponse : Non. Le programme continue à exécuter les autres instructions pendant que le délai s'écoule.
C'est le principe de l'asynchronisme : une opération peut être programmée pour se terminer plus tard, sans bloquer immédiatement la suite du code.
Question 3 — Que représente l'opération programmée avec setTimeout() ?
Réponse : Elle représente une fonction qui sera exécutée après un délai d'environ deux secondes.
Dans notre exemple, cette fonction affiche "Opération terminée".
Question 4 — Pourquoi ce comportement est-il intéressant pour un serveur ?
Réponse : Parce qu'un serveur peut continuer à traiter d'autres requêtes pendant qu'une opération asynchrone est en cours. Cela permet de mieux gérer plusieurs utilisateurs sans bloquer inutilement le serveur.


act5:
Question 1 — Que contient la Promise au début ?
Réponse : Au début, la Promise est à l'état pending, c'est-à-dire en attente de la fin de l'opération.
Question 2 — Que fait resolve() ?
Réponse : resolve() permet de marquer la Promise comme réussie et de lui fournir une valeur de résultat
Question 3 — Que fait reject() ?
Réponse : reject() permet de marquer la Promise comme échouée et de lui fournir une raison d'échec, généralement une erreur.
Question 4 — Que se passe-t-il après une seconde ?
Réponse : La fonction programmée par setTimeout() appelle resolve("Centre récupéré"). La Promise passe alors à l'état fulfilled, puis le code de .then() affiche le résultat dans le terminal.
Question 5 — Pourquoi utilise-t-on .then() ?
Réponse : On utilise .then() pour exécuter du code lorsque la Promise réussit et pour récupérer sa valeur de résultat

act6:

1. Pourquoi utilise-t-on reject() ?
Réponse : On utilise reject() pour indiquer qu'une Promise a échoué, par exemple lorsqu'une opération ne peut pas être terminée.
Quel est le rôle de .catch() ?
Réponse : .catch() permet de récupérer et de gérer une erreur lorsqu'une Promise est rejetée
3. Quelle différence existe-t-il entre une valeur retournée et une erreur ?
Réponse :
- Une valeur retournée représente le résultat attendu d'une opération réussie.
- Une erreur indique que l'opération n'a pas pu se terminer normalement.
4. Pourquoi la gestion des erreurs est-elle importante dans une API backend ?
Réponse : La gestion des erreurs permet d'éviter que l'application plante, d'informer correctement le client du problème et de retourner un code HTTP adapté, comme 404 pour une ressource introuvable ou 500 pour une erreur interne du serveur.

act7;

1. Que signifie le mot-clé async ?
Réponse : Le mot-clé async permet de déclarer une fonction asynchrone. Cette fonction retourne automatiquement une Promise.
2. Que signifie await ?
Réponse : Le mot-clé await permet d'attendre le résultat d'une Promise avant de continuer l'exécution de la fonction async.
3. Pourquoi await ne bloque-t-il pas tout le serveur pendant l'attente ?
Réponse : Parce que await suspend uniquement l'exécution de la fonction asynchrone concernée. Node.js peut continuer à traiter d'autres requêtes pendant ce temps.
À retenir : await attend le résultat sans bloquer tout le serveur
4. Que se passe-t-il si la Promise est rejetée ?
Réponse : Si la Promise est rejetée, await déclenche une erreur. On peut la gérer avec un bloc try...catch.
act8:
1.Quel est le rôle de try ?
Réponse : try contient le code qu'on veut exécuter et qui peut provoquer une erreur.
2. Quel est le rôle de catch ?
Réponse : catch permet de récupérer et de traiter l'erreur pour éviter qu'elle reste sans traitement.
3. Quelle variable contient l'erreur ?
Réponse : La variable error contient l'objet représentant l'erreur.
4. Pourquoi ne doit-on pas laisser les erreurs asynchrones sans traitement ?
Réponse : Parce qu'une erreur non traitée peut provoquer l'échec d'une opération, produire un résultat incorrect ou perturber le fonctionnement de l'application. Dans une API backend, il faut gérer les erreurs et renvoyer une réponse adaptée au client.
act9:
1. Où sont maintenant stockées les données ?
Réponse : Les données sont stockées dans un tableau JavaScript nommé centres, dans le fichier centre.repository.js.
2. Pourquoi ce fichier est-il appelé repository ?
Réponse : Parce qu'il est responsable de l'accès aux données. Il permet de récupérer tous les centres avec findAll() ou de rechercher un centre par son identifiant avec findById(id).
3. Le repository connaît-il HTTP ?
Réponse : Non. Le repository s'occupe uniquement de l'accès aux données. Il ne gère pas les requêtes HTTP ni les réponses du serveur.
4. Le repository connaît-il req et res ?
Réponse : Non.
- req représente la requête reçue du client.
- res représente la réponse envoyée au client.
Ces objets sont utilisés dans la partie serveur, notamment par les controllers, et non dans le repository.
5. Pourquoi cette séparation est-elle intéressante ?
Réponse : Elle permet de mieux organiser le code, de faciliter sa maintenance et de modifier la manière de stocker les données sans devoir réécrire toute l'API.

act10;
1. Quel est le rôle du service ?
Réponse : Le Service contient la logique métier de l’application. Il applique les règles de fonctionnement, par exemple vérifier qu’un centre existe avant de le retourner.
2. Pourquoi le service utilise-t-il le repository ?
Réponse : Parce que le Repository est responsable de l’accès aux données. Le Service utilise ses fonctions pour récupérer les centres sans gérer directement leur stockage.
3. Pourquoi le service ne manipule-t-il pas directement res ?
Réponse : Parce que res sert à envoyer une réponse HTTP au client. Cette responsabilité appartient au Controller. Le Service doit rester indépendant de HTTP pour pouvoir être réutilisé facilement.
4. Où doit être placée une règle métier ?
Réponse : Dans la couche Service. Par exemple, la règle qui vérifie si un centre existe avant de le retourner est placée dans centre.service.js.

act11:
Partie 1 — Correction des questions de l'activité 11
1. Quel est le rôle du contrôleur ?
Réponse : Le Controller reçoit les demandes à traiter, appelle le Service et prépare la réponse HTTP à envoyer au client.
2. Pourquoi le contrôleur connaît-il HTTP ?
Réponse : Parce qu'il doit utiliser les objets req et res pour traiter les requêtes et envoyer les réponses HTTP avec les codes appropriés, comme 200, 404 ou 500.
3. Pourquoi appelle-t-il le service ?
Réponse : Parce que le Service contient la logique métier. Le Controller lui délègue le travail au lieu de gérer lui-même les règles de l'application.
4. Pourquoi le service ne doit-il pas appeler sendJson() ?
Réponse : Parce que sendJson() sert à envoyer une réponse HTTP. Cette responsabilité appartient au Controller. Le Service doit rester indépendant de HTTP.
5. Où est gérée l'erreur « Centre introuvable » ?
Réponse : Le Service déclenche cette erreur avec throw new Error("Centre introuvable"). Le Controller la récupère avec catch et renvoie une réponse HTTP 404 au client.
À retenir : le Service détecte l'erreur, le Controller la transforme en réponse HTTP.

act12;
1. Quel est le rôle de handleCentreRoutes() ?
Réponse : Cette fonction vérifie l'URL et la méthode HTTP de la requête afin de diriger celle-ci vers le Controller approprié.
2. Pourquoi cette fonction retourne-t-elle true ou false ?
Réponse : true indique qu'une route a été reconnue et traitée. false indique qu'aucune route gérée par cette fonction ne correspond à la requête.
3. Que représente match[1] ?
Réponse : match[1] contient l'identifiant numérique sous forme de texte, extrait de l'URL. Par exemple, pour /api/centres/3, il contient "3".
4. Pourquoi utilise-t-on Number() ?
Réponse : Pour convertir l'identifiant extrait de l'URL en nombre, afin de pouvoir le comparer aux identifiants numériques du tableau des centres.
5. Pourquoi distinguer /api/centres/1 de /api/centres ?
Réponse : Parce que /api/centres demande la liste de tous les centres, tandis que /api/centres/1 demande uniquement le centre dont l'identifiant est 1.

14:
act
1. Quelle couche reçoit la requête HTTP en premier ?
La couche Routes, qui identifie l'URL demandée et dirige la requête vers le bon contrôleur.

2. Quelle couche contient les données ?
La couche Repository, qui accède aux données stockées, ici dans un tableau JavaScript.

3. Quelle couche contient la logique métier ?
La couche Service, qui contient les règles et les traitements de l'application.

4. Quelle couche produit la réponse HTTP ?
La couche Controller, qui prépare la réponse HTTP à envoyer au client.

5. Peut-on remplacer les données fictives par une base de données sans modifier les routes ?
Oui. Il suffit principalement de modifier la couche Repository pour utiliser une base de données, comme MySQL ou PostgreSQL, tout en conservant les mêmes routes et la même logique métier si leurs interfaces restent compatibles
tp3:


 Question 1 — Node.js et npm
1. Quelle version de Node.js utilisez-vous ?

Node.js v24.14.0.

2. Quelle version de npm utilisez-vous ?

npm 11.9.0.

3. Quelle est la différence entre Node.js et npm ?

Node.js est un environnement d'exécution qui permet d'exécuter du JavaScript côté serveur. npm est un gestionnaire de paquets permettant d'installer et de gérer les dépendances d'un projet.
Question 2 — Installation d'Express.js
1. Quelle nouvelle section apparaît dans package.json ?

La section dependencies.

2. Quelle dépendance contient Express ?

La dépendance express.

3. Pourquoi Express est-il enregistré dans dependencies ?

Parce qu'Express est une bibliothèque nécessaire au fonctionnement de l'application. Elle doit être installée pour pouvoir exécuter le projet.
Question 3 — Différence entre res.send() et res.json()
- res.send() permet d'envoyer une réponse HTTP sous différentes formes : texte, HTML, buffer ou autres contenus.
- res.json() permet d'envoyer une réponse au format JSON.
Question 4 — Que contient req.params.id ?
Pour la requête :
/api/donneurs/1


req.params.id contient "1".

Pour la requête :
/api/donneurs/25


req.params.id contient "25".

Il s'agit d'une chaîne de caractères (String).
Question 5 — Quel est maintenant le type de id ?
Après avoir utilisé :
const id = Number(req.params.id);


Le type de id devient number (nombre).

On peut le vérifier avec :
console.log(typeof id);
Question 6 — Différence entre req.params et req.query
- req.params permet de récupérer les paramètres présents dans le chemin de l'URL.
- req.query permet de récupérer les paramètres de recherche placés après le caractère ?.
Question 7 — Recevoir des données avec POST
1. À quoi sert req.body ?

req.body permet de récupérer les données envoyées par le client dans le corps de la requête HTTP.

2. Pourquoi avons-nous ajouté express.json() ?

express.json() est un middleware qui permet à Express de lire et de convertir les données JSON envoyées par le client en objet JavaScript accessible avec req.body.

3. Pourquoi retournons-nous le code 201 plutôt que 200 ?

Le code HTTP 201 Created indique que la création d'une nouvelle ressource a réussi, tandis que le code 200 OK indique simplement que la requête a été traitée avec succès.
Exercice 1 — Ajouter la ressource Centre
1. Comment organiseriez-vous les fichiers ?
src/
├── routes/
│   └── centre.routes.js
├── controllers/
│   └── centre.controller.js
└── services/
    └── centre.service.js


2. Quelle fonction doit se trouver dans le service ?

Les fonctions qui manipulent les données des centres : getAll(), getById(), create(), update(), patch() et remove().

3. Quelle fonction doit se trouver dans le contrôleur ?

Les fonctions qui reçoivent les requêtes HTTP, appellent les services et retournent les réponses au client.

4. Où doit être définie la route ?

Dans le fichier centre.routes.js, avec express.Router().
Exercice 2 — Compléter le CRUD des donneurs
Les routes à implémenter sont :
Méthode	URL	Fonction
GET	/api/donneurs	getAll
GET	/api/donneurs/:id	getById
POST	/api/donneurs	create
PUT	/api/donneurs/:id	update
PATCH	/api/donneurs/:id	patch
DELETE	/api/donneurs/:id	remove

Les opérations sont réparties entre les routes, les contrôleurs et les services pour respecter la séparation des responsabilités.
Exercice 3 — Recherche par groupe sanguin
Question : Dans quelle partie de l'architecture doit être placée la logique de filtrage ?

La logique de filtrage doit être placée dans le service, car celui-ci est responsable de la manipulation et du traitement des données.

Exemple :
return donneurs.filter(
    donneur => donneur.groupeSanguin === groupe
);


Le contrôleur récupère le paramètre groupeSanguin depuis req.query et le transmet au service.
Exercice 4 — Validation simple
Question : Pourquoi cette méthode de validation risque-t-elle de devenir difficile à maintenir lorsque l'application grandit ?

La validation manuelle peut devenir difficile à maintenir lorsque le nombre de champs et de règles augmente. Elle entraîne la répétition du code et rend la gestion des erreurs plus complexe.

L'utilisation d'une bibliothèque spécialisée comme Zod permet de centraliser et de simplifier la validation des données.
Travail pratique à la maison — API des centres
Question : Pourquoi est-il préférable de séparer Routes, Controllers et Services plutôt que de placer toute la logique dans server.js ?

Il est préférable de séparer les différentes parties de l'application pour :
- améliorer l'organisation du code ;
- faciliter la maintenance ;
- éviter un fichier server.js trop volumineux ;
- favoriser la réutilisation des fonctions ;
- faciliter les tests ;
- rendre l'application plus évolutive.
Cette architecture permet de mieux gérer les responsabilités de chaque partie.
 672b020 (feat: implement REST API with Express)
