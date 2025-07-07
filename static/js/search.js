function initializeSearchPage() {
    const searchInput = document.getElementById('mainSearchInput');
    const resultsContainer = document.getElementById('results-container');
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('q');

    // Make sure pdbList is loaded
    if (typeof pdbList === 'undefined' || pdbList.length === 0) {
        resultsContainer.innerHTML = '<p style="color: red;">Error: PDB data could not be loaded. Please try again.</p>';
        console.error("pdbList is not defined or is empty.");
        return;
    }

    const createResultsTable = (results) => {
        const table = document.createElement('table');
        table.className = 'results-table';
        table.style.width = '100%';
        table.style.borderCollapse = 'collapse';
        
        const header = table.createTHead();
        const headerRow = header.insertRow(0);
        const headers = ['PDB ID', 'Title', 'Method', 'Resolution', 'Organisms'];
        headers.forEach(text => {
            const th = document.createElement('th');
            th.textContent = text;
            th.style.border = '1px solid #ddd';
            th.style.padding = '8px';
            th.style.textAlign = 'left';
            th.style.backgroundColor = '#f0f0f0';
            headerRow.appendChild(th);
        });

        const tbody = table.createTBody();
        results.forEach(item => {
            const row = tbody.insertRow();
            row.style.borderBottom = '1px solid #eee';
            const idCell = row.insertCell();
            idCell.style.padding = '8px';
            const idLink = document.createElement('a');
            idLink.href = `pdb_pages/${item.id}.html`;
            idLink.textContent = item.id;
            idCell.appendChild(idLink);
            row.insertCell().textContent = item.note || '';
            row.insertCell().textContent = item.method || 'N/A';
            row.insertCell().textContent = item.resolution || 'N/A';
            row.insertCell().textContent = item.organisms || 'N/A';
            row.addEventListener('mouseover', () => row.style.backgroundColor = '#f9f9f9');
            row.addEventListener('mouseout', () => row.style.backgroundColor = 'transparent');
        });
        return table;
    };

    const displayExampleResults = () => {
        resultsContainer.innerHTML = '';
        const exampleQueries = ['insulin', 'human', 'toxin', 'conotoxin'];
        exampleQueries.forEach(exQuery => {
            const lowerCaseQuery = exQuery.toLowerCase();
            const all_results = pdbList.filter(item => 
                Object.values(item).some(value => 
                    String(value).toLowerCase().includes(lowerCaseQuery)
                )
            );
            const top_results = all_results.slice(0, 5);
            if (top_results.length > 0) {
                const section = document.createElement('div');
                section.className = 'example-results-section';
                section.style.marginBottom = '40px';
                const heading = document.createElement('h2');
                heading.innerHTML = `Example Search: "<strong>${exQuery}</strong>"`;
                heading.style.borderBottom = '1px solid #ccc';
                heading.style.paddingBottom = '10px';
                section.appendChild(heading);
                section.appendChild(createResultsTable(top_results));
                if (all_results.length > 5) {
                    const seeAllLink = document.createElement('a');
                    seeAllLink.textContent = `See all ${all_results.length} results...`;
                    seeAllLink.href = `search.html?q=${encodeURIComponent(exQuery)}`;
                    seeAllLink.style.display = 'block';
                    seeAllLink.style.textAlign = 'right';
                    seeAllLink.style.marginTop = '10px';
                    section.appendChild(seeAllLink);
                }
                resultsContainer.appendChild(section);
            }
        });
    };

    const displayFullResults = (query) => {
        const lowerCaseQuery = query.toLowerCase();
        const results = pdbList.filter(item => 
            Object.values(item).some(value => 
                String(value).toLowerCase().includes(lowerCaseQuery)
            )
        );
        resultsContainer.innerHTML = '';
        if (results.length > 0) {
            const heading = document.createElement('h3');
            heading.textContent = `${results.length} results found for "${query}"`;
            resultsContainer.appendChild(heading);
            resultsContainer.appendChild(createResultsTable(results));
        } else {
            resultsContainer.innerHTML = `<p>No results found for "<strong>${query}</strong>".</p>`;
        }
    };

    if (query) {
        searchInput.value = decodeURIComponent(query);
        displayFullResults(decodeURIComponent(query));
    } else {
        displayExampleResults();
    }
    
    document.querySelectorAll('.example-tag').forEach(tag => {
        tag.addEventListener('click', e => {
            e.preventDefault();
            window.location.href = `search.html?q=${encodeURIComponent(tag.textContent)}`;
        });
    });
}

// Wait for the DOM and the pdbList to be ready
if (document.readyState === 'loading') {
    window.addEventListener('DOMContentLoaded', initializeSearchPage);
} else {
    initializeSearchPage();
} 