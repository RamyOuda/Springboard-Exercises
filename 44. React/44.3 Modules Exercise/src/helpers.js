const choice = (items) => {
  const random = Math.floor(Math.random() * items.length);
  return items[random];
};

const remove = (items, item) => {
  const check = items.indexOf(item);
  return check !== -1 ? [items.splice(check, 1)] : undefined;
};

export { choice, remove };
