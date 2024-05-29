import React from "react";
import { Facebook, Instagram, Linkedin, Send, SendHorizontal } from "lucide-react";
import logo from "../img/puffinWhiteLarge.png";

function Footer() {
  return (
    <>
      <footer className="bg-darkblue rounded-t-lg text-white">
        <div className="container mx-auto py-10 px-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="flex items-center">
              <i className="fas fa-map-marker-alt text-darkorange text-2xl mr-3"></i>
              <div>
                <h4 className="text-lg font-medium">Adres</h4>
                <hr className="w-12 h-0.5 bg-darkorange border-0 mb-3" />
                <a href="https://www.google.com/maps/place/Qastan/@50.8474241,3.2672585,17z/data=!3m1!4b1!4m6!3m5!1s0x47c33b38c907acab:0xa4d789daf58fe395!8m2!3d50.8474241!4d3.2698334!16s%2Fg%2F11sgn6nm40?entry=ttu" target="_blank">
                  Brugsesteenweg 48, 8520 Kuurne
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <i className="fas fa-phone text-darkorange text-2xl mr-3"></i>
              <div>
                <h4 className="text-lg font-medium">Neem contact op met ons</h4>
                <hr className="w-12 h-0.5 bg-darkorange border-0 mb-3" />
                <a href="tel:051310744">+32 (0)51 31 07 44</a>
              </div>
            </div>
            <div className="flex items-center">
              <i className="far fa-envelope-open text-darkorange text-2xl mr-3"></i>
              <div>
                <h4 className="text-lg font-medium">Mail ons</h4>
                <hr className="w-12 h-0.5 bg-darkorange border-0 mb-3" />
                <a href="mailto:info@qastan.be">info@qastan.be</a>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
            <div>
              <a href="/">
                <img src={logo} alt="logo" className="max-w-40" />
              </a>
              <div className="flex space-x-3 mt-5">
                <span className="text-lg font-medium">Volg ons</span>
                <a href="https://www.facebook.com/profile.php?id=100090413298416&locale=nl_NL" target="_blank" className="text-2xl text-darkorange">
                  <Facebook />
                </a>
                <a href="https://www.instagram.com/qastan_it/" target="_blank" className="text-2xl text-darkorange">
                  <Instagram />
                </a>
                <a href="https://www.linkedin.com/company/qastan-it/posts/?feedView=all" target="_blank" className="text-2xl text-darkorange">
                  <Linkedin />
                </a>
              </div>
            </div>
            <div>
              <div className="mb-5">
                <h3 className="text-lg font-medium">Nuttige links</h3>
                <hr className="w-12 h-0.5 bg-darkorange border-0 mb-3" />
                <ul className="grid grid-cols-2">
                  <li className="hover:text-darkorange transition duration-300">
                    <a href="/">Home</a>
                  </li>
                  <li className="hover:text-darkorange transition duration-300">
                    <a href="/Oplossingen">Oplossingen</a>
                  </li>
                  <li className="hover:text-darkorange transition duration-300">
                    <a href="/Toepassingen">Toepassingen</a>
                  </li>
                  <li className="hover:text-darkorange transition duration-300">
                    <a href="/Over">Over ons</a>
                  </li>
                  <li className="hover:text-darkorange transition duration-300">
                    <a href="/Contact">Contact</a>
                  </li>
                  <li className="hover:text-darkorange transition duration-300">
                    <a href="/Team">Ons Team</a>
                  </li>
                  <li className="hover:text-darkorange transition duration-300">
                    <a href="/Jobs">Jobs</a>
                  </li>
                  <li className="hover:text-darkorange transition duration-300">
                    <a href="/Partners">Partners</a>
                  </li>
                  <li className="hover:text-darkorange transition duration-300">
                    <a href="/Blog">Blog</a>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div className="mb-5">
                <h3 className="text-lg font-medium">Schrijf je in</h3>
                <hr className="w-12 h-0.5 bg-darkorange border-0 mb-3" />

                <p className="mb-3">Niet vergeten om je te abonneren op onze nieuwsbrief</p>
                <form className="relative">
                  <div className="relative">
                    <input id="email" name="email" type="text" placeholder="E-mailadres" className="w-full py-2 px-3 rounded-full bg-gray-800 border border-gray-600 text-gray-300 pr-12" />
                    <button type="submit" className="absolute rounded-tr-full rounded-br-full top-0 right-0 bg-darkorange text-gray-900 py-2 px-4 border border-darkorange hover:bg-lightblue transition duration-300 hover:border-lightblue">
                      <SendHorizontal color="white" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-bggray py-2">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-center text-darkblue md:text-left text-sm">Copyright &copy; 2024 Qastan</p>
              <ul className="flex flex-wrap">
                <li className="ml-5 border-r border-darkblue pr-5">
                  <a href="/Cookies" className="text-sm text-darkblue hover:text-darkorange transition duration-300">
                    Cookies &amp; Privacy
                  </a>
                </li>
                <li className="ml-5 border-r border-darkblue pr-5">
                  <a href="/AlgemeneVoorwaarden" className="text-sm text-darkblue hover:text-darkorange transition duration-300">
                    Algemene voorwaarden
                  </a>
                </li>
                <li className="text-sm ml-5 text-darkblue">BTW BE0464 789 554</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
