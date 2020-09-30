module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    enabled: false,
  },
  theme: {
    fontFamily: {
      'sans': ['Permanent Marker'],
    },
    extend: {
      screens: {
        'portrait': {'raw': '(orientation: portrait)'},
      },
      colors:{
        'regal-grey': 'grey',
      }
    },

  },
  variants: {},
  plugins: [],
}
