const showArray = document.querySelector(".showarray");

const carArray = [
    citroenJumper = {
        title: "Citroën Jumper 35 2.2 HDI L3 Zwaar|Airco|Meubelbak|zijdeur",
        description: "Nette Meubelbakwagen met zijdeur in de bak en Hollandia Laadklep hefvermogen 750kg Afleveringskosten 695,- euro. Dit is inclusief onderhoudsbeurt, apk, poetsen, tenaamstelling, airco service en 6 maanden...",
        price: 6250.00,
        kilometer: 268.312,
        buildYear: 2014
    },
    {
        title: "Audi A6 2.0 TDI Pro Line ( S-Line)- Leder-Xenon Led-Navi-Ecc",
        description: "S Line-pakket2. <br> Audi A6 2.0 TDI Pro Line ( S-Line)- Leder-Xenon Led-Navi-Ecc-Pdc",
        price: 7400.00,
        kilometer: 247800,
        buildYear: 2008
    },
    {
        title: "Volkswagen Polo 1.2 TDI BlueMotion Comfortline 5 DRS TOP OND",
        description: "Algemene informatie <br>Aantal deuren: 5 <br>Kleur: Zwart metallic",
        price: 4249.00,
        kilometer: 237496,
        buildYear: 2012
    },
    {
        title: "Volvo C30 1.6 D2 R-edition | Xenon | Autom. Airco | Cruise C",
        description: "Zeer mooie en goed onderhouden Volvo C30. De distributieriem is vervangen bij 130.455 km en de APK is geldig tot 06-07-2022! U kunt deze nette auto al rijden voor € 109,- per maand, zonder aanbetaling! Wij werken uitsluitend op afspraak, bel ons dus om uw bezoek naar wens af te stemmen, ook 's avonds en in het weekend. Tel. 06-12547837 of via whatsapp wa.me/31612547837 <br>Strak design, een hoog veiligheidsniveau en ingetogen luxe, dat zijn belangrijke eigenschappen van deze Volvo C30. Hij heeft een dieselmotor en een handgeschakelde zesversnellingsbak. Bestuurder en bijrijder krijgen een warm welkom: deze Volvo C30 is voorzien van verwarmbare voorstoelen. Dankzij de xenonverlichting profiteer jij in het donker van een krachtige en heldere lichtbundel. Deze Volvo C30 is voorzien van een start-stop systeem. Dat scheelt aardig in brandstofverbruik, maar levert dus ook minder uitstoot van schadelijke stoffen. Je wordt in deze auto ook getrakteerd op 17 inch lichtmetalen velgen, getint glas, led-achterlichten, verstelbare lendensteunen, actieve hoofdsteunen, metallic lak, elektrisch bedienbare ramen voor, elektrisch verstelde en verwarmde buitenspiegels en led-dagrijverlichting. <br>Het geluidssyteem in deze Volvo C30 is regelbaar met behulp van de audiobediening op het stuur. Digitale muziek afspelen gaat heel eenvoudig met de ingebouwde usb-aansluiting. De automatische airconditioning zorgt onder alle omstandigheden voor een prettige temperatuur. De auto neemt je werk uit handen doordat hij zelf veel in de gaten houdt. Een regensensor en een automatisch inschakelbare verlichting nemen waar wanneer de ruitenwissers en het licht aan moeten. De achteropkomend verkeer waarschuwing is een mooie veiligheidsoptie, die middels sensoren in de gaten houdt wat er onderweg achter je gebeurt. Nooit te snel, altijd constant: dat is het voordeel van de aanwezige cruise control. Ook is de Volvo uitgerust met: lederen versnellingspook, verstelbaar stuur, automatisch dimmende binnenspiegel, boordcomputer, isofix-aansluiting, centrale deurvergrendeling met afstandsbediening en bagage afdekhoes. <br>De nieuwste veiligheidssystemen komen in deze Volvo C30 samen. Bij een noodstop gebeurt er heel veel tegelijk: gas los, rempedaal in, kijken, sturen. Dan is het een veilig gevoel dat de Brake Assist je remactie tot het maximum oppept. <br>Je bent nieuwsgierig? Bel of mail ons dan direct om een proefrit te reserveren.",
        price: 6445.00,
        kilometer: 193616,
        buildYear: 2012
    },
    {
        title: "Renault Clio Estate 1.5 dCi Ecoleader 2017 69.000km NL Navi",
        description: "Renault Clio bj 2017 nette staat NL auto recent dealer onderhouden - alle historie volledig aanwezig - 2 kaart sleutels - meerdere foto's en clio's zie website - www.beukhofautos.nl PRIJS IS INCL BTW",
        price: 10350.00,
        kilometer: 69868,
        buildYear: 2017
    },
]

