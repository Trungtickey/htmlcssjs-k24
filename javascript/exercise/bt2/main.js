let contactList = [
    {
        name: "Cô A",
        phoneNumber: "0329577177",
        email: "abc@gmail.com"
    },
    {
        name: "Cô B",
        phoneNumber: "0329577177",
        email: "abc@gmail.com"
    }
]



const tbodyEL = document.querySelector('tbody')
const formEditEL = document.querySelector("#form_edit")

function renderData() {
    let dataHTML = ``;

    for (let i = 0; i < contactList.length; i++) {
        dataHTML += `
        <tr>
            <th scope="row">${i + 1}</th>
            <td>${contactList[i].name}</td>
            <td>${contactList[i].phoneNumber}</td>
            <td>${contactList[i].email}</td>
            <td>
                <button onclick="loadEditData(${i})" data-bs-toggle="modal" data-bs-target="#exampleModal">Sửa</button>
                <button onclick="deleteContact(${i})">Xoá</button>
            </td>
          </tr>
        `
    }
    tbodyEL.innerHTML = dataHTML
}


function addContact(event) {
    event.preventDefault()

    let phoneNumber = event.target.phoneNumber.value
    if(!isNumberPhone(phoneNumber).isValid) {
        alert(isNumberPhone(phoneNumber).message)
        return
    }


    contactList.push({
        name: event.target.name.value,
        phoneNumber,
        email: event.target.email.value
    })

    renderData()
}

renderData()


function isNumberPhone(str) {
    // str = "0329577177"

    if (str.length != 10) {
        return {
            isValid: false,
            message: 'Số điện thoại phải có 10 ký tự'
        }
    }

    if (str[0] != 0) {
        return {
            isValid: false,
            message: 'Số điện thoại phải bắt đầu là 0'
        }
    }

    for(let i = 0; i < str.length; i++) {
        if(isNaN(+str[i])) {
            return {
                isValid: false,
                message: 'Số điện thoại phải là số'
            }
        }
    }


    return {
        isValid: true
    }
}


function loadEditData(index) {
    formEditEL.index.value = index
    formEditEL.name.value = contactList[index].name
    formEditEL.phoneNumber.value = contactList[index].phoneNumber
    formEditEL.email.value = contactList[index].email
}

function updateContact(event) {
    event.preventDefault()

    let index = event.target.index.value
    let name = event.target.name.value
    let phoneNumber = event.target.phoneNumber.value
    let email = event.target.email.value

    if(!isNumberPhone(phoneNumber).isValid) {
        alert(isNumberPhone(phoneNumber).message)
        return
    }

    let data = {
        name,
        phoneNumber,
        email
    }
     
    console.log('index', index)
 
    contactList[index] = data

    renderData()
    event.target.querySelector("button").click()
}

function deleteContact(index) {
   if (window.confirm("Bạn có chắc chắn muốn xóa không?")) {
        contactList.splice(index, 1)
        renderData()
        alert("Xoá thành công")
    }
}
