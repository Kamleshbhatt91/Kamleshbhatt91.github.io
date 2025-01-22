// JavaScript for Blog Interactivity and Chart Updates

// Example: Toggle content visibility (e.g., Show/Hide additional details)
document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.toggle-button');
    const additionalContent = document.querySelector('.additional-content');

    // Show or Hide additional content on button click
    toggleButton.addEventListener('click', function() {
        additionalContent.classList.toggle('hidden');
        toggleButton.textContent = additionalContent.classList.contains('hidden') 
            ? 'Show More' : 'Show Less';
    });

    // Example: Update chart dynamically (mock functionality)
    const updateButton = document.querySelector('#updateChartButton');
    if (updateButton) {
        updateButton.addEventListener('click', function() {
            updateChartData();
        });
    }

    // Function to update chart data dynamically
    function updateChartData() {
        const chart = Chart.getChart('incidentResponseChart');
        chart.data.datasets[0].data = [35, 25];  // Example new data
        chart.update();
    }
});

// Example: Change chart type dynamically (for visualization purposes)
function changeChartType() {
    const chart = Chart.getChart('incidentResponseChart');
    chart.config.type = chart.config.type === 'bar' ? 'line' : 'bar';
    chart.update();
}
