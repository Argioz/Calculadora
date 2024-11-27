document.addEventListener('DOMContentLoaded', () => {
    const ataquePoderosoCheckbox = document.getElementById('ataque-poderoso');
    const furiaCheckbox = document.getElementById('furia');

    let ataqueTotal = 5;
    let dañoTotal = 0;

    function actualizarTotales() {
        let ataque = ataqueTotal;
        let daño = dañoTotal;

        if (ataquePoderosoCheckbox.checked) {
            ataque -= 1;
            daño += 2;
        }
        if (furiaCheckbox.checked) {
            ataque += 2;
        }

        document.getElementById('ataque-value').textContent = ataque;
        document.getElementById('daño-value').textContent = daño;
    }

    ataquePoderosoCheckbox.addEventListener('change', actualizarTotales);
    furiaCheckbox.addEventListener('change', actualizarTotales);
});
