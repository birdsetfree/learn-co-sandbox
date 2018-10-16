const letters = ["alpha", "gamma", "delta"]

[...letters.slice(0, 1), 'beta', ...letters.slice(1)]

console.log(letters)