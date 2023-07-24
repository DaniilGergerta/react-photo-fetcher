export const pushNewIds = (array: number[]) => {
  array.push(
    ...Array.from(
      { length: 4 },
      (_, index) => array[array.length - 1] + index + 1
    )
  );
};
