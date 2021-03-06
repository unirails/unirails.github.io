//Line Listing
var SHL = {name:"深卡綫 Shimakaze Line", short:"SHL", color:"#008AAB"};
var SOL = {name:"飛渡外環綫 Stagecoach Outer Loop", short:"SOL", color:"#96262C"};
var REL = {name:"樂園綫 Resort Line", short:"REL", color:"#ED6EA7"};
var KOL = {name:"越海綫 Koshiumi Line", short:"KOL", color:"#9E6850"};
var CSL = {name:"環海綫 Coastal Line", short:"CSL", color:"#008BCE"};
var GCL = {name:"飛渡田園綫 Garden City Line", short:"GCL", color:"#70D44B"};
var EWL = {name:"東西綫 East West Line", short:"EWL", color:"#00AE42"};
var CDL = {name:"張底綫 Cheung Dai Line", short:"CDL", color:"#FFB71B"};
var WHL = {name:"湖海綫 Wu Hoi Line", short:"WHL", color:"#6D2A5B"};
var NEX = {name:"新手特快 Newcommer's Express", short:"NEX", color:"#9D8CE2"};
var NAL = {name:"南埔綫 Nampoa Line", short:"NAL", color:"#B4008D"};
var NSL = {name:"南北綫 North South Line", short:"NSL", color:"#5EB3E4"};
var NSX = {name:"南北綫快速 North South Line Rapid", short:"NSX", color:"#8DC6E8"};
var PRL = {name:"第一綫 Primum Line", short:"PRL", color:"#E1251B"};
var HOL = {name:"北陸綫 Hokuriku Line", short:"HOL", color:"#8347AD"};
var CIL = {name:"貫城綫 Citylink", short:"CIL", color:"#BB911A"};
var RIL = {name:"臨空綫 Rinku Line", short:"RIL", color:"#6D3628"};
var CEL = {name:"中央綫 Central Line", short:"CEL", color:"#004D71"};
var SNL = {name:"雪城綫 Snowy Line", short:"SNL", color:"#FF8300"};
var PRL = {name:"第一綫 Primum Line", short:"PRL", color:"#E1251B"};
var rt934 = {name:"廣播 Announcement", short:"", color:"gold"};
var CDLRegular = {name:"張底綫各停 Cheung Dai Line Regular", short:"CDL", color:"yellow", showVar:CDL};
var CDLExpress = {name:"張底綫急行 Cheung Dai Line Express", short:"CDL", color:"yellow", showVar:CDL};
var CDLRExpress = {name:"張底綫快速急行 Cheung Dai Line R.Express", short:"CDL", color:"gold", showVar:CDL};
var CDLLtdExST = {name:"特急 史丹利 Ltd Express Stanley", short:"CDL", color:"yellow", showVar:CDL};
var CDLLtdExKG = {name:"特急 海岸 Ltd Express Kaigan", short:"CDL", color:"yellow", showVar:CDL};
var CDLLtdExAT = {name:"特急 愛宕 Ltd Express Atago", short:"CDL", color:"yellow", showVar:CDL};

