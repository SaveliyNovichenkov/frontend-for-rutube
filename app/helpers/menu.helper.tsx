import {IMenuItem} from "../layout/sidebar/menu/Menu.interface";
import MainIcon from './icons/home.svg'
import TrendsIcon from './icons/fire.svg'
import MyChannelIcon from './icons/user.svg'
import MySubscribesIcon from './icons/subscribe.svg'
import Image from 'next/image'



export const menu: IMenuItem[] = [
    { title: 'Главная',
        icon: <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                   width="30px" height="30px" fill="#000000" viewBox="0 0 64.000000 64.000000"
                   preserveAspectRatio="xMidYMid meet">

            <g transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
               stroke="none">
                <path d="M153 498 c-79 -79 -146 -153 -149 -165 -8 -29 12 -62 41 -69 25 -6
25 -8 25 -115 0 -99 2 -110 22 -129 19 -18 33 -20 93 -18 l70 3 5 95 5 95 55
0 55 0 5 -95 5 -95 70 -3 c60 -2 74 0 93 18 20 19 22 30 22 129 0 107 0 109
25 115 29 7 49 40 41 69 -3 12 -70 86 -149 165 -103 101 -150 142 -167 142
-17 0 -64 -41 -167 -142z"/>
            </g>
        </svg>,
      link: '/'
    },

    { title: 'Тренды',
      icon: <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                 width="30px" height="30px" fill="#000000"  viewBox="0 0 64.000000 64.000000"
                 preserveAspectRatio="xMidYMid meet">

          <g transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
             stroke="none">
              <path d="M338 599 c-54 -56 -86 -128 -94 -211 -6 -60 -8 -66 -24 -58 -10 5
-25 28 -34 50 -21 52 -42 50 -74 -8 -70 -127 -18 -288 113 -348 65 -31 126
-31 190 0 99 47 152 136 142 242 -7 69 -30 122 -101 227 -25 37 -48 83 -52
102 -3 19 -11 38 -16 41 -5 3 -28 -13 -50 -37z m32 -405 c26 -45 31 -63 26
-92 -15 -100 -139 -95 -153 6 -6 42 3 52 24 31 19 -19 43 -2 43 30 0 26 18 81
26 81 1 0 17 -25 34 -56z"/>
          </g>
      </svg>,
      link: '/trending'
    },

    { title: 'Мой канал',
      icon: <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                 width="30px" height="30px" fill="#000000" viewBox="0 0 64.000000 64.000000"
                 preserveAspectRatio="xMidYMid meet">

          <g transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
             stroke="none">
              <path d="M248 619 c-43 -22 -78 -81 -78 -130 0 -72 78 -149 150 -149 72 0 150
77 150 149 0 51 -35 108 -80 131 -49 25 -94 25 -142 -1z"/>
              <path d="M175 301 c-50 -22 -101 -79 -115 -128 -6 -21 -10 -67 -8 -103 l3 -65
265 0 265 0 3 65 c4 81 -10 130 -51 177 -51 58 -95 73 -217 73 -80 0 -114 -5
-145 -19z"/>
          </g>
      </svg>,
      link: '/my-channel'
    },

    { title: 'Подписки',
      icon: <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                 width="30px" height="30px" fill="#000000" viewBox="0 0 64.000000 64.000000"
                 preserveAspectRatio="xMidYMid meet">

          <g transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
             stroke="none">
              <path d="M125 589 c-16 -25 18 -29 201 -27 160 3 189 5 189 18 0 13 -29 15
-192 18 -132 2 -194 -1 -198 -9z"/>
              <path d="M85 509 c-16 -25 20 -29 241 -27 196 3 229 5 229 18 0 13 -34 15
-232 18 -161 2 -234 -1 -238 -9z"/>
              <path d="M60 420 c-18 -18 -20 -33 -20 -180 0 -147 2 -162 20 -180 19 -19 33
-20 260 -20 227 0 241 1 260 20 18 18 20 33 20 180 0 147 -2 162 -20 180 -19
19 -33 20 -260 20 -227 0 -241 -1 -260 -20z m270 -125 c50 -25 90 -50 90 -55
0 -13 -178 -102 -190 -95 -11 7 -14 178 -3 188 9 10 5 11 103 -38z"/>
              <path d="M260 240 l0 -50 45 22 c25 12 45 25 45 28 0 3 -20 16 -45 28 l-45 22
0 -50z"/>
          </g>
      </svg>,
      link: '/subscriptions'
    },

];