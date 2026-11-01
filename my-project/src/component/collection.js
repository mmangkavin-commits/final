const STORAGE_KEY = "bluephoenix_collection";

export function getCollection() {
  const saved = localStorage.getItem(STORAGE_KEY);

  if (!saved) {
    return [];
  }

  try {
    const collection = JSON.parse(saved);
    return Array.isArray(collection) ? collection : [];
  } catch {
    return [];
  }
}

export function toggleCollection(gameId) {
  const collection = getCollection();

  const exists = collection.includes(gameId);

  const updated = exists
    ? collection.filter((id) => id !== gameId)
    : [...collection, gameId];

  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));

  return updated;
}