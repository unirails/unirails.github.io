
//Line Listing
let SHL = {name:"深卡綫 Shimakaze Line ", short:"SHL", color:"dark_aqua"};
let SOL = {name:"飛渡外環綫 Stagecoach Outer Loop ", short:"SOL", color:"red"};
let REL = {name:"樂園綫 Resort Line ", short:"REL", color:"light_purple"};
let KOL = {name:"越海綫 Koshiumi Line ", short:"KOL", color:"red"};
let CSL = {name:"環海綫 Coastal Line ", short:"CSL", color:"blue"};
let GCL = {name:"飛渡田園綫 Garden City Line ", short:"GCL", color:"green"};
let UNA1 = {name:"Uni", color:"dark_red"};
let UNA2 = {name:"Rails ", color:"blue"};

//Station Listing
let STA = {name:"飛渡市 Stagecoach", interchange:[]};
let DAK = {name:"達卡 Dat Ka", interchange:[]};
let SHI = {name:"深卡島 Shimakaze", interchange:[]};
let SHC = {name:"深卡城 Shimakaze City", interchange:[SOL,REL,KOL]};
let SHN = {name:"沙草灣 Savanna Bay", interchange:[SOL,KOL]};
let SBC = {name:"技術城 SBC", interchange:[]};
let SHG = {name:"深卡關閘 Shimakaze Gateway", interchange:[CSL]};
let HOY = {name:"何遙 Ho Yiu", interchange:[GCL]};

//Current Line Info
let lineInfo = SHL;

//Current Station List
let stationArray = [STA,DAK,SHI,SHC,SHN,SBC,SHG,HOY];
let stationCount = stationArray.length;

