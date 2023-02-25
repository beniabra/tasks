/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (!numbers.length) {
        return [];
    }
    if (numbers.length == 1) {
        return [...numbers, ...numbers];
    }
    return [numbers[0], numbers[numbers.length - 1]];
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    return numbers.map((value: number): number => value * 3);
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    if (!numbers.length) {
        return [];
    }
    return numbers.map((value: string): number =>
        Number.isNaN(Number(value)) ? 0 : Number(value)
    );
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    if (!amounts.length) {
        return [];
    }
    const new_amounts: string[] = amounts.map((value: string): string =>
        value.charAt(0) === "$" ? value.substring(1) : value
    );
    return new_amounts.map((value: string): number =>
        Number.isNaN(Number(value)) ? 0 : Number(value)
    );
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    if (!messages.length) {
        return [];
    }
    const remove_question: string[] = messages.filter(
        (message: string): boolean => message.charAt(message.length - 1) !== "?"
    );
    return remove_question.map((message: string): string =>
        message.charAt(message.length - 1) === "!"
            ? message.toUpperCase()
            : message
    );
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    let shortWords: string[];
    // eslint-disable-next-line prefer-const
    shortWords = words.filter((word: string): boolean => word.length < 4);
    return shortWords.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (!colors.length) {
        return true;
    }
    return colors.every(
        (color: string): boolean =>
            color === "red" || color === "blue" || color === "green"
    );
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (!addends.length) {
        return "0=0";
    }
    let result: string;
    result = "";
    result += addends.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0
    );
    result += "=";
    result += addends.join("+");
    return result;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    if (!values.length) {
        return [0];
    }
    let first_negative: number;
    if (values.every((value: number): boolean => value >= 0)) {
        first_negative = values.length;
    } else {
        first_negative = values.findIndex(
            (value: number): boolean => value < 0
        );
    }
    const copy1: number[] = [...values];
    const copy2: number[] = [...values];
    const positives: number[] = copy1.splice(0, first_negative);
    const sum: number = positives.reduce(
        (total: number, num: number) => total + num,
        0
    );
    copy2.splice(first_negative + 1, 0, sum);
    return copy2;
}
