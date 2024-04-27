export default function getListStudentIds(objectarray) {
  const arrayOfIds = [];
  if (!Array.isArray(objectarray)) {
    return arrayOfIds;
  }
  objectarray.map((x) => arrayOfIds.push(x.id));
  return arrayOfIds;
}
