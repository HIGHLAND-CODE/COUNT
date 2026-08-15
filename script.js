const productos = [
   {"codigo": "300058397", "descripcion": "3D QUESO 143GX18X1", "unidades_x_bulto": 18, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300058395", "descripcion": "3D QUESO 43GX75X1", "unidades_x_bulto": 75, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300060661", "descripcion": "3D QUESO 85GX27X1", "unidades_x_bulto": 27, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300052023", "descripcion": "3DMEGAQUESO23GX120", "unidades_x_bulto": 120, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300050336", "descripcion": "CHEETOS 23GRX108", "unidades_x_bulto": 108, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300065826", "descripcion": "CHEETOS ONDULADOS KETCHUP 40GX66", "unidades_x_bulto": 66, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300065825", "descripcion": "CHEETOS ONDULADOS KETCHUP 80GX24", "unidades_x_bulto": 24, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300060662", "descripcion": "CHEETOS QUESO 140GX18X1", "unidades_x_bulto": 18, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300060663", "descripcion": "CHEETOS QUESO 229GX12X1", "unidades_x_bulto": 12, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300059433", "descripcion": "CHEETOS QUESO 43GX70X1", "unidades_x_bulto": 70, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300060664", "descripcion": "CHEETOS QUESO 85GX24X1", "unidades_x_bulto": 24, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300061011", "descripcion": "CHEETOS QUESO CREMA 43GX66", "unidades_x_bulto": 66, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300061010", "descripcion": "CHEETOS QUESO CREMA 85GX24", "unidades_x_bulto": 24, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300064915", "descripcion": "DORITOS DINAMITA EXTRA FH 45GX110X1 ARG", "unidades_x_bulto": 110, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300064914", "descripcion": "DORITOS DINAMITA EXTRA FH 82GX38X1 ARG", "unidades_x_bulto": 38, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300064055", "descripcion": "DORITOS DINAMITA FH 45GX110X1", "unidades_x_bulto": 110, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300064054", "descripcion": "DORITOS DINAMITA FH 82GX38X1", "unidades_x_bulto": 38, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300066262", "descripcion": "DORITOS PIZZA 35GX88X1", "unidades_x_bulto": 88, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300066261", "descripcion": "DORITOS PIZZA 74GX29X1", "unidades_x_bulto": 29, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300060190", "descripcion": "DORITOS QUESO 129GX19", "unidades_x_bulto": 19, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300060191", "descripcion": "DORITOS QUESO 200GX14", "unidades_x_bulto": 14, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300065477", "descripcion": "DORITOS QUESO 20GX6X10 TIR", "unidades_x_bulto": 6, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300064193", "descripcion": "DORITOS QUESO 20GX88X1", "unidades_x_bulto": 88, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300066598", "descripcion": "DORITOS QUESO 40GX6X10 TIR", "unidades_x_bulto": 10, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300059545", "descripcion": "DORITOS QUESO 40GX70X1", "unidades_x_bulto": 70, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300060192", "descripcion": "DORITOS QUESO 77GX26", "unidades_x_bulto": 26, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300063015", "descripcion": "DORITOS SWEET CHILI MB 74GX29X1", "unidades_x_bulto": 29, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300066581", "descripcion": "LAYS ACAN ASADO 34GX72X1 MND", "unidades_x_bulto": 72, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300066580", "descripcion": "LAYS ACAN ASADO 77GX25X1", "unidades_x_bulto": 25, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300064887", "descripcion": "LAYS BARBACOA 77GX25X1", "unidades_x_bulto": 25, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300065476", "descripcion": "LAYS CLASICA 20GX6X10 TIR", "unidades_x_bulto": 6, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300066500", "descripcion": "LAYS CLASICA 40GX6X10 TIR", "unidades_x_bulto": 10, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300065287", "descripcion": "LAYS CLASICAS 134GX18X1", "unidades_x_bulto": 18, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300051988", "descripcion": "LAYS CLASICAS 20GRX76", "unidades_x_bulto": 76, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300065313", "descripcion": "LAYS CLASICAS 230GX13X1", "unidades_x_bulto": 13, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300060231", "descripcion": "LAYS CLASICAS 330GX9", "unidades_x_bulto": 9, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300059432", "descripcion": "LAYS CLASICAS 40GX68X1", "unidades_x_bulto": 68, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300060195", "descripcion": "LAYS CLASICAS 85GX25X1", "unidades_x_bulto": 25, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300060080", "descripcion": "LAYS JAMON SERRANO 122GX19", "unidades_x_bulto": 19, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300059431", "descripcion": "LAYS JAMON SERRANO 34GX72", "unidades_x_bulto": 72, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300065286", "descripcion": "LAYS JAMON SERRANO 77GX25X1", "unidades_x_bulto": 25, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300065285", "descripcion": "LAYS KETCHUP 77GX25X1", "unidades_x_bulto": 25, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300059801", "descripcion": "LAYS ONDAS FH 30GX72", "unidades_x_bulto": 72, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300059811", "descripcion": "LAYS ONDAS FH 70GX28", "unidades_x_bulto": 28, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300064885", "descripcion": "LAYS PANCETA 77GX25X1", "unidades_x_bulto": 25, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300065284", "descripcion": "LAYS PROVOLETA 77GX25X1", "unidades_x_bulto": 25, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300059430", "descripcion": "LAYS QSO Y CEBOLLA 34GX72", "unidades_x_bulto": 72, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300065361", "descripcion": "LAYS QUESO CEBO 77GX25X1", "unidades_x_bulto": 25, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300063273", "descripcion": "MANI CON PIEL 135GX40X1", "unidades_x_bulto": 40, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300061023", "descripcion": "MANI PELADO 135GX40X1", "unidades_x_bulto": 40, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300061022", "descripcion": "MANI PELADO 320GX17X1", "unidades_x_bulto": 17, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300064854", "descripcion": "MANI PELADO TUBULAR 40GX100X1", "unidades_x_bulto": 100, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300061030", "descripcion": "MANI SAL CON PIEL 75GX64X1", "unidades_x_bulto": 64, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300063271", "descripcion": "MANI SAL PELADO 75GX64X1", "unidades_x_bulto": 64, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300061021", "descripcion": "MANIAX JAPONES JAMON 95GX40X1", "unidades_x_bulto": 40, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300061020", "descripcion": "MANIAX JAPONES SAL 95GX40X1", "unidades_x_bulto": 40, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300060869", "descripcion": "MANIAX SAL Y LIMON 95GX60X1", "unidades_x_bulto": 60, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300064630", "descripcion": "PEHUA PAPA ACANA 90GX22 RM", "unidades_x_bulto": 22, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300064641", "descripcion": "PEHUA PAPA LISA 90GX22 RM", "unidades_x_bulto": 22, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300064830", "descripcion": "PEHUAMAR ACAN CHIMICHURRI 80X25X1", "unidades_x_bulto": 25, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300064478", "descripcion": "PEHUAMAR ACAN MATAMBRITO 80X25X1", "unidades_x_bulto": 25, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300062973", "descripcion": "PEHUAMAR ACANALADA 230GX14X1", "unidades_x_bulto": 14, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300064640", "descripcion": "PEHUAMAR ACANALADA 450X9 RM", "unidades_x_bulto": 9, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300052758", "descripcion": "PEHUAMAR MAICITOS 125GX16", "unidades_x_bulto": 16, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300062972", "descripcion": "PEHUAMAR MAICITOS 265GX10X1", "unidades_x_bulto": 10, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300060094", "descripcion": "PEHUAMAR PALIQUESO 165GX21X1", "unidades_x_bulto": 21, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300060093", "descripcion": "PEHUAMAR PALIQUESO 620GX6X1", "unidades_x_bulto": 6, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300052656", "descripcion": "PEHUAMAR PALIQUESO 90GX36", "unidades_x_bulto": 36, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300060092", "descripcion": "PEHUAMAR PALISAL 165GX21X1", "unidades_x_bulto": 21, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300060091", "descripcion": "PEHUAMAR PALISAL 620GX6X1", "unidades_x_bulto": 6, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300052790", "descripcion": "PEHUAMAR PALISAL 90GX36", "unidades_x_bulto": 36, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300060097", "descripcion": "PEHUAMAR PAPA ACANA 135GX19", "unidades_x_bulto": 19, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300060196", "descripcion": "PEHUAMAR PAPA LISA 135GX19X1", "unidades_x_bulto": 19, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300060197", "descripcion": "PEHUAMAR PAPA LISA 230GX14X1", "unidades_x_bulto": 14, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300064740", "descripcion": "PEHUAMAR PAPA LISA 450GX9 RM", "unidades_x_bulto": 9, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300052821", "descripcion": "PEP COMUN 120GRX21", "unidades_x_bulto": 21, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300033488", "descripcion": "PEP COMUN 60X40 GR", "unidades_x_bulto": 60, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300052820", "descripcion": "PEP COMUN 84GRX36", "unidades_x_bulto": 36, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300058720", "descripcion": "PEP RAMITAS QUESO 120GX21", "unidades_x_bulto": 21, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300058740", "descripcion": "PEP RAMITAS QUESO 40GX60", "unidades_x_bulto": 60, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300058721", "descripcion": "PEP RAMITAS QUESO 84GX36", "unidades_x_bulto": 36, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300052756", "descripcion": "PEP RUEDITAS 120GRX21", "unidades_x_bulto": 21, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300033489", "descripcion": "PEP RUEDITAS 60X40 GR PI", "unidades_x_bulto": 60, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300052757", "descripcion": "PEP RUEDITAS 74GRX36", "unidades_x_bulto": 36, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300065501", "descripcion": "PEP RUEDITAS FH 71GX36X1", "unidades_x_bulto": 36, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300065572", "descripcion": "QUAKER AVENA EXT FINA 470GX12 ARG", "unidades_x_bulto": 12, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300065613", "descripcion": "QUAKER AVENA INST 280GX20 ARG", "unidades_x_bulto": 20, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300065612", "descripcion": "QUAKER AVENA INST 500GX10 ARG", "unidades_x_bulto": 10, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300065611", "descripcion": "QUAKER AVENA TRADIC 280GX20 ARG", "unidades_x_bulto": 20, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300065610", "descripcion": "QUAKER AVENA TRADIC 550GX12 ARG", "unidades_x_bulto": 12, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300065828", "descripcion": "TOSTITOS ROUNDED SAL 100GX26X1", "unidades_x_bulto": 26, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300065827", "descripcion": "TOSTITOS ROUNDED SAL 160GX19X1", "unidades_x_bulto": 19, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300065792", "descripcion": "TOSTITOS ROUNDED SAL 260GX15X1", "unidades_x_bulto": 15, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300052697", "descripcion": "TWISTOS MINIT JAMON 155GX20", "unidades_x_bulto": 20, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300063264", "descripcion": "TWISTOS MINIT JAMON 40GX112X1", "unidades_x_bulto": 112, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300063098", "descripcion": "TWISTOS MINIT JAMON 95GX30X1", "unidades_x_bulto": 30, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300052694", "descripcion": "TWISTOS MINIT QUESO 155GX20", "unidades_x_bulto": 20, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300063263", "descripcion": "TWISTOS MINIT QUESO 40GX112X1", "unidades_x_bulto": 112, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300063097", "descripcion": "TWISTOS MINIT QUESO 95GX30X1", "unidades_x_bulto": 30, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300066791", "descripcion": "PEHUAMAR ACANALADA 420GRX9X1 RM", "unidades_x_bulto": 9, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "300066790", "descripcion": "PEHUAMAR PAPA LISA 420GRX9X1 RM", "unidades_x_bulto": 9, "proveedor": "Pepsico de Argentina SRL"},
    {"codigo": "10530", "descripcion": "HEREFORD TTO 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "10531", "descripcion": "HEREFORD BCO 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "14029", "descripcion": "HEREFORD MALBEC 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "14507", "descripcion": "EL BAUTISMO MALBEC 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "14508", "descripcion": "EL BAUTISMO BLEND TINTAS 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "14509", "descripcion": "EL BAUTISMO BLEND B. DLCE 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "14510", "descripcion": "EL BAUTISMO ROSADO 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "14540", "descripcion": "FRIZZE ITALIAN POMELATA 6X1000", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "14553", "descripcion": "LA GRAN NACHA X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "14554", "descripcion": "EL REGRESO SEM-CHEN  X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "14555", "descripcion": "EL ULTIMO RIE MEJOR X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "14578", "descripcion": "TERMIDOR B. DULCE 12x1L", "unidades_x_bulto": 12, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "14581", "descripcion": "TERMIDOR INTENSO TTO  12X1L", "unidades_x_bulto": 12, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "14583", "descripcion": "FRIZZE EVOL BLUE NEW X1000", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "14585", "descripcion": "FRIZZE IT LIM NEW X 1000", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "14590", "descripcion": "TERMIDOR BLANCO 12X1L", "unidades_x_bulto": 12, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "14594", "descripcion": "FRIZZE BLUE LATA X473", "unidades_x_bulto": 24, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "14595", "descripcion": "FRIZZE ITAL LIMA LATA X473", "unidades_x_bulto": 24, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "14596", "descripcion": "FRIZZE POMELATA 6X473", "unidades_x_bulto": 24, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "14605", "descripcion": "TERMIDOR 2021 TINTO  12X1L", "unidades_x_bulto": 12, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "14619", "descripcion": "FRIZZE BUBBLE MOOD 6X1000", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "14620", "descripcion": "FRIZZE MANXANA POP 6X1000", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "20161", "descripcion": "VIEJO SOLAR MAGN. TINTO 6X1125", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "20202", "descripcion": "SUTER BI-VARIETAL SYRCAB 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "20205", "descripcion": "SUTER BI-VARIETAL MALBON 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "20250", "descripcion": "SUTER VARIETAL CABERNET 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "20251", "descripcion": "SUTER VARIETAL MALBEC 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "20254", "descripcion": "SUTER VARIETAL CHARD 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "20255", "descripcion": "SUTER VARIETAL TARDIO6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "20301", "descripcion": "SUTER ETIQ MARRON DNAT 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "20303", "descripcion": "SUTER ETIQ MARRON NEW PIN 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "20305", "descripcion": "SUTER ETIQ MARRON BLANC DE BLANCO 6X 750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "20500", "descripcion": "SUTER CHAMPAÑA E.BRUT 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "20501", "descripcion": "SUTER CHAMPAÑA DULCE 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "20505", "descripcion": "SUTER CHAMPAÑA E.DULCE 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "30001", "descripcion": "JW RED 12X750 UK", "unidades_x_bulto": 12, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "30002", "descripcion": "JW RED 12X1000 UK", "unidades_x_bulto": 12, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "30003", "descripcion": "JW BLACK LABEL 12x750", "unidades_x_bulto": 12, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "30004", "descripcion": "JW BLACK LABEL 12x1000", "unidades_x_bulto": 12, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "30005", "descripcion": "JW DOUBLE BLACK 6x750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "30007", "descripcion": "JW GOLD RVE 6x750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "30008", "descripcion": "JW SWING 12x750", "unidades_x_bulto": 12, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "30009", "descripcion": "J WALKER BLUE LABEL 18 6x750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "30010", "descripcion": "J&B RARE 6X750", "unidades_x_bulto": 12, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "30012", "descripcion": "BAILEYS NUEVA BOTELLA 12x750", "unidades_x_bulto": 12, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "30016", "descripcion": "KETEL ONE 12 X 750", "unidades_x_bulto": 12, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "30018", "descripcion": "ZACAPA CENTENARIO 6x750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "30019", "descripcion": "SMIRNOFF 21 DO 12X700", "unidades_x_bulto": 12, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "30020", "descripcion": "SMIRNOFF GREEN APPLE DO 6X700", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "30021", "descripcion": "SMIRNOFF CITRUS DO 6X700", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "30022", "descripcion": "SMIRNOFF RASPBERRY DO 6X700", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "30023", "descripcion": "WHITE HORSE DO 12X750", "unidades_x_bulto": 12, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "30025", "descripcion": "LEGUI 40 AÑOS 12X750", "unidades_x_bulto": 12, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "30029", "descripcion": "J WALKER GREEN 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "30032", "descripcion": "TALISKER 10 AÑOS 6X750 ML", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "30033", "descripcion": "CAOL ILA 12 AÑOS 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "30034", "descripcion": "GORDON S GIN 6X700", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "30035", "descripcion": "PIMMS BITTER 12X750", "unidades_x_bulto": 12, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "30043", "descripcion": "GLEN ELGIN 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "30048", "descripcion": "OLD PARR 12YO 12x750", "unidades_x_bulto": 12, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "30054", "descripcion": "ZACAPA CENT XO 6x750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "30058", "descripcion": "BULLEIT 6X700", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "30065", "descripcion": "SMIRNOFF WATERMELON 6X700", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "30066", "descripcion": "J WALKER 18 6x750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "30075", "descripcion": "GORDON´S GIN 6x700", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "30076", "descripcion": "BUCHANANAS DELUXE 12X750", "unidades_x_bulto": 12, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "30077", "descripcion": "SHERIDANS 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "30078", "descripcion": "ANTARES KOLSH 12 X 500ML", "unidades_x_bulto": 12, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "30085", "descripcion": "J&B YELLOW 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "30087", "descripcion": "SINGLETON 12 YO 6X700", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "30088", "descripcion": "SINGLETON 15 YO 6X700", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "30089", "descripcion": "SINGLETON 18 YO 6X700", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "30107", "descripcion": "ANTARES SCOTH 12 X 500ML", "unidades_x_bulto": 12, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "30109", "descripcion": "J WALKER WHITE 12X1000", "unidades_x_bulto": 12, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "30112", "descripcion": "CAPTAIN MORGAN SPICE GOLD6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "30114", "descripcion": "ANTARES PORTER 12 X 500ML", "unidades_x_bulto": 12, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "30121", "descripcion": "ANTARES HONEY 12 X 500ML", "unidades_x_bulto": 12, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "30126", "descripcion": "J WALKER BLACK ICON 12X700", "unidades_x_bulto": 12, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "30128", "descripcion": "TANQUERAY SEVILLA GIN X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "30129", "descripcion": "BAILEYS SALTED CARAMEL 12X750", "unidades_x_bulto": 12, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "30130", "descripcion": "TANQUERAY DRY GIN X700", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "30131", "descripcion": "SMIRNOFF TROPICAL FRUITS 6X700", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "30132", "descripcion": "TANQUERAY ROYALE X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "30134", "descripcion": "GORDON´S PINK GIN 6X700", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "30135", "descripcion": "SMIRNOFF TAMARINDO 6 X 700", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "30138", "descripcion": "JW GOLD RESERVE 6x750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "30139", "descripcion": "GORDONS  TROPICAL FRUITS 6X700", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "30140", "descripcion": "TANQUERAY BOSSA NOVA 6X700", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "30145", "descripcion": "ANTARES IMPERIAL STOUT BOT 12 X 500ML", "unidades_x_bulto": 12, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "30251", "descripcion": "ANTARES LATA ATLANTICA 6 X 473ML", "unidades_x_bulto": 24, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "30268", "descripcion": "ANTARES LATA CARAVANA 6 X 473ML", "unidades_x_bulto": 24, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "30275", "descripcion": "ANTARES LATA IPA 6 X 473ML", "unidades_x_bulto": 24, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "30299", "descripcion": "ANTARES LATA HONEY 6 X 473ML", "unidades_x_bulto": 24, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "30329", "descripcion": "ANTARES LATA KOLSCH 6 X 473ML", "unidades_x_bulto": 24, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "30330", "descripcion": "AGUA SAB. NARANJA S.P 12X500ML", "unidades_x_bulto": 12, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "30343", "descripcion": "ANTARES LATA SCOTCH 6 X 473ML", "unidades_x_bulto": 24, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "30354", "descripcion": "AGUA SAB. POMELO S.P 12X500ML", "unidades_x_bulto": 12, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "30378", "descripcion": "AGUA SAB. MANZANA S.P 12X500ML", "unidades_x_bulto": 12, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "30783", "descripcion": "GALLETAS ARGENTITAS 12X306GR", "unidades_x_bulto": 12, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "33454", "descripcion": "AGUA MINERAL S.P 12X600ML", "unidades_x_bulto": 12, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "34277", "descripcion": "AGUA ISOTONICA MORA BLUE 12X600ML", "unidades_x_bulto": 12, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "34284", "descripcion": "AGUA ISOTONICA TROPICAL 12X600ML", "unidades_x_bulto": 12, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "35093", "descripcion": "SMIRNOFF BC GRAPEF.&LIME 6X700", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "35095", "descripcion": "VAT 69 12X700", "unidades_x_bulto": 12, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "35096", "descripcion": "VAT 69 HONEY X700", "unidades_x_bulto": 12, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "35097", "descripcion": "VAT 69 APPLE X700", "unidades_x_bulto": 12, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "35101", "descripcion": "SMIRNOFF BC ORANGE & LIME 6X700", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "35102", "descripcion": "SMIRNOFF BC TANGE&LEMONGRASS 6X700", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "35103", "descripcion": "SMIRNOFF ICE LATA 4X6X473", "unidades_x_bulto": 24, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "35104", "descripcion": "SMF ICE GREENAPPLE LAT 4X6X473", "unidades_x_bulto": 24, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "35105", "descripcion": "SMF ICE RED BERRIE LAT 4X6X473", "unidades_x_bulto": 24, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "35107", "descripcion": "GORDON´S TONIC 4X6X473", "unidades_x_bulto": 24, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "35108", "descripcion": "SMF BC RUBYORANGE&LIME LATA 4X6X473", "unidades_x_bulto": 24, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "35109", "descripcion": "SMF  BC GRAPEF&LIME  LATA 4X6X473", "unidades_x_bulto": 24, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "41080", "descripcion": "FINCA NOTABLES CAB SAUV.6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "41082", "descripcion": "FINCA NOTABLES MALBEC .6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "41641", "descripcion": "DON DAVID MALBEC 12X375", "unidades_x_bulto": 12, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "41682", "descripcion": "DON DAVID MALBEC 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "41687", "descripcion": "DON DAVID SYRAH 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "42101", "descripcion": "ELEMENTOS CABSAUV 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "42102", "descripcion": "ELEMENTOS MALBEC 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "42103", "descripcion": "ELEMENTOS SYRAH 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "42104", "descripcion": "ELEMENTOS TANNAT 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "42105", "descripcion": "ELEMENTOS TORRONTES 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "42107", "descripcion": "ELEMENTOS CHARDONNAY 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "42113", "descripcion": "ELEMENTOS TORRONTES DLCE6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "42373", "descripcion": "DON DAVID CABERNET 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "42374", "descripcion": "DON DAVID CHARDONNAY 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "42375", "descripcion": "DON DAVID TORRONTES 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "42376", "descripcion": "DON DAVID RED BLEND 6X 750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "42377", "descripcion": "DON DAVID TORRON LOW ALC 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "44280", "descripcion": "ELEMENTOS MALBEC 12X375", "unidades_x_bulto": 12, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "44288", "descripcion": "EL ESTECO MALBEC 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "44289", "descripcion": "EL ESTECO CABERNET SAUV 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "44296", "descripcion": "DON DAVID RESERVA MALBEC X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "44297", "descripcion": "DON DAVID RESERVA CAB.SAUV X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "44311", "descripcion": "EL ESTECO MALBEC 1X1500", "unidades_x_bulto": 1, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "44314", "descripcion": "ELEMENTOS ROSADO TORRONT 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "44354", "descripcion": "EL ESTECO BLANC DE BLANC  4X750", "unidades_x_bulto": 4, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "44367", "descripcion": "BLEND DE EXTREMOS MB EE 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "44368", "descripcion": "BLEND DE EXTREMOS CB EE 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "44389", "descripcion": "DON DAVID PINOT NOIR6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "44395", "descripcion": "ELEMENTOS RED BLEND 6 X 750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "44396", "descripcion": "BLEND DE EXTREMOS PN PN 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "51943", "descripcion": "LA MASCOTA MALBEC 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "51945", "descripcion": "LA MASCOTA CAB. SAUV 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "51946", "descripcion": "LA MASCOTA CHARDONNAY 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "54011", "descripcion": "GRAN MASCOTA MALBEC 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "54019", "descripcion": "LA MASCOTA CABER FRANC 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "54022", "descripcion": "UNANIME TINTO 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "54035", "descripcion": "LA MASCOTA SPARK BL NOIR 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "60015", "descripcion": "ANTARES PLAYA GRANDE 6 X 473ML", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "60017", "descripcion": "ANTARES IPA LATA 6X473 (NEW)", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "60018", "descripcion": "ANTARES LAGER LATA 6X473", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "60019", "descripcion": "ANTARES IPA SIN ALC LATA 6X473", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "60020", "descripcion": "ANTARES XPA LATA  6X473", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "60021", "descripcion": "ANTARES LAGER PORRON 6X330", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "60022", "descripcion": "ANTARES LAGER BOTELLA 6X660", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "70201", "descripcion": "FOND CAVE CABSAU 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "70202", "descripcion": "FOND CAVE CHARD 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "70343", "descripcion": "MEDALLA TTO 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "70750", "descripcion": "TRAPICHE ALARIS CABSAUV 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "70751", "descripcion": "TRAPICHE ALARIS CHARDO 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "71704", "descripcion": "TRAPICHE ALARIS MALBEC 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "71706", "descripcion": "TRAPICHE ALARIS SBLANC 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "71716", "descripcion": "ALARIS RED BLEND 6 X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "72541", "descripcion": "TRAPICHE ALARIS MERLOT 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "72857", "descripcion": "F.LAS MORAS CABSAU 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "72858", "descripcion": "F.LAS MORAS SYRAH 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "72859", "descripcion": "F.LAS MORAS MALBEC 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "72867", "descripcion": "FOND CAVE RVA MALBEC 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74025", "descripcion": "MORA NEGRA MAL-BON 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74051", "descripcion": "F. LAS MORAS BONARDA 6 C750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74053", "descripcion": "FOND CAVE RVA COS TARDIA 6 X 500", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74054", "descripcion": "GRAN MEDALLA MALBEC 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74058", "descripcion": "TRAPICHE ALARIS SYRAH 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74074", "descripcion": "GRAN MEDALLA MALBEC 1X6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74117", "descripcion": "FOND CAV RESERVA CAB SAUV FRANCE X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74118", "descripcion": "FOND CAV RESERVA PET. VERDOT X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74140", "descripcion": "FOND CAVE RVA SAUVIGNON 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74144", "descripcion": "FOND CAVE RVA CABSAU 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74146", "descripcion": "FOND CAVE MALBEC 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74147", "descripcion": "FOND CAVE SYRAH 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74167", "descripcion": "F. LAS MORAS SAUV.BLANC 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74170", "descripcion": "FLM GRAN SYRAH 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74188", "descripcion": "TRAPICHE ALARIS DULCE COSECHA 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74208", "descripcion": "ALMA MORA CABSAUV6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74209", "descripcion": "ALMA MORA SYRAH 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74210", "descripcion": "ALMA MORA MALBEC 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74211", "descripcion": "ALMA MORA CHARD 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74238", "descripcion": "GRAN MEDALLA CABERN SAUV 6 X 750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74243", "descripcion": "FOND CAVE CHAMPAÑA 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74246", "descripcion": "FOND CAVE G. RVA CABSAU 6 X 750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74248", "descripcion": "FOND CAVE G. RVA MALBEC 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74263", "descripcion": "TRAPICHE ALARIS TORRONTES 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74268", "descripcion": "F.LAS MORAS MALBEC 12x375", "unidades_x_bulto": 12, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74376", "descripcion": "PAZ DE FLM MALBEC 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74377", "descripcion": "PAZ DE FLM CAB FRANC 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74393", "descripcion": "DADA FMORAS N°1 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74394", "descripcion": "DADA FMORAS N°3 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74395", "descripcion": "DADA FMORAS N°2 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74397", "descripcion": "ALMA MORA BLEND DULCE 6X 750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74398", "descripcion": "ALMA MORA SYRAH ROSE 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74402", "descripcion": "PAZ DE FLM SAUV BLANC 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74410", "descripcion": "ISCAY MALBEC - CABERNET FRANC", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74411", "descripcion": "ISCAY MALBEC/CAB.FRANC 6X1X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74413", "descripcion": "FOND CAVE G. RVA BLEND 6 X 750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74415", "descripcion": "TRAPICHE RESERVA CABSAU 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74416", "descripcion": "DADA ESPUMANTE 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74419", "descripcion": "TRAPICHE RESERVA MALBEC 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74421", "descripcion": "TRAPICHE RESERVA CHARD 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74437", "descripcion": "ALMA MORA BLEND TINTO 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74438", "descripcion": "ALMA MORA BLEND BLANCO 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74443", "descripcion": "FOND CAVE RVA CHARDONNAY 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74446", "descripcion": "DADA 7 SWEET  6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74473", "descripcion": "DADA ESPUMANTE ROS6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74478", "descripcion": "TRAPICHE D. COSECHA ROSE 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74503", "descripcion": "ALMA MORA MALBEC 12X375", "unidades_x_bulto": 12, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74504", "descripcion": "DADA ART MALBEC 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74505", "descripcion": "DADA ART CABERNET 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74509", "descripcion": "F. LAS MORAS BCO DULCE 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74510", "descripcion": "F. LAS MORAS ROSADO 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74520", "descripcion": "MEDALLA MALBEC 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74521", "descripcion": "MEDALLA CABERNET SAUV 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74522", "descripcion": "MEDALLA CHARDONNAY 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74525", "descripcion": "GRAN MEDALLA MALBEC 4X1500", "unidades_x_bulto": 4, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74527", "descripcion": "TRAPICHE ISCAY SYRAH VIOGNIER 4 X1500", "unidades_x_bulto": 4, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74528", "descripcion": "ISCAY MALBEC/CABERNET FRANC 4X1500", "unidades_x_bulto": 4, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74547", "descripcion": "TRAP COSTA & PAMPA P.NOIR 6X 750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74548", "descripcion": "TRAP COSTA&PAMPA S. BLANC 6x750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74555", "descripcion": "TRAPICHE PURO MALBEC", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74556", "descripcion": "TRAPICHE IMPURO MALBEC X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74567", "descripcion": "DADA ESPUMANTE MARACUYA 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74568", "descripcion": "DADA ESPUMANTE CASSIS 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74569", "descripcion": "DADA N°8 CHOCOLATE 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74570", "descripcion": "LOS INTOCABLES MALBEC 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74583", "descripcion": "LOS INTOCABLES CAB.SAUV 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74587", "descripcion": "TRAPICHE TERRIOR SERIES F ORELLANA 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74608", "descripcion": "ALMA MORA SEL RVE MALBEC 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74609", "descripcion": "ALMA MORA SEL RVE CABER 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74610", "descripcion": "ALMA MORA SEL RVE BLEND 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74611", "descripcion": "ALMA MORA SEL RVE CHARDO 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74636", "descripcion": "DADA N6 HONEY X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74651", "descripcion": "LOS INTOCABLES CHARD  6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74656", "descripcion": "GRAN MEDALLA CABER FRAN 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74658", "descripcion": "GRAN MEDALLA PINOT NOIR 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74663", "descripcion": "TRAPICHE PURO CAB.SAUV 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74664", "descripcion": "TRAPICHE IMPURO CAB.SAUV 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74675", "descripcion": "PERFILES MB TEXTURA FINA 6X 750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74676", "descripcion": "TRAPICHE PERFILES MB CALCEREO 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74677", "descripcion": "TRAPICHE PERFILES CS GRAVA 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74678", "descripcion": "TERROIR S ED PIEDRA 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74680", "descripcion": "TERROIR S ED MILAGRO 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74683", "descripcion": "MEDALLA MALBEC 4X1500", "unidades_x_bulto": 4, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74684", "descripcion": "LOS INTOCABLES RED BLEND 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74686", "descripcion": "DEMENCIAL MALBEC 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74687", "descripcion": "DEMENCIAL PINOT NOIR 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74701", "descripcion": "DADA INCREDIBLENDS 1  X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74702", "descripcion": "DADA INCREDIBLENDS 2  X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74703", "descripcion": "DADA INCREDIBLENDS 3  X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74708", "descripcion": "TRAPICHE TERROIR SERIES COLETTO", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74709", "descripcion": "DADA LATA SWEET  4X6X355", "unidades_x_bulto": 24, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74710", "descripcion": "DADA LATA SWEET PINK 4X6X355", "unidades_x_bulto": 24, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74714", "descripcion": "DADA WHITE MALBEC 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74715", "descripcion": "LOS INTOCABLES RUM BLEND 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74721", "descripcion": "FAIR FOR LIFE MALBEC 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74722", "descripcion": "FAIR FOR LIFE CAB.SAUV 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74723", "descripcion": "FAIR FOR LIFE CHARDONNAY 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74726", "descripcion": "ORIGEN BY TRAPICHE MALBEC 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74727", "descripcion": "ORIGEN BY TRAPICHE CAB.S 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74728", "descripcion": "DADA 7 ORANGE BITTER 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74735", "descripcion": "F LAS MORAS RED BLEND  6X 750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74736", "descripcion": "ALMA MORA MERLOT 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74737", "descripcion": "TRAPICHE RES  RED BLEND 6 X 750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74740", "descripcion": "EXPEDICION DEL SUR CABSUA 6 X 750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74748", "descripcion": "DADA N°9 CARAMEL 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74749", "descripcion": "INTOCABLES DOUBLE OAK 6 X 750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74750", "descripcion": "TR TESORO MALBEC 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74761", "descripcion": "MARANTIQUA MALBEC 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74762", "descripcion": "MARANTIQUA CABERNET 6X 750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74763", "descripcion": "MARANTIQUA CHARDONNAY 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74783", "descripcion": "MEDALLA SPARKLING 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74786", "descripcion": "EL BAUTISMO CABERNET 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74813", "descripcion": "DADA EXTRA BRUT 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74814", "descripcion": "CAZADOR MALBEC 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74815", "descripcion": "CAZADOR CAB. SAU 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74816", "descripcion": "CAZADOR BLANCO DULCE 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74827", "descripcion": "ALMA MORA BLANCO DULCE LOW 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74830", "descripcion": "DADA SIDRA 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74832", "descripcion": "CAZADOR ROSADO 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74840", "descripcion": "ALARIS D.COSECHA TINTO 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74881", "descripcion": "LOS ARBOLES ROSADO 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74882", "descripcion": "LOS ARBOLES BCO DULCE 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74883", "descripcion": "DADA SWEET WHITE LOW DADA 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74884", "descripcion": "DADA LATA TINTO VERANO 4X6X355", "unidades_x_bulto": 24, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74886", "descripcion": "DADA SWEET RED LOW DADA 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "74887", "descripcion": "ALMA MORA MALBEC DULCE LOW 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "80002", "descripcion": "SAN TELMO CAB-SAUV X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "80003", "descripcion": "SAN TELMO SEL CHARDONNA  X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "80004", "descripcion": "SAN TELMO MALBEC X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "80007", "descripcion": "LOS ARBOLES SEL CABERNET 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "80008", "descripcion": "LOS ARBOLES SEL CHARD 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "80009", "descripcion": "LOS ARBOLES DULCE X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "80010", "descripcion": "LOS ARBOLES SEL MALBEC 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "80015", "descripcion": "COLECCION PRIVADA BLEND 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "80018", "descripcion": "COLECCION PRIVADA CAB SAUV 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "80020", "descripcion": "COLECCION PRIVADA CHARD 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "80022", "descripcion": "COLECCION PRIVADA MALBEC", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "80024", "descripcion": "COLECCION PRIVADA MERLOT 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "80025", "descripcion": "COLECCION PRIVADA PINOT 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "80030", "descripcion": "NC RESERVA CAB SAUV X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "80031", "descripcion": "NC RESERVA CHARDO 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "80032", "descripcion": "NC RESERVA MALBEC 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "80034", "descripcion": "ALEGORIA CAB SAUV 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "80036", "descripcion": "ALEGORIA CHARDO 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "80037", "descripcion": "ALEGORIA MALBEC 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "80045", "descripcion": "NC SPARK BRUT ROSE 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "80046", "descripcion": "NC SPARK DLCE 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "80048", "descripcion": "NC SPARK EBRUT 6X750 nuevo", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "80049", "descripcion": "NC SPARK EBRUT 6X750 estuche", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "80050", "descripcion": "NC SPARK NATURE 6X750 PREM", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "80062", "descripcion": "NC DOLORES MALBEC 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "80063", "descripcion": "NC DOLORES RED BLEND 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "80064", "descripcion": "NC DOLORES CABERNET 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "80075", "descripcion": "DOLORES ESPUMANTE EBRUT 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "80076", "descripcion": "DOLORES ESPUMANTE ROSE 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "80077", "descripcion": "DOLORES ESPUMANTE DULCE 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "80084", "descripcion": "SEL ENOLOGO BLEND 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "80088", "descripcion": "J DE DIOS NC BLEND", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "80089", "descripcion": "LOS ARBOLES SEL RED BLEND 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "80092", "descripcion": "SAN TELMO SPARK DULCE 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "80093", "descripcion": "SAN TELMO SPARK E.BRUT 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "80094", "descripcion": "NC S E.BRUT4X6X355", "unidades_x_bulto": 24, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "80102", "descripcion": "SAN TELMO SPARK EXT DULCE 6X75 Ma", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "90105", "descripcion": "Cinz. VTH RSO 12X1000", "unidades_x_bulto": 12, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "90106", "descripcion": "Cinz. VTH BI AM 12X1000", "unidades_x_bulto": 12, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "90110", "descripcion": "Cinz. VTH SEGUNDO 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "90111", "descripcion": "Cinz.  TO SPRITZ 6X750", "unidades_x_bulto": 6, "proveedor": "GRUPO PEÑAFLOR SA"},
    {"codigo": "11400001", "descripcion": "Alimento Big C Naranja 12x1000", "unidades_x_bulto": 12, "proveedor": "BIGAR SA "},
    {"codigo": "11400002", "descripcion": "Alimento Big C Ban/frutilla 12x1000", "unidades_x_bulto": 12, "proveedor": "BIGAR SA "},
    {"codigo": "11400003", "descripcion": "Alimento Big C Multifrutal 12x1000", "unidades_x_bulto": 12, "proveedor": "BIGAR SA "},
    {"codigo": "11400004", "descripcion": "Alimento Big C Naranja 18x200", "unidades_x_bulto": 18, "proveedor": "BIGAR SA "},
    {"codigo": "11400005", "descripcion": "Alimento Big C Ban/frutilla 18x200", "unidades_x_bulto": 18, "proveedor": "BIGAR SA "},
    {"codigo": "11400006", "descripcion": "Alimento Big C Multifrutal 18x200", "unidades_x_bulto": 18, "proveedor": "BIGAR SA "},
    {"codigo": "11400007", "descripcion": "Alimento Big C Manzana 18x200", "unidades_x_bulto": 18, "proveedor": "BIGAR SA "},
    {"codigo": "11400008", "descripcion": "Alimento Big C Manzana 12x1000", "unidades_x_bulto": 12, "proveedor": "BIGAR SA "},
    {"codigo": "11400009", "descripcion": "Alimento Big C Pera 12x1000", "unidades_x_bulto": 12, "proveedor": "BIGAR SA "},
    {"codigo": "11400011", "descripcion": "Alimento Big C Pera 18x200", "unidades_x_bulto": 18, "proveedor": "BIGAR SA "},
    {"codigo": "11400012", "descripcion": "Alimento Big C Durazno 12x1000", "unidades_x_bulto": 12, "proveedor": "BIGAR SA "},
    {"codigo": "11400013", "descripcion": "Alimento Big C Durazno 18x200", "unidades_x_bulto": 18, "proveedor": "BIGAR SA "},
    {"codigo": "11400010", "descripcion": "Pure de Tomate Big Choice 1040 grs ", "unidades_x_bulto": 12, "proveedor": "BIGAR SA "},
    {"codigo": "11400014", "descripcion": "Pure de Tomate Big Choice 200 grs ", "unidades_x_bulto": 18, "proveedor": "BIGAR SA "},
    {"codigo": "10600018", "descripcion": "Encendedor Classic Shark .20x25u", "unidades_x_bulto": 20, "proveedor": "BUHL SA"},
    {"codigo": "11800007", "descripcion": "Alfajor Fulbito Choc 40 X 30gr", "unidades_x_bulto": 40, "proveedor": "COMPANIA AMERICANA"},
    {"codigo": "11800008", "descripcion": "Alf. Fulbito Mani 40 X 30gr", "unidades_x_bulto": 40, "proveedor": "COMPANIA AMERICANA"},
    {"codigo": "11800024", "descripcion": "Oblea Smack Choc Mani 48 X 33 Gr", "unidades_x_bulto": 48, "proveedor": "COMPANIA AMERICANA"},
    {"codigo": "11800025", "descripcion": "Cubanito Smacks 48 X 25gr", "unidades_x_bulto": 48, "proveedor": "COMPANIA AMERICANA"},
    {"codigo": "11800027", "descripcion": "Picnic Bizcochuelo 40 Uni X 38 Gr", "unidades_x_bulto": 40, "proveedor": "COMPANIA AMERICANA"},
    {"codigo": "11800028", "descripcion": "Turron Relleno Mouse Nevares 50 X 25gr", "unidades_x_bulto": 50, "proveedor": "COMPANIA AMERICANA"},
    {"codigo": "12500001", "descripcion": "Yerba Mate Playadito C/ Palo 5x1000gr ", "unidades_x_bulto": 5, "proveedor": "COOPERATIVA AGRICOLA DE LA COLONIA LIEBIG LTDA"},
    {"codigo": "12500002", "descripcion": "Yerba Mate Playadito C/ Palo 10x500gr", "unidades_x_bulto": 10, "proveedor": "COOPERATIVA AGRICOLA DE LA COLONIA LIEBIG LTDA"},
    {"codigo": "11500002", "descripcion": "ALFAJOR ELIXIR FANTOCHE SUPER DDL  12 x 7", "unidades_x_bulto": 12, "proveedor": "DIELO S.A.                      "},
    {"codigo": "11500003", "descripcion": "ALFAJOR FANTOCHE ELIXIR 70% CACAO 12 x 60 grs", "unidades_x_bulto": 12, "proveedor": "DIELO S.A.                      "},
    {"codigo": "11500004", "descripcion": "ALFAJOR FANTOCHE ELIXIR CHOCOLATE BLANCO 12 x 60 g", "unidades_x_bulto": 12, "proveedor": "DIELO S.A.                      "},
    {"codigo": "11500005", "descripcion": "fantoche ALFAJOR SIMPLE NIGHT  12 x 50 grs.", "unidades_x_bulto": 12, "proveedor": "DIELO S.A.                      "},
    {"codigo": "11500006", "descripcion": "fantoche ALFAJOR SIMPLE DAY  12 x 50 grs-", "unidades_x_bulto": 12, "proveedor": "DIELO S.A.                      "},
    {"codigo": "11500007", "descripcion": "fantoche ALFAJOR TRIPLE NEGRO 24 x 85 grs.", "unidades_x_bulto": 24, "proveedor": "DIELO S.A.                      "},
    {"codigo": "11500008", "descripcion": "fantoche ALFAJOR TRIPLE BLANCO   24 x 85 grs-", "unidades_x_bulto": 24, "proveedor": "DIELO S.A.                      "},
    {"codigo": "11500009", "descripcion": "fantoche ALFAJOR TRIPLE  12 NIGHT x 85 grs.", "unidades_x_bulto": 12, "proveedor": "DIELO S.A.                      "},
    {"codigo": "11500010", "descripcion": "fantoche ALFAJOR TRIPLE  12 DAY x 85 grs.", "unidades_x_bulto": 12, "proveedor": "DIELO S.A.                      "},
    {"codigo": "11500014", "descripcion": "fantoche MINIALFAJOR CHOCOLATE 25 gr x 60 Un.", "unidades_x_bulto": 60, "proveedor": "DIELO S.A.                      "},
    {"codigo": "11500015", "descripcion": "fantoche MINIALFAJOR LECHE 25 gr x  60 Un.", "unidades_x_bulto": 60, "proveedor": "DIELO S.A.                      "},
    {"codigo": "11500019", "descripcion": "Fantoche Al. simple Pescado Raul Negro x12", "unidades_x_bulto": 12, "proveedor": "DIELO S.A.                      "},
    {"codigo": "11500013", "descripcion": "Fantoche Al. simple Pescado Raul Blanco x12", "unidades_x_bulto": 12, "proveedor": "DIELO S.A.                      "},
    {"codigo": "10400315", "descripcion": "Bizcochos Don Satur Negritos 30x200g", "unidades_x_bulto": 30, "proveedor": "DON SATUR SRL"},
    {"codigo": "10400815", "descripcion": "don satur bizcocho Queso x30x170g", "unidades_x_bulto": 30, "proveedor": "DON SATUR SRL"},
    {"codigo": "10400115", "descripcion": "Bizcochos Don Satur Salados 30x200g", "unidades_x_bulto": 30, "proveedor": "DON SATUR SRL"},
    {"codigo": "10400215", "descripcion": "Bizcochos Don Satur Agridulces 30x200g", "unidades_x_bulto": 30, "proveedor": "DON SATUR SRL"},
    {"codigo": "10408030", "descripcion": "Don satur Pepas x 15 x 300 Grs", "unidades_x_bulto": 15, "proveedor": "DON SATUR SRL"},
    {"codigo": "1040915", "descripcion": "Bizc Don Satur Vegetal Salado 30x170g", "unidades_x_bulto": 30, "proveedor": "DON SATUR SRL"},
    {"codigo": "10406011", "descripcion": "Don Satur Magdalena Vainilla 10x200g", "unidades_x_bulto": 10, "proveedor": "DON SATUR SRL"},
    {"codigo": "10406021", "descripcion": "Don Satur Magdalena v Rell. DDL 10x200g", "unidades_x_bulto": 10, "proveedor": "DON SATUR SRL"},
    {"codigo": "10406031", "descripcion": "Don Satur Magdalena Marmolada 10x200", "unidades_x_bulto": 10, "proveedor": "DON SATUR SRL"},
    {"codigo": "10406041", "descripcion": "Don Satur Magdalena Chocolate Rell, DDL 10x2", "unidades_x_bulto": 10, "proveedor": "DON SATUR SRL"},
    {"codigo": "10406054", "descripcion": "Don Satur Magdalena V. con chip Chocolates 10x200g", "unidades_x_bulto": 10, "proveedor": "DON SATUR SRL"},
    {"codigo": "11100005", "descripcion": "Suerox Frutilla Kiwi 630ml ", "unidades_x_bulto": 6, "proveedor": "GENOMMA LABORATORIES ARGENTINA SA"},
    {"codigo": "11100006", "descripcion": "Suerox Manzana 630ml ", "unidades_x_bulto": 6, "proveedor": "GENOMMA LABORATORIES ARGENTINA SA"},
    {"codigo": "11100007", "descripcion": "Suerox Arandano Pomelo 630ml ", "unidades_x_bulto": 6, "proveedor": "GENOMMA LABORATORIES ARGENTINA SA"},
    {"codigo": "11100009", "descripcion": "Suerox Frutos Rojos 630ml ", "unidades_x_bulto": 6, "proveedor": "GENOMMA LABORATORIES ARGENTINA SA"},
    {"codigo": "11100011", "descripcion": "Suerox Limonada x6x630ml", "unidades_x_bulto": 6, "proveedor": "GENOMMA LABORATORIES ARGENTINA SA"},
    {"codigo": "11100016", "descripcion": "Maq de Afeitar Groomen 300 x12", "unidades_x_bulto": 144, "proveedor": "GENOMMA LABORATORIES ARGENTINA SA"},
    {"codigo": "11100313", "descripcion": "Maq de Afeitar Groomen 500 x12", "unidades_x_bulto": 144, "proveedor": "GENOMMA LABORATORIES ARGENTINA SA"},
    {"codigo": "11100018", "descripcion": "Duracell Pila Alcalina Aa x2 Tira 6", "unidades_x_bulto": 60, "proveedor": "GENOMMA LABORATORIES ARGENTINA SA"},
    {"codigo": "11100019", "descripcion": "Duracell Pila Alcalina Aaa x2 Tira 6", "unidades_x_bulto": 60, "proveedor": "GENOMMA LABORATORIES ARGENTINA SA"},
    {"codigo": "11300053", "descripcion": "FLYN PAFF estuche Uva x70u", "unidades_x_bulto": 12, "proveedor": "GEORGALOS HNOS S A I C A"},
    {"codigo": "11300054", "descripcion": "FLYN PAFF estuche tutu fruti x70u", "unidades_x_bulto": 12, "proveedor": "GEORGALOS HNOS S A I C A"},
    {"codigo": "11300055", "descripcion": "FLYN PAFF estuche frutilla x70u", "unidades_x_bulto": 12, "proveedor": "GEORGALOS HNOS S A I C A"},
    {"codigo": "11300057", "descripcion": "LENGUETAZO TUTTI FRUTTI X 32u", "unidades_x_bulto": 18, "proveedor": "GEORGALOS HNOS S A I C A"},
    {"codigo": "11300058", "descripcion": "MANTECOL IMP BAJO SODIO 21 40X111G", "unidades_x_bulto": 40, "proveedor": "GEORGALOS HNOS S A I C A"},
    {"codigo": "11300026", "descripcion": "Toddy Alfajor Mousse  X24x50gr", "unidades_x_bulto": 24, "proveedor": "GEORGALOS HNOS S A I C A"},
    {"codigo": "11300028", "descripcion": "Toddy Almohaditas 16ux180g", "unidades_x_bulto": 16, "proveedor": "GEORGALOS HNOS S A I C A"},
    {"codigo": "11300029", "descripcion": "Toddy Chocolate Rell Mousse 6Dx10Ux60g", "unidades_x_bulto": 60, "proveedor": "GEORGALOS HNOS S A I C A"},
    {"codigo": "11300030", "descripcion": "Toddy Chocolate Rell Milk 6Dx10Ux60g", "unidades_x_bulto": 60, "proveedor": "GEORGALOS HNOS S A I C A"},
    {"codigo": "11300031", "descripcion": "Toddy Chocolate Rell Coockies 6Dx10Ux60g", "unidades_x_bulto": 60, "proveedor": "GEORGALOS HNOS S A I C A"},
    {"codigo": "11300032", "descripcion": "Toddy Chocolate AIR Combinado 6DX10Ux50g", "unidades_x_bulto": 60, "proveedor": "GEORGALOS HNOS S A I C A"},
    {"codigo": "11300001", "descripcion": "Full Maní Chocolate Con Leche Y Maní X20x160gr", "unidades_x_bulto": 20, "proveedor": "GEORGALOS HNOS S A I C A"},
    {"codigo": "11300002", "descripcion": "Full Maní Chocolate Con Leche Y Maní X30x100gr", "unidades_x_bulto": 30, "proveedor": "GEORGALOS HNOS S A I C A"},
    {"codigo": "11300003", "descripcion": "Full Maní Chocolate Con Leche Y Maní X10x100gr", "unidades_x_bulto": 10, "proveedor": "GEORGALOS HNOS S A I C A"},
    {"codigo": "11300004", "descripcion": "Full Maní Chocolate Con Leche Y Maní X15x35gr", "unidades_x_bulto": 15, "proveedor": "GEORGALOS HNOS S A I C A"},
    {"codigo": "11300005", "descripcion": "Full Maní Bombón Con Leche Y Maní X24x9gr", "unidades_x_bulto": 24, "proveedor": "GEORGALOS HNOS S A I C A"},
    {"codigo": "11300006", "descripcion": "Full Maní Relleno De Pasta De Maní X8x140gr", "unidades_x_bulto": 8, "proveedor": "GEORGALOS HNOS S A I C A"},
    {"codigo": "11300007", "descripcion": "Georgalos Colmenita Chocolate Con Leche X24x25gr", "unidades_x_bulto": 24, "proveedor": "GEORGALOS HNOS S A I C A"},
    {"codigo": "11300008", "descripcion": "Georgalos Colmenita Chocolate Blanco X24x25gr", "unidades_x_bulto": 24, "proveedor": "GEORGALOS HNOS S A I C A"},
    {"codigo": "11300009", "descripcion": "Georgalos Colmenita Chocolate 60% Cacao X24x25gr", "unidades_x_bulto": 24, "proveedor": "GEORGALOS HNOS S A I C A"},
    {"codigo": "11300011", "descripcion": "Tokke Chocolate Con Leche X24x60gr", "unidades_x_bulto": 24, "proveedor": "GEORGALOS HNOS S A I C A"},
    {"codigo": "11300012", "descripcion": "Tokke Chocolate Con Leche Y Maní X24x62gr", "unidades_x_bulto": 24, "proveedor": "GEORGALOS HNOS S A I C A"},
    {"codigo": "11300013", "descripcion": "Tokke Chocolate Con Leche Y Mani  Cuarteado X40x12", "unidades_x_bulto": 40, "proveedor": "GEORGALOS HNOS S A I C A"},
    {"codigo": "11300014", "descripcion": "Tokke Chocolate Con Leche Relleno De Dulce De Lech", "unidades_x_bulto": 36, "proveedor": "GEORGALOS HNOS S A I C A"},
    {"codigo": "11300015", "descripcion": "Tokke Chocolate Con Leche Relleno De Dulce De Lech", "unidades_x_bulto": 36, "proveedor": "GEORGALOS HNOS S A I C A"},
    {"codigo": "11300016", "descripcion": "Tokke Chocolate Blanco Relleno De Dulce De Leche X", "unidades_x_bulto": 36, "proveedor": "GEORGALOS HNOS S A I C A"},
    {"codigo": "11300027", "descripcion": "Full Maní Alfajor x24x40g", "unidades_x_bulto": 24, "proveedor": "GEORGALOS HNOS S A I C A"},
    {"codigo": "11363900", "descripcion": "Mantecol bajo sodio 8x12x41g", "unidades_x_bulto": 96, "proveedor": "GEORGALOS HNOS S A I C A"},
    {"codigo": "11300024", "descripcion": "Toddy Galletas Chispas De Chocolate 24u X 126g X24", "unidades_x_bulto": 24, "proveedor": "GEORGALOS HNOS S A I C A"},
    {"codigo": "11300025", "descripcion": "Toddy Mini Galletas Chispas De Chocolate 36u X 50g", "unidades_x_bulto": 36, "proveedor": "GEORGALOS HNOS S A I C A"},
    {"codigo": "11300020", "descripcion": "Toddy Cacao En Polvo Original 12u X 180g", "unidades_x_bulto": 12, "proveedor": "GEORGALOS HNOS S A I C A"},
    {"codigo": "11300021", "descripcion": "Toddy Cacao En Polvo Extremo 14u X 360g", "unidades_x_bulto": 14, "proveedor": "GEORGALOS HNOS S A I C A"},
    {"codigo": "11300022", "descripcion": "Toddy Cacao En Polvo Extremo 8u X 800g X8x800gr", "unidades_x_bulto": 8, "proveedor": "GEORGALOS HNOS S A I C A"},
    {"codigo": "11300023", "descripcion": "Toddy Cacao En Polvo Avellanas 12u X 150g X12x150g", "unidades_x_bulto": 12, "proveedor": "GEORGALOS HNOS S A I C A"},
    {"codigo": "11200001", "descripcion": "Celusal Fina Paquete 500 Gr Pack X 30", "unidades_x_bulto": 30, "proveedor": "INDUSTRIAS QUIMICAS Y MINERAS TIMBO SA"},
    {"codigo": "11200002", "descripcion": "Celusal Fina Estuche 500 Gr Pack X 24", "unidades_x_bulto": 24, "proveedor": "INDUSTRIAS QUIMICAS Y MINERAS TIMBO SA"},
    {"codigo": "11200006", "descripcion": "Celusal entrefina paquete 500 gr pack x 30", "unidades_x_bulto": 30, "proveedor": "INDUSTRIAS QUIMICAS Y MINERAS TIMBO SA"},
    {"codigo": "11200007", "descripcion": "Celusal Entrefina Paquete 1 Kg Pack X 12", "unidades_x_bulto": 12, "proveedor": "INDUSTRIAS QUIMICAS Y MINERAS TIMBO SA"},
    {"codigo": "11200008", "descripcion": "Celusal Entrefina Estuche 1 Kg Pack X 12", "unidades_x_bulto": 12, "proveedor": "INDUSTRIAS QUIMICAS Y MINERAS TIMBO SA"},
    {"codigo": "11200010", "descripcion": "Celusal Gruesa Paquete 500 Gr Pack X 30", "unidades_x_bulto": 30, "proveedor": "INDUSTRIAS QUIMICAS Y MINERAS TIMBO SA"},
    {"codigo": "11200011", "descripcion": "Celusal Gruesa Paquete 1 Kg Pack X 12", "unidades_x_bulto": 12, "proveedor": "INDUSTRIAS QUIMICAS Y MINERAS TIMBO SA"},
    {"codigo": "11200012", "descripcion": "Celusal Gruesa Estuche 1 Kg Pack X 12", "unidades_x_bulto": 12, "proveedor": "INDUSTRIAS QUIMICAS Y MINERAS TIMBO SA"},
    {"codigo": "11200017", "descripcion": "Celusal Plus Paquete 500 Gr Pack X 30", "unidades_x_bulto": 30, "proveedor": "INDUSTRIAS QUIMICAS Y MINERAS TIMBO SA"},
    {"codigo": "10150912", "descripcion": "Chamigo S/tacc 10x500g", "unidades_x_bulto": 10, "proveedor": "MOLINOS RIO DE LA PLATA SA"}
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
        const h1 = document.querySelector('main h1');
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
        if (h1 && h1.parentNode) {
            h1.parentNode.insertBefore(el, h1.nextSibling);
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

// 1. BUSCADOR
searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
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

// 3. GUARDAR
function guardarConteo() {
    const bultos = parseInt(inputBultos.value) || 0;
    const unidades = parseInt(inputUnidades.value) || 0;
    const uxb = parseInt(selectedProductName.dataset.uxb) || 0;

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
function actualizarVista() {
    if (conteosEfectuados.length === 0) {
        sessionEntries.innerHTML = "Sin datos.";
        exportButton.disabled = true;
        return;
    }
    exportButton.disabled = false;

    let tabla = `<div style="overflow-x:auto;"><table border="1" style="width:100%; border-collapse: collapse; font-size: 0.8em;">
        <tr style="background:#eee;">
            <th>Cód.</th>
            <th>Prod.</th>
            <th>Proveedor</th>
            <th>UxB</th>
            <th>B</th>
            <th>U</th>
            <th>Total</th>
        </tr>`;

    conteosEfectuados.forEach(i => {
        tabla += `<tr>
            <td>${i.codigo}</td>
            <td>${i.nombre}</td>
            <td>${i.proveedor || ""}</td>
            <td>${i.uxb}</td>
            <td>${i.bultos}</td>
            <td>${i.unidades}</td>
            <td style="font-weight:bold;color:#2F6D4F;">${i.total}</td>
        </tr>`;
    });
    tabla += `</table></div>`;
    sessionEntries.innerHTML = tabla;
}

// 5. EXPORTAR CSV
exportButton.onclick = () => {
    let csv = "Codigo;Producto;Proveedor;UxB;Bultos;Unidades;Total;Vencimiento;Hora\r\n";
    conteosEfectuados.forEach(i => {
        csv += `${i.codigo};${i.nombre};${i.proveedor || ""};${i.uxb};${i.bultos};${i.unidades};${i.total};${i.fecha};${i.hora}\r\n`;
    });
    const blob = new Blob(['\uFEFF' + csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `conteo_${new Date().toLocaleDateString().replace(/\//g, '-')}.csv`;
    link.click();
};

document.getElementById('newCountButton').onclick = () => {
    if(confirm("¿Limpiar todo?")) {
        localStorage.removeItem('misConteos');
        conteosEfectuados = [];
        proveedorActivo = null;
        actualizarProveedorUI();
        actualizarVista();
    }
};

actualizarProveedorUI();

actualizarVista();
