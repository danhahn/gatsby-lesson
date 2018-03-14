import React from 'react';

const Logo = ({isSmall}) => {
  const color = isSmall ? `#bdc3c7` : `#000000`;
  const size = isSmall ? 100 : 315;
  return (
    <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width={size} height={(44 / 157) * size} viewBox="0 0 430 133" preserveAspectRatio="xMidYMid meet" className="brand__svg">
      <g transform="translate(0.000000,133.000000) scale(0.100000,-0.100000)" fill="#000" stroke="none">
        <path d="M3311 1238 c-10 -24 -127 -296 -260 -604 -132 -309 -241 -564 -241 -568 0 -3 40 -6 88 -6 l88 0 259 603 c142 331 260 605 262 610 2 4 -37 7 -87 7 l-91 0 -18 -42z" style={{fill: color}}></path>
        <path d="M322 839 l-251 -211 96 -82 c53 -44 167 -140 252 -213 l156 -132 58 57 c31 31 57 59 57 63 0 3 -80 72 -177 154 -98 81 -179 150 -180 154 -1 3 79 71 177 151 99 80 178 148 177 152 -2 7 -106 118 -111 118 -1 0 -116 -95 -254 -211z" style={{fill: color}}></path>
        <path d="M3641 996 c-29 -30 -52 -59 -50 -64 2 -6 76 -69 164 -142 88 -73 168 -140 178 -149 16 -16 8 -25 -163 -165 -99 -82 -180 -151 -180 -155 0 -4 26 -32 58 -63 l57 -56 252 213 252 213 -250 208 c-137 115 -252 210 -257 212 -4 1 -32 -22 -61 -52z" style={{fill: color}}></path>
        <path d="M1033 990 c-71 -15 -142 -51 -177 -90 -71 -79 -73 -188 -4 -266 39 -45 78 -64 207 -104 106 -32 161 -68 161 -105 0 -9 -13 -30 -29 -46 -29 -28 -32 -29 -128 -28 -88 0 -186 18 -245 43 -16 7 -18 0 -18 -77 l0 -86 58 -12 c31 -7 120 -13 197 -13 124 0 147 3 200 23 115 46 174 135 161 244 -12 102 -63 145 -243 203 -121 39 -149 54 -165 89 -15 33 10 69 58 85 43 15 160 7 242 -14 l53 -14 -3 76 -3 76 -35 8 c-57 13 -242 18 -287 8z" style={{fill: color}}></path>
        <path d="M2345 985 c-38 -7 -87 -20 -107 -28 l-38 -16 0 -70 c0 -39 1 -71 3 -71 1 0 28 9 60 20 124 44 251 46 312 6 24 -16 45 -69 45 -113 0 -22 -4 -23 -72 -23 -143 0 -276 -37 -336 -93 -92 -85 -87 -259 9 -341 92 -79 253 -72 368 15 l51 39 0 -45 0 -45 80 0 80 0 0 295 c0 322 -3 340 -58 398 -73 77 -222 104 -397 72z m273 -487 c-3 -50 -5 -53 -62 -98 -53 -41 -63 -45 -113 -45 -48 0 -58 4 -79 28 -28 33 -30 66 -8 108 22 44 64 58 172 59 l93 0 -3 -52z" style={{fill: color}}></path>
        <path d="M1405 943 c8 -21 75 -191 149 -378 l134 -340 109 -3 108 -2 147 377 147 378 -96 3 c-60 2 -99 -1 -103 -8 -4 -6 -49 -130 -101 -275 -52 -146 -96 -265 -99 -265 -3 0 -14 24 -24 53 -10 28 -54 152 -98 275 l-80 222 -104 0-104 0 15 -37z" style={{fill: color}}></path>
      </g>
    </svg>
  );
};

export default Logo;