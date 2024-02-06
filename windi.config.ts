export default {
  extend: {
    lineClamp: {
      sm: '3',
      lg: '10'
    }
  },
  theme: {
    extend: {
      transformOrigin: {
        0: '0'
      }
    }
  },
  plugins: [require('windicss/plugin/line-clamp')]
}
