function setPosition() {
  return {
    1: '1px 1px'
  }
}
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
      },
      backgroundPosition: setPosition()
    }
  },
  plugins: [require('windicss/plugin/line-clamp')]
}
