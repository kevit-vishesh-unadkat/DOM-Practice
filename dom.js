// ============================================================
// QUESTION 1
// Change Text Using getElementById()
// ============================================================

const q1Title = document.getElementById("q1-title");
const q1Btn = document.getElementById("q1-btn");

q1Btn.addEventListener("click", function () {

    q1Title.textContent = "DOM Manipulation";

});


// ============================================================
// QUESTION 2
// Change All Paragraphs
// ============================================================

const q2Btn = document.getElementById("q2-btn");
const q2Paragraphs = document.querySelectorAll(".q2-text");

q2Btn.addEventListener("click", function () {

    q2Paragraphs.forEach(function (paragraph) {

        paragraph.style.color = "blue";

    });

});


// ============================================================
// QUESTION 3
// Hide Paragraph
// ============================================================

const q3Text = document.getElementById("q3-text");
const q3Btn = document.getElementById("q3-btn");

q3Btn.addEventListener("click", function () {

    q3Text.style.display = "none";

});


// ============================================================
// QUESTION 4
// Show / Hide Paragraph
// ============================================================

const q4Text = document.getElementById("q4-text");
const q4Hide = document.getElementById("q4-hide");
const q4Show = document.getElementById("q4-show");

q4Hide.addEventListener("click", function () {

    q4Text.style.display = "none";

});

q4Show.addEventListener("click", function () {

    q4Text.style.display = "block";

});


// ============================================================
// QUESTION 5
// Change Image Using setAttribute()
// ============================================================

const q5Image = document.getElementById("q5-image");
const q5Btn = document.getElementById("q5-btn");

q5Btn.addEventListener("click", function () {

    q5Image.setAttribute(
        "src",
        "https://via.placeholder.com/200x100?text=New+Image"
    );

});


// ============================================================
// QUESTION 6
// Dark Mode Using classList.toggle()
// ============================================================

const q6Btn = document.getElementById("q6-btn");

q6Btn.addEventListener("click", function () {

    document.body.classList.toggle("dark");

});


// ============================================================
// QUESTION 7
// Mouse Enter / Leave
// ============================================================

const q7Box = document.getElementById("q7-box");

q7Box.addEventListener("mouseenter", function () {

    q7Box.style.backgroundColor = "blue";
    q7Box.style.color = "white";

});

q7Box.addEventListener("mouseleave", function () {

    q7Box.style.backgroundColor = "lightgray";
    q7Box.style.color = "black";

});


// ============================================================
// QUESTION 8
// Increase Font Size
// ============================================================

const q8Text = document.getElementById("q8-text");
const q8Btn = document.getElementById("q8-btn");

let q8FontSize = 16;

q8Btn.addEventListener("click", function () {

    q8FontSize += 2;

    q8Text.style.fontSize = q8FontSize + "px";

});


// ============================================================
// QUESTION 9
// Show / Hide Div
// ============================================================

const q9Box = document.getElementById("q9-box");
const q9Show = document.getElementById("q9-show");
const q9Hide = document.getElementById("q9-hide");

q9Show.addEventListener("click", function () {

    q9Box.style.display = "flex";

});

q9Hide.addEventListener("click", function () {

    q9Box.style.display = "none";

});


// ============================================================
// QUESTION 10
// Toggle Active Class
// ============================================================

const q10Box = document.getElementById("q10-box");
const q10Btn = document.getElementById("q10-btn");

q10Btn.addEventListener("click", function () {

    q10Box.classList.toggle("active");

});


// ============================================================
// QUESTION 11
// Create List Dynamically
// ============================================================

const q11Input = document.getElementById("q11-input");
const q11Btn = document.getElementById("q11-btn");
const q11List = document.getElementById("q11-list");

q11Btn.addEventListener("click", function () {

    const value = q11Input.value.trim();

    if (value === "") {
        alert("Please enter a student name.");
        return;
    }

    const li = document.createElement("li");

    li.textContent = value;

    q11List.append(li);

    q11Input.value = "";

});


