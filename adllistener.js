document.getElementById("whatsappForm").addEventListener("submit", function (event) {
    event.preventDefault();

    var name		= document.getElementById("name").value;    
    var email 		= document.getElementById("email").value;
    var message 	= document.getElementById("message").value;
    let contact 	= '(082384897258)'; // isi dengan nomor WA (+6283811223344)

    var encodedMessage = encodeURIComponent(
        "Full Name	: " + name + "\n" +       
        "Email		: " + email + "\n" +
        "Pesan		: " + message
    );

    var link;

    // Check if user is on a mobile device
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        link = `whatsapp://send?phone=${contact}&text=${encodedMessage}`;
    } else { // Desktop device
        link = `https://api.whatsapp.com/send?phone=${contact}&text=${encodedMessage}`;
    }

    window.open(link, '_blank');
});