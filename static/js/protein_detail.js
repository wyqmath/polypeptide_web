// JavaScript for protein_detail.html can be added here.
// For example, handling button clicks or making the info section collapsible.

document.addEventListener('DOMContentLoaded', () => {
    console.log('Protein detail page loaded.');
    
    // Example: Add functionality to toggle the information section (optional)
    const infoHeader = document.querySelector('.info-section h2');
    const infoTable = document.querySelector('.info-section table');
    const toggleArrow = document.querySelector('.toggle-arrow');

    if (infoHeader && infoTable && toggleArrow) {
        infoHeader.addEventListener('click', () => {
            const isHidden = infoTable.style.display === 'none';
            infoTable.style.display = isHidden ? '' : 'none';
            toggleArrow.textContent = isHidden ? '▲' : '▼';
        });
    }

    // Add other event listeners or functions as needed.
}); 