let id = new URLSearchParams(window.location.search).get("id");

fetch(`https://northwind.vercel.app/api/products/${id}`)
    .then(response => response.json())
    .then(data => {
        document.querySelector("div").innerHTML += `
        <input type="${data.id}" value="${data.id}">
        <input type="${data.name}" value="${data.name}">
        <input type="${data.unitPrice}" value="${data.unitPrice}">
        <input type="${data.unitsInStock}" value="${data.unitsInStock}">
        `;
    }
    )
    .catch(error => {
        console.error('ERROR:', error);
    });
