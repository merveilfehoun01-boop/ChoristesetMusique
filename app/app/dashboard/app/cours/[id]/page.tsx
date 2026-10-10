import Link from 'next/link';

export default function CourseDetail() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-6 md:p-12 font-sans">
      <div className="max-w-4xl mx-auto">
        <Link href="/dashboard" className="text-xs text-slate-400 hover:text-amber-400 mb-6 inline-block">
          ← Retour au tableau de bord
        </Link>

        <h1 className="text-2xl font-bold mb-2">Module 1 : Échauffement des cordes vocales</h1>
        <p className="text-slate-400 text-sm mb-8">Exercices pour détendre le diaphragme et ouvrir les résonateurs.</p>

        {/* Lecteur Vidéo/Audio */}
        <div className="aspect-video bg-slate-900 border border-slate-800 rounded-2xl flex flex-col items-center justify-center mb-8">
          <div className="w-16 h-16 rounded-full bg-amber-500 flex items-center justify-center text-slate-950 font-bold text-xl cursor-pointer hover:scale-105 transition shadow-lg shadow-amber-500/20">
            ▶
          </div>
          <p className="text-slate-400 text-sm mt-4">Lecture du cours vidéo guidé par le coach</p>
        </div>

        {/* Zone de soumission d'exercice vocal */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
          <h2 className="text-lg font-semibold mb-2">Soumettre votre exercice vocal</h2>
          <p className="text-slate-400 text-sm mb-6">
            Enregistrez-vous en train de faire l'exercice et envoyez votre fichier audio pour obtenir une correction.
          </p>

          <div className="border-2 border-dashed border-slate-800 rounded-xl p-8 text-center hover:border-slate-700 transition cursor-pointer">
            <p className="text-sm font-medium mb-1">Glissez votre fichier audio (.mp3, .wav) ici</p>
            <p className="text-xs text-slate-500 mb-4">ou cliquez pour parcourir vos dossiers</p>
            <button className="bg-slate-800 hover:bg-slate-700 text-slate-200 px-4 py-2 rounded-lg text-sm font-medium transition">
              Sélectionner un fichier
            </button>
          </div>

          <button className="w-full mt-6 bg-amber-500 hover:bg-amber-600 text-slate-950 py-3 rounded-xl font-semibold transition">
            Envoyer mon enregistrement au coach
          </button>
        </div>
      </div>
    </div>
  );
}
