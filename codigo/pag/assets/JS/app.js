window.addEventListener("load", preencheMoto);

function preencheMoto() {
  const sidebar = document.getElementById("sidebar");
  const dialog = document.getElementById("modal");

  let motoristas = localStorage.getItem("motoristas");
  motoristas = JSON.parse(motoristas);

  if (motoristas) {
    textoSidebar = "";
    motoristas.forEach(element => {
      textoSidebar += `<div class="card">
      <div class="card-body">
      <h5 class="card-title">${element.nome}</h5>
      <div class="d-flex justify-content-between align-items-center">
      <h6 class="card-subtitle text-body-secondary">${element.avaliação
          } estrelas</h6>
      <div class="ratings">
      <i class="bi ${element.avaliação > 0 ? "bi-star-fill" : "bi-star"
          }"></i>
      <i class="bi ${element.avaliação > 1 ? "bi-star-fill" : "bi-star"
          }"></i>
      <i class="bi ${element.avaliação > 2 ? "bi-star-fill" : "bi-star"
          }"></i>
      <i class="bi ${element.avaliação > 3 ? "bi-star-fill" : "bi-star"
          }"></i>
      <i class="bi ${element.avaliação > 4 ? "bi-star-fill" : "bi-star"
          }"></i>
      </div>
      </div>
        <h6>Vagas ${element.capacidade}</h6>
        <h6 class="text-primary">R\$${element.preco_servico}</h6>
        <h6 class="">${element.destino}</h6>
      </div>
      </div>`;
    });
  } else {
    fetch("./assets/data/db.json")
      .then(function (response) {
        return response.json();
      })
      .then(function (db) {
        var textoSidebar = "";
        var textoModal = "";

        for (let i = 0; i < db.motoristas.length; i++) {
          const motorista = db.motoristas[i];

          textoSidebar += `<div class="card">
                            <div class="card-body">
                            <h5 class="card-title">${motorista.nome}</h5>
                            <div class="d-flex justify-content-between align-items-center">
                            <h6 class="card-subtitle text-body-secondary">${motorista.avaliação
                                } estrelas</h6>
                            <div class="ratings">
                            <i class="bi ${motorista.avaliação > 0 ? "bi-star-fill" : "bi-star"
                                }"></i>
                            <i class="bi ${motorista.avaliação > 1 ? "bi-star-fill" : "bi-star"
                                }"></i>
                            <i class="bi ${motorista.avaliação > 2 ? "bi-star-fill" : "bi-star"
                                }"></i>
                            <i class="bi ${motorista.avaliação > 3 ? "bi-star-fill" : "bi-star"
                                }"></i>
                            <i class="bi ${motorista.avaliação > 4 ? "bi-star-fill" : "bi-star"
                                }"></i>
                            </div>
                            </div>
                              <h6>Vagas ${motorista.capacidade_van}</h6>
                              <h6 class="text-primary">R\$${motorista.preco_servico}</h6>
                              <h6 class="">${motorista.destino}</h6>
                            </div>
                            </div>`;
        }

        sidebar.innerHTML = textoSidebar;
      });

  }

  mapboxgl.accessToken = 'pk.eyJ1IjoicmFmYW10ZiIsImEiOiJjbGlidWgzbXcwYWw4M2dvNXQweXkwamFzIn0.AB9tbo0fqDY23Ob1748ThA';
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v12',
    center: [-43.937, -19.9250],
    zoom: 15
  });
}
