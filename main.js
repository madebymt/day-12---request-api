let list= document.querySelector("ul")
let story = document.querySelector(".story")
let picture = document.querySelector(".pic")

let req = new XMLHttpRequest();
req.open("GET", "https://api.github.com/users/madebymt")
req.addEventListener("load", function(){
    let data = JSON.parse(this.responseText);
    console.log(list)
let string =  `
<li> Name : ${data.name} </li>
<li> Github URL : <a href="${data.html_url}"> Github User Name </a>
<li> E-mail : c19890611@gmail.com </li>
<li> Company: ${data.company} </li>
<li> Website : donthaveone.com</li>
`

let bio = `
  <h3> The Story </h3>
  <p>${data.bio}</p>
`

let img = `
<img src="${data.avatar_url}" alt="picture">
`

list.innerHTML = string
story.innerHTML = bio
picture.innerHTML = img



    console.log(data)
})

req.send();
