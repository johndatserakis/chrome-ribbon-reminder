/**
 * Get an item from storage.
 *
 * @example
 * await get<string>('key', 'defaultValue)
 */
export const get = <T>(key: string, defaultValue?: T): Promise<T> =>
  new Promise((resolve, reject) => {
    chrome.storage.sync.get(key, (items) => {
      const value: T = items[key] ?? defaultValue;
      if (value !== undefined) {
        resolve(value);
      } else {
        reject(new Error(`No item found with key ${key}`));
      }
    });
  });

export const sendMessageToBackground = (message: unknown): Promise<unknown> =>
  new Promise((resolve, reject) => {
    chrome.runtime.sendMessage(message, (response) => {
      if (chrome.runtime.lastError) {
        // const errorString: string = chrome.runtime.lastError.toString();
        // TODO: Log error.
        reject(chrome.runtime.lastError);
      } else {
        resolve(response);
      }
    });
  });
