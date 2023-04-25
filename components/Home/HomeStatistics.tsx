const HomeStatistics = () => {
  return (
    <section className="bg-indigo-800">
      <div className="container grid grid-cols-2 gap-8 py-8 mx-auto text-center md:grid-cols-4">
        <div>
          <h5 className="text-5xl font-bold text-white">
            <span className="text-indigo-200">+</span>
            <span className="inline text-white">100</span>
          </h5>
          <p className="text-xs font-medium tracking-wide text-indigo-100 uppercase">
            Etudiants déjà inscrit
          </p>
        </div>
        <div>
          <h5 className="text-5xl font-bold text-white">
            <span className="text-indigo-200">+</span>
            <span className="inline text-white">150</span>
          </h5>
          <p className="text-xs font-medium tracking-wide text-indigo-100 uppercase">
            Heures de formation
          </p>
        </div>
        <div>
          <h5 className="text-5xl font-bold text-white">
            <span className="inline text-white">12</span>
          </h5>
          <p className="text-xs font-medium tracking-wide text-indigo-100 uppercase">
            Projets concrets
          </p>
        </div>
        <div>
          <h5 className="text-5xl font-bold text-white">
            <span className="inline text-white">1</span>
          </h5>
          <p className="text-xs font-medium tracking-wide text-indigo-100 uppercase">Campus</p>
        </div>
      </div>
    </section>
  )
}

export default HomeStatistics
