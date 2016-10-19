function reverseString(str) {
  var wordArr = str.split('')
  var revWordArr = wordArr.reverse()
  var revWord = revWordArr.join('');

  return revWord;
}

function factorialize(num) {
  var factorNo = 0
  if (num === 0) {
    factorNo = 1;
  } else {
    for (var i=1;i<num+1;i++) {
      if (factorNo === 0) {
        factorNo = i;
      } else {
        factorNo *= i;
      }
    }
  }
  return factorNo;
}

function palindrome(str) {
  var removeSpecChar = str.replace(/[^a-z0-9]+|\s+/gmi, "");
  var removeCaps = removeSpecChar.toLowerCase();
  var strArr = removeCaps.split('');
  var strArrRev = strArr.reverse();
  var strRev = strArrRev.join('');
  if (removeCaps == strRev) {
    return true;
  } else {
    return false;
  }
}

function findLongestWord(str) {
  var wordLen = 0;
  var strArr = str.split(" ");
  for (var i=0;i<strArr.length;i++)
    if (strArr[i].length > wordLen) {
      wordLen = strArr[i].length;
    }
  return wordLen;
}

function titleCase(str) {
  var arrayOfWords = str.split(" ");
  var wordArray = [];
  var wordText = [];
  var finalArray = [];
  var letter = "";
  for (var i=0;i<arrayOfWords.length;i++) {
    wordArray = [];
    wordText = [];
    letter = "";
    wordArray = arrayOfWords[i].split("");
    for (var j=0;j<wordArray.length;j++) {
      if (j===0) {
        letter = wordArray[j].toUpperCase();
      } else {
        letter = wordArray[j].toLowerCase();
      }
      wordText.push(letter);
    }
    finalArray.push(wordText.join(""));
  }
  return finalArray.join(" ");
}

function largestOfFour(arr) {
  var largeArray = [];
  for (var i=0;i<arr.length;i++) {
    var largeNo = 0;
    for (var j=0;j<arr[i].length;j++) {
      if (largeNo < arr[i][j]) {
        largeNo = arr[i][j];
      }
    }
    largeArray.push(largeNo)
  }
  return largeArray;
}

function confirmEnding(str, target) {
  var endStr = str.substr(str.length-target.length,target.length);
  if (target === endStr) {
    return true;
  } else {
    return false;
  }
}

function repeatStringNumTimes(str, num) {
  var repeatStr = "";
  for (var i=0;i<num;i++) {
    repeatStr += str;
  }
  return repeatStr;
}

function truncateString(str, num) {
  var trunText = "";
  if (num < 4) {
    trunText = str.substr(0,num);
    trunText += "...";
  } else if (num >= str.length) {
    trunText = str;
  } else {
    trunText = str.substr(0,num-3);
    trunText += "...";
  }
  return trunText;
}

function chunkArrayInGroups(arr, size) {
  var mainChunks =[];
  var miniChunk = [];
  for (var j=0;j<arr.length;j+=size) {
    miniChunk=[];
    if ((j + size) < arr.length) {
      for (var i=j;i<(j+size);i++) {
        miniChunk.push(arr[i]);
      }
    } else {
      for (var i=j;i<(arr.length);i++) {
        miniChunk.push(arr[i]);
      }
    }
    mainChunks.push(miniChunk);
  }
  return mainChunks;
}

function slasher(arr, howMany) {
  var head = arr.slice(howMany)
  return head;
}


function mutation(arr) {
  var indexCount = [];
  var firstWord = arr[0].toLowerCase();
  var secondWord = arr[1].toLowerCase();
  var firstWordArr = secondWord.split('');
  for (var i=0;i<firstWordArr.length;i++) {
    indexCount.push(firstWord.includes(firstWordArr[i]));
  }
  for (var j=0;j<indexCount.length;j++) {
    if (indexCount[j] === false) {
      return false;
    }
  }
   return true;
}

function bouncer(arr) {

  var removeFalsy = eval(arr).filter(function(e){return e});
  return removeFalsy;
}

function destroyer(arr) {
  var argArr = arguments["0"];
  var removeArr = [];
  for (var i=1;i<arguments.length;i++) {
    removeArr.push(arguments[i]);
  }
  var finalArr = argArr.filter( function(el) {
    return removeArr.indexOf(el) < 0;
  });
  return finalArr;
}

function getIndexToIns(arr, num) {
  var arrSort = arr.sort(function(a, b){return a-b;});
  for (var i=0;i<arrSort.length;i++) {
    var j = i+1;
    if (j == arrSort.length && num > arrSort[i]) {
      return j;
    } else if (num > arrSort[i] && num < arrSort[j]) {
      return j;
    } else if (num == arrSort[i]) {
      return i;
    }
  }
}

function rot13(str) {

  var decrypted = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var encrypted = ["N","O","P","Q","R","S","T","U","V","W","X","Y","Z","A","B","C","D","E","F","G","H","I","J","K","L","M"];
  var encMessArr = str.split("");
  var decMessArr = [];
  for (var i=0;i<encMessArr.length;i++) {
    for (var j=0;j<encrypted.length;j++) {
      if (encMessArr[i] == encrypted[j]) {
        decMessArr.push(decrypted[j]);
      }
    }
    if (!decMessArr[i]) {
      decMessArr.push(encMessArr[i]);
    }
  }
  var decStr = decMessArr.join("");
  return decStr;
}

