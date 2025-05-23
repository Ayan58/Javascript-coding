const subjects = ['Physics', 'Chemistry', 'Mathematics']

// to find out elements in specific position

console.log(subjects[0]);

// to find out element is in the array or not

console.log(subjects.includes('CSE'));

// finding position of element
console.log(subjects.indexOf('Physics'));

// to add elements in array

subjects.push("CSE");
console.log(subjects)

// to remove elements from array

subjects.pop("CSE");
console.log(subjects)

// to add elements in first position

subjects.unshift("CSE");
console.log(subjects)

// to remove elements from from position

subjects.shift("CSE");
console.log(subjects)

// slice
console.log(subjects.slice(1,2));
console.log(`after slice: ${subjects}`);


// splice

console.log(subjects.splice(1,2));
console.log(`after splice: ${subjects}`);
console.log(typeof subjects)

//join

console.log(subjects.join())
console.log(typeof subjects.join())
