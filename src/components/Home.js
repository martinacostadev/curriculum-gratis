import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="py-16">
      <section className="text-gray-700 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                2.7K
              </h2>
              <p className="leading-relaxed">CV Creados</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                1.8K
              </h2>
              <p className="leading-relaxed">Personas buscando empleo</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                35
              </h2>
              <p className="leading-relaxed">Empresas buscando empleo</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                6
              </h2>
              <p className="leading-relaxed">Días para el próximo viernes</p>
            </div>
          </div>
        </div>
      </section>

      <div className="container m-auto px-6">
        <div className="lg:flex justify-between items-center">
          <div className="lg:w-6/12 lg:p-0 p-7">
            <h1 className="text-4xl font-bold leading-tight mb-5">
              {" "}
              Crea GRATIS tu CV.{" "}
            </h1>
            <p className="text-xl">Con pocos pasos.</p>

            <div className="py-5">
              <Link
                to="/create"
                className="text-white rounded-full py-2 px-5 text-lg font-semibold bg-purple-600 inline-block border border-purple-600 mr-3"
              >
                Crear CV
              </Link>
            </div>
          </div>
          <div className="lg:w-5/12 order-2">
            <img
              src="https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"
              style={{
                transform:
                  "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
              }}
              alt=""
              className="rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
