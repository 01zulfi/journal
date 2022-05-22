const formatDate = (toBeFormatted: Date): string => {
  const date = new Date(toBeFormatted);
  const options = {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  } as const;
  return date.toLocaleDateString('en-us', options);
};

export default formatDate;
