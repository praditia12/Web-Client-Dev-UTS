function getInitialsNameTS(name : string) : string {
    return name.match(/[A-Z]/g)?.join("") || "";
}

console.log(getInitialsNameTS("Adit Praditia"));
