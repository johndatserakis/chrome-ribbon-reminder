type UpdateCriteria<T> = (item: T) => boolean;

export const updateObjectInArray = <T>(
  array: T[],
  updatedObject: T,
  criteria: UpdateCriteria<T>,
): T[] => {
  const index = array.findIndex(criteria);
  if (index === -1) {
    return array;
  }

  const clonedArray = [...array];
  clonedArray[index] = { ...updatedObject };

  return clonedArray;
};
