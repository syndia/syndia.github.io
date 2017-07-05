import React from "react";

const SocialIcon = ({
  fill = "currentColor",
  size = 24,
  viewBox = "0 0 24 24",
  children,
  ...rest
}) =>
  <svg {...rest} width={size} height={size} viewBox={viewBox} fill={fill}>
    {children}
  </svg>;

export const Facebook = props =>
  <SocialIcon {...props}>
    <g>
      <path
        fill="#3C5A99"
        d="M248.082,262.307c7.854,0,14.223-6.369,14.223-14.225V18.812 c0-7.857-6.368-14.224-14.223-14.224H18.812c-7.857,0-14.224,6.367-14.224,14.224v229.27c0,7.855,6.366,14.225,14.224,14.225 H248.082z"
      />
      <path
        fill="#FFFFFF"
        d="M182.409,262.307v-99.803h33.499l5.016-38.895h-38.515V98.777c0-11.261,3.127-18.935,19.275-18.935 l20.596-0.009V45.045c-3.562-0.474-15.788-1.533-30.012-1.533c-29.695,0-50.025,18.126-50.025,51.413v28.684h-33.585v38.895h33.585 v99.803H182.409z"
      />
    </g>
  </SocialIcon>;

export const GitHub = props =>
  <SocialIcon {...props}>
    <g>
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.11.793-.26.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.238 1.84 1.238 1.07 1.834 2.806 1.304 3.49.997.108-.776.42-1.306.763-1.605-2.665-.305-5.467-1.334-5.467-5.93 0-1.312.47-2.382 1.236-3.222-.125-.303-.536-1.524.116-3.176 0 0 1.008-.322 3.3 1.23A11.51 11.51 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.236 1.91 1.236 3.22 0 4.61-2.807 5.625-5.48 5.922.43.372.824 1.102.824 2.222v3.293c0 .32.192.694.8.576C20.567 21.796 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </g>
  </SocialIcon>;

export const GooglePlus = props =>
  <SocialIcon {...props}>
    <g>
      <path d="M19.6671,25.7867c-0.0075,1.7935,0,3.5869,0.0076,5.3803c3.0067,0.098,6.0208,0.0527,9.0275,0.098 c-1.3262,6.6689-10.3989,8.8315-15.199,4.4761C8.5674,31.9206,8.801,23.5412,13.9327,19.992 c3.5869-2.8635,8.6884-2.1552,12.2752,0.324c1.4092-1.3036,2.7278-2.6977,4.0013-4.1445 c-2.984-2.3812-6.6462-4.0767-10.5421-3.8958c-8.1307-0.2713-15.6059,6.8497-15.7415,14.9805 c-0.52,6.6462,3.8506,13.1644,10.0222,15.5155c6.1489,2.3661,14.031,0.7535,17.957-4.77c2.5922-3.4889,3.1498-7.98,2.8484-12.1999 C29.7194,25.7641,24.6933,25.7716,19.6671,25.7867z" />
      <path d="M49.0704,25.7641c-0.0151-1.4996-0.0226-3.0067-0.0301-4.5062c-1.4996,0-2.9916,0-4.4836,0 c-0.0151,1.4996-0.0301,2.9991-0.0377,4.5062c-1.5071,0.0075-3.0067,0.0151-4.5062,0.0302c0,1.4995,0,2.9915,0,4.4836 c1.4995,0.0151,3.0066,0.0302,4.5062,0.0452c0.0151,1.4996,0.0151,2.9991,0.0302,4.4987c1.4996,0,2.9916,0,4.4911,0 c0.0075-1.4996,0.015-2.9991,0.0301-4.5062c1.5071-0.0151,3.0067-0.0226,4.5062-0.0377c0-1.4921,0-2.9916,0-4.4836 C52.0771,25.7792,50.57,25.7792,49.0704,25.7641z" />
    </g>
  </SocialIcon>;

