# ![Logo](https://raw.githubusercontent.com/csrocha/fp-chrome-app-oerp/master/img/icon-48px.png) Fiscal Printer on the Cloud

Fiscal Printer client to work in Internet without any drivers. Full implemented in javascript and HTMLv5.

## Introduction

This application is only works in Chrome as an Application. It's need USB and RS232 Serial permittions to access to local printers. Once you connect to a Server you can print Tickets, Open day and Close day from the Server. 

Actually the only supported server is Odoo, using the [odoo-fpoc](https://github.com/csrocha/odoo_fpoc) addon. I can accept issues for develop connectors for other SaaS.

## Installation

Read the [Wiki](https://github.com/csrocha/fpoc-chrome/wiki)

## Automatizacion del arranque de la aplicacion en linux

Para arrancar automaticamente la aplicacion fpoc dentro de chrome en linux 
mediante la linea de comandos poner lo siguiente en autostart.

    google-chrome --app-id=[app_id]

para conseguir el app_id buscar en:

    /home/[user]/.local/share/applications

revisar cada archivo de tipo chrome-*-Default.desktop
el contenido es de este tipo:

    #!/usr/bin/env xdg-open
    [Desktop Entry]
    Version=1.0
    Terminal=false
    Type=Application
    Name=Fiscal Printer on the Cloud
    Exec=/opt/google/chrome/google-chrome --profile-directory=Default --app-id=mdoljjcpeoihjidplppkafhekfgbgfbn
    Icon=chrome-mdoljjcpeoihjidplppkafhekfgbgfbn-Default
    StartupWMClass=crx_mdoljjcpeoihjidplppkafhekfgbgfbn

Para el caso de Lubuntu:
Al encontrar el archivo de la aplicacion copiar el app id y agregar la 
siguiente linea en preferencias / Aplicaciones predeterminadas para LXSession

    google-chrome --app-id=[app_id]

Con esto debe arrancar la app sola sin el browser al booteo.

## List of Supported Printers

### The column _State_

This column show the state of the develop.

- Dev: In developing.
- Test: In testing.
- Mat: Mature.
- No: No supported.
- NoTest: No tested.

### List by countries

#### Listado de impresoras Homologadas en Argentina.

Varios usuarios han declarado estar probando la aplicación usando el programa [emulador de impresoras](http://www.impresoras-fiscales.com.ar/emulador.htm)  de IFDRIVERS. Estoy ayudando a que los usuarios puedan usar esta forma de probar el programa, pero como yo no tengo licencia para usarlo, el desarrollo se hace un poco lento.

A continuación aparece el listado de impresoras reales donde se están haciendo los tests.

|Marca|Modelo|R.G.|Fecha|Cod.|Tipo|State|
|-----|------|----|-----|----|----|---------|
|MORETTI|OPALE|AFIP 87|16/02/98|MMA|1||
|MORETTI|OPALE  I|AFIP 250|03/11/98|MMB|1||
|MORETTI|OPALE I XT 50K|AFIP 968|30/01/01|MMC|1||
|MORETTI|OPALE II|AFIP 2383|28/12/07|MMD|1||
|MORETTI|CR  35|AFIP 2878|15/07/10|MME|1||
|MORETTI|CR-XL|AFIP 3197|12/10/11|MMF|1||
|OMRON|RS 2810 AF|AFIP 22|16/09/97|AOA|1||
|ORATOR|1910 MF|DGI 4294|20/02/97|COA|1||
|ORATOR|2000 MF|AFIP 837|05/05/00|COB|1||
|CASIO|FE 2000|DGI 4314|21/03/97|HCA|1||
|HASAR|SMH/P950F|AFIP 14|03/09/97|HHA|2||
|HASAR|SMH/P614F|AFIP 14|03/09/97|HHB|2||
|HASAR|SMH/PT-262F|AFIP 233|21/10/98|HHC|2||
|HASAR|SMH/P-PR4F|AFIP 272|23/11/98|HHD|2||
|HASAR|SMH/P-951F|AFIP 398|17/02/99|HHE|2||
|HASAR|SMH/P-615F|AFIP 575|04/05/99|HHF|2||
|HASAR|SMH/P-320F|AFIP 852|02/06/00|HHG|2||
|HASAR|SMH/PL-8F|AFIP 978|06/03/01|HHH|2||
|HASAR|SMH/PL-8F (v.2.01)|AFIP 1638|23/02/04|HHH|2||
|HASAR|SMH/P-321F|AFIP 1076|28/08/01|HHI|2||
|HASAR|SMH/P-322F|AFIP 1123|29/10/01|HHJ|2||
|HASAR|SMH/P-322F(v2.01)|AFIP 1685|31/05/04|HHJ|2||
|HASAR|SMH/P-425F|AFIP 1123|29/10/01|HHK|2||
|HASAR|SMH/P-425F(v.02.01)|AFIP 1591|05/11/03|HHK|2||
|HASAR|SMH/PT-PR4C|AFIP 1124|31/10/01|HHL|3||
|HASAR|SMH/PL-1200 F|AFIP 1305|13/06/02|HHM|2||
|HASAR|SMH/PT-600C|AFIP 1329|13/08/02|HHN|3||
|HASAR|SMH/P-715F|AFIP 1771|22/11/04|HHP|2||
|HASAR|SMH/P-715F (v.02.01)|AFIP 2117|23/08/06|HHP|2||
|HASAR|SMH/P-715F (v.03.02)|AFIP 2460|09/06/08|HHP|2||
|HASAR|SMH/P-330F|AFIP 1826|01/02/05|HHO|2||
|HASAR|SMH/P-330F(v.02.01)|AFIP 1890|30/05/05|HHO|2||
|HASAR|SMH/P-330F(v.02.02)|AFIP 1998|20/01/06|HHO|2||
|HASAR|SMH/P-435F|AFIP 1899|09/06/05|HHR|2||
|HASAR|SMH/P-435F(v.01.01)|AFIP 2117|23/08/06|HHR|2||
|HASAR|SMH/P-PR5F|AFIP 1932|31/08/05|HHQ|2||
|HASAR|SMH/PT-272F|AFIP 1998|21/01/06|HHS|2||
|HASAR|SMH/PL-9F|AFIP 2037|19/04/06|HHT|2||
|HASAR|SMH/POS-1715F|AFIP 2037|19/04/06|HHU|2||
|HASAR|SMH/P-PR5F(v.02.01)|AFIP 2190|09/01/07|HHQ|2||
|HASAR|SMH/POS-1715F(v.01.01)|AFIP 2245|16/04/07|HHU|2||
|HASAR|SMH/PL - 23 F|AFIP 2273|21/06/07|HHV|2||
|HASAR|OLIVETTI OPEN|AFIP 2383|28/12/07|HOA|1||
|HASAR|SMH/P-435F(v.01.02)|AFIP 2587|07/04/09|HHR|2||
|HASAR|SMH/P-715F(v.04.03)|AFIP 2587|07/04/09|HHP|2||
|HASAR|SMH/P-441F(v.01.00)|AFIP 2587|07/04/09|HHW|2|Dev (Epson-D)|
|HASAR|SMH/PL-23F(v.01.01)|AFIP 2587|07/04/09|HHV|2||
|HASAR|SMH/P-330F(v.02.03)|AFIP 2587|07/04/09|HHO|2||
|HASAR|SMH/P-1120F(v.01.00)|AFIP 2645|26/09/09|HHX|2||
|HASAR|SMH/POS-1715F(v.02.02) Durango|AFIP 2680|28/09/09|HHU|2||
|HASAR|SMH/POS-1441F(v.01.00)|AFIP 2767|17/02/10|HHY|2||
|HASAR|SMH/P-435F(v.02.03)|AFIP 2823|30/04/10|HHR|2||
|HASAR|SMH/P-PR5F(v.03.02)|AFIP 3161|09/08/11|HHQ|2||
|HASAR|SMH/PL-23F(v.02.02)|AFIP 3236|14/12/11|HHV|2||
|HASAR|SMH/PT-272F(v.02.01)|AFIP 3237|14/12/11|HHS|2||
|HASAR|SMH/PT-600C(v.02.01)|AFIP 3327|11/05/12|HHN|3||
|TEC|MA 1030|AFIP 704|14/10/99|KTA|1||
|ELITRONIC|1210 MF|AFIP 73|22/01/98|XEA|1||
|ELITRONIC|ECR 38 MF|AFIP 113|31/03/98|XEB|1||
|ELITRONIC|ECR 38 MFE|AFIP 133|29/04/98|XEC|1||
|ELITRONIC|ECR 38 MFB|AFIP 336|22/01/99|XED|1||
|ELITRONIC|TF 3000 MF|AFIP 914|30/10/00|XEE|1||
|ELITRONIC|CR 500 MF|AFIP 1951|14/10/05|XEF|1||
|ELITRONIC|CR 30 MF|AFIP 2154|14/11/06|XEG|1||
|ELITRONIC|CR 50 MF|AFIP 3030|09/02/11|XEH|1||
|EPSON|TM300 A/F|AFIP 22|16/09/97|PEA|2||
|EPSON|TM300A/F+|AFIP 575|04/05/99|PEB|2||
|EPSON|TM2000A/F+|AFIP 624|24/06/99|PEC|2||
|EPSON|TM-T285F|AFIP 653|06/08/99|PED|2||
|EPSON|TM - U950F|AFIP 711|25/10/99|PEE|2||
|EPSON |TM U950 F Gaia|AFIP 1515|05/06/03|PEE|2||
|EPSON|TM 2000 A/F|AFIP 752 |05/01/00|PEF|2||
|EPSON|LX 300 F|AFIP 976|21/02/01|PEG|2||
|EPSON|LX 300 F+|AFIP 1058|07/08/01|PEI|2||
|EPSON|LX 300 F+  (v.09.01)|AFIP 1637|23/02/04|PEI|2||
|EPSON|FX 880 F|AFIP 1058|07/08/01|PEH|2||
|EPSON|TM 2002 A/F+|AFIP 1362|24/10/02|PEJ|2||
|EPSON|TM T88 III C|AFIP 1416|07/01/03|PEK|3||
|EPSON|TM U220 AF (v.21.00) Athena|AFIP 1826|01/02/05|PEL|2||
|EPSON|TM U220 AF (v.21.01) Hera|AFIP 2089|06/07/06|PEL|2||
|EPSON|TM T88 IV LC|AFIP 2378|20/12/07|PEM|3||
|EPSON|TM T88 IV C|AFIP 2452|14/05/08|PEN|3||
|EPSON |TM - U950F Gaia|AFIP 2604|05/05/09|PEE|2||
|EPSON|TM U220 AF II (v.22.00) Hera|AFIP 2767|17/02/10|PEO|2|Dev (Epson-D)|
|EPSON|TM-T260 F (v.23.00) Chronos|AFIP 3031|09/02/11|PEP|2||
|EPSON|LX 300F+ II (v.11.00) Dionisos|AFIP 3082|13/04/11|PEQ|2||
|EPSON|TM-U220 AF II (v.22.01) Demeter|AFIP 3326|15/05/12|PEO|2|Test (Epson-E)|
|TOWA|NT 5521|AFIP 145|05/06/98|ETA|1||
|OMRON|RS 28 MF|AFIP 679|10/09/99|GOA|1||4
|OMRON|RS40MF|AFIP762|13/01/00|GOB|1||
|I B M|ENTRY O1|AFIP 55|27/11/97|IIA|1||
|I B M|IBM 4679 3FA|AFIP 336|22/01/99|IIB|2||
|I B M|IBM 4679 3FA|AFIP 649|30/07/99|IIB|2||
|I B M|IBM 4679 3FA NP|AFIP 812|24/03/00|IIB|2||
|I B M|4679 3FA DFyNF|AFIP 998|23/04/01|IIB|2||
|I B M|4610-GR3|AFIP 1243|26/03/02|IIC|2||
|I B M|4610-GR3 (v.12.01)|AFIP 1390|12/12/02|IIC|2||
|I B M|4610-GE3 (v.14.00)|AFIP 1537|25/07/03|IID|2||
|ITAUTEC PHILCO|POS 4000 IF/1E ARG|AFIP 807|17/03/00|BIA|2||
|ITAUTEC PHILCO|POS 4000 IF/1E ARG|AFIP 1972|28/11/05|BIA|2||
|CRAMS|UN 1310 MFA|AFIP 14|03/09/97|ZVA|1||
|CRAMS|UX 60 MFA|AFIP 233|21/10/98|ZVB|1||
|CRAMS|UX 60 MFA-T|AFIP 284|03/12/98|ZVD|1||
|CRAMS|UX60MFA-T(m)|AFIP 653|06/08/99|ZVD|1||
|CRAMS|UN 2310 MFA|AFIP 687|21/09/99|ZVC|1||
|BEMATECH|MP-35 FIA|AFIP 2349|21/11/07|ZBA|2||
|CRAMS|NX 5400|AFIP 2553|02/02/09|ZVE|1||
|KRETZ|NUM 350 A|AFIP 2992|07/12/10|LKA|1||
|N C R|2028|DGI 4294|20/02/97|NNA|1||
|N C R|2050|AFIP 92|25/02/98|NNB|1||
|N C R|2050 (15000 plu)|AFIP 649|30/07/99|NNB|1||
|N C R|2020 T|AFIP 347|22/01/99|NNC|2||
|N C R |2050 PLUS|AFIP 836|05/05/00|NNB|1||
|N C R |2050 PLUS |AFIP 2001|30/01/06|NNB|1||
|N C R|2005|AFIP 852|02/06/00|NND|2||
|N C R|NCR 2008|AFIP 909|19/10/00|NNE|2||
|N C R|NCR 2028 PLUS|AFIP 1841|10/03/05|NNF|1||
|N C R |NCR 2028 PLUS|AFIP 2934|01/10/10|NNF|1||
|N C R|NCR 3140|AFIP 1998|20/01/06|NNG|2||
|N C R|NCR 3140 (v.01.01)|AFIP 2349|21/11/07|NNG|2||
|N C R|NCR 3140 (v.01.02)|AFIP 2679|30/09/09|NNG|2||
|N C R|NCR 2029|AFIP 3095|02/05/11|NNH|1||
|SANYO|ECR-425 FM|AFIP 276|25/11/98|WSA|1||
|NORTID|HT 358|AFIP 2967|10/11/10|JNB|1||
|NORTID|SMART 258|AFIP 3068|28/03/11|JNA|2||
|UNITECH|ECR 1210|DGI 4294|20/02/97|OUA|1||
|OLIVETTI|CRF 82|AFIP 214|25/09/98|TOA|1||
|OLIVETTI|PR4F|AFIP 687|21/09/99|TOB|2||
|OLIVETTI|320 F|AFIP 909|19/10/00|TOC|2||
|OLIVETTI|AR JET - 20 F|AFIP 988|09/04/01|TOD|2||
|POWER POS|PD 1210|AFIP 53|25/11/97|DPA|1||
|POWERPOS SWEDA|PD 3800|AFIP 704|14/10/99|DPB|1||
|SAMSUNG|ER 4615 FPPLUS|AFIP 80|04/02/98|SSA|1||
|SAMSUNG|SRP - 250 DF|AFIP 890|29/08/00|SSB|2||
|SAM 4S|ER 655|AFIP 1923|04/08/05|SSC|1||
|SAMSUNG|SRP - 270|AFIP 1998|20/01/06|SSD|2||
|SAM 4S|ER - 420 F |AFIP 2189|09/01/07|SSE|1||
|SAM 4S|ER - 420 F(v.01:01)|AFIP 2467|11/07/08|SSE|1||
|SAMSUNG|SRP-270 (v.1.01)|AFIP 2587|07/04/09|SSD|2||
|SAM 4S|ER - 700 F |AFIP 2733|23/12/09|SSF|1||
|SAM 4S|ER 680 F |AFIP 3031|09/02/11|SSG|1||
|SAM 4S|ER 230 F |AFIP 3405|28/11/12|SSH|1||
|CIFRA|CF-930|AFIP 214|25/09/98|UCA|1||
