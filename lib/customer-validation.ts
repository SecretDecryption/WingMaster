export function cleanDisplayName(value: string) {
  const name = value.trim().replace(/\s+/g, ' ');
  let hasControlCharacter = false;
  for (let index = 0; index < name.length; index += 1) {
    const code = name.charCodeAt(index);
    if (code < 32 || code === 127) hasControlCharacter = true;
  }
  if (name.length < 1 || name.length > 60 || hasControlCharacter) {
    throw new Error('Enter a name between 1 and 60 characters.');
  }
  return name;
}

export function cleanEmail(value: string) {
  const email = value.trim();
  if (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw new Error('Enter a valid email address.');
  }
  return email;
}

export function cleanCode(value: string) {
  const code = value.replace(/\s/g, '');
  if (!/^\d{6,10}$/.test(code)) throw new Error('Enter the full code from your email.');
  return code;
}
