let products = [
    {name:"Dell Inspiron 14", brand:"Dell", price:68999, rating:4.4},
    {name:"Google Pixel 9", brand:"Google", price:69999, rating:4.5},
    {name:"Lenovo ThinkPad E14", brand:"Lenovo", price:72999, rating:4.6},
    {name:"HP Pavilion 15", brand:"HP", price:64999, rating:4.3},
    {name:"MacBook Air M3", brand:"Apple", price:114999, rating:4.8}
];

products.sort((a,b) => a.price - b.price);

function findProducts() {
    let target = Number(document.getElementById("price").value);

    let low = 0, high = products.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (products[mid].price < target)
            low = mid + 1;
        else
            high = mid - 1;
    }

    let start = Math.max(0, low - 2);
    let end = Math.min(products.length, start + 3);

    let result = "";

    for (let i = start; i < end; i++) {
        result += `
        <div class="card">
            <h3>${products[i].name}</h3>
            <p>Brand: ${products[i].brand}</p>
            <p>Price: ₹${products[i].price}</p>
            <p>Rating: ⭐ ${products[i].rating}</p>
            <button>View Product</button>
        </div>`;
    }

    document.getElementById("products").innerHTML = result;
}
