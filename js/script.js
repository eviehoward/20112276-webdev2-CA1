/************************ARRAY OF OBJECTS************************/
const characters = [
    {
        name: "Spider-Man",
        alias: "Peter Parker",
        type: "Hero",
        primaryColour: "#DF1F2D",
        secondaryColour: "#447BBE",
        species: "Mutate",
        location: "New York",
        strengthRating: 8,
        agilityRating: 10,
        intelligenceRating: 9,
        quote: "With great power comes great responsibility."
    },
    {
        name: "Superman",
        alias: "Clark Kent",
        type: "Hero",
        primaryColour: "#2B3784",
        secondaryColour: "#DF1F2D",
        species: "Kryptonian",
        location: "Metropolis",
        strengthRating: 10,
        agilityRating: 8,
        intelligenceRating: 7,
        quote: "Maybe that's the real punk rock."
    },
    {
        name: "Deadpool",
        alias: "Wade Wilson",
        type: "Vigilante",
        primaryColour: "#DF1F2D",
        secondaryColour: "#000000",
        species: "Mutant",
        location: "Vancouver",
        strengthRating: 7,
        agilityRating: 5,
        intelligenceRating: 5,
        quote: "Maximum effort!"
    },
    {
        name: "Iron-Man",
        alias: "Tony Stark",
        type: "Hero",
        primaryColour: "#cc0216",
        secondaryColour: "#ffae00",
        species: "Human",
        location: "Malibu",
        strengthRating: 7,
        agilityRating: 4,
        intelligenceRating: 10,
        quote: "I am Iron Man."
    },
    {
        name: "Iron Monger",
        alias: "Obadiah Stane",
        type: "Villain",
        primaryColour: "#999999",
        secondaryColour: "N/A",
        species: "Human",
        location: "Malibu",
        strengthRating: 7,
        agilityRating: 2,
        intelligenceRating: 5,
        quote: "How ironic, Tony. Tyring to rid the world of weapons, you gave it its best one ever."
    },
    {
        name: "Daredevil",
        alias: "Matt Murdock",
        type: "Vigilante",
        primaryColour: "#cc0216",
        secondaryColour: "N/A",
        species: "Mutate",
        location: "New York",
        strengthRating: 5,
        agilityRating: 7,
        intelligenceRating: 8,
        quote: "I'm Daredevil... not even God can stop that now."
    },
    {
        name: "Peacemaker",
        alias: "Christopher Smith",
        type: "Vigilante",
        primaryColour: "#DF1F2D",
        secondaryColour: "#0020d6",
        species: "Human",
        location: "Evergreen",
        strengthRating: 7,
        agilityRating: 5,
        intelligenceRating: 5,
        quote: "I cherish peace with all of my heart. I don't care how many men, women, and children I need to kill to get it."
    },
    {
        name: "Doctor Octopus",
        alias: "Otto Octavius",
        type: "Villain",
        primaryColour: "#006100",
        secondaryColour: "#f0d400",
        species: "Human",
        location: "New York",
        strengthRating: 6,
        agilityRating: 5,
        intelligenceRating: 10,
        quote: "Peace for Octopus is at hand. All I require to achieve it is the death of Spider-Man!"
    },
    {
        name: "Vigilante",
        alias: "Adrian Chase",
        type: "Vigilante",
        primaryColour: "#04c5d6",
        secondaryColour: "#eb0c3c",
        species: "Human",
        location: "Evergreen",
        strengthRating: 5,
        agilityRating: 7,
        intelligenceRating: 3,
        quote: "When I find out someone murdered an innocent person, or sold somebody heroin, or did some graffiti, and I kill that person with my bare hands, their eyeballs popping out of their skulls. You think that gives me pleasure? Well, it does."
    },
    {
        name: "Captain America",
        alias: "Steve Rogers",
        type: "Hero",
        primaryColour: "#022ecc",
        secondaryColour: "#df1f2d",
        species: "Mutate",
        location: "New York",
        strengthRating: 9,
        agilityRating: 6,
        intelligenceRating: 7,
        quote: "Avengers, assemble!"
    },
    {
        name: "Black Widow",
        alias: "Natasha Romanoff",
        type: "Hero",
        primaryColour: "#0a0a0a",
        secondaryColour: "N/A",
        species: "Human",
        location: "Washington",
        strengthRating: 6,
        agilityRating: 9,
        intelligenceRating: 8,
        quote: "I've got red in my ledger."
    },
    {
        name: "Lex Luthor",
        alias: "Alexander Luthor",
        type: "Villain",
        primaryColour: "#011047",
        secondaryColour: "N/A",
        species: "Human",
        location: "Metropolis",
        strengthRating: 2,
        agilityRating: 1,
        intelligenceRating: 10,
        quote: "Sentimentality is synonymous with vulnerability."
    },
    {
        name: "The Human Torch",
        alias: "Johnny Storm",
        type: "Hero",
        primaryColour: "#29a6ff",
        secondaryColour: "#ffffff",
        species: "Mutant",
        location: "New York",
        strengthRating: 8,
        agilityRating: 9,
        intelligenceRating: 5,
        quote: "Flame on!"
    },
    {
        name: "Batman",
        alias: "Bruce Wayne",
        type: "Hero",
        primaryColour: "#000000",
        secondaryColour: "N/A",
        species: "Human",
        location: "Gotham",
        strengthRating: 8,
        agilityRating: 4,
        intelligenceRating: 8,
        quote: "I'm vengeance, I am the night, I am Batman."
    },
    {
        name: "Wolverine",
        alias: "Logan Howlett",
        type: "Vigilante",
        primaryColour: "#ffe200",
        secondaryColour: "#000000",
        species: "Mutant",
        location: "Alberta",
        strengthRating: 9,
        agilityRating: 4,
        intelligenceRating: 4,
        quote: "I'm the best there is at what I do, but what I do best isn't very nice."
    },
    {
        name: "Venom",
        alias: "Eddie Brock",
        type: "Vigilante",
        primaryColour: "#000000",
        secondaryColour: "N/A",
        species: "Mutant",
        location: "New York",
        strengthRating: 10,
        agilityRating: 7,
        intelligenceRating: 1,
        quote: "You die, I die."
    }
];

