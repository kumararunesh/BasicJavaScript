let teas = ["green tea","black tea","chai","oolong tea"];
let selTeas=[];

for(let i =0;i<teas.length;i++)
{
    if(teas[i]!=="chai")
    {
        selTeas.push(teas[i]);
    }
    else
    break;
}
console.log(selTeas);
let fruit = "apsple";

switch (fruit) {
    case "apple":
      console.log("It's an apple!");
      break;
    case "banana":
      console.log("It's a banana!");
      break;
    default:
      console.log("Unknown fruit");
  }