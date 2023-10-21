/* eslint-disable @typescript-eslint/no-explicit-any */
export const OtherUtil = {
  loadCallback,
}

function loadCallback<T extends (...P: any[]) => any>(
  cb?: T,
  ...data: Parameters<T>
): ReturnType<T> {
  return cb && cb(...data)
}
