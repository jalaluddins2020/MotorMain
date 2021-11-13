// console.log(sessionStorage.getItem("shop1"))

// console.log(sessionStorage.length)
console.log(sessionStorage)
var shop = "shop";
var num = 0;
var infoMain = document.getElementById("info-main")
var output = `<table class="w3-table">
        <tbody class="w3-bordered">
        <tr>
            <th scope="row" class="w3-text-red"><b>Shop</b></th>
            <th>Address</th>
    </tr>`
for (let obj in sessionStorage) {
    if (obj.slice(0, 4) == shop) {
        let shop = sessionStorage[obj].split("+")
        var name = shop[0].slice(0, -1)
        var address = shop[1].slice(1, -1)
        var lat = shop[2].slice(1).split(",")[0]
        var long = shop[2].slice(1).split(",")[1].slice(1);
        output += `<tr>
        <th scope="row" class="w3-text-red"><b>`+ name +`</b></th>
        <th>`+ address +`</th>
        </tr>`;
    }
}

output += `</tbody>
            </table>`

infoMain.innerHTML = output