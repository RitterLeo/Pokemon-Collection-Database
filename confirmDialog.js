function showConfirmDialog({
    title = "Bestätigen",
    message = "",
    confirmText = "OK",
    cancelText = "Abbrechen",
    onConfirm = () => {}
}) {

    const overlay = document.createElement("div");
    overlay.className = "confirm-overlay";

    overlay.innerHTML = `
        <div class="confirm-box">

            <div class="confirm-icon">
                ⚠
            </div>

            <h3>${title}</h3>

            <p>${message}</p>

            <div class="confirm-buttons">

                <button class="confirm-cancel">
                    ${cancelText}
                </button>

                <button class="confirm-delete">
                    ${confirmText}
                </button>

            </div>

        </div>
    `;

    document.body.appendChild(overlay);

    overlay.querySelector(".confirm-cancel")
        .addEventListener("click", () => {

            overlay.remove();

        });

    overlay.querySelector(".confirm-delete")
        .addEventListener("click", () => {

            overlay.remove();

            onConfirm();

        });

}