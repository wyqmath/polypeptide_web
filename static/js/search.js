function initializeSearchPage() {
    const searchInput = document.getElementById('mainSearchInput');
    const resultsContainer = document.getElementById('results-container');
    const infoSection = document.querySelector('.search-info-section');
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('q');

    const displayFullResults = (query) => {
        if (typeof pdbList === 'undefined' || pdbList.length === 0) {
            resultsContainer.innerHTML = '<p style="color: red;">Error: PDB data could not be loaded. Please try refreshing the page.</p>';
            if (infoSection) infoSection.style.display = 'block';
            return;
        }

        const lowerCaseQuery = query.toLowerCase();
        const results = pdbList.filter(item => 
            Object.values(item).some(value => 
                String(value).toLowerCase().includes(lowerCaseQuery)
            )
        );

        // Clear previous results but keep the info section template
        resultsContainer.innerHTML = '';
        if (infoSection) {
            resultsContainer.appendChild(infoSection);
            infoSection.style.display = 'none'; // Hide by default when displaying results
        }

        if (results.length > 0) {
            const heading = document.createElement('h3');
            heading.className = 'results-heading';
            heading.textContent = `${results.length} results found for "${query}"`;
            resultsContainer.appendChild(heading);

            const cardsContainer = document.createElement('div');
            cardsContainer.className = 'results-cards-container';
            
            results.forEach(item => {
                const card = document.createElement('a');
                card.className = 'result-card';
                card.href = `pdb_pages/${item.id}.html`;
                card.innerHTML = `
                    <div class="card-header">
                        <span class="card-title">${item.id}</span>
                    </div>
                    <div class="card-body">
                        <p class="card-text"><strong>Title:</strong> ${item.note}</p>
                        <p class="card-text"><strong>Method:</strong> ${item.method}</p>
                        <p class="card-text"><strong>Resolution:</strong> ${item.resolution || 'N/A'}</p>
                        <p class="card-text"><strong>Organisms:</strong> ${item.organisms || 'N/A'}</p>
                    </div>
                `;
                cardsContainer.appendChild(card);
            });
            resultsContainer.appendChild(cardsContainer);

        } else {
            resultsContainer.innerHTML = `<p class="no-results-message">No results found for "<strong>${query}</strong>".</p>`;
            if (infoSection) {
                 resultsContainer.appendChild(infoSection);
                 infoSection.style.display = 'block'; // Show it when no results
            }
        }
    };

    if (query) {
        searchInput.value = decodeURIComponent(query);
        displayFullResults(decodeURIComponent(query));
    } else {
        // When no query, ensure the info section is visible
        if (infoSection) {
            infoSection.style.display = 'block';
        }
    }
}

// Wait for the DOM and the pdbList to be ready
if (document.readyState === 'loading') {
    window.addEventListener('DOMContentLoaded', initializeSearchPage);
} else {
    initializeSearchPage();
} 