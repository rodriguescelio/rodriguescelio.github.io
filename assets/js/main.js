((firebase, swal) => {
    
    firebase.initializeApp({
        apiKey: "AIzaSyAvqRpY2N-a825gPo1mQVtArXkcHyTqYvA",
        authDomain: "rodriguescelio-page.firebaseapp.com",
        databaseURL: "https://rodriguescelio-page.firebaseio.com",
        projectId: "rodriguescelio-page",
        storageBucket: "",
        messagingSenderId: "855187865145"
    })

    const ref = firebase.database().ref('/messages')

    const sendMessage = (e) => {
        e.preventDefault()
        
        const form = $('form.contact')
        let formFilled = true

        form.find('input, textarea').each((index, element) => {
            if($(element).val() == '') {
                formFilled = false
            }
        })

        if(formFilled) {
            const messageObject = {
                name: form.find('input[name="name"]').val(),
                email: form.find('input[name="email"]').val(),
                message: form.find('textarea[name="message"]').val(),
                date: new Date().toUTCString()
            }
            ref.push(messageObject).then(
                () => {
                    form.slideUp()
                    $('p.message').slideDown()
                },
                () => {
                    swal('Oops', 'Something went wrong!', 'error')
                }
            )
        } else {
            swal('Please', 'Fill all fields in the form!', 'warning')
        }
    }

    $('form.contact button[type="submit"]').click(sendMessage)

})(firebase, swal)