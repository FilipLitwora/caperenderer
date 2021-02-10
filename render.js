const scale = 10;
const width = scale * 17,
  height = scale * 27;

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
    width,
    height,
    alpha: true,
    renderPaused: true,
  });
  skinViewer.loadCape(cape);

  skinViewer.renderer.setClearColor(0x000000, 0);
  skinViewer.camera.position.x = 9.6;
  skinViewer.camera.position.y = -10.8;
  skinViewer.camera.position.z = -25.7;

  skinViewer.camera.rotation.x = 3.0270453826492867;
  skinViewer.camera.rotation.y = 0.41644133158780494;
  skinViewer.camera.rotation.z = -3.095087139141465;

  skinViewer.render();
  const image = skinViewer.canvas.toDataURL();

  const imgElement = document.createElement("img");
  imgElement.src = image;
  imgElement.width = skinViewer.width;
  imgElement.height = skinViewer.height;
  document.getElementById("renderHolder").appendChild(imgElement);

  skinViewer.dispose();
};
renderImage("img/legacy_cape.png");
