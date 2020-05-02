# Dorian Verriere

La migration sert à : 

  - Corriger des bugs
  - Réduire les problèmes de sécurité
  - Obtenir des performances accrues
  - Avoir des nouvelles fonctionnalités

### Installation

Charger le projet
```sh
git clone https://github.com/Polytech-Paris-Sud-Web/TP2_VERRIERE.git
```

[Mode Normal] Si tu souhaites simuler le json-server en localhost :
```sh
git reset --hard c694a69e81cf8eb23eec9c70e3345d2f7207a486
```

[Mode Online] Si tu souhaites simuler le json-server en ligne :
```sh
git reset --hard 7d899ac63ac17c1bf8b04f22e6128c54bc6a8a2f
```

[Mode PC Pro] Uniquement pour Dorian :
```sh
git reset --hard 371c6c81761ed370de1c13a49695b51db765644d
```
Installer les dépendances
```sh
npm install
```

### Lancer le projet

Ouvre ton terminal favori et lance ces commandes

First Tab:
```sh
$ npm start
```

Second Tab ($1 si t'es en localhost // $2 si t'es en pc pro // pas besoin si t'es online) :
```sh
$ json-server db.json
$ json-server -H 192.168.0.20 -p 8080 -w db.json
```

Vérifie le déploiement te rendant à l'adresse suivante dans ton navigateur préféré !

```sh
http://localhost:4200/
```

**Dorian Verriere, TP2 Yeah!**