
let arr = [];
if (localStorage.arr != null) {
    arr = JSON.parse(localStorage.arr);
    render();
}

const input = document.getElementById("input")
input.addEventListener("submit", (event) => {
    event.preventDefault();

    let fullname = event.target.fullname.value;
    let phonenumber = event.target.phonenumber.value;
    let date = event.target.date.value;
    let gender = event.target.gender.value;
    let major = event.target.major.value;
    let img = event.target.userimg.value;


    let student = new Person(fullname, phonenumber, date, gender, major, img)
    arr.push(student)
    localStorage.setItem("arr", JSON.stringify(arr));

    render()

})

function Person(fullname, phonenumber, date, gender, major, img) {
    this.fullname = fullname
    this.phonenumber = phonenumber
    this.date = date
    this.gender = gender
    this.major = major
    this.img = img
}


render()
function render() {
    for (let i = 0; i < arr.length; i++) {
        let stdcards = document.getElementById("studentcards")
        let card1 = document.createElement("div")
        let img1 = document.createElement("img")
        img1.src = arr[i].img
        let ul1 = document.createElement("ul")
        let li1 = document.createElement("li")
        li1.textcontent = ` name:  ${arr[i].fullname}`
        let li2 = document.createElement("li");
        li2.textcontent = "phone-number:" + "" + arr[i].phonenumber;
        let li3 = document.createElement("li");
        li3.textcontent = "date:" + "" + arr[i].date;
        let li4 = document.createElement("li");
        li4.textcontent = "gender:" + "" + arr[i].gender;
        let li5 = document.createElement("li");
        li5.textcontent = "major:" + "" + arr[i].major;

        stdcards.appendChild(card1);
        card1.appendChild(img1);
        card1.appendChild(ul1);
        ul1.appendChild(li1);
        ul1.appendChild(li2);
        ul1.appendChild(li3);
        ul1.appendChild(li4);
        ul1.appendChild(li5);
        input.reset();
    }

}

