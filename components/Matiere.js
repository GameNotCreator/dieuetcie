import React from "react";
import matiere from "@/public/matiere.json";
const Matiere = () => {
  const famille = matiere?.familles || [];
  const gamme = matiere?.gammes || [];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Matières</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {famille.map((item, index) => (
          <div
            key={index}
            className="card bg-base-100 shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2"
          >
            <div className="card-body">
              {item.img && (
                <img src={item.img} alt={item.title} className="mt-4" />
              )}
              <h3 className="card-title text-xl font-bold text-center items-center justify-center">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}

      </div>
      <br/>
      <h2 className="text-2xl font-bold mb-4">Gammes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">

        {gamme.map((item, index) => (
          <div
            key={index}
            className="card bg-base-100 shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2"
          >
            <div className="card-body">
              <h3 className="card-title text-xl font-bold text-center items-center justify-center">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
        </div>
    </div>
  );
};

export default Matiere;
