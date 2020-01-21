export function fromTimestamp(t: any) {
  if (!t) return new Date();
  if (t instanceof Date) return t;
  if (typeof t === 'string') return new Date(t);
  const seconds = t.seconds || t._seconds || 0;
  const nanoseconds = (t.nanoseconds || t._nanoseconds || 0) * 1e-9;
  return new Date((seconds + nanoseconds) * 1000);
}
