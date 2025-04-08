document.addEventListener("DOMContentLoaded", function () {
  const checkbox = document.getElementById("terms");
  const certificateDetails = document.getElementById("certificate-details");
  const stateSection = document.getElementById("state-section");

  // Initially hide sections
  certificateDetails.style.display = "none";
  stateSection.style.display = "none";

  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      certificateDetails.style.display = "flex";
      stateSection.style.display = "block";
    } else {
      certificateDetails.style.display = "none";
      stateSection.style.display = "none";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const paymentCategory = document.getElementById("paymentCategory");
  const formContent = document.getElementById("formContent");
  const offlineMessage = document.getElementById("offlineMessage");
  const certificateCheckbox = document.getElementById(
    "certificateCheckbox"
  );
  const certificateDetails = document.getElementById("certificateDetails");
  const termsCheckbox = document.getElementById("termsCheckbox");
  const donateBtn = document.getElementById("donateBtn");

  // Payment category change event
  paymentCategory.addEventListener("change", function () {
    if (paymentCategory.value === "Offline") {
      formContents.style.display = "none";
      offlineMessage.style.display = "block";
    } else {
      formContents.style.display = "block";
      offlineMessage.style.display = "none";
    }
  });

  // Show/hide certificate details
  certificateCheckbox.addEventListener("change", function () {
    certificateDetails.style.display = certificateCheckbox.checked
      ? "block"
      : "none";
  });

  // Enable/disable donate button based on terms checkbox
  termsCheckbox.addEventListener("change", function () {
    donateBtn.disabled = !termsCheckbox.checked;
  });
});

document
  .getElementById("donationForm")
  .addEventListener("submit", function (event) {
    let termsCheckbox = document.getElementById("terms");
    let errorMessage = document.getElementById("error-message");

    if (!termsCheckbox.checked) {
      event.preventDefault();
      errorMessage.style.display = "block";
    } else {
      errorMessage.style.display = "none";
    }
  });

const categorySelect = document.getElementById("category");
const formContent = document.getElementById("formContent");

const contentMap = {
  "Visually Challenged": `<p class="text-small"> For providing smart glasses as assistive device.</p>`,
  "Hearing Challenged": `<p class="text-small">For providing cochlear implant to restore hearing.</p>`,
  "Mother & Child": `<p class="text-small">For Nutrition</p>`,
  Healthcare: `<p class="text-small">Support marginalized people in healthcare.</p>`,
};

categorySelect.addEventListener("change", function () {
  const selectedValue = this.value;
  formContent.innerHTML =
    contentMap[selectedValue] ||
    `<p class="text-small">No content available for this category.</p>`;
});

const certificateCheckbox = document.getElementById('terms');
const termsCheckbox = document.getElementById('termscheckbox');
const donateBtn = document.getElementById('donateBtn');

function updateDonateButtonState() {
  if (certificateCheckbox.checked && termsCheckbox.checked) {
    donateBtn.disabled = false;
  } else {
    donateBtn.disabled = true;
  }
}

// Listen for change events
certificateCheckbox.addEventListener('change', updateDonateButtonState);
termsCheckbox.addEventListener('change', updateDonateButtonState);

