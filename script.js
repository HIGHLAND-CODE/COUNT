// Catálogo de COUNT, igual que en Gescom. Generado 2026-11-12 15:14 UTC desde el catálogo y stock sincronizados de CobroSync. 581 productos, sin límite de día ni de proveedor.
// Reemplaza el arreglo "productos" que está al inicio de script.js. UXB: el de 611 (la empresa más completa); siempre el de 611 cuando el código existe ahí (salvo los jugos Big C, que se venden por unidad: se conserva el de COUNT o el de su empresa); si no existe en 611, el que ya tenía COUNT y, si no, el de la propia empresa.
const productos = [
  {"codigo":"11400002","descripcion":"Alimento Big C Ban/frutilla 12x1000","unidades_x_bulto":12,"proveedor":"BIGAR SA"},
  {"codigo":"11400005","descripcion":"Alimento Big C Ban/frutilla 18x200","unidades_x_bulto":18,"proveedor":"BIGAR SA"},
  {"codigo":"11400012","descripcion":"Alimento Big C Durazno 12x1000","unidades_x_bulto":12,"proveedor":"BIGAR SA"},
  {"codigo":"11400013","descripcion":"Alimento Big C Durazno 18x200","unidades_x_bulto":18,"proveedor":"BIGAR SA"},
  {"codigo":"11400008","descripcion":"Alimento Big C Manzana 12x1000","unidades_x_bulto":12,"proveedor":"BIGAR SA"},
  {"codigo":"11400007","descripcion":"Alimento Big C Manzana 18x200","unidades_x_bulto":18,"proveedor":"BIGAR SA"},
  {"codigo":"11400003","descripcion":"Alimento Big C Multifrutal 12x1000","unidades_x_bulto":12,"proveedor":"BIGAR SA"},
  {"codigo":"11400006","descripcion":"Alimento Big C Multifrutal 18x200","unidades_x_bulto":18,"proveedor":"BIGAR SA"},
  {"codigo":"11400001","descripcion":"Alimento Big C Naranja 12x1000","unidades_x_bulto":12,"proveedor":"BIGAR SA"},
  {"codigo":"11400004","descripcion":"Alimento Big C Naranja 18x200","unidades_x_bulto":18,"proveedor":"BIGAR SA"},
  {"codigo":"11400009","descripcion":"Alimento Big C Pera 12x1000","unidades_x_bulto":12,"proveedor":"BIGAR SA"},
  {"codigo":"11400011","descripcion":"Alimento Big C Pera 18x200","unidades_x_bulto":18,"proveedor":"BIGAR SA"},
  {"codigo":"11400010","descripcion":"Pure de Tomate Big Choice 1040 grs","unidades_x_bulto":12,"proveedor":"BIGAR SA"},
  {"codigo":"11400014","descripcion":"Pure de Tomate Big Choice 200 grs","unidades_x_bulto":18,"proveedor":"BIGAR SA"},
  {"codigo":"11900004","descripcion":"Kaos Vodka + Guarana 12x 473ml","unidades_x_bulto":12,"proveedor":"Blue Demon / Kaos (proveedor 119)"},
  {"codigo":"10600018","descripcion":"Encendedor Classic Shark .20x25u","unidades_x_bulto":500,"proveedor":"BUHL SA"},
  {"codigo":"11900003","descripcion":"BLUE DEMON FREE 12X473ML","unidades_x_bulto":1,"proveedor":"BUSINES INDUSTRIAL C.C.A.V. S.R.L"},
  {"codigo":"11900002","descripcion":"BLUE DEMON ORIGINAL 12X473 ML","unidades_x_bulto":1,"proveedor":"BUSINES INDUSTRIAL C.C.A.V. S.R.L"},
  {"codigo":"11900001","descripcion":"BLUE DEMON TROPICAL 12 X 473ML","unidades_x_bulto":1,"proveedor":"BUSINES INDUSTRIAL C.C.A.V. S.R.L"},
  {"codigo":"11800007","descripcion":"Alf. Fulbito Choc 44 x 30 gr","unidades_x_bulto":1,"proveedor":"COMPAÑIA AMERICANA"},
  {"codigo":"11800008","descripcion":"Alf. Fulbito Mani 44 X 30gr","unidades_x_bulto":1,"proveedor":"COMPAÑIA AMERICANA"},
  {"codigo":"11800025","descripcion":"Cubanito Smacks 48 X 25gr","unidades_x_bulto":1,"proveedor":"COMPAÑIA AMERICANA"},
  {"codigo":"11800024","descripcion":"Oblea Smack Choc Mani 48 X 33 Gr","unidades_x_bulto":1,"proveedor":"COMPAÑIA AMERICANA"},
  {"codigo":"11800027","descripcion":"Picnic Bizcochuelo 40 Uni X 38 Gr","unidades_x_bulto":1,"proveedor":"COMPAÑIA AMERICANA"},
  {"codigo":"12500002","descripcion":"Yerba Mate Playadito C/ Palo 10x500gr","unidades_x_bulto":10,"proveedor":"Cooperativa Agrícola Colonia Liebig"},
  {"codigo":"12500001","descripcion":"Yerba Mate Playadito C/ Palo 5x1000gr","unidades_x_bulto":5,"proveedor":"Cooperativa Agrícola Colonia Liebig"},
  {"codigo":"11500002","descripcion":"ALFAJOR ELIXIR FANTOCHE SUPER DDL  12 x 7","unidades_x_bulto":12,"proveedor":"DIELO S.A"},
  {"codigo":"11500003","descripcion":"ALFAJOR FANTOCHE ELIXIR 70% CACAO 12 x 60 grs","unidades_x_bulto":12,"proveedor":"DIELO S.A"},
  {"codigo":"11500004","descripcion":"ALFAJOR FANTOCHE ELIXIR CHOCOLATE BLANCO 12 x 60 g","unidades_x_bulto":12,"proveedor":"DIELO S.A"},
  {"codigo":"11500013","descripcion":"Fantoche Alf. Simple Pescado Raul Blanco x12","unidades_x_bulto":18,"proveedor":"DIELO S.A"},
  {"codigo":"11500019","descripcion":"Fantoche Alf. Simple Pescado Raul Negro x12","unidades_x_bulto":18,"proveedor":"DIELO S.A"},
  {"codigo":"11500011","descripcion":"Fantoche Alf. Triple Red Velvet  12 xg100","unidades_x_bulto":12,"proveedor":"DIELO S.A"},
  {"codigo":"11500006","descripcion":"fantoche ALFAJOR SIMPLE DAY  12 x 50 grs-","unidades_x_bulto":12,"proveedor":"DIELO S.A"},
  {"codigo":"11500005","descripcion":"fantoche ALFAJOR SIMPLE NIGHT  12 x 50 grs.","unidades_x_bulto":12,"proveedor":"DIELO S.A"},
  {"codigo":"11500010","descripcion":"fantoche ALFAJOR TRIPLE  12 DAY x 85 grs.","unidades_x_bulto":12,"proveedor":"DIELO S.A"},
  {"codigo":"11500009","descripcion":"fantoche ALFAJOR TRIPLE  12 NIGHT x 85 grs.","unidades_x_bulto":12,"proveedor":"DIELO S.A"},
  {"codigo":"11500008","descripcion":"fantoche ALFAJOR TRIPLE BLANCO   24 x 85 grs-","unidades_x_bulto":24,"proveedor":"DIELO S.A"},
  {"codigo":"11500007","descripcion":"fantoche ALFAJOR TRIPLE NEGRO 24 x 85 grs.","unidades_x_bulto":24,"proveedor":"DIELO S.A"},
  {"codigo":"11500032","descripcion":"Fantoche Budin  C/Fruta 18X200g","unidades_x_bulto":18,"proveedor":"DIELO S.A"},
  {"codigo":"11500034","descripcion":"Fantoche Budin C/Chips 18X200g","unidades_x_bulto":18,"proveedor":"DIELO S.A"},
  {"codigo":"11500041","descripcion":"Fantoche Budin marmolado 18X200g","unidades_x_bulto":18,"proveedor":"DIELO S.A"},
  {"codigo":"11500033","descripcion":"Fantoche Budin S/Fruta 18X200g","unidades_x_bulto":18,"proveedor":"DIELO S.A"},
  {"codigo":"11500014","descripcion":"fantoche MINIALFAJOR CHOCOLATE 25 gr x 60 Un.","unidades_x_bulto":24,"proveedor":"DIELO S.A"},
  {"codigo":"11500015","descripcion":"fantoche MINIALFAJOR LECHE 25 gr x  60 Un.","unidades_x_bulto":24,"proveedor":"DIELO S.A"},
  {"codigo":"11500037","descripcion":"Fantoche Pan Dulce  C/Chips 8x400g","unidades_x_bulto":8,"proveedor":"DIELO S.A"},
  {"codigo":"11500036","descripcion":"Fantoche Pan Dulce C/Fruta 8x400g","unidades_x_bulto":8,"proveedor":"DIELO S.A"},
  {"codigo":"11500035","descripcion":"Fantoche Pan Dulce Marmolado 8x400g","unidades_x_bulto":8,"proveedor":"DIELO S.A"},
  {"codigo":"11500038","descripcion":"Fantoche Pan Dulce S/Frutas 8x400g","unidades_x_bulto":8,"proveedor":"DIELO S.A"},
  {"codigo":"11500018","descripcion":"GALL. FANTOCHE TAPITAS 12 X350GR","unidades_x_bulto":12,"proveedor":"DIELO S.A"},
  {"codigo":"11500323","descripcion":"Pan Dulce Pescado Raul 8x400g","unidades_x_bulto":8,"proveedor":"DIELO S.A"},
  {"codigo":"1040915","descripcion":"Bizc Don Satur Vegetal Salado 30x170g","unidades_x_bulto":30,"proveedor":"DON SATUR S R L"},
  {"codigo":"10400215","descripcion":"Bizcochos Don Satur Agridulces 30x200g","unidades_x_bulto":30,"proveedor":"DON SATUR S R L"},
  {"codigo":"10400315","descripcion":"Bizcochos Don Satur Negritos 30x200g","unidades_x_bulto":30,"proveedor":"DON SATUR S R L"},
  {"codigo":"10400115","descripcion":"Bizcochos Don Satur Salados 30x200g","unidades_x_bulto":30,"proveedor":"DON SATUR S R L"},
  {"codigo":"10404140","descripcion":"Budin Con Chip Chocolate Don Satur15 paq x 190 gr","unidades_x_bulto":15,"proveedor":"DON SATUR S R L"},
  {"codigo":"10404120","descripcion":"Budin Con Fruta Don Satur 15 paq x 190gr","unidades_x_bulto":15,"proveedor":"DON SATUR S R L"},
  {"codigo":"10404110","descripcion":"Budin De Vainilla Don Satur 15 paq x 190 gr","unidades_x_bulto":15,"proveedor":"DON SATUR S R L"},
  {"codigo":"10404130","descripcion":"Budin Marmolado Don SAtur15 paq x 190 gr","unidades_x_bulto":15,"proveedor":"DON SATUR S R L"},
  {"codigo":"10406041","descripcion":"Don Satur Magdalena Chocolate Rell, DDL 10x2","unidades_x_bulto":10,"proveedor":"DON SATUR S R L"},
  {"codigo":"10406031","descripcion":"Don Satur Magdalena Marmolada 10x200","unidades_x_bulto":10,"proveedor":"DON SATUR S R L"},
  {"codigo":"10406021","descripcion":"Don Satur Magdalena v Rell. DDL 10x200g","unidades_x_bulto":10,"proveedor":"DON SATUR S R L"},
  {"codigo":"10406051","descripcion":"Don Satur Magdalena V. con chip Chocolates 10x200g","unidades_x_bulto":10,"proveedor":"DON SATUR S R L"},
  {"codigo":"10406011","descripcion":"Don Satur Magdalena Vainilla 10x200g","unidades_x_bulto":10,"proveedor":"DON SATUR S R L"},
  {"codigo":"10408030","descripcion":"Don satur Pepas x 15 x 300 Grs","unidades_x_bulto":15,"proveedor":"DON SATUR S R L"},
  {"codigo":"10403130","descripcion":"Pan Dulce Don Satur Con Chip Chocolate 6 paq x 400 gr","unidades_x_bulto":6,"proveedor":"DON SATUR S R L"},
  {"codigo":"10403110","descripcion":"Pan dulce don satur Con Frutas 6 paq x 400 gr","unidades_x_bulto":6,"proveedor":"DON SATUR S R L"},
  {"codigo":"10403120","descripcion":"Pan dulce Don Satur Sin Frutas 6 paq x 400 gr","unidades_x_bulto":6,"proveedor":"DON SATUR S R L"},
  {"codigo":"8110000750","descripcion":"DURACELL BATERIA 9V X1 BLISTER","unidades_x_bulto":1,"proveedor":"GENOMMA LABORATORIES ARGENTINA S.A."},
  {"codigo":"11100018","descripcion":"Duracell Pila Alcalina Aa x2 Tira 6","unidades_x_bulto":60,"proveedor":"GENOMMA LABORATORIES ARGENTINA S.A."},
  {"codigo":"11100019","descripcion":"Duracell Pila Alcalina Aaa x2 Tira 6","unidades_x_bulto":60,"proveedor":"GENOMMA LABORATORIES ARGENTINA S.A."},
  {"codigo":"8110000751","descripcion":"DURACELL PILA ALCALINA C2 X2 BLISTER","unidades_x_bulto":1,"proveedor":"GENOMMA LABORATORIES ARGENTINA S.A."},
  {"codigo":"8110000752","descripcion":"DURACELL PILA ALCALINA D2 X2 BLISTER","unidades_x_bulto":1,"proveedor":"GENOMMA LABORATORIES ARGENTINA S.A."},
  {"codigo":"11100016","descripcion":"Maq de Afeitar Groomen 300 x12","unidades_x_bulto":144,"proveedor":"GENOMMA LABORATORIES ARGENTINA S.A."},
  {"codigo":"11100313","descripcion":"Maq de Afeitar Groomen 500 x12","unidades_x_bulto":144,"proveedor":"GENOMMA LABORATORIES ARGENTINA S.A."},
  {"codigo":"11100007","descripcion":"Suerox Arandano Pomelo 630ml","unidades_x_bulto":6,"proveedor":"GENOMMA LABORATORIES ARGENTINA S.A."},
  {"codigo":"11100005","descripcion":"Suerox Frutilla Kiwi 630ml","unidades_x_bulto":6,"proveedor":"GENOMMA LABORATORIES ARGENTINA S.A."},
  {"codigo":"11100009","descripcion":"Suerox Frutos Rojos 630ml","unidades_x_bulto":6,"proveedor":"GENOMMA LABORATORIES ARGENTINA S.A."},
  {"codigo":"11100011","descripcion":"Suerox Limonada x6x630ml","unidades_x_bulto":6,"proveedor":"GENOMMA LABORATORIES ARGENTINA S.A."},
  {"codigo":"11100006","descripcion":"Suerox Manzana 630ml","unidades_x_bulto":6,"proveedor":"GENOMMA LABORATORIES ARGENTINA S.A."},
  {"codigo":"11302644","descripcion":"ALF MANTECOL RELL PASTA MANTECOL 24 X 40G","unidades_x_bulto":24,"proveedor":"GEORGALOS HNOS S A I C A"},
  {"codigo":"11300008","descripcion":"COLMENITA CHOC. BLANCO 24X25G","unidades_x_bulto":24,"proveedor":"GEORGALOS HNOS S A I C A"},
  {"codigo":"11300007","descripcion":"COLMENITA CHOC.LECHE 24X25G","unidades_x_bulto":24,"proveedor":"GEORGALOS HNOS S A I C A"},
  {"codigo":"11303782","descripcion":"CONFITE DE MANI 36X80gr","unidades_x_bulto":36,"proveedor":"GEORGALOS HNOS S A I C A"},
  {"codigo":"11301608","descripcion":"CONFITE DE MANI TRICOLOR NAMUR 60X80gr","unidades_x_bulto":60,"proveedor":"GEORGALOS HNOS S A I C A"},
  {"codigo":"11303790","descripcion":"Confites Infantiles Frutas Georgalos 36xx80g","unidades_x_bulto":36,"proveedor":"GEORGALOS HNOS S A I C A"},
  {"codigo":"11300055","descripcion":"FLYN PAFF estuche frutilla x70u","unidades_x_bulto":12,"proveedor":"GEORGALOS HNOS S A I C A"},
  {"codigo":"11300054","descripcion":"FLYN PAFF estuche tutu fruti x70u","unidades_x_bulto":12,"proveedor":"GEORGALOS HNOS S A I C A"},
  {"codigo":"11300053","descripcion":"FLYN PAFF estuche Uva x70u","unidades_x_bulto":12,"proveedor":"GEORGALOS HNOS S A I C A"},
  {"codigo":"11302519","descripcion":"Full Maní Alfajor x24x40g","unidades_x_bulto":24,"proveedor":"GEORGALOS HNOS S A I C A"},
  {"codigo":"11303770","descripcion":"GARAPINADA DE MANI 36X80grs","unidades_x_bulto":36,"proveedor":"GEORGALOS HNOS S A I C A"},
  {"codigo":"11301460","descripcion":"GARAPINADA DE MANI NAMUR 36X60gr","unidades_x_bulto":36,"proveedor":"GEORGALOS HNOS S A I C A"},
  {"codigo":"11303772","descripcion":"GARRAPINADA DE MANI 36X100grs","unidades_x_bulto":36,"proveedor":"GEORGALOS HNOS S A I C A"},
  {"codigo":"11303775","descripcion":"Garrapiñada de almendras 24x80g","unidades_x_bulto":24,"proveedor":"GEORGALOS HNOS S A I C A"},
  {"codigo":"11343901","descripcion":"LENGUETAZO TUTTI FRUTTI X 32u","unidades_x_bulto":18,"proveedor":"GEORGALOS HNOS S A I C A"},
  {"codigo":"11301189","descripcion":"MANI C/CHOC CONF 24X100gr","unidades_x_bulto":24,"proveedor":"GEORGALOS HNOS S A I C A"},
  {"codigo":"11301469","descripcion":"MANI C/CHOC NAMUR 60X80gr","unidades_x_bulto":60,"proveedor":"GEORGALOS HNOS S A I C A"},
  {"codigo":"11303774","descripcion":"MANI CON CHOCOLATE 24X120gr","unidades_x_bulto":24,"proveedor":"GEORGALOS HNOS S A I C A"},
  {"codigo":"11303773","descripcion":"MANI CON CHOCOLATE 36X80gr","unidades_x_bulto":36,"proveedor":"GEORGALOS HNOS S A I C A"},
  {"codigo":"11363900","descripcion":"Mantecol bajo sodio 8x12x41g","unidades_x_bulto":96,"proveedor":"GEORGALOS HNOS S A I C A"},
  {"codigo":"11327000","descripcion":"MANTECOL IMP BAJO SODIO 21 40X111G","unidades_x_bulto":40,"proveedor":"GEORGALOS HNOS S A I C A"},
  {"codigo":"11301213","descripcion":"TABLETA CROCANTE D/MANI 36X80gr","unidades_x_bulto":20,"proveedor":"GEORGALOS HNOS S A I C A"},
  {"codigo":"11303424","descripcion":"Tableta Crocante Fr-Secos 36x95g","unidades_x_bulto":36,"proveedor":"GEORGALOS HNOS S A I C A"},
  {"codigo":"11300026","descripcion":"Toddy Alfajor Mousse  X20x60gr","unidades_x_bulto":24,"proveedor":"GEORGALOS HNOS S A I C A"},
  {"codigo":"11302375","descripcion":"Toddy Alfajor Mousse TRIPLE 20X60G","unidades_x_bulto":20,"proveedor":"GEORGALOS HNOS S A I C A"},
  {"codigo":"11300028","descripcion":"Toddy Almohaditas 16ux180g","unidades_x_bulto":16,"proveedor":"GEORGALOS HNOS S A I C A"},
  {"codigo":"11300023","descripcion":"Toddy Cacao En Polvo Avellanas 12u X 150g X12x150g","unidades_x_bulto":12,"proveedor":"GEORGALOS HNOS S A I C A"},
  {"codigo":"11302341","descripcion":"Toddy Cacao En Polvo Extremo 14u X 360g","unidades_x_bulto":14,"proveedor":"GEORGALOS HNOS S A I C A"},
  {"codigo":"11302342","descripcion":"Toddy Cacao En Polvo Extremo 8u X 800g X8x800gr","unidades_x_bulto":8,"proveedor":"GEORGALOS HNOS S A I C A"},
  {"codigo":"11302340","descripcion":"Toddy Cacao En Polvo Original 12u X 180g","unidades_x_bulto":12,"proveedor":"GEORGALOS HNOS S A I C A"},
  {"codigo":"11300031","descripcion":"Toddy choco Rell Coockies 6Dx10Ux60g","unidades_x_bulto":60,"proveedor":"GEORGALOS HNOS S A I C A"},
  {"codigo":"11300030","descripcion":"Toddy choco Rell Milk 6Dx10Ux60g","unidades_x_bulto":60,"proveedor":"GEORGALOS HNOS S A I C A"},
  {"codigo":"11350000","descripcion":"Toddy Chocolate AIR Combinado 6DX10Ux50g","unidades_x_bulto":6,"proveedor":"GEORGALOS HNOS S A I C A"},
  {"codigo":"11302343","descripcion":"Toddy Galletas Chispas De Chocolate 24u X 126g X24","unidades_x_bulto":24,"proveedor":"GEORGALOS HNOS S A I C A"},
  {"codigo":"11302348","descripcion":"Toddy Mini Galletas Chispas De Chocolate 36u X 50g","unidades_x_bulto":36,"proveedor":"GEORGALOS HNOS S A I C A"},
  {"codigo":"11301357","descripcion":"Turron almendra b Soft 24x90g","unidades_x_bulto":24,"proveedor":"GEORGALOS HNOS S A I C A"},
  {"codigo":"11301354","descripcion":"TURRON DE MANI BLANDO 20X130gr","unidades_x_bulto":20,"proveedor":"GEORGALOS HNOS S A I C A"},
  {"codigo":"11301210","descripcion":"TURRON DE MANI C/MIEL 24X120gr","unidades_x_bulto":24,"proveedor":"GEORGALOS HNOS S A I C A"},
  {"codigo":"11301212","descripcion":"TURRON DE MANI C/MIEL 36X80gr","unidades_x_bulto":36,"proveedor":"GEORGALOS HNOS S A I C A"},
  {"codigo":"11303401","descripcion":"Turron de Mani Georgalos Semi c/fruta 36x80g","unidades_x_bulto":36,"proveedor":"GEORGALOS HNOS S A I C A"},
  {"codigo":"11300380","descripcion":"Turron de mani Namur 50 x 25g","unidades_x_bulto":1,"proveedor":"GEORGALOS HNOS S A I C A"},
  {"codigo":"11301358","descripcion":"TURRON MANI SOFT 36X90gr","unidades_x_bulto":36,"proveedor":"GEORGALOS HNOS S A I C A"},
  {"codigo":"11301190","descripcion":"TURRON S/BLANDO MANI/ALMEN 36X80gr","unidades_x_bulto":36,"proveedor":"GEORGALOS HNOS S A I C A"},
  {"codigo":"74840","descripcion":"ALARIS D.COSECHA TINTO 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"71716","descripcion":"ALARIS RED BLEND 6 X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"80034","descripcion":"ALEGORIA CAB SAUV 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"80036","descripcion":"ALEGORIA CHARDO 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"80037","descripcion":"ALEGORIA MALBEC 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"74827","descripcion":"ALMA MORA BLANCO DULCE LOW 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"74438","descripcion":"ALMA MORA BLEND BLANCO 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"74397","descripcion":"ALMA MORA BLEND DULCE 6X 750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"74437","descripcion":"ALMA MORA BLEND TINTO 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"74208","descripcion":"ALMA MORA CABSAUV6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"74211","descripcion":"ALMA MORA CHARD 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"74210","descripcion":"ALMA MORA MALBEC 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"74887","descripcion":"ALMA MORA MALBEC DULCE LOW 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"74736","descripcion":"ALMA MORA MERLOT 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"74610","descripcion":"ALMA MORA SEL RVE BLEND 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"74609","descripcion":"ALMA MORA SEL RVE CABER 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"74611","descripcion":"ALMA MORA SEL RVE CHARDO 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"74608","descripcion":"ALMA MORA SEL RVE MALBEC 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"74209","descripcion":"ALMA MORA SYRAH 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"74398","descripcion":"ALMA MORA SYRAH ROSE 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"60017","descripcion":"ANTARES IPA LATA 6X473 (NEW)","unidades_x_bulto":24,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"60019","descripcion":"ANTARES IPA SIN ALC LATA 6X473","unidades_x_bulto":24,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"60022","descripcion":"ANTARES LAGER BOTELLA 6X660","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"60018","descripcion":"ANTARES LAGER LATA 6X473","unidades_x_bulto":24,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"60021","descripcion":"ANTARES LAGER PORRON 6X330","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"30268","descripcion":"ANTARES LATA CARAVANA 6 X 473ML","unidades_x_bulto":24,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"30275","descripcion":"ANTARES LATA IPA 6 X 473ML","unidades_x_bulto":24,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"30329","descripcion":"ANTARES LATA KOLSCH 6 X 473ML","unidades_x_bulto":24,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"30343","descripcion":"ANTARES LATA SCOTCH 6 X 473ML","unidades_x_bulto":24,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"60015","descripcion":"ANTARES PLAYA GRANDE 6 X 473ML","unidades_x_bulto":24,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"60020","descripcion":"ANTARES XPA LATA  6X473","unidades_x_bulto":24,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"30012","descripcion":"BAILEYS NUEVA BOTELLA 12x750","unidades_x_bulto":12,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"30129","descripcion":"BAILEYS SALTED CARAMEL 12X750","unidades_x_bulto":12,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"44367","descripcion":"BLEND DE EXTREMOS MB EE 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"44396","descripcion":"BLEND DE EXTREMOS PN PN 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"30076","descripcion":"BUCHANANAS DELUXE 12X750","unidades_x_bulto":12,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"74816","descripcion":"CAZADOR BLANCO DULCE 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"74815","descripcion":"CAZADOR CAB. SAU 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"74814","descripcion":"CAZADOR MALBEC 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"74832","descripcion":"CAZADOR ROSADO 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"90111","descripcion":"Cinz.  TO SPRITZ 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"90106","descripcion":"Cinz. VTH BI AM 12X1000","unidades_x_bulto":12,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"90105","descripcion":"Cinz. VTH RSO 12X1000","unidades_x_bulto":12,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"90110","descripcion":"Cinz. VTH SEGUNDO 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"80015","descripcion":"COLECCION PRIVADA BLEND 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"80018","descripcion":"COLECCION PRIVADA CAB SAUV 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"80020","descripcion":"COLECCION PRIVADA CHARD 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"80022","descripcion":"COLECCION PRIVADA MALBEC","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"80024","descripcion":"COLECCION PRIVADA MERLOT 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"80025","descripcion":"COLECCION PRIVADA PINOT 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"74728","descripcion":"DADA 7 ORANGE BITTER 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"74446","descripcion":"DADA 7 SWEET  6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"74505","descripcion":"DADA ART CABERNET 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"74504","descripcion":"DADA ART MALBEC 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"74567","descripcion":"DADA ESPUMANTE MARACUYA 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"74473","descripcion":"DADA ESPUMANTE ROS6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"74813","descripcion":"DADA EXTRA BRUT 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"74393","descripcion":"DADA FMORAS N°1 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"74395","descripcion":"DADA FMORAS N°2 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"74394","descripcion":"DADA FMORAS N°3 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"74709","descripcion":"DADA LATA SWEET  4X6X355","unidades_x_bulto":24,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"74710","descripcion":"DADA LATA SWEET PINK 4X6X355","unidades_x_bulto":24,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"74884","descripcion":"DADA LATA TINTO VERANO 4X6X355","unidades_x_bulto":24,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"74569","descripcion":"DADA N°8 CHOCOLATE 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"74748","descripcion":"DADA N°9 CARAMEL 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"74636","descripcion":"DADA N6 HONEY X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"74830","descripcion":"DADA SIDRA 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"74886","descripcion":"DADA SWEET RED LOW DADA 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"74883","descripcion":"DADA SWEET WHITE LOW DADA 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"74714","descripcion":"DADA WHITE MALBEC 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"74686","descripcion":"DEMENCIAL MALBEC 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"74687","descripcion":"DEMENCIAL PINOT NOIR 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"80077","descripcion":"DOLORES ESPUMANTE DULCE 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"80076","descripcion":"DOLORES ESPUMANTE ROSE 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"42373","descripcion":"DON DAVID CABERNET 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"42374","descripcion":"DON DAVID CHARDONNAY 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"41682","descripcion":"DON DAVID MALBEC 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"44389","descripcion":"DON DAVID PINOT NOIR6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"42376","descripcion":"DON DAVID RED BLEND 6X 750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"44297","descripcion":"DON DAVID RESERVA CAB.SAUV X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"44296","descripcion":"DON DAVID RESERVA MALBEC X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"41687","descripcion":"DON DAVID SYRAH 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"42377","descripcion":"DON DAVID TORRON LOW ALC 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"42375","descripcion":"DON DAVID TORRONTES 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"74910","descripcion":"EDMUNDO CABERNET 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"74909","descripcion":"EDMUNDO MALBEC 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"14509","descripcion":"EL BAUTISMO BLEND B. DLCE 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"14508","descripcion":"EL BAUTISMO BLEND TINTAS 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"74786","descripcion":"EL BAUTISMO CABERNET 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"14507","descripcion":"EL BAUTISMO MALBEC 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"14510","descripcion":"EL BAUTISMO ROSADO 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"44354","descripcion":"EL ESTECO BLANC DE BLANC  4X750","unidades_x_bulto":4,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"44289","descripcion":"EL ESTECO CABERNET SAUV 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"44288","descripcion":"EL ESTECO MALBEC 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"14554","descripcion":"EL REGRESO SEM-CHEN  X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"14555","descripcion":"EL ULTIMO RIE MEJOR X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"74902","descripcion":"EL ULTIMO TRAMO CABERNET SAUV 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"74901","descripcion":"EL ULTIMO TRAMO MALBEC 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"74903","descripcion":"EL ULTIMO TRAMO TORRON NARANJ","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"42101","descripcion":"ELEMENTOS CABSAUV 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"42107","descripcion":"ELEMENTOS CHARDONNAY 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"42102","descripcion":"ELEMENTOS MALBEC 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"44395","descripcion":"ELEMENTOS RED BLEND 6 X 750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"44314","descripcion":"ELEMENTOS ROSADO TORRONT 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"42103","descripcion":"ELEMENTOS SYRAH 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"42104","descripcion":"ELEMENTOS TANNAT 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"42105","descripcion":"ELEMENTOS TORRONTES 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"42113","descripcion":"ELEMENTOS TORRONTES DLCE6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"74740","descripcion":"EXPEDICION DEL SUR CABSUA 6 X 750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"74735","descripcion":"F LAS MORAS RED BLEND  6X 750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"74509","descripcion":"F. LAS MORAS BCO DULCE 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"74510","descripcion":"F. LAS MORAS ROSADO 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"74167","descripcion":"F. LAS MORAS SAUV.BLANC 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"72857","descripcion":"F.LAS MORAS CABSAU 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"72859","descripcion":"F.LAS MORAS MALBEC 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"72858","descripcion":"F.LAS MORAS SYRAH 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"74722","descripcion":"FAIR FOR LIFE CAB.SAUV 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"74723","descripcion":"FAIR FOR LIFE CHARDONNAY 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"74721","descripcion":"FAIR FOR LIFE MALBEC 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"41082","descripcion":"FINCA NOTABLES MALBEC .6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"74170","descripcion":"FLM GRAN SYRAH 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"74117","descripcion":"FOND CAV RESERVA CAB SAUV FRANCE X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"74118","descripcion":"FOND CAV RESERVA PET. VERDOT X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"70201","descripcion":"FOND CAVE CABSAU 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"70202","descripcion":"FOND CAVE CHARD 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"74246","descripcion":"FOND CAVE G. RVA CABSAU 6 X 750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"74248","descripcion":"FOND CAVE G. RVA MALBEC 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"74146","descripcion":"FOND CAVE MALBEC 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"74144","descripcion":"FOND CAVE RVA CABSAU 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"74443","descripcion":"FOND CAVE RVA CHARDONNAY 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"74053","descripcion":"FOND CAVE RVA COS TARDIA 6 X 500","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"72867","descripcion":"FOND CAVE RVA MALBEC 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"74140","descripcion":"FOND CAVE RVA SAUVIGNON 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"74147","descripcion":"FOND CAVE SYRAH 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"14594","descripcion":"FRIZZE BLUE LATA X473","unidades_x_bulto":24,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"14619","descripcion":"FRIZZE BUBBLE MOOD 6X1000","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"14583","descripcion":"FRIZZE EVOL BLUE NEW X1000","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"14585","descripcion":"FRIZZE IT LIM NEW X 1000","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"14595","descripcion":"FRIZZE ITAL LIMA LATA X473","unidades_x_bulto":24,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"14540","descripcion":"FRIZZE ITALIAN POMELATA 6X1000","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"14621","descripcion":"FRIZZE MAN-GO PARTY 6X1000","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"14620","descripcion":"FRIZZE MANXANA POP 6X1000","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"14596","descripcion":"FRIZZE POMELATA 6X473","unidades_x_bulto":24,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"30075","descripcion":"GORDON´S GIN 6x700","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"30134","descripcion":"GORDON´S PINK GIN 6X700","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"35107","descripcion":"GORDON´S TONIC 4X6X473","unidades_x_bulto":24,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"30139","descripcion":"GORDONS  TROPICAL FRUITS 6X700","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"54011","descripcion":"GRAN MASCOTA MALBEC 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"74656","descripcion":"GRAN MEDALLA CABER FRAN 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"74238","descripcion":"GRAN MEDALLA CABERN SAUV 6 X 750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"74054","descripcion":"GRAN MEDALLA MALBEC 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"74658","descripcion":"GRAN MEDALLA PINOT NOIR 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"10531","descripcion":"HEREFORD BCO 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"14029","descripcion":"HEREFORD MALBEC 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"10530","descripcion":"HEREFORD TTO 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"74749","descripcion":"INTOCABLES DOUBLE OAK 6 X 750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"74410","descripcion":"ISCAY MALBEC - CABERNET FRANC","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"74411","descripcion":"ISCAY MALBEC/CAB.FRANC 6X1X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"74528","descripcion":"ISCAY MALBEC/CABERNET FRANC 4X1500","unidades_x_bulto":4,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"80088","descripcion":"J DE DIOS NC BLEND","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"30066","descripcion":"J WALKER 18 6x750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"30009","descripcion":"J WALKER BLUE LABEL 18 6x750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"30029","descripcion":"J WALKER GREEN 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"30010","descripcion":"J&B RARE 6X750","unidades_x_bulto":12,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"30085","descripcion":"J&B YELLOW 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"30004","descripcion":"JW BLACK LABEL 12x1000","unidades_x_bulto":12,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"30003","descripcion":"JW BLACK LABEL 12x750","unidades_x_bulto":12,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"30005","descripcion":"JW DOUBLE BLACK 6x750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"30138","descripcion":"JW GOLD RESERVE 6x750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"30002","descripcion":"JW RED 12X1000 UK","unidades_x_bulto":12,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"30001","descripcion":"JW RED 12X750 UK","unidades_x_bulto":12,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"14553","descripcion":"LA GRAN NACHA X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"51945","descripcion":"LA MASCOTA CAB. SAUV 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"54019","descripcion":"LA MASCOTA CABER FRANC 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"51946","descripcion":"LA MASCOTA CHARDONNAY 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"51943","descripcion":"LA MASCOTA MALBEC 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"54017","descripcion":"LA MASCOTA ROSE 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"54035","descripcion":"LA MASCOTA SPARK BL NOIR 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"74882","descripcion":"LOS ARBOLES BCO DULCE 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"74881","descripcion":"LOS ARBOLES ROSADO 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"80007","descripcion":"LOS ARBOLES SEL CABERNET 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"80008","descripcion":"LOS ARBOLES SEL CHARD 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"80010","descripcion":"LOS ARBOLES SEL MALBEC 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"80089","descripcion":"LOS ARBOLES SEL RED BLEND 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"74583","descripcion":"LOS INTOCABLES CAB.SAUV 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"74651","descripcion":"LOS INTOCABLES CHARD  6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"74570","descripcion":"LOS INTOCABLES MALBEC 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"74684","descripcion":"LOS INTOCABLES RED BLEND 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"74715","descripcion":"LOS INTOCABLES RUM BLEND 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"74762","descripcion":"MARANTIQUA CABERNET 6X 750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"74763","descripcion":"MARANTIQUA CHARDONNAY 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"74761","descripcion":"MARANTIQUA MALBEC 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"74520","descripcion":"MEDALLA MALBEC 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"74783","descripcion":"MEDALLA SPARKLING 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"70343","descripcion":"MEDALLA TTO 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"74025","descripcion":"MORA NEGRA MAL-BON 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"80030","descripcion":"NC RESERVA CAB SAUV X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"80032","descripcion":"NC RESERVA MALBEC 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"80094","descripcion":"NC S E.BRUT4X6X355","unidades_x_bulto":24,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"80045","descripcion":"NC SPARK BRUT ROSE 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"80046","descripcion":"NC SPARK DLCE 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"80049","descripcion":"NC SPARK EBRUT 6X750 estuche","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"80048","descripcion":"NC SPARK EBRUT 6X750 nuevo","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"80050","descripcion":"NC SPARK NATURE 6X750 PREM","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"80095","descripcion":"NC SPARK SPRITZ 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"80096","descripcion":"NC SPARK SPRITZ LATA 4X6X355","unidades_x_bulto":24,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"30048","descripcion":"OLD PARR 12YO 12x750","unidades_x_bulto":12,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"74727","descripcion":"ORIGEN BY TRAPICHE CAB.S 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"74726","descripcion":"ORIGEN BY TRAPICHE MALBEC 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"998877","descripcion":"PALLET PEÑAFLOR","unidades_x_bulto":1,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"74377","descripcion":"PAZ DE FLM CAB FRANC 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"74376","descripcion":"PAZ DE FLM MALBEC 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"74402","descripcion":"PAZ DE FLM SAUV BLANC 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"74675","descripcion":"PERFILES MB TEXTURA FINA 6X 750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"30035","descripcion":"PIMMS BITTER 12X750","unidades_x_bulto":12,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"80002","descripcion":"SAN TELMO CAB-SAUV X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"80004","descripcion":"SAN TELMO MALBEC X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"80003","descripcion":"SAN TELMO SEL CHARDONNA  X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"80092","descripcion":"SAN TELMO SPARK DULCE 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"80093","descripcion":"SAN TELMO SPARK E.BRUT 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"80102","descripcion":"SAN TELMO SPARK EXT DULCE 6X75 Ma","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"74889","descripcion":"SANTA ANA CABERNET SAUV 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"74888","descripcion":"SANTA ANA MALBEC 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"30077","descripcion":"SHERIDANS 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"30087","descripcion":"SINGLETON 12 YO 6X700","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"30088","descripcion":"SINGLETON 15 YO 6X700","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"30089","descripcion":"SINGLETON 18 YO 6X700","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"35109","descripcion":"SMF  BC GRAPEF&LIME  LATA 4X6X473","unidades_x_bulto":24,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"35108","descripcion":"SMF BC RUBYORANGE&LIME LATA 4X6X473","unidades_x_bulto":24,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"35104","descripcion":"SMF ICE GREENAPPLE LAT 4X6X473","unidades_x_bulto":24,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"35105","descripcion":"SMF ICE RED BERRIE LAT 4X6X473","unidades_x_bulto":24,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"30019","descripcion":"SMIRNOFF 21 DO 12X700","unidades_x_bulto":12,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"35093","descripcion":"SMIRNOFF BC GRAPEF.&LIME 6X700","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"35101","descripcion":"SMIRNOFF BC ORANGE & LIME 6X700","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"35102","descripcion":"SMIRNOFF BC TANGE&LEMONGRASS 6X700","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"30020","descripcion":"SMIRNOFF GREEN APPLE DO 6X700","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"35103","descripcion":"SMIRNOFF ICE LATA 4X6X473","unidades_x_bulto":24,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"30022","descripcion":"SMIRNOFF RASPBERRY DO 6X700","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"30135","descripcion":"SMIRNOFF TAMARINDO 6 X 700","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"30131","descripcion":"SMIRNOFF TROPICAL FRUITS 6X700","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"30065","descripcion":"SMIRNOFF WATERMELON 6X700","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"20205","descripcion":"SUTER BI-VARIETAL MALBON 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"20202","descripcion":"SUTER BI-VARIETAL SYRCAB 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"20500","descripcion":"SUTER CHAMPAÑA E.BRUT 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"20505","descripcion":"SUTER CHAMPAÑA E.DULCE 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"20305","descripcion":"SUTER ETIQ MARRON BLANC DE BLANCO 6X 750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"20301","descripcion":"SUTER ETIQ MARRON DNAT 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"20303","descripcion":"SUTER ETIQ MARRON NEW PIN 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"20250","descripcion":"SUTER VARIETAL CABERNET 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"20254","descripcion":"SUTER VARIETAL CHARD 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"20251","descripcion":"SUTER VARIETAL MALBEC 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"20255","descripcion":"SUTER VARIETAL TARDIO6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"30140","descripcion":"TANQUERAY BOSSA NOVA 6X700","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"30130","descripcion":"TANQUERAY DRY GIN X700","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"30132","descripcion":"TANQUERAY ROYALE X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"30128","descripcion":"TANQUERAY SEVILLA GIN X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"14605","descripcion":"TERMIDOR 2021 TINTO  12X1L","unidades_x_bulto":12,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"14578","descripcion":"TERMIDOR B. DULCE 12x1L","unidades_x_bulto":12,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"14590","descripcion":"TERMIDOR BLANCO 12X1L","unidades_x_bulto":12,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"14581","descripcion":"TERMIDOR INTENSO TTO  12X1L","unidades_x_bulto":12,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"74750","descripcion":"TR TESORO MALBEC 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"74548","descripcion":"TRAP COSTA&PAMPA S. BLANC 6x750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"70750","descripcion":"TRAPICHE ALARIS CABSAUV 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"70751","descripcion":"TRAPICHE ALARIS CHARDO 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"74188","descripcion":"TRAPICHE ALARIS DULCE COSECHA 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"71704","descripcion":"TRAPICHE ALARIS MALBEC 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"72541","descripcion":"TRAPICHE ALARIS MERLOT 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"71706","descripcion":"TRAPICHE ALARIS SBLANC 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"74058","descripcion":"TRAPICHE ALARIS SYRAH 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"74263","descripcion":"TRAPICHE ALARIS TORRONTES 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"74478","descripcion":"TRAPICHE D. COSECHA ROSE 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"74664","descripcion":"TRAPICHE IMPURO CAB.SAUV 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"74556","descripcion":"TRAPICHE IMPURO MALBEC X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"74663","descripcion":"TRAPICHE PURO CAB.SAUV 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"74555","descripcion":"TRAPICHE PURO MALBEC","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"74737","descripcion":"TRAPICHE RES  RED BLEND 6 X 750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"74415","descripcion":"TRAPICHE RESERVA CABSAU 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"74421","descripcion":"TRAPICHE RESERVA CHARD 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"74419","descripcion":"TRAPICHE RESERVA MALBEC 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"74587","descripcion":"TRAPICHE TERRIOR SERIES F ORELLANA 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"74708","descripcion":"TRAPICHE TERROIR SERIES COLETTO","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"54022","descripcion":"UNANIME TINTO 6X750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"35097","descripcion":"VAT 69 APPLE X700","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"20161","descripcion":"VIEJO SOLAR MAGN. TINTO 6X1125","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"30023","descripcion":"WHITE HORSE DO 12X750","unidades_x_bulto":12,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"30054","descripcion":"ZACAPA CENT XO 6x750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"30018","descripcion":"ZACAPA CENTENARIO 6x750","unidades_x_bulto":6,"proveedor":"GRUPO PEÑAFLOR SA"},
  {"codigo":"11200008","descripcion":"Celusal Entrefina Estuche 1 Kg Pack X 12","unidades_x_bulto":12,"proveedor":"INDUSTRIAS QUIMICAS Y MINERAS TIMBO SA"},
  {"codigo":"11200007","descripcion":"Celusal Entrefina Paquete 1 Kg Pack X 12","unidades_x_bulto":12,"proveedor":"INDUSTRIAS QUIMICAS Y MINERAS TIMBO SA"},
  {"codigo":"11200006","descripcion":"Celusal entrefina paquete 500 gr pack x 30","unidades_x_bulto":30,"proveedor":"INDUSTRIAS QUIMICAS Y MINERAS TIMBO SA"},
  {"codigo":"11200002","descripcion":"Celusal Fina Estuche 500 Gr Pack X 24","unidades_x_bulto":24,"proveedor":"INDUSTRIAS QUIMICAS Y MINERAS TIMBO SA"},
  {"codigo":"11200001","descripcion":"Celusal Fina Paquete 500 Gr Pack X 30","unidades_x_bulto":30,"proveedor":"INDUSTRIAS QUIMICAS Y MINERAS TIMBO SA"},
  {"codigo":"11200012","descripcion":"Celusal Gruesa Estuche 1 Kg Pack X 12","unidades_x_bulto":12,"proveedor":"INDUSTRIAS QUIMICAS Y MINERAS TIMBO SA"},
  {"codigo":"11200011","descripcion":"Celusal Gruesa Paquete 1 Kg Pack X 12","unidades_x_bulto":12,"proveedor":"INDUSTRIAS QUIMICAS Y MINERAS TIMBO SA"},
  {"codigo":"11200010","descripcion":"Celusal Gruesa Paquete 500 Gr Pack X 30","unidades_x_bulto":30,"proveedor":"INDUSTRIAS QUIMICAS Y MINERAS TIMBO SA"},
  {"codigo":"11200017","descripcion":"Celusal Plus Paquete 500 Gr Pack X 30","unidades_x_bulto":30,"proveedor":"INDUSTRIAS QUIMICAS Y MINERAS TIMBO SA"},
  {"codigo":"12000024","descripcion":"Caram. Mastic. Pd Yogurines X500gr (bolsa)","unidades_x_bulto":12,"proveedor":"LHERITIER ARGENTINA S. A."},
  {"codigo":"12000017","descripcion":"Caram. Pd Animals Cremy X500gr (bolsa)","unidades_x_bulto":12,"proveedor":"LHERITIER ARGENTINA S. A."},
  {"codigo":"300635","descripcion":"CARAM. PD ANIMALS CREMY X500GR (BOLSA)","unidades_x_bulto":12,"proveedor":"LHERITIER ARGENTINA S. A."},
  {"codigo":"300152","descripcion":"CARAM. PICO DULCE X450GR (BOLSA)","unidades_x_bulto":16,"proveedor":"LHERITIER ARGENTINA S. A."},
  {"codigo":"12000019","descripcion":"Chup. Bola Loca Frutilla. X24un","unidades_x_bulto":12,"proveedor":"LHERITIER ARGENTINA S. A."},
  {"codigo":"12000011","descripcion":"Chup. Pelotita Pinta lengua X50 Un.","unidades_x_bulto":12,"proveedor":"LHERITIER ARGENTINA S. A."},
  {"codigo":"300121","descripcion":"CHUPETON-CITO X 12 UNID.","unidades_x_bulto":12,"proveedor":"LHERITIER ARGENTINA S. A."},
  {"codigo":"10150912","descripcion":"Chamigo S/tacc 10x500g","unidades_x_bulto":10,"proveedor":"MOLINOS RIO DE LA PLATA S A"},
  {"codigo":"300058397","descripcion":"3D QUESO 143GX18X1","unidades_x_bulto":18,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"300058395","descripcion":"3D QUESO 43GX75X1","unidades_x_bulto":75,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"300060661","descripcion":"3D QUESO 85GX27X1","unidades_x_bulto":27,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"300052023","descripcion":"3DMEGAQUESO23GX120","unidades_x_bulto":120,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"1500002553","descripcion":"5N GLOBAL","unidades_x_bulto":1,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"1500005581","descripcion":"5N PEHUAMAR","unidades_x_bulto":1,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"1500005580","descripcion":"5N TWISTOS","unidades_x_bulto":1,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"1500005093","descripcion":"7N GD MODIFICADO","unidades_x_bulto":1,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"1500002552","descripcion":"8N PER INV","unidades_x_bulto":1,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"1500005091","descripcion":"BALCON MANI","unidades_x_bulto":1,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"1500011843","descripcion":"BASICO 2N65","unidades_x_bulto":1,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"500001034","descripcion":"CAJA AUTOEXHIBIBLE","unidades_x_bulto":1,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"1100000130","descripcion":"Caja de Carton Recuperada Buen Estado","unidades_x_bulto":1,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"1100000131","descripcion":"Caja de Carton Recuperada Mal Estado","unidades_x_bulto":1,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"1500018533","descripcion":"CAJA RTE MDF","unidades_x_bulto":1,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"1500002408","descripcion":"CANASTO BAJO FREEZER PER INV","unidades_x_bulto":1,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"1500002456","descripcion":"CHAZA 4N GLOBAL","unidades_x_bulto":1,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"1500002457","descripcion":"CHAZA 4N TWISTOS","unidades_x_bulto":1,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"1500002452","descripcion":"CHAZA 5N GLOBAL","unidades_x_bulto":1,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"1500002479","descripcion":"CHAZA 5N PEHUAMAR","unidades_x_bulto":1,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"300050336","descripcion":"CHEETOS 23GRX108","unidades_x_bulto":108,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"300065826","descripcion":"CHEETOS ONDULADOS KETCHUP 40GX66","unidades_x_bulto":66,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"300065825","descripcion":"CHEETOS ONDULADOS KETCHUP 80GX24","unidades_x_bulto":24,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"300060662","descripcion":"CHEETOS QUESO 140GX18X1","unidades_x_bulto":18,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"300060663","descripcion":"CHEETOS QUESO 229GX12X1","unidades_x_bulto":12,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"300059433","descripcion":"CHEETOS QUESO 43GX70X1","unidades_x_bulto":70,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"300060664","descripcion":"CHEETOS QUESO 85GX24X1","unidades_x_bulto":24,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"300061011","descripcion":"CHEETOS QUESO CREMA 43GX66","unidades_x_bulto":66,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"300061010","descripcion":"CHEETOS QUESO CREMA 85GX24","unidades_x_bulto":24,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"300064915","descripcion":"DINAMITA EXTRA FLAMIN HOT 45G","unidades_x_bulto":110,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"300064914","descripcion":"DINAMITA EXTRA FLAMIN HOT 82G","unidades_x_bulto":38,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"300064055","descripcion":"DORITOS DINAMITA FH 45GX110X1","unidades_x_bulto":110,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"300064054","descripcion":"DORITOS DINAMITA FH 82GX38X1","unidades_x_bulto":38,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"300066262","descripcion":"DORITOS PIZZA 35X88X1","unidades_x_bulto":88,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"300066261","descripcion":"DORITOS PIZZA 74X29X1","unidades_x_bulto":29,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"300060190","descripcion":"DORITOS QUESO 129GX19","unidades_x_bulto":19,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"300060191","descripcion":"DORITOS QUESO 200GX14","unidades_x_bulto":14,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"300065477","descripcion":"DORITOS QUESO 20GX6X10 TIR","unidades_x_bulto":10,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"300064193","descripcion":"DORITOS QUESO 20GX88X1","unidades_x_bulto":88,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"300066598","descripcion":"DORITOS QUESO 40GX6X10 TIR","unidades_x_bulto":6,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"300059545","descripcion":"DORITOS QUESO 40GX70X1","unidades_x_bulto":70,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"300060192","descripcion":"DORITOS QUESO 77GX26","unidades_x_bulto":26,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"300063015","descripcion":"DORITOS SWEET CHILI MB 74GX29X1","unidades_x_bulto":29,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"1500016606","descripcion":"Est. Mostrador 4N30 para checkout","unidades_x_bulto":1,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"1500017889","descripcion":"EXH DE PISO CROSS 4N50 PORTABOLSA H150","unidades_x_bulto":1,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"1500002446","descripcion":"EXH FACING AS PER INV","unidades_x_bulto":1,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"1500002482","descripcion":"EXH MECANO GENERICO PER INV","unidades_x_bulto":1,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"1500002477","descripcion":"EXH MINI MODULARES PER INV","unidades_x_bulto":1,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"1500002511","descripcion":"EXH MODULARES PER INV","unidades_x_bulto":1,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"1500017883","descripcion":"EXH PISO MDF  4N40","unidades_x_bulto":1,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"1500017450","descripcion":"Exhibidor de Piso 5N40 - Flamin Hot","unidades_x_bulto":1,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"1500016753","descripcion":"Ganchera 3S30 con tiras","unidades_x_bulto":1,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"500000098","descripcion":"ISLA PELOTA","unidades_x_bulto":1,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"300066581","descripcion":"LAYS ACAN ASADO 34GX72X1 MND","unidades_x_bulto":72,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"300066580","descripcion":"LAYS ACAN ASADO 77GX25X1","unidades_x_bulto":25,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"300064887","descripcion":"LAYS BARBACOA 77GX25X1","unidades_x_bulto":25,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"300065476","descripcion":"LAYS CLASICA 20GX6X10 TIR","unidades_x_bulto":10,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"300066500","descripcion":"LAYS CLASICA 40GX6X10 TIR","unidades_x_bulto":6,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"300065287","descripcion":"LAYS CLASICAS 134GX18X1","unidades_x_bulto":18,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"300051988","descripcion":"LAYS CLASICAS 20GRX76","unidades_x_bulto":76,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"300065313","descripcion":"LAYS CLASICAS 230GX13X1","unidades_x_bulto":13,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"300060231","descripcion":"LAYS CLASICAS 330GX9","unidades_x_bulto":9,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"300059432","descripcion":"LAYS CLASICAS 40GX68X1","unidades_x_bulto":68,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"300060195","descripcion":"LAYS CLASICAS 85GX25X1","unidades_x_bulto":25,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"300060080","descripcion":"LAYS JAMON SERRANO 122GX19","unidades_x_bulto":19,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"300059431","descripcion":"LAYS JAMON SERRANO 34GX72","unidades_x_bulto":72,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"300065286","descripcion":"LAYS JAMON SERRANO 77GX25X1","unidades_x_bulto":25,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"300065285","descripcion":"LAYS KETCHUP 77GX25X1","unidades_x_bulto":25,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"300059801","descripcion":"LAYS ONDAS FH 30GX72","unidades_x_bulto":72,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"300059811","descripcion":"LAYS ONDAS FH 70GX28","unidades_x_bulto":28,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"300064885","descripcion":"LAYS PANCETA 77GX25X1","unidades_x_bulto":25,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"300065284","descripcion":"LAYS PROVOLETA 77GX25X1","unidades_x_bulto":25,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"300059430","descripcion":"LAYS QSO Y CEBOLLA 34GX72","unidades_x_bulto":72,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"300065361","descripcion":"LAYS QUESO Y CEBOLLA 77GX25X1","unidades_x_bulto":25,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"300067372","descripcion":"Lays Rusticas Caprese 77 GRAMOS","unidades_x_bulto":19,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"300067374","descripcion":"Lays Rusticas Limon y Hierbas 77 GRAMOS","unidades_x_bulto":19,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"300067373","descripcion":"Lays Rusticas Sal Marina 85 GRAMOS","unidades_x_bulto":19,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"500001032","descripcion":"LOMO FREEZER","unidades_x_bulto":1,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"300063273","descripcion":"MANI CON PIEL 135GX40X1","unidades_x_bulto":40,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"300061023","descripcion":"MANI PELADO 135GX40X1","unidades_x_bulto":40,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"300061022","descripcion":"MANI PELADO 320GX17X1","unidades_x_bulto":17,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"300061030","descripcion":"MANI SAL CON PIEL 75GX64X1","unidades_x_bulto":64,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"300063271","descripcion":"MANI SAL PELADO 75GX64X1","unidades_x_bulto":64,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"300064854","descripcion":"MANI TUBULAR 40GRS","unidades_x_bulto":100,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"300061021","descripcion":"MANIAX JAPONES JAMON 95GX40X1","unidades_x_bulto":40,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"300061020","descripcion":"MANIAX JAPONES SAL 95GX40X1","unidades_x_bulto":40,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"300060869","descripcion":"MANIAX SAL Y LIMON 95GX60X1","unidades_x_bulto":60,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"1500016843","descripcion":"Mecano 4N20 H85","unidades_x_bulto":1,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"1500016761","descripcion":"Mecano Modular 8N20 H200","unidades_x_bulto":1,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"1500015136","descripcion":"Modular 1N90","unidades_x_bulto":1,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"1500002461","descripcion":"MODULAR 4N50","unidades_x_bulto":1,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"1500016840","descripcion":"Modular 4N50 H140 P20","unidades_x_bulto":1,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"1500002458","descripcion":"MODULAR 5N50 GLOBAL","unidades_x_bulto":1,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"1500002459","descripcion":"MODULAR 5N50 PEHUAMAR","unidades_x_bulto":1,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"1500016839","descripcion":"Modular 5N60 H155","unidades_x_bulto":1,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"1500016837","descripcion":"Modular 5N80","unidades_x_bulto":1,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"1200000180","descripcion":"Pallet Retornable","unidades_x_bulto":1,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"300064630","descripcion":"PEHUA PAPA ACANA 90GX22 RM","unidades_x_bulto":22,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"300064641","descripcion":"PEHUA PAPA LISA 90GX22 RM","unidades_x_bulto":22,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"300064830","descripcion":"PEHUAMAR ACAN CHIMICHURRI 80X25X1","unidades_x_bulto":25,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"300064478","descripcion":"PEHUAMAR ACAN MATAMBRITO 80X25X1","unidades_x_bulto":25,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"300062973","descripcion":"PEHUAMAR ACANALADA 230GX14X1","unidades_x_bulto":14,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"300066791","descripcion":"PEHUAMAR ACANALADA 420X9X1 RM","unidades_x_bulto":9,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"300064640","descripcion":"PEHUAMAR ACANALADA 450X9 RM","unidades_x_bulto":9,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"300052758","descripcion":"PEHUAMAR MAICITOS 125GX16","unidades_x_bulto":16,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"300062972","descripcion":"PEHUAMAR MAICITOS 265GX10X1","unidades_x_bulto":10,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"300060094","descripcion":"PEHUAMAR PALIQUESO 165GX21X1","unidades_x_bulto":21,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"300060093","descripcion":"PEHUAMAR PALIQUESO 620GX6X1","unidades_x_bulto":6,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"300052656","descripcion":"PEHUAMAR PALIQUESO 90GX36","unidades_x_bulto":36,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"300060092","descripcion":"PEHUAMAR PALISAL 165GX21X1","unidades_x_bulto":21,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"300060091","descripcion":"PEHUAMAR PALISAL 620GX6X1","unidades_x_bulto":6,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"300052790","descripcion":"PEHUAMAR PALISAL 90GX36","unidades_x_bulto":36,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"300060097","descripcion":"PEHUAMAR PAPA ACANA 135GX19","unidades_x_bulto":19,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"300060196","descripcion":"PEHUAMAR PAPA LISA 135GX19X1","unidades_x_bulto":19,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"300060197","descripcion":"PEHUAMAR PAPA LISA 230GX14X1","unidades_x_bulto":14,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"300066790","descripcion":"PEHUAMAR PAPA LISA 420GX9X1 RM","unidades_x_bulto":9,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"300064740","descripcion":"PEHUAMAR PAPA LISA 450GX9 RM","unidades_x_bulto":9,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"300052821","descripcion":"PEP COMUN 120GRX21","unidades_x_bulto":21,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"300033488","descripcion":"PEP COMUN 40GX60 PI","unidades_x_bulto":60,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"300052820","descripcion":"PEP COMUN 84GRX36","unidades_x_bulto":36,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"300058720","descripcion":"PEP RAMITAS QUESO 120GX21","unidades_x_bulto":21,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"300058740","descripcion":"PEP RAMITAS QUESO 40GX60","unidades_x_bulto":60,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"300058721","descripcion":"PEP RAMITAS QUESO 84GX36","unidades_x_bulto":36,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"300052756","descripcion":"PEP RUEDITAS 120GRX21","unidades_x_bulto":21,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"300033489","descripcion":"PEP RUEDITAS 40GX60 PI","unidades_x_bulto":60,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"300052757","descripcion":"PEP RUEDITAS 74GRX36","unidades_x_bulto":36,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"300065501","descripcion":"PEP RUEDITAS FLAMIN HOT 71G","unidades_x_bulto":36,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"1500011852","descripcion":"POF 3T65 SAV","unidades_x_bulto":1,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"300065572","descripcion":"QUAKER AVENA EXT FINA 470GX12 ARG","unidades_x_bulto":12,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"300065613","descripcion":"QUAKER AVENA INST 280GX20 ARG","unidades_x_bulto":20,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"300065612","descripcion":"QUAKER AVENA INST 500GX10 ARG","unidades_x_bulto":10,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"300065611","descripcion":"QUAKER AVENA TRADIC 280GX20 ARG","unidades_x_bulto":20,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"300065610","descripcion":"QUAKER AVENA TRADIC 550GX12 ARG","unidades_x_bulto":12,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"1500005128","descripcion":"RACK MODULAR 2N","unidades_x_bulto":1,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"1500017920","descripcion":"REJILLA 2F6N20 H1 2026","unidades_x_bulto":1,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"1500002532","descripcion":"TIRAS PLASTICAS PEPSICO","unidades_x_bulto":1,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"1500002534","descripcion":"TIRAS SIMPLES PEPSICO ALIMENTOS","unidades_x_bulto":1,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"500001033","descripcion":"TMD CARTON","unidades_x_bulto":1,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"1500018530","descripcion":"TMD MDF 4N30 GRAF INT","unidades_x_bulto":1,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"1500018350","descripcion":"TMD MDF 4N40","unidades_x_bulto":1,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"1500018532","descripcion":"TMD MDF 4N40 GRAF INTER","unidades_x_bulto":1,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"300067529","descripcion":"TOSTITOS ROUND HIERB Y LIMON 144GX19X1","unidades_x_bulto":19,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"300067590","descripcion":"TOSTITOS ROUND HIERB Y LIMON 90GX26X1","unidades_x_bulto":26,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"300065828","descripcion":"TOSTITOS ROUNDED SAL 100 GRAMOS","unidades_x_bulto":26,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"300065827","descripcion":"TOSTITOS ROUNDED SAL 160 GRAMOS","unidades_x_bulto":19,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"300065792","descripcion":"TOSTITOS ROUNDED SAL 260 GRAMOS","unidades_x_bulto":15,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"300052697","descripcion":"TWISTOS MINIT JAMON 155GX20","unidades_x_bulto":20,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"300063264","descripcion":"TWISTOS MINIT JAMON 40GX112X1","unidades_x_bulto":112,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"300063098","descripcion":"TWISTOS MINIT JAMON 95GX30X1","unidades_x_bulto":30,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"300052694","descripcion":"TWISTOS MINIT QUESO 155GX20","unidades_x_bulto":20,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"300063263","descripcion":"TWISTOS MINIT QUESO 40GX112X1","unidades_x_bulto":112,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"300063097","descripcion":"TWISTOS MINIT QUESO 95GX30X1","unidades_x_bulto":30,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"1500017881","descripcion":"ZAPATERA MESH","unidades_x_bulto":1,"proveedor":"Pepsico de Argentina SRL"},
  {"codigo":"22900001","descripcion":"Pepas Terepin 14x400g","unidades_x_bulto":14,"proveedor":"PRODUCTOS EMERY S.A"},
  {"codigo":"12100024","descripcion":"Spring Pop Tradicional X 36 Unid","unidades_x_bulto":18,"proveedor":"Spring Pop (proveedor 30)"}
];


