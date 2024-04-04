declare const URL_PROTOCOL_REGEX: '((ht|f)tps?:\\/\\/)';
declare const URL_WEBSITE_REGEX: '((ht|f)tps?:\\/\\/)?((?:www\\.)?[a-z0-9](?:[-a-z0-9]*[a-z0-9])?\\.)+(?:XN--VERMGENSBERATUNG-PWB|XN--VERMGENSBERATER-CTB|XN--CLCHC0EA0B2G2A9GCD|XN--W4R85EL8FHU5DNRA|TRAVELERSINSURANCE|NORTHWESTERNMUTUAL|XN--XKC2DL3A5EE0H|XN--MGBERP4A5D4AR|XN--MGBAI9AZGQP6J|XN--MGBAH1A3HJKRD|XN--BCK1B9A5DRE4C|XN--5SU34J936BGSG|XN--3OQ18VL8PN36A|XN--XKC2AL3HYE2A|XN--MGBCPQ6GPA1A|XN--MGBA7C0BBN0A|XN--FZYS8D69UVGM|XN--NQV7FS00EMA|XN--MGBC0A9AZCG|XN--MGBAAKC7DVF|XN--MGBA3A4F16A|XN--LGBBAT1AD8J|XN--KCRX77D1X4A|XN--I1B6B1A6A2E|SANDVIKCOROMANT|KERRYPROPERTIES|AMERICANEXPRESS|XN--RVC1E0AM3E|XN--MGBX4CD0AB|XN--MGBI4ECEXP|XN--MGBCA7DZDO|XN--MGBBH1A71E|XN--MGBAYH7GPA|XN--MGBAAM7A8H|XN--MGBA3A3EJT|XN--JLQ61U9W7B|XN--JLQ480N2RG|XN--H2BREG3EVE|XN--FIQ228C5HS|XN--B4W605FERD|XN--80AQECDR1A|XN--6QQ986B3XL|XN--54B7FTA0CC|WEATHERCHANNEL|KERRYLOGISTICS|COOKINGCHANNEL|CANCERRESEARCH|BANANAREPUBLIC|AMERICANFAMILY|AFAMILYCOMPANY|XN--YGBI2AMMX|XN--YFRO4I67O|XN--TIQ49XQYJ|XN--H2BRJ9C8C|XN--FZC2C9E2C|XN--FPCRJ9C3D|XN--ECKVDTC9D|XN--CCKWCXETD|WOLTERSKLUWER|TRAVELCHANNEL|SPREADBETTING|LIFEINSURANCE|INTERNATIONAL|XN--QCKA1PMC|XN--OGBPF8FL|XN--NGBE9E0A|XN--NGBC5AZD|XN--MK1BU44C|XN--MGBT3DHD|XN--MGBPL2FH|XN--MGBGU82A|XN--MGBAB2BD|XN--MGB9AWBF|XN--GCKR3F0F|XN--8Y0A063A|XN--80ASEHDB|XN--80ADXHKS|XN--4DBRK0CE|XN--45BR5CYL|XN--3E0B707E|VERSICHERUNG|SCHOLARSHIPS|LPLFINANCIAL|CONSTRUCTION|XN--ZFR164B|XN--XHQ521B|XN--W4RS40L|XN--VUQ861B|XN--T60B56A|XN--SES554G|XN--S9BRJ9C|XN--ROVU88B|XN--RHQV96G|XN--Q9JYB4C|XN--PGBS0DH|XN--OTU796D|XN--NYQY26A|XN--MIX891F|XN--MGBTX2B|XN--MGBBH1A|XN--KPRY57D|XN--KPRW13D|XN--JVR189M|XN--J6W193G|XN--IMR513N|XN--HXT814E|XN--H2BRJ9C|XN--GK3AT1E|XN--GECRJ9C|XN--G2XX48C|XN--FLW351E|XN--FJQ720A|XN--FCT429K|XN--EFVY88H|XN--D1ACJ3B|XN--CZR694B|XN--CCK2B3B|XN--9KRT00A|XN--80AO21A|XN--6FRZ82G|XN--55QW42G|XN--45BRJ9C|XN--42C2D9A|XN--3HCRJ9C|XN--3DS443G|XN--3BST00M|XN--2SCRJ9C|XN--1QQW23A|XN--1CK2E1B|XN--11B4C3D|WILLIAMHILL|REDUMBRELLA|PROGRESSIVE|PRODUCTIONS|PLAYSTATION|PHOTOGRAPHY|OLAYANGROUP|MOTORCYCLES|LAMBORGHINI|KERRYHOTELS|INVESTMENTS|FOODNETWORK|ENTERPRISES|ENGINEERING|CREDITUNION|CONTRACTORS|CALVINKLEIN|BRIDGESTONE|BLOCKBUSTER|BLACKFRIDAY|BARCLAYCARD|ACCOUNTANTS|XN--Y9A3AQ|XN--WGBL6A|XN--WGBH1C|XN--UNUP4Y|XN--Q7CE6A|XN--PSSY2U|XN--O3CW4H|XN--MXTQ1M|XN--KPUT3I|XN--IO0A7I|XN--FIQZ9S|XN--FIQS8S|XN--FIQ64B|XN--CZRU2D|XN--CZRS0T|XN--CG4BKI|XN--C2BR7G|XN--9ET52U|XN--9DBQ2A|XN--90A3AC|XN--80ASWG|XN--5TZM5G|XN--55QX5D|XN--4GBRIM|XN--45Q11C|XN--3PXU8K|XN--30RR7Y|VOLKSWAGEN|VLAANDEREN|UNIVERSITY|TECHNOLOGY|TATAMOTORS|SWIFTCOVER|SCHAEFFLER|RESTAURANT|REPUBLICAN|REALESTATE|PRUDENTIAL|PROTECTION|PROPERTIES|ONYOURSIDE|NEXTDIRECT|NATIONWIDE|MITSUBISHI|MANAGEMENT|INDUSTRIES|IMMOBILIEN|HEALTHCARE|FOUNDATION|EXTRASPACE|EUROVISION|CUISINELLA|CREDITCARD|CONSULTING|CAPITALONE|BOEHRINGER|BNPPARIBAS|BASKETBALL|ASSOCIATES|APARTMENTS|ACCOUNTANT|YODOBASHI|XN--VHQUV|XN--TCKWE|XN--QXA6A|XN--P1ACF|XN--NQV7F|XN--NGBRX|XN--L1ACC|XN--J1AMH|XN--J1AEF|XN--FHBEI|XN--E1A4C|XN--D1ALF|XN--C1AVG|XN--90AIS|VACATIONS|TRAVELERS|STOCKHOLM|STATEFARM|STATEBANK|SOLUTIONS|SHANGRILA|SCJOHNSON|RICHARDLI|PRAMERICA|PASSAGENS|PANASONIC|MICROSOFT|MELBOURNE|MARSHALLS|MARKETING|LIFESTYLE|LANDROVER|LANCASTER|KUOKGROUP|INSURANCE|INSTITUTE|HOMESENSE|HOMEGOODS|HOMEDEPOT|HISAMITSU|GOLDPOINT|FURNITURE|FUJIXEROX|FRONTDOOR|FRESENIUS|FIRESTONE|FINANCIAL|FAIRWINDS|EQUIPMENT|EDUCATION|DIRECTORY|COMMUNITY|CHRISTMAS|BLOOMBERG|BARCELONA|AQUARELLE|ANALYTICS|AMSTERDAM|ALLFINANZ|ALFAROMEO|ACCENTURE|YOKOHAMA|XN--QXAM|XN--P1AI|XN--NODE|XN--90AE|WOODSIDE|VERISIGN|VENTURES|VANGUARD|TRAINING|SUPPLIES|STCGROUP|SOFTWARE|SOFTBANK|SHOWTIME|SHOPPING|SERVICES|SECURITY|SAMSCLUB|SAARLAND|RELIANCE|REDSTONE|PROPERTY|PLUMBING|PICTURES|PHARMACY|PARTNERS|OBSERVER|MORTGAGE|MERCKMSD|MEMORIAL|MCKINSEY|MASERATI|MARRIOTT|LUNDBECK|LIGHTING|JPMORGAN|ISTANBUL|IPIRANGA|INFINITI|HOSPITAL|HOLDINGS|HELSINKI|HDFCBANK|GUARDIAN|GRAPHICS|GRAINGER|GOODYEAR|FRONTIER|FOOTBALL|FIRMDALE|FIDELITY|FEEDBACK|EXCHANGE|ETISALAT|ERICSSON|ENGINEER|DOWNLOAD|DISCOVER|DISCOUNT|DIAMONDS|DEMOCRAT|DELOITTE|DELIVERY|COMPUTER|COMMBANK|CLOTHING|CLINIQUE|CLEANING|CITYEATS|CIPRIANI|CATHOLIC|CATERING|CAPETOWN|BUSINESS|BUILDERS|BUDAPEST|BRUSSELS|BROADWAY|BRADESCO|BOUTIQUE|BASEBALL|BARGAINS|BAREFOOT|BARCLAYS|ATTORNEY|ALLSTATE|AIRFORCE|ABUDHABI|ZUERICH|YOUTUBE|YAMAXUN|XFINITY|WINNERS|WINDOWS|WHOSWHO|WEDDING|WEBSITE|WEATHER|WATCHES|WANGGOU|WALMART|TRADING|TOSHIBA|TIFFANY|TICKETS|THEATRE|THEATER|TEMASEK|SYSTEMS|SURGERY|SUPPORT|STORAGE|STAPLES|SINGLES|SHIKSHA|SCIENCE|SCHWARZ|SCHMIDT|SANDVIK|SAMSUNG|REXROTH|REVIEWS|RENTALS|RECIPES|REALTOR|POLITIE|PIONEER|PHILIPS|ORIGINS|ORGANIC|OLDNAVY|OKINAWA|NEUSTAR|NETWORK|NETFLIX|NETBANK|MONSTER|MARKETS|LINCOLN|LIMITED|LECLERC|LATROBE|LASALLE|LANXESS|LACAIXA|KOMATSU|KITCHEN|JUNIPER|JEWELRY|ISMAILI|HYUNDAI|HOTMAIL|HOTELES|HOSTING|HOLIDAY|HITACHI|HANGOUT|HAMBURG|GUITARS|GROCERY|GODADDY|GENTING|GALLERY|FUJITSU|FROGANS|FORSALE|FLOWERS|FLORIST|FLIGHTS|FITNESS|FISHING|FINANCE|FERRERO|FERRARI|FASHION|FARMERS|EXPRESS|EXPOSED|DOMAINS|DIGITAL|DENTIST|CRUISES|CRICKET|COURSES|COUPONS|COUNTRY|CORSICA|COOKING|CONTACT|COMPARE|COMPANY|COMCAST|COLOGNE|COLLEGE|CLUBMED|CITADEL|CHINTAI|CHARITY|CHANNEL|CAREERS|CARAVAN|CAPITAL|BUGATTI|BROTHER|BOOKING|BESTBUY|BENTLEY|BAUHAUS|BANAMEX|AVIANCA|AUSPOST|AUDIBLE|AUCTION|ATHLETA|ANDROID|ALIBABA|AGAKHAN|ACADEMY|ABOGADO|ZAPPOS|YANDEX|YACHTS|XIHUAN|WEBCAM|WALTER|VUELOS|VOYAGE|VOTING|VISION|VIRGIN|VILLAS|VIKING|VIAJES|UNICOM|TRAVEL|TOYOTA|TKMAXX|TJMAXX|TIENDA|TENNIS|TATTOO|TARGET|TAOBAO|TAIPEI|SYDNEY|SWATCH|SUZUKI|SUPPLY|STUDIO|STREAM|SOCIAL|SOCCER|SHOUJI|SELECT|SECURE|SEARCH|SCHULE|SCHOOL|SANOFI|SAKURA|SAFETY|RYUKYU|ROGERS|ROCHER|REVIEW|REPORT|REPAIR|REISEN|REALTY|RACING|QUEBEC|PICTET|PHYSIO|PHOTOS|PFIZER|OTSUKA|ORANGE|ORACLE|ONLINE|OLAYAN|OFFICE|NOWRUZ|NORTON|NISSAY|NISSAN|NATURA|NAGOYA|MUTUAL|MUSEUM|MOSCOW|MORMON|MONASH|MOBILE|MATTEL|MARKET|MAKEUP|MAISON|MADRID|LUXURY|LONDON|LOCKER|LIVING|LEFRAK|LAWYER|LATINO|LANCIA|KOSHER|KINDLE|KINDER|KAUFEN|JUEGOS|JOBURG|JAGUAR|INTUIT|INSURE|IMAMAT|HUGHES|HOTELS|HOCKEY|HIPHOP|HERMES|HEALTH|GRATIS|GOOGLE|GLOBAL|GIVING|GEORGE|GARDEN|GALLUP|FUTBOL|FLICKR|FAMILY|EXPERT|EVENTS|ESTATE|ENERGY|EMERCK|DURBAN|DUPONT|DUNLOP|DOCTOR|DIRECT|DESIGN|DENTAL|DEGREE|DEALER|DATSUN|DATING|CRUISE|CREDIT|COUPON|CONDOS|COMSEC|COFFEE|CLINIC|CLAIMS|CIRCLE|CHURCH|CHROME|CHANEL|CENTER|CASINO|CAREER|CAMERA|BROKER|BOSTON|BOSTIK|BHARTI|BERLIN|BEAUTY|BAYERN|AUTHOR|ARAMCO|ANQUAN|AMAZON|ALSTOM|ALSACE|ALIPAY|AIRTEL|AIRBUS|AGENCY|AFRICA|ABBVIE|ABBOTT|ABARTH|YAHOO|XEROX|WORLD|WORKS|WEIBO|WEBER|WATCH|WALES|VOLVO|VODKA|VIDEO|VEGAS|UBANK|TUSHU|TUNES|TRUST|TRADE|TOURS|TOTAL|TORAY|TOOLS|TOKYO|TODAY|TMALL|TIROL|TIRES|TATAR|SWISS|SUCKS|STYLE|STUDY|STORE|STADA|SPORT|SPACE|SOLAR|SMILE|SMART|SLING|SKYPE|SHOES|SHELL|SHARP|SEVEN|SENER|SALON|RUGBY|RODEO|ROCKS|RICOH|REISE|REHAB|RADIO|QUEST|PROMO|PRIME|PRESS|PRAXI|POKER|PLACE|PIZZA|PHOTO|PHONE|PARTY|PARTS|PARIS|OSAKA|OMEGA|NOWTV|NOKIA|NINJA|NIKON|NEXUS|MOVIE|MONEY|MIAMI|MEDIA|MANGO|MACYS|LOTTO|LOTTE|LOCUS|LOANS|LIXIL|LIPSY|LINDE|LILLY|LEXUS|LEGAL|LEASE|LAMER|KYOTO|KOELN|JETZT|IVECO|IRISH|IKANO|HYATT|HOUSE|HORSE|HONDA|HOMES|GUIDE|GUCCI|GROUP|GRIPE|GREEN|GMAIL|GLOBO|GLASS|GLADE|GIVES|GIFTS|GAMES|GALLO|FORUM|FOREX|FINAL|FEDEX|FAITH|EPSON|EMAIL|EDEKA|EARTH|DUBAI|DRIVE|DELTA|DEALS|DANCE|DABUR|CYMRU|CROWN|CODES|COACH|CLOUD|CLICK|CITIC|CISCO|CHEAP|CHASE|CARDS|CANON|BUILD|BOSCH|BOATS|BLACK|BINGO|BIBLE|BEATS|BAIDU|AZURE|AUTOS|AUDIO|ARCHI|APPLE|AMICA|AMFAM|AETNA|ADULT|ACTOR|ZONE|ZERO|ZARA|YOGA|XBOX|WORK|WINE|WIKI|WIEN|WEIR|WANG|VOTO|VOTE|VIVO|VIVA|VISA|VANA|TUBE|TOYS|TOWN|TIPS|TIAA|TEVA|TECH|TEAM|TAXI|TALK|SURF|STAR|SPOT|SONY|SONG|SOHU|SNCF|SKIN|SITE|SINA|SILK|SHOW|SHOP|SHIA|SHAW|SEXY|SEEK|SEAT|SCOT|SAXO|SAVE|SARL|SALE|SAFE|RUHR|RSVP|ROOM|RMIT|RICH|REST|RENT|REIT|READ|RAID|QPON|PROF|PROD|POST|PORN|POHL|PLUS|PLAY|PINK|PING|PICS|PCCW|PARS|PAGE|OPEN|OLLO|NIKE|NICO|NEXT|NEWS|NAVY|NAME|MOTO|MODA|MOBI|MINT|MINI|MENU|MEME|MEET|MAIF|LUXE|LTDA|LOVE|LOFT|LOAN|LIVE|LINK|LIMO|LIKE|LIFE|LIDL|LGBT|LEGO|LAND|KRED|KPMG|KIWI|KDDI|JPRS|JOBS|JEEP|JAVA|ITAU|INFO|IMMO|IMDB|IEEE|ICBC|HSBC|HOST|HGTV|HERE|HELP|HDFC|HAUS|HAIR|GURU|GUGE|GOOG|GOLF|GOLD|GMBH|GIFT|GGEE|GENT|GBIZ|GAME|FUND|FREE|FORD|FOOD|FLIR|FISH|FIRE|FILM|FIDO|FIAT|FAST|FARM|FANS|FAIL|FAGE|ERNI|DVAG|DUCK|DOCS|DISH|DIET|DESI|DELL|DEAL|DCLK|DATE|DATA|CYOU|COOP|COOL|CLUB|CITY|CITI|CHAT|CERN|CBRE|CASH|CASE|CASA|CARS|CARE|CAMP|CALL|CAFE|BUZZ|BOOK|BOND|BOFA|BLUE|BLOG|BING|BIKE|BEST|BEER|BBVA|BANK|BAND|BABY|AUTO|AUDI|ASIA|ASDA|ARTE|ARPA|ARMY|ARAB|AMEX|ALLY|AKDN|AERO|ADAC|ABLE|AARP|ZIP|YUN|YOU|XYZ|XXX|XIN|WTF|WTC|WOW|WME|WIN|WED|VIP|VIN|VIG|VET|UPS|UOL|UNO|UBS|TVS|TUI|TRV|TOP|TJX|THD|TEL|TDK|TCI|TAX|TAB|STC|SRL|SPA|SOY|SKY|SKI|SFR|SEX|SEW|SES|SCB|SCA|SBS|SBI|SAS|SAP|RWE|RUN|RIP|RIO|RIL|REN|RED|QVC|PWC|PUB|PRU|PRO|PNC|PIN|PID|PHD|PET|PAY|OVH|OTT|ORG|OOO|ONL|ONG|ONE|OFF|OBI|NYC|NTT|NRW|NRA|NOW|NHK|NGO|NFL|NEW|NET|NEC|NBA|NAB|MTR|MTN|MSD|MOV|MOM|MOI|MOE|MMA|MLS|MLB|MIT|MIL|MEN|MED|MBA|MAP|MAN|LTD|LPL|LOL|LLP|LLC|LDS|LAW|LAT|KRD|KPN|KIM|KIA|KFH|JOY|JOT|JNJ|JMP|JLL|JIO|JCB|ITV|IST|INT|INK|ING|INC|IFM|ICU|ICE|IBM|HOW|HOT|HKT|HIV|HBO|GOV|GOT|GOP|GOO|GMX|GMO|GLE|GEA|GDN|GAY|GAP|GAL|FYI|FUN|FTR|FRL|FOX|FOO|FLY|FIT|FAN|EUS|ESQ|EDU|ECO|EAT|DVR|DTV|DOT|DOG|DNP|DIY|DHL|DEV|DDS|DAY|DAD|CSC|CRS|CPA|COM|CFD|CFA|CEO|CBS|CBN|CBA|CAT|CAR|CAM|CAL|CAB|BZH|BUY|BOX|BOT|BOO|BOM|BMW|BMS|BIZ|BIO|BID|BET|BCN|BCG|BBT|BBC|BAR|AXA|AWS|ART|APP|AOL|ANZ|AIG|AFL|AEG|ADS|ACO|ABC|ABB|AAA|ZW|ZM|ZA|YT|YE|WS|WF|VU|VN|VI|VG|VE|VC|VA|UZ|UY|US|UK|UG|UA|TZ|TW|TV|TT|TR|TO|TN|TM|TL|TK|TJ|TH|TG|TF|TD|TC|SZ|SY|SX|SV|SU|ST|SS|SR|SO|SN|SM|SL|SK|SJ|SI|SH|SG|SE|SD|SC|SB|SA|RW|RU|RS|RO|RE|QA|PY|PW|PT|PS|PR|PN|PM|PL|PK|PH|PG|PF|PE|PA|OM|NZ|NU|NR|NP|NO|NL|NI|NG|NF|NE|NC|NA|MZ|MY|MX|MW|MV|MU|MT|MS|MR|MQ|MP|MO|MN|MM|ML|MK|MH|MG|ME|MD|MC|MA|LY|LV|LU|LT|LS|LR|LK|LI|LC|LB|LA|KZ|KY|KW|KR|KP|KN|KM|KI|KH|KG|KE|JP|JO|JM|JE|IT|IS|IR|IQ|IO|IN|IM|IL|IE|ID|HU|HT|HR|HN|HM|HK|GY|GW|GU|GT|GS|GR|GQ|GP|GN|GM|GL|GI|GH|GG|GF|GE|GD|GB|GA|FR|FO|FM|FK|FJ|FI|EU|ET|ES|ER|EG|EE|EC|DZ|DO|DM|DK|DJ|DE|CZ|CY|CX|CW|CV|CU|CR|CO|CN|CM|CL|CK|CI|CH|CG|CF|CD|CC|CA|BZ|BY|BW|BV|BT|BS|BR|BO|BN|BM|BJ|BI|BH|BG|BF|BE|BD|BB|BA|AZ|AX|AW|AU|AT|AS|AR|AQ|AO|AM|AL|AI|AG|AF|AE|AD|AC|SJC|RNO|LAX)(?:\\:([1-9][0-9]{0,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])|\\b|(?=_))';
declare const URL_PATH_REGEX: '(?:(?:[.,=(+$!*]|&(?:amp|quot|#x27);)?\\/(?:[-\\w$@.+!*:(),=%~]|&(?:amp|quot|#x27);)*(?:[-\\w~@:%)]|&(?:amp|quot|#x27);)|\\/)*';
declare const URL_PARAM_REGEX: '(?:\\?(?:[-\\w$@.+!*()\\/,=%{}:;\\[\\]\\|_|~]|&(?:amp|quot|#x27);)*)?';
declare const URL_FRAGMENT_REGEX: '(?:#(?:[-\\w$@.+!*()[\\],=%;\\/:~]|&(?:amp|quot|#x27);)*)?';
declare const URL_REGEX: '((((ht|f)tps?:\\/\\/)?((?:www\\.)?[a-z0-9](?:[-a-z0-9]*[a-z0-9])?\\.)+(?:XN--VERMGENSBERATUNG-PWB|XN--VERMGENSBERATER-CTB|XN--CLCHC0EA0B2G2A9GCD|XN--W4R85EL8FHU5DNRA|TRAVELERSINSURANCE|NORTHWESTERNMUTUAL|XN--XKC2DL3A5EE0H|XN--MGBERP4A5D4AR|XN--MGBAI9AZGQP6J|XN--MGBAH1A3HJKRD|XN--BCK1B9A5DRE4C|XN--5SU34J936BGSG|XN--3OQ18VL8PN36A|XN--XKC2AL3HYE2A|XN--MGBCPQ6GPA1A|XN--MGBA7C0BBN0A|XN--FZYS8D69UVGM|XN--NQV7FS00EMA|XN--MGBC0A9AZCG|XN--MGBAAKC7DVF|XN--MGBA3A4F16A|XN--LGBBAT1AD8J|XN--KCRX77D1X4A|XN--I1B6B1A6A2E|SANDVIKCOROMANT|KERRYPROPERTIES|AMERICANEXPRESS|XN--RVC1E0AM3E|XN--MGBX4CD0AB|XN--MGBI4ECEXP|XN--MGBCA7DZDO|XN--MGBBH1A71E|XN--MGBAYH7GPA|XN--MGBAAM7A8H|XN--MGBA3A3EJT|XN--JLQ61U9W7B|XN--JLQ480N2RG|XN--H2BREG3EVE|XN--FIQ228C5HS|XN--B4W605FERD|XN--80AQECDR1A|XN--6QQ986B3XL|XN--54B7FTA0CC|WEATHERCHANNEL|KERRYLOGISTICS|COOKINGCHANNEL|CANCERRESEARCH|BANANAREPUBLIC|AMERICANFAMILY|AFAMILYCOMPANY|XN--YGBI2AMMX|XN--YFRO4I67O|XN--TIQ49XQYJ|XN--H2BRJ9C8C|XN--FZC2C9E2C|XN--FPCRJ9C3D|XN--ECKVDTC9D|XN--CCKWCXETD|WOLTERSKLUWER|TRAVELCHANNEL|SPREADBETTING|LIFEINSURANCE|INTERNATIONAL|XN--QCKA1PMC|XN--OGBPF8FL|XN--NGBE9E0A|XN--NGBC5AZD|XN--MK1BU44C|XN--MGBT3DHD|XN--MGBPL2FH|XN--MGBGU82A|XN--MGBAB2BD|XN--MGB9AWBF|XN--GCKR3F0F|XN--8Y0A063A|XN--80ASEHDB|XN--80ADXHKS|XN--4DBRK0CE|XN--45BR5CYL|XN--3E0B707E|VERSICHERUNG|SCHOLARSHIPS|LPLFINANCIAL|CONSTRUCTION|XN--ZFR164B|XN--XHQ521B|XN--W4RS40L|XN--VUQ861B|XN--T60B56A|XN--SES554G|XN--S9BRJ9C|XN--ROVU88B|XN--RHQV96G|XN--Q9JYB4C|XN--PGBS0DH|XN--OTU796D|XN--NYQY26A|XN--MIX891F|XN--MGBTX2B|XN--MGBBH1A|XN--KPRY57D|XN--KPRW13D|XN--JVR189M|XN--J6W193G|XN--IMR513N|XN--HXT814E|XN--H2BRJ9C|XN--GK3AT1E|XN--GECRJ9C|XN--G2XX48C|XN--FLW351E|XN--FJQ720A|XN--FCT429K|XN--EFVY88H|XN--D1ACJ3B|XN--CZR694B|XN--CCK2B3B|XN--9KRT00A|XN--80AO21A|XN--6FRZ82G|XN--55QW42G|XN--45BRJ9C|XN--42C2D9A|XN--3HCRJ9C|XN--3DS443G|XN--3BST00M|XN--2SCRJ9C|XN--1QQW23A|XN--1CK2E1B|XN--11B4C3D|WILLIAMHILL|REDUMBRELLA|PROGRESSIVE|PRODUCTIONS|PLAYSTATION|PHOTOGRAPHY|OLAYANGROUP|MOTORCYCLES|LAMBORGHINI|KERRYHOTELS|INVESTMENTS|FOODNETWORK|ENTERPRISES|ENGINEERING|CREDITUNION|CONTRACTORS|CALVINKLEIN|BRIDGESTONE|BLOCKBUSTER|BLACKFRIDAY|BARCLAYCARD|ACCOUNTANTS|XN--Y9A3AQ|XN--WGBL6A|XN--WGBH1C|XN--UNUP4Y|XN--Q7CE6A|XN--PSSY2U|XN--O3CW4H|XN--MXTQ1M|XN--KPUT3I|XN--IO0A7I|XN--FIQZ9S|XN--FIQS8S|XN--FIQ64B|XN--CZRU2D|XN--CZRS0T|XN--CG4BKI|XN--C2BR7G|XN--9ET52U|XN--9DBQ2A|XN--90A3AC|XN--80ASWG|XN--5TZM5G|XN--55QX5D|XN--4GBRIM|XN--45Q11C|XN--3PXU8K|XN--30RR7Y|VOLKSWAGEN|VLAANDEREN|UNIVERSITY|TECHNOLOGY|TATAMOTORS|SWIFTCOVER|SCHAEFFLER|RESTAURANT|REPUBLICAN|REALESTATE|PRUDENTIAL|PROTECTION|PROPERTIES|ONYOURSIDE|NEXTDIRECT|NATIONWIDE|MITSUBISHI|MANAGEMENT|INDUSTRIES|IMMOBILIEN|HEALTHCARE|FOUNDATION|EXTRASPACE|EUROVISION|CUISINELLA|CREDITCARD|CONSULTING|CAPITALONE|BOEHRINGER|BNPPARIBAS|BASKETBALL|ASSOCIATES|APARTMENTS|ACCOUNTANT|YODOBASHI|XN--VHQUV|XN--TCKWE|XN--QXA6A|XN--P1ACF|XN--NQV7F|XN--NGBRX|XN--L1ACC|XN--J1AMH|XN--J1AEF|XN--FHBEI|XN--E1A4C|XN--D1ALF|XN--C1AVG|XN--90AIS|VACATIONS|TRAVELERS|STOCKHOLM|STATEFARM|STATEBANK|SOLUTIONS|SHANGRILA|SCJOHNSON|RICHARDLI|PRAMERICA|PASSAGENS|PANASONIC|MICROSOFT|MELBOURNE|MARSHALLS|MARKETING|LIFESTYLE|LANDROVER|LANCASTER|KUOKGROUP|INSURANCE|INSTITUTE|HOMESENSE|HOMEGOODS|HOMEDEPOT|HISAMITSU|GOLDPOINT|FURNITURE|FUJIXEROX|FRONTDOOR|FRESENIUS|FIRESTONE|FINANCIAL|FAIRWINDS|EQUIPMENT|EDUCATION|DIRECTORY|COMMUNITY|CHRISTMAS|BLOOMBERG|BARCELONA|AQUARELLE|ANALYTICS|AMSTERDAM|ALLFINANZ|ALFAROMEO|ACCENTURE|YOKOHAMA|XN--QXAM|XN--P1AI|XN--NODE|XN--90AE|WOODSIDE|VERISIGN|VENTURES|VANGUARD|TRAINING|SUPPLIES|STCGROUP|SOFTWARE|SOFTBANK|SHOWTIME|SHOPPING|SERVICES|SECURITY|SAMSCLUB|SAARLAND|RELIANCE|REDSTONE|PROPERTY|PLUMBING|PICTURES|PHARMACY|PARTNERS|OBSERVER|MORTGAGE|MERCKMSD|MEMORIAL|MCKINSEY|MASERATI|MARRIOTT|LUNDBECK|LIGHTING|JPMORGAN|ISTANBUL|IPIRANGA|INFINITI|HOSPITAL|HOLDINGS|HELSINKI|HDFCBANK|GUARDIAN|GRAPHICS|GRAINGER|GOODYEAR|FRONTIER|FOOTBALL|FIRMDALE|FIDELITY|FEEDBACK|EXCHANGE|ETISALAT|ERICSSON|ENGINEER|DOWNLOAD|DISCOVER|DISCOUNT|DIAMONDS|DEMOCRAT|DELOITTE|DELIVERY|COMPUTER|COMMBANK|CLOTHING|CLINIQUE|CLEANING|CITYEATS|CIPRIANI|CATHOLIC|CATERING|CAPETOWN|BUSINESS|BUILDERS|BUDAPEST|BRUSSELS|BROADWAY|BRADESCO|BOUTIQUE|BASEBALL|BARGAINS|BAREFOOT|BARCLAYS|ATTORNEY|ALLSTATE|AIRFORCE|ABUDHABI|ZUERICH|YOUTUBE|YAMAXUN|XFINITY|WINNERS|WINDOWS|WHOSWHO|WEDDING|WEBSITE|WEATHER|WATCHES|WANGGOU|WALMART|TRADING|TOSHIBA|TIFFANY|TICKETS|THEATRE|THEATER|TEMASEK|SYSTEMS|SURGERY|SUPPORT|STORAGE|STAPLES|SINGLES|SHIKSHA|SCIENCE|SCHWARZ|SCHMIDT|SANDVIK|SAMSUNG|REXROTH|REVIEWS|RENTALS|RECIPES|REALTOR|POLITIE|PIONEER|PHILIPS|ORIGINS|ORGANIC|OLDNAVY|OKINAWA|NEUSTAR|NETWORK|NETFLIX|NETBANK|MONSTER|MARKETS|LINCOLN|LIMITED|LECLERC|LATROBE|LASALLE|LANXESS|LACAIXA|KOMATSU|KITCHEN|JUNIPER|JEWELRY|ISMAILI|HYUNDAI|HOTMAIL|HOTELES|HOSTING|HOLIDAY|HITACHI|HANGOUT|HAMBURG|GUITARS|GROCERY|GODADDY|GENTING|GALLERY|FUJITSU|FROGANS|FORSALE|FLOWERS|FLORIST|FLIGHTS|FITNESS|FISHING|FINANCE|FERRERO|FERRARI|FASHION|FARMERS|EXPRESS|EXPOSED|DOMAINS|DIGITAL|DENTIST|CRUISES|CRICKET|COURSES|COUPONS|COUNTRY|CORSICA|COOKING|CONTACT|COMPARE|COMPANY|COMCAST|COLOGNE|COLLEGE|CLUBMED|CITADEL|CHINTAI|CHARITY|CHANNEL|CAREERS|CARAVAN|CAPITAL|BUGATTI|BROTHER|BOOKING|BESTBUY|BENTLEY|BAUHAUS|BANAMEX|AVIANCA|AUSPOST|AUDIBLE|AUCTION|ATHLETA|ANDROID|ALIBABA|AGAKHAN|ACADEMY|ABOGADO|ZAPPOS|YANDEX|YACHTS|XIHUAN|WEBCAM|WALTER|VUELOS|VOYAGE|VOTING|VISION|VIRGIN|VILLAS|VIKING|VIAJES|UNICOM|TRAVEL|TOYOTA|TKMAXX|TJMAXX|TIENDA|TENNIS|TATTOO|TARGET|TAOBAO|TAIPEI|SYDNEY|SWATCH|SUZUKI|SUPPLY|STUDIO|STREAM|SOCIAL|SOCCER|SHOUJI|SELECT|SECURE|SEARCH|SCHULE|SCHOOL|SANOFI|SAKURA|SAFETY|RYUKYU|ROGERS|ROCHER|REVIEW|REPORT|REPAIR|REISEN|REALTY|RACING|QUEBEC|PICTET|PHYSIO|PHOTOS|PFIZER|OTSUKA|ORANGE|ORACLE|ONLINE|OLAYAN|OFFICE|NOWRUZ|NORTON|NISSAY|NISSAN|NATURA|NAGOYA|MUTUAL|MUSEUM|MOSCOW|MORMON|MONASH|MOBILE|MATTEL|MARKET|MAKEUP|MAISON|MADRID|LUXURY|LONDON|LOCKER|LIVING|LEFRAK|LAWYER|LATINO|LANCIA|KOSHER|KINDLE|KINDER|KAUFEN|JUEGOS|JOBURG|JAGUAR|INTUIT|INSURE|IMAMAT|HUGHES|HOTELS|HOCKEY|HIPHOP|HERMES|HEALTH|GRATIS|GOOGLE|GLOBAL|GIVING|GEORGE|GARDEN|GALLUP|FUTBOL|FLICKR|FAMILY|EXPERT|EVENTS|ESTATE|ENERGY|EMERCK|DURBAN|DUPONT|DUNLOP|DOCTOR|DIRECT|DESIGN|DENTAL|DEGREE|DEALER|DATSUN|DATING|CRUISE|CREDIT|COUPON|CONDOS|COMSEC|COFFEE|CLINIC|CLAIMS|CIRCLE|CHURCH|CHROME|CHANEL|CENTER|CASINO|CAREER|CAMERA|BROKER|BOSTON|BOSTIK|BHARTI|BERLIN|BEAUTY|BAYERN|AUTHOR|ARAMCO|ANQUAN|AMAZON|ALSTOM|ALSACE|ALIPAY|AIRTEL|AIRBUS|AGENCY|AFRICA|ABBVIE|ABBOTT|ABARTH|YAHOO|XEROX|WORLD|WORKS|WEIBO|WEBER|WATCH|WALES|VOLVO|VODKA|VIDEO|VEGAS|UBANK|TUSHU|TUNES|TRUST|TRADE|TOURS|TOTAL|TORAY|TOOLS|TOKYO|TODAY|TMALL|TIROL|TIRES|TATAR|SWISS|SUCKS|STYLE|STUDY|STORE|STADA|SPORT|SPACE|SOLAR|SMILE|SMART|SLING|SKYPE|SHOES|SHELL|SHARP|SEVEN|SENER|SALON|RUGBY|RODEO|ROCKS|RICOH|REISE|REHAB|RADIO|QUEST|PROMO|PRIME|PRESS|PRAXI|POKER|PLACE|PIZZA|PHOTO|PHONE|PARTY|PARTS|PARIS|OSAKA|OMEGA|NOWTV|NOKIA|NINJA|NIKON|NEXUS|MOVIE|MONEY|MIAMI|MEDIA|MANGO|MACYS|LOTTO|LOTTE|LOCUS|LOANS|LIXIL|LIPSY|LINDE|LILLY|LEXUS|LEGAL|LEASE|LAMER|KYOTO|KOELN|JETZT|IVECO|IRISH|IKANO|HYATT|HOUSE|HORSE|HONDA|HOMES|GUIDE|GUCCI|GROUP|GRIPE|GREEN|GMAIL|GLOBO|GLASS|GLADE|GIVES|GIFTS|GAMES|GALLO|FORUM|FOREX|FINAL|FEDEX|FAITH|EPSON|EMAIL|EDEKA|EARTH|DUBAI|DRIVE|DELTA|DEALS|DANCE|DABUR|CYMRU|CROWN|CODES|COACH|CLOUD|CLICK|CITIC|CISCO|CHEAP|CHASE|CARDS|CANON|BUILD|BOSCH|BOATS|BLACK|BINGO|BIBLE|BEATS|BAIDU|AZURE|AUTOS|AUDIO|ARCHI|APPLE|AMICA|AMFAM|AETNA|ADULT|ACTOR|ZONE|ZERO|ZARA|YOGA|XBOX|WORK|WINE|WIKI|WIEN|WEIR|WANG|VOTO|VOTE|VIVO|VIVA|VISA|VANA|TUBE|TOYS|TOWN|TIPS|TIAA|TEVA|TECH|TEAM|TAXI|TALK|SURF|STAR|SPOT|SONY|SONG|SOHU|SNCF|SKIN|SITE|SINA|SILK|SHOW|SHOP|SHIA|SHAW|SEXY|SEEK|SEAT|SCOT|SAXO|SAVE|SARL|SALE|SAFE|RUHR|RSVP|ROOM|RMIT|RICH|REST|RENT|REIT|READ|RAID|QPON|PROF|PROD|POST|PORN|POHL|PLUS|PLAY|PINK|PING|PICS|PCCW|PARS|PAGE|OPEN|OLLO|NIKE|NICO|NEXT|NEWS|NAVY|NAME|MOTO|MODA|MOBI|MINT|MINI|MENU|MEME|MEET|MAIF|LUXE|LTDA|LOVE|LOFT|LOAN|LIVE|LINK|LIMO|LIKE|LIFE|LIDL|LGBT|LEGO|LAND|KRED|KPMG|KIWI|KDDI|JPRS|JOBS|JEEP|JAVA|ITAU|INFO|IMMO|IMDB|IEEE|ICBC|HSBC|HOST|HGTV|HERE|HELP|HDFC|HAUS|HAIR|GURU|GUGE|GOOG|GOLF|GOLD|GMBH|GIFT|GGEE|GENT|GBIZ|GAME|FUND|FREE|FORD|FOOD|FLIR|FISH|FIRE|FILM|FIDO|FIAT|FAST|FARM|FANS|FAIL|FAGE|ERNI|DVAG|DUCK|DOCS|DISH|DIET|DESI|DELL|DEAL|DCLK|DATE|DATA|CYOU|COOP|COOL|CLUB|CITY|CITI|CHAT|CERN|CBRE|CASH|CASE|CASA|CARS|CARE|CAMP|CALL|CAFE|BUZZ|BOOK|BOND|BOFA|BLUE|BLOG|BING|BIKE|BEST|BEER|BBVA|BANK|BAND|BABY|AUTO|AUDI|ASIA|ASDA|ARTE|ARPA|ARMY|ARAB|AMEX|ALLY|AKDN|AERO|ADAC|ABLE|AARP|ZIP|YUN|YOU|XYZ|XXX|XIN|WTF|WTC|WOW|WME|WIN|WED|VIP|VIN|VIG|VET|UPS|UOL|UNO|UBS|TVS|TUI|TRV|TOP|TJX|THD|TEL|TDK|TCI|TAX|TAB|STC|SRL|SPA|SOY|SKY|SKI|SFR|SEX|SEW|SES|SCB|SCA|SBS|SBI|SAS|SAP|RWE|RUN|RIP|RIO|RIL|REN|RED|QVC|PWC|PUB|PRU|PRO|PNC|PIN|PID|PHD|PET|PAY|OVH|OTT|ORG|OOO|ONL|ONG|ONE|OFF|OBI|NYC|NTT|NRW|NRA|NOW|NHK|NGO|NFL|NEW|NET|NEC|NBA|NAB|MTR|MTN|MSD|MOV|MOM|MOI|MOE|MMA|MLS|MLB|MIT|MIL|MEN|MED|MBA|MAP|MAN|LTD|LPL|LOL|LLP|LLC|LDS|LAW|LAT|KRD|KPN|KIM|KIA|KFH|JOY|JOT|JNJ|JMP|JLL|JIO|JCB|ITV|IST|INT|INK|ING|INC|IFM|ICU|ICE|IBM|HOW|HOT|HKT|HIV|HBO|GOV|GOT|GOP|GOO|GMX|GMO|GLE|GEA|GDN|GAY|GAP|GAL|FYI|FUN|FTR|FRL|FOX|FOO|FLY|FIT|FAN|EUS|ESQ|EDU|ECO|EAT|DVR|DTV|DOT|DOG|DNP|DIY|DHL|DEV|DDS|DAY|DAD|CSC|CRS|CPA|COM|CFD|CFA|CEO|CBS|CBN|CBA|CAT|CAR|CAM|CAL|CAB|BZH|BUY|BOX|BOT|BOO|BOM|BMW|BMS|BIZ|BIO|BID|BET|BCN|BCG|BBT|BBC|BAR|AXA|AWS|ART|APP|AOL|ANZ|AIG|AFL|AEG|ADS|ACO|ABC|ABB|AAA|ZW|ZM|ZA|YT|YE|WS|WF|VU|VN|VI|VG|VE|VC|VA|UZ|UY|US|UK|UG|UA|TZ|TW|TV|TT|TR|TO|TN|TM|TL|TK|TJ|TH|TG|TF|TD|TC|SZ|SY|SX|SV|SU|ST|SS|SR|SO|SN|SM|SL|SK|SJ|SI|SH|SG|SE|SD|SC|SB|SA|RW|RU|RS|RO|RE|QA|PY|PW|PT|PS|PR|PN|PM|PL|PK|PH|PG|PF|PE|PA|OM|NZ|NU|NR|NP|NO|NL|NI|NG|NF|NE|NC|NA|MZ|MY|MX|MW|MV|MU|MT|MS|MR|MQ|MP|MO|MN|MM|ML|MK|MH|MG|ME|MD|MC|MA|LY|LV|LU|LT|LS|LR|LK|LI|LC|LB|LA|KZ|KY|KW|KR|KP|KN|KM|KI|KH|KG|KE|JP|JO|JM|JE|IT|IS|IR|IQ|IO|IN|IM|IL|IE|ID|HU|HT|HR|HN|HM|HK|GY|GW|GU|GT|GS|GR|GQ|GP|GN|GM|GL|GI|GH|GG|GF|GE|GD|GB|GA|FR|FO|FM|FK|FJ|FI|EU|ET|ES|ER|EG|EE|EC|DZ|DO|DM|DK|DJ|DE|CZ|CY|CX|CW|CV|CU|CR|CO|CN|CM|CL|CK|CI|CH|CG|CF|CD|CC|CA|BZ|BY|BW|BV|BT|BS|BR|BO|BN|BM|BJ|BI|BH|BG|BF|BE|BD|BB|BA|AZ|AX|AW|AU|AT|AS|AR|AQ|AO|AM|AL|AI|AG|AF|AE|AD|AC|SJC|RNO|LAX)(?:\\:([1-9][0-9]{0,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])|\\b|(?=_)))(?:(?:[.,=(+$!*]|&(?:amp|quot|#x27);)?\\/(?:[-\\w$@.+!*:(),=%~]|&(?:amp|quot|#x27);)*(?:[-\\w~@:%)]|&(?:amp|quot|#x27);)|\\/)*(?:(?:\\?(?:[-\\w$@.+!*()\\/,=%{}:;\\[\\]\\|_|~]|&(?:amp|quot|#x27);)*)?|(?:#(?:[-\\w$@.+!*()[\\],=%;\\/:~]|&(?:amp|quot|#x27);)*)?)*)';
declare const URL_REGEX_WITH_REQUIRED_PROTOCOL: string;
declare const LOOSE_URL_WEBSITE_REGEX: '((ht|f)tps?:\\/\\/)([-\\w]+(\\.[-\\w]+)*)(?:\\:([1-9][0-9]{0,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])|\\b|(?=_))';
declare const LOOSE_URL_REGEX: '((((ht|f)tps?:\\/\\/)([-\\w]+(\\.[-\\w]+)*)(?:\\:([1-9][0-9]{0,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])|\\b|(?=_)))(?:(?:[.,=(+$!*]|&(?:amp|quot|#x27);)?\\/(?:[-\\w$@.+!*:(),=%~]|&(?:amp|quot|#x27);)*(?:[-\\w~@:%)]|&(?:amp|quot|#x27);)|\\/)*(?:(?:\\?(?:[-\\w$@.+!*()\\/,=%{}:;\\[\\]\\|_|~]|&(?:amp|quot|#x27);)*)?|(?:#(?:[-\\w$@.+!*()[\\],=%;\\/:~]|&(?:amp|quot|#x27);)*)?)*)';
declare const MARKDOWN_URL_REGEX: '(((((ht|f)tps?:\\/\\/)([-\\w]+(\\.[-\\w]+)*)(?:\\:([1-9][0-9]{0,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])|\\b|(?=_)))(?:(?:[.,=(+$!*]|&(?:amp|quot|#x27);)?\\/(?:[-\\w$@.+!*:(),=%~]|&(?:amp|quot|#x27);)*(?:[-\\w~@:%)]|&(?:amp|quot|#x27);)|\\/)*(?:(?:\\?(?:[-\\w$@.+!*()\\/,=%{}:;\\[\\]\\|_|~]|&(?:amp|quot|#x27);)*)?|(?:#(?:[-\\w$@.+!*()[\\],=%;\\/:~]|&(?:amp|quot|#x27);)*)?)*)|((((ht|f)tps?:\\/\\/)?((?:www\\.)?[a-z0-9](?:[-a-z0-9]*[a-z0-9])?\\.)+(?:XN--VERMGENSBERATUNG-PWB|XN--VERMGENSBERATER-CTB|XN--CLCHC0EA0B2G2A9GCD|XN--W4R85EL8FHU5DNRA|TRAVELERSINSURANCE|NORTHWESTERNMUTUAL|XN--XKC2DL3A5EE0H|XN--MGBERP4A5D4AR|XN--MGBAI9AZGQP6J|XN--MGBAH1A3HJKRD|XN--BCK1B9A5DRE4C|XN--5SU34J936BGSG|XN--3OQ18VL8PN36A|XN--XKC2AL3HYE2A|XN--MGBCPQ6GPA1A|XN--MGBA7C0BBN0A|XN--FZYS8D69UVGM|XN--NQV7FS00EMA|XN--MGBC0A9AZCG|XN--MGBAAKC7DVF|XN--MGBA3A4F16A|XN--LGBBAT1AD8J|XN--KCRX77D1X4A|XN--I1B6B1A6A2E|SANDVIKCOROMANT|KERRYPROPERTIES|AMERICANEXPRESS|XN--RVC1E0AM3E|XN--MGBX4CD0AB|XN--MGBI4ECEXP|XN--MGBCA7DZDO|XN--MGBBH1A71E|XN--MGBAYH7GPA|XN--MGBAAM7A8H|XN--MGBA3A3EJT|XN--JLQ61U9W7B|XN--JLQ480N2RG|XN--H2BREG3EVE|XN--FIQ228C5HS|XN--B4W605FERD|XN--80AQECDR1A|XN--6QQ986B3XL|XN--54B7FTA0CC|WEATHERCHANNEL|KERRYLOGISTICS|COOKINGCHANNEL|CANCERRESEARCH|BANANAREPUBLIC|AMERICANFAMILY|AFAMILYCOMPANY|XN--YGBI2AMMX|XN--YFRO4I67O|XN--TIQ49XQYJ|XN--H2BRJ9C8C|XN--FZC2C9E2C|XN--FPCRJ9C3D|XN--ECKVDTC9D|XN--CCKWCXETD|WOLTERSKLUWER|TRAVELCHANNEL|SPREADBETTING|LIFEINSURANCE|INTERNATIONAL|XN--QCKA1PMC|XN--OGBPF8FL|XN--NGBE9E0A|XN--NGBC5AZD|XN--MK1BU44C|XN--MGBT3DHD|XN--MGBPL2FH|XN--MGBGU82A|XN--MGBAB2BD|XN--MGB9AWBF|XN--GCKR3F0F|XN--8Y0A063A|XN--80ASEHDB|XN--80ADXHKS|XN--4DBRK0CE|XN--45BR5CYL|XN--3E0B707E|VERSICHERUNG|SCHOLARSHIPS|LPLFINANCIAL|CONSTRUCTION|XN--ZFR164B|XN--XHQ521B|XN--W4RS40L|XN--VUQ861B|XN--T60B56A|XN--SES554G|XN--S9BRJ9C|XN--ROVU88B|XN--RHQV96G|XN--Q9JYB4C|XN--PGBS0DH|XN--OTU796D|XN--NYQY26A|XN--MIX891F|XN--MGBTX2B|XN--MGBBH1A|XN--KPRY57D|XN--KPRW13D|XN--JVR189M|XN--J6W193G|XN--IMR513N|XN--HXT814E|XN--H2BRJ9C|XN--GK3AT1E|XN--GECRJ9C|XN--G2XX48C|XN--FLW351E|XN--FJQ720A|XN--FCT429K|XN--EFVY88H|XN--D1ACJ3B|XN--CZR694B|XN--CCK2B3B|XN--9KRT00A|XN--80AO21A|XN--6FRZ82G|XN--55QW42G|XN--45BRJ9C|XN--42C2D9A|XN--3HCRJ9C|XN--3DS443G|XN--3BST00M|XN--2SCRJ9C|XN--1QQW23A|XN--1CK2E1B|XN--11B4C3D|WILLIAMHILL|REDUMBRELLA|PROGRESSIVE|PRODUCTIONS|PLAYSTATION|PHOTOGRAPHY|OLAYANGROUP|MOTORCYCLES|LAMBORGHINI|KERRYHOTELS|INVESTMENTS|FOODNETWORK|ENTERPRISES|ENGINEERING|CREDITUNION|CONTRACTORS|CALVINKLEIN|BRIDGESTONE|BLOCKBUSTER|BLACKFRIDAY|BARCLAYCARD|ACCOUNTANTS|XN--Y9A3AQ|XN--WGBL6A|XN--WGBH1C|XN--UNUP4Y|XN--Q7CE6A|XN--PSSY2U|XN--O3CW4H|XN--MXTQ1M|XN--KPUT3I|XN--IO0A7I|XN--FIQZ9S|XN--FIQS8S|XN--FIQ64B|XN--CZRU2D|XN--CZRS0T|XN--CG4BKI|XN--C2BR7G|XN--9ET52U|XN--9DBQ2A|XN--90A3AC|XN--80ASWG|XN--5TZM5G|XN--55QX5D|XN--4GBRIM|XN--45Q11C|XN--3PXU8K|XN--30RR7Y|VOLKSWAGEN|VLAANDEREN|UNIVERSITY|TECHNOLOGY|TATAMOTORS|SWIFTCOVER|SCHAEFFLER|RESTAURANT|REPUBLICAN|REALESTATE|PRUDENTIAL|PROTECTION|PROPERTIES|ONYOURSIDE|NEXTDIRECT|NATIONWIDE|MITSUBISHI|MANAGEMENT|INDUSTRIES|IMMOBILIEN|HEALTHCARE|FOUNDATION|EXTRASPACE|EUROVISION|CUISINELLA|CREDITCARD|CONSULTING|CAPITALONE|BOEHRINGER|BNPPARIBAS|BASKETBALL|ASSOCIATES|APARTMENTS|ACCOUNTANT|YODOBASHI|XN--VHQUV|XN--TCKWE|XN--QXA6A|XN--P1ACF|XN--NQV7F|XN--NGBRX|XN--L1ACC|XN--J1AMH|XN--J1AEF|XN--FHBEI|XN--E1A4C|XN--D1ALF|XN--C1AVG|XN--90AIS|VACATIONS|TRAVELERS|STOCKHOLM|STATEFARM|STATEBANK|SOLUTIONS|SHANGRILA|SCJOHNSON|RICHARDLI|PRAMERICA|PASSAGENS|PANASONIC|MICROSOFT|MELBOURNE|MARSHALLS|MARKETING|LIFESTYLE|LANDROVER|LANCASTER|KUOKGROUP|INSURANCE|INSTITUTE|HOMESENSE|HOMEGOODS|HOMEDEPOT|HISAMITSU|GOLDPOINT|FURNITURE|FUJIXEROX|FRONTDOOR|FRESENIUS|FIRESTONE|FINANCIAL|FAIRWINDS|EQUIPMENT|EDUCATION|DIRECTORY|COMMUNITY|CHRISTMAS|BLOOMBERG|BARCELONA|AQUARELLE|ANALYTICS|AMSTERDAM|ALLFINANZ|ALFAROMEO|ACCENTURE|YOKOHAMA|XN--QXAM|XN--P1AI|XN--NODE|XN--90AE|WOODSIDE|VERISIGN|VENTURES|VANGUARD|TRAINING|SUPPLIES|STCGROUP|SOFTWARE|SOFTBANK|SHOWTIME|SHOPPING|SERVICES|SECURITY|SAMSCLUB|SAARLAND|RELIANCE|REDSTONE|PROPERTY|PLUMBING|PICTURES|PHARMACY|PARTNERS|OBSERVER|MORTGAGE|MERCKMSD|MEMORIAL|MCKINSEY|MASERATI|MARRIOTT|LUNDBECK|LIGHTING|JPMORGAN|ISTANBUL|IPIRANGA|INFINITI|HOSPITAL|HOLDINGS|HELSINKI|HDFCBANK|GUARDIAN|GRAPHICS|GRAINGER|GOODYEAR|FRONTIER|FOOTBALL|FIRMDALE|FIDELITY|FEEDBACK|EXCHANGE|ETISALAT|ERICSSON|ENGINEER|DOWNLOAD|DISCOVER|DISCOUNT|DIAMONDS|DEMOCRAT|DELOITTE|DELIVERY|COMPUTER|COMMBANK|CLOTHING|CLINIQUE|CLEANING|CITYEATS|CIPRIANI|CATHOLIC|CATERING|CAPETOWN|BUSINESS|BUILDERS|BUDAPEST|BRUSSELS|BROADWAY|BRADESCO|BOUTIQUE|BASEBALL|BARGAINS|BAREFOOT|BARCLAYS|ATTORNEY|ALLSTATE|AIRFORCE|ABUDHABI|ZUERICH|YOUTUBE|YAMAXUN|XFINITY|WINNERS|WINDOWS|WHOSWHO|WEDDING|WEBSITE|WEATHER|WATCHES|WANGGOU|WALMART|TRADING|TOSHIBA|TIFFANY|TICKETS|THEATRE|THEATER|TEMASEK|SYSTEMS|SURGERY|SUPPORT|STORAGE|STAPLES|SINGLES|SHIKSHA|SCIENCE|SCHWARZ|SCHMIDT|SANDVIK|SAMSUNG|REXROTH|REVIEWS|RENTALS|RECIPES|REALTOR|POLITIE|PIONEER|PHILIPS|ORIGINS|ORGANIC|OLDNAVY|OKINAWA|NEUSTAR|NETWORK|NETFLIX|NETBANK|MONSTER|MARKETS|LINCOLN|LIMITED|LECLERC|LATROBE|LASALLE|LANXESS|LACAIXA|KOMATSU|KITCHEN|JUNIPER|JEWELRY|ISMAILI|HYUNDAI|HOTMAIL|HOTELES|HOSTING|HOLIDAY|HITACHI|HANGOUT|HAMBURG|GUITARS|GROCERY|GODADDY|GENTING|GALLERY|FUJITSU|FROGANS|FORSALE|FLOWERS|FLORIST|FLIGHTS|FITNESS|FISHING|FINANCE|FERRERO|FERRARI|FASHION|FARMERS|EXPRESS|EXPOSED|DOMAINS|DIGITAL|DENTIST|CRUISES|CRICKET|COURSES|COUPONS|COUNTRY|CORSICA|COOKING|CONTACT|COMPARE|COMPANY|COMCAST|COLOGNE|COLLEGE|CLUBMED|CITADEL|CHINTAI|CHARITY|CHANNEL|CAREERS|CARAVAN|CAPITAL|BUGATTI|BROTHER|BOOKING|BESTBUY|BENTLEY|BAUHAUS|BANAMEX|AVIANCA|AUSPOST|AUDIBLE|AUCTION|ATHLETA|ANDROID|ALIBABA|AGAKHAN|ACADEMY|ABOGADO|ZAPPOS|YANDEX|YACHTS|XIHUAN|WEBCAM|WALTER|VUELOS|VOYAGE|VOTING|VISION|VIRGIN|VILLAS|VIKING|VIAJES|UNICOM|TRAVEL|TOYOTA|TKMAXX|TJMAXX|TIENDA|TENNIS|TATTOO|TARGET|TAOBAO|TAIPEI|SYDNEY|SWATCH|SUZUKI|SUPPLY|STUDIO|STREAM|SOCIAL|SOCCER|SHOUJI|SELECT|SECURE|SEARCH|SCHULE|SCHOOL|SANOFI|SAKURA|SAFETY|RYUKYU|ROGERS|ROCHER|REVIEW|REPORT|REPAIR|REISEN|REALTY|RACING|QUEBEC|PICTET|PHYSIO|PHOTOS|PFIZER|OTSUKA|ORANGE|ORACLE|ONLINE|OLAYAN|OFFICE|NOWRUZ|NORTON|NISSAY|NISSAN|NATURA|NAGOYA|MUTUAL|MUSEUM|MOSCOW|MORMON|MONASH|MOBILE|MATTEL|MARKET|MAKEUP|MAISON|MADRID|LUXURY|LONDON|LOCKER|LIVING|LEFRAK|LAWYER|LATINO|LANCIA|KOSHER|KINDLE|KINDER|KAUFEN|JUEGOS|JOBURG|JAGUAR|INTUIT|INSURE|IMAMAT|HUGHES|HOTELS|HOCKEY|HIPHOP|HERMES|HEALTH|GRATIS|GOOGLE|GLOBAL|GIVING|GEORGE|GARDEN|GALLUP|FUTBOL|FLICKR|FAMILY|EXPERT|EVENTS|ESTATE|ENERGY|EMERCK|DURBAN|DUPONT|DUNLOP|DOCTOR|DIRECT|DESIGN|DENTAL|DEGREE|DEALER|DATSUN|DATING|CRUISE|CREDIT|COUPON|CONDOS|COMSEC|COFFEE|CLINIC|CLAIMS|CIRCLE|CHURCH|CHROME|CHANEL|CENTER|CASINO|CAREER|CAMERA|BROKER|BOSTON|BOSTIK|BHARTI|BERLIN|BEAUTY|BAYERN|AUTHOR|ARAMCO|ANQUAN|AMAZON|ALSTOM|ALSACE|ALIPAY|AIRTEL|AIRBUS|AGENCY|AFRICA|ABBVIE|ABBOTT|ABARTH|YAHOO|XEROX|WORLD|WORKS|WEIBO|WEBER|WATCH|WALES|VOLVO|VODKA|VIDEO|VEGAS|UBANK|TUSHU|TUNES|TRUST|TRADE|TOURS|TOTAL|TORAY|TOOLS|TOKYO|TODAY|TMALL|TIROL|TIRES|TATAR|SWISS|SUCKS|STYLE|STUDY|STORE|STADA|SPORT|SPACE|SOLAR|SMILE|SMART|SLING|SKYPE|SHOES|SHELL|SHARP|SEVEN|SENER|SALON|RUGBY|RODEO|ROCKS|RICOH|REISE|REHAB|RADIO|QUEST|PROMO|PRIME|PRESS|PRAXI|POKER|PLACE|PIZZA|PHOTO|PHONE|PARTY|PARTS|PARIS|OSAKA|OMEGA|NOWTV|NOKIA|NINJA|NIKON|NEXUS|MOVIE|MONEY|MIAMI|MEDIA|MANGO|MACYS|LOTTO|LOTTE|LOCUS|LOANS|LIXIL|LIPSY|LINDE|LILLY|LEXUS|LEGAL|LEASE|LAMER|KYOTO|KOELN|JETZT|IVECO|IRISH|IKANO|HYATT|HOUSE|HORSE|HONDA|HOMES|GUIDE|GUCCI|GROUP|GRIPE|GREEN|GMAIL|GLOBO|GLASS|GLADE|GIVES|GIFTS|GAMES|GALLO|FORUM|FOREX|FINAL|FEDEX|FAITH|EPSON|EMAIL|EDEKA|EARTH|DUBAI|DRIVE|DELTA|DEALS|DANCE|DABUR|CYMRU|CROWN|CODES|COACH|CLOUD|CLICK|CITIC|CISCO|CHEAP|CHASE|CARDS|CANON|BUILD|BOSCH|BOATS|BLACK|BINGO|BIBLE|BEATS|BAIDU|AZURE|AUTOS|AUDIO|ARCHI|APPLE|AMICA|AMFAM|AETNA|ADULT|ACTOR|ZONE|ZERO|ZARA|YOGA|XBOX|WORK|WINE|WIKI|WIEN|WEIR|WANG|VOTO|VOTE|VIVO|VIVA|VISA|VANA|TUBE|TOYS|TOWN|TIPS|TIAA|TEVA|TECH|TEAM|TAXI|TALK|SURF|STAR|SPOT|SONY|SONG|SOHU|SNCF|SKIN|SITE|SINA|SILK|SHOW|SHOP|SHIA|SHAW|SEXY|SEEK|SEAT|SCOT|SAXO|SAVE|SARL|SALE|SAFE|RUHR|RSVP|ROOM|RMIT|RICH|REST|RENT|REIT|READ|RAID|QPON|PROF|PROD|POST|PORN|POHL|PLUS|PLAY|PINK|PING|PICS|PCCW|PARS|PAGE|OPEN|OLLO|NIKE|NICO|NEXT|NEWS|NAVY|NAME|MOTO|MODA|MOBI|MINT|MINI|MENU|MEME|MEET|MAIF|LUXE|LTDA|LOVE|LOFT|LOAN|LIVE|LINK|LIMO|LIKE|LIFE|LIDL|LGBT|LEGO|LAND|KRED|KPMG|KIWI|KDDI|JPRS|JOBS|JEEP|JAVA|ITAU|INFO|IMMO|IMDB|IEEE|ICBC|HSBC|HOST|HGTV|HERE|HELP|HDFC|HAUS|HAIR|GURU|GUGE|GOOG|GOLF|GOLD|GMBH|GIFT|GGEE|GENT|GBIZ|GAME|FUND|FREE|FORD|FOOD|FLIR|FISH|FIRE|FILM|FIDO|FIAT|FAST|FARM|FANS|FAIL|FAGE|ERNI|DVAG|DUCK|DOCS|DISH|DIET|DESI|DELL|DEAL|DCLK|DATE|DATA|CYOU|COOP|COOL|CLUB|CITY|CITI|CHAT|CERN|CBRE|CASH|CASE|CASA|CARS|CARE|CAMP|CALL|CAFE|BUZZ|BOOK|BOND|BOFA|BLUE|BLOG|BING|BIKE|BEST|BEER|BBVA|BANK|BAND|BABY|AUTO|AUDI|ASIA|ASDA|ARTE|ARPA|ARMY|ARAB|AMEX|ALLY|AKDN|AERO|ADAC|ABLE|AARP|ZIP|YUN|YOU|XYZ|XXX|XIN|WTF|WTC|WOW|WME|WIN|WED|VIP|VIN|VIG|VET|UPS|UOL|UNO|UBS|TVS|TUI|TRV|TOP|TJX|THD|TEL|TDK|TCI|TAX|TAB|STC|SRL|SPA|SOY|SKY|SKI|SFR|SEX|SEW|SES|SCB|SCA|SBS|SBI|SAS|SAP|RWE|RUN|RIP|RIO|RIL|REN|RED|QVC|PWC|PUB|PRU|PRO|PNC|PIN|PID|PHD|PET|PAY|OVH|OTT|ORG|OOO|ONL|ONG|ONE|OFF|OBI|NYC|NTT|NRW|NRA|NOW|NHK|NGO|NFL|NEW|NET|NEC|NBA|NAB|MTR|MTN|MSD|MOV|MOM|MOI|MOE|MMA|MLS|MLB|MIT|MIL|MEN|MED|MBA|MAP|MAN|LTD|LPL|LOL|LLP|LLC|LDS|LAW|LAT|KRD|KPN|KIM|KIA|KFH|JOY|JOT|JNJ|JMP|JLL|JIO|JCB|ITV|IST|INT|INK|ING|INC|IFM|ICU|ICE|IBM|HOW|HOT|HKT|HIV|HBO|GOV|GOT|GOP|GOO|GMX|GMO|GLE|GEA|GDN|GAY|GAP|GAL|FYI|FUN|FTR|FRL|FOX|FOO|FLY|FIT|FAN|EUS|ESQ|EDU|ECO|EAT|DVR|DTV|DOT|DOG|DNP|DIY|DHL|DEV|DDS|DAY|DAD|CSC|CRS|CPA|COM|CFD|CFA|CEO|CBS|CBN|CBA|CAT|CAR|CAM|CAL|CAB|BZH|BUY|BOX|BOT|BOO|BOM|BMW|BMS|BIZ|BIO|BID|BET|BCN|BCG|BBT|BBC|BAR|AXA|AWS|ART|APP|AOL|ANZ|AIG|AFL|AEG|ADS|ACO|ABC|ABB|AAA|ZW|ZM|ZA|YT|YE|WS|WF|VU|VN|VI|VG|VE|VC|VA|UZ|UY|US|UK|UG|UA|TZ|TW|TV|TT|TR|TO|TN|TM|TL|TK|TJ|TH|TG|TF|TD|TC|SZ|SY|SX|SV|SU|ST|SS|SR|SO|SN|SM|SL|SK|SJ|SI|SH|SG|SE|SD|SC|SB|SA|RW|RU|RS|RO|RE|QA|PY|PW|PT|PS|PR|PN|PM|PL|PK|PH|PG|PF|PE|PA|OM|NZ|NU|NR|NP|NO|NL|NI|NG|NF|NE|NC|NA|MZ|MY|MX|MW|MV|MU|MT|MS|MR|MQ|MP|MO|MN|MM|ML|MK|MH|MG|ME|MD|MC|MA|LY|LV|LU|LT|LS|LR|LK|LI|LC|LB|LA|KZ|KY|KW|KR|KP|KN|KM|KI|KH|KG|KE|JP|JO|JM|JE|IT|IS|IR|IQ|IO|IN|IM|IL|IE|ID|HU|HT|HR|HN|HM|HK|GY|GW|GU|GT|GS|GR|GQ|GP|GN|GM|GL|GI|GH|GG|GF|GE|GD|GB|GA|FR|FO|FM|FK|FJ|FI|EU|ET|ES|ER|EG|EE|EC|DZ|DO|DM|DK|DJ|DE|CZ|CY|CX|CW|CV|CU|CR|CO|CN|CM|CL|CK|CI|CH|CG|CF|CD|CC|CA|BZ|BY|BW|BV|BT|BS|BR|BO|BN|BM|BJ|BI|BH|BG|BF|BE|BD|BB|BA|AZ|AX|AW|AU|AT|AS|AR|AQ|AO|AM|AL|AI|AG|AF|AE|AD|AC|SJC|RNO|LAX)(?:\\:([1-9][0-9]{0,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])|\\b|(?=_)))(?:(?:[.,=(+$!*]|&(?:amp|quot|#x27);)?\\/(?:[-\\w$@.+!*:(),=%~]|&(?:amp|quot|#x27);)*(?:[-\\w~@:%)]|&(?:amp|quot|#x27);)|\\/)*(?:(?:\\?(?:[-\\w$@.+!*()\\/,=%{}:;\\[\\]\\|_|~]|&(?:amp|quot|#x27);)*)?|(?:#(?:[-\\w$@.+!*()[\\],=%;\\/:~]|&(?:amp|quot|#x27);)*)?)*))';
export {
    URL_WEBSITE_REGEX,
    URL_PATH_REGEX,
    URL_PARAM_REGEX,
    URL_FRAGMENT_REGEX,
    URL_REGEX,
    URL_REGEX_WITH_REQUIRED_PROTOCOL,
    URL_PROTOCOL_REGEX,
    LOOSE_URL_REGEX,
    LOOSE_URL_WEBSITE_REGEX,
    MARKDOWN_URL_REGEX,
};
