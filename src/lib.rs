// use wasm_bindgen::prelude::*;
// use web_sys::console::log_1 as log;
// use base64::decode;
// use image::ImageOutputFormat::Png;
// use image::load_from_memory;

// #[wasm_bindgen]
// pub fn grayscale(encoded_file: &str) {
//     log(&"Grayscale called".into());

//     // Base64 decode
//     let base64_to_vector = decode(encoded_file).expect("Failed to decode base64");
//     log(&"Image decoded".into());

//     // Load image
//     let img = load_from_memory(&base64_to_vector).expect("Failed to load image");
//     log(&"Image loaded".into());

//     // Write to buffer
//     let mut buffer = vec![];
//     img.write_to(&mut buffer, Png).expect("Failed to write image");
//     log(&"Ready to write".into());
// }

// use wasm_bindgen::prelude::*;
// use web_sys::console::log_1 as log;
// use base64::{encode, decode};
// use image::{load_from_memory, ImageOutputFormat};
// use std::io::Cursor;

// // optional but very helpful: show Rust panics in JS console
// #[wasm_bindgen(start)]
// pub fn start() {
//     console_error_panic_hook::set_once();
// }

// #[wasm_bindgen]
// pub fn grayscale(encoded_file: &str) -> String {
//     log(&"Grayscale called".into());

//     // 1) Base64 → bytes
//     let bytes = decode(encoded_file).expect("Failed to decode base64");
//     log(&"Image decoded".into());

//     // 2) Bytes → image
//     let img = load_from_memory(&bytes).expect("Failed to load image");
//     log(&"Image loaded".into());

//     // (optional) grayscale conversion
//     let gray = img.grayscale();

//     // 3) Image → PNG bytes (needs a writer: Cursor<Vec<u8>>)
//     let mut buf = Cursor::new(Vec::<u8>::new());
//     gray
//         .write_to(&mut buf, ImageOutputFormat::Png)
//         .expect("Failed to write PNG");

//     // If you need the bytes later:
//     // let out_bytes: Vec<u8> = buf.into_inner();

//     log(&"Ready to write".into());


//     let encoded_img = encode(&buffer);
//     let data_url = format!(
//         "data: image/png;base64,{}",
//         encoded_img
//     );
//     data_url
// }

use wasm_bindgen::prelude::*;
use web_sys::console::log_1 as log;
use base64::{ encode, decode };
use image::load_from_memory;
use image::ImageOutputFormat::Png;

#[wasm_bindgen]
pub fn grayscale(encoded_file: &str) -> String {
  log(&"Grayscale called".into());

  let base64_to_vector = decode(encoded_file).unwrap();
  log(&"Image decoded".into());

  let mut img = load_from_memory(&base64_to_vector).unwrap();
  log(&"Image loaded".into());

  img = img.grayscale();
  log(&"Grayscale effect applied".into());

  let mut buffer = vec![];
  img.write_to(&mut buffer, Png).unwrap();
  log(&"New image written".into());

  let encoded_img = encode(&buffer);
  let data_url = format!(
    "data:image/png;base64,{}",
    encoded_img
  );

  data_url
}



