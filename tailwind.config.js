module.exports = {
  content: ['./pages/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './components/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'bookmark': "url('/bookmark.png')",
        'cat': "url('/cat.png')",
        'character-sprites': "url('/character-sprites-sample.png')",
        'girl-black': "url('/girl-black.png')",
        'girl-pink': "url('/girl-pink.png')",
        'heart-icon': "url('/heart-icon.png')",
        'pencil-comment': "url('/pencil-comment.png')",
        'plane-share': "url('/plane-share.png')",
        'sprite-purple': "url('/sprite-purple')",
        'sprite-yellow': "url('/sprite-yellow')",
      })
    },
    backgroundColor: theme => ({
      ...theme('colors'),
    }),
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
    },
    height: {
      '50px': '50px',
      'social-media-button-height': '18px',
      'custom-div-height': '500px',
    },
    spacing: {
      'social-media-button-container-margin': '10px',
    },
    width: {
      '50px': '50px',
      'social-media-button-width': '18px',
      'custom-div-width': '100%',
    },
  },  
  plugins: [],
}