// ============================================================
// QUESTION 12
// Dynamic List With Delete
// ============================================================

const q12Input = document.getElementById("q12-input");
const q12Btn = document.getElementById("q12-btn");
const q12List = document.getElementById("q12-list");

q12Btn.addEventListener("click", function () {

    const value = q12Input.value.trim();

    if (value === "") {
        return;
    }

    const li = document.createElement("li");

    const text = document.createElement("span");

    text.textContent = value;

    const deleteBtn = document.createElement("button");

    deleteBtn.textContent = "Delete";

    deleteBtn.classList.add("delete");

    deleteBtn.addEventListener("click", function () {

        li.remove();

    });

    li.append(text, deleteBtn);

    q12List.append(li);

    q12Input.value = "";

});


// ============================================================
// QUESTION 13
// Dynamic List With Edit / Delete
// ============================================================

const q13Input = document.getElementById("q13-input");
const q13Btn = document.getElementById("q13-btn");
const q13List = document.getElementById("q13-list");

q13Btn.addEventListener("click", function () {

    const value = q13Input.value.trim();

    if (value === "") {
        return;
    }

    const li = document.createElement("li");

    const text = document.createElement("span");

    text.textContent = value;

    const editBtn = document.createElement("button");

    editBtn.textContent = "Edit";

    const deleteBtn = document.createElement("button");

    deleteBtn.textContent = "Delete";

    editBtn.addEventListener("click", function () {

        const newValue = prompt(
            "Enter new value:",
            text.textContent
        );

        if (newValue !== null && newValue.trim() !== "") {

            text.textContent = newValue.trim();

        }

    });

    deleteBtn.addEventListener("click", function () {

        li.remove();

    });

    li.append(text, editBtn, deleteBtn);

    q13List.append(li);

    q13Input.value = "";

});


// ============================================================
// QUESTION 14
// Create Student Cards
// ============================================================

const q14Name = document.getElementById("q14-name");
const q14Course = document.getElementById("q14-course");
const q14Btn = document.getElementById("q14-btn");
const q14Container = document.getElementById("q14-container");

q14Btn.addEventListener("click", function () {

    const name = q14Name.value.trim();
    const course = q14Course.value.trim();

    if (name === "" || course === "") {
        alert("Fill all fields.");
        return;
    }

    const card = document.createElement("div");

    card.classList.add("card");

    const heading = document.createElement("h3");

    heading.textContent = name;

    const paragraph = document.createElement("p");

    paragraph.textContent = "Course: " + course;

    const deleteBtn = document.createElement("button");

    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", function () {

        card.remove();

    });

    card.append(
        heading,
        paragraph,
        deleteBtn
    );

    q14Container.append(card);

    q14Name.value = "";
    q14Course.value = "";

});


// ============================================================
// QUESTION 15
// Product Cart Counter
// ============================================================

const q15Btn = document.getElementById("q15-btn");
const q15Count = document.getElementById("q15-count");

let q15CartCount = 0;

q15Btn.addEventListener("click", function () {

    q15CartCount++;

    q15Count.textContent = q15CartCount;

});


// ============================================================
// QUESTION 16
// Mouse Coordinates
// ============================================================

const q16Area = document.getElementById("q16-area");
const q16X = document.getElementById("q16-x");
const q16Y = document.getElementById("q16-y");

q16Area.addEventListener("mousemove", function (event) {

    q16X.textContent = event.clientX;
    q16Y.textContent = event.clientY;

});


// ============================================================
// QUESTION 17
// Display Pressed Key
// ============================================================

const q17Input = document.getElementById("q17-input");
const q17Result = document.getElementById("q17-result");

q17Input.addEventListener("keydown", function (event) {

    q17Result.textContent =
        "Key: " + event.key;

});