let conteosEfectuados = JSON.parse(localStorage.getItem('misConteos')) || [];

// ============================
// Estado de sesión: 1 proveedor por conteo
// ============================
let proveedorActivo = (conteosEfectuados.length > 0 && conteosEfectuados[0].proveedor) ? conteosEfectuados[0].proveedor : null;

// UI: muestra el proveedor activo en pantalla
function asegurarBarraProveedor() {
    let el = document.getElementById('proveedorActivo');
    if (!el) {
        const header = document.querySelector('main .app-header') || document.querySelector('main h1');
        el = document.createElement('div');
        el.id = 'proveedorActivo';
        el.style.margin = '10px 0 16px';
        el.style.padding = '10px 12px';
        el.style.borderRadius = '10px';
        el.style.border = '1px solid #E2E0D8';
        el.style.background = '#F6F5F1';
        el.style.color = '#14213D';
        el.style.fontFamily = "'JetBrains Mono', ui-monospace, 'Courier New', monospace";
        el.style.fontSize = '0.95rem';
        if (header && header.parentNode) {
            header.parentNode.insertBefore(el, header.nextSibling);
        } else {
            document.body.insertBefore(el, document.body.firstChild);
        }
    }
    return el;
}

function actualizarProveedorUI() {
    const el = asegurarBarraProveedor();
    if (!proveedorActivo) {
        el.innerHTML = '<strong>Proveedor activo:</strong> <span style="color:#3D4A6B">(no seleccionado aún)</span>';
    } else {
        el.innerHTML = `<strong>Proveedor activo:</strong> <span style="color:#C8552D;font-weight:700">${proveedorActivo}</span> <span style="color:#3D4A6B">(bloqueado hasta "Nuevo Conteo")</span>`;
    }
}


