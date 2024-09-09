type Empty = Record<PropertyKey, never>;

const fail1: Empty = null;
const fail2: Empty = undefined;
const fail3: Empty = false;
const fail4: Empty = 123;
const fail5: Empty = "lorem ipsum";
const fail6: Empty = [];
const fail7: Empty = { foo: "bar" };
const fail8: Empty = new Date();
const fail9: Empty = NaN;

const pass: Empty = {};
