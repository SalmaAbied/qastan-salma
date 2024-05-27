import React from "react";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Form: React.FC = () => {
  return (
    <>
      <div className="container mx-auto pt-10 relative z-20">
        <h1 className="text-4xl pl-5">Contact</h1>
        <hr className="ml-5 w-12 h-1 border-0 bg-darkorange block mt-2 mb-6" />
      </div>
      <div className="flex flex-col container items-center mx-auto relative z-20 py-20">
        <div className="z-10 flex flex-col w-full max-w-4xl rounded-xl shadow-lg md:flex-row">
          <div className="flex flex-col justify-between p-8 md:w-1/2 bg-darkblue text-white rounded-t-xl md:rounded-tl-xl md:rounded-bl-xl md:rounded-tr-none">
            <div className="space-y-4">
              <h1 className="text-2xl font-semibold">Qastan Kuurne</h1>
              <div className="flex items-center space-x-3">
                <MapPin />
                <p>Brugsesteenweg 48, 8520 Kuurne</p>
              </div>
              <h1 className="text-2xl font-semibold">Qastan Antwerpen</h1>
              <div className="flex items-center space-x-3">
                <MapPin />
                <p>Brugsesteenweg 48, 8520 Kuurne</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail />
                <p>info@qastan.be</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone />
                <a href="tel:051310744">+32 (0)51 31 07 44</a>
              </div>
            </div>
            <div>
              <p>Volg ons:</p>
              <div className="flex space-x-3 mt-2">
                <a href="https://www.facebook.com/QastanIT" target="_blank" className="w-8 h-8 flex items-center justify-center text-white hover:text-darkorange transition duration-300">
                  <Facebook />
                </a>
                <a href="https://www.instagram.com/qastan_it/" target="_blank" className="w-8 h-8 flex items-center justify-center text-white hover:text-darkorange transition duration-300">
                  <Instagram />
                </a>
                <a href="https://www.linkedin.com/company/qastan-it/?originalSubdomain=be" target="_blank" className="w-8 h-8 flex items-center justify-center text-white hover:text-darkorange transition duration-300">
                  <Linkedin />
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center p-8 bg-white md:w-1/2 rounded-b-xl md:rounded-r-3xl md:rounded-tr-xl">
            <form className="z-10 space-y-4" autoComplete="off">
              <h3 className="text-xl font-semibold text-gray-800">Contacteer ons</h3>
              <div>
                <input type="text" name="name" placeholder="Naam" className="w-full p-3 border-2 border-transparent rounded bg-gray-200 focus:outline-none focus:border-darkorange" />
              </div>
              <div>
                <input type="email" name="email" className="w-full p-3 border-2 border-transparent rounded bg-gray-200 focus:outline-none focus:border-darkorange" placeholder="E-mailadres" />
              </div>
              <div>
                <input type="tel" name="phone" className="w-full p-3 border-2 border-transparent rounded bg-gray-200 focus:outline-none focus:border-darkorange" placeholder="Tel/Gsm" />
              </div>
              <div>
                <textarea name="message" placeholder="Jouw bericht" className="w-full p-3 border-2 border-transparent rounded bg-gray-200 focus:outline-none focus:border-darkorange"></textarea>
              </div>
              <button type="submit" className="w-full p-3 text-white bg-darkblue rounded focus:outline-none hover:bg-lightblue transition duration-300">
                Verstuur
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
