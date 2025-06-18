document.getElementById('roiForm').addEventListener('submit', function (e) {
  e.preventDefault();

  /*
  NOTE: Capturing Form Entries
  */

  // Investment
  const investment = parseFloat(document.getElementById('investment').value);

  // Savings in kWh
  const savingsKWh = parseFloat(document.getElementById('savingsKWh').value);

  // Cost per kWh
  const costPerKWh = parseFloat(document.getElementById('costPerKWh').value);

  // Lifespan in years
  /*
  Years cannot have decimals, so the value is parsed as an integer.
  */
  const lifespan = parseInt(document.getElementById('lifespan').value);

  /*
  NOTE: Optional Fields
  */

  // Maintenance
  const maintenance = parseFloat(document.getElementById('maintenance').value) || 0;

  // Incentives
  const incentives = parseFloat(document.getElementById('incentives').value) || 0;

  // Capturing Result Div
  const resultDiv = document.getElementById('result');

  // Validating inputs
  if ([investment, savingsKWh, costPerKWh, lifespan].some(val => isNaN(val) || val < 0)) {
    resultDiv.innerHTML = `<span style="color:red;"><strong>❌ Please enter all required fields with valid positive numbers.</strong></span>`;
    return;
  }

  // Total Savings
  const totalSavings = savingsKWh * costPerKWh * lifespan;

  // Net Savings
  const netSavings = totalSavings - maintenance + incentives;

  // ROI
  const roi = ((netSavings - investment) / investment) * 100;

  // Formatting Values
  const currency = amount => `KES ${amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  const percentage = value => `${value.toFixed(2)}%`;

  // Rendering Output
  resultDiv.innerHTML = `
        <div>
          <div><span class="label">✅ Total Energy Savings:<br></span> <span class="value">${currency(totalSavings)}</span></div>
          <hr>

          <div><span class="label">✅ Net Profit:<br></span> <span class="value">${currency(netSavings - investment)}</span></div>
          <hr>

          <div><span class="label">✅ ROI:<br></span> <span class="value">${percentage(roi)}</span></div>
          <hr>
        </div>
      `;
});