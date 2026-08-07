import type { SiteContent } from './types';

export const fr: SiteContent = {
  meta: {
    title: 'Private Office Consulting — Discretion. Strategy. Execution.',
    description:
      "Private office, conseil et conciergerie sur la Côte d'Azur. Un interlocuteur unique pour orchestrer vos intérêts privés, professionnels et patrimoniaux.",
    ogTitle: 'Private Office Consulting',
    ogDescription: "Cabinet privé de conseil et de conciergerie. Cannes · Monaco · International."
  },

  nav: {
    philosophy: "L'essentiel",
    services: 'Expertise',
    contact: 'Contact',
    openMenu: 'Menu',
    closeMenu: 'Fermer',
    languageLabel: 'Choisir la langue',
    skipToContent: 'Aller au contenu'
  },

  hero: {
    eyebrow: 'Cannes · Monaco · International',
    lines: ['Discrétion.', 'Stratégie.', 'Exécution.'],
    intro:
      'Cabinet privé de conseil et de conciergerie pour clients exigeants, familles et dirigeants.',
    cta: 'Découvrir'
  },

  philosophy: {
    eyebrow: "Notre raison d'être",
    title: {
      lead: 'Un appel.',
      accent: "Le reste, c'est notre travail."
    },
    columns: [
      "Private Office Consulting réunit conseil, conciergerie et coordination au sein d'une seule équipe, avec un point de contact unique qui suit votre dossier jusqu'au bout. Nous intervenons là où la rapidité, le bon sens et une confidentialité absolue sont nécessaires.",
      "Pas de prestations standardisées. Chaque mission commence par une seule question — ce qui compte vraiment ici — puis nous construisons la réponse la plus directe et la plus sûre."
    ]
  },

  scenes: [
    {
      kicker: "Private Office · Côte d'Azur",
      title: { lead: 'Chaque demande.', accent: 'Résolue.' },
      copy: 'Une seule relation de confiance pour orchestrer vos intérêts privés, professionnels et patrimoniaux.'
    },
    {
      kicker: 'Advisory',
      title: { lead: 'Décider avec', accent: 'justesse.' },
      copy: "Nous analysons, vérifions et coordonnons chaque étape avant qu'elle ne mobilise votre temps."
    },
    {
      kicker: 'Execution',
      title: { lead: 'Une vision.', accent: 'Un interlocuteur.' },
      copy: "Des spécialistes sélectionnés, un pilotage centralisé et un niveau d'exigence constant."
    },
    {
      kicker: 'Trust',
      title: { lead: 'La discrétion', accent: 'comme fondation.' },
      copy: 'Une relation construite sur la confidentialité, la disponibilité et la responsabilité.'
    },
    {
      kicker: 'Delivery',
      title: { lead: 'Jusqu’au dernier', accent: 'détail.' },
      copy: 'Du premier échange à la dernière étape, le résultat reste sous notre responsabilité.'
    }
  ],

  services: {
    eyebrow: 'Un office. Cinq directions.',
    title: { lead: 'Une expertise étendue.', accent: 'Une exécution cohérente.' },
    toggleLabel: 'Afficher les services de {name}',
    discussLabel: 'Parler de votre demande',
    custom: {
      question: 'Votre demande n’entre dans aucune de ces catégories ? C’est précisément là que nous sommes le plus utiles.',
      cta: 'Demande sur mesure'
    },
    items: [
      {
        key: 'business',
        n: '01',
        title: 'Business & administration',
        copy: 'Votre projet. Notre savoir-faire.',
        services: [
          'Création de société',
          'Recrutement et RH',
          'Accompagnement juridique',
          'Banque et assurance',
          'Relations d’affaires',
          'Démarches administratives'
        ]
      },
      {
        key: 'property',
        n: '02',
        title: 'Immobilier & gestion',
        copy: 'Votre maison. Sous contrôle.',
        services: [
          'Recherche et location',
          'Gestion immobilière',
          'Travaux et construction',
          'Entretien et maintenance',
          'Sécurité et surveillance'
        ]
      },
      {
        key: 'relocation',
        n: '03',
        title: 'Relocation & intégration',
        copy: 'Une nouvelle vie. Dès le premier jour.',
        services: [
          'Accompagnement complet',
          'Écoles et scolarité',
          'Documents et titre de séjour',
          'Déménagement et installation',
          'Intégration et réseau local'
        ]
      },
      {
        key: 'mobility',
        n: '04',
        title: 'Mobilité & confort',
        copy: 'Chaque jour. Sans effort.',
        services: [
          'Transferts et chauffeur',
          'Personal shopping',
          'Accompagnement médical',
          'Personnel de maison',
          'Logistique et livraisons'
        ]
      },
      {
        key: 'brand',
        n: '05',
        title: 'Image personnelle',
        copy: 'Votre image. Partout où il le faut.',
        services: ['Site et présence digitale', 'Réputation et relations presse']
      }
    ]
  },

  contact: {
    eyebrow: 'Conversation confidentielle',
    title: { lead: 'Parlons de ce qui', accent: 'doit être résolu.' },
    intro:
      'Décrivez votre demande. Nous revenons vers vous rapidement avec une première orientation claire et confidentielle.',
    form: {
      name: { label: 'Nom', placeholder: 'Votre nom' },
      email: { label: 'Email', placeholder: 'vous@exemple.com' },
      phone: { label: 'Téléphone', optional: 'facultatif', placeholder: '+33 6 00 00 00 00' },
      subject: { label: 'Nature de la demande', other: 'Autre demande' },
      message: {
        label: 'Votre demande',
        placeholder: 'En quelques lignes, dites-nous ce que vous souhaitez nous confier.'
      },
      consent:
        'Vos informations restent strictement confidentielles et ne sont jamais partagées.',
      submit: 'Envoyer la demande',
      submitting: 'Envoi en cours…',
      success: {
        title: 'Demande reçue.',
        copy: 'Merci. Nous revenons vers vous sous 24 heures, en toute confidentialité.'
      },
      errors: {
        name: 'Merci d’indiquer votre nom.',
        email: 'Merci d’indiquer une adresse email valide.',
        message: 'Merci de décrire votre demande en quelques mots.',
        generic:
          'L’envoi a échoué. Écrivez-nous directement à contact@privateofficeconsulting.fr.'
      }
    },
    direct: {
      label: 'Ou contactez-nous directement',
      whatsapp: 'WhatsApp privé'
    }
  },

  footer: {
    tagline: 'Discretion. Strategy. Execution.',
    rights: "© 2026 · Cannes · Côte d’Azur"
  }
};
