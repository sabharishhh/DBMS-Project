const locBtnText = document.querySelector('.dropbtn');
const dropdownItems = document.querySelectorAll('.dropdown-content a');
const dropDownContent = document.querySelector('.dropdown-content');

// Add event listener to each dropdown item
dropdownItems.forEach(item => {
    item.addEventListener('click', (event) => {
        event.preventDefault();
        locBtnText.textContent = item.textContent + " ▼";

        dropDownContent.style.display = 'none';
    });
});

locBtnText.addEventListener('mouseenter', () => {
    if (dropDownContent.style.display === 'block') {
        dropDownContent.style.display = 'none'; // Hide dropdown if already visible
    } else {
        dropDownContent.style.display = 'block'; // Show dropdown if it is hidden
    }
});
