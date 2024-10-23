function showFormData() {
    // get values form element ID's
    const FirstName = document.getElementById('firstName').value;
    const LastName = document.getElementById('lastName').value;
    const Email = document.getElementById('email').value;
    const TextInput = document.getElementById('tInput').value;
    
    popupContent = `First Name: ${FirstName}\nLast Name: ${LastName}\nEmail: ${Email}\nComments: ${TextInput}`

    alert(popupContent);
}

function validateEmails() {
    // Get the values of the email inputs
    const email = document.getElementById('email').value;
    const confirmEmail = document.getElementById('confirmEmail').value;
    const notification = document.getElementById('notification');
    // do not allow blank email addresses
    if (!email || !confirmEmail) {
        notification.style.color = 'red';
        notification.textContent = 'Please fill in both email fields.';
        return;
    }
    

        
    // Clear previous notifications
    notification.textContent = '';
    
    // Check if the emails match
    if (email === confirmEmail) {
        notification.style.color = 'green';
        notification.textContent = 'Emails match!';
    } else {
        notification.style.color = 'red';
        notification.textContent = 'Emails do not match!';
    }
}
