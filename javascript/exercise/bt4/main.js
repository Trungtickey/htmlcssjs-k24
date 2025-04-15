let dreamList = [
    {
        target: "Không học lại",
        level: 2,
        isDone: true
    }
]

let tbodyEl = document.querySelector("tbody")

function renderData() {
    let contentHtml = ``;

    for (let i = 0; i < dreamList.length; i++) {
        contentHtml += `
            <tr>
                <th scope="row">${i + 1}</th>
                <td>${dreamList[i].target}</td>
                <td>
                    ${printStar(dreamList[i].level)}
                </td>
                <td>
                    <span onclick="changeStatus(${i})">${dreamList[i].isDone ? " hoàn thành " : "chưa"}</span>
                </td>
                <td>
                    <button onclick="deleteDream(${i})">xoá</button>
                    <button onclick="loadEdit(${i})">sửa</button>
                </td>
            </tr>
        `
    }

    tbodyEl.innerHTML = contentHtml
}

function printStar(count) {
    let resultHtml = ``;
    // <=2 -> đen
    // 3 -> green
    // 4 -> đỏ
    // 5 -> vàng

    let color = "black";

    if (count == 3) {
        color = "green"
    }
    if (count == 4) {
        color = "red"
    }
    if (count == 5) {
        color = "yellow"
    }

    for (let i = 1; i <= count; i++) {
        resultHtml += `
             <i style="color: ${color}" class="fa-solid fa-star"></i>
        `
    }
    return resultHtml
}


function addDream(e) {
    e.preventDefault();
    // e -> đang đại diện cho event sự kiện của form
    let formAdd = e.target; // lấy form

    let newDream = {
        target: formAdd.target.value,
        level: +formAdd.level.value,
        isDone: false
    }

    if (newDream.level == 0) {
        alert("vui lòng chọn mức độ")
        return
    }

    dreamList.push(newDream)
    renderData()

}

function deleteDream(index) {
    if (dreamList[index].isDone) {
        alert("mục tiêu đã hoàn thành, không cần phải từ bỏ")
        return
    }
    if (confirm("Bạn thật sự từ bỏ ước mơ sao?")) {
        dreamList.splice(index, 1)
        renderData()
    }
}


function loadEdit(index) {
    let dreamEdit = dreamList[index]
    let trList = document.querySelectorAll('tr')
    trList[index + 1].innerHTML = `
            <th scope="row">1</th>
            <input required name="target"  type="text" placeholder="mục tiêu của bạn" value="${dreamEdit.target}">
            <td>
                <select required name="level">
                    <option value="0">chọn mức độ</option>
                    <option ${dreamEdit.level == 1 ? "selected" : ""} value="1">1</option>
                    <option ${dreamEdit.level == 2 ? "selected" : ""} value="2">2</option>
                    <option ${dreamEdit.level == 3 ? "selected" : ""} value="3">3</option>
                    <option ${dreamEdit.level == 4 ? "selected" : ""} value="4">4</option>
                    <option ${dreamEdit.level == 5 ? "selected" : ""} value="5">5</option>
                </select>
            </td>
            <td>
                ${dreamEdit.isDone ? " hoàn thành " : "chưa"}
            </td>
            <td>
                <button>xoá</button>
                <button onclick="saveDream(${index})" >lưu</button>
            </td>
    
    `
}

function saveDream(index) {
    let trEL = document.querySelectorAll("tr")[index + 1]
    inputEl = trEL.querySelector("input")
    selectEl = trEL.querySelector("select")

    dreamList[index].target = inputEl.value
    dreamList[index].level = selectEl.value

    renderData()
}


function changeStatus(index) {
    dreamList[index].isDone = !dreamList[index].isDone
    renderData()
}

renderData()