const searchInput = document.getElementById('searchInput');
const productList = document.getElementById('productList');
const detailCard = document.getElementById('detailCard');
const selectedProductName = document.getElementById('selectedProductName');
const sessionEntries = document.getElementById('sessionEntries');
const exportButton = document.getElementById('exportButton');

const inputBultos = document.getElementById('cantidadBultos');
const inputUnidades = document.getElementById('unidadesSueltas');
const inputFecha = document.getElementById('fechaVencimiento');

// ============================
// Editar un renglón ya cargado (todo local: usa el mismo guardado del celular, no necesita conexión)
// ============================
let editandoIdx = null;
const addEntryButton = document.getElementById('addEntryButton');

// Paneles que solo se ven cuando hacen falta (en el celular los vacíos ocupaban una pantalla entera)
const listSection = document.querySelector('.product-list-section');
const detailSection = document.querySelector('.detail-section');
function sincronizarPaneles() {
    if (detailSection) detailSection.classList.toggle('hidden', detailCard.classList.contains('hidden'));
}
new MutationObserver(sincronizarPaneles).observe(detailCard, { attributes: true, attributeFilter: ['class'] });
if (listSection) listSection.classList.add('hidden');
sincronizarPaneles();

function salirEdicion() {
    editandoIdx = null;
    addEntryButton.textContent = 'Agregar producto';
    const c = document.getElementById('cancelEditButton');
    if (c) c.remove();
}

