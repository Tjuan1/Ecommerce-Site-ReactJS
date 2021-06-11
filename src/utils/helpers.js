export const getUniqueValues = (data, type) => {
    let unique = data.map((item) => item[type])
    // we flatten the array so that we don´t get an array of arrays
    if (type === 'category') {
        unique = unique.flat()
      }
    if (type === 'colors') {
      unique = unique.flat()
    }

    return ['All', ...new Set(unique)]
  }
