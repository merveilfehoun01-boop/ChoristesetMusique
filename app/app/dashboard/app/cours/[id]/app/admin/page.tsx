'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function AdminDashboard() {
  const [submissions, setSubmissions] = useState([
    {
      id: 1,
      studentName: 'Marc K.',
      courseTitle: 'Échauffement vocal quotidien',
      submittedAt: 'Aujourd\'hui à 10h15',
      audioUrl: '#',
      status: 'En attente',
      feedback: ''
    },
    {
      id: 2,
      studentName: 'Sophie T.',
      courseTitle: 'Placement de la voix en chorale',
      submittedAt: 'Hier à 18h30',
      audioUrl: '#',
      status: 'Corrigé',
      feedback: 'Très bonne posture. Attention à bien soutenir le souffle sur les notes hautes.'
    }
  ]);

  const [selectedSubmission, setSelectedSubmission] = useState<number | null>(1);
  const [currentFeedback, setCurrentFeedback] = useState('');

  const activeSubmission = submissions.find((s) => s.id === selectedSubmission);

  const handleSendFeedback = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedSubmission) return;

    setSubmissions(submissions.map(s => 
      s.id === selectedSubmission 
        ? { ...s, status: 'Corrigé', feedback: currentFeedback } 
        : s
    ));
    setCurrentFeedback('');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-6 md:p-12 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 border-b border-slate-800 pb-6 gap-4">
          <div>
            <span className="text-xs bg-amber-500/10 text-amber-400 px-2.5 py-1 rounded-md font-medium">
              Espace Formateur / Coach
            </span>
            <h1 className="text-2xl font-bold mt-2">Tableau de bord Administrateur</h1>
          </div>
          <div className="flex gap-4">
            <Link href="/" className="text-xs text-slate-400 hover:text-amber-400 self-center">
              ← Retour au site
            </Link>
            <Link href="/admin/nouveau-cours" className="bg-amber-500 hover:bg-amber-600 text-slate-950 px-5 py-2.5 rounded-xl font-semibold text-sm transition">
              + Ajouter un cours
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
            <p className="text-slate-400 text-sm">Élèves inscrits</p>
            <p className="text-3xl font-extrabold text-amber-400 mt-2">128</p>
          </div>
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
            <p className="text-slate-400 text-sm">Exercices à corriger</p>
            <p className="text-3xl font-extrabold text-amber-400 mt-2">
              {submissions.filter(s => s.status === 'En attente').length}
            </p>
          </div>
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
            <p className="text-slate-400 text-sm">Cours actifs</p>
            <p className="text-3xl font-extrabold text-amber-400 mt-2">12</p>
          </div>
        </div>

        <h2 className="text-xl font-semibold mb-6">Copies & Enregistrements des Élèves</h2>
        
        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-5 space-y-4">
            {submissions.map((sub) => (
              <div 
                key={sub.id} 
                onClick={() => {
                  setSelectedSubmission(sub.id);
                  setCurrentFeedback(sub.feedback);
                }}
                className={`p-5 rounded-2xl border cursor-pointer transition ${
                  selectedSubmission === sub.id 
                    ? 'bg-slate-900 border-amber-500' 
                    : 'bg-slate-900/50 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold">{sub.studentName}</h3>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    sub.status === 'En attente' 
                      ? 'bg-amber-500/20 text-amber-400' 
                      : 'bg-emerald-500/20 text-emerald-400'
                  }`}>
                    {sub.status}
                  </span>
                </div>
                <p className="text-xs text-slate-400 mb-1">{sub.courseTitle}</p>
                <p className="text-xs text-slate-500">{sub.submittedAt}</p>
              </div>
            ))}
          </div>

          <div className="md:col-span-7 bg-slate-900 border border-slate-800 rounded-2xl p-6">
            {activeSubmission ? (
              <div>
                <h3 className="text-lg font-bold mb-1">Correction : {activeSubmission.studentName}</h3>
                <p className="text-xs text-slate-400 mb-6">{activeSubmission.courseTitle}</p>

                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 mb-6">
                  <p className="text-xs text-slate-400 mb-2">Enregistrement vocal de l'élève :</p>
                  <audio controls className="w-full">
                    <source src={activeSubmission.audioUrl} type="audio/mpeg" />
                    Votre navigateur ne prend pas en charge l'élément audio.
                  </audio>
                </div>

                <form onSubmit={handleSendFeedback}>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Votre retour / Conseils au chanteur :
                  </label>
                  <textarea 
                    rows={4}
                    value={currentFeedback}
                    onChange={(e) => setCurrentFeedback(e.target.value)}
                    placeholder="Indiquez les points forts, la justesse et les axes d'amélioration..."
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm text-slate-100 focus:outline-none focus:border-amber-500 mb-4"
                  />
                  <button 
                    type="submit"
                    className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 py-3 rounded-xl font-semibold text-sm transition"
                  >
                    Envoyer le retour à l'élève
                  </button>
                </form>
              </div>
            ) : (
              <p className="text-slate-500 text-center py-12">Sélectionnez une copie pour commencer l'évaluation.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
