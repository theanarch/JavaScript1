function fixElement(element, message) {
    alert(message);
    element.focus();
}
function isMailReady(form) {
    var passed = false;
    if (form.fullname.value == "") {
        fixElement(form.fullname, "Information saknas i fältet NAMN!");
    }
    else if (form.email.value.indexOf("@") == -1 ||
        form.email.value.indexOf(".") == -1) {
        fixElement(form.email, "Ange en giltig epostadress i fältet EPOSTADRESS!");
    }
    else if (form.message.value == "") {
        fixElement(form.message, "Du har inte skrivit något meddelande!");
    }
    else {
        passed = true;
    }
    return passed;
}

var Handler = React.createClass({
    componentDidMount: function () {
        document.title = "Amazing Page";
    }
});