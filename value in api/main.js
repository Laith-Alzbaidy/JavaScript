fetch('https://pokeapi.co/api/v2/pokemon/bulbasaur')
  .then((res) => res.json())
  .then((req) => {
    let img = req.results[0]
    console.log(img)
//     // for(let i = 0 ;i<req.results.length;i++){
//     //   console.log(req.results[i]) ;
//     //     $("button").click(function(){
//     //         if($("input")[0].value == req.results[i].name){
//     //           console.log("--------------------------");
//     //           console.log(req.results[i].name);
//     //             $("img").attr("src",req.results[i].url);
//     //         }
//     //     })

//     //   }
  })
