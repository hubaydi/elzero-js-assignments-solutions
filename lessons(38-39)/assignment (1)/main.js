let day = "  Thursday   ";

// You Need To Remove Spaces And Make First Letter Capital => Friday
day = day.trim().slice(0, 1).toUpperCase() + day.trim().slice(1);

switch (day) {
  case "Friday":
  case "Saturday":
  case "Sunday":
    console.log(`No Appointments Available, for ${day}`);
    break;
  case "Monday":
  case "Thursday":
    console.log(`From 10:00 AM To 5:00 PM, for ${day}`);
    break;
  case "Tuesday":
    console.log(`From 10:00 AM To 6:00 PM, for ${day}`);
    break;
  case "Wednesday":
    console.log(`From 10:00 AM To 7:00 PM, for ${day}`);
    break;
  default:
    console.log(`Its not a valid Day, for ${day}`);
}

