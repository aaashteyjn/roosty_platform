export function ParticlesBackground() {
  const points = [
    ["8%", "12%"],
    ["22%", "20%"],
    ["35%", "14%"],
    ["48%", "27%"],
    ["63%", "18%"],
    ["78%", "26%"],
    ["92%", "15%"],

    ["12%", "58%"],
    ["27%", "48%"],
    ["42%", "61%"],
    ["59%", "50%"],
    ["74%", "63%"],
    ["88%", "47%"],

    ["5%", "88%"],
    ["18%", "76%"],
    ["34%", "82%"],
    ["51%", "72%"],
    ["67%", "84%"],
    ["84%", "75%"],
  ];


  const lines = [
    [0,1],
    [1,2],
    [2,3],
    [3,4],
    [4,5],
    [5,6],

    [7,8],
    [8,9],
    [9,10],
    [10,11],
    [11,12],

    [13,14],
    [14,15],
    [15,16],
    [16,17],
    [17,18],
  ];


  return (
    <svg
      className="
        absolute
        inset-0
        h-full
        w-full
        opacity-30
      "
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >

      <defs>

        <linearGradient
          id="line"
          x1="0"
          x2="1"
        >
          <stop
            offset="0%"
            stopColor="#FFFFFF"
            stopOpacity="0.35"
          />

          <stop
            offset="100%"
            stopColor="#FFFFFF"
            stopOpacity="0.05"
          />

        </linearGradient>


        <filter id="glow">

          <feGaussianBlur
            stdDeviation="3"
          />

        </filter>

      </defs>



      {/* линии */}

      <g
        className="
          animate-[float_18s_ease-in-out_infinite]
        "
      >

        {lines.map(([from,to], index) => (

          <line
            key={index}
            x1={points[from][0]}
            y1={points[from][1]}
            x2={points[to][0]}
            y2={points[to][1]}
            stroke="url(#line)"
            strokeWidth="1"
          />

        ))}


      </g>



      {/* свечение точек */}

      {points.map(([cx,cy], index) => (

        <g
          key={index}
          className="
            animate-[float_8s_ease-in-out_infinite]
          "
          style={{
            animationDelay: `${index * 0.4}s`,
          }}
        >

          <circle
            cx={cx}
            cy={cy}
            r="10"
            fill="#FFFFFF"
            opacity="0.08"
            filter="url(#glow)"
          />


          <circle
            cx={cx}
            cy={cy}
            r="2.5"
            fill="#FFFFFF"
            opacity="0.7"
          />

        </g>

      ))}


    </svg>
  );
}