for(let i = 0; i < carArray.length; i++){
    let myArray = carArray[i];
    document.body.innerHTML += `<strong>Naam:</strong> ${myArray.title}<br><br>Beschrijving: ${myArray.description}<br>Prijs: ${myArray.price}<br>Kilometers: ${myArray.kilometer}<br>Bouwjaar: ${myArray.buildYear}<br><br>`
}

const onions = {
    title: "1 de Beste Uien",
    description: "Uien",
    oldPrice: 1.19,
    discount: "2 Kilo voor 0.69",
    newPrice: 0.69
}

const cauliflower = {
    title: "Hollandse Bloemkool",
    description: "Dirk doet er alles aan om de prijs- en productinformatie van onze producten zo accuraat mogelijk te houden. Echter, producten worden vaak verbeterd en daardoor kan informatie geregeld veranderen. Daarom raden we je aan om altijd de verpakking te lezen van het werkelijke product. Zijn er vragen of opmerkingen? Neem dan gerust contact op met onze klantenservice.",
    oldPrice: 1.99,
    discount: "Per stuk 1.19",
    newPrice: 1.19
}

const bonduelleLinzen = {
    title: "Bonduelle Linzen",
    description: "Linzen vacuüm met stoom bereid",
    oldPrice: 1.21,
    discount: "Per blik 0.59",
    newPrice: 0.59
}

const apples = {
    title: "Hollandse Jonagold",
    description: "Dirk doet er alles aan om de prijs- en productinformatie van onze producten zo accuraat mogelijk te houden. Echter, producten worden vaak verbeterd en daardoor kan informatie geregeld veranderen. Daarom raden we je aan om altijd de verpakking te lezen van het werkelijke product. Zijn er vragen of opmerkingen? Neem dan gerust contact op met onze klantenservice.",
    oldPrice: 1.89,
    discount: "1 Kilo 0.99",
    newPrice: 0.99
}

const bristo = {
    title: "1 de Beste Voordeel bistro minikrieltjes",
    description: "voorgekookte en gekruide aardappel",
    oldPrice: 0.85,
    discount: "600 Gram 0.69",
    newPrice: 0.69
}

const tweakersArray = [
    {
        name: "Elden Ring, PS5",
        console: "PS5",
        genre: "Actie, RPG",
        reviews: "5 Stars",
        price: 52.28
    },
    {
        name: "Pokémon Legends: Arceus, Switch",
        console: "Switch",
        genre: "Actie, Avontuur",
        reviews: "4 Stars",
        price: 49.95
    },
    {
        name: "FIFA 22, PS5",
        console: "PS5",
        genre: "Sport, Voetbal",
        reviews: "2.5 Stars",
        price: 39.99
    },
    {
        name: "Animal Crossing: New Horizons, Switch",
        console: "Switch",
        genre: "Avontuur, Kids",
        reviews: "4 Stars",
        price: 48.90
    },
    {
        name: "Marvel's Spider-Man: Miles Morales, PS5",
        console: "PS5",
        genre: "Actie, Avontuur",
        reviews: "4 Stars",
        price: 34.99
    }
]



