addEventListener('DOMContentLoaded', () => {
    let text = document.getElementById('citations-input');
    let author = document.getElementById('auteur-input');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const quoteInput = document.getElementById('quoteInput');
        const quoteText = quoteInput.value.trim();

        if (quoteText) {
            const listItem = document.createElement('li');
            listItem.textContent = quoteText;
            quoteList.appendChild(listItem);
            quoteInput.value = '';
        }
    });
})