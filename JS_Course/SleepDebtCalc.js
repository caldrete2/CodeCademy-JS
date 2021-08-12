/*
The program will determine the actual and ideal hours of sleep for each night of the last week.

Finally, it will calculate, in hours, how far you are from your weekly sleep goal.
*/

//accept a day as an argument and return the number of hours you slept that night.
const getSleepHours = day => {
  day = day.toLowerCase()
  let hours = 0

  switch(day) {
    case 'monday':
      hours = 8
      break
    case 'wednesday':
      hours = 7
      break
    case 'friday':
      hours = 6
      break
    default:
      hours = 5
  }
  return hours
}

//for each day of the week add the results together and return the sum
const getActualSleepHours = () => {
  const week = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday']

  let totalHours = 0

  week.map(day => {
    totalHours += getSleepHours(day)
  })
  return totalHours
}

//ideal hours per night multiplied by 7.
const getIdealSleepHours = hrs => { return hrs * 7 }

//calculate sleep debt.
const calculateSleepDebt = () => {
  const actualHours = getActualSleepHours()
  const idealHours = getIdealSleepHours(8)

  if(actualHours === idealHours) { 
    return 'Perfect amount of sleep'
  }
  
  const result = actualHours - idealHours

  return result > 0? 
    `More sleep than needed, ${result} hrs extra`: 
    `Get some rest, ${result * -1} more hrs needed`
}

console.log(calculateSleepDebt())
