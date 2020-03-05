//Line Listing
var SHL = {name:"深卡綫 Shimakaze Line", short:"SHL", color:"dark_aqua"};
var SOL = {name:"飛渡外環綫 Stagecoach Outer Loop", short:"SOL", color:"dark_red"};
var REL = {name:"樂園綫 Resort Line", short:"REL", color:"light_purple"};
var KOL = {name:"越海綫 Koshiumi Line", short:"KOL", color:"red"};
var CSL = {name:"環海綫 Coastal Line", short:"CSL", color:"blue"};
var GCL = {name:"飛渡田園綫 Garden City Line", short:"GCL", color:"green"};
var EWL = {name:"東西綫 East West Line", short:"EWL", color:"green"};
var CDL = {name:"張底綫 Cheung Dai Line", short:"CDL", color:"gold"};
var WHL = {name:"湖海綫 Wu Hoi Line", short:"WHL", color:"dark_purple	"};
var NEX = {name:"新手特快 Newcommer's Express", short:"NEX", color:"blue"};
var NAL = {name:"南埔綫 Nampoa Line", short:"NPL", color:"light_purple"};
var NSL = {name:"南北綫 North South Line", short:"NSL", color:"aqua"};
var PRL = {name:"第一綫 Primum Line", short:"PRL", color:"red"};
var HOL = {name:"北陸綫 Hokuriku Line", short:"HOL", color:"dark_purple"};
var CIL = {name:"貫城綫 Citylink", short:"CIL", color:"yellow"};
var RKL = {name:"臨空綫 Rinku Line", short:"RKL", color:"gold"};
var CEL = {name:"中央綫 Central Line", short:"RKL", color:"dark_blue"};
var CDLRegular = {name:"張底綫各停 Cheung Dai Line Regular", short:"CDL", color:"gold", showVar:CDL};
var CDLExpress = {name:"張底綫急行 Cheung Dai Line Express", short:"CDL", color:"gold", showVar:CDL};
var CDLRExpress = {name:"張底綫快速 Cheung Dai Line Rapid Express", short:"CDL", color:"gold", showVar:CDL};
var CDLLtdExST = {name:"張底綫特急史丹利 Cheung Dai Line Ltd Express Stanley", short:"CDL", color:"gold", showVar:CDL};
var CDLLtdExKG = {name:"張底綫特急史海岸 Cheung Dai Line Ltd Express Kaigan", short:"CDL", color:"gold", showVar:CDL};
var CDLLtdExAT = {name:"張底綫特急愛宕 Cheung Dai Line Ltd Express Atago", short:"CDL", color:"gold", showVar:CDL};


//Station Listing
var STA = {name:"飛渡市 Stagecoach", interchange:[NSL,PRL,NAL,NEX,CDL,SHL]};
var SHI = {name:"深卡島 Shimakaze", interchange:[]};
var SHC = {name:"深卡城 Shimakaze City", interchange:[SOL,REL,SHL,KOL]};
var SHN = {name:"沙草灣 Savanna Bay", interchange:[SOL,KOL,SHL]};
var SBC = {name:"技術城 SBC", interchange:[]};
var SHG = {name:"深卡關閘 Shimakaze Gateway", interchange:[CSL,HOL,SHL]};
var HOY = {name:"何遙 Ho Yiu", interchange:[GCL,SHL]};
var ARA = {name:"荒島 Arashima", interchange:[SOL,HOL,KOL]};
var JOY = {name:"祖亞 Joya", interchange:[CIL,RKL]};
var GLR = {name:"格拉芬河 Glavon River", interchange:[]};
var OWE = {name:"奧運 Owen", interchange:[CIL,PRL,EWL]};
var SUL = {name:"雪琳 Suet Lam", interchange:[CIL,CEL,SOL]};
var CEN = {name:"市中心 Central", interchange:[NSL,CEL,CIL]};
var BAW = {name:"大灝灣 Ta Ho Bay", interchange:[CEL,CIL]};
var TKP = {name:"天景廣場 Tin King Plaza", interchange:[]};
var TIL = {name:"天立 Tin Lap	", interchange:[CDL,CIL]};
var ROS = {name:"勞斯 Rose", interchange:[CEL,CIL]};
var DAK = {name:"達卡 Dat Ka", interchange:[CDL,WHL,EWL,NEX,SHL,SOL]};
var KIB = {name:"健波 Kin Ball", interchange:[]};
var WIN = {name:"維尼 Winnie", interchange:[]};
var KES = {name:"祈心 Kei Shum", interchange:[]};
var KYL = {name:"高怡里 Ko Yee Lane", interchange:[]};
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



SHL.stations = [STA,DAK,SHI,SHC,SHN,SBC,SHG];
KOL.stations = [OMT,CHY,SHC,SHN,ARA];
CDLRegular.stations = [JOY];
CDLExpress.stations = [STA,TKP,TIL,DAK,CHD,OMT,MUK,CHG,SHM,WSA,SCY,SUW,STT];
