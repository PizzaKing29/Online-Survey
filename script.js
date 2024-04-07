// Select all buttons with the class 'boxes'
document.querySelectorAll('.boxes').forEach(function(box) {
    // Add click event listener to each button
    box.addEventListener('click', function() {
        // Get the parent question of the clicked button
        var question = this.parentElement;

        // Remove 'clicked' class from all buttons within the same question
        question.querySelectorAll('.boxes').forEach(function(btn) {
            btn.classList.remove('clicked');
        });

        // Add 'clicked' class to the clicked button
        this.classList.add('clicked');
    });
});


