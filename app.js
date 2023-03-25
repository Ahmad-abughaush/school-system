const input = document.getElementById("input")
input.addEventListener("submit", (event) => {
    event.preventDefault();

    let fullname = event.target.fullname.value
    let phonenumber = event.target.phonenumber.value
    let grade = event.target.grade.value
    let date = event.target.date.value
    let gender = event.target.gender.value


    let table = document.getElementById("tab0")
    let tr1 = document.createElement("tr")


    let td1 = document.createElement("td")
    td1.textContent = fullname
    let td2 = document.createElement("td")
    td2.textContent = phonenumber
    let td3 = document.createElement("td")
    td3.textContent = grade
    let td4 = document.createElement("td")
    td4.textContent = date
    let td5 = document.createElement("td")
    td5.textContent = gender

    td1.classList.add("th0");
    td2.classList.add("th0");
    td3.classList.add("th0");
    td4.classList.add("th0");
    td5.classList.add("th0");

    tr1.appendChild(td1)
    tr1.appendChild(td2)
    tr1.appendChild(td3)
    tr1.appendChild(td4)
    tr1.appendChild(td5)
    table.appendChild(tr1)

    input.reset();

}
)