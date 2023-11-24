document.addEventListener('DOMContentLoaded', function(event) {
    const formulario = document.querySelector(".js-form");

    formulario.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const name = document.getElementById("name").value;
        const birthDate = document.getElementById("birth-date").value;

        const person = { name, birthDate };
        savePersonLocally(person);

        formulario.reset();
        displaySavedPeopleInConsole();
    });

    function savePersonLocally(person) {
        let people = JSON.parse(localStorage.getItem('people')) || [];
        people.push(person);
        localStorage.setItem('people', JSON.stringify(people));
    }

    function displaySavedPeopleInConsole() {
        let people = JSON.parse(localStorage.getItem('people')) || [];
        const tableBody = document.querySelector('.js-table-body');
        tableBody.innerHTML = '';

        people.forEach((person, index) => {
            const row = tableBody.insertRow();
            const nameCell = row.insertCell(0);
            const birthDateCell = row.insertCell(1);
            const actionsCell = row.insertCell(2);

            nameCell.textContent = person.name;
            birthDateCell.textContent = person.birthDate;

            const editButton = document.createElement('button');
            editButton.textContent = 'Editar';
            editButton.addEventListener('click', () => handleEdit(index));
            actionsCell.appendChild(editButton);

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Remover';
            deleteButton.addEventListener('click', () => handleDelete(index));
            actionsCell.appendChild(deleteButton);
        });
    }

    function handleEdit(index) {
    }

    function handleDelete(index) {
        let people = JSON.parse(localStorage.getItem('people')) || [];
        people.splice(index, 1); // Remove a pessoa da lista
        localStorage.setItem('people', JSON.stringify(people));
        displaySavedPeopleInConsole();
    }

    displaySavedPeopleInConsole();
});