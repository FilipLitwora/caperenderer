//const scale = 30;
//const width = scale * 17,
//height = scale * 27;
const width = 330,
  height = 165;

const capeReader = new FileReader();

capeReader.addEventListener("load", () => {
  const img = new Image();
  img.crossOrigin = "anonymous";
  img.onload = function () {
    img.width = 704;
    img.height = 544;
    renderImage(img);
  };

  img.src = capeReader.result;
});

document.getElementById("cape_url_upload").addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (file !== undefined) {
    capeReader.readAsDataURL(file);
  }
});

const renderImage = async (cape) => {
  const skinViewer = new skinview3d.FXAASkinViewer({
    width: 200,
    height: 300,
    alpha: false,
    renderPaused: true,
  });

  skinViewer.loadSkin(
    "https://minotar.net/download/95e1ffd31e3249109138f5045d890e25"
  );
  skinViewer.loadCape(cape);
  //console.log("AAA");
  console.log(skinViewer.camera);

  skinViewer.renderer.setClearColor(0x5a76f3);

  skinViewer.camera.rotation.x = -3.0983238048068436;
  skinViewer.camera.rotation.y = 0.49464758739837095;
  skinViewer.camera.rotation.z = 3.1210420655832496;

  skinViewer.camera.position.x = -50.48329058300756;
  skinViewer.camera.position.y = 15.715764459421738;
  skinViewer.camera.position.z = -52.75873790718582;
  //skinViewer.camera.zoom = 1000;

  skinViewer.render();
  const image = skinViewer.canvas.toDataURL();

  const imgElement = document.createElement("img");
  imgElement.src = image;
  imgElement.width = 330;
  imgElement.height = 165;
  document.getElementById("renderHolder").appendChild(imgElement);
  console.log(skinViewer);
  skinViewer.dispose();
};
//renderImage("/img/blue.png");