function entrarEdicion(idx) {
    const e = conteosEfectuados[idx];
    if (!e) return;
    editandoIdx = idx;
    selectedProductName.textContent = e.nombre;
    selectedProductName.dataset.codigo = e.codigo;
    selectedProductName.dataset.uxb = e.uxb;
    selectedProductName.dataset.proveedor = e.proveedor || "";
    inputBultos.value = e.bultos;
    inputUnidades.value = e.unidades;
    inputFecha.value = e.fecha;
    detailCard.classList.remove('hidden');
    productList.innerHTML = "";
    searchInput.value = "";
    addEntryButton.textContent = 'Guardar cambios';
    if (!document.getElementById('cancelEditButton')) {
        const c = document.createElement('button');
        c.type = 'button';
        c.id = 'cancelEditButton';
        c.textContent = 'Cancelar edición';
        c.addEventListener('click', () => {
            salirEdicion();
            detailCard.classList.add('hidden');
            document.getElementById('productForm').reset();
        });
        addEntryButton.insertAdjacentElement('afterend', c);
    }
    window.scrollTo(0, 0);
    setTimeout(() => { inputBultos.focus(); inputBultos.select(); }, 150);
}

// 1. BUSCADOR
searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    if (listSection) listSection.classList.toggle('hidden', term.length < 2);
    if (term.length < 2) {
        productList.innerHTML = "Escriba para buscar...";
        return;
    }
    const coincideTermino = p => (p.descripcion || '').toLowerCase().includes(term) || (p.codigo || '').includes(term);
    const filtrados = productos.filter(p => {
        const okProveedor = !proveedorActivo || (p.proveedor === proveedorActivo);
        return okProveedor && coincideTermino(p);
    });

    if (filtrados.length === 0) {
        if (proveedorActivo && productos.some(coincideTermino)) {
            productList.innerHTML = `Sin resultados de <strong>${proveedorActivo}</strong> para ese criterio. Hay productos de otros proveedores, pero no se pueden mezclar en este conteo.`;
        } else {
            productList.innerHTML = "Sin resultados.";
        }
        return;
    }

    productList.innerHTML = "";
    filtrados.forEach(p => {
        const div = document.createElement('div');
        div.className = 'product-item';
        div.innerHTML = `<span class="product-code">${p.codigo}</span><span class="product-desc">${p.descripcion}</span><span class="u-x-b">[UxB: ${p.unidades_x_bulto}]</span>`;
        div.onclick = () => {
            salirEdicion();
            if (listSection) listSection.classList.add('hidden');
            selectedProductName.textContent = p.descripcion;
            selectedProductName.dataset.codigo = p.codigo;
            selectedProductName.dataset.uxb = p.unidades_x_bulto;
            selectedProductName.dataset.proveedor = p.proveedor || "";
            detailCard.classList.remove('hidden');
            productList.innerHTML = "";
            searchInput.value = "";
            setTimeout(() => { inputBultos.focus(); inputBultos.select(); }, 150);
        };
        productList.appendChild(div);
    });
});