// ============================================================
// QUESTION 18
// Counter
// ============================================================

const q18Minus = document.getElementById("q18-minus");
const q18Plus = document.getElementById("q18-plus");
const q18Count = document.getElementById("q18-count");

let q18Value = 0;

q18Plus.addEventListener("click", function () {

    q18Value++;

    q18Count.textContent = q18Value;

});

q18Minus.addEventListener("click", function () {

    q18Value--;

    q18Count.textContent = q18Value;

});


// ============================================================
// QUESTION 19
// Character Counter
// ============================================================

const q19Message = document.getElementById("q19-message");
const q19Count = document.getElementById("q19-count");

q19Message.addEventListener("input", function () {

    q19Count.textContent =
        q19Message.value.length;

});


// ============================================================
// QUESTION 20
// Press Enter To Add Item
// ============================================================

const q20Input = document.getElementById("q20-input");
const q20List = document.getElementById("q20-list");

q20Input.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {

        const value = q20Input.value.trim();

        if (value === "") {
            return;
        }

        const li = document.createElement("li");

        li.textContent = value;

        q20List.append(li);

        q20Input.value = "";

    }

});


// ============================================================
// QUESTION 21
// Registration Form Validation
// ============================================================

const q21Form = document.getElementById("q21-form");
const q21Name = document.getElementById("q21-name");
const q21Email = document.getElementById("q21-email");
const q21Password = document.getElementById("q21-password");
const q21Message = document.getElementById("q21-message");

q21Form.addEventListener("submit", function (event) {

    event.preventDefault();

    if (q21Name.value.trim() === "") {

        q21Message.textContent =
            "Name is required";

        return;
    }

    if (q21Email.value.trim() === "") {

        q21Message.textContent =
            "Email is required";

        return;
    }

    if (q21Password.value.trim() === "") {

        q21Message.textContent =
            "Password is required";

        return;
    }

    q21Message.textContent =
        "Form submitted successfully";

    q21Message.className = "success";

});


// ============================================================
// QUESTION 22
// Email Validation
// ============================================================

const q22Email = document.getElementById("q22-email");
const q22Btn = document.getElementById("q22-btn");
const q22Result = document.getElementById("q22-result");

q22Btn.addEventListener("click", function () {

    const email = q22Email.value.trim();

    if (email.includes("@")) {

        q22Result.textContent =
            "Email format is valid";

        q22Result.className = "success";

    } else {

        q22Result.textContent =
            "Invalid email";

        q22Result.className = "error";

    }

});


// ============================================================
// QUESTION 23
// Password Validation
// ============================================================

const q23Password = document.getElementById("q23-password");
const q23Btn = document.getElementById("q23-btn");
const q23Result = document.getElementById("q23-result");

q23Btn.addEventListener("click", function () {

    const password = q23Password.value;

    if (password.length >= 8) {

        q23Result.textContent =
            "Password is valid";

        q23Result.className = "success";

    } else {

        q23Result.textContent =
            "Password must contain at least 8 characters";

        q23Result.className = "error";

    }

});


// ============================================================
// QUESTION 24
// Individual Field Errors
// ============================================================

const q24Form = document.getElementById("q24-form");

const q24Name = document.getElementById("q24-name");
const q24Email = document.getElementById("q24-email");

const q24NameError =
    document.getElementById("q24-name-error");

const q24EmailError =
    document.getElementById("q24-email-error");

q24Form.addEventListener("submit", function (event) {

    event.preventDefault();

    q24NameError.textContent = "";
    q24EmailError.textContent = "";

    let valid = true;

    if (q24Name.value.trim() === "") {

        q24NameError.textContent =
            "Name is required";

        valid = false;

    }

    if (q24Email.value.trim() === "") {

        q24EmailError.textContent =
            "Email is required";

        valid = false;

    }

    if (valid) {

        alert("Form submitted successfully");

    }

});


