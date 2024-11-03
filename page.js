document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const pageId = params.get('pageId');

    if (pageId) {
        // Fetch the page data and display it
        fetch('data/page_data.json')
            .then(response => response.json())
            .then(data => {
                const page = data.pages.find(p => p.id == pageId);
                if (page) {
                    document.getElementById('page-name').textContent = page.name;
                    document.getElementById('page-busy-hours').textContent = `Busy Hours: ${page.busy_hours}`;
                    document.getElementById('page-info-desk').textContent = `Info Desk: ${page.info_desk}`;
                    document.getElementById('page-contact').textContent = page.contact ? `Contact: ${page.contact}` : '';
                    document.getElementById('page-address').textContent = `Address: ${page.address}`;
                    
                    // Set the background image based on pageId
                    document.body.style.backgroundImage = `url('images/bg/page${pageId}.jpeg')`;

                    // Add a map/image to the page
                    const mapImage = document.createElement('img');
                    mapImage.src = `images/maps/page${pageId}.png`;
                    mapImage.alt = `Map for page ${pageId}`;
                    mapImage.classList.add('map-image');
                    document.querySelector('.container').appendChild(mapImage);
                }
            });
    }
});
