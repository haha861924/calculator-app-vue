module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.{html}', './src/**/*.{vue,js,ts,html}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        theme1: 'hsl(222, 26%, 31%)',
        theme2: 'hsl(0, 0%, 90%)',
        theme3: 'hsl(268, 75%, 9%)',
        screen1: '#181F33',
        screen2: '#EEEEEE',
        screen3: '#1E0936',
        text2: '#36362C',
        text3: '#FFE53D',
        keypad1: 'hsl(223, 31%, 20%)',
        keypad2: 'hsl(0, 5%, 81%)',
        key1: '#EAE3DC',
        key2: '#E5E4E1',
        key3: '#331C4D',
        blute: '#647198',
        green: '#378187',
        purple: '#56077C',
        red: '#D03F2F',
        orange: '#C85402',
        'light-blue': '#00DED0',
        'click-purple': '#6C34AC',
        'click-purplest': '#8631AF',
        'click-blue': '#A2B2E1',
        'click-green': '#62B5BC',
        'equal-red': '#F96B5B',
        'equal-orange': '#FF8A38',
        'equal-blue': '#93FFF8',
      },
      boxShadow: {
        shaddow1: 'inset 0px -4px 0px #B3A497',
        shaddow2: 'inset 0px -4px 0px #A79E91',
        shaddow3: 'inset 0px -4px 0px #881C9E',
        'shaddow-blute': 'inset 0px -4px 0px #414E73',
        'shaddow-green': 'inset 0px -4px 0px #1B6066',
        'shaddow-purple': 'inset 0px -4px 0px #BE15F4',
        'shaddow-red': 'inset 0px -4px 0px #93261A',
        'shaddow-orange': 'inset 0px -4px 0px #873901',
        'shaddow-light-blue': 'inset 0px -4px 0px #6CF9F1'
      }
    },
  },
  plugins: [],
}