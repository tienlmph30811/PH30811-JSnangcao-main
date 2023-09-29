document.getElementById("convertButton").addEventListener("click", function() {
    const inputText = document.getElementById("inputText").value;
    const lines = inputText.split("\n");
    let output = "";
  
    for (const line of lines) {
      const words = line.split("_");
      let camelCaseWord = words[0];
      for (let i = 1; i < words.length; i++) {
        camelCaseWord += words[i][0].toUpperCase() + words[i].slice(1);
      }
      output += `${camelCaseWord} ✅<br>`;
    }
  
    document.getElementById("output").innerHTML = output;
  });
  