window.onload = function() {
	document.getElementById('revStr').onclick = function() {
		document.getElementById('algDes').innerHTML = "Reverses the provided string."
		document.getElementById('instructions').innerHTML = "Please enter a string"
		document.getElementById('answerText2').style.display = 'none';
		document.getElementById('answerText3').style.display = 'none';
	}
	document.getElementById('factNum').onclick = function() {
		document.getElementById('algDes').innerHTML = "Returns the factorial of the provided integer."
		document.getElementById('instructions').innerHTML = "Please enter a number between 1 and 21"
		document.getElementById('answerText2').style.display = 'none';
		document.getElementById('answerText3').style.display = 'none';
	}
	document.getElementById('checkPal').onclick = function() {
		document.getElementById('algDes').innerHTML = "Returns true if the given string is a palindrome. Otherwise, returns false.<p/>A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing."
		document.getElementById('instructions').innerHTML = "Please enter a string"
		document.getElementById('answerText2').style.display = 'none';
		document.getElementById('answerText3').style.display = 'none';
	}
	document.getElementById('longWord').onclick = function() {
		document.getElementById('algDes').innerHTML = "Returns the length of the longest word in the provided sentence."
		document.getElementById('instructions').innerHTML = "Please enter a sentence"
		document.getElementById('answerText2').style.display = 'none';
		document.getElementById('answerText3').style.display = 'none';
	}
	document.getElementById('tileCase').onclick = function() {
		document.getElementById('algDes').innerHTML = "Returns the provided string with the first letter of each word capitalized."
		document.getElementById('instructions').innerHTML = "Please enter a sentence with varying cases"
		document.getElementById('answerText2').style.display = 'none';
		document.getElementById('answerText3').style.display = 'none';
	}
	document.getElementById('largeNum').onclick = function() {
		document.getElementById('algDes').innerHTML = "Returns an array consisting of the largest number from each of four sub-arrays."
		document.getElementById('instructions').innerHTML = "Enter an array in the following format: [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]"
		document.getElementById('answerText2').style.display = 'none';
		document.getElementById('answerText3').style.display = 'none';
	}
	document.getElementById('confEnd').onclick = function() {
		document.getElementById('algDes').innerHTML = "Checks if a string ends with the given target string"
			document.getElementById('instructions').innerHTML = 'Enter a string in the first box and the string you want to check that the first string ends with in the second:'
			document.getElementById('answerText2').style.display = 'inline';
			document.getElementById('answerText3').style.display = 'none';
	}
	document.getElementById('repStr').onclick = function() {
		document.getElementById('algDes').innerHTML = "Repeats a given string for the staed number of times. Returns an empty string if the number given is not a positive number."
			document.getElementById('instructions').innerHTML = 'Enter a string in the first box and the number you want it repeating in the second'
			document.getElementById('answerText2').style.display = 'inline';
			document.getElementById('answerText3').style.display = 'none';
	}
	document.getElementById('truncStr').onclick = function() {
		document.getElementById('algDes').innerHTML = "Truncates a string if it is longer than the given maximum string length. Returns the truncated string with a ... ending.<p/>Note that inserting the three dots to the end will add to the string length.<p/>However, if the given maximum string length num is less than or equal to 3, then the addition of the three dots does not add to the string length in determining the truncated string."
			document.getElementById('instructions').innerHTML = 'Enter a string in the first box and the number you want it truncating to in the second box'
			document.getElementById('answerText2').style.display = 'inline';
			document.getElementById('answerText3').style.display = 'none';
	}
	document.getElementById('chunkMonk').onclick = function() {
		document.getElementById('algDes').innerHTML = "Splits an array into groups the length of a specified size and returns them as a two-dimensional array."
			document.getElementById('instructions').innerHTML = "Enter some data in the following format in the first box: [0, 1, 2, 3, 4, 5] and enter the length size in the second box"
			document.getElementById('answerText2').style.display = 'inline';
			document.getElementById('answerText3').style.display = 'none';
	}
	document.getElementById('slashFlick').onclick = function() {
		document.getElementById('algDes').innerHTML = "Returns the remaining elements of an array after chopping off a specified number of elements from the head."
			document.getElementById('instructions').innerHTML = "Enter some data in the following format in the first box:  [1, 2, 3] and enter the number of elements to be removed in the second"
			document.getElementById('answerText2').style.display = 'inline';
			document.getElementById('answerText3').style.display = 'none';
	}
	document.getElementById('mutation').onclick = function() {
		document.getElementById('algDes').innerHTML = "Returns true if the string in the first element of the array contains all of the letters of the string in the second element of the array."
			document.getElementById('instructions').innerHTML = 'Enter a string in the first box and enter letters in the second that you want to check exist in the first string'
			document.getElementById('answerText2').style.display = 'inline';
			document.getElementById('answerText3').style.display = 'none';
	}
	document.getElementById('falBounc').onclick = function() {
		document.getElementById('algDes').innerHTML = 'Remove all falsy values from an array such as false, null, 0, "", undefined, and NaN.'
			document.getElementById('instructions').innerHTML = "Enter some data in the following format: [1, null, NaN, 2, undefined]"
			document.getElementById('answerText2').style.display = 'none';
			document.getElementById('answerText3').style.display = 'none';
	}
	document.getElementById('seekDestroy').onclick = function() {
		document.getElementById('algDes').innerHTML = "Removes all elements from the initial array that are of the same value as the arguments provided."
			document.getElementById('instructions').innerHTML = "Enter some data in the following format in the first box: [1, 2, 3, 1, 2, 3] and enter the numbers you want removing in the second and third boxes"
			document.getElementById('answerText2').style.display = 'inline';
			document.getElementById('answerText3').style.display = 'inline';
	}
	document.getElementById('whereBel').onclick = function() {
		document.getElementById('algDes').innerHTML = "Returns the lowest index at which a value should be inserted into an array once it has been sorted. The returned value should be a number."
			document.getElementById('instructions').innerHTML = "Enter some data in the following format in the first box: [5, 3, 20, 3] and enter the number you want inserting in the second"
			document.getElementById('answerText2').style.display = 'inline';
			document.getElementById('answerText3').style.display = 'none';
	}
	document.getElementById('caesCip').onclick = function() {
		document.getElementById('algDes').innerHTML = "Takes a ROT13 encoded string as input and returns a decoded string. Or if a normal sentence is provided it will encode the message."
			document.getElementById('instructions').innerHTML = 'Either enter a encoded message such as SERR PBQR PNZC to decode or enter a normal message to encode. Must be in Caps Lock'
			document.getElementById('answerText2').style.display = 'none';
			document.getElementById('answerText3').style.display = 'none';
	}



	document.getElementById('submitRun').onclick = function() {
		if (document.getElementById('revStr').checked == true) {
			document.getElementById('result').innerHTML = reverseString(document.getElementById('answerText').value);
		}
		if (document.getElementById('factNum').checked == true) {
			document.getElementById('result').innerHTML = factorialize(parseInt(document.getElementById('answerText').value));
		}
		if (document.getElementById('checkPal').checked == true) {
			document.getElementById('result').innerHTML = palindrome(document.getElementById('answerText').value);
		}
		if (document.getElementById('longWord').checked == true) {
			document.getElementById('result').innerHTML = findLongestWord(document.getElementById('answerText').value);
		}
		if (document.getElementById('tileCase').checked == true) {
			document.getElementById('result').innerHTML = titleCase(document.getElementById('answerText').value);
		}
		if (document.getElementById('largeNum').checked == true) {
			document.getElementById('result').innerHTML = largestOfFour(JSON.parse(document.getElementById('answerText').value));
		}
		if (document.getElementById('confEnd').checked == true) {
			document.getElementById('result').innerHTML = confirmEnding(document.getElementById('answerText').value, document.getElementById('answerText2').value);
		}
		if (document.getElementById('repStr').checked == true) {
			document.getElementById('result').innerHTML = repeatStringNumTimes(document.getElementById('answerText').value, parseInt(document.getElementById('answerText2').value));
		}
		if (document.getElementById('truncStr').checked == true) {
			document.getElementById('result').innerHTML = truncateString(document.getElementById('answerText').value, parseInt(document.getElementById('answerText2').value));
		}
		if (document.getElementById('chunkMonk').checked == true) {
			document.getElementById('result').innerHTML = "See console log"
			console.log(chunkArrayInGroups(JSON.parse(document.getElementById('answerText').value), parseInt(document.getElementById('answerText2').value)))
		}
		if (document.getElementById('slashFlick').checked == true) {
			document.getElementById('result').innerHTML = slasher(JSON.parse(document.getElementById('answerText').value), parseInt(document.getElementById('answerText2').value));
		}
		if (document.getElementById('mutation').checked == true) {
			document.getElementById('result').innerHTML = mutation(JSON.parse('["' + document.getElementById('answerText').value + '", "' + document.getElementById('answerText2').value + '"]'));
		}
		if (document.getElementById('falBounc').checked == true) {
			document.getElementById('result').innerHTML = bouncer(document.getElementById('answerText').value);
		}
		if (document.getElementById('seekDestroy').checked == true) {
			document.getElementById('result').innerHTML = destroyer(JSON.parse(document.getElementById('answerText').value), parseInt(document.getElementById('answerText2').value), parseInt(document.getElementById('answerText3').value));
		}
		if (document.getElementById('whereBel').checked == true) {
			document.getElementById('result').innerHTML = getIndexToIns(JSON.parse(document.getElementById('answerText').value), parseInt(document.getElementById('answerText2').value));
		}
		if (document.getElementById('caesCip').checked == true) {
			document.getElementById('result').innerHTML = rot13(document.getElementById('answerText').value);
		}
	}




















}
