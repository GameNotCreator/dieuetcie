"use client";

import React, { useMemo, useState } from "react";
import marquage from "@/public/data.json";
import matiere from "@/public/matiere.json";

const CardWithImage = ({ item }) => (
  <div className="card bg-white shadow-sm hover:shadow-md transition-all">
    {item.img ? (
      <figure className="px-4 pt-4">
        <img
          src={item.img}
          alt={item.title}
          className="rounded-xl w-full h-52 object-cover"
          loading="lazy"
        />
      </figure>
    ) : null}
    <div className="card-body">
      <h3 className="card-title text-lg">{item.title}</h3>
      <p className="text-gray-600 leading-relaxed">{item.description}</p>
    </div>
  </div>
);

const CardNoImage = ({ item }) => (
  <div className="card bg-white shadow-sm hover:shadow-md transition-all">
    <div className="card-body">
      <div className="flex items-start gap-3">
        <div className="badge badge-neutral badge-lg mt-1">G</div>
        <div>
          <h3 className="text-lg font-bold">{item.title}</h3>
          {item.description ? (
            <p className="text-gray-600 leading-relaxed mt-2">{item.description}</p>
          ) : (
            <p className="text-gray-400 mt-2 italic">Description à compléter</p>
          )}
        </div>
      </div>
    </div>
  </div>
);

export default function MarquageMatiereShowcase() {
  const [tab, setTab] = useState("marquage"); // "marquage" | "familles" | "gammes"

  const marquageData = useMemo(() => (Array.isArray(marquage) ? marquage : []), []);
  const familles = useMemo(
    () => (Array.isArray(matiere?.familles) ? matiere.familles : []),
    []
  );
  const gammes = useMemo(
    () => (Array.isArray(matiere?.gammes) ? matiere.gammes : []),
    []
  );

  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-10 space-y-6">
        {/* Header */}
        <div className="rounded-2xl bg-white shadow-sm p-6">
          <h1 className="text-3xl font-extrabold text-center">Marquage & Matières</h1>
          <p className="text-gray-600 mt-2">
          </p>

          {/* Tabs */}
          <div className="mt-6 flex items-center justify-center">
            <div className="tabs tabs-boxed bg-[#F5F5F5] p-2 rounded-xl inline-flex">
              <button
            className={`tab ${tab === "marquage" ? "tab-active text-[#0d4b81]" : "text-gray-400"}`}
                onClick={() => setTab("marquage")}
              >
                Marquage
              </button>
              <button
                className={`tab ${tab === "familles" ? "tab-active text-[#0d4b81]" : "text-gray-400"}`}
                onClick={() => setTab("familles")}
              >
                Matières
              </button>
              <button
                className={`tab ${tab === "gammes" ? "tab-active text-[#0d4b81]" : "text-gray-400"}`}
                onClick={() => setTab("gammes")}
              >
                Gammes
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        {tab === "marquage" && (
          <section className="space-y-4">

            {marquageData.length === 0 ? (
              <div className="alert bg-white shadow-sm">
                <span>Aucune info marquage disponible.</span>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {marquageData.map((item, idx) => (
                  <CardWithImage key={idx} item={item} />
                ))}
              </div>
            )}
          </section>
        )}

        {tab === "familles" && (
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Matières</h2>

            {familles.length === 0 ? (
              <div className="alert bg-white shadow-sm">
                <span>Aucune matière disponible.</span>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {familles.map((item, idx) => (
                  <CardWithImage key={idx} item={item} />
                ))}
              </div>
            )}
          </section>
        )}

        {tab === "gammes" && (
          <section className="space-y-4">
            {gammes.length === 0 ? (
              <div className="alert bg-white shadow-sm">
                <span>Aucune gamme disponible.</span>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {gammes.map((item, idx) => (
                  <CardNoImage key={idx} item={item} />
                ))}
              </div>
            )}
          </section>
        )}
      </div>
    </div>
  );
}
