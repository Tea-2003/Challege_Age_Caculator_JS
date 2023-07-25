function Validate() {
    const dayIn = parseInt(document.getElementById("day").value);
    const monthIn = parseInt(document.getElementById("month").value);
    const yearIn = parseInt(document.getElementById("year").value);

    const today = new Date();
    const birthDate = new Date(yearIn, monthIn - 1, dayIn);

    // Check if the date of birth is valid
    if (
        isNaN(dayIn) || isNaN(monthIn) || isNaN(yearIn) || yearIn < 0 || yearIn.toString().length !== 4) {
        alert("Please double check your date, month, and year of birth");
        return;
    }

    if (dayIn < 1 || dayIn > 31) {
        alert("Please double check your date. Thank");
        return;
    }
    if (monthIn < 1 || monthIn > 12) {
        alert("Please double check your month");
        return;
    }
    if (birthDate > today || birthDate.getDate() !== dayIn || birthDate.getMonth() !== monthIn - 1) {
        alert("Date of birth is invalid or in the future.");
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
