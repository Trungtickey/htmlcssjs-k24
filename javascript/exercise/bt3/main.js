let productList = [
    {
        name: "Product 1",
        price: 100,
        description: "Description for Product 1",
    },
    {
        name: "Product 2",
        price: 100,
        description: "Description for Product 2",
    },
    {
        name: "Product 3",
        price: 100,
        description: "Description for Product 3",
    },    {
        name: "Product 4",
        price: 100,
        description: "Description for Product 4",
    }
]
let productEditIndex = null;

let tbodyEL = document.querySelector("tbody");
let btnAddSaveEL =  document.querySelector("#btn_add_save")

function renderData(danhSach = productList) {
    /* Duyệt productList => tạo ra chuỗi nhiều TR */

    let htmlText = ``;

    for(let i = 0; i < danhSach.length; i++) {
        htmlText += `
          <tr>
            <th scope="row">${i + 1}</th>
            <td>${danhSach[i].name}</td>
            <td>${danhSach[i].price}</td>
            <td>${danhSach[i].description}</td>
            <td>
                <button onclick="loadEdit(${i})">Edit</button>
                <button>Xoa</button>
            </td>
          </tr>
        `
    }

    tbodyEL.innerHTML = htmlText;


    /* Cách 2 */

    // tbodyEL.innerHTML = productList.map((product, index) => {
    //     return  `
    //     <tr>
    //       <th scope="row">${index + 1}</th>
    //       <td>${product.name}</td>
    //       <td>${product.price}</td>
    //       <td>${product.description}</td>
    //       <td>
    //           <button>Edit</button>
    //           <button>Xoa</button>
    //       </td>
    //     </tr>
    //   `
    // }).join(" ")
}


function addProduct(event) {
    event.preventDefault(); // Ngăn chặn reload trang

    let newProduct = {
        name: event.target.name.value,
        price: +event.target.price.value,
        description: event.target.description.value
    }

    console.log("productEditIndex", productEditIndex)

    if (productEditIndex == null) {
        // thêm
        productList.push(newProduct)
    }else {
        // sửa
        productList[productEditIndex] = newProduct
        productEditIndex = null;
        btnAddSaveEL.innerText = "thêm"
    }

    renderData() 
    event.target.reset() // reset các ô input trong form
}




function loadEdit(index) {
    let productEdit = productList[index]
    let formEL = document.querySelector("form")


    
    console.log("productEdit", productEdit)

    console.log("formEL", formEL)

    formEL.name.value = productEdit.name;
    formEL.price.value = productEdit.price;
    formEL.description.value = productEdit.description;

    productEditIndex = index

    btnAddSaveEL.innerText = "lưu"
}


function searchProduct() {
    let contentSearch = document.querySelector('#ip_search').value.toLowerCase()

    /* Filter cách 1  */
    // let arrayResult = productList.filter((product) => {
    //     return product.name.includes(contentSearch.toLowerCase())
    // })

    // renderData(arrayResult)


    /* Filter cách 2  */
    // renderData(productList.filter(product => product.name.includes(contentSearch.toLowerCase())))

    /* không filter */

    let arrayResult = []
    for(let i = 0; i < productList.length; i++) {
        if(productList[i].name.toLowerCase().includes(contentSearch.toLowerCase())) {
            arrayResult.push(productList[i])
        }
    }

    renderData(arrayResult)

}

renderData()

// let numberTest  = 100

// function testNumber(numberA = numberTest) {
//     console.log("numberA", numberA)
// }

// testNumber() // => chưa truyền numberA // => 100

// testNumber(5) // numberA 5

// testNumber(numberTest) // numberA 100