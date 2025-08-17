// import init, { grayscale } from "../pkg/rust_project.js";

// let wasmInitialized = false;

// async function start() {
//     if (!wasmInitialized) {
//         await init();
//         wasmInitialized = true;
//         // console.log("WASM initialized");
//     }

//     const input = document.getElementById("upload");

//     // Remove any previous listener to avoid duplicates
//     const newInput = input.cloneNode(true);
//     input.parentNode.replaceChild(newInput, input);

//     newInput.addEventListener("change", () => {
//         if (newInput.files.length === 0) return;

//         const fileReader = new FileReader();
//         fileReader.onloadend = () => {
//             const base64 = fileReader.result.replace(/^data:image\/(png|jpeg|jpg);base64,/, '');
//             console.log("Calling grayscale with image data...");
//             grayscale(base64);
//         };
//         fileReader.readAsDataURL(newInput.files[0]);
//     });
// }

// start();

// import init, { grayscale } from "../pkg/rust_project.js";

// let wasmInitialized = false;

// async function start() {
//     if (!wasmInitialized) {
//         await init();
//         wasmInitialized = true;
//         // console.log("WASM initialized");
//     }

//     const input = document.getElementById("upload");

//     // Remove any previous listener to avoid duplicates
//     const newInput = input.cloneNode(true);
//     input.parentNode.replaceChild(newInput, input);

//     newInput.addEventListener("change", () => {
//         if (newInput.files.length === 0) return;

//         const file = newInput.files[0];
//         const fileReader = new FileReader();

//         fileReader.onload = () => {
//             const img = new Image();
//             img.src = fileReader.result;

//             img.onload = () => {
                 
//                 const base64 = fileReader.result.replace(/^data:image\/(png|jpeg|jpg);base64,/, '');
//                 // console.log("Calling grayscale with image data...");
//                let img_data_url = grayscale(base64)
//                document.getElementById('new-img').setAttribute(
//                 'src', img_data_url
//                ) // Rust function call
//                 console.log("Image loaded");
//             };
//         };

//         fileReader.readAsDataURL(file);
//     });
// }

// start();

async function init() {
  let rustApp = null

  try {
    rustApp = await import('../pkg')
  } catch(err) {
    console.error(err)
    return;
  }

  console.log(rustApp)

  const input = document.getElementById('upload')
  const fileReader = new FileReader()

  fileReader.onloadend = () => {
    let base64 = fileReader.result.replace(
      /^data:image\/(png|jpeg|jpg);base64,/, ''
    )
    let img_data_url = rustApp.grayscale(base64)
    document.getElementById('new-img').setAttribute(
      'src', img_data_url
    )
  }

  input.addEventListener('change', () => {
    fileReader.readAsDataURL(input.files[0])
  })
}

init()
