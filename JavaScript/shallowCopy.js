const originalEmployee = {
    name: "Dharmendra",
    role: "Developer",
    skills: ["Node.js", "React"] // ⚠️ Nested Array (Reference type)
};

// Spread Operator se Shallow Copy banaya
const shallowCopy = { ...originalEmployee };

// 1. Top-level property badal kar dekhte hain
shallowCopy.name = "Rahul";

// 2. Nested property (array) badal kar dekhte hain
shallowCopy.skills.push("TypeScript");

// --- Results Check Karte Hain ---
console.log(originalEmployee.name);   //  Output: "Dharmendra" (Top-level safe raha!)
console.log(originalEmployee.skills); //  Output: ["Node.js", "React", "TypeScript"] (Leaked/Badal gaya!)