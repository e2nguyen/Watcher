module.exports = {
  purge: ['./pages/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './components/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'heart-icon': "url('/heart-icon.png')",
        'plane-share': "url('/plane-share.png')",
        'pencil-comment': "url('/pencil-comment.png')",
        'bookmark': "url('/bookmark.png')",
      })
    },
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
    },
    height: {
      'social-media-button-height': '18px',
    },
    width: {
      'social-media-button-width': '18px',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
