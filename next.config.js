module.exports = {
    redirects() {
        return [
            process.env.MAINTENANCE_MODE === "1"
            ? { source: "/((?!maintenance).*)", destination: "/maintenance.html", permanent: false }
        : null,
    ].filter(Boolean);
    }
};

//module.exports = {
//    async redirects() {
//      return [
//        {
 //         source: '/about-us',
//          destination: '/about',
 //         permanent: true,
  //      },
   //     {
    //      source: '/meet-the-team',
     //     destination: '/team',
      //    permanent: true,
      //  },
      //  {
   //       source: '/contact-us',
   //       destination: '/contact',
   //       permanent: true,
   //     },
   //     {
    //      source: '/investment-philosophy',
    //      destination: '/philosophy',
    //      permanent: true,
    //    },
   //   ]
//    },
//  }
