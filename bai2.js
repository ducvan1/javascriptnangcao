function convertText() {
    const inputText = document.getElementById('inputText').value;
    const lines = inputText.split('\n');
  
    const output = lines.map(line => {
      const words = line.split('_');
      const camelCaseWords = words.map((word, index) => {
        return index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1);
      });
      return camelCaseWords.join('');
    });
  
    displayOutput(output);
  }
  
  function displayOutput(output) {
    const outputDiv = document.getElementById('output');
    outputDiv.innerbai2 = '';
  
    output.forEach((result, index) => {
      const tickMarks = '✅'.repeat(index + 1);
      const resultLine = document.createElement('div');
      resultLine.textContent = `${result} ${tickMarks}`;
      outputDiv.appendChild(resultLine);
    });
  }
  