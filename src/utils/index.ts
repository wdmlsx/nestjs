import { stat } from 'fs';

export function file_size(filePath: string): Promise<number> {
  return new Promise((resolve, reject) => {
    stat(filePath, (err, stats) => {
      if (err) reject(err);

      resolve(stats.size);
    });
  });
}
