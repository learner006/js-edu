/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
    focus = 'family', 
    knowsProgramming = true,
    config = {family: 4}
    ) {
    	let hoursForElementary = 500;
    	let hoursForJS = 800;

    	let hoursTotal = 800;
    	if (!knowsProgramming)
    		hoursTotal += hoursForElementary;

    	let hoursToSpendPerWeek = config[focus];

    	return Math.ceil(hoursTotal / hoursToSpendPerWeek);
  };