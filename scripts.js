document.getElementById("rsvpBtn").addEventListener("click", function() {
    window.location.href = "mailto:?subject=RSVP&body=I%20will%20attend%20the%20wedding!";
});

function openRoute(url) {
    window.open(url, "_blank");
}
