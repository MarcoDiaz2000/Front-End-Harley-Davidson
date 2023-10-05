export default (allItems, reservation) => {
  const item = allItems.find((item) => item.id === reservation.item_id);
  return item ? item.image_url : 'Item not found'; // You can handle not found case here
};
