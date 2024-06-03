import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from "lucide-react";
import React from "react";
import Background from "./Background";

const ContactSection = () => {
  return (
    <>
      <div className="container mx-auto py-20 px-5 relative z-40">
        <h1 className="text-3xl md:text-5xl font-bold">Contact</h1>
        <p className="text-sm md:text-lg">Neem vandaag nog contact op met ons en wij zullen u zo snel mogelijk helpen</p>
      </div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 h-fit w-4/5 md:w-[90%] lg:w-4/5 rounded-lg shadow-lg overflow-hidden text-white">
        <div className="p-2 md:p-4 h-full bg-darkblue col-span-2 z-40">
          <form>
            <div className="flex flex-col md:flex-row pt-8 p-4">
              <h2 className="text-2xl md:text-3xl font-semibold">Stel ons je vraag</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-6 px-4 md:py-12 md:px-8 text-sm">
              <div className="flex flex-col gap-1">
                <label className="font-semibold">
                  Naam <span className="text-red-500">&#42;</span>
                </label>
                <input className="border-[1px] border-white bg-gray-800 p-2 rounded-md" placeholder="Vul hier je naam in" required name="name" type="text" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="font-semibold">
                  E-mailadres <span className="text-red-500">&#42;</span>
                </label>
                <input className="border-[1px] border-white bg-gray-800 p-2 rounded-md" placeholder="Vul hier je e-mailadres in" required type="email" name="email" id="email" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="font-semibold">
                  Telefoonnummer <span className="font-light">(optioneel)</span>
                </label>
                <input className="border-[1px] border-white bg-gray-800 p-2 rounded-md" placeholder="Vul hier je nummer in" name="phone" type="tel" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="font-semibold">
                  Onderwerp <span className="text-red-500">&#42;</span>
                </label>
                <input className="border-[1px] border-white bg-gray-800 p-2 rounded-md" placeholder="Vul hier je onderwerp in" required name="subject" type="text" />
              </div>
              <div className="flex flex-col gap-1 md:col-span-2">
                <label className="font-semibold">
                  Bericht <span className="text-red-500">&#42;</span>
                </label>
                <input className="border-[1px] border-white bg-gray-800 p-2 rounded-md" placeholder="Vul hier je bericht in" required name="message" type="text" />
              </div>
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2 text-sm">
                  Ik accepteer de{" "}
                  <a href="/Cookies" className="underline hover:text-darkorange transition duration-300">
                    privacyvoorwaarden
                  </a>
                </span>
              </label>
            </div>
          </form>

          <div className="flex items-center justify-center md:justify-end py-4 px-8">
            <button className="py-2 px-4 text-white bg-darkorange rounded focus:outline-none hover:bg-lightblue transition duration-300">
              <span className="text-lg">Verstuur</span>
            </button>
          </div>
        </div>

        <div className="py-6 px-4 md:h-full bg-slate-50  text-black flex flex-col justify-between z-40">
          <h1 className="text-2xl font-bold">Adres</h1>
          <div className="mb-6">
            <h3 className="text-lg font-semibold">Qastan Kuurne</h3>
            <div className="flex space-x-3 mt-2">
              <a href="https://www.google.com/maps/place/Brugsesteenweg+48,+8520+Kuurne/@50.847052,3.2699317,17z/data=!3m1!4b1!4m5!3m4!1s0x47c33baca934db0d:0xcabd55e1f44a7f39!8m2!3d50.847052!4d3.2699317?sa=X&ved=2ahUKEwjI2OuFk6v8AhUXgP0HHXc8AfgQ8gF6BAgLEAE&coh=164777&entry=tt&shorturl=1" target="_blank" className="hover:text-darkorange transition duration-300">
                Brugsesteenweg 48, 8520 Kuurne
              </a>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold">Qastan Antwerpen</h3>
            <div className="flex flex-col mt-2">
              <a href="https://www.google.com/maps/place/Boomsesteenweg+26,+2630+Schelle/@51.1326103,4.3756048,17z/data=!3m1!4b1!4m6!3m5!1s0x47c3f198ec39c9ab:0x2955104087ce4d0!8m2!3d51.1326103!4d4.3756048!16s%2Fg%2F11csjrdlfn?entry=ttu" target="_blank" className="hover:text-darkorange transition duration-300">
                Boomsesteenweg 26, 2630 Aartselaar
              </a>
              <span className="italic">(in de gebouwen van Charlier-Brabo Group)</span>
            </div>
          </div>

          <div className="mb-6">
            <div className="flex space-x-3 mb-4">
              <Phone />
              <a href="tel:051310744" className="hover:text-darkorange transition duration-300">
                +32 (0)51 31 07 44
              </a>
            </div>

            <div className="flex items-center space-x-3">
              <Mail />
              <a href="mailto:info@qastan.be" className="hover:text-darkorange transition duration-300">
                info@qastan.be
              </a>
            </div>
          </div>

          <div className="flex justify-center md:justify-start items-center gap-4">
            <span>Volg ons:</span>
            <a title="linkedin" href="#" target="_blank" className="hover:text-darkorange transition duration-300">
              <Linkedin />
            </a>
            <a title="instagram" href="#" target="_blank" className="hover:text-darkorange transition duration-300">
              <Instagram />
            </a>
            <a title="facebook" href="#" target="_blank" className="hover:text-darkorange transition duration-300">
              <Facebook />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactSection;
