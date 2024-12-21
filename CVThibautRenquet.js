function Toontekst(toonID, verstopID)
{
    const Toontekst = document.getElementById(toonID);
    const Verstoptekst = document.getElementById(verstopID);
    Verstoptekst.classList.remove("show");
    setTimeout(() => { Verstoptekst.style.display = "none";
        Toontekst.style.display = "block";
        setTimeout(() => Toontekst.classList.add("show"),5);}, 1000);
}
document.getElementById('Talen').addEventListener('click', function()
{
    var extratekst = document.getElementById('extratekstTalen');
    if (extratekst.style.visibility === 'hidden') {
        extratekst.style.visibility = 'visible';
        extratekst.style.opacity = '1';
    } else {
        extratekst.style.visibility = 'hidden';
        extratekst.style.opacity = '0';
    }
});
document.getElementById('HardSkills').addEventListener('click', function()
{
    var extratekst = document.getElementById('extratekstHardSkills');
    if (extratekst.style.visibility === 'hidden') {
        extratekst.style.visibility = 'visible';
        extratekst.style.opacity = '1';
    } else {
        extratekst.style.visibility = 'hidden';
        extratekst.style.opacity = '0';
    }
});
document.getElementById('SoftSkills').addEventListener('click', function()
{
    var extratekst = document.getElementById('extratekstSoftSkills');
    if (extratekst.style.visibility === 'hidden') {
        extratekst.style.visibility = 'visible';
        extratekst.style.opacity = '1';
    } else {
        extratekst.style.visibility = 'hidden';
        extratekst.style.opacity = '0';
    }
});