/************************UNIVERSAL FUNCTIONS************************/
console.log(location.pathname);

const capitalise = (input) => {
    let words = input.split(" "); //fill words array with each individual word
    let output = ""; //empty string

    words.forEach(
        (word) => (output += word.charAt(0).toUpperCase() + word.substring(1, word.length).toLowerCase() + " ")
    );

    return output;
};

//code from https://www.geeksforgeeks.org/javascript/how-to-calculate-the-number-of-days-between-two-dates-in-javascript/
const timeSince = (date) => {
    let rightNow = new Date();
    let then = new Date(date);

    //difference in milliseconds
    let timeDifference = rightNow - then;

    //milliseconds to days
    let daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));

    return daysDifference;
};

const age = (DOB) => {
    let timeLived = timeSince(DOB); //time in days

    let years = Math.floor(timeLived / 365); //divide to find years, round down

    return years;
};

/************************DATAMANIPULATION.HTML FUNCTIONALITY************************/
const dataManipulation = () => {
    let addForm = document.querySelector("#addCharacterForm");
    let lastRefresh = document.querySelector("#dateRefreshed");

    const displayCharacters = () => {
        let charactersTable = document.querySelector("#charactersTable");
        charactersTable.textContent = ""; //empty table
        if (characters.length > 0) { //check characters isnt empty
            charactersTable.insertAdjacentHTML(
                "beforeend",
                `<tr><th>Name</th><th>Alias</th><th>Type</th><th>Power Rating</th><th>Primary Colour</th><th>Secondary Colour</th><th>Species</th><th>Location</th></tr>`
            ); //set up headings
            characters.forEach((character) => {
                let powerRating = Math.round(
                    (character.strengthRating + character.agilityRating + character.intelligenceRating) / 3
                ); //get the average of each rating
                charactersTable.insertAdjacentHTML(
                    "beforeend",
                    `<tr><td>${character.name}</td><td>${character.alias}</td><td>${character.type}</td><td>${powerRating}</td><td style="background-color:${character.primaryColour};">${character.primaryColour}</td><td style="background-color:${character.secondaryColour}";>${character.secondaryColour}</td><td>${character.species}</td><td>${character.location}</td></tr>`
                ); //fill in table
            });
        }
        let now = new Date();
        lastRefresh.innerHTML = `Last refresh: ${now.toLocaleTimeString()}`;
    };

    displayCharacters();

    //ADDING A CHARACTER
    const addCharacter = (evt) => {
        evt.preventDefault();
        let secondaryColour = "N/A"; //default to n/a
        if (secondaryColourCheckbox.checked) { //check if secondary colour is included
            secondaryColour = addForm.elements.secondaryColour.value;
        }

        let quote = addForm.elements.quote.value.trim(); //trim to remove extra space
        if (quote.length === 0) { //if left blank, n/a
            quote = "N/A";
        }
        
        let location = addForm.elements.location.value;
        if (location.length ==0) { //if left blank, n/a
            location = "N/A";
        }

        newCharacter = {
            name: capitalise(addForm.elements.name.value),
            alias: capitalise(addForm.elements.alias.value),
            type: capitalise(addForm.elements.type.value),
            primaryColour: addForm.elements.primaryColour.value,
            secondaryColour: secondaryColour,
            strengthRating: addForm.elements.strengthRating.value,
            agilityRating: addForm.elements.agilityRating.value,
            intelligenceRating: addForm.elements.intelligenceRating.value,
            species: capitalise(addForm.elements.species.value),
            location: capitalise(location),
            quote: quote
        };

        characters.push(newCharacter); //add to end of array
        
        displayCharacters(); //refresh table
        
        addForm.reset(); //empty form
        addForm.elements[0].focus(); //autofocus
        dialogForm.close(); //close dialog
    };

    //displayCharacters();
    //addForm.addEventListener("submit", addCharacter);

    const toggle = document.querySelector("#toggle");
    const dialogForm = document.querySelector("#addDialog");
    const secondaryColourCheckbox = addForm.elements.secondaryColourCheckbox;
    const secondaryColourInput = document.querySelector("#secondaryColourDiv");

    toggle.addEventListener("click", (evt) => { //if add character button pressed
        //const secondaryColourCheckbox = addForm.elements.secondaryColourCheckbox;
        //const secondaryColourInput = document.querySelector("#secondaryColourDiv");
        
        secondaryColourCheckbox.addEventListener("change", (evt) => { //when the checkbox is checked/unchecked
            if (secondaryColourCheckbox.checked) {
                secondaryColourInput.classList.remove("hidden");
            } else secondaryColourInput.classList.add("hidden");
        });
        dialogForm.showModal(); //show the add character form
    });

    addForm.addEventListener("submit", addCharacter);

    const closeButton = document.querySelector("#closeAdd");

    closeButton.addEventListener("click", (evt) => { //close the add character dialog
        dialogForm.close();
    });

    //REMOVING A CHARACTER
    const removeTable = document.querySelector("#removeTable");
    const removeButton = document.querySelector("#remove");
    const removeDialog = document.querySelector("#removeDialog");

    const closeRemove = document.querySelector("#closeRemove");
    closeRemove.addEventListener("click", (evt) => {
        removeDialog.close();
    });

    removeButton.addEventListener("click", (evt) => {
        removeDialog.showModal();
        displayRemove();
    });

    const displayRemove = () => {
        removeTable.textContent = "";
        if (characters.length > 0) {
            removeTable.insertAdjacentHTML(
                "beforeend",
                `<tr><th>Name</th><th>Alias</th><th>Type</th><th>Primary Colour</th><th>Secondary Colour</th><th>Species</th><th>Location</th></tr>`
            );
            characters.forEach((character) =>
                removeTable.insertAdjacentHTML(
                    "beforeend",
                    `<tr><td>${character.name}</td><td>${character.alias}</td><td>${character.type}</td><td style="background-color:${character.primaryColour};">${character.primaryColour}</td><td style="background-color:${character.secondaryColour}";>${character.secondaryColour}</td><td>${character.species}</td><td>${character.location}</td><td><button class="ui button" data-id = ${character.name}>Remove</button></tr>`
                )
            );
        }
    };

    removeTable.addEventListener("click", (evt) => {
        if (evt.target.matches("button")) {
            deleteRec = characters.findIndex((character) => character.name === evt.target.dataset.id);
            characters.splice(deleteRec, 1);
            displayCharacters();
            removeDialog.close();
        }
    });

    //SEARCH CHARACTERS
    const searchButton = document.querySelector("#search");
    const searchDialog = document.querySelector("#searchDialog");
    const searchHide = document.querySelector("#searchHide");

    const closeSearch = document.querySelector("#closeSearch");
    closeSearch.addEventListener("click", (evt) => {
        searchDialog.close();
    });

    const searchTerms = (evt) => {
        evt.preventDefault(); //stop default action of submit

        const searchForm = document.querySelector("#searchForm"); //select form
        const searchOption = searchForm.elements.searchOption; //select selected radio button
        let searchCategory = searchOption.value.toString(); //get value of radio button as string

        const searchDiv = document.querySelector("#searchDiv"); //select entire div
        const searchResultsTable = document.querySelector("#searchResults"); //select table inside div
        searchResultsTable.textContent = ""; //set table to blank

        let userInput = prompt("Search...").toString(); //ask user for input

        //use filter to fill searchResults with the correct characters
        let searchResults = characters.filter(
            (character) => character[searchCategory].toLowerCase() === userInput.toLowerCase()
        );

        //display table
        if (searchResults.length > 0) {
            searchResultsTable.insertAdjacentHTML(
                "beforeend",
                `<tr><th>Name</th><th>Alias</th><th>Type</th><th>Primary Colour</th><th>Secondary Colour</th><th>Species</th><th>Location</th></tr>`
            ); //set up table headers
            searchResults.forEach((result) =>
                searchResultsTable.insertAdjacentHTML(
                    "beforeend",
                    `<tr><td>${result.name}</td><td>${result.alias}</td><td>${result.type}</td><td style="background-color:${result.primaryColour};">${result.primaryColour}</td><td style="background-color:${result.secondaryColour}";>${result.secondaryColour}</td><td>${result.species}</td><td>${result.location}</td></tr>`
                )
            );

            let asOf = document.querySelector("#asOf");
            let now = new Date();
            asOf.innerHTML = `Results as of: ${now.toLocaleTimeString()}`;
            searchDiv.classList.remove("hidden"); //show table
        }

        searchDialog.close();
    };

    searchHide.addEventListener("click", (evt) => { //hide search results
        searchDiv.classList.add("hidden");
    });

    searchForm.addEventListener("submit", searchTerms);

    searchButton.addEventListener("click", (evt) => {
        searchDialog.showModal();
    });

    //EXPAND CHARACTER INFO
    const expandButton = document.querySelector("#expand"); //trigger dialog
    const expandHide = document.querySelector("#expandHide"); //hide div
    const expandDiv = document.querySelector("#expandDiv"); //div showing expand results
    const expandDialog = document.querySelector("#expandDialog"); //dialog wehre user selects a character
    const expandSelect = document.querySelector("#expandSelect"); //form field
    const expandForm = document.querySelector("#expandForm"); //form
    const expandTable = document.querySelector("#expandResults");

    const closeExpand = document.querySelector("#closeExpand"); //close dialog
    closeExpand.addEventListener("click", (evt) => { //close expand dialog
        expandDialog.close();
    });

    expandHide.addEventListener("click", (evt) => { //hide expand results
        expandDiv.classList.add("hidden");
    });

    expandButton.addEventListener("click", (evt) => { //fill select menu with characters
        expandSelect.textContent = "";
        characters.forEach((character) =>
            expandSelect.insertAdjacentHTML(
                "beforeend",
                `<option value = "${characters.indexOf(character)}">${character.name}</option>`
            )
        );
        expandDialog.showModal();
    });

    const selected = expandForm.elements.expandSelect;

    const expandCharacter = (selectedCharacter) => {
        //empty table
        expandResults.textContent = "";

        //set up headers
        expandResults.insertAdjacentHTML(
            "beforeend",
            `<tr>
    <th>Name</th>
    <th>First Name</th>
    <th>Last Name</th>
    <th>Initials</th>
    <th>Type</th>
    <th>Strength Rating</th>
    <th>Agility Rating</th>
    <th>Intelligence Rating</th>
    <th>Top Ability</th>
    <th>Primary Colour</th>
    <th>Secondary Colour</th>
    <th>Species</th>
    <th>Location</th>
    <th>Quote</th>
    </tr>`
        );

        //first name + last name
        let splitName = selectedCharacter.alias.split(" ");

        //top ability
        let topRating = Math.max(
            selectedCharacter.strengthRating,
            selectedCharacter.agilityRating,
            selectedCharacter.intelligenceRating
        );
        let topAbility = "";

        if (topRating === selectedCharacter.strengthRating) {
            topAbility = "Strength";
        } else if (topRating === selectedCharacter.agilityRating) {
            topAbility = "Agility";
        } else if (topRating === selectedCharacter.intelligenceRating) {
            topAbility = "Intelligence";
        } else topAbility = "All Rounder";

        expandResults.insertAdjacentHTML(
            "beforeend",
            `<tr><td>${selectedCharacter.name}</td>
        <td>${splitName[0]}</td>
        <td>${splitName[1]}</td>
        <td>${splitName[0].charAt(0)}${splitName[1].charAt(0)}</td>
        <td>${selectedCharacter.type}</td>
        <td>${selectedCharacter.strengthRating}</td>
        <td>${selectedCharacter.agilityRating}</td>
        <td>${selectedCharacter.intelligenceRating}</td>
        <td>${topAbility}</td>
        <td style="background-color:${selectedCharacter.primaryColour};">${selectedCharacter.primaryColour}</td>
        <td style="background-color:${selectedCharacter.secondaryColour}";>${selectedCharacter.secondaryColour}</td>
        <td>${selectedCharacter.species}</td>
        <td>${selectedCharacter.location}</td>
        <td>${selectedCharacter.quote}</td>
        </tr>`
        );
        expandDiv.classList.remove("hidden");
        expandDialog.close();
    };

    expandForm.addEventListener("submit", (evt) => {
        evt.preventDefault();
        let selectedCharacter = characters[selected.value.toString()];
        expandCharacter(selectedCharacter);
    });

    //DUEL CHARACTERS
    const duelButton = document.querySelector("#duel"); //trigger dialog
    const duelDialog = document.querySelector("#duelDialog");
    const duelForm = document.querySelector("#duelForm");
    const duelSelectSecond = document.querySelector("#duelSelectSecond"); //second character
    const duelSelectFirst = document.querySelector("#duelSelectFirst"); //first character
    const closeDuel = document.querySelector("#closeDuel"); //close duel dialog
    const duelResults = document.querySelector("#duelResults");
    const duelDiv = document.querySelector("#duelDiv");
    const duelHide = document.querySelector("#duelHide");

    const announceOne = document.querySelector("#announceOne");
    const announceTwo = document.querySelector("#announceTwo");

    duelButton.addEventListener("click", (evt) => {
        duelSelectFirst.textContent = "";
        characters.forEach((character) =>
            duelSelectFirst.insertAdjacentHTML(
                "beforeend",
                `<option value = "${characters.indexOf(character)}">${character.name}</option>`
            )
        );

        duelSelectSecond.textContent = "";
        characters.forEach((character) =>
            duelSelectSecond.insertAdjacentHTML(
                "beforeend",
                `<option value = "${characters.indexOf(character)}">${character.name}</option>`
            )
        );
        duelDialog.showModal();
    });

    closeDuel.addEventListener("click", (evt) => {
        duelDialog.close();
    });

    const duelCharacters = (evt) => {
        evt.preventDefault();
        duelResults.textContent = "";
        announceOne.textContent = "";
        announceTwo.textContent = "";

        let firstSelected = duelForm.elements.duelSelectFirst;
        let firstCharacter = characters[firstSelected.value.toString()];

        let secondSelected = duelForm.elements.duelSelectSecond;
        let secondCharacter = characters[secondSelected.value.toString()];

        let duelCategory = duelForm.elements.duelCategory.value;

        announceOne.insertAdjacentHTML("beforeend", `${firstCharacter.name}`);
        announceTwo.insertAdjacentHTML("beforeend", `${secondCharacter.name}`);

        if (duelCategory === "powerRating") {
            let firstPowerRating = Math.round(
                (firstCharacter.strengthRating + firstCharacter.agilityRating + firstCharacter.intelligenceRating) / 3
            ); //calculate first char avg rating
            let secondPowerRating = Math.round(
                (secondCharacter.strengthRating + secondCharacter.agilityRating + secondCharacter.intelligenceRating) /
                    3
            ); //calculatre second char avg rating
            if (firstPowerRating > secondPowerRating) {
                duelResults.insertAdjacentHTML("beforeend", `${firstCharacter.name} wins!`);
            } else if (firstPowerRating < secondPowerRating) {
                duelResults.insertAdjacentHTML("beforeend", `${secondCharacter.name} wins!`);
            } else
                duelResults.insertAdjacentHTML(
                    "beforeend",
                    `${firstCharacter.name} VS ${secondCharacter.name} is a draw!`
                );
        } else if (firstCharacter[duelCategory] > secondCharacter[duelCategory]) {
            //any other category
            duelResults.insertAdjacentHTML("beforeend", `${firstCharacter.name} wins!`);
        } else if (firstCharacter[duelCategory] < secondCharacter[duelCategory]) {
            duelResults.insertAdjacentHTML("beforeend", `${secondCharacter.name} wins!`);
        } else
            duelResults.insertAdjacentHTML("beforeend", `${firstCharacter.name} VS ${secondCharacter.name} is a draw!`);

        duelDiv.classList.remove("hidden");
        duelDialog.close();
    };

    duelForm.addEventListener("submit", duelCharacters);

    duelHide.addEventListener("click", (evt) => { //hide duel results
        duelDiv.classList.add("hidden");
    });

    //DISPLAY RANDOM CHARACTER
    const randomButton = document.querySelector("#random");

    randomButton.addEventListener("click", (evt) => {
        let randomIndex = Math.floor(Math.random() * characters.length + 1); //random number from start to end of array
        let randomCharacter = characters[randomIndex];
        expandCharacter(randomCharacter);
    });
};