// 2. MODO RÁPIDO (SALTOS CON ENTER)
[inputBultos, inputUnidades, inputFecha].forEach((el, idx, arr) => {
    el.addEventListener('keypress', (e) => {
        if(e.key === 'Enter'){
            e.preventDefault();
            if(idx < arr.length - 1){
                arr[idx+1].focus();
                if(arr[idx+1].select) arr[idx+1].select();
            } else {
                document.getElementById('productForm').requestSubmit();
            }
        }
    });
});

// 2b. AUTO-SELECCIÓN AL ENFOCAR (bultos/unidades)
// En Android, el botón "siguiente" del teclado numérico mueve el foco
// de forma nativa sin disparar el evento Enter de arriba, así que el "0"
// por defecto queda sin seleccionar y escribir "10" da "100". Seleccionando
// el contenido en cualquier "focus" (venga de un tap, tab o el botón nativo)
// se soluciona sin depender de cómo llegó el foco al campo.
[inputBultos, inputUnidades].forEach((el) => {
    el.addEventListener('focus', () => {
        el.select();
    });
});

// 3. GUARDAR
function guardarConteo() {
    const bultos = parseInt(inputBultos.value) || 0;
    const unidades = parseInt(inputUnidades.value) || 0;
    const uxb = parseInt(selectedProductName.dataset.uxb) || 0;

    // Modo edición: se corrige el renglón que ya estaba cargado (mismo proveedor, misma hora de carga)
    if (editandoIdx !== null && conteosEfectuados[editandoIdx]) {
        const e = conteosEfectuados[editandoIdx];
        e.bultos = bultos;
        e.unidades = unidades;
        e.total = (bultos * e.uxb) + unidades;
        e.fecha = inputFecha.value;
        e.editado = true;
        localStorage.setItem('misConteos', JSON.stringify(conteosEfectuados));
        salirEdicion();
        actualizarVista();
        detailCard.classList.add('hidden');
        document.getElementById('productForm').reset();
        window.scrollTo(0,0);
        searchInput.focus();
        return;
    }

    const proveedorProducto = selectedProductName.dataset.proveedor || "";
    if (!proveedorActivo) {
        proveedorActivo = proveedorProducto;
        actualizarProveedorUI();
    } else if (proveedorActivo !== proveedorProducto) {
        alert(`Este conteo es solo para:
${proveedorActivo}

No se pueden mezclar proveedores.`);
        return;
    }

    conteosEfectuados.push({
        codigo: selectedProductName.dataset.codigo,
        nombre: selectedProductName.textContent,
        proveedor: proveedorProducto,
        uxb: uxb,
        bultos: bultos,
        unidades: unidades,
        total: (bultos * uxb) + unidades,
        fecha: inputFecha.value,
        hora: new Date().toLocaleTimeString()
    });
    localStorage.setItem('misConteos', JSON.stringify(conteosEfectuados));
    actualizarVista();
    detailCard.classList.add('hidden');
    document.getElementById('productForm').reset();
    window.scrollTo(0,0);
    searchInput.focus();
}

