const searchForm = document.getElementById('search-form')
const inputSearch = document.getElementById('input-search')
const container = document.getElementById('container')


searchForm.addEventListener('submit', submitSearch)

function submitSearch(e) {
  // Get the value input in the search input
  e.preventDefault()
  const query = inputSearch.value
  fetchData(query)

}

function fetchData(search='cats') {
    const api = 'lUFW6vuMSPcq2q6XouStZnaVmJX3oDqH'
    const path = `https://api.giphy.com/v1/gifs/search?api_key=${api}&q=${search}`
    fetch(path)
        .then(function(res) {
            return res.json()
        })
        .then(function(json) {
            handleData(json)
        })
        .catch(function(err) { console.log(err.message) })

}

function handleData(json) {
  // get the data array
  const data = json.data
  // Define a string to hold some html
  let htmlStr = ''
  // Loop over the array
  for (let i = 0; i < data.length; i += 1) {

    // get the url to an image - we'll use the fixed_width_small
    const image = data[i].images.fixed_height_small
    // Get the src, width, and height
    const src = image.url
    const width = image.width
    const height = image.height
    // add img tags to the htmlStr
    htmlStr += `<img src="${src}" width="${width}" height="${height}">`

    }

// Set the innHTML of #container
container.innerHTML = htmlStr

}