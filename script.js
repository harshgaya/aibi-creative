"use strict";

const buttonSubmit = document.querySelector(".submit-button");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeModal = document.querySelector(".close-modal");
const menuOpen = document.querySelector(".hemburger-menu");
const menuClose = document.querySelector(".close-button");
const backdropMenus = document.querySelector(".backdrop-for-menu ");
const mobileMenus = document.querySelector(".mobile-menus");

buttonSubmit.addEventListener("click", async function (e) {
  e.preventDefault();

  const name = document.querySelector(".name-input").value.trim();
  const mobile = document.querySelector(".mobile-input").value.trim();
  const message = document.querySelector(".message-input").value.trim();

  // Ensure all fields are filled out
  if (name.length === 0 || mobile.length === 0 || message.length === 0) {
    alert("Please fill out all fields.");
    return;
  }

  // Validate the mobile number
  if (mobile.length !== 10 || isNaN(mobile)) {
    alert("Please enter a valid 10-digit mobile number.");
    return;
  }

  // Data to be sent to the server
  const data = {
    name: name,
    mobileNumber: mobile,
    message: message,
  };

  try {
    // Send the data via a POST request
    const response = await fetch(
      "https://mycompanyapi-evfzc4hegyezfcdp.southindia-01.azurewebsites.net/api/admin/addUserMessage",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (response.ok) {
      // Clear the form fields if the submission is successful
      document.querySelector(".name-input").value = "";
      document.querySelector(".mobile-input").value = "";
      document.querySelector(".message-input").value = "";

      // Show the modal
      overlay.classList.remove("hidden");
      modal.classList.remove("hidden");
    } else {
      alert("Failed to submit the form. contact 9304136129 for info");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("An error occurred. Please try again later.");
  }
});
closeModal.addEventListener("click", function () {
  if (!modal.classList.contains("hidden")) {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
  }
});
overlay.addEventListener("click", function () {
  if (!overlay.classList.contains("hidden")) {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
  }
});
menuOpen.addEventListener("click", function () {
  if (backdropMenus.classList.contains("close-mobile-menu")) {
    backdropMenus.classList.remove("close-mobile-menu");
  }
});
menuClose.addEventListener("click", function () {
  if (!backdropMenus.classList.contains("close-mobile-menu")) {
    backdropMenus.classList.add("close-mobile-menu");
  }
});
backdropMenus.addEventListener("click", function () {
  if (!backdropMenus.classList.contains("close-mobile-menu")) {
    backdropMenus.classList.add("close-mobile-menu");
  }
});

// document.addEventListener("DOMContentLoaded", () => {
//   const form = document.getElementById("contactForm");
//   const modal = document.querySelector(".modal");
//   const overlay = document.querySelector(".overlay");
//   const closeModalButton = document.querySelector(".close-modal");

//   form.addEventListener("submit", async (event) => {
//     console.log("button submit", fired);
//     event.preventDefault();

//     // Get the form data
//     const name = document.getElementById("name").value.trim();
//     const mobile = document.getElementById("mobile").value.trim();
//     const message = document.getElementById("message").value.trim();

//     // Validate mobile number length
//     if (mobile.length !== 10 || isNaN(mobile)) {
//       alert("Please enter a valid 10-digit mobile number.");
//       return;
//     }

//     // Create the data object to be sent
//     const data = {
//       name: name,
//       mobile: mobile,
//       message: message,
//     };

//     try {
//       const response = await fetch(
//         "http://0.0.0.0:9000/api/admin/addUserMessage",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(data),
//         }
//       );
//       console.log("", response);

//       if (response.ok) {
//         form.reset();

//         overlay.classList.remove("hidden");
//         modal.classList.remove("hidden");
//         console.log("");
//       } else {
//         alert("Failed to submit the form. Please try again later.");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       alert("An error occurred. Please try again later.");
//     }
//   });

//   closeModalButton.addEventListener("click", () => {
//     overlay.classList.add("hidden");
//     modal.classList.add("hidden");
//   });
// });
//cl