/************************INDEX.HTML FUNCTIONALITY************************/

const indexPage = () => {
    //GET USER PREFERENCE
    const preferenceForm = document.querySelector("#preference");
    const preferenceOption = preferenceForm.elements.preferenceOption;

    const userPreferenceDiv = document.querySelector("#userPreference");

    const preference = (name) => {
        preferenceForm.classList.add("hidden");
        userPreferenceDiv.insertAdjacentHTML(
            "beforeend",
            `<p>${capitalise(name)} is a ${preferenceOption.value} fan!</p>`
        );
        userPreferenceDiv.classList.remove("hidden");
    };

    preferenceForm.addEventListener("submit", (evt) => {
        evt.preventDefault();
        userName = prompt("What's your name?");
        preference(userName);
    });

    //CARDS
    //fills the daysSince element and shows the dialog
    const createCard = (name, prefix, startDate) => {
        document.querySelector(`#${prefix}DaysSince`).textContent = "";
        document
            .querySelector(`#${prefix}DaysSince`)
            .insertAdjacentHTML("beforeend", `${name} began ${timeSince(startDate)} days ago. (${startDate})`);
        document.querySelector(`#${prefix}Dialog`).showModal();
    };

    //click event listeners for cards
    document
        .querySelector("#theAvengersCard")
        .addEventListener("click", (evt) => createCard("The Avengers", "theAvengers", "1968-09-01"));

    document
        .querySelector("#amazingSpidermanCard")
        .addEventListener("click", (evt) => createCard("The Amazing Spider-Man", "amazingSpiderman", "1963-03-01"));

    document
        .querySelector("#fantasticFourCard")
        .addEventListener("click", (evt) => createCard("The Fantastic Four", "fantasticFour", "1961-11-01"));

    document
        .querySelector("#daredevilCard")
        .addEventListener("click", (evt) => createCard("Daredevil", "daredevil", "1964-04-01"));

    document
        .querySelector("#deadpoolCard")
        .addEventListener("click", (evt) => createCard("Deadpool", "deadpool", "1991-02-01"));

    document
        .querySelector("#peacemakerCard")
        .addEventListener("click", (evt) => createCard("Peacemaker", "peacemaker", "1966-11-01"));

    document
        .querySelector("#supermanCard")
        .addEventListener("click", (evt) => createCard("Superman", "superman", "1938-06-01"));

    document
        .querySelector("#justiceLeagueCard")
        .addEventListener("click", (evt) => createCard("The Justice League", "justiceLeague", "1960-03-01"));

    document.querySelector("#venomCard").addEventListener("click", (evt) => createCard("Venom", "venom", "1988-05-01"));

    document
        .querySelector("#batmanCard")
        .addEventListener("click", (evt) => createCard("Batman", "batman", "1939-03-30"));
};

