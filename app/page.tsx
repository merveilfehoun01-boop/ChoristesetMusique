'use client';

import Link from 'next/link';

export default function Home() {
  const handleSubscribe = async (priceId: string, mode: 'subscription' | 'payment') => {
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ priceId, mode }),
      });

      const data = await response.json();
      if (data.url) {
        window.location.href = data.url;
      }
    } catch (error) {
      console.error('Erreur lors de la redirection vers le paiement:', error);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between font-sans">
      <header className="flex justify-between items-center px-8 py-6 border-b border-slate-800 max-w-7xl mx-auto w-full">
        <h1 className="text-xl font-bold tracking-tight text-amber-400">Harmonie & Voix</h1>
        <div className="space-x-4">
          <Link href="/dashboard" className="text-sm font-medium hover:text-amber-400 transition">
            Espace Élève
          </Link>
          <Link href="/admin" className="border border-amber-500/30 text-amber-400 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-amber-500/10 transition">
            Espace Formateur
          </Link>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto py-16">
        <span className="bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs px-3 py-1 rounded-full uppercase tracking-wider mb-6">
          Académie Vocale & Musique
        </span>
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
          Maîtrisez votre voix et vos instruments, <span className="text-amber-400">à votre rythme.</span>
        </h2>
        <p className="text-slate-400 text-lg mb-12 max-w-2xl">
          Programmes complets de chant, exercices vocaux guidés et accompagnement personnalisé par votre coach.
        </p>

        <div className="w-full grid md:grid-cols-2 gap-8 text-left max-w-4xl">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 flex flex-col justify-between">
            <div>
              <span className="text-xs bg-slate-800 text-slate-300 px-3 py-1 rounded-full font-medium">Standard</span>
              <h3 className="text-2xl font-bold mt-4">Pass Autonomie</h3>
              <p className="text-slate-400 text-sm mt-2">Accès illimité à tous les cours vidéo et exercices d'échauffement.</p>
              <div className="my-6">
                <span className="text-4xl font-extrabold">29 €</span>
                <span className="text-slate-400 text-sm"> / mois</span>
              </div>
              <ul className="space-y-3 text-sm text-slate-300 mb-8">
                <li>✓ Accès aux catalogues de cours</li>
                <li>✓ Suivi de progression automatique</li>
                <li>✓ Exercices de respiration & vocalises</li>
              </ul>
            </div>
            <button 
              onClick={() => handleSubscribe('price_autonomie_monthly', 'subscription')}
              className="w-full bg-slate-800 hover:bg-slate-700 text-amber-400 font-semibold py-3 rounded-xl transition"
            >
              Souscrire à l'abonnement
            </button>
          </div>

          <div className="bg-slate-900 border-2 border-amber-500 rounded-3xl p-8 flex flex-col justify-between relative shadow-xl shadow-amber-500/5">
            <span className="absolute -top-3 right-6 bg-amber-500 text-slate-950 text-xs font-bold px-3 py-1 rounded-full">
              Recommandé
            </span>
            <div>
              <span className="text-xs bg-amber-500/20 text-amber-400 px-3 py-1 rounded-full font-medium">Premium</span>
              <h3 className="text-2xl font-bold mt-4">Pass Coaching Pro</h3>
              <p className="text-slate-400 text-sm mt-2">Accès complet + corrections personnalisées de vos enregistrements vocaux.</p>
              <div className="my-6">
                <span className="text-4xl font-extrabold text-amber-400">69 €</span>
                <span className="text-slate-400 text-sm"> / mois</span>
              </div>
              <ul className="space-y-3 text-sm text-slate-300 mb-8">
                <li>✓ Tout le contenu du Pass Autonomie</li>
                <li>✓ <strong>Feedback audio personnalisé du coach</strong></li>
                <li>✓ Support prioritaire du professeur</li>
              </ul>
            </div>
            <button 
              onClick={() => handleSubscribe('price_coaching_monthly', 'subscription')}
              className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold py-3 rounded-xl transition"
            >
              Rejoindre avec Coaching
            </button>
          </div>
        </div>
      </main>

      <footer className="border-t border-slate-800 py-6 text-center text-xs text-slate-500 max-w-7xl mx-auto w-full">
        Plateforme SaaS Harmonie & Voix • Paiements sécurisés via Stripe
      </footer>
    </div>
  );
}
