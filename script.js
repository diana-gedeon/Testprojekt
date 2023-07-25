// Schritt 1: render Funktion erstellen, die uns ein HTML generiert, welches die gewünschten Werte aus dem array ausspuckt. DIV Container heisst land.
//Schritt 2: KommenDIV Container landcontent fürInputfeld bauen mit Button (um später eigene Kommentare hinzuzufügen )
//Schritt: Kommentare rendern, die schon im JSON array hinterlegt sind.
//  Schritt 4: eigene Kommentare -neue Datei!!


let bundeslaender = [ // Aufbau eines JSON array
    {
        "name": "Baden-Württemberg",
        "population": 11.1,
        "url": "https://www.baden-wuerttemberg.de/de/startseite/",
        "comments": []
    },
    {
        "name": "Bayern",
        "population": 13.1,
        "url": "https://www.bayern.de/",
        "comments": ['Tolles Wetter und gute Wander-Routen', 'München ist eine schöne Stadt']
    },
    {
        "name": "Berlin",
        "population": 3.7,
        "url": "https://www.berlin.de/",
        "comments": []
    },
    {
        "name": "Brandenburg",
        "population": 2.5,
        "url": "https://www.brandenburg.de/",
        "comments": []
    },
    {
        "name": "Bremen",
        "population": 0.7,
        "url": "https://www.bremen.de/",
        "comments": ['Die Stadtmusikanten haben mir schon immer gefallen!']
    },
    {
        "name": "Hamburg",
        "population": 1.8,
        "url": "https://www.hamburg.de/",
        "comments": ['Ein wirklich tolles Bundesland']
    },
    {
        "name": "Hessen",
        "population": 6.3,
        "url": "https://www.hessen.de/",
        "comments": []
    },
    {
        "name": "Mecklenburg-Vorpommern",
        "population": 1.6,
        "url": "https://www.mecklenburg-vorpommern.de/startseite/",
        "comments": []
    },
    {
        "name": "Niedersachsen",
        "population": 8,
        "url": "https://www.niedersachsen.de/startseite/",
        "comments": []
    },
    {
        "name": "Nordrhein-Westfalen",
        "population": 17.9,
        "url": "https://www.land.nrw/",
        "comments": []
    },
    {
        "name": "Rheinland-Pfalz",
        "population": 4.1,
        "url": "https://www.rlp.de/de/startseite/",
        "comments": []
    },
    {
        "name": "Saarland",
        "population": 1,
        "url": "https://www.saarland.de/DE/home/home_node.html",
        "comments": []
    },
    {
        "name": "Sachsen",
        "population": 4.1,
        "url": "https://www.sachsen.de/",
        "comments": []
    },
    {
        "name": "Sachsen-Anhalt",
        "population": 2.2,
        "url": "https://www.sachsen-anhalt.de/startseite/",
        "comments": []
    },
    {
        "name": "Schleswig-Holstein",
        "population": 2.9,
        "url": "https://www.schleswig-holstein.de/DE/Home/home_node.html",
        "comments": []
    },
    {
        "name": "Thüringen",
        "population": 2.1,
        "url": "https://thueringen.de/",
        "comments": []
    }
];

function render(){ // Schritt 1: render Funktion erstellen, die uns ein HTML generiert, welches Werte aus dem array ausspuckt. Dann: Die Bundesländernamen untereinander darstellen.
    let content = document.getElementById('content'); // div Container wird verknüpft
    content.innerHTML = ''; // Containerinhalt wird gelöscht

    for(let i=0; i< bundeslaender.length; i++){
        const land = bundeslaender[i]; // variable land wird mit dem array bundesländer(stelle des arrays) verknüpft.

        content.innerHTML += /*html*/ `
        <div class="card">
        <h2>${land ['name']} </h2> <!--Erklärung zum generierten HTML: Wir wollen aus dem JSON array auf das Listenelement "name" zugreien. dafür nehmen wir die variable land und schreiben den Schlüssel 'name' mit rein.
damit haben wir die Namen aller Bundesländer untereinander dargestellt.-->

        <!--Schritt 2: Kommentare anzeigen lassen. Dafür brtaucht es ein neues DIV  (landcontent) in das die Kommentare geladen werden--->
        <div id="landcontent${i}"></div> <!--Wir generieren eine weitere DIV mit ID und Parameter i. Das i ist wichtig, für die auseinenaderhaltung der IDs. Es wird jetzt landcontent0, landcontent1 usw -->
        <input id="input${i}"><button>OK</button> <!-- Inputfeld ubnd Button, um später eigene Kommentare zu schreiben: auch beim Imputfeld muss ein i hinzugefügt werden. Genau so verhält es sich hier: Input0, Input1 usw. -->

        <div>`;

        

        // Abschnitt: Kommenatre rendern, die schon ins JSON rein geschrieben wurden. 

    let landcontent = document.getElementById(`landcontent${i}`); // Variable landcontent wird mit ID verknüpft.  Die ID wird generiert aus der For Schleife. z:b Ba-Wü ist 0, Bayern 1 usw. Die Variable landvontent ist im ersten durchlauf mit dem 0ten container vernüpft

         for(let j=0; j< land['comments'].length; j++){ // wichtig: Diese 2. for Schleife muss innerhalb der ersten Forschleife sein. Unswer Index muss aber umbenannt werden z.B. in j.
        const comment = land['comments'] [j]; // Wir haben 2x eckige Klammern: da wir auf das JSON zugreifen, dann auf die Kommentare des arrays Bundesländer 'comments' zugreifen  und dann auf das jeweilige Kommentar.

        landcontent.innerHTML += `<div>${comment}</div>`// Der Kommentar wird auf der Website sichtbar gemacht.
            }

        
    }

}

