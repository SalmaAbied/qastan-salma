import React, { useState, ChangeEvent, FormEvent } from "react";

const SollicitatieFormulier = () => {
  const [formData, setFormData] = useState({
    voornaam: "",
    naam: "",
    email: "",
    telefoon: "",
    meerInfo: "",
    akkoordPrivacy: false,
    cv: null,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLInputElement>) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData({
        ...formData,
        [name]: checked,
      });
    } else if (type === "file") {
      const file = (e.target as HTMLInputElement).files?.[0];
      setFormData({
        ...formData,
        [name]: file,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <div className="grid md:grid-cols-2 gap-4 px-4 container mx-auto">
        <div className="">
          <form onSubmit={handleSubmit} className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <h1 className="text-4xl font-bold mb-5">Solliciteer nu:</h1>
            <div className="mb-6">
              <label htmlFor="voornaam" className="block text-gray-700 font-bold mb-2">
                Voornaam:
              </label>
              <input type="text" id="voornaam" name="voornaam" value={formData.voornaam} onChange={handleChange} required className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
            </div>
            <div className="mb-6">
              <label htmlFor="naam" className="block text-gray-700 font-bold mb-2">
                Naam:
              </label>
              <input type="text" id="naam" name="naam" value={formData.naam} onChange={handleChange} required className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                E-mailadres:
              </label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
            </div>
            <div className="mb-6">
              <label htmlFor="telefoon" className="block text-gray-700 font-bold mb-2">
                Tel./GSM:
              </label>
              <input type="tel" id="telefoon" name="telefoon" value={formData.telefoon} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
            </div>
            <div className="mb-6">
              <label htmlFor="meerInfo" className="block text-gray-700 font-bold mb-2">
                Meer info:
              </label>
              <textarea id="meerInfo" name="meerInfo" value={formData.meerInfo} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
            </div>
            <div className="mb-6">
              <label htmlFor="cv" className="block text-gray-700 font-bold mb-2">
                CV uploaden:
              </label>
              <input type="file" id="cv" name="cv" accept=".pdf,.doc,.docx" onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
            </div>
            <div className="mb-6">
              <label className="flex items-center">
                <input type="checkbox" name="akkoordPrivacy" checked={formData.akkoordPrivacy} onChange={handleChange} required className="mr-2" />
                <span className="text-gray-700">
                  Ik ga akkoord met de{" "}
                  <a href="/Cookies" className="underline hover:text-darkorange transition duration-300" target="_blank">
                    privacyvoorwaarden
                  </a>
                  .
                </span>
              </label>
            </div>
            <div className="text-center">
              <button type="submit" className="w-fit bg-darkblue hover:bg-lightblue transition duration-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Verstuur
              </button>
            </div>
          </form>
        </div>
        <div className="p-8 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold mb-5">Wie is Qastan?</h1>
          <p className="mb-10">Qastan is een groeiend familiebedrijf en onafhankelijke ontwikkelaar van software met roots in hartje West-Vlaanderen. Met ruim 25 jaar ervaring op de teller focust Qastan zich in de eerste plaats op het vereenvoudigen en optimaliseren van complexe processen (zowel administratief, logistiek als kantoor gerelateerd). Digitalisering en automatisering vormen telkens het uitgangspunt van onze eigen applicaties.</p>
          <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="rounded-lg shadow-lg" alt="" />
        </div>
      </div>
    </>
  );
};

export default SollicitatieFormulier;
