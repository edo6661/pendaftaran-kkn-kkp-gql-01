export const parseDate = (dateStr?: string): Date | null => {
  const date = dateStr ? new Date(dateStr) : null;

  return isNaN(date?.getTime()!) ? null : date;
};
