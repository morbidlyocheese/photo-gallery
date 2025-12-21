/**
 * Customize captions and names for specific images
 * Key: filename (with or without extension), Value: { caption, name }
 */
const customizations = {
  // Example:
  '1': { caption: 'cityscape', name: 'city' },
  // '2': { caption: 'Forest Path', name: 'Forest' },
}

function loadPhotos() {
  const modules = import.meta.glob('../assets/photos/*.{jpg,jpeg,png,gif,webp}', { eager: true })

  const photos = []
  let id = 1

  // loop through each imported image
  Object.entries(modules).forEach(([path, mod]) => {
    const imageUrl = mod.default || mod
    const filename = path.split('/').pop()
    const filenameStem = filename.replace(/\.[^/.]+$/, '')

    // only add if we have a valid image URL
    if (imageUrl) {
      // check if there's a custom override for this image
      const override = customizations[filenameStem] || customizations[filename]

      photos.push({
        id: id++,
        caption: override?.caption || filenameStem,
        description: '',
        name: override?.name || filenameStem,
        image: imageUrl,
      })
    }
  })

  return photos
}

// load all photos from assets folder
const photos = loadPhotos()

export default photos
