// a) Use Object.preventExtensions to prevent any further additions of properties to the student object
const student = { name: 'John', age: 20 };
Object.preventExtensions(student);

// b) Use Object.isExtensible to check if the student object is extensible and store the result in a variable called extensibleStatus
const extensibleStatus = Object.isExtensible(student);

// c) Create a new object called teacher with a 'subject' property set to 'Math'
const teacher = { subject: 'Math' };

// d) Use Object.seal to seal the teacher object, preventing any additions or deletions of properties
Object.seal(teacher);

// e) Use Object.isSealed to check if the teacher object is sealed and store the result in a variable called sealedStatus
const sealedStatus = Object.isSealed(teacher);

// f) Print the extensibleStatus and sealedStatus to the console
console.log('Extensible Status:', extensibleStatus);
console.log('Sealed Status:', sealedStatus);
