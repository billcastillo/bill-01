export const formatDate = (dateToFormat) => {
  const newDate = new Date(dateToFormat);

  const day = newDate.getDate();
  const month = new Intl.DateTimeFormat("en-US", { month: "long" }).format(
    newDate
  );
  const year = newDate.getFullYear();

  return `${month} ${day}, ${year}`;
};
