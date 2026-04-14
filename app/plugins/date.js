export default defineNuxtPlugin(() => {
  const formatDate = (dateString) => {
    if (!dateString) return "";

    const safeDate = dateString.replace(" ", "T");
    const date = new Date(safeDate);

    if (isNaN(date)) return "";

    return new Intl.DateTimeFormat("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }).format(date);
  };

  const formatTime = (dateString) => {
    if (!dateString) return "";

    const safeDate = dateString.replace(" ", "T");
    const date = new Date(safeDate);

    if (isNaN(date)) return "";

    return new Intl.DateTimeFormat("en-GB", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    }).format(date);
  };

  return {
    provide: {
      date: formatDate,
      time: formatTime,
    },
  };
});
