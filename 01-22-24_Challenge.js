/*

Convert the characters:


&, <, >, " (double quote), and ' (apostrophe), 

" .... &quot;
' .... &apos;
& .... &amp;
< .... &lt;
> .... &gt;

in a string to their corresponding HTML entities.


convertHTML("Dolce & Gabbana") should return the string Dolce &amp; Gabbana

convertHTML("Hamburgers < Pizza < Tacos") should return the string Hamburgers &lt; Pizza &lt; Tacos

convertHTML("Sixty > twelve") should return the string Sixty &gt; twelve



1. Replace & Regular Expression
 - create an object of items
 obj = { HTMLChars: strExpression }
 - Str.replace(Regex, arg => obj[arg])
 - return correctStr

2. Split, Map, Join
 - create an object of items
 obj = { HTMLChars: strExpression} 
 - split our original string, by characters
 - map is checking for same entity OR changed entity
 - join string back
 - return correctStr

*/

const htmlBit = {
  '"': "&quot;",
  "'": "&apos;",
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
}

function convertHTMLReplace(oneString){
  const correctStr = oneString.replace(/([&><\"'])/g, 
      matching => htmlBit[matching]
  )
  return correctStr;
}

console.log(convertHTMLReplace("Dolce & Gabbana")) // Dolce &amp; Gabbana

function convertHTMLSplitMap(oneString){
  return oneString.split('').map( item => 
    htmlBit[item] || item
  ).join('')
}

console.log(convertHTMLSplitMap("Dolce & Gabbana")) // Dolce &amp; Gabbana
