const rtg = 'TushV4DbSp3IWEiOMrlULn9nffv9-azaAU4G9d4SkzQ'

const getPhoto = async () => {
    const value = document.getElementById('searchInput').value
    const response = await fetch(`https://api.unsplash.com/search/photos?query=${value}&client_id=${rtg}`)
    const data = await response.json()
    photos1 = data.results
    renderPhotos()
}

const renderPhotos = () => {
  document.body.querySelectorAll('img').forEach(img => img.remove())
  photos1.forEach(el => {
  const honor = document.createElement('img')
  honor.src = el.urls.small
  document.body.appendChild(honor)
}) 
}
