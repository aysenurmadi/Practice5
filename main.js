document.addEventListener('DOMContentLoaded', () => {
    const model = new StringModel();
    const view = new StringView();
    new StringController(model, view);
  });