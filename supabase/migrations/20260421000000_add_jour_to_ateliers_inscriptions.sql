-- Migration: Ajout de la colonne 'jour' à la table 'ateliers_inscriptions'
-- Permet de gérer 1 atelier par jour (lundi, mardi, mercredi)
-- Date: 2026-04-21

-- Ajouter la colonne 'jour' si elle n'existe pas
ALTER TABLE ateliers_inscriptions
ADD COLUMN jour TEXT DEFAULT 'lundi' CHECK (jour IN ('lundi', 'mardi', 'mercredi'));

-- Créer un index sur (email, jour) pour les recherches efficaces
CREATE INDEX IF NOT EXISTS idx_ateliers_inscriptions_email_jour 
ON ateliers_inscriptions(email, jour);

-- Créer un index sur (atelier_id, jour) pour les vérifications de jauge
CREATE INDEX IF NOT EXISTS idx_ateliers_inscriptions_atelier_jour 
ON ateliers_inscriptions(atelier_id, jour);

-- Mettre à jour les inscriptions existantes avec 'lundi' comme jour par défaut
UPDATE ateliers_inscriptions 
SET jour = 'lundi' 
WHERE jour IS NULL;

-- Rendre la colonne NOT NULL après la migration des données
ALTER TABLE ateliers_inscriptions
ALTER COLUMN jour SET NOT NULL;

-- Ajouter une contrainte unique pour garantir qu'un email n'a qu'1 atelier par jour
ALTER TABLE ateliers_inscriptions
ADD CONSTRAINT unique_email_jour UNIQUE(email, jour);
