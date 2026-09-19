function Sub() {
  let n, k, r, e, v, sum, avg;
  n = document.getElementById('aname').value;
  k = parseFloat(document.getElementById('am').value);
  r = parseFloat(document.getElementById('aj').value);
  e = parseFloat(document.getElementById('ad').value);
  v = parseFloat(document.getElementById('an').value);

  // Calculating Total and Average
  sum = k + r + e + v;
  avg = sum / 4;

  // Display on Student Data
  let newTable = document.getElementById('TableScore');
  let row = newTable.insertRow(-1);

  let cellName = row.insertCell(0);
  let cellTotal = row.insertCell(1);
  let cellAvg = row.insertCell(2);
  let cellResult = row.insertCell(3);

  cellName.innerHTML = n;
  cellTotal.innerHTML = sum;
  cellAvg.innerHTML = avg.toFixed(2);

  if (avg >= 70) {
    cellResult.innerHTML = "<span style='color:green'>Pass</span>";
  } else {
    cellResult.innerHTML = "<span style='color:red'>Fail</span>";
  }
}

