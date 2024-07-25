export const parseDate = (dateStr?: string): Date | null =>
  dateStr ? new Date(dateStr) : null;
