import './bootstrap';

Echo.private('notifications')
    .listen('UserSessionChanged',(e) =>{
        console.log('hi');
        let notificationElement = document.getElementById('notification')
        console.log(notificationElement);
        notificationElement.innerText = e.message;
        notificationElement.classList.remove('invisible');
        notificationElement.classList.remove('alert-success');
        notificationElement.classList.remove('alert-danger');

        notificationElement.classList.add('alert-' + e.type);

    })