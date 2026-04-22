import { useState, useEffect, useCallback } from 'react';
import { projectId, publicAnonKey } from '../utils/supabase/info';
import {
  Lock, LogOut, Trash2, Plus, Download, RefreshCw,
  Users, Check, X, AlertCircle, Search
} from 'lucide-react';

// ─── Types ────────────────────────────────────────────────────────────────────

interface Inscription {
  id: string;
  atelier_id: string;
  jour: string | null;
  nom: string;
  prenom: string;
  email: string;
  created_at: string;
}

interface FormData {
  atelier_id: string;
  jour?: string;
  nom: string;
  prenom: string;
  email: string;
}

interface AlertMsg {
  type: 'success' | 'error';
  text: string;
}

// ─── Config ───────────────────────────────────────────────────────────────────

const ADMIN_PASSWORD = 'admin2026';

const API_BASE = `https://${projectId}.supabase.co/functions/v1/make-server-7e04106c/ateliers`;
const AUTH_HEADERS = { Authorization: `Bearer ${publicAnonKey}` };

const ATELIERS_IDS = [
  '1A','2A','3A','4A','5A','6A','7A',
  'TABLE_RONDE',
  '1B','2B','3B','4B','5B',
  '1C','2C','3C','4C','5C','6C','7C',
];

// Mapping des jours pour affichage
const JOUR_LABELS: Record<string, string> = {
  mardi: 'Mardi 9 juin',
  mercredi: 'Mercredi 10 juin',
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

async function apiGet<T>(path: string): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, { headers: AUTH_HEADERS });
  const data = await res.json().catch(() => ({ error: 'Erreur réseau' }));
  if (!res.ok) throw new Error(data.error ?? 'Erreur réseau');
  return data as T;
}

async function apiPost<T>(path: string, body: unknown): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...AUTH_HEADERS },
    body: JSON.stringify(body),
  });
  const data = await res.json().catch(() => ({ error: 'Erreur réseau' }));
  if (!res.ok) throw new Error(data.error ?? 'Erreur réseau');
  return data as T;
}

async function apiDelete<T>(path: string): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, {
    method: 'DELETE',
    headers: AUTH_HEADERS,
  });
  const data = await res.json().catch(() => ({ error: 'Erreur réseau' }));
  if (!res.ok) throw new Error(data.error ?? 'Erreur réseau');
  return data as T;
}

// ─── Export CSV ───────────────────────────────────────────────────────────────

