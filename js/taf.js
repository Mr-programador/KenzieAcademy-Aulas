// Variáveis para aplicar os resultados do teste. Você deverá categoriza-las como let/const, mas não deve alterar os valores.
let gender = process.argv[2]; // Genero 
let height = process.argv[3]; // Altura
let barReps = process.argv[4]; // Repetições com barra
let barSeconds = process.argv[5]; // Tempo das repetições com barra 
let abs = process.argv[6]; // Abdominais
let runDistance = process.argv[7]; // Distância da corrida
let runTime = process.argv[8]; // Tempo da corrida
let swimDistance = process.argv[9]; // Distância da natação
let swimTime = process.argv[10]; // Tempo da natação
let diveTime = process.argv[11]; // Tempo de mergulho

let passed = false;

// Critérios para aprovação no TAF
let minBarReps = 10;
let maxBarSeconds = 30;
let minAbs = 20;
let maxRunTime = 20;
let maxSwimTime = 10;
let maxDiveTime = 5;

// Verificar todos os critérios
if (
    (gender === "male" && barReps >= minBarReps && barSeconds <= maxBarSeconds) ||
    (gender === "female" && abs >= minAbs) ||
    runTime <= maxRunTime ||
    swimTime <= maxSwimTime ||
    diveTime <= maxDiveTime
  ) {
    passed = true;
  }
  
  // Resultado
  if (passed) {
    console.log("Parabéns! Você passou no TAF.");
  }
  
  console.log(passed);