const container = document.querySelector(".container")
const coffees = [
  { name: "Perspiciatis", image: "https://picsum.photos/id/236/200/300" },
  { name: "Voluptatem", image: "https://picsum.photos/id/237/200/300" },
  { name: "Explicabo", image: "https://picsum.photos/id/235/200/300" },
  { name: "Rchitecto", image: "https://picsum.photos/id/234/200/300" },
  { name: " Beatae", image: "https://picsum.photos/id/233/200/300" },
  { name: " Vitae", image: "https://picsum.photos/id/232/200/300" },
  { name: "Inventore", image: "https://picsum.photos/id/231/200/300" },
  { name: "Veritatis", image: "https://picsum.photos/id/220/200/300" },
  { name: "Accusantium", image: "https://picsum.photos/id/221/200/300" },
]

const showCoffees = () => {
    let output = ""
    
    coffees.forEach(
      ({ name, image }) =>
        (output += `
                <div class="card">
                  <img class="card--avatar" src=${image} />
                  <h1 class="card--title">${name}</h1>
                  <a class="card--link" href="#">Taste</a>
                </div>
                `)
    )
    container.innerHTML = output
  }
  
  document.addEventListener("DOMContentLoaded", showCoffees)


  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("/serviceWorker.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err))
    })
  }