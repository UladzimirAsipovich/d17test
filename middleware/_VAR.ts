type PositiveNumber = number;
type WithPositiveParamsFX = (from?: PositiveNumber, until?: PositiveNumber) => RegExp;

/**
 * Функция, возвращающая регулярное выражение, включающее в себя, наличие ТОЛЬКО русских и английских букв БЕЗ наличия всех других символов.
 * @param from {number} Целое положительное число начиная от нуля
 * @param until {number} Целое положительное число начиная от нуля
 * @returns RegExp
 */
export const ONLY_RU_ENG_LETTERS_REGEXP: WithPositiveParamsFX = (from: number = 1, until: number = 50) => {
  if (!Number.isInteger(from) || !Number.isFinite(from) || from < 0) throw new Error('@form parameter was expect is finite and positive number');
  if (!Number.isInteger(until) || !Number.isFinite(until) || until < 0) throw new Error('@until parameter was expect is finite and positive number');
  return new RegExp(`^[A-Za-zА-Яа-яЁё]{${from},${until}}$`, 'i');
};

/**
 * @constant Регулярное выражение включающее в себя наличие ТОЛЬКО русских и английских букв БЕЗ наличия всех других символов.
 * @type RegExp
 */
export const BLR_PHONE: RegExp = /^\+375(25|29|33|44)\d{7}$/i;

/**
 * @constant Регулярное выражение включающее в себя наличие допустимого адреса E-mail.
 * @type RegExp
 */
export const EMAIL_REGEXP: RegExp = /^[-a-z0-9~!$%^&*_=+}{'?]+(\.[-a-z0-9~!$%^&*_=+}{'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|ru|name|net|org|pro|travel|ru|by|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;

/**
 * Функция, возвращающая регулярное выражение, включающее в себя, ЛЮБОЙ текст содержащий в себе символы КРОМЕ / { } [ ]
 * @param from {number} Целое положительное число начиная от нуля
 * @param until {number} Целое положительное число начиная от нуля
 * @returns RegExp
 */
export const SAFETY_RU_ENG_TEXT_REGEXP: WithPositiveParamsFX = (from: number = 1, until: number = 250) => {
  if (!Number.isInteger(from) || !Number.isFinite(from) || from < 0) throw new Error('@form parameter was expect is finite and positive number');
  if (!Number.isInteger(until) || !Number.isFinite(until) || until < 0) throw new Error('@until parameter was expect is finite and positive number');
  return new RegExp(`^[\\w+\\s+А-ЯЁ^?!@(),\\.~;=%&\\-]{${from},${until}}$`, 'i');
};