let result2 = document.querySelector(".result")
let input = document.querySelector(".searchbox").addEventListener("keydown",function(event){
    if (event.keyCode === 13) {
    /// keyCode = listen what key you type, 13 means is enter keyCode
    console.log(event.target.value)
result2.textContent = "..."
let search = event.target.value
let url = "http://recipepuppyproxy.herokuapp.com/api/?i="
let result = url+search

    fetch(result)
    .then(
          function(response){
              if (response.status !==200) {
                  console.log(response.status);
                  return;
              }
          response.json()
          .then (function(data){
              console.log("Data I need", data );
          result2.textContent = " ";
          for (let i = 0 ; i < data.results.length ; i++) {



              let string = `
              <div class = "food">
              <h3>Title: ${data.results[i].title} </h3>
              <a href="${data.results[i].href}"> </a>
              <h3>Ingredients:${data.results[i].ingredients} </h3>
              <img src="${data.results[i].thumbnail}" alt="">
              </div>
              `

                result2.insertAdjacentHTML("beforeEnd",string)

          }

          })

      })
    .catch(function(err) {
        console.log("Fetch problem: - S", err);
    });

    }
})
