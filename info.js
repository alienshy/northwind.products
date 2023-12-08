let id = new URLSearchParams(window.location.search).get("id");

fetch(`https://northwind.vercel.app/api/products/${id}`)
    .then(response => response.json())
    .then(data => {
        document.querySelector("div").innerHTML += `
            <footer>
                <p>Name:${data.name}</p>
                <p>Price:${data.unitPrice}</p>
                <p>Stock:${data.unitsInStock}</p>
            </footer>
            <a style="color:green; text-decoration:none; box-shadow:20px;"href="./table.html">EVVELKI SEYIFEYE QAYIT</a>
        `;
    }
    )
    .catch(error => {
        console.error('ERROR:', error);
    });
