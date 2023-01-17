module.exports = {
    style: {
      sass: {
        loaderOptions: {
          additionalData: `
            @import "src/global-styles/init.scss";
          `,
        },
      },
    },
  };