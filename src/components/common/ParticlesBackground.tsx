export function ParticlesBackground() {
  return (
    <svg
      className="absolute inset-0 h-full w-full opacity-40"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="line" x1="0" x2="1">
          <stop offset="0%" stopColor="#A594FF" />
          <stop offset="100%" stopColor="#7B68EE" />
        </linearGradient>
      </defs>

      <g className="animate-[pulse_12s_ease-in-out_infinite]">

        <line x1="8%" y1="12%" x2="22%" y2="20%" stroke="url(#line)" strokeWidth="1"/>
        <line x1="22%" y1="20%" x2="35%" y2="14%" stroke="url(#line)" strokeWidth="1"/>
        <line x1="35%" y1="14%" x2="48%" y2="27%" stroke="url(#line)" strokeWidth="1"/>
        <line x1="48%" y1="27%" x2="63%" y2="18%" stroke="url(#line)" strokeWidth="1"/>
        <line x1="63%" y1="18%" x2="78%" y2="26%" stroke="url(#line)" strokeWidth="1"/>
        <line x1="78%" y1="26%" x2="92%" y2="15%" stroke="url(#line)" strokeWidth="1"/>

        <line x1="12%" y1="58%" x2="27%" y2="48%" stroke="url(#line)" strokeWidth="1"/>
        <line x1="27%" y1="48%" x2="42%" y2="61%" stroke="url(#line)" strokeWidth="1"/>
        <line x1="42%" y1="61%" x2="59%" y2="50%" stroke="url(#line)" strokeWidth="1"/>
        <line x1="59%" y1="50%" x2="74%" y2="63%" stroke="url(#line)" strokeWidth="1"/>
        <line x1="74%" y1="63%" x2="88%" y2="47%" stroke="url(#line)" strokeWidth="1"/>

        <line x1="5%" y1="88%" x2="18%" y2="76%" stroke="url(#line)" strokeWidth="1"/>
        <line x1="18%" y1="76%" x2="34%" y2="82%" stroke="url(#line)" strokeWidth="1"/>
        <line x1="34%" y1="82%" x2="51%" y2="72%" stroke="url(#line)" strokeWidth="1"/>
        <line x1="51%" y1="72%" x2="67%" y2="84%" stroke="url(#line)" strokeWidth="1"/>
        <line x1="67%" y1="84%" x2="84%" y2="75%" stroke="url(#line)" strokeWidth="1"/>

      </g>

      {[
        ["8%","12%"],
        ["22%","20%"],
        ["35%","14%"],
        ["48%","27%"],
        ["63%","18%"],
        ["78%","26%"],
        ["92%","15%"],

        ["12%","58%"],
        ["27%","48%"],
        ["42%","61%"],
        ["59%","50%"],
        ["74%","63%"],
        ["88%","47%"],

        ["5%","88%"],
        ["18%","76%"],
        ["34%","82%"],
        ["51%","72%"],
        ["67%","84%"],
        ["84%","75%"],
      ].map(([cx, cy], i) => (
        <circle
          key={i}
          cx={cx}
          cy={cy}
          r="3"
          fill="#7B68EE"
          className="animate-pulse"
        />
      ))}

    </svg>
  );
}