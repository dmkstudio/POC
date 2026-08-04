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
    philosophy: 'Maison',
    services: 'Expertise',
    method: 'Approche',
    contact: 'Contact',
    openMenu: 'Menu',
    closeMenu: 'Fermer',
    languageLabel: 'Choisir la langue',
    skipToContent: 'Aller au contenu'
  },

  hero: {
    eyebrow: 'Cannes · Monaco · International',
    lines: ['Discretion.', 'Strategy.', 'Execution.'],
    intro:
      'Cabinet privé de conseil et de conciergerie pour clients exigeants, familles et dirigeants.',
    cta: 'Découvrir'
  },

  philosophy: {
    eyebrow: "Notre raison d'être",
    title: {
      lead: 'Votre temps est la seule ressource',
      accent: 'que nous ne pouvons pas remplacer.'
    },
    columns: [
      "Private Office Consulting réunit conseil, conciergerie et coordination opérationnelle au sein d'un seul interlocuteur. Nous intervenons lorsque la demande exige vitesse, jugement, réseau et discrétion.",
      "Pas de catalogue impersonnel. Chaque mission commence par comprendre l'enjeu réel, puis par construire la réponse la plus directe, la plus sûre et la plus élégante."
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
      copy: 'De la première demande à la remise des clés, nous restons responsables du résultat.'
    }
  ],

  services: {
    eyebrow: 'Un office. Six directions.',
    title: { lead: 'Une expertise étendue.', accent: 'Une exécution cohérente.' },
    items: [
      {
        key: 'private-office',
        n: '01',
        title: 'Private Office',
        copy: "Coordination personnelle, demandes confidentielles, gestion d’agenda et exécution sur mesure."
      },
      {
        key: 'business',
        n: '02',
        title: 'Business & Advisory',
        copy: 'Sourcing, analyse, négociation, partenaires de confiance et accompagnement opérationnel.'
      },
      {
        key: 'property',
        n: '03',
        title: 'Property',
        copy: 'Recherche, acquisition, gestion de villas, travaux, personnel de maison et valorisation.'
      },
      {
        key: 'mobility',
        n: '04',
        title: 'Mobility',
        copy: 'Chauffeur, transferts privés, aviation, véhicules premium et logistique internationale.'
      },
      {
        key: 'yachting',
        n: '05',
        title: 'Yachting & Events',
        copy: 'Yachts, expériences privées, réservations rares et événements confidentiels.'
      },
      {
        key: 'security',
        n: '06',
        title: 'Security & Staff',
        copy: 'Personnel qualifié, protection rapprochée, présence discrète et coordination de prestataires.'
      }
    ]
  },

  method: {
    eyebrow: 'Notre méthode',
    title: { lead: 'Simple pour vous.', accent: 'Rigoureux pour nous.' },
    steps: [
      {
        n: '01',
        title: 'Écouter',
        copy: 'Clarifier la demande, les priorités, les contraintes et le niveau de confidentialité attendu.'
      },
      {
        n: '02',
        title: 'Structurer',
        copy: "Identifier les options, vérifier chaque interlocuteur et construire le plan d’action."
      },
      {
        n: '03',
        title: 'Exécuter',
        copy: 'Coordonner les partenaires, anticiper les risques et maintenir un suivi continu.'
      },
      {
        n: '04',
        title: 'Livrer',
        copy: "Valider le résultat, transmettre l’essentiel et rester disponible après la mission."
      }
    ]
  },

  territory: {
    eyebrow: 'Ancrage local · Portée internationale',
    title: { lead: "Basés sur la Côte d’Azur.", accent: "Disponibles là où l’enjeu l’exige." },
    cities: [
      'Cannes',
      'Monaco',
      'Nice',
      'Antibes',
      'Saint-Tropez',
      'Paris',
      'Genève',
      'Milan',
      'Londres',
      'Dubaï'
    ]
  },

  manifesto: {
    quote:
      '« La vraie qualité ne se remarque pas par ce qu’elle montre, mais par tout ce qu’elle rend simple. »'
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
