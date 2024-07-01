export const infographies: Record<string, string[]> = {
  smartphone: ['smartphone', 'repasavecduboeuf', 'tshirtencoton'],
  ordinateurportable: ['television', 'ordinateurportable', 'smartphone'],
  television: ['television', 'ordinateurportable', 'smartphone'],
  ordinateurfixeparticulier: ['ordinateurfixeparticulier', 'ordinateurportable', 'tabletteclassique'],
  repasvegetalien: ['repasavecduboeuf', 'repasavecdupoulet', 'repasvegetalien'],
  repasvegetarien: ['repasavecduboeuf', 'repasavecdupoulet', 'repasvegetarien'],
  repasavecduboeuf: ['repasavecduboeuf', 'repasavecdupoulet', 'repasvegetarien'],
  repasavecdupoulet: ['repasavecduboeuf', 'repasavecdupoulet', 'repasvegetarien'],
  repasavecdupoissongras: ['repasavecduboeuf', 'repasavecdupoissongras', 'repasvegetarien'],
  repasavecdupoissonblanc: ['repasavecduboeuf', 'repasavecdupoissonblanc', 'repasvegetarien'],
  eaudurobinet: ['eauenbouteille', 'eaudurobinet'],
  eauenbouteille: ['eauenbouteille', 'eaudurobinet'],
  laitdevache: ['laitdevache', 'soja'],
  soja: ['laitdevache', 'soja'],
  voiturethermique: ['voiturethermique', 'busthermique', 'tgv'],
  bus: ['voiturethermique', 'busthermique', 'tgv'],
  tgv: ['voiturethermique', 'busthermique', 'tgv'],
  metro: ['voiturethermique', 'busthermique', 'metro'],
  avioncourtcourrier: ['avioncourtcourrier', 'busthermique', 'tgv'],
  avionmoyencourrier: ['avionmoyencourrier', 'busthermique', 'tgv'],
  avionlongcourrier: ['avionlongcourrier', 'busthermique', 'tgv'],
  tshirtencoton: ['smartphone', 'repasavecduboeuf', 'tshirtencoton'],
  jeans: ['jeans', 'smartphone', 'repasavecduboeuf'],
  pullenlaine: ['pullenlaine', 'smartphone', 'enceintebluetooth'],
  manteau: ['manteau', 'voiturethermique'],
  chauffageelectrique: ['poeleabois', 'chauffageelectrique', 'poeleagranule'],
  chauffagefioul: ['chauffagefioul', 'poeleagranule', 'chauffageelectrique'],
  chauffagegaz: ['chauffagegaz', 'chauffageelectrique', 'pompeachaleur'],
  pompeachaleur: ['chauffagefioul', 'poeleagranule', 'pompeachaleur'],
  poeleagranule: ['chauffagegaz', 'poeleagranule', 'chauffageelectrique'],
  poeleabois: ['poeleabois', 'poeleagranule', 'chauffageelectrique'],
  reseaudechaleur: ['reseaudechaleur', 'poeleagranule', 'pompeachaleur'],
}
