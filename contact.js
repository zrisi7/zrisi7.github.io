console.log('WORKING')



$(document).ready(function () {
  $('.submit').click(function(event) {

    console.log('Clicked button')

    var email = $('.email').val()
    var subject = $('.email').val()
    var message = $('.email').val()
    var statusElm = $('.status')
    statusElm.empty()


    if (email.length > 5 && email.includes('@') && email.includes('.')) {
      statusElm.append('<div>Email is Valid</div>')
    } else {

      statusElm.append('<div>Email is not valid</div>')
          event.preventDefault()
    }

    if(subject.length >= 2) {
      statusElm.append('<div>Subject is valid</div>')
    } else {
          event.preventDefault()
    statusElm.append('<div>Subject is not valid</div>')
  }
    if(subject.length >= 10){

        statusElm.append('<div>Message is valid</div>')
  } else {
        event.preventDefault()
    statusElm.append('<div>Message is not valid</div>')
  }

  })
})
