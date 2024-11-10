class StringController {
    constructor(model, view) {
      this.model = model;
      this.view = view;
  
      // Bind button events
      document.getElementById('addStringBtn').addEventListener('click', () => this.addRandomString());
      document.getElementById('deleteStringBtn').addEventListener('click', () => this.deleteRandomString());
      document.getElementById('showAllStringsBtn').addEventListener('click', () => this.showAllStrings());
  
      // Initial render
      this.showStrings();
    }
  
    addRandomString() {
      this.model.addString();
      this.showStrings();
    }
  
    deleteRandomString() {
      this.model.deleteString();
      this.showStrings();
    }
  
    showStrings() {
      const allStrings = this.model.getAllStrings();
      this.view.render(allStrings);
    }
  
    // New function for the "Show All Strings" button
    showAllStrings() {
      this.showStrings();
    }
  }