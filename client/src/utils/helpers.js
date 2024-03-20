export function idbPromise(teamName, method, object) {
  return new Promise((resolve, reject) => {
    const request = window.indexedDB.open("project_team_db", 1);
    let db, tx, store;
    request.onupgradeneeded = function (e) {
      const db = request.result;
      db.createObjectStore("projects", { keyPath: "_id" });
      db.createObjectStore("categories", { keyPath: "_id" });
    };

    request.onsuccess = function (e) {
      db = request.result;
      tx = db.transaction(teamName, "readwrite");
      store = tx.objectStore(teamName);

      db.onerror = function (e) {
        console.log(`There wa an error: ${e.target.error}`);
      };

      switch (method) {
        case "put":
          store.put(object);
          resolve(object);
          break;
        case "get":
          const all = store.getAll();
          all.onsuccess = function () {
            resolve(all.result);
          };
        case "delete":
          store.delete(object._id);
          break;
        default:
          console.log("no valid method");
          break;
      }

      tx.oncomplete = function () {
        db.close();
      };
    };
  });
}
