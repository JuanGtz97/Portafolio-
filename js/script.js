// Mostrar el botón cuando el usuario hace scroll hacia abajo
window.onscroll = function () {
	const btnUp = document.getElementById('btn-up');
	if (
		document.body.scrollTop > 200 ||
		document.documentElement.scrollTop > 200
	) {
		btnUp.style.display = 'block';
	} else {
		btnUp.style.display = 'none';
	}
};

document
	.getElementById('btn-up')
	.addEventListener('click', function (e) {
		e.preventDefault();
		window.scrollTo({ top: 0, behavior: 'smooth' });
	});

const personas = [
	{
		nombre: 'Juan Gutiérrez',
		matricula: 123302325,
		rutaFoto: 'assets/juan-profile.jpg',
	},
	{
		nombre: 'Fanny de Jesús',
		matricula: 117100704,
		rutaFoto: 'assets/fanny-profile.jpg',
	},
	{
		nombre: 'Leopoldo Romero',
		matricula: 224303028,
		rutaFoto:
			'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSSq7D4FMzD6So4l5nc5T6DFFdVeLzo0E9-y7nzl_ZVggmdXRIQ',
	},
	{
		nombre: 'Janette Martinez',
		matricula: 123302318,
		rutaFoto: 'assets/jannette-profile.jpg',
	},
];

function generarCards() {
	const cardContainer = document.getElementById(
		'card-container',
	);

	personas.forEach(persona => {
		const cardHTML = `
      <div class="col-lg-3 col-md-6 mb-4 card-profile">
        <div class="card text-center">
          <img src="${persona.rutaFoto}" class="card-img-top rounded-circle mx-auto mt-3" alt="${persona.nombre}" style="width: 100px;">
          <div class="card-body">
            <h5 class="card-title">${persona.nombre}</h5>
            <p class="card-text">${persona.matricula}</p>
          </div>
        </div>
      </div>
    `;
		cardContainer.innerHTML += cardHTML;
	});
}

document.addEventListener('DOMContentLoaded', generarCards);
