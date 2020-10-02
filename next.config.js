module.exports = {
    async redirects() {
      return [
        {
          source: '/about-us',
          destination: '/about',
          permanent: true,
        },
        {
          source: '/meet-the-team',
          destination: '/team',
          permanent: true,
        },
        {
          source: '/contact-us',
          destination: '/contact',
          permanent: true,
        },
        {
          source: '/investment-philosophy',
          destination: '/philosophy',
          permanent: true,
        },
      ]
    },
  }