document.getElementById('productForm').addEventListener('submit', (e) => {
    e.preventDefault();
    guardarConteo();
});

// 4. TABLA EN PANTALLA
function formatFecha(iso) {
    if (!iso) return '';
    const partes = iso.split('-');
    if (partes.length !== 3) return iso;
    const [y, m, d] = partes;
    return `${d}/${m}/${y}`;
}

function actualizarVista() {
    if (conteosEfectuados.length === 0) {
        sessionEntries.innerHTML = "Sin datos.";
        exportButton.disabled = true;
        return;
    }
    exportButton.disabled = false;
    const esc = (t) => String(t == null ? '' : t).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
    const n = conteosEfectuados.length;
    let html = `<div class="entries-summary">${n} cargado${n === 1 ? '' : 's'} · el último arriba</div>`;
    for (let idx = n - 1; idx >= 0; idx--) {
        const entry = conteosEfectuados[idx];
        const calc = entry.unidades ? `${entry.bultos} bultos × ${entry.uxb} + ${entry.unidades} sueltas` : `${entry.bultos} bultos × ${entry.uxb}`;
        html += `<div class="entry-card${entry.editado ? ' editado' : ''}">
            <div class="ec-head"><div class="ec-name">${esc(entry.nombre)}</div><div class="ec-total">${entry.total}<small>un.</small></div></div>
            <div class="ec-meta"><span>${esc(entry.codigo)}</span><span>Vence ${formatFecha(entry.fecha) || '—'}</span><span>${calc}</span>${entry.editado ? '<span class="ec-edit">editado</span>' : ''}</div>
            <div class="ec-actions"><button type="button" class="row-edit" data-idx="${idx}" aria-label="Editar renglón">Editar</button><button type="button" class="row-delete" data-idx="${idx}" aria-label="Borrar renglón">Borrar</button></div>
        </div>`;
    }
    sessionEntries.innerHTML = html;
}

