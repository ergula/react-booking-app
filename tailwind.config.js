module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    colors: {
      'darkBlue': '#1d3557',
      'gray-100': '#DADCDE',
      'white': '#ffffff',
      'orange': '#fd5240',
      'cyan-900': '#1D2935',
      'gray-100t': '#DADCDE24',
      'gray-700': '#606162',
      'cyan-900': '#1D2935',
      'hoverBlue': '#325b95',
      'black': '#000000'
    },
    extend: {
      backgroundImage: {
        'background': "url('/src/assets/images/background.png')",
        'background2': "url('/src/assets/images/background2.jpg')",
      },
    },
  },
  plugins: [],
}