// ============================================================
// QUESTION 25
// Focus / Blur
// ============================================================

const q25Input = document.getElementById("q25-input");

q25Input.addEventListener("focus", function () {

    q25Input.style.border =
        "2px solid blue";

});

q25Input.addEventListener("blur", function () {

    q25Input.style.border =
        "2px solid gray";

});


// ============================================================
// QUESTION 26
// Todo App
// ============================================================

const q26Input = document.getElementById("q26-input");
const q26Btn = document.getElementById("q26-btn");
const q26List = document.getElementById("q26-list");

function q26AddTask() {

    const task = q26Input.value.trim();

    if (task === "") {
        alert("Enter a task.");
        return;
    }

    const li = document.createElement("li");

    const text = document.createElement("span");

    text.textContent = task;

    const deleteBtn = document.createElement("button");

    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", function () {

        li.remove();

    });

    li.append(text, deleteBtn);

    q26List.append(li);

    q26Input.value = "";

}

q26Btn.addEventListener("click", q26AddTask);

q26Input.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {

        q26AddTask();

    }

});


// ============================================================
// QUESTION 27
// Student Manager
// ============================================================

const q27Name = document.getElementById("q27-name");
const q27Marks = document.getElementById("q27-marks");
const q27Btn = document.getElementById("q27-btn");
const q27Container =
    document.getElementById("q27-container");

q27Btn.addEventListener("click", function () {

    const name = q27Name.value.trim();
    const marks = Number(q27Marks.value);

    if (name === "" || q27Marks.value === "") {

        alert("Fill all fields.");

        return;
    }

    const card = document.createElement("div");

    card.classList.add("card");

    if (marks >= 40) {

        card.classList.add("student-pass");

    } else {

        card.classList.add("student-fail");

    }

    const heading = document.createElement("h3");

    heading.textContent = name;

    const result = document.createElement("p");

    result.textContent =
        "Marks: " + marks;

    const status = document.createElement("p");

    status.textContent =
        marks >= 40 ? "PASS" : "FAIL";

    const deleteBtn =
        document.createElement("button");

    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", function () {

        card.remove();

    });

    card.append(
        heading,
        result,
        status,
        deleteBtn
    );

    q27Container.append(card);

    q27Name.value = "";
    q27Marks.value = "";

});


// ============================================================
// QUESTION 28
// Product Cart
// ============================================================

const q28Add = document.getElementById("q28-add");
const q28Count = document.getElementById("q28-count");
const q28Total = document.getElementById("q28-total");
const q28List = document.getElementById("q28-list");

let q28CountValue = 0;
let q28TotalValue = 0;

q28Add.addEventListener("click", function () {

    const price = 50000;

    q28CountValue++;
    q28TotalValue += price;

    q28Count.textContent = q28CountValue;
    q28Total.textContent = q28TotalValue;

    const li = document.createElement("li");

    li.textContent =
        "Laptop - ₹50000";

    const deleteBtn =
        document.createElement("button");

    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", function () {

        li.remove();

        q28CountValue--;
        q28TotalValue -= price;

        q28Count.textContent =
            q28CountValue;

        q28Total.textContent =
            q28TotalValue;

    });

    li.append(deleteBtn);

    q28List.append(li);

});


// ============================================================
// QUESTION 29
// Live Search
// ============================================================

const q29Search =
    document.getElementById("q29-search");

const q29Items =
    document.querySelectorAll("#q29-list li");

q29Search.addEventListener("input", function () {

    const searchValue =
        q29Search.value.toLowerCase();

    q29Items.forEach(function (item) {

        const text =
            item.textContent.toLowerCase();

        if (text.includes(searchValue)) {

            item.style.display = "list-item";

        } else {

            item.style.display = "none";

        }

    });

});


// ============================================================
// QUESTION 30
// Dark Mode
// ============================================================

const q30Btn =
    document.getElementById("q30-btn");

