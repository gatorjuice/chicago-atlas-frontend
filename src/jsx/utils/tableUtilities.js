function sortRowsByLengthAndName(rows) {
  return rows.sort((a, b) => {
    const prevCategoryName = a.data[0];
    const nextCategoryName = b.data[0];
    return (
      // Sort the rows by length first so things like 9th come before 10th and then by alphabetical order.
      prevCategoryName.length - nextCategoryName.length || prevCategoryName.localeCompare(nextCategoryName)
    );
  });
};

export default {
  sortRowsByLengthAndName: sortRowsByLengthAndName
};
