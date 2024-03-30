import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const list = [];
  const classroom1 = new ClassRoom(19);
  const classroom2 = new ClassRoom(20);
  const classroom3 = new ClassRoom(34);
  list.push(classroom1);
  list.push(classroom2);
  list.push(classroom3);
  return list;
}
