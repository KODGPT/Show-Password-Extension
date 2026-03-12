chrome.action.onClicked.addListener((tab) => {

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: togglePasswords
  });

});

function togglePasswords() {

  const inputs = document.querySelectorAll('input[type="password"], input[data-password-visible]');

  inputs.forEach(input => {

    if (input.type === "password") {
      input.type = "text";
      input.dataset.passwordVisible = "true";
    } else if (input.dataset.passwordVisible) {
      input.type = "password";
      delete input.dataset.passwordVisible;
    }

  });

}