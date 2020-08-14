const FontFaceObserver = require("fontfaceobserver");

const Fonts = () => {
  const fonts = [
    {
      name: "poppins",
      link: "https://fonts.googleapis.com/css?family=Poppins:300,500,700",
    },
    {
      name: "domine",
      link: "https://fonts.googleapis.com/css?family=Domine:400",
    },
  ];

  fonts.map((font) => {
    const link = document.createElement("link");
    link.href = font.link;
    link.rel = "stylesheet";
    document.head.appendChild(link);
  });

  const domine = new FontFaceObserver("Domine");
  const poppins = new FontFaceObserver("Poppins");

  Promise.all([domine.load(), poppins.load()]).then(() => {
    console.log("Fonts loaded");
  });
};

export default Fonts;
