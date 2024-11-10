class StringView {
    constructor() {
      this.stringListElement = document.getElementById('stringList');
    }
  
    render(strings) {
      this.stringListElement.innerHTML = ''; // Clear the current list
      strings.forEach((str) => {
        const li = document.createElement('li');
        li.textContent = str;
        this.stringListElement.appendChild(li);
      });
    }
  }