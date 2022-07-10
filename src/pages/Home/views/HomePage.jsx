import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <>
      <main>
        <div className="relative pt-40 pb-40 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://raw.githubusercontent.com/AstridCely/proyecto-trabajo-de-campo-frontend/main/src/assets/img/header-zona-gamer.png')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-60 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-white font-semibold text-5xl">
                    Zona Gamer
                  </h1>
                  <p className="mt-4 text-lg text-gray-200">
                    Tempor ut sit minim irure nulla. Anim occaecat id
                    reprehenderit voluptate ut ut nisi nulla cillum ut aliqua
                    mollit. Reprehenderit commodo mollit irure cupidatat.
                    Consectetur voluptate proident dolore non ipsum Lorem mollit
                    adipisicing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="pb-20 bg-gray-200 -mt-24">
          <div className="container mx-auto px-4 lg:px-20">
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-500">
                      <i className="fas fa-clock"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Tiempo</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Reprehenderit commodo mollit irure cupidatat. Consectetur
                      voluptate proident dolore non ipsum Lorem mollit
                      adipisicing.
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                      <i className="fas fa-desktop"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Dispositivos</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Reprehenderit commodo mollit irure cupidatat. Consectetur
                      voluptate proident dolore non ipsum Lorem mollit
                      adipisicing.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                      <i className="fas fa-dollar-sign"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Dinero</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Reprehenderit commodo mollit irure cupidatat. Consectetur
                      voluptate proident dolore non ipsum Lorem mollit
                      adipisicing.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center mt-32">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-gamepad text-xl"></i>
                </div>
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  Gran Variedad de Videojuegos
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                  Reprehenderit commodo mollit irure cupidatat. Consectetur
                  voluptate proident dolore non ipsum Lorem mollit adipisicing.
                </p>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
                  Reprehenderit commodo mollit irure cupidatat. Consectetur
                  voluptate proident dolore non ipsum Lorem mollit adipisicing.
                </p>
              </div>

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-red-400">
                  <img
                    alt="zona-gamer"
                    src="https://raw.githubusercontent.com/AstridCely/proyecto-trabajo-de-campo-frontend/main/src/assets/img/card-image.png"
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block h-95-px -top-94-px"
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        className="text-red-400 fill-current"
                      ></polygon>
                    </svg>
                    <h4 className="text-xl font-bold text-white">
                      Titulo/imagen de prueba
                    </h4>
                    <p className="text-md font-light mt-2 text-white">
                      Reprehenderit commodo mollit irure cupidatat. Consectetur
                      voluptate proident dolore non ipsum Lorem mollit
                      adipisicing.
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
