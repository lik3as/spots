let imagesPaths = [];
let imageTexts = [];

let currentImageIndex = 0;

let aboutPictureElement = document.getElementById("about-picture");
let mainPicture = document.getElementsByClassName("picture")[0];



const changePictureOf = (page) => {
  switch (page) {
    case "blessed": {
      imagesPaths = ["/assets/images/%blessed-street", "/assets/images/%blessed-bench"];
      imageTexts = ["a rua por si só já é bem bonita, mas quando o Sol bate fica perfeito",
        "deve ser legal dar um BS crooked (acho que é esse o nome) aí."];
      break;
    }
    case "skatepark": {
      imagesPaths = ["/assets/images/%skatepark", "/assets/images/%skatepark-jpn"];
      imageTexts = ["vários manos que andam muito aparecem por aí. Acho bem divertido.",
        "a vista desse lugar é incrível."];
      break;
    }
    case "konder": {
      imagesPaths = ["/assets/images/%konder-default", "/assets/images/%konder-poetry",
      "/assets/images/%konder-mountain", "/assets/images/%konder-lovers"];
      imageTexts = ["tem uma rampa que dá pra descer legal.", "seja o poeta do seu próprio poema.",
      "imagino o clipe que dá pra fazer aí.", "jovens apaixonados."]
      break;
    }
    default: {
      throw new Error("Unknown page");
    }
  }

  currentImageIndex++;
  if (currentImageIndex >= imagesPaths.length) {
    currentImageIndex = 0;
  }
  mainPicture.src = imagesPaths[currentImageIndex];
  aboutPictureElement.innerText = imageTexts[currentImageIndex]
}
