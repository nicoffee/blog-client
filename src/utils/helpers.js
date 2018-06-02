export const formatDate = date => {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  return new Date(Date.parse(date)).toLocaleDateString('en-US', options);
};

export const sortPostsByDate = posts => {
  const compare = (a, b) => {
    if (Date.parse(a.published) < Date.parse(b.published)) return 1;
    if (Date.parse(a.published) > Date.parse(b.published)) return -1;
    return 0;
  };

  return posts.sort(compare);
};

export const loadTheme = () => localStorage.getItem('theme');
