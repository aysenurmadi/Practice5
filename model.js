class StringModel {
    constructor() {
      this.strings = [];
    }
  
    addString() {
      const newString = this.generateRandomString();
      this.strings.push(newString);
      return newString;
    }
  
    deleteString() {
      return this.strings.pop();
    }
  
    getAllStrings() {
      return this.strings;
    }
  
    generateRandomString(length = 8) {
      let randomString = '';
      for (let i = 0; i < length; i++) {
        const randomCharCode = Math.floor(Math.random() * (126 - 33) + 33); // ASCII from 33 to 126
        randomString += String.fromCharCode(randomCharCode);
      }
      return randomString;
    }
  }