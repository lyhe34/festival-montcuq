export const translate = (text) =>
{
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=fr&dt=t&q=" + text, false);
    xhttp.send();
    var response = JSON.parse(xhttp.responseText);
    return response[0][0][0];
}