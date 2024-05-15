// Define instrument details
const instruments = [
    { name: 'Instrument 1', weight: 3, volume: 2, value: 10 },
    { name: 'Instrument 2', weight: 4, volume: 3, value: 15 },
    { name: 'Instrument 3', weight: 2, volume: 1, value: 8 },
    { name: 'Instrument 4', weight: 5, volume: 4, value: 20 }
];

// Define spacecraft capacity
const payloadCapacity = 10; // kg
const volumeCapacity = 7; // m^3

// Function to update the selected instruments
function updateSelection() {
    const selectedIndices = [...document.querySelectorAll('input[name="instrument"]:checked')].map(input => parseInt(input.value));
    const selectedInstruments = selectedIndices.map(index => instruments[index]);

    // Display the selected instruments
    const selectedTable = document.getElementById('selected-instruments');
    selectedTable.innerHTML = '';
    selectedInstruments.forEach(item => {
        const row = document.createElement('tr');
        ['name', 'weight', 'volume', 'value'].forEach(prop => {
            const td = document.createElement('td');
            td.textContent = item[prop];
            row.appendChild(td);
        });
        selectedTable.appendChild(row);
    });

    // Calculate and display total weight, volume, and scientific value
    const totalWeight = selectedInstruments.reduce((total, item) => total + item.weight, 0);
    const totalVolume = selectedInstruments.reduce((total, item) => total + item.volume, 0);
    const totalValue = selectedInstruments.reduce((total, item) => total + item.value, 0);

    document.getElementById('total-weight').textContent = totalWeight;
    document.getElementById('total-volume').textContent = totalVolume;
    document.getElementById('total-value').textContent = totalValue;
}

// Attach event listeners to checkboxes
const checkboxes = document.querySelectorAll('input[name="instrument"]');
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', updateSelection);
});

// Create table for selected instruments
const selectedTable = document.createElement('table');
selectedTable.id = 'selected-instruments';
selectedTable.innerHTML = `
    <tr>
        <th>Instrument</th>
        <th>Weight (kg)</th>
        <th>Volume (m<sup>3</sup>)</th>
        <th>Base Scientific Value</th>
    </tr>
`;
document.body.appendChild(selectedTable);
