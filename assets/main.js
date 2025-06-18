document.getElementById('roiForm').addEventListener('submit', function (e) {
  e.preventDefault();

  // Capturing Form Entries

  const investment = parseFloat(document.getElementById('investment').value);
  const savingsKWh = parseFloat(document.getElementById('savingsKWh').value);
  const costPerKWh = parseFloat(document.getElementById('costPerKWh').value);
  const lifespan = parseInt(document.getElementById('lifespan').value);
  const maintenance = parseFloat(document.getElementById('maintenance').value) || 0;
  const incentives = parseFloat(document.getElementById('incentives').value) || 0;
  const resultDiv = document.getElementById('result');

  // Retrieve selected currency
  const selectedCurrency = document.getElementById('currency').value;

  // Input validation
  if ([investment, savingsKWh, costPerKWh, lifespan].some(val => isNaN(val) || val < 0)) {
    resultDiv.innerHTML = `<span style="color:red;"><strong>❌ Please enter all required fields with valid positive numbers.</strong></span>`;
    return;
  }

  // Calculations
  const totalSavings = savingsKWh * costPerKWh * lifespan;

  const netSavings = totalSavings - maintenance + incentives;

  const roi = ((netSavings - investment) / investment) * 100;

  // Formatters
  const currency = amount => `${selectedCurrency} ${amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
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

      <div><span class="label no-print dwnld" onClick=window.print()>💡 Download Report</span></div>
    </div>
  `;
});


