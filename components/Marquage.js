import React from 'react'
import data from '@/public/data.json'
const Marquage = () => {
    const marquageData = data || [];
    if (marquageData.length === 0) {
        return <div>Aucune information de marquage disponible.</div>;
    
    }
    // Vous pouvez ajouter ici le rendu des informations de marquage
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {marquageData.map((item, index) => (
                <div key={index} className="card bg-base-100 shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2">
                    <div className="card-body">
                    {item.img && (
                            <img src={item.img} alt={item.title} className="mt-4" />
                        )}
                        <h3 className="card-title text-xl font-bold text-center items-center justify-center">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Marquage