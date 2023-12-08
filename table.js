let body = document.querySelector('table tbody');
let originalData;

fetch(`https://northwind.vercel.app/api/products`)
    .then(response => response.json())
    .then(data => {
        originalData = data;
        updateTable(data);
    })
    .catch(error => {
        console.error('ERROR:', error);
    });

function updateTable(data) {
    body.innerHTML = '';
    data.forEach(product => {
        body.innerHTML += `
            <tr>
                <td>${product.id}</td>
                <td>${product.name}</td>
                <td>${product.unitPrice}</td>
                <td>${product.unitsInStock}</td>
                <td><a href="./info.html?id=${product.id}">info</a></td>
                <td><a href="./update.html?id=${product.id}">update</a></td>
            </tr>
        `;
    });
}

function searchTable() {
    let searchTerm = document.getElementById('search').value.toLowerCase();
    let filteredData = originalData.filter(product =>
        product.name.toLowerCase().includes(searchTerm) ||
        String(product.id).includes(searchTerm) ||
        String(product.unitPrice).includes(searchTerm) ||
        String(product.unitsInStock).includes(searchTerm)
    );
    updateTable(filteredData);
}
