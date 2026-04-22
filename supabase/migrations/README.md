# Migrations Supabase - Ateliers

## Vue d'ensemble

Ce dossier contient toutes les migrations SQL pour la base de données Supabase du projet.

## Migrations

### 20260421000000_add_jour_to_ateliers_inscriptions.sql

**Date:** 21 avril 2026

**Objectif:** Ajouter la colonne `jour` à la table `ateliers_inscriptions` pour supporter la nouvelle logique d'inscription:
- 1 atelier par jour (lundi, mardi, mercredi)
- Participants peuvent s'inscrire à 3 ateliers max (un par jour)

**Changements:**
- ✅ Ajout colonne `jour` (TEXT, DEFAULT 'lundi', CHECK constraint)
- ✅ Index composite `(email, jour)` pour recherches efficaces
- ✅ Index composite `(atelier_id, jour)` pour vérifications de jauge
- ✅ Contrainte UNIQUE `(email, jour)` pour garantir 1 atelier max par jour

## Schema.sql

Fichier de documentation du schéma complet de la table `ateliers_inscriptions` après toutes les migrations.

## Comment appliquer les migrations

### Avec Supabase CLI
```bash
supabase migration up
```

### Manuellement (via Supabase Dashboard)
1. Allez à SQL Editor
2. Créez une nouvelle requête
3. Copiez-collez le contenu du fichier migration
4. Exécutez

## Structure de la table

| Colonne | Type | Contraintes | Description |
|---------|------|-------------|-------------|
| `id` | BIGINT | PK, AUTO | ID unique |
| `created_at` | TIMESTAMP | DEFAULT NOW() | Timestamp de création |
| `atelier_id` | TEXT | NOT NULL | ID de l'atelier |
| `jour` | TEXT | NOT NULL, CHECK, UNIQUE avec email | Jour (lundi/mardi/mercredi) |
| `email` | TEXT | NOT NULL | Email du participant |
| `nom` | TEXT | NOT NULL | Nom du participant |
| `prenom` | TEXT | NOT NULL | Prénom du participant |

## Notes importantes

⚠️ **Contrainte UNIQUE (email, jour):**
- Empêche un participant de s'inscrire 2 fois le même jour
- Permet les inscriptions sur différents jours

⚠️ **Limite 3 ateliers:**
- Vérifiée au niveau de l'Edge Function, pas en base de données
- Raison: PostgreSQL CHECK constraints ne peuvent pas compter des lignes

## Rollback

Si vous devez annuler une migration:

```sql
-- Rollback 20260421000000
ALTER TABLE ateliers_inscriptions DROP CONSTRAINT unique_email_jour;
ALTER TABLE ateliers_inscriptions ALTER COLUMN jour DROP NOT NULL;
ALTER TABLE ateliers_inscriptions DROP COLUMN jour;
DROP INDEX IF EXISTS idx_ateliers_inscriptions_email_jour;
DROP INDEX IF EXISTS idx_ateliers_inscriptions_atelier_jour;
```