q30Btn.addEventListener("click", function () {

    document.body.classList.toggle("dark");

});


// ============================================================
// QUESTION 31
// Event Object
// ============================================================

const q31Btn =
    document.getElementById("q31-btn");

const q31Result =
    document.getElementById("q31-result");

q31Btn.addEventListener("click", function (event) {

    console.log(event);

    q31Result.textContent =
        "Event type: " + event.type;

});


// ============================================================
// QUESTION 32
// event.target
// ============================================================

const q32Btn =
    document.getElementById("q32-btn");

const q32Result =
    document.getElementById("q32-result");

q32Btn.addEventListener("click", function (event) {

    q32Result.textContent =
        "Clicked element: " +
        event.target.tagName;

});


// ============================================================
// QUESTION 33
// Event Delegation
// ============================================================

const q33List =
    document.getElementById("q33-list");

q33List.addEventListener("click", function (event) {

    if (event.target.tagName === "LI") {

        event.target.remove();

    }

});


// ============================================================
// QUESTION 34
// Event Bubbling
// ============================================================

const q34Parent =
    document.getElementById("q34-parent");

const q34Child =
    document.getElementById("q34-child");

const q34Result =
    document.getElementById("q34-result");

q34Parent.addEventListener("click", function () {

    q34Result.textContent =
        "Parent event triggered";

});

q34Child.addEventListener("click", function () {

    q34Result.textContent =
        "Child event triggered, then Parent event";

});


// ============================================================
// QUESTION 35
// stopPropagation()
// ============================================================

const q35Parent =
    document.getElementById("q35-parent");

const q35Child =
    document.getElementById("q35-child");

const q35Result =
    document.getElementById("q35-result");

q35Parent.addEventListener("click", function () {

    q35Result.textContent =
        "Parent event triggered";

});

q35Child.addEventListener("click", function (event) {

    event.stopPropagation();

    q35Result.textContent =
        "Only Child event triggered";

});


// ============================================================
// QUESTION 36
// DOMContentLoaded
// ============================================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        console.log(
            "DOM has been completely loaded."
        );

        const q36Result =
            document.getElementById("q36-result");

        q36Result.textContent =
            "DOMContentLoaded event fired.";

    }
);


// ============================================================
// QUESTION 37
// Window Resize
// ============================================================

const q37Width =
    document.getElementById("q37-width");

const q37Height =
    document.getElementById("q37-height");

function q37UpdateSize() {

    q37Width.textContent =
        window.innerWidth;

    q37Height.textContent =
        window.innerHeight;

}

window.addEventListener(
    "resize",
    q37UpdateSize
);

q37UpdateSize();


// ============================================================
// QUESTION 38
// Scroll Event
// ============================================================

const q38Scroll =
    document.getElementById("q38-scroll");

window.addEventListener("scroll", function () {

    q38Scroll.textContent =
        Math.round(window.scrollY);

});


// ============================================================
// QUESTION 39
// DOM Traversal
// ============================================================

const q39Parent =
    document.getElementById("q39-parent");

const q39Btn =
    document.getElementById("q39-btn");

const q39Result =
    document.getElementById("q39-result");

q39Btn.addEventListener("click", function () {

    const first =
        q39Parent.firstElementChild;

    const last =
        q39Parent.lastElementChild;

    const children =
        q39Parent.children;

    q39Result.textContent =
        "First: " +
        first.textContent +
        " | Last: " +
        last.textContent +
        " | Children: " +
        children.length;

});


// ============================================================
// QUESTION 40
// Parent Element
// ============================================================

const q40Child =
    document.getElementById("q40-child");

const q40Btn =
    document.getElementById("q40-btn");

const q40Result =
    document.getElementById("q40-result");

q40Btn.addEventListener("click", function () {

    q40Result.textContent =
        "Parent tag: " +
        q40Child.parentElement.tagName;

});


// ============================================================
// QUESTION 41
// Sibling Traversal
// ============================================================

