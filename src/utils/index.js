const showFormattedDate = (date) => {
  const tanggal = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return new Date(date).toLocaleDateString('id-ID', tanggal);
};

export { showFormattedDate };
