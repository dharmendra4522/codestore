const originalEmployee = {
    name: "Dharmendra",
    role: "Developer",
    skills: ["Node.js", "React"]
};

// Modern structuredClone se Deep Copy banaya
const deepCopy = structuredClone(originalEmployee);

// Ab nested array me badlav karte hain
deepCopy.skills.push("Docker");

// --- Results Check Karte Hain ---
console.log(originalEmployee.skills); // Output: ["Node.js", "React"] (Original 100% SAFE hai!)
console.log(deepCopy.skills);         // Output: ["Node.js", "React", "Docker"] (Independent array!)
console.log(originalEmployee.skill);   