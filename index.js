document.getElementById("image-container").classList.add("hidden");
const store = [];
const imageInput = document.getElementById('image-input');
      const uploadButton = document.getElementById('upload-button');
      const uploadedImage = document.getElementById('uploaded-image');

      uploadButton.addEventListener('click', () => {
        const file = imageInput.files[0];
        if (file) {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = (event) => {
            uploadedImage.style.display = 'block';
            uploadedImage.src = event.target.result;
          };
        }
      });

function addinput() {
  const name = document.getElementById("name");
  const lastname = document.getElementById("lastname");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const err = document.getElementById("error");


  const value1 = name.value;
  const value2 = lastname.value;
  const value3 = email.value.toLowerCase();
  const value4 = password.value;

  const hasNumber = /\d/;
  const hasUpperCase = /[A-Z]/;
  const passwordLength = password.value.length >= 8;
  let errorMessage = "";

  if (!value1) {
    errorMessage += "Please enter name. " ;
  }
  if (!value2) {
    errorMessage += "Please enter last name. ";
  }
  if (!value3) {
    errorMessage += "Please enter email. ";
  }
  if (!passwordLength) {
    errorMessage += "Password must be at least 8 characters. ";
  }
  if (!hasNumber.test(password.value)) {
    errorMessage += "Password must contain at least one number. ";
  }
  if (!hasUpperCase.test(password.value)) {
    errorMessage +=
      "Password must start with an uppercase letter. ";
  }
  if (errorMessage === "") {
    store.push(value1, value2, value3, value4)
    name.value = "";
    lastname.value = "";
    email.value = "";
    password.value = "";
    err.textContent = "";

    const storeemail=store[2];
    const storepass=store[3];

    document.querySelectorAll("#form input").forEach(input => input.classList.add("hidden"));
    document.querySelector("#form button").classList.add("hidden");
    document.getElementById("heading").innerHTML="login form"
   

    const input1=document.createElement("input");
    const input2=document.createElement("input");
    const button=document.createElement("button");
    const para=document.createElement("p")

    button.textContent="submit"
    input1.setAttribute("type","email")
    input2.setAttribute("type","password")
    input1.setAttribute("placeholder","enter email")
    input2.setAttribute("placeholder","enter password")
    input1.classList.add("box","email")
    input2.classList.add("box")
    button.classList.add("btn")
    button.onclick=  function () {

  if (input1.value === store[2] && input2.value=== store[3]) {
    document.getElementById("container").classList.add("hidden")
    document.getElementById("image-container").classList.add("active")
    const message=document.createElement("h1");
    message.classList.add("message");
    message.textContent="succesfully login " + store[0]
    document.body.appendChild(message);
   } else {
    para.innerHTML="invalid email or password"
    input1.value=''
    input2.value=''
 }
 };

   
    document.getElementById("form").appendChild(input1);
    document.getElementById("form").appendChild(input2)
    document.getElementById("form").appendChild(button)
    document.getElementById("form").appendChild(para)

  } else {
    err.textContent = "Please correct the following errors: " + errorMessage;
  }
  
  console.log(store)


}