export const Instagram = props =>
  <SocialIcon {...props}>
    <g
      transform="matrix(0.01880253,0,0,-0.01877464,-8.09169,88.053468)"
      style={{ fill: "#3F729B", stroke: "none" }}
    >
      <path d="m 1288,4123 -3,-508 -48,-3 c -27,-2 -55,2 -63,9 -12,10 -14,90 -14,500 0,555 10,502 -90,471 l -55,-18 -5,-479 -5,-480 -53,-3 c -31,-2 -60,2 -68,9 -12,10 -14,82 -14,435 0,390 -1,424 -17,424 -9,0 -60,-44 -114,-98 -86,-87 -103,-111 -147,-203 -84,-172 -85,-176 -89,-571 l -5,-348 671,0 c 369,0 671,4 671,8 0,13 119,107 191,150 87,53 188,95 295,123 131,34 340,33 475,-3 160,-43 317,-124 436,-225 l 62,-53 666,0 667,0 -4,353 c -4,329 -6,357 -27,427 -42,142 -93,224 -215,346 -122,121 -203,172 -346,216 l -75,23 -1197,3 -1198,3 -2,-508 -3,-508 -48,-3 c -27,-2 -55,2 -63,9 -12,10 -14,91 -14,510 l 0,499 -75,0 -75,0 -2,-507 z m 2872,122 c 17,-9 39,-33 50,-55 18,-36 20,-59 20,-277 0,-344 11,-333 -329,-333 -258,0 -289,7 -322,72 -19,37 -20,55 -17,289 l 3,251 37,34 38,34 245,0 c 201,0 251,-3 275,-15 z" />
      <path d="m 2445,3353 c -352,-49 -638,-331 -695,-686 -17,-103 -8,-270 20,-367 39,-137 92,-223 210,-340 117,-118 193,-167 312,-205 468,-148 948,112 1069,580 27,104 29,300 5,395 -44,171 -98,264 -231,395 -129,129 -240,187 -413,221 -69,13 -207,17 -277,7 z m 220,-248 c 78,-16 234,-90 280,-133 81,-75 147,-183 181,-298 25,-82 22,-218 -5,-304 -76,-241 -306,-413 -551,-413 -90,0 -159,18 -260,66 -195,92 -323,297 -323,517 -1,269 194,506 464,564 84,19 129,19 214,1 z" />
      <path d="m 502,2153 3,-1008 23,-75 C 572,927 623,846 744,724 868,601 951,550 1096,508 l 79,-23 1385,0 1385,0 79,23 c 159,46 270,115 389,242 83,88 151,206 189,330 l 23,75 3,1003 3,1002 -616,0 c -536,0 -615,-2 -615,-15 0,-8 16,-40 36,-70 189,-297 208,-678 50,-994 -162,-322 -460,-529 -823,-571 -292,-34 -630,92 -840,314 -84,88 -131,158 -193,289 -73,151 -94,249 -94,427 0,117 4,162 22,234 26,105 74,219 125,299 20,32 37,64 37,72 0,13 -78,15 -610,15 l -611,0 3,-1007 z" />
    </g>
  </SocialIcon>;

export const LinkedIn = props =>
  <SocialIcon {...props}>
    <g>
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </g>
  </SocialIcon>;

export const Twitter = props =>
  <SocialIcon {...props}>
    <g>
      <path d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724 9.864 9.864 0 0 1-3.127 1.195 4.916 4.916 0 0 0-3.594-1.555c-3.18 0-5.515 2.966-4.797 6.045A13.978 13.978 0 0 1 1.67 3.15a4.93 4.93 0 0 0 1.524 6.573 4.903 4.903 0 0 1-2.23-.616c-.053 2.28 1.582 4.415 3.95 4.89a4.935 4.935 0 0 1-2.224.084 4.928 4.928 0 0 0 4.6 3.42A9.9 9.9 0 0 1 0 19.54a13.94 13.94 0 0 0 7.548 2.212c9.142 0 14.307-7.72 13.995-14.646A10.025 10.025 0 0 0 24 4.556z" />
    </g>
  </SocialIcon>;
