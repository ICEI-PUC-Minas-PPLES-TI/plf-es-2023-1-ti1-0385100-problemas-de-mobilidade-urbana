window.addEventListener("load", preencheMoto);

function preencheMoto() {
  const sidebar = document.getElementById("sidebar");
  const dialog = document.getElementById("modal");
  fetch("./assets/database.json")
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
        <h6>Vagas ${motorista.vagas_rest} de ${motorista.lot_max}</h6>
        <h6 class="text-primary">R\$${motorista.mensalidade}</h6>
        <h6 class="">${motorista.destino}</h6>
        </div>
        </div>`;
      }

      sidebar.innerHTML = textoSidebar;
      dialog.innerHTML = textoModal;
    });

    mapboxgl.accessToken = 'pk.eyJ1IjoicmFmYW10ZiIsImEiOiJjbGlidWgzbXcwYWw4M2dvNXQweXkwamFzIn0.AB9tbo0fqDY23Ob1748ThA';
            const map = new mapboxgl.Map({
                container: 'map',
                style: 'mapbox://styles/mapbox/streets-v12',
                center: [-43.936167922, -19.925902963],
                zoom: 15
            });
}
