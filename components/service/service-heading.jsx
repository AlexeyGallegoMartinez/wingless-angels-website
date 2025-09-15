export default function ServiceHeading() {
  return (
    <div className="relative isolate overflow-hidden bg-white">
      <div className="px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
            Comprehensive Autism Support Services
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg/8 text-pretty text-gray-600">
            Our multidisciplinary approach ensures every individual receives
            personalized care tailored to their unique strengths and needs.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="bg-gradient-to-r from-[hsl(202,86%,23%)] to-[hsl(185,65%,35%)] hover:to-[hsl(202,86%,23%)]
               transition duration-300 text-white py-2 rounded-md w-60 hover:bg-[hsl(202,86%,23%)]/95 
               hover:cursor-pointer hover:scale-105"
            >
              Get started
            </a>
            {/* <a
              href="#"
              className="text-sm/6 font-semibold text-gray-900 hover:text-gray-600"
            >
              Learn more <span aria-hidden="true">→</span>
            </a> */}
          </div>
        </div>
      </div>
      {/* <svg
        viewBox="0 0 1024 1024"
        aria-hidden="true"
        className="absolute bottom-1/2 left-1/2 -z-10 size-256 -translate-x-1/2 mask-[radial-gradient(closest-side,white,transparent)]"
      >
        <circle
          r={512}
          cx={512}
          cy={512}
          fill="url(#8d958450-c69f-4251-94bc-4e091a323369)"
          fillOpacity="0.7"
        />
        <defs>
          <radialGradient id="8d958450-c69f-4251-94bc-4e091a323369">
            <stop stopColor="#7775D6" />
            <stop offset={1} stopColor="hsl(185,65%,35%)" />
          </radialGradient>
        </defs>
      </svg> */}
    </div>
  );
}
