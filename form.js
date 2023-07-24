function Validate() {
    const dayIn = parseInt(document.getElementById("day").value);
    const monthIn = parseInt(document.getElementById("month").value);
    const yearIn = parseInt(document.getElementById("year").value);

    const today = new Date();
    const birthDate = new Date(yearIn, monthIn - 1, dayIn);

    // Check if the date of birth is valid
    if (
        isNaN(dayIn) || isNaN(monthIn) || isNaN(yearIn) ||
        dayIn < 1 || dayIn > 31 ||
        monthIn < 1 || monthIn > 12 ||
        yearIn < 0 || yearIn.toString().length !== 4 ||
        birthDate > today ||
        dayIn !== birthDate.getDate() ||
        monthIn - 1 !== birthDate.getMonth()
    ) {
        alert("Please double check your date, month, and year of birth");
        document.getElementById("YYYY").innerText = "--";
        document.getElementById("MM").innerText = "--";
        document.getElementById("DD").innerText = "--";
        return;
    }

    // Calculate age
    const ageInMilliseconds = today - birthDate;
    const ageDate = new Date(ageInMilliseconds);
    const years = ageDate.getUTCFullYear() - 1970;
    const months = ageDate.getUTCMonth();
    const days = ageDate.getUTCDate() - 1;

    document.getElementById("YYYY").innerText = years;
    document.getElementById("MM").innerText = months;
    document.getElementById("DD").innerText = days;
}
