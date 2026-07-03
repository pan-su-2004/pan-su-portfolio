import canvaLogo from "@/assets/canva-logo.png";

const tools = [
  {
    name: "Figma",
    svg: (
      <svg viewBox="0 0 38 57" fill="none" className="h-14 w-auto md:h-16">
        <path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" fill="#1ABCFE" />
        <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" fill="#0ACF83" />
        <path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" fill="#A259FF" />
        <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" fill="#F24E1E" />
        <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fill="#FF7262" />
        <path d="M19 38v9.5a9.5 9.5 0 1 0 9.5-9.5H19z" fill="#1ABCFE" />
      </svg>
    ),
  },
  {
    name: "Framer",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" className="h-11 w-auto md:h-14">
        <path d="M4 0h16v8h-8zm0 8h8l8 8H4zm0 8h8v8z" fill="#0055FF" />
      </svg>
    ),
  },
  {
    name: "Canva",
    svg: (
      // <svg viewBox="0 0 48 48" fill="none" className="h-14 w-auto md:h-16">
      //   <circle cx="24" cy="24" r="20" fill="#00C4CC" />
      //   <path
      //     d="M28.5 14c-3.5 0-6.5 2.5-7.5 6-.5 1.5-.5 3 0 4.5.8 2.8 3.2 4.5 6 4.5 1.5 0 3-.5 4-1.5l-1.5-1.5c-.7.6-1.6 1-2.5 1-2 0-3.5-1.3-4-3.2-.3-1-.3-2 0-3 .5-2.2 2.3-3.8 4.5-3.8 1 0 1.8.3 2.5 1l1.5-1.5c-1-.8-2.3-1.5-4-1.5z"
      //     fill="#fff"
      //   />
      // </svg>
      <img className="max-w-16 rounded-lg" src={canvaLogo} alt="Canva Logo" />
    ),
  },
  {
    name: "Adobe Photoshop",
    svg: (
      <svg viewBox="0 0 48 48" fill="none" className="h-14 w-auto md:h-16">
        <rect width="48" height="48" rx="8" fill="#001E36" />
        <text
          x="6"
          y="34"
          fill="#31A8FF"
          fontSize="22"
          fontWeight="700"
          fontFamily="system-ui, sans-serif"
        >
          Ps
        </text>
      </svg>
    ),
  },
  // {
  //   name: "ChatGPT",
  //   svg: (
  //     <svg viewBox="0 0 24 24" fill="none" className="h-11 w-auto md:h-14">
  //       <path
  //         d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.99 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.989 6.046 6.046 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.896zm16.597 3.855-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-10.113 4.79 2.012-1.163 2.007 1.159v2.326l-2.005 1.159-2.014-1.162V12.518zm1.615-4.386 2.07-1.198 4.8 2.787a.773.773 0 0 1 .384.666v5.576l-2.02 1.168V13.49a.793.793 0 0 0-.4-.682l-4.834-2.782z"
  //         fill="#10A37F"
  //       />
  //     </svg>
  //   ),
  // },
  // {
  //   name: "Gamma",
  //   svg: (
  //     <svg viewBox="0 0 48 48" fill="none" className="h-14 w-auto md:h-16">
  //       <defs>
  //         <linearGradient
  //           id="gammaGrad"
  //           x1="0"
  //           y1="0"
  //           x2="48"
  //           y2="48"
  //           gradientUnits="userSpaceOnUse"
  //         >
  //           <stop stopColor="#8B5CF6" />
  //           <stop offset="1" stopColor="#EC4899" />
  //         </linearGradient>
  //       </defs>
  //       <path
  //         d="M24 4L6 14v20l18 10 18-10V14L24 4zm0 6l12 6.67v13.33L24 36.67 12 30V16.67L24 10z"
  //         fill="url(#gammaGrad)"
  //       />
  //       <path d="M24 18l-6 3.33v6.67L24 31.33l6-3.33v-6.67L24 18z" fill="#fff" opacity="0.25" />
  //     </svg>
  //   ),
  // },
];

export function Toolkit() {
  const list = [...tools, ...tools, ...tools, ...tools];
  return (
    <section className="py-20 md:py-28 overflow-hidden">
      <div className="container-editorial mb-16 md:mb-20 flex items-end justify-between flex-wrap gap-4">
        <div>
          <p className="eyebrow">Creative Toolkit</p>
          <h2 className="serif text-4xl md:text-5xl mt-3 max-w-xl">
            Tools I reach for, every day.
          </h2>
        </div>
      </div>

      <div
        className="relative marquee-pause"
        style={{
          maskImage: "linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent)",
          WebkitMaskImage: "linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent)",
        }}
      >
        <div className="marquee-track flex w-max items-center gap-24 md:gap-36 whitespace-nowrap">
          {list.map((t, i) => (
            <div
              key={i}
              className="flex items-center justify-center opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-300 shrink-0 cursor-default"
              title={t.name}
            >
              {t.svg}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