// Editar un renglón (cantidad de bultos, unidades sueltas o vencimiento)
sessionEntries.addEventListener('click', (e) => {
    const btn = e.target.closest('.row-edit');
    if (!btn) return;
    entrarEdicion(parseInt(btn.dataset.idx, 10));
});

// Borrar un renglón puntual sin perder el resto del conteo
sessionEntries.addEventListener('click', (e) => {
    const btn = e.target.closest('.row-delete');
    if (!btn) return;
    const idx = parseInt(btn.dataset.idx, 10);
    const entry = conteosEfectuados[idx];
    if (!entry) return;
    if (!confirm(`¿Borrar este renglón?\n${entry.codigo} - ${entry.nombre}`)) return;
    conteosEfectuados.splice(idx, 1);
    if (editandoIdx !== null) {
        if (editandoIdx === idx) { salirEdicion(); detailCard.classList.add('hidden'); document.getElementById('productForm').reset(); }
        else if (idx < editandoIdx) editandoIdx--;
    }
    localStorage.setItem('misConteos', JSON.stringify(conteosEfectuados));
    actualizarVista();
});

// 5. EXPORTAR EXCEL (.xlsx real, generado por la app)
// Antes se exportaba un CSV y cada celular lo convert\u00EDa a Excel con una
// app distinta (algunas lo separaban bien en columnas, otras no y encima
// corromp\u00EDan las fechas). Generando el .xlsx ac\u00E1 mismo con SheetJS, el
// archivo sale siempre igual sin importar el celular.
exportButton.onclick = () => {
    const encabezados = ["Codigo", "Producto", "Proveedor", "UxB", "Bultos", "Unidades", "Total", "Vencimiento", "Hora"];
    const filas = conteosEfectuados.map(i => [
        i.codigo, i.nombre, i.proveedor || "", i.uxb, i.bultos, i.unidades, i.total, i.fecha, i.hora
    ]);
    const datos = [encabezados, ...filas];

    const hoja = XLSX.utils.aoa_to_sheet(datos);
    hoja['!cols'] = [
        { wch: 12 }, // Codigo
        { wch: 38 }, // Producto
        { wch: 28 }, // Proveedor
        { wch: 8 },  // UxB
        { wch: 8 },  // Bultos
        { wch: 10 }, // Unidades
        { wch: 10 }, // Total
        { wch: 14 }, // Vencimiento
        { wch: 12 }  // Hora
    ];

    const libro = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(libro, hoja, "Conteo");
    XLSX.writeFile(libro, `conteo_${new Date().toLocaleDateString().replace(/\//g, '-')}.xlsx`);
};

