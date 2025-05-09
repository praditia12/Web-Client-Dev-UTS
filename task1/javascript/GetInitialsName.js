function getInitialsName(name) {
    return name.match(/[A-Z]/g)?.join("") || "";
}

console.log(getInitialsName("Adit Praditia"));
