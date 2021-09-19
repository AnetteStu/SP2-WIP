export function displayMessage(messageType, message, target) {
  const element = document.querySelector(target);

  element.innerHTML = `
                        <div class="card">
                          <div class="card-body">
                            <blockquote class="blockquote mb-0 ${messageType}">
                              <p>${message}</p>
                              </blockquote>
                          </div>
                        </div>`;
}
