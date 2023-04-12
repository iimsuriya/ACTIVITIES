let strings="Suffren was a predreadnought battleship built for the French Navy and completed in 1902. The ship was assigned to the Mediterranean Squadron for most of her career and often served as a flagship. She twice collided with French ships and twice had propeller shafts break before the start of World War I in 1914. Suffren was assigned to the naval operations off the Dardanelles, participating in a series of attacks on Ottoman fortifications. She was moderately damaged on 18 March 1915 and was sent to Toulon for repairs. While en route to Lorient for a refit, Suffren was torpedoed off Lisbon by a German submarine on 26 November 1916 and sunk with all hands. This photograph shows Suffren off Toulon in October 1911."
const words = (str) => {
    return str.split(/\s+/);
  };
  
  const wordFrequency = (wordsArray) => {
    return wordsArray.reduce((acc, cur) => {
      acc[cur] = (acc[cur] || 0) + 1;
      return acc;
    }, {});
  };
  console.log(words(strings).length);
  console.log(wordFrequency(words(strings)));