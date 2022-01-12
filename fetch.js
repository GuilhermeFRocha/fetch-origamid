                    // Metodo JSON

// const doc = fetch ('https://viacep.com.br/ws/01001000/json/')

// doc.then(resolucao => {
//   return resolucao.json();

// }).then((body) =>{
//   const conteudo = document.querySelector('.titulo');
//   conteudo.innerText = body.bairro
// })

// __________________________________________________________________

                      // Metodo Blob (imagens)

// const imagem = fetch('./naruto.png')

// imagem.then(resolucao =>{
//   return resolucao.blob();
// }).then(body => {
//   const blobUrl = URL.createObjectURL(body)
//   const imagemDom = document.querySelector('img')

//   imagemDom.src = blobUrl
// })

                      // Metodo Clone

// const cep = fetch('https://viacep.com.br/ws/01001000/json/')

// cep.then (resolucao =>{
//   const resolucaos = resolucao.clone()

//     resolucao.text().then((text) => {
//     console.log(text);
//   }) 
//    resolucaos.json().then((json) =>{
//     console.log(json);
//   })

//   console.log();
// })

// .then (body => {
//   console.log(body);
// })

// const inputCep = document.querySelector('#cep')

// const btnCep = document.getElementById('btncep')
// const resultadoCep = document.querySelector('.resultadoCep')

// // btnCep.addEventListener('click', buscaCep)

// // function buscaCep(event) {
// //   event.preventDefault()
// //   console.log(event);
// // }


// btnCep.addEventListener('click', (event) => {
//   event.preventDefault()
//   const cep = inputCep.value
//   buscaCep(cep)
// })

// function buscaCep(cep) {
//   fetch (`https://viacep.com.br/ws/${cep}/json/`)
//   .then(resolucao => {
//     resolucao.text().then((json) => {
//       resultadoCep.innerText = json
//     })
//   })
// }

// const btcDisplay = document.querySelector('.btc')

// function fetchBtc() {
//   fetch('https://blockchain.info/ticker').then(response => {
//     response.json().then((btcjson) =>{
//       btcDisplay.innerText = ('R$ ' + btcjson.BRL.buy).replace('.', ',')
      
//     })
//   })
// }

// // setInterval(fetchBtc, 1000 * 30);


// fetchBtc()

// const btn = document.querySelector('.proxima')
// const input = document.querySelector('#input')

// btn.addEventListener('click', puxarPiada)


// function puxarPiada() {
//   fetch('https://api.chucknorris.io/jokes/random')
//   .then(response => {
//     response.json().then((piada) => {
//       input.innerText = piada.value
//     })
//   })
// }

                      // API GITHUB

// function dadosapi () {
//   fetch('https://api.github.com/users/GuilhermeFRocha').then(response =>{
//     response.json().then((result) =>{
//       input.innerText = result['bio'];

//       repo.innerText = result['public_repos'];
//     })
//   })
// }

// dadosapi()

// const imagem = fetch('https://api.github.com/users/GuilhermeFRocha')

// imagem.then(resolucao =>{
//     return resolucao.json();
//   }).then(body => {
//     const blobUrl = body['avatar_url']
//     const imagemDom = document.querySelector('#imagem')
//     imagemDom.src = blobUrl
// })

                    // Metodo POST

// const url = 'https://jsonplaceholder.typicode.com/posts'
// const options= {
//   method: 'POST',
//   body:  '{"title": "JavaScript"}',
//   headers: {
//     "Content-Type": "application/json; charset=utf-8"
//   }
// }

// fetch(url,options)
// .then(response =>{
//       response.json().then((result) =>{
//         console.log(result);
//     })
//        })
     

                  // Metodo PUT

// const url = 'https://jsonplaceholder.typicode.com/posts'
// const options= {
//   method: 'PUT',
//   body:  '{"title": "JavaScript"}',
//   headers: {
//     "Content-Type": "application/json; charset=utf-8"
//   }
// }

// fetch(url,options)
// .then(response =>{
//       response.json().then((result) =>{
//         console.log(result);
//     })
//        })
     

// const nomeGit = document.querySelector('#git')
// const btnCep = document.getElementById('btncep')
// const resultadoGit = document.querySelector('.resultadoGit')
                  
// btnCep.addEventListener('click', (event) => {
//   event.preventDefault()
//   const git = nomeGit.value
//   buscagit(git)
// })

// function buscagit(git) {
//   fetch (`https://api.github.com/users/${git}`)
//   .then(resolucao => {
//     return  resolucao.json().then((json) => {
//       resultadoGit.innerText = json['name']
//       const imagemDom = document.querySelector('#imagem')
//       imagemDom.src = json['avatar_url']    
//     })
//   })
// }