//Station Listing
var STA = {name:"飛渡市 Stagecoach", interchange:[NSL,NSX,PRL,NAL,NEX,CDL,SHL]};
var SHI = {name:"深卡島 Shimakaze", interchange:[]};
var SHC = {name:"深卡城 Shimakaze City", interchange:[SOL,REL,SHL,KOL]};
var SAB = {name:"沙草灣 Savanna Bay", interchange:[SOL,KOL,SHL]};
var SBC = {name:"技術城 SBC", interchange:[]};
var SHG = {name:"深卡關閘 Shimakaze Gateway", interchange:[CSL,HOL,SHL]};
var HOY = {name:"何遙 Ho Yiu", interchange:[GCL,SHL]};
var ARA = {name:"荒島 Arashima", interchange:[SOL,HOL,KOL]};
var JOY = {name:"祖亞 Joya", interchange:[CIL,RIL]};
var GLR = {name:"格拉芬河 Glavon River", interchange:[]};
var OWE = {name:"奧運 Owen", interchange:[CIL,PRL,EWL]};
var SUL = {name:"雪琳 Suet Lam", interchange:[CIL,CEL,SOL,SNL]};
var CEN = {name:"市中心 Central", interchange:[NSL,CEL,CIL,SOL]};
var THB = {name:"大灝灣 Ta Ho Bay", interchange:[CEL,CIL,SOL]};
var BAW = {name:"蝙洞西 Batcave West", interchange:[]};
var TKP = {name:"天景廣場 Tin King Plaza", interchange:[]};
var TIL = {name:"天立 Tin Lap	", interchange:[CDL,CIL]};
var ROS = {name:"勞斯 Rose", interchange:[]};
var DAK = {name:"達卡 Dat Ka", interchange:[CDL,WHL,EWL,NEX,SHL,SOL]};
var KIB = {name:"健波 Kin Ball", interchange:[]};
var WIN = {name:"維尼 Winnie", interchange:[]};
var KES = {name:"祈心 Kei Shum", interchange:[]};
var KYL = {name:"高怡里 Ko Yi Lane", interchange:[]};
var CHD = {name:"張底 Cheung Dai", interchange:[]};
var CHY = {name:"政逸 Ching Yat", interchange:[CDL,CSL,KOL]};
var OMT = {name:"奄列城 Omelette Town", interchange:[CDL,KOL,WHL]};
var MUK = {name:"武藏小次郎 Musashi-Kojiro", interchange:[]};
var CHG = {name:"秋介 Chau Gai", interchange:[]};
var SHM = {name:"島村 Shimamura", interchange:[]};
var WSA = {name:"西島村蘋果公園 West Shimamura Apple Park", interchange:[]};
var SCY = {name:"蘇格蘭場 Scotland Yard", interchange:[]};
var SUW = {name:"夏柳 Summer Willow", interchange:[]};
var STT = {name:"史丹利城 Stanley Town", interchange:[]};
var UNI = {name:"大學 University", interchange:[CSL]};
var BNT = {name:"二號橋 Bridge No. 2", interchange:[CSL]};
var REN = {name:"雲妮 Renee", interchange:[CSL,SOL]};
var FAI = {name:"芬妮島 Fanny Island", interchange:[]};
var JIN = {name:"地名 Ji Na", interchange:[HOL,SOL]};
var LEL = {name:"利良 Lee Leung", interchange:[HOL,NSX]};
var ENG = {name:"吳辰 Engson", interchange:[NSX]};
var AIR = {name:"機場 Airport", interchange:[NSX]};
var AMA = {name:"整備場 Airport Maintenance Area", interchange:[]};
var RIP = {name:"臨空公園 Rinku Park", interchange:[]};
var YKP = {name:"欽敬半島 Yam King Peninsula", interchange:[RIL,CEL,SOL]};
var TRC = {name:"幽澳 Tranquil Cove", interchange:[EWL,CEL,SOL]};
var OPH = {name:"歌劇院 Opera House", interchange:[PRL,CEL,SOL]};
var BEN = {name:"本生 Benson", interchange:[]};
var BAS = {name:"怡灣 Bay Shree", interchange:[CDL,WHL,CSL,SOL]};
var RCI = {name:"鐵研市 Railway City", interchange:[EWL,NSL,NSX,REL,CSL,SNL]};
var ICS = {name:"聯合國總部 ICSU Headquaters", interchange:[PRL,CEL,CSL]};
var RIT = {name:"臨空城 Rinku Town", interchange:[]};
var EAP = {name:"東角 East Point", interchange:[]};
var WEP = {name:"西角 West Point", interchange:[]};
var CRT = {name:"郵輪碼頭 Cruise Terminal", interchange:[CSL,CEL,EWL]};
var CHL = {name:"澤琳 Chak Lam", interchange:[PRL,EWL]};
var BAY = {name:"灣岸 Baycoast", interchange:[]};
var MEP = {name:"紀念公園 Memorial Park", interchange:[NSL,NSX,PRL]};
var KCV = {name:"高正谷 Ko Ching Valley", interchange:[]};
var TFY = {name:"桃花源 To Fa Yuen", interchange:[]};
var NAN = {name:"南條 Nanjo", interchange:[]};
var VIB = {name:"維多利亞橋 Victoria Bridge", interchange:[PRL,SNL]};
var BAT = {name:"蝙蝠洞 Batcave", interchange:[]};
var CIH = {name:"市政廳 City Hall", interchange:[NSL,PRL]};
var SNK = {name:"小傲角 Siu Ngo Kok", interchange:[SNL]};
var announce934 = {name:"九巴九三四號線特快往來荃灣西約及中上環灣仔乘客可於西隧免費轉乘九三六往來銅鑼灣詳情請瀏覽九巴網頁或鴨一九三三", interchange:[]};
var LEN = {name:"連儂 Lennon", interchange:[]};
var CAN = {name:"大峽谷樂園 Canyonland", interchange:[]};

SHL.stations = [STA,DAK,SHI,SHC,SAB,SBC,SHG];
KOL.stations = [OMT,CHY,SHC,SAB,ARA];
CIL.stations = [JOY,GLR,OWE,SUL,CEN,THB,BAW,TIL];
CDLRegular.stations = [BAW,TIL,ROS,DAK,KIB,WIN,KES,KYL,CHD,BAS,CHY];
CDLExpress.stations = [STA,TKP,TIL,DAK,CHD,OMT,MUK,CHG,SHM,WSA,SCY,SUW,STT];
CDLRExpress.stations = [STA,TKP,TIL,DAK,CHD,OMT,SHM,STT];
CDLLtdExST.stations = [STA,CHD,SHM,STT];
CDLLtdExKG.stations = [STA,CHD,CHY,UNI,BNT,SHG];
CDLLtdExAT.stations = [RCI,ICS,OMT,SHM,STT];
SOL.stations = [CEN,THB,BAW,TIL,ROS,DAK,KIB,WIN,KES,KYL,CHD,BAS,CHY,REN,FAI,SHC,SAB,ARA,JIN,LEL,ENG,AIR,AMA,RIT,RIP,YKP,TRC,OPH,BEN,SUL,CEN,THB,BAW,TIL];
HOL.stations = [SHG,ARA,JIN,LEL];
EWL.stations = [OWE,TRC,EAP,RCI,WEP,CRT,CHL,BAY,DAK];
PRL.stations = [MEP,OPH,OWE,KCV,TFY,NAN,STA,VIB,BAT,CHL,ICS,CIH,MEP,OPH,OWE];
CEL.stations = [YKP,TRC,OPH,BEN,SUL,CEN,SNK,THB,ICS,CRT];
REL.stations = [RCI, LEN, CAN, SHC]
rt934.stations = [announce934]
