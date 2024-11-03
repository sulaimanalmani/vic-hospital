document.addEventListener("DOMContentLoaded", () => {
    // Fetch heads, departments, and locations data
    fetch('data/heads_pages.json')
        .then(response => response.json())
        .then(data => populateDropdown('heads-menu', data));

    fetch('data/departments_pages.json')
        .then(response => response.json())
        .then(data => populateDropdown('departments-menu', data));

    fetch('data/locations_pages.json')
        .then(response => response.json())
        .then(data => populateDropdown('locations-menu', data));

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

// Populate dropdowns with items and add data-page-id attributes
function populateDropdown(menuId, items) {
    const menu = document.getElementById(menuId);
    for (const [name, pageId] of Object.entries(items)) {
        const anchor = document.createElement('a');
        anchor.href = `page.html?pageId=${pageId}`;  // Redirects to page.html with pageId
        anchor.textContent = name;
        menu.appendChild(anchor);
    }
}
