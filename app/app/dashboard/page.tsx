import Link from 'next/link';

export default function Dashboard() {
  const courses = [
    {
      id: 1,
      title: 'Échauffement vocal quotidien (10 min)',
      category: 'Voix & Souffle',
      progress: 80,
      duration: '12 leçons'
    },
    {
      id: 2,
      title: 'Bases du solfège et lecture de notes',
      category: 'Théorie musicale',
      progress: 40,
      duration: '8 leçons'
    },
    {
      id: 3,
      title: 'Placement de la voix en chorale',
      category: 'Chant choral',
      progress: 15,
      duration: '15 leçons'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-6 md:p-12 font-sans">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8 border-b border-slate-800 pb-6">
          <div>
            <h1 className="text-2xl font-bold">Bonjour, Élève 👋</h1>
            <p className="text-slate-400 text-sm">Prêt pour votre session de pratique vocale ?</p>
          </div>
          <Link href="/" className="text-xs text-slate-400 hover:text-amber-400">
            ← Retour à l'accueil
          </Link>
        </div>

        <h2 className="text-xl font-semibold mb-6">Mes Programmes Actifs</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div key={course.id} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-700 transition">
              <div>
                <span className="text-xs bg-amber-500/10 text-amber-400 px-2.5 py-1 rounded-md font-medium">
                  {course.category}
                </span>
                <h3 className="text-lg font-semibold mt-4 mb-2">{course.title}</h3>
                <p className="text-xs text-slate-400 mb-6">{course.duration}</p>
              </div>
              <div>
                <div className="flex justify-between text-xs text-slate-400 mb-2">
                  <span>Progression</span>
                  <span>{course.progress}%</span>
                </div>
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden mb-4">
                  <div className="bg-amber-500 h-full" style={{ width: `${course.progress}%` }}></div>
                </div>
                <Link href={`/cours/${course.id}`} className="block text-center bg-slate-800 hover:bg-slate-700 text-slate-100 py-2 rounded-xl text-sm font-medium transition">
                  Continuer
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