function exportCSV(inscriptions: Inscription[]) {
  const headers = ['Atelier', 'Jour', 'Nom', 'Prénom', 'Email', 'Date inscription'];
  const rows = inscriptions.map((i) => [
    i.atelier_id,
    i.jour ? JOUR_LABELS[i.jour] ?? i.jour : '',
    i.nom,
    i.prenom,
    i.email,
    new Date(i.created_at).toLocaleString('fr-FR'),
  ]);

  const csv = [headers, ...rows]
    .map((row) => row.map((cell) => `"${cell}"`).join(','))
    .join('\n');

  const blob = new Blob(['\uFEFF' + csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `inscriptions_ateliers_${new Date().toISOString().slice(0, 10)}.csv`;
  a.click();
  URL.revokeObjectURL(url);
}

// ─── Composant Login ──────────────────────────────────────────────────────────

function LoginScreen({ onLogin }: { onLogin: () => void }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (password === ADMIN_PASSWORD) {
      onLogin();
    } else {
      setError('Mot de passe incorrect');
      setPassword('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#354878] to-[#6A9ECC] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
        <div className="flex justify-center mb-6">
          <div className="bg-gradient-to-br from-[#B9177B] to-[#AD947E] p-4 rounded-full">
            <Lock size={32} className="text-white" />
          </div>
        </div>

        <h1 className="text-2xl font-bold text-[#354878] text-center mb-2">
          Administration
        </h1>
        <p className="text-gray-500 text-center mb-8 text-sm">
          Gestion des inscriptions aux ateliers
        </p>

        <div className="space-y-4">
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError('');
            }}
            onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#6A9ECC] text-gray-700"
          />

          {error && (
            <div className="flex items-center gap-2 text-red-600 text-sm">
              <AlertCircle size={16} />
              {error}
            </div>
          )}

          <button
            onClick={handleLogin}
            className="w-full py-3 bg-[#354878] text-white rounded-xl hover:bg-[#6A9ECC] transition-colors font-bold text-lg"
          >
            Connexion
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Composant principal Admin ────────────────────────────────────────────────

const INITIAL_FORM: FormData = { atelier_id: '', jour: '', nom: '', prenom: '', email: '' };

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return sessionStorage.getItem('admin_auth') === 'true';
  });

  const [inscriptions, setInscriptions] = useState<Inscription[]>([]);
  const [stats, setStats] = useState<Record<string, number>>({});
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState<AlertMsg | null>(null);
  const [search, setSearch] = useState('');
  const [filterAtelier, setFilterAtelier] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM);
  const [formLoading, setFormLoading] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);

  // ── Fetch données ────────────────────────────────────────────────────────────

  const fetchAll = useCallback(async () => {
    setLoading(true);
    try {
      const [inscrData, statsData] = await Promise.all([
        apiGet<{ inscriptions: Inscription[] }>('/admin/list'),
        apiGet<{ stats: Record<string, number> }>('/stats'),
      ]);
      setInscriptions(inscrData.inscriptions ?? []);
      setStats(statsData.stats ?? {});
    } catch (err) {
      setAlert({ type: 'error', text: err instanceof Error ? err.message : 'Erreur de chargement' });
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated) fetchAll();
  }, [isAuthenticated, fetchAll]);

  // ── Suppression ──────────────────────────────────────────────────────────────

  const handleDelete = async (email: string) => {
    try {
      await apiDelete(`/unregister/${encodeURIComponent(email)}`);
      setAlert({ type: 'success', text: 'Inscription supprimée avec succès' });
      setDeleteConfirm(null);
      fetchAll();
    } catch (err) {
      setAlert({ type: 'error', text: err instanceof Error ? err.message : 'Erreur lors de la suppression' });
    }
  };

  // ── Ajout manuel ─────────────────────────────────────────────────────────────

  const handleAdd = async () => {
    if (!formData.atelier_id || !formData.nom || !formData.prenom || !formData.email) {
      setAlert({ type: 'error', text: 'Veuillez remplir tous les champs' });
      return;
    }

    setFormLoading(true);
    try {
      await apiPost('/register', { 
        ...formData, 
        jauge: 999,
        jour: formData.jour || null 
      });
      setAlert({ type: 'success', text: 'Inscription ajoutée avec succès' });
      setFormData(INITIAL_FORM);
      setShowAddForm(false);
      fetchAll();
    } catch (err) {
      setAlert({ type: 'error', text: err instanceof Error ? err.message : "Erreur lors de l'ajout" });
    } finally {
      setFormLoading(false);
    }
  };

  // ── Filtrage ─────────────────────────────────────────────────────────────────

  const filtered = inscriptions.filter((i) => {
    const matchSearch =
      search === '' ||
      i.nom.toLowerCase().includes(search.toLowerCase()) ||
      i.prenom.toLowerCase().includes(search.toLowerCase()) ||
      i.email.toLowerCase().includes(search.toLowerCase());
    const matchAtelier = filterAtelier === '' || i.atelier_id === filterAtelier;
    return matchSearch && matchAtelier;
  });

  // ── Login screen ────────────────────────────────────────────────────────────

  if (!isAuthenticated) {
    return <LoginScreen onLogin={() => {
      sessionStorage.setItem('admin_auth', 'true');
      setIsAuthenticated(true);
      window.location.hash = '#admin';
    }} />;
  }

  // ── Dashboard ────────────────────────────────────────────────────────────────

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-[#354878] to-[#6A9ECC] px-6 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-white text-2xl font-bold">Administration</h1>
          <p className="text-white/70 text-sm">Gestion des inscriptions aux ateliers</p>
        </div>
        <button
          onClick={() => {
            sessionStorage.removeItem('admin_auth');
            setIsAuthenticated(false);
            window.location.hash = '';
          }}
          className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
        >
          <LogOut size={20} />
          Déconnexion
        </button>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8 space-y-6">

        {/* Alerte */}
        {alert && (
          <div
            role="status"
            className={`p-4 rounded-xl flex items-center justify-between ${
              alert.type === 'success'
                ? 'bg-green-50 border border-green-200 text-green-800'
                : 'bg-red-50 border border-red-200 text-red-800'
            }`}
          >
            <span>{alert.text}</span>
            <button onClick={() => setAlert(null)}>
              <X size={18} />
            </button>
          </div>
        )}

        {/* Stats globales */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <p className="text-gray-500 text-sm">Total inscrits</p>
            <p className="text-3xl font-bold text-[#354878]">{inscriptions.length}</p>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <p className="text-gray-500 text-sm">Ateliers actifs</p>
            <p className="text-3xl font-bold text-[#B9177B]">
              {Object.keys(stats).length}
            </p>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <p className="text-gray-500 text-sm">Atelier le + rempli</p>
            <p className="text-xl font-bold text-[#6A9ECC]">
              {Object.entries(stats).sort((a, b) => b[1] - a[1])[0]?.[0] ?? '—'}
            </p>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <p className="text-gray-500 text-sm">Résultats filtrés</p>
            <p className="text-3xl font-bold text-[#AD947E]">{filtered.length}</p>
          </div>
        </div>

        {/* Barre d'actions */}
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <div className="flex flex-col lg:flex-row gap-3">
            {/* Recherche */}
            <div className="flex-1 relative">
              <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher par nom, prénom ou email..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6A9ECC] text-sm"
              />
            </div>

            {/* Filtre atelier */}
            <select
              value={filterAtelier}
              onChange={(e) => setFilterAtelier(e.target.value)}
              className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6A9ECC] text-sm text-gray-700"
            >
              <option value="">Tous les ateliers</option>
              {ATELIERS_IDS.map((id) => (
                <option key={id} value={id}>{id}</option>
              ))}
            </select>

            {/* Boutons */}
            <button
              onClick={fetchAll}
              disabled={loading}
              className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-sm text-gray-700 disabled:opacity-50"
            >
              <RefreshCw size={16} className={loading ? 'animate-spin' : ''} />
              Actualiser
            </button>

            <button
              onClick={() => exportCSV(filtered)}
              className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium"
            >
              <Download size={16} />
              Exporter CSV
            </button>

            <button
              onClick={() => {
                setShowAddForm(!showAddForm);
                setFormData(INITIAL_FORM);
              }}
              className="flex items-center gap-2 px-4 py-2 bg-[#B9177B] text-white rounded-lg hover:bg-[#AD947E] transition-colors text-sm font-medium"
            >
              <Plus size={16} />
              Ajouter
            </button>
          </div>
        </div>

        {/* Formulaire d'ajout avec jour – mis à jour (mardi 9 juin, mercredi 10 juin) */}
        {showAddForm && (
          <div className="bg-white rounded-xl p-6 shadow-sm border-2 border-[#B9177B]/20">
            <h3 className="text-[#354878] font-bold text-lg mb-4 flex items-center gap-2">
              <Plus size={20} />
              Ajouter une inscription manuellement
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <select
                value={formData.atelier_id}
                onChange={(e) => setFormData({ ...formData, atelier_id: e.target.value })}
                className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6A9ECC] text-sm text-gray-700"
              >
                <option value="">Choisir un atelier</option>
                {ATELIERS_IDS.map((id) => (
                  <option key={id} value={id}>{id}</option>
                ))}
              </select>

              {/* Sélecteur jour corrigé : uniquement mardi 9 juin et mercredi 10 juin */}
              <select
                value={formData.jour ?? ''}
                onChange={(e) => setFormData({ ...formData, jour: e.target.value })}
                className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6A9ECC] text-sm text-gray-700"
              >
                <option value="">Choisir un jour</option>
                <option value="mardi">Mardi 9 juin</option>
                <option value="mercredi">Mercredi 10 juin</option>
              </select>

              <input
                type="text"
                placeholder="Nom"
                value={formData.nom}
                onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6A9ECC] text-sm"
              />

              <input
                type="text"
                placeholder="Prénom"
                value={formData.prenom}
                onChange={(e) => setFormData({ ...formData, prenom: e.target.value })}
                className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6A9ECC] text-sm"
              />

              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6A9ECC] text-sm"
              />
            </div>

            <div className="flex gap-3 mt-4">
              <button
                onClick={handleAdd}
                disabled={formLoading}
                className="flex items-center gap-2 px-6 py-2 bg-[#354878] text-white rounded-lg hover:bg-[#6A9ECC] transition-colors font-medium disabled:opacity-50"
              >
                <Check size={16} />
                {formLoading ? 'Ajout...' : 'Confirmer'}
              </button>
              <button
                onClick={() => {
                  setShowAddForm(false);
                  setFormData(INITIAL_FORM);
                }}
                className="flex items-center gap-2 px-6 py-2 border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <X size={16} />
                Annuler
              </button>
            </div>
          </div>
        )}

        {/* Tableau des inscriptions avec colonne Jour formatée */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
            <h3 className="font-bold text-[#354878] flex items-center gap-2">
              <Users size={20} />
              Inscriptions ({filtered.length})
            </h3>
          </div>

          {loading ? (
            <div className="p-12 text-center text-gray-400">
              <RefreshCw size={32} className="animate-spin mx-auto mb-3" />
              Chargement...
            </div>
          ) : filtered.length === 0 ? (
            <div className="p-12 text-center text-gray-400">
              Aucune inscription trouvée
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-50 border-b border-gray-100">
                  <tr>
                    <th className="px-4 py-3 text-left text-gray-600 font-semibold">Atelier</th>
                    <th className="px-4 py-3 text-left text-gray-600 font-semibold">Jour</th>
                    <th className="px-4 py-3 text-left text-gray-600 font-semibold">Nom</th>
                    <th className="px-4 py-3 text-left text-gray-600 font-semibold">Prénom</th>
                    <th className="px-4 py-3 text-left text-gray-600 font-semibold">Email</th>
                    <th className="px-4 py-3 text-left text-gray-600 font-semibold">Date</th>
                    <th className="px-4 py-3 text-center text-gray-600 font-semibold">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {filtered.map((inscription) => (
                    <tr key={inscription.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-3">
                        <span className="bg-[#354878] text-white px-2 py-1 rounded text-xs font-bold">
                          {inscription.atelier_id}
                        </span>
                       </td>
                      <td className="px-4 py-3 text-gray-600 text-sm">
                        {inscription.jour ? JOUR_LABELS[inscription.jour] ?? inscription.jour : '—'}
                       </td>
                      <td className="px-4 py-3 font-medium text-gray-800">{inscription.nom}</td>
                      <td className="px-4 py-3 text-gray-700">{inscription.prenom}</td>
                      <td className="px-4 py-3 text-gray-600">{inscription.email}</td>
                      <td className="px-4 py-3 text-gray-500 text-xs">
                        {new Date(inscription.created_at).toLocaleString('fr-FR')}
                      </td>
                      <td className="px-4 py-3 text-center">
                        {deleteConfirm === inscription.id ? (
                          <div className="flex items-center justify-center gap-2">
                            <button
                              onClick={() => handleDelete(inscription.email)}
                              className="px-3 py-1 bg-red-600 text-white rounded text-xs font-medium hover:bg-red-700 transition-colors"
                            >
                              Confirmer
                            </button>
                            <button
                              onClick={() => setDeleteConfirm(null)}
                              className="px-3 py-1 border border-gray-200 text-gray-600 rounded text-xs hover:bg-gray-50 transition-colors"
                            >
                              Annuler
                            </button>
                          </div>
                        ) : (
                          <button
                            onClick={() => setDeleteConfirm(inscription.id)}
                            className="p-2 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                            title="Supprimer"
                          >
                            <Trash2 size={16} />
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Stats par atelier */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="font-bold text-[#354878] mb-4 flex items-center gap-2">
            <Users size={20} />
            Résumé par atelier
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {ATELIERS_IDS.map((id) => {
              const count = stats[id] ?? 0;
              return (
                <div
                  key={id}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                >
                  <span className="text-sm font-medium text-gray-700">{id}</span>
                  <span className={`font-bold text-lg ${count > 0 ? 'text-[#B9177B]' : 'text-gray-300'}`}>
                    {count}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}