/************************ABOUT.HTML FUNCTIONALITY************************/
const profiles = [
    {
        name: "Evie",
        dateOfBirth: "2005-03-23",
        course: "Creative Computing",
        class: "Website Development 2",
        favChar: "Spider-Man"
    }
];

const aboutPage = () => {
    //MY PROFILE
    const myProfile = document.querySelector("#myProfile");
    let dob = new Date(profiles[0].dateOfBirth);

    myProfile.insertAdjacentHTML(
        "beforeend",
        `Hi, my name is ${profiles[0].name}! My birthday is ${dob.toLocaleDateString()} and I am ${age(profiles[0].dateOfBirth)} years old. <br> I am studying ${profiles[0].course} and I made this website for my ${profiles[0].class} class. <br> My favourite comic book character is ${profiles[0].favChar}.`
    );

    const response = document.querySelector("#response");
    const profileButton = document.querySelector("#profileButton");
    const profileButtonDiv = document.querySelector("#profileButtonDiv");
    const yourProfileDialog = document.querySelector("#yourProfile");
    
    //ADD YOUR PROFILE
    const yourProfileDiv = document.querySelector("#yourProfileDiv");
    profileButton.addEventListener("click", (evt) => {
        response.insertAdjacentHTML("beforeend", "Thanks!");
        profileButton.textContent = "Can I have one too?";
        profileButton.addEventListener("click", (evt) => {
            response.textContent = "Sure!";
            yourProfileDialog.showModal();
            
        });
    });

    const yourProfileForm = document.querySelector("#yourProfileForm");
    yourProfileForm.addEventListener("submit", (evt) => {
        evt.preventDefault();

        profileButtonDiv.textContent = ""; //get rid of button
        response.textContent = ""; //clear responses

        let yourProfile = {
            name: capitalise(yourProfileForm.elements.yourName.value),
            dateOfBirth: yourProfileForm.elements.yourDOB.value,
            course: "Creative Computing",
            class: "Website Development 2",
            favChar: capitalise(yourProfileForm.elements.yourFavChar.value)
        };

        console.log(yourProfileForm.elements.yourDOB.value);
        let dob2 = new Date(yourProfileForm.elements.yourDOB.value);
        profiles.push(yourProfile);

        yourProfileDiv.insertAdjacentHTML(
            "beforeend",
            `<h2>Your Profile !</h2>
        <img src="images/${yourProfileForm.elements.profilePic.value}.jpg"> <p>Hi, my name is ${profiles[1].name}! My birthday is ${dob2.toLocaleDateString()} and I am ${age(profiles[1].dateOfBirth)} years old. <br> I am not studying ${profiles[1].course} and I did not make this website for my ${profiles[1].class}. <br> My favourite comic book character is ${profiles[1].favChar}.</p>`
        );

        yourProfileDialog.close();
    });
    
    //COVERS GALLERY
    const covers = ["batman", "daredevil", "deadpool", "justiceleague", "peacemaker", "superman", "theamazingspiderman", "theavengers", "thefantasticfour", "venom"];
    let count = 0;
    
    const comicCover = document.querySelector("#comicCover");
    const previous = document.querySelector("#previous");
    const next = document.querySelector("#next");
    
    const changeCover = (coverIndex) => {
        console.log(covers[coverIndex]);
        comicCover.textContent = "";
        comicCover.insertAdjacentHTML("beforeend", `<img src="images/${covers[coverIndex]}.webp">`);
    };
    
    previous.addEventListener("click", (evt) => {
        if (count > 0) {
            count--;
        } else count = covers.length - 1;
        console.log(count);
        changeCover(count);
    });
    
    next.addEventListener("click", (evt) => {
        if (count < covers.length - 1) {
            count++;
        } else count = 0;
        console.log(count);
        changeCover(count);
    });
    
};

/************************ALL PAGES FUNCTIONALITY************************/
if (location.pathname === "/datamanipulation") {
    dataManipulation();
} else if (location.pathname === "/") {
    indexPage();
} else if (location.pathname === "/aboutpage") {
    aboutPage();
} //from stackoverflow

year = new Date();
document.querySelector(".year").insertAdjacentHTML("beforeend", `${year.getFullYear()} `);

//footer form
const footerForm = document.querySelector(".footerForm");
const keepInTouch = document.querySelectorAll(".keepInTouch");

footerForm.addEventListener("submit", (evt) => {
    evt.preventDefault();
    keepInTouch.forEach((fill) => {
        fill.textContent = "";
        fill.insertAdjacentHTML("beforeend", `<p>Thanks for keeping in touch!</p>`);
    });
});

