// JavaScript for Project Interactivity and Chart Updates

// Example: Toggle project details visibility (Show/Hide detailed project description)
document.addEventListener('DOMContentLoaded', function() {
    const projectToggleButton = document.querySelector('.project-toggle-button');
    const projectDetails = document.querySelector('.project-details');

    // Show or Hide project details on button click
    projectToggleButton.addEventListener('click', function() {
        projectDetails.classList.toggle('hidden');
        projectToggleButton.textContent = projectDetails.classList.contains('hidden') 
            ? 'View Project Details' : 'Hide Project Details';
    });

    // Example: Add Event Listener for Dynamic Chart Data Update (for Sales Forecast Project)
    const updateForecastButton = document.querySelector('#updateForecastButton');
    if (updateForecastButton) {
        updateForecastButton.addEventListener('click', function() {
            updateSalesForecastChart();
        });
    }

    // Function to update sales forecast chart data dynamically
    function updateSalesForecastChart() {
        const forecastChart = Chart.getChart('salesForecastChart');
        forecastChart.data.datasets[0].data = [14, 17, 20, 23, 26, 28, 30, 33, 36, 39, 41, 45];  // New data
        forecastChart.update();
    }
});

// Example: Change Chart Type (for the Project Chart)
function toggleProjectChartType() {
    const chart = Chart.getChart('salesForecastChart');
    chart.config.type = chart.config.type === 'line' ? 'bar' : 'line';
    chart.update();
}

// Example: Dynamic Tooltip Updates for Projects
function updateTooltip() {
    const chart = Chart.getChart('salesForecastChart');
    chart.options.plugins.tooltip.callbacks = {
        label: function(tooltipItem) {
            return 'Forecasted: ' + tooltipItem.raw + ' units';
        }
    };
    chart.update();
}