const q41Second =
    document.getElementById("q41-second");

const q41Btn =
    document.getElementById("q41-btn");

const q41Result =
    document.getElementById("q41-result");

q41Btn.addEventListener("click", function () {

    const previous =
        q41Second.previousElementSibling;

    const next =
        q41Second.nextElementSibling;

    q41Result.textContent =
        "Previous: " +
        previous.textContent +
        " | Next: " +
        next.textContent;

});


// ============================================================
// QUESTION 42
// Dynamic Card
// ============================================================

const q42Name =
    document.getElementById("q42-name");

const q42Course =
    document.getElementById("q42-course");

const q42Btn =
    document.getElementById("q42-btn");

const q42Container =
    document.getElementById("q42-container");

q42Btn.addEventListener("click", function () {

    const name =
        q42Name.value.trim();

    const course =
        q42Course.value.trim();

    if (name === "" || course === "") {

        alert("Fill all fields.");

        return;

    }

    const card =
        document.createElement("div");

    card.classList.add("card");

    card.innerHTML = `
        <h3>${name}</h3>
        <p>Course: ${course}</p>
    `;

    const deleteBtn =
        document.createElement("button");

    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener(
        "click",
        function () {

            card.remove();

        }
    );

    card.append(deleteBtn);

    q42Container.append(card);

    q42Name.value = "";
    q42Course.value = "";

});


// ============================================================
// QUESTION 43
// Show / Hide Password
// ============================================================

const q43Password =
    document.getElementById("q43-password");

const q43Btn =
    document.getElementById("q43-btn");

q43Btn.addEventListener("click", function () {

    if (q43Password.type === "password") {

        q43Password.type = "text";

        q43Btn.textContent = "Hide";

    } else {

        q43Password.type = "password";

        q43Btn.textContent = "Show";

    }

});


// ============================================================
// QUESTION 44
// Live Input Event
// ============================================================

const q44Input =
    document.getElementById("q44-input");

const q44Result =
    document.getElementById("q44-result");

q44Input.addEventListener("input", function () {

    q44Result.textContent =
        q44Input.value;

});


// ============================================================
// QUESTION 45
// Attribute Manipulation
// ============================================================

const q45Link =
    document.getElementById("q45-link");

const q45Btn =
    document.getElementById("q45-btn");

q45Btn.addEventListener("click", function () {

    q45Link.setAttribute(
        "href",
        "https://developer.mozilla.org/"
    );

    q45Link.setAttribute(
        "target",
        "_blank"
    );

    q45Link.textContent =
        "MDN Documentation";

});


// ============================================================
// QUESTION 46
// Remove Element
// ============================================================

const q46Box =
    document.getElementById("q46-box");

const q46Btn =
    document.getElementById("q46-btn");

q46Btn.addEventListener("click", function () {

    q46Box.remove();

});


// ============================================================
// QUESTION 47
// COMPLETE SHOPPING LIST
// ============================================================

const q47Input =
    document.getElementById("q47-input");

const q47Btn =
    document.getElementById("q47-btn");

const q47List =
    document.getElementById("q47-list");


function q47AddItem() {

    const value =
        q47Input.value.trim();

    if (value === "") {

        alert("Please enter an item.");

        return;

    }

    const li =
        document.createElement("li");

    const text =
        document.createElement("span");

    text.textContent = value;

    const deleteBtn =
        document.createElement("button");

    deleteBtn.textContent = "Delete";

    deleteBtn.classList.add("delete");

    deleteBtn.addEventListener(
        "click",
        function () {

            li.remove();

        }
    );

    li.append(
        text,
        deleteBtn
    );

    q47List.append(li);

    q47Input.value = "";

    q47Input.focus();

}


q47Btn.addEventListener(
    "click",
    q47AddItem
);


q47Input.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Enter") {

            q47AddItem();

        }

    }
);