document.getElementById('newCountButton').onclick = () => {
    if(confirm("¿Limpiar todo?")) {
        localStorage.removeItem('misConteos');
        conteosEfectuados = [];
        salirEdicion();
        detailCard.classList.add('hidden');
        proveedorActivo = null;
        actualizarProveedorUI();
        actualizarVista();
    }
};

actualizarProveedorUI();

actualizarVista();

// ============================
// Versión de la app y aviso de versión nueva.
// Si cambiás APP_VERSION, cambiá también el "?v=" de script.js en index.html: el aviso compara los dos.
// Consultar necesita conexión; sin conexión no hace nada y se sigue trabajando normal (los conteos están en el celular).
// ============================
const APP_VERSION = '1.17';
(function mostrarVersion() {
    const h = document.querySelector('.app-header h1');
    if (h) h.insertAdjacentHTML('beforeend', ` <small class="app-version">v${APP_VERSION}</small>`);
})();

let ultimoChequeoVersion = 0;
async function buscarActualizacion() {
    if (Date.now() - ultimoChequeoVersion < 60000) return; // como mucho 1 consulta por minuto
    ultimoChequeoVersion = Date.now();
    try {
        const r = await fetch('index.html?chk=' + Date.now(), { cache: 'no-store' });
        if (!r.ok) return;
        const m = (await r.text()).match(/script\.js\?v=([0-9.]+)/);
        if (m && m[1] !== APP_VERSION) mostrarAvisoActualizacion(m[1]);
    } catch (_) { /* sin conexión */ }
}

function mostrarAvisoActualizacion(version) {
    if (document.getElementById('avisoVersion')) return;
    const d = document.createElement('div');
    d.id = 'avisoVersion';
    d.innerHTML = `<span>Versión nueva v${version}<br><small>Tus conteos no se pierden</small></span><button type="button" id="btnActualizarApp">Actualizar</button>`;
    const encabezado = document.querySelector('main .app-header');
    if (encabezado) encabezado.insertAdjacentElement('afterend', d);
    else (document.querySelector('main') || document.body).insertBefore(d, (document.querySelector('main') || document.body).firstChild);
    document.getElementById('btnActualizarApp').onclick = () => { location.href = location.pathname + '?v=' + Date.now(); };
}

buscarActualizacion();
document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'visible') buscarActualizacion(); });
window.addEventListener('online', buscarActualizacion);

// ============================
// Ventana de "Novedades": avisa qué cambió cada vez que se actualiza la app (mismo criterio que CobroSync).
// Lista escrita a mano: se agrega una entrada nueva por cada versión que tenga algo para contarle a quien cuenta.
// El "visto hasta" se guarda en el celular, así que cada uno la ve una sola vez.
// ============================
const CHANGELOG = [
    { version: '1.13', fecha: '12/11/2026', items: ['El catálogo de productos se actualizó igual que Gescom: 581 productos, con las unidades por bulto de 611.'] },
    { version: '1.14', fecha: '12/11/2026', items: ['Ahora podés corregir cada carga con el botón "Editar" (bultos, unidades sueltas y vencimiento). Funciona sin conexión.'] },
    { version: '1.15', fecha: '12/11/2026', items: ['Las cargas se ven en tarjetas más chicas: entran 3 por pantalla y la última queda arriba.', 'Si hay una versión nueva de COUNT, aparece un aviso con el botón "Actualizar". Tus conteos no se pierden.'] },
    { version: '1.16', fecha: '12/11/2026', items: ['Pantalla más limpia: los paneles de búsqueda y de datos del producto aparecen solo cuando los necesitás.'] },
    { version: '1.17', fecha: '12/11/2026', items: ['Nuevo: esta ventana te cuenta qué cambió cada vez que COUNT se actualiza.'] },
];
const LS_NOVEDADES_VISTAS = 'count_novedades_vistas_v1';
const MAX_NOVEDADES_VISIBLES = 4;

function compararVersiones(a, b) {
    const pa = String(a).split('.').map(Number), pb = String(b).split('.').map(Number);
    for (let i = 0; i < Math.max(pa.length, pb.length); i++) {
        const d = (pa[i] || 0) - (pb[i] || 0);
        if (d !== 0) return d;
    }
    return 0;
}

function novedadesPendientes(vistoHasta) {
    const nuevas = CHANGELOG.filter((e) => !vistoHasta || compararVersiones(e.version, vistoHasta) > 0);
    return nuevas.slice(-MAX_NOVEDADES_VISIBLES).reverse();
}

function mostrarNovedades() {
    let visto = null;
    try { visto = localStorage.getItem(LS_NOVEDADES_VISTAS); } catch (_) { /* sin almacenamiento: se muestra igual */ }
    const pendientes = novedadesPendientes(visto);
    if (pendientes.length === 0 || document.getElementById('modalNovedades')) return;
    const esc = (t) => String(t).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
    const lista = pendientes.map((e) => `<div class="nov-version"><strong>Versión ${e.version}</strong><ul>${e.items.map((t) => `<li>${esc(t)}</li>`).join('')}</ul></div>`).join('');
    const m = document.createElement('div');
    m.id = 'modalNovedades';
    m.setAttribute('role', 'dialog');
    m.setAttribute('aria-modal', 'true');
    m.setAttribute('aria-labelledby', 'novTitulo');
    m.innerHTML = `<div class="nov-card"><h2 id="novTitulo">Novedades de COUNT</h2><div class="nov-body">${lista}</div><button type="button" id="btnNovedadesOk">Entendido</button></div>`;
    document.body.appendChild(m);
    document.getElementById('btnNovedadesOk').onclick = () => {
        try { localStorage.setItem(LS_NOVEDADES_VISTAS, CHANGELOG[CHANGELOG.length - 1].version); } catch (_) { /* nada */ }
        m.remove();
    };
}

mostrarNovedades();
