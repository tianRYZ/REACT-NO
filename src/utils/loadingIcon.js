export const loadingImageAsync = (url) => {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.src = url;
    image.onload = () => {
      // resolve(image);
      resolve(url)
    };

    image.onerror = (error) => {
      reject(new Error(`Could not load image at ${url}. Error: ${error.message}`));
    };

    image.src = url;
  });
};
