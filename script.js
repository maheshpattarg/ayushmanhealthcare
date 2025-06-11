// Function to show images for diseases
function showImage(imagePath, element) {
    const allDiseases = document.querySelectorAll(".disease img");
    allDiseases.forEach((img) => img.remove());
  
    const img = document.createElement("img");
    img.src = imagePath;
    img.alt = "Disease Image";
    img.style.marginTop = "10px";
    img.style.maxWidth = "100%";
    element.appendChild(img);
  }
  
  // Function to open chatbot
  function openChat() {
    document.getElementById("chatBox").style.display = "block";
  }
  
  // Function to close chatbot
  function closeChat() {
    document.getElementById("chatBox").style.display = "none";
  }