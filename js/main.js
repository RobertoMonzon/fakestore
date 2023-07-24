let data ={"id":10,"title":"SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s","price":109,"description":"Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)","category":"electronics","image":"https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg","rating":{"rate":2.9,"count":470}};


function getData(){
    
    let promesa = fetch("https://fakestoreapi.com/products", {
            method: "GET"
    });
    
    
    promesa.then( (response) => {
        response.json()
        .then(
                (data) => {
                    createCards(data);
                } )
    
    
        .catch(
                    (error) => {console.error("Problema en el json")}
        );
    })
    
    .catch( (error) => {
        console.error(error, "Ocurrió un error en la solicitud");
    });
    
    
    
        // Se ejecuta la función dentro de 2 segundos
        // setTimeout (()=>{console.log(data);} , 2000);
        // return data;
    
    
    
    } //get Data
    
    // console.log(getData());
    
    getData();
    
    
    // function createCards(data){
    
    //     data.forEach(producto => {
    //         console.log(producto.id, producto.title);
            
    //     });
    // }
    
    let mainProds = document.getElementById("mainProds");
    function createCards(prods){
    
            prods.forEach(prod => {
                mainProds.insertAdjacentHTML("beforeend",
                
                `  <div class="card mb-3" style="max-width: 540px;">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src="${prod.image}" class="img-fluid rounded-start" alt="${prod.description}" >
                  </div>
                  
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">${prod.title}</h5>
                      <p class="card-text"><strong>${prod.category}</strong></p>
                      

  <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
    Description
  </button>
</p>
<div style="min-height: 120px;">
  <div class="collapse collapse-horizontal" id="collapseWidthExample">
    <div class="card card-body" style="width: 300px;">
    ${prod.description.slice(0,500)}
    </div>
  </div>
</div>

                    </div>
                  </div>


                </div>
                </div>
              </div>  `
                
                );
                
            });
        }


