const sendInput = document.querySelector('#input');
const itemsBox = document.querySelector('#items');

sendInput.addEventListener('keydown', function (event) {
    const messageText = sendInput.value;

    if (event.key == 'Enter') {
        const newMessage = document.createElement('div');
        newMessage.classList.add('items');
        newMessage.textContent = messageText;

        newMessage.addEventListener('click', function () {
            newMessage.classList.toggle('done');
        });

        if (messageText != '') {
            itemsBox.prepend(newMessage);
        }

        sendInput.value = '';

    }
});

