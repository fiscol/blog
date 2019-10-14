## Internationalization & Localization
### Collation
    // in German,  "ä" sorts with "a"
    // in Swedish, "ä" sorts after "z"
    let list = ["ä", "a", "z"];
    let l10nDE = new Intl.Collator("de");
    let l10nSV = new Intl.Collator("sv");
    l10nDE.compare("ä", "z") === -1;
    l10nsv.compare("ä", "z") === +1;
    console.log(list.sort(l10nDE.compare)); // ["a", "ä", "z"]
    console.log(list.sort(l10nSV.compare)); // ["a", "z", "ä"]

### Number Formatting
    let l10nEN = new Intl.NumberFormat("en-US");
    let l10nDE = new Intl.NumberFormat("de-DE");
    console.log(l10nEN.format(1234567.89) === "1,234,567.89"); // true
    console.log(l10nDE.format(1234567.89) === "1.234.567,89"); // true

### Currency Formatting
    let l10nUSD = new Intl.NumberFormat("en-US", {style: "currency", currency: "USD"});
    let l10nGBP = new Intl.NumberFormat("en-GB", {style: "currency", currency: "GBP"});
    let l10nEUR = new Intl.NumberFormat("de-DE", {style: "currency", currency: "EUR"});
    console.log(l10nUSD.format(100200300.40) === "$100,200,300.40"); // true
    console.log(l10nGBP.format(100200300.40) === "£100,200,300.40"); // true
    console.log(l10nEUR.format(100200300.40) === "100.200.300,40 €"); // false(to be checked)

### Date/Time Formatting
    let l10nEN = new Intl.DateTimeFormat("en-US");
    let l10nDE = new Intl.DateTimeFormat("de-DE");
    console.log(l10nEN.format(new Date("2015-01-02")) === "1/2/2015"); // true
    console.log(l10nDE.format(new Date("2015-01-02")) === "2.1.2015"); // true