// List of Currencies
const currencies = [
  { code: 'USD', name: 'United States dollar' },
  { code: 'EUR', name: 'Euro' },
  { code: 'JPY', name: 'Japanese yen' },
  { code: 'GBP', name: 'British pound' },
  { code: 'AED', name: 'United Arab Emirates dirham' },
  { code: 'AFN', name: 'Afghan afghani' },
  { code: 'ALL', name: 'Albanian lek' },
  { code: 'AMD', name: 'Armenian dram' },
  { code: 'ANG', name: 'Netherlands Antillean guilder' },
  { code: 'AOA', name: 'Angolan kwanza' },
  { code: 'ARS', name: 'Argentine peso' },
  { code: 'AUD', name: 'Australian dollar' },
  { code: 'AWG', name: 'Aruban florin' },
  { code: 'AZN', name: 'Azerbaijani manat' },
  { code: 'BAM', name: 'Bosnia and Herzegovina convertible mark' },
  { code: 'BBD', name: 'Barbadian dollar' },
  { code: 'BDT', name: 'Bangladeshi taka' },
  { code: 'BGN', name: 'Bulgarian lev' },
  { code: 'BHD', name: 'Bahraini dinar' },
  { code: 'BIF', name: 'Burundian franc' },
  { code: 'BMD', name: 'Bermudian dollar' },
  { code: 'BND', name: 'Brunei dollar' },
  { code: 'BOB', name: 'Bolivian boliviano' },
  { code: 'BRL', name: 'Brazilian real' },
  { code: 'BSD', name: 'Bahamian dollar' },
  { code: 'BTN', name: 'Bhutanese ngultrum' },
  { code: 'BWP', name: 'Botswana pula' },
  { code: 'BYN', name: 'Belarusian ruble' },
  { code: 'BZD', name: 'Belize dollar' },
  { code: 'CAD', name: 'Canadian dollar' },
  { code: 'CDF', name: 'Congolese franc' },
  { code: 'CHF', name: 'Swiss franc' },
  { code: 'CLP', name: 'Chilean peso' },
  { code: 'CNY', name: 'Chinese yuan' },
  { code: 'COP', name: 'Colombian peso' },
  { code: 'CRC', name: 'Costa Rican colón' },
  { code: 'CUC', name: 'Cuban convertible peso' },
  { code: 'CUP', name: 'Cuban peso' },
  { code: 'CVE', name: 'Cape Verdean escudo' },
  { code: 'CZK', name: 'Czech koruna' },
  { code: 'DJF', name: 'Djiboutian franc' },
  { code: 'DKK', name: 'Danish krone' },
  { code: 'DOP', name: 'Dominican peso' },
  { code: 'DZD', name: 'Algerian dinar' },
  { code: 'EGP', name: 'Egyptian pound' },
  { code: 'ERN', name: 'Eritrean nakfa' },
  { code: 'ETB', name: 'Ethiopian birr' },
  { code: 'FJD', name: 'Fijian dollar' },
  { code: 'FKP', name: 'Falkland Islands pound' },
  { code: 'GEL', name: 'Georgian lari' },
  { code: 'GGP', name: 'Guernsey pound' },
  { code: 'GHS', name: 'Ghanaian cedi' },
  { code: 'GIP', name: 'Gibraltar pound' },
  { code: 'GMD', name: 'Gambian dalasi' },
  { code: 'GNF', name: 'Guinean franc' },
  { code: 'GTQ', name: 'Guatemalan quetzal' },
  { code: 'GYD', name: 'Guyanese dollar' },
  { code: 'HKD', name: 'Hong Kong dollar' },
  { code: 'HNL', name: 'Honduran lempira' },
  { code: 'HRK', name: 'Croatian kuna' },
  { code: 'HTG', name: 'Haitian gourde' },
  { code: 'HUF', name: 'Hungarian forint' },
  { code: 'IDR', name: 'Indonesian rupiah' },
  { code: 'ILS', name: 'Israeli new shekel' },
  { code: 'IMP', name: 'Manx pound' },
  { code: 'INR', name: 'Indian rupee' },
  { code: 'IQD', name: 'Iraqi dinar' },
  { code: 'IRR', name: 'Iranian rial' },
  { code: 'ISK', name: 'Icelandic króna' },
  { code: 'JEP', name: 'Jersey pound' },
  { code: 'JMD', name: 'Jamaican dollar' },
  { code: 'JOD', name: 'Jordanian dinar' },
  { code: 'KES', name: 'Kenyan shilling' },
  { code: 'KGS', name: 'Kyrgyzstani som' },
  { code: 'KHR', name: 'Cambodian riel' },
  { code: 'KID', name: 'Kiribati dollar' },
  { code: 'KMF', name: 'Comorian franc' },
  { code: 'KPW', name: 'North Korean won' },
  { code: 'KRW', name: 'South Korean won' },
  { code: 'KWD', name: 'Kuwaiti dinar' },
  { code: 'KYD', name: 'Cayman Islands dollar' },
  { code: 'KZT', name: 'Kazakhstani tenge' },
  { code: 'LAK', name: 'Lao kip' },
  { code: 'LBP', name: 'Lebanese pound' },
  { code: 'LKR', name: 'Sri Lankan rupee' },
  { code: 'LRD', name: 'Liberian dollar' },
  { code: 'LSL', name: 'Lesotho loti' },
  { code: 'LYD', name: 'Libyan dinar' },
  { code: 'MAD', name: 'Moroccan dirham' },
  { code: 'MDL', name: 'Moldovan leu' },
  { code: 'MGA', name: 'Malagasy ariary' },
  { code: 'MKD', name: 'Macedonian denar' },
  { code: 'MMK', name: 'Burmese kyat' },
  { code: 'MNT', name: 'Mongolian tögrög' },
  { code: 'MOP', name: 'Macanese pataca' },
  { code: 'MRU', name: 'Mauritanian ouguiya' },
  { code: 'MUR', name: 'Mauritian rupee' },
  { code: 'MVR', name: 'Maldivian rufiyaa' },
  { code: 'MWK', name: 'Malawian kwacha' },
  { code: 'MXN', name: 'Mexican peso' },
  { code: 'MYR', name: 'Malaysian ringgit' },
  { code: 'MZN', name: 'Mozambican metical' },
  { code: 'NAD', name: 'Namibian dollar' },
  { code: 'NGN', name: 'Nigerian naira' },
  { code: 'NIO', name: 'Nicaraguan córdoba' },
  { code: 'NOK', name: 'Norwegian krone' },
  { code: 'NPR', name: 'Nepalese rupee' },
  { code: 'NZD', name: 'New Zealand dollar' },
  { code: 'OMR', name: 'Omani rial' },
  { code: 'PAB', name: 'Panamanian balboa' },
  { code: 'PEN', name: 'Peruvian sol' },
  { code: 'PGK', name: 'Papua New Guinean kina' },
  { code: 'PHP', name: 'Philippine peso' },
  { code: 'PKR', name: 'Pakistani rupee' },
  { code: 'PLN', name: 'Polish złoty' },
  { code: 'PRB', name: 'Transnistrian ruble' },
  { code: 'PYG', name: 'Paraguayan guaraní' },
  { code: 'QAR', name: 'Qatari riyal' },
  { code: 'RON', name: 'Romanian leu' },
  { code: 'RSD', name: 'Serbian dinar' },
  { code: 'RUB', name: 'Russian ruble' },
  { code: 'RWF', name: 'Rwandan franc' },
  { code: 'SAR', name: 'Saudi riyal' },
  { code: 'SEK', name: 'Swedish krona' },
  { code: 'SGD', name: 'Singapore dollar' },
  { code: 'SHP', name: 'Saint Helena pound' },
  { code: 'SLL', name: 'Sierra Leonean leone' },
  { code: 'SLS', name: 'Somaliland shilling' },
  { code: 'SOS', name: 'Somali shilling' },
  { code: 'SRD', name: 'Surinamese dollar' },
  { code: 'SSP', name: 'South Sudanese pound' },
  { code: 'STN', name: 'São Tomé and Príncipe dobra' },
  { code: 'SYP', name: 'Syrian pound' },
  { code: 'SZL', name: 'Swazi lilangeni' },
  { code: 'THB', name: 'Thai baht' },
  { code: 'TJS', name: 'Tajikistani somoni' },
  { code: 'TMT', name: 'Turkmenistan manat' },
  { code: 'TND', name: 'Tunisian dinar' },
  { code: 'TOP', name: 'Tongan paʻanga' },
  { code: 'TRY', name: 'Turkish lira' },
  { code: 'TTD', name: 'Trinidad and Tobago dollar' },
  { code: 'TVD', name: 'Tuvaluan dollar' },
  { code: 'TWD', name: 'New Taiwan dollar' },
  { code: 'TZS', name: 'Tanzanian shilling' },
  { code: 'UAH', name: 'Ukrainian hryvnia' },
  { code: 'UGX', name: 'Ugandan shilling' },
  { code: 'UYU', name: 'Uruguayan peso' },
  { code: 'UZS', name: 'Uzbekistani soʻm' },
  { code: 'VES', name: 'Venezuelan bolívar soberano' },
  { code: 'VND', name: 'Vietnamese đồng' },
  { code: 'VUV', name: 'Vanuatu vatu' },
  { code: 'WST', name: 'Samoan tālā' },
  { code: 'XAF', name: 'Central African CFA franc' },
  { code: 'XCD', name: 'Eastern Caribbean dollar' },
  { code: 'XOF', name: 'West African CFA franc' },
  { code: 'XPF', name: 'CFP franc' },
  { code: 'ZAR', name: 'South African rand' },
  { code: 'ZMW', name: 'Zambian kwacha' },
  { code: 'ZWB', name: 'Zimbabwean bonds' }
];

// Populating Currency Select Dropdown
const currencySelect = document.getElementById('currency');
currencies.forEach(currency => {
  const option = document.createElement('option');
  option.value = currency.code;
  option.textContent = `${currency.name} (${currency.code})`;
  currencySelect.appendChild(option);
});

// Default Selection
function updateCurrencyLabels(selectedCode) {
  document.querySelectorAll('.currency-label').forEach(label => {
    label.textContent = selectedCode;
  });
}

// Updating Form Labels on Currency Change
currencySelect.addEventListener('change', () => {
  updateCurrencyLabels(currencySelect.value);
});

// Initializing on Page Load
document.addEventListener('DOMContentLoaded', () => {
  currencySelect.value = 'USD'; // or dynamically set from user/session
  updateCurrencyLabels(currencySelect.value);
});