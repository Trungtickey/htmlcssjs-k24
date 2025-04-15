let employee = [
    {
        id: Date.now(),
        nameP : "Thanh", 
        work : "Dev"
    },
    {
        id: Date.now() + 1,
        nameP : "Thinh", 
        work : "Dev"
    },
    {
        id: Date.now() + 2,
        nameP : "Khang", 
        work : "Dev"
    },
    {
        id: Date.now() + 3,
        nameP : "Tru", 
        work : "Dev"
    },
    {
        id: Date.now() + 4,
        nameP : "Tri", 
        work : "Dev"
    },
    {
        id: Date.now() + 5,
        nameP : "Hung", 
        work : "Dev"
    },
    {
        id: Date.now() + 6,
        nameP : "Dung", 
        work : "Dev"
    },
]

function renderEmployee(page = 2) {
    const itemPage = 2
    const start = (page -1) * itemPage // 2 -> index = 2
    const end = start + itemPage
    const employeeNew = employee.slice(start,end)

    const body = document.querySelector("tbody")
    body.innerHTML = ""

    employeeNew.forEach((em, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${index+1 + start}</td>
            <td>${em.nameP}</td>
            <td>${em.work}</td>
        `
        body.appendChild(row)
    })

    renderPagination(page)
}

function renderPagination(currentPage) {
    let totalPage = Math.ceil(employee.length / 2)

    const pagination = document.getElementById("pagination");
    pagination.innerHTML = ""
    // Nut prev
    let btnPev = document.createElement("button")
    btnPev.innerText = "Previous"
    pagination.appendChild(btnPev)

    // if (currentPage === 1) {
    //     btnPev.setAttribute("disabled",true)
    // }
    btnPev.addEventListener("click", () => {
        if (currentPage > 1) { //2    
            --currentPage; //1
            if (currentPage === 1) {
                btnPev.setAttribute("disabled",true) //
                console.log("hello");
            }
            renderEmployee(currentPage)
            
        } 
    })

    //Btn 
    for(let i = 1; i<= totalPage; i++) {
        const btn = document.createElement("button")
        btn.innerText = i
        pagination.appendChild(btn)
        if(i === currentPage) {
            btn.style.backgroundColor = "blue"
        }
        btn.addEventListener("click", () => {
            if (currentPage !== i) {
                renderEmployee(i)
            } 
        })
       
    }

    // Nut Next
    const btnNext = document.createElement("button")
    btnNext.innerText = "Next"
    pagination.appendChild(btnNext)

    btnNext.addEventListener("click", () => {
        if (currentPage < totalPage) {
            currentPage++
            renderEmployee(currentPage)
        }
    })
}

renderEmployee()