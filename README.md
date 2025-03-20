# @ogea12/design-system

<div align="center">

![Code Size](https://img.shields.io/github/languages/code-size/ogea12/design-system?style=for-the-badge&colorA=4c566a&colorB=ebcb8b&logo=github&logoColor=white)
![License](https://img.shields.io/github/license/ogea12/design-system?style=for-the-badge&colorA=4c566a&colorB=a3be8c)

</div>

`@ogea12/design-system` est un package se présentant comme une bibliothèque de composants basée sur l'approche de l'_Atomic Design_. Cette méthode consiste à décomposer les interfaces utilisateur (UI) en éléments de base, appelés **atomes**, qui sont ensuite combinés pour former des **molécules**, et enfin, ces mêmes molécules sont utilisées pour créer des **organismes** encore plus complexes.

La hiérarchie des composants en respectant l'approche de l'_Atomic Design_ est la suivante :

1. **Atomes** : Les éléments de base d'une interface, tels que les boutons, les champs de saisie, ... Ils représentent les plus petites unités d'une interface utilisateur (UI).
2. **Molécules** : Les molécules sont formées en combinant des atomes pour créer des composants plus complexes mais encore relativement simples. Un exemple pourrait être un champ de formulaire qui combine un libellé et un champ de saisie.
3. **Organismes** : Les composants plus complexes composés de molécules, comme un en-tête comprenant un logo, une navigation et une barre de recherche.

L'utilisation de cette approche permet de développer des systèmes de design cohérents, réutilisables et faciles à maintenir pour les applications web.

## Premiers pas

### Installation

Pour utiliser le package, vous devez d'abord l'intégrer dans votre projet.

```shell
npm install @ogea12/design-system

# Assurez-vous également d'installer les packages suivants
npm install react react-dom
```

> Ce package est en cours de développement, il n'est donc pas encore téléchargeable via un gestionnaire de packages. Pour bénéficier des composants, vous devez utiliser une instance du package générée localement, tel que ci-dessous.

```jsonc
// package.json

{
  "@ogea12/design-system": "file:../design-system",
}
```

### Utilisation

Une fois l'installation terminée, vous pouvez ajouter les composants à votre interface. Référez-vous à la documentation associée au composant que vous souhaitez intégrer pour voir les propriétés jointes.

```tsx
import { Button } from '@ogea12/design-system'
import { CirclePlusIcon } from '@ogea12/icons'

export default function Home() {
  return (
    <>
      {/* Adding button component with left icon */}
      <Button leftIcon={CirclePlusIcon}>Ajouter</Button>
    </>
  )
}
```
