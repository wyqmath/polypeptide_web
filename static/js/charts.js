document.addEventListener('DOMContentLoaded', () => {
    const cacheBuster = `?v=${new Date().getTime()}`;
    fetch(`static/data/chart_data.json${cacheBuster}`)
        .then(response => response.json())
        .then(data => {
            if (data) {
                createMethodsChart(data.methods);
                createSSBondsChart(data.ss_bonds);
                createReleasesChart(data.releases_over_time);
                createResolutionChart(data.resolution_distribution);
                createOrganismsChart(data.top_organisms);
                createLengthChart(data.peptide_length_distribution);
                createEntityCountChart(data.entity_count_distribution);
                createPolymerTypeChart(data.polymer_type_distribution);
            }
        })
        .catch(error => console.error('Error loading chart data:', error));

    const chartColors = {
        purple: 'rgba(153, 102, 255, 0.7)',
        blue: 'rgba(54, 162, 235, 0.7)',
        pink: 'rgba(255, 99, 132, 0.7)',
        orange: 'rgba(255, 159, 64, 0.7)',
        yellow: 'rgba(255, 205, 86, 0.7)',
        green: 'rgba(75, 192, 192, 0.7)',
        grey: 'rgba(201, 203, 207, 0.7)',
        teal: 'rgba(20, 140, 140, 0.7)',
        red: 'rgba(255, 60, 60, 0.7)',
    };
    
    const colorPalette = Object.values(chartColors);

    function createMethodsChart(methodsData) {
        const ctx = document.getElementById('methodsChart')?.getContext('2d');
        if (!ctx) return;

        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: methodsData.labels,
                datasets: [{
                    label: 'Structures by Method',
                    data: methodsData.data,
                    backgroundColor: colorPalette,
                    borderColor: '#fff',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    title: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        type: 'logarithmic',
                        title: {
                            display: true,
                            text: 'Number of Structures (Log Scale)'
                        }
                    }
                }
            }
        });
    }

    function createSSBondsChart(ssBondsData) {
        const ctx = document.getElementById('ssBondsChart')?.getContext('2d');
        if (!ctx) return;

        new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ssBondsData.labels,
                datasets: [{
                    label: 'SS Bonds',
                    data: ssBondsData.data,
                    backgroundColor: [chartColors.blue, chartColors.pink],
                    borderColor: '#fff',
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                     title: {
                        display: false
                    }
                }
            }
        });
    }

    function createReleasesChart(releasesData) {
        const ctx = document.getElementById('releasesChart')?.getContext('2d');
        if (!ctx) return;

        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: releasesData.labels,
                datasets: [{
                    label: 'Number of Structures Released',
                    data: releasesData.data,
                    backgroundColor: chartColors.green,
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1,
                    barThickness: 'flex',
                    maxBarThickness: 50,
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Number of Structures'
                        }
                    },
                    x: {
                        title: {
                            display: true,
                            text: 'Year'
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        });
    }

    function createResolutionChart(resolutionData) {
        const ctx = document.getElementById('resolutionChart')?.getContext('2d');
        if (!ctx) return;

        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: resolutionData.labels,
                datasets: [{
                    label: 'Number of Structures',
                    data: resolutionData.data,
                    backgroundColor: colorPalette,
                    borderColor: 'rgba(255, 255, 255, 0.5)',
                    borderWidth: 1,
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false,
                    },
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: { display: true, text: 'Number of Structures' }
                    },
                    x: {
                        title: { display: true, text: 'Resolution (Å)' }
                    }
                }
            }
        });
    }

    function createOrganismsChart(organismsData) {
        const ctx = document.getElementById('organismsChart')?.getContext('2d');
        if (!ctx) return;

        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: organismsData.labels,
                datasets: [{
                    label: 'Count',
                    data: organismsData.data,
                    backgroundColor: colorPalette,
                }]
            },
            options: {
                indexAxis: 'y',
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false,
                    },
                },
                scales: {
                    x: {
                        beginAtZero: true,
                        title: { display: true, text: 'Number of Structures' }
                    }
                }
            }
        });
    }

    function createLengthChart(lengthData) {
        const ctx = document.getElementById('lengthChart')?.getContext('2d');
        if (!ctx) return;

        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: lengthData.labels,
                datasets: [{
                    label: 'Number of Peptides',
                    data: lengthData.data,
                    backgroundColor: chartColors.orange,
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false,
                    },
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: { display: true, text: 'Count' }
                    },
                    x: {
                        title: { display: true, text: 'Peptide Length (amino acids)' }
                    }
                }
            }
        });
    }

    function createEntityCountChart(entityCountData) {
        const ctx = document.getElementById('entityCountChart')?.getContext('2d');
        if (!ctx) return;

        new Chart(ctx, {
            type: 'pie',
            data: {
                labels: entityCountData.labels,
                datasets: [{
                    label: 'Number of Entries',
                    data: entityCountData.data,
                    backgroundColor: colorPalette,
                    borderColor: '#fff',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: false,
                    }
                }
            }
        });
    }

    function createPolymerTypeChart(polymerTypeData) {
        const ctx = document.getElementById('polymerTypeChart')?.getContext('2d');
        if (!ctx) return;

        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: polymerTypeData.labels,
                datasets: [{
                    label: 'Number of Entities',
                    data: polymerTypeData.data,
                    backgroundColor: colorPalette,
                    borderColor: '#fff',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false,
                    },
                    title: {
                        display: false,
                    }
                },
                scales: {
                    y: {
                        type: 'logarithmic',
                        title: {
                            display: true,
                            text: 'Count (Log Scale)'
                        }
                    }
                }
            }
        });
    }
}); 