//Tellraw generator
function generateAnnouncement(i,direction) {
  //Define Variables
  var paPreviousStation = "";
  var paNextStation1 = "";
  var paNextStation2 = "";
  var paNextStation3 = "";
  var ns1Interchange = "";
  var ns2Interchange = "";
  var ns3Interchange = "";
  var paFooter = '{"text":"&bsol;n"},{"text":"Hover over line codes for interchange details."},{"text":"&bsol;n"}]';

  //Create Interchange String
  function generateInterchangeString(stationArrayPosition, type) {
    var interchangeCount = stationArray[stationArrayPosition].interchange.length;
    var selectedStation = stationArray[stationArrayPosition].interchange;
    var existingInterchangeString = "";

    if (type == 1) {
      for (let c = 0; c < interchangeCount; c++) {
        var newInterchangeString = '{"text":"' + selectedStation[c].short + ' ","color":"dark_gray","hoverEvent":{"action":"show_text","value":["",{"text":"' + selectedStation[c].name +'"}]}},' + existingInterchangeString;
        existingInterchangeString = newInterchangeString;
      }
    } else {
      for (let c = 0; c < interchangeCount; c++) {
        var newInterchangeString = '{"text":"' + selectedStation[c].short + ' ","color":"' + selectedStation[c].color + '","hoverEvent":{"action":"show_text","value":["",{"text":"' + selectedStation[c].name +'"}]}},' + existingInterchangeString;
        existingInterchangeString = newInterchangeString;
      }
    }
    return newInterchangeString;
  }

  // Direction 1 (UP)
  if (direction == 1) {
    //Split into lines
    var paHeader = 'tellraw @a ["",{"text":"&bsol;n"},{"text":"----=[ ","bold":true,"color":"gold"},{"text":"' + lineInfo.name + '","color":"' + lineInfo.color +'"},{"text":"]=----","bold":true,"color":"gold"},{"text":"&bsol;n"},';

    if (stationArray[i-1] != undefined) {
      paPreviousStation = '{"text":"▽ ","color":"dark_gray"},{"text":"' + stationArray[i-1].name + '","color":"dark_gray"},{"text":"&bsol;n"},';
    }

    paNextStation1 = '{"text":"▼ ","color":"green"},{"text":"' + stationArray[i].name +'","bold":true,"color":"yellow"},{"text":"&bsol;n"},';
    if (stationArray[i].interchange.length != 0) {
      ns1Interchange = '{"text":"     Interchange: ","color":"white"},' + generateInterchangeString(i) + '{"text":"&bsol;n"},';
    }

    if (stationArray[i+1] != undefined) {
      paNextStation2 = '{"text":"▽ ","color":"green"},{"text":"' + stationArray[i+1].name + '","color":"gray"},{"text":"&bsol;n"},';
      if (stationArray[i+1].interchange.length != 0) {
        ns2Interchange = '{"text":"     Interchange: ","color":"dark_gray"},' + generateInterchangeString(i+1,1) + '{"text":"&bsol;n"},';
      }

    }

    if (stationArray[i+2] != undefined) {
      paNextStation3 = '{"text":"▽ ","color":"green"},{"text":"' + stationArray[i+2].name + '","color":"gray"},{"text":"&bsol;n"},';
      if (stationArray[i+2].interchange.length != 0) {
        ns3Interchange = '{"text":"     Interchange: ","color":"dark_gray"},' + generateInterchangeString(i+2,1) + '{"text":"&bsol;n"},';
      }
    }

    return paHeader + paPreviousStation + paNextStation1 + ns1Interchange + paNextStation2 + ns2Interchange + paNextStation3 + ns3Interchange + paFooter;
  } else if (direction == 2) {
    // Direction 2 (DN)
    //Split into lines
    var paHeader = 'tellraw @a ["",{"text":"&bsol;n"},{"text":"----=[ ","bold":true,"color":"gold"},{"text":"' + lineInfo.name + '","color":"' + lineInfo.color +'"},{"text":"]=----","bold":true,"color":"gold"},{"text":"&bsol;n"},';

    if (stationArray[i+1] != undefined) {
      paPreviousStation = '{"text":"▽ ","color":"dark_gray"},{"text":"' + stationArray[i+1].name + '","color":"dark_gray"},{"text":"&bsol;n"},';
    }

    paNextStation1 = '{"text":"▼ ","color":"green"},{"text":"' + stationArray[i].name +'","bold":true,"color":"yellow"},{"text":"&bsol;n"},';
    if (stationArray[i].interchange.length != 0) {
      ns1Interchange = '{"text":"     Interchange: ","color":"white"},' + generateInterchangeString(i) + '{"text":"&bsol;n"},';
    }

    if (stationArray[i-1] != undefined) {
      paNextStation2 = '{"text":"▽ ","color":"green"},{"text":"' + stationArray[i-1].name + '","color":"gray"},{"text":"&bsol;n"},';
      if (stationArray[i-1].interchange.length != 0) {
        ns2Interchange = '{"text":"     Interchange: ","color":"dark_gray"},' + generateInterchangeString(i-1,1) + '{"text":"&bsol;n"},';
      }

    }

    if (stationArray[i-2] != undefined) {
      paNextStation3 = '{"text":"▽ ","color":"green"},{"text":"' + stationArray[i-2].name + '","color":"gray"},{"text":"&bsol;n"},';
      if (stationArray[i-2].interchange.length != 0) {
        ns3Interchange = '{"text":"     Interchange: ","color":"dark_gray"},' + generateInterchangeString(i-2,1) + '{"text":"&bsol;n"},';
      }
    }

    return paHeader + paPreviousStation + paNextStation1 + ns1Interchange + paNextStation2 + ns2Interchange + paNextStation3 + ns3Interchange + paFooter;
  }
}

for (let i = 0; i < stationCount; i++) {
  let existingHTML = document.getElementById("upStationList").innerHTML;
  let stationNameHeader = "<h2>" + stationArray[i].name + "</h2>";
  let announcementString = '<div class="form-group"><textarea class="form-control"rows="5" onclick="this.focus();this.select()" id="station-' + i + '" readonly>' + generateAnnouncement(i,1); + '</textarea></div></br>';
  document.getElementById("upStationList").innerHTML = existingHTML + stationNameHeader + announcementString;
}

for (let i = stationCount-1; i > -1; i--) {
  let existingHTML = document.getElementById("dnStationList").innerHTML;
  let stationNameHeader = "<h2>" + stationArray[i].name + "</h2>";
  console.log("a");
  let announcementString = '<div class="form-group"><textarea class="form-control"rows="5" onclick="this.focus();this.select()" id="station-' + i + '" readonly>' + generateAnnouncement(i,2); + '</textarea></div></br>';
  document.getElementById("dnStationList").innerHTML = existingHTML + stationNameHeader + announcementString;
}
