var up = document.getElementById("upStationList");
var dn = document.getElementById("dnStationList");

function toggleUp() {
  if (up.style.display === "none") {
    up.style.display = "block";
  } else {
    up.style.display = "none";
  }
  if (dn.style.display === "block") {
    dn.style.display = "none";
  }
}

function toggleDn() {
  if (dn.style.display === "none") {
    dn.style.display = "block";
  } else {
    dn.style.display = "none";
  }
  if (up.style.display === "block") {
    up.style.display = "none";
  }
}

function getLineInput() {
  var x = document.getElementById("selectLineName").value;
  if (x == "SHL") {
    setLine(SHL);
  } else if (x == "KOL") {
    setLine(KOL);
  } else if (x == "CDLExpress") {
    setLine(CDLExpress);
  } else if (x == "CDLRegular") {
    setLine(CDLRegular);
  } else if (x == "CIL") {
    setLine(CIL);
  } else if (x == "CDLRExpress") {
    setLine(CDLRExpress);
  } else if (x == "CDLLtdExST") {
    setLine(CDLLtdExST);
  } else if (x == "CDLLtdExKG") {
    setLine(CDLLtdExKG);
  } else if (x == "CDLLtdExAT") {
    setLine(CDLLtdExAT);
  } else if (x == "SOL") {
    setLine(SOL);
  }
}
