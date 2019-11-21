const checkAir = (samples, threshold) => {
  let totalSamples = samples.length;
  let newThreshold = threshold * totalSamples;
  let pollution = 0;

  for(let i = 0; i < samples.length; i++){
    if(samples[i] == "dirty") pollution++;
  }

  if(pollution > newThreshold) return "Polluted";
  return "Clean";
}


const samples = ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty']
const threshold = 0.3
