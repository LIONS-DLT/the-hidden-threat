import type { AttackItemId } from './items'
import type { StageId } from './stages'

export type TargetedAttack = {
  target: { supplyChainId: 0 | 1 | 2; stageId: StageId; requiredItems: AttackItemId[] }
  description: string
}

export const TARGETED_ATTACKS: TargetedAttack[] = [
  {
    target: { supplyChainId: 0, stageId: 'supply', requiredItems: ['usb-stick', 'tools'] },

    description:
      'Schleust minderwertige und gefälschte Materialien in die Lieferkette ein und sorgt dadurch für Produktionsausfälle sowie Kundenbeschwerden.',
  },
  {
    target: { supplyChainId: 2, stageId: 'supply', requiredItems: ['cloud', 'virus'] },

    description:
      'Startet eine Cyberattacke auf das Beschaffungssystem, um den Zugriff auf Bestelldaten, Lieferpläne und Zahlungsinformationen zu blockieren.',
  },
  {
    target: {
      supplyChainId: 1,
      stageId: 'supply',
      requiredItems: ['usb-stick', 'fake-identity-card'],
    },

    description:
      'Infiltriert das Beschaffungssystem und manipuliert die Zahlungen. Der mangelnde Geldfluss wird zu Verzögerungen in den nachfolgenden Stufen führen.',
  },

  // FIXME: these are simple copies:

  {
    target: { supplyChainId: 0, stageId: 'supply', requiredItems: ['usb-stick', 'tools'] },

    description:
      'Schleust minderwertige und gefälschte Materialien in die Lieferkette ein und sorgt dadurch für Produktionsausfälle sowie Kundenbeschwerden.',
  },
  {
    target: { supplyChainId: 2, stageId: 'supply', requiredItems: ['cloud', 'virus'] },

    description:
      'Startet eine Cyberattacke auf das Beschaffungssystem, um den Zugriff auf Bestelldaten, Lieferpläne und Zahlungsinformationen zu blockieren.',
  },
  {
    target: {
      supplyChainId: 1,
      stageId: 'supply',
      requiredItems: ['usb-stick', 'fake-identity-card'],
    },

    description:
      'Infiltriert das Beschaffungssystem und manipuliert die Zahlungen. Der mangelnde Geldfluss wird zu Verzögerungen in den nachfolgenden Stufen führen.',
  },
  {
    target: { supplyChainId: 0, stageId: 'supply', requiredItems: ['usb-stick', 'tools'] },

    description:
      'Schleust minderwertige und gefälschte Materialien in die Lieferkette ein und sorgt dadurch für Produktionsausfälle sowie Kundenbeschwerden.',
  },
  {
    target: { supplyChainId: 2, stageId: 'supply', requiredItems: ['cloud', 'virus'] },

    description:
      'Startet eine Cyberattacke auf das Beschaffungssystem, um den Zugriff auf Bestelldaten, Lieferpläne und Zahlungsinformationen zu blockieren.',
  },
  {
    target: {
      supplyChainId: 1,
      stageId: 'supply',
      requiredItems: ['usb-stick', 'fake-identity-card'],
    },

    description:
      'Infiltriert das Beschaffungssystem und manipuliert die Zahlungen. Der mangelnde Geldfluss wird zu Verzögerungen in den nachfolgenden Stufen führen.',
  },
  {
    target: { supplyChainId: 0, stageId: 'supply', requiredItems: ['usb-stick', 'tools'] },

    description:
      'Schleust minderwertige und gefälschte Materialien in die Lieferkette ein und sorgt dadurch für Produktionsausfälle sowie Kundenbeschwerden.',
  },
  {
    target: { supplyChainId: 2, stageId: 'supply', requiredItems: ['cloud', 'virus'] },

    description:
      'Startet eine Cyberattacke auf das Beschaffungssystem, um den Zugriff auf Bestelldaten, Lieferpläne und Zahlungsinformationen zu blockieren.',
  },
  {
    target: {
      supplyChainId: 1,
      stageId: 'supply',
      requiredItems: ['usb-stick', 'fake-identity-card'],
    },

    description:
      'Infiltriert das Beschaffungssystem und manipuliert die Zahlungen. Der mangelnde Geldfluss wird zu Verzögerungen in den nachfolgenden Stufen führen.',
  },
  {
    target: { supplyChainId: 0, stageId: 'supply', requiredItems: ['usb-stick', 'tools'] },

    description:
      'Schleust minderwertige und gefälschte Materialien in die Lieferkette ein und sorgt dadurch für Produktionsausfälle sowie Kundenbeschwerden.',
  },
  {
    target: { supplyChainId: 2, stageId: 'supply', requiredItems: ['cloud', 'virus'] },

    description:
      'Startet eine Cyberattacke auf das Beschaffungssystem, um den Zugriff auf Bestelldaten, Lieferpläne und Zahlungsinformationen zu blockieren.',
  },
  {
    target: {
      supplyChainId: 1,
      stageId: 'supply',
      requiredItems: ['usb-stick', 'fake-identity-card'],
    },

    description:
      'Infiltriert das Beschaffungssystem und manipuliert die Zahlungen. Der mangelnde Geldfluss wird zu Verzögerungen in den nachfolgenden Stufen führen.',
  },
  {
    target: { supplyChainId: 0, stageId: 'supply', requiredItems: ['usb-stick', 'tools'] },

    description:
      'Schleust minderwertige und gefälschte Materialien in die Lieferkette ein und sorgt dadurch für Produktionsausfälle sowie Kundenbeschwerden.',
  },
  {
    target: { supplyChainId: 2, stageId: 'supply', requiredItems: ['cloud', 'virus'] },

    description:
      'Startet eine Cyberattacke auf das Beschaffungssystem, um den Zugriff auf Bestelldaten, Lieferpläne und Zahlungsinformationen zu blockieren.',
  },
  {
    target: {
      supplyChainId: 1,
      stageId: 'supply',
      requiredItems: ['usb-stick', 'fake-identity-card'],
    },

    description:
      'Infiltriert das Beschaffungssystem und manipuliert die Zahlungen. Der mangelnde Geldfluss wird zu Verzögerungen in den nachfolgenden Stufen